import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      {/* footer */}
      <Footer />
    </main>
  )
}
