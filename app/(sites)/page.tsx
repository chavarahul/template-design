import Navbar from "../components/common/navbar";
import { About, Features, Hero } from "../components/landing-components/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Features />
    </>
  );
}
