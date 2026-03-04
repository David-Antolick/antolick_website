import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Infrastructure from "@/components/Infrastructure";
import ConstellationDivider from "@/components/ConstellationDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <ConstellationDivider />
      <Projects />
      <ConstellationDivider />
      <Infrastructure />
      <ConstellationDivider />
      <About />
    </>
  );
}
