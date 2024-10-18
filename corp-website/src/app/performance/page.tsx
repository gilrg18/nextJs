//folder name is the route name f.e.: http://localhost:3000/performance
import performanceImg from "public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero imgData = {performanceImg} imgAlt ="welding" title="Performance"/>
  );
}