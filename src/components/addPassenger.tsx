import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRecoilState } from "recoil";
import { dataState } from "@/recoil/atom";
import { Data, Passenger } from "@/lib/interfaces";

interface ChildProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddPassenger = ({ setIsOpen }: ChildProps) => {
  const [data, setData] = useRecoilState(dataState);
  const formSchema = z.object({
    name: z.string().min(1).max(50),
    age: z.string().min(1).max(3),
    gender: z.string().refine((value) => ["male", "female"].includes(value)),
    seatType: z.string().refine((value) => ["Window", "SL"].includes(value)),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      gender: "",
      seatType: "",
    },
  });

  const onSubmit = (p: z.infer<typeof formSchema>) => {
    const passenger: Passenger = {
      name: p.name,
      age: p.age,
      gender: p.gender,
      seatType: p.seatType,
    };
    if (data?.passengers) {
      data.passengers.push(passenger);
      setData(data);
    } else if (data != null) {
      const newData: Data = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobile: data.mobile,
        age: data.age,
        gender: data.gender,
        passengers: [passenger],
      };
      setData(newData);
    }
    chrome.storage.local.set({ irctcData: data }).then(() => {
      setData(data);
      setIsOpen(false);
    });
  };

  return (
    <div className="w-80">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="" placeholder="name" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="age" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Input placeholder="(male or female)" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="seatType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seat Type</FormLabel>
                <FormControl>
                  <Input placeholder="SL or Window" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddPassenger;
