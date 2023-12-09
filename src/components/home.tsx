import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { useState } from "react";
import { Button } from "./ui/button";
import Passengers from "./passengers";
import { z } from "zod";
import { useRecoilValue } from "recoil";
import { currentData } from "@/recoil/selector";

const Home = () => {
  const data = useRecoilValue(currentData);
  const [isOpen, setIsOpen] = useState(false);
  const passengers = data?.passengers;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formSchema = z.object({
    name: z.string().min(1).max(50),
    age: z.string().min(1).max(3),
    gender: z.string().refine((value) => ["male", "female"].includes(value)),
    seatType: z.string().refine((value) => ["window", "aisle"].includes(value)),
  });

  console.log(formSchema);

  return (
    <div className="w-80">
      <h2 className="text-xl">Hello there, {data?.firstName} 👋</h2>
      {passengers && <Passengers {...passengers} />}
      <div>
        <Button className="mt-2" onClick={() => setIsOpen(!isOpen)}>
          Add Passenger
        </Button>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-80 space-y-2"
        >
          <CollapsibleContent className="space-y-2 mt-2">
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              @radix-ui/colors
            </div>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              @stitches/react
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default Home;
