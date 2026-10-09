import Hero from "./components/hero";
import PriceDown from "./components/PriceDown";
import PriceHike from "./components/PriceHike";
import AllProducts from "./components/AllProducts";
export default function Home() {
  return <div>
    <Hero></Hero>
    <PriceHike/>
    <PriceDown/>
    <AllProducts/>
    
  </div>;
}
