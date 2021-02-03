import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Reservation from "./components/Reservation";
import PrendreRdv from "./components/PrendreRdv";
import FamilleRoyal from "./components/FamilleRoyal";
import Contact from "./components/Contact";
import BiensRoyaux from "./components/BIensRoyaux";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/reservation" component={Reservation} />
            <Route path="/prendrerdv" component={PrendreRdv} />
            <Route path="/familleroyal" component={FamilleRoyal} />
            <Route path="/biensroyaux" component={BiensRoyaux} />
            <Route path="/contactus" component={Contact} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
