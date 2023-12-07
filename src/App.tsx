import { useState } from "react";
import "./App.css";
import Home from "./components/home";
import Register from "./components/register";
import { Data } from "./lib/interfaces";

function App() {
  const [data, setData] = useState<Data | null>(null);
  chrome.storage.local.get(["irctcData"]).then((result) => {
    setData(result.irctcData);
    if (data) {
      return <Home {...data} />;
    } else {
      return <Register />;
    }
  });
}

export default App;
