import { Passenger } from "@/lib/interfaces";
import { passengersData } from "@/recoil/selector";
import { useRecoilValue } from "recoil";

const DisplayPassengers = () => {
  const data = useRecoilValue(passengersData);
  return (
    <div className="w-70">
      {data?.map((passenger: Passenger) => (
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          `${passenger.name} - ${passenger.gender} - ${passenger.seatType}`
        </div>
      ))}
    </div>
  );
};

export default DisplayPassengers;
