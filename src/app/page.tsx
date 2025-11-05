"use client";
import About from "./about/page";
import Benefits from "./benefits/page";
import Hero2 from "./components/Hero2";
import Contact from "./contact/page";
import Products from "./products/page";
import Varieties from "./varieties/page";
import Map from "./components/Map";
import FromFarm from "./components/FromFarm";
import Experties from "./experties/page";


export default function Home() {
  return (
    <main>
      <Hero2/>
      <About/>
      <Products/>
      <Varieties/>
      <Benefits/>
      <FromFarm/>
      <Map/>
      <Experties/>
      <Contact/>
    </main>
  );
}
