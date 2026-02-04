"use client";

import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import type { Layer, GeoJSON as LeafletGeoJSON } from "leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import "leaflet/dist/leaflet.css";

/* ===================== TYPES ===================== */

type DistrictData = {
  name: string;
  priceLevel: "high" | "medium" | "low";
  avgPrice: number;
};

type DistrictProps = {
  name: string;
};

type Props = {
  selectedDistrict: string | null;
  onSelectDistrict: (name: string) => void;
  data: DistrictData[];
  geoJsonData: FeatureCollection<Geometry, DistrictProps>;
};

/* ===================== MAP EFFECT ===================== */
/* ცალკე კომპონენტი – ასე სწორად მუშაობს react-leaflet */

function FitToDistrict({
  selectedDistrict,
  layersRef,
}: {
  selectedDistrict: string | null;
  layersRef: React.MutableRefObject<Record<string, Layer>>;
}) {
  const map = useMap();

  useEffect(() => {
    if (!selectedDistrict) return;

    const layer = layersRef.current[selectedDistrict];
    if (!layer || !("getBounds" in layer)) return;

    map.fitBounds((layer as LeafletGeoJSON).getBounds(), {
      padding: [40, 40],
      maxZoom: 14,
    });
  }, [selectedDistrict, map, layersRef]);

  return null;
}

/* ===================== MAIN COMPONENT ===================== */

export default function TbilisiMap({
  selectedDistrict,
  onSelectDistrict,
  data,
  geoJsonData,
}: Props) {
  const layersRef = useRef<Record<string, Layer>>({});

  const getColor = (level: DistrictData["priceLevel"]) => {
    if (level === "high") return "#ef4444";
    if (level === "medium") return "#facc15";
    return "#9ca3af";
  };

  const styleFeature = (feature?: Feature<Geometry, DistrictProps>) => {
    const name = feature?.properties?.name;
    if (!name) return { fillOpacity: 0, opacity: 0 };

    if (!selectedDistrict) {
      return { fillOpacity: 0, opacity: 0 };
    }

    if (name !== selectedDistrict) {
      return { fillOpacity: 0, opacity: 0 };
    }

    const district = data.find((d) => d.name === name);

    return {
      fillColor: district ? getColor(district.priceLevel) : "#3b82f6",
      fillOpacity: 0.6,
      weight: 2,
      color: "#1f2937",
    };
  };

  const onEachFeature = (
    feature: Feature<Geometry, DistrictProps>,
    layer: Layer,
  ) => {
    const name = feature.properties?.name;
    if (!name) return;

    layersRef.current[name] = layer;

    layer.on({
      click: () => onSelectDistrict(name),
    });

    layer.bindTooltip(name, { sticky: true });
  };

  return (
    <MapContainer
      center={[41.7151, 44.8271]}
      zoom={11}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GeoJSON
        data={geoJsonData}
        style={styleFeature}
        onEachFeature={onEachFeature}
      />

      <FitToDistrict
        selectedDistrict={selectedDistrict}
        layersRef={layersRef}
      />
    </MapContainer>
  );
}
