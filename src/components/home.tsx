import { Data } from "@/lib/interfaces";

const Home = (data: Data | null) => {
  console.log(data);
  return (
    <div className="w-80">
      <h2 className="text-xl">Hello there, {data?.firstName} 👋</h2>
      <p>Here is your data: </p>
    </div>
  );
};

export default Home;
