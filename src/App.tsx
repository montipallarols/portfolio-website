import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";
import Projects from "./pages/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/" component={Projects}></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
