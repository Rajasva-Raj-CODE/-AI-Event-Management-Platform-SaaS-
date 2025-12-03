import { Button } from "@/components/ui/button";
import { Divide } from "lucide-react";


export default function Home() {
  return (
   <div className="flex min-h-screen flex-col items-center justify-center p-24" >
    <Button variant="destructive">
      <Divide className="mr-2 h-4 w-4" />
      Hello World
    </Button>
   </div>
  );
}
