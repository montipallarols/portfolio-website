import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
