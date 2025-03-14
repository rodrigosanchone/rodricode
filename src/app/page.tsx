import "normalize.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Banner from "./components/banner1/banner";
import Services from "./components/servicess/services";
import Banner2 from "./components/banner2/banner2";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Banner></Banner>
      <Services></Services>
      <Banner2></Banner2>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}
