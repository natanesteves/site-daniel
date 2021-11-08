import "./App.css";
import Navbar from "./lib/components/Navbar";
import Footer from "./lib/components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Disc from "./pages/disc"
import NaturezaCantada from "./pages/Naturezacantada";
import BaileArtesanal from './pages/BaileArtesanal';
import Caroneiro from './pages/Caroneiro';
import FrutoBruto from './pages/FrutoBruto';
import MantaTropical from './pages/MantaTropical';
import Xapamuru from './pages/Xapamuru';
import Galery from "./pages/galery";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/disc" exact component={Disc}/>
          <Route path="/galery" exact component={Galery}/>
          <Route path="/Naturezacantada" exact component={NaturezaCantada}/>
          <Route path="/BaileArtesanal" exact component={BaileArtesanal}/>
          <Route path="/Caroneiro" exact component={Caroneiro}/>
          <Route path="/FrutoBruto" exact component={FrutoBruto}/>
          <Route path="/MantaTropical" exact component={MantaTropical}/>
          <Route path="/Xapamuru" exact component={Xapamuru}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
