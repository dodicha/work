// "use client";

// import React, { useState, useEffect } from "react";

// export default function page() {
//   const [counter, setCounter] = useState<number>(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounter((prev) => (prev + 1) % 5);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return <div>{counter}</div>;
// }
