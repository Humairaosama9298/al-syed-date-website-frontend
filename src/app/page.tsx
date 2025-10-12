"use client";
import About from "./about/page";
import Benefits from "./benefits/page";
import Hero from "./components/Hero";
import Contact from "./contact/page";
import Products from "./products/page";
import Varieties from "./varieties/page";
import Map from "./components/Map";
import FromFarm from "./components/FromFarm";
import Experties from "./experties/page";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Varieties/>
      <Benefits/>
      <Products/>
      <FromFarm/>
      <Map/>
      <Experties/>
      <Contact/>
    </main>
  );
}
