import "./App.css";
import { MainPage } from "./page/main";
import { DetailsPage } from "./page/details";
import { Switch, Route } from "react-router-dom";
import moon from "./assets/moon.jpg";
import { useState } from "react";

function App() {
  const [detail, setDetail] = useState({
    text: "Hotels",
    image: moon,
  });
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MainPage setDetail={setDetail} />
        </Route>
        <Route path="/details">
          <DetailsPage detail={detail} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
