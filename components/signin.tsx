import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
 const Home =()=> {
  return( 
    <div className="flex items-center justify-center justify-content-center ">
    <Card>
  <CardHeader>
    <CardTitle className="grid gap-4 justify-center">LOGIN</CardTitle>
    <CardDescription className="grid gap-4 justify-center">Customer's Login Page</CardDescription>
  </CardHeader>
  <CardContent>
  <div className="grid gap-4">
          <Label htmlFor="email">Email</Label>
          <Input id="email"  type="email" placeholder="m@example.com" />
        </div>
        <div className="flex grid gap-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password"/>
        </div>
  </CardContent>
  <CardFooter>
  <Button  asChild>
    <Link className="w-full" href="/signin">Signin</Link>
</Button>
  </CardFooter>
</Card>
</div>
  
  );
}
export default Home;


