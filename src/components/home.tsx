import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRecoilValue } from "recoil";
import { currentData } from "@/recoil/selector";
import AddPassenger from "./addPassenger";
import DisplayPassengers from "./displayPassengers";
import DisplayTime from "./displayTime";

const Home = () => {
  const data = useRecoilValue(currentData);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-80">
      <h2 className="text-xl">Hello there, {data?.firstName} 👋</h2>
      <DisplayPassengers />
      <div>
        <Button className="mt-2" onClick={() => setIsOpen(!isOpen)}>
          Add Passenger
        </Button>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-80">
          <CollapsibleContent className="mt-2">
            <AddPassenger setIsOpen={setIsOpen} />
          </CollapsibleContent>
        </Collapsible>
        <DisplayTime />
      </div>
    </div>
  );
};

export default Home;
