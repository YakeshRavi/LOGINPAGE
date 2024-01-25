"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod" ;
import { useForm } from "react-hook-form" ;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input" ;
import { Form ,FormField ,FormControl , FormItem , FormDescription , FormLabel , FormMessage } from "@/components/ui/form";
import { Card , CardHeader , CardTitle , CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email('Enter Valid Email'),
  password : z.string().min(6 , 'Password must have 6 characters' )
})

const email =[  
  {
    email:"yakeshravi@gmail.com",
    password :"qwerty"
  },
  {
    email:"tarunks@gmail.com",
    password:"poiuyt"
  },
  {
    email:"mavivask@gmail.com",
    password:"asdfgh"
  },
  {
      email:"hariprasath@gmail.com",
      password: "assdfgh"
  }
]

export default function Home(){

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    if(values.email){
      router.push('/csignin')
    }
    else{
      router.push('/signin')
    }
    
    console.log(values ,"signed in")
  }

  return (
    <Form {...form}>
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-2">
        <Card className="px-6 bg-slate-100">
  <CardHeader>
    <CardTitle className="grid gap-4 justify-center">LOGIN</CardTitle>
    <CardDescription className="grid gap-4 justify-center">User's Login Page</CardDescription>
  </CardHeader>
  <div >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel >Email</FormLabel>
              <FormControl>
                
                <Input placeholder="m@example.com" {...field} type="email" />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter your Password" {...field} type="password" />
              </FormControl>
              <FormDescription>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}/>
          </div>
        <Button  className="w-full mt-4 justify-center" type="submit">
        <Link href="/csignin">Sign In</Link>
          </Button>
        </Card>
        </div>
      </form>
    </Form>
  )
}

