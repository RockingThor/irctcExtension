import "./App.css";
import Initial from "./components/initial";
import { useRecoilState } from "recoil";
import { dataState } from "./recoil/atom";

function App() {
  const [data, setData] = useRecoilState(dataState);
  console.log(data);
  chrome.storage?.local.get(["irctcData"]).then((result) => {
    setData(result.irctcData);
  });
  return <Initial />;
}

export default App;
