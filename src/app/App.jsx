import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Objective from "./components/Objective";
import Counter from "./components/Counter";
import AfterBefore from "./components/AfterBefore";
import slides from "../app/assets/data/CatsData";
import Donation from "./components/Donation";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Objective />
      <Counter />
      <AfterBefore slides={slides} />
      <Donation />
      <Footer />
    </>
  );
}

export default App;
