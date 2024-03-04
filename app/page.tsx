import Image from "next/image";
import Header from "./components/header/page";
import Services from "./components/services/page";
import Testimonials
 from "./components/testimonials/page";
export default function Home() {
  return (
    <main>
      <Header/>
      <Services/>
      <Testimonials/>
    </main>
  );
}
