import { currentData } from "@/recoil/selector";
import { useRecoilValue } from "recoil";
import Home from "./home";
import Register from "./register";

const Initial = () => {
  const data = useRecoilValue(currentData);
  if (data) {
    return <Home />;
  } else {
    return <Register />;
  }
};

export default Initial;
