import Navbar from "./components/Navbar"
import Header from "./components/Header";
import About from "./components/About";
import ServicesPrev from "./components/ServicesPrev";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <ServicesPrev />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
