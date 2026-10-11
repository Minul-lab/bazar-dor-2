import Hero from "./components/hero";
import PriceDown from "./components/PriceDown";
import PriceHike from "./components/PriceHike";
import AllProducts from "./components/AllProducts";
import SignInToast from "./components/signInToast";
export default function Home() {
  return <div>
    <SignInToast/>
    <Hero></Hero>
    <PriceHike/>
    <PriceDown/>
    <AllProducts/>
    
  </div>;
}
