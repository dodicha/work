"use client";

import { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import type { FeatureCollection, Feature } from "geojson";
import "leaflet/dist/leaflet.css";

/* ================= TYPES ================= */

type Year = "2024" | "2025";

type Condition =
  | "Needs Renovation"
  | "In Average Condition"
  | "Fully Renovated";

type PriceRange = {
  min: number;
  max: number;
};

type ChangeInfo = {
  minPercent: number;
  maxPercent: number;
  trend: "up" | "down" | "stable";
};

type ApartmentConditionData = {
  "2024": PriceRange;
  "2025": PriceRange;
  change: ChangeInfo;
};

type District = {
  id: string;
  name: string;
  realEstate: {
    apartment: Record<Condition, ApartmentConditionData>;
  };
};

type DistrictsData = {
  districts: District[];
};

/* ================= COMPONENT ================= */

type Props = {
  year: Year;
  condition: Condition;
};

export default function DistrictMap({ year, condition }: Props) {
  const [districtsData, setDistrictsData] = useState<DistrictsData | null>(
    null,
  );

  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);

  /* ---------- LOAD DATA ---------- */
  useEffect(() => {
    fetch("/data/districts_map_data.json")
      .then((res) => res.json())
      .then((data: DistrictsData) => setDistrictsData(data))
      .catch(console.error);

    fetch("/data/tbilisiDistricts.geojson")
      .then((res) => res.json())
      .then((data: FeatureCollection) => setGeoData(data))
      .catch(console.error);
  }, []);

  if (!districtsData || !geoData) {
    return <div>Loading map...</div>;
  }

  const getColorByPrice = (price: number): string => {
    if (price > 2200) return "#1b7837";
    if (price > 1700) return "#5aae61";
    if (price > 1200) return "#d9f0d3";
    return "#fddbc7";
  };

  return (
    <MapContainer
      center={[41.7151, 44.8271]}
      zoom={11}
      style={{ height: "500px", width: "100%" }}
    >
      <GeoJSON
        data={geoData}
        style={(feature?: Feature) => {
          if (!feature) return {};

          const id = (feature.properties as { id: string }).id;

          const district = districtsData.districts.find((d) => d.id === id);

          if (!district) return { fillOpacity: 0 };

          const price = district.realEstate.apartment[condition][year].min;

          return {
            fillColor: getColorByPrice(price),
            weight: 1,
            color: "#444",
            fillOpacity: 0.75,
          };
        }}
        onEachFeature={(feature, layer) => {
          const id = (feature.properties as { id: string }).id;
          const district = districtsData.districts.find((d) => d.id === id);

          if (!district) return;

          const info = district.realEstate.apartment[condition];

          layer.bindTooltip(
            `
            <strong>${district.name}</strong><br/>
            ${year} Min: ${info[year].min}$<br/>
            ${year} Max: ${info[year].max}$<br/>
            Trend: ${info.change.trend}
            `,
            { sticky: true },
          );
        }}
      />
    </MapContainer>
  );
}
