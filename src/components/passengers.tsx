import { Passenger } from "@/lib/interfaces";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useState } from "react";
import { RxCaretSort } from "react-icons/rx";
import { Button } from "./ui/button";

const Passengers = (passengers: [Passenger] | undefined) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">All saved passengers by you</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <RxCaretSort className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          {passengers?.map((passenger: Passenger) => (
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              {passenger.name} - {passenger.gender}
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default Passengers;
