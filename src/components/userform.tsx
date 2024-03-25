import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { useState } from "react"




const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 3 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 3 characters.",
  }),
  registrationnumber: z.string().min(2, {
    message: "Registration must be at least 8 characters.",
  }),
  studyprogram: z.string().min(2, {
    message: "Study Program must be at least 5 characters.",
  }),
  academicyear: z.string().min(2, {
    message: "Academic Year must be at least 4 characters. (Ex: 2023)",
  }),
  email: z.string().min(2, {
    message: "Email must be valid email address",
  }),
  faculty: z.string().min(2, {
    message: "Faculty must be at least 5 characters.",
  })
})

export default function ProfileForm() {
  const [issumbit, setIsSubmit] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      registrationnumber: "",
      studyprogram: "",
      faculty: "",
      academicyear: "",
      email: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>)  {
    setIsSubmit(true);
    const valuesWithIntegers = {
      ...values,
      registrationnumber: parseInt(values.registrationnumber),
      academicyear: parseInt(values.academicyear),
    };
  
    try {
      const response = await fetch("https://206.189.138.245/v1/users/", {
        method: "POST",
        headers: {
          accept: "Accept: application/json"
        },
        body: JSON.stringify(valuesWithIntegers)

      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Something went wrong. Try again");
      }
      setSubmitStatus("Submission is successful! 🚀");
    } catch(error) {
      setSubmitStatus((error as Error).message);
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="border-2 border-gray-300 rounded-lg p-4 w-2/3 space-y-6">
      <h2 className="text-lg font-bold text-white items-center">Tell us your self 😊</h2>
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormDescription>
                Enter your First Name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Andrew" {...field} />
              </FormControl>
              <FormDescription>
                Enter your Last Name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registrationnumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration Number</FormLabel>
              <FormControl>
                <Input placeholder="7235422" {...field}/>
              </FormControl>
              <FormDescription>
                Enter your Registration Number.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="academicyear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Academic Year</FormLabel>
              <FormControl>
                <Input placeholder="2023" {...field}/>
              </FormControl>
              <FormDescription>
                Enter your Academic Year (Just insert year ex: 2023).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="studyprogram"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Study Program</FormLabel>
              <FormControl>
                <Input placeholder="Bachelor of Software Engineering" {...field} />
              </FormControl>
              <FormDescription>
                Enter your Study Program.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="faculty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Faculty</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your Faculty" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Faculty of Engineering Technology">Faculty of Engineering Technology</SelectItem>
                  <SelectItem value="Faculty of Natural Science">Faculty of Natural Science</SelectItem>
                  <SelectItem value="Faculty of Human Studies">Faculty of Human Studies</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can select your faculty.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@andrew.dev" {...field} />
              </FormControl>
              <FormDescription>
                Enter your valid Email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="default" type="submit">Submit</Button>
        {submitStatus && <p className="mt-4">{submitStatus}</p>}
      </form>
    </Form>
    </>
  )
}
