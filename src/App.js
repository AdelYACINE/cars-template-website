import Driver from "./component/driver/Driver";
import FindCar from "./component/find/FindCar";
import Footer from "./component/footer/Footer";
import Hero from "./component/hero/Hero";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FindCar />
      <Driver />
      <Footer />
    </div>
  );
}

export default App;
