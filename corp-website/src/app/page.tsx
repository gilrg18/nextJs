import homeImg from "public/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero imgData = {homeImg} imgAlt ="car factory" title="Gilberto Rogel García"/>
  );
}
//Image component helps avoid 'Layout/Content shifting' (when components move around depending on what loads first) 
//[Test slow connection/slow load times in browser]: f2 -> network -> tick 'Disable cache' -> Slow 4G

//Options for sizing the image:
//A. If using a local image, dimensions are taken from the imported image
console.log(homeImg); //Check image size, location, etc

//B. Assign a height and width to the image component
{/* <Image height={600} width={800} src = {homeImg} alt='asdf' /> */}

//C. Assign a'fill' prop, the image will expand to fill up the parent element.
{/* <Image fill src = {homeImg} alt='asdf' /> */}