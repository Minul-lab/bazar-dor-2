import Hero from "./components/hero";
import PriceDown from "./components/PriceDown";
import PriceHike from "./components/PriceHike";
export default function Home() {
  return <div>
    <Hero></Hero>
    <PriceHike/>
    <PriceDown/>
  </div>;
}
