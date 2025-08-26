"use client";

import React, { useEffect, useState } from "react";

export default function EpilogPage() {
  const [setup, setSetup] = useState(null);

  //   useEffect(() => {
  //     fetch("/projects/epilog/setup.json")
  //       .then((res) => res.json())
  //       .then((data) => setSetup(data));
  //   }, []);
  useEffect(() => {
    async function fetchSetup() {
      console.log(3);
      const data = await fetch("/setups.json");
      const json = await data.json();
      console.log(json);
    }
    fetchSetup();
  }, []);
  console.log("gareta");

  return (
    <div>
      {setup ? <pre>{JSON.stringify(setup, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
