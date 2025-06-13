"use client"
import Dugme from "./dugme"

export default function Home() {
  return (
    <>
    <Dugme tip="warning" onClick={() => alert("warning")}>neki teskt</Dugme> 
    <Dugme tip="not-warning" onClick={() => alert("not-warning")}>neki tekst</Dugme> 
    </>
  );
}
