import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Unauthorized = () => {
  return (
    <div className="h-svh flex flex-col items-center justify-center space-y-5">
      <p className="text-red-500">You Are Unauthorized...</p>
      <Button className="bg-[#00786f] hover:bg-[#005e57] text-white px-6 py-2 rounded cursor-pointer">
        <Link to="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default Unauthorized;
