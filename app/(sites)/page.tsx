import { Loader,Navbar } from "../components/common";
import { About, Features, Hero } from "../components/landing-components/index";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <div className="h-screen"></div>
    </>
  );
}
