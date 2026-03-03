import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ConstellationDivider from "@/components/ConstellationDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <ConstellationDivider />
      <About />
      <ConstellationDivider />
      <Projects />
    </>
  );
}
