import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, {
      error: "First Name is too short",
    })
    .max(50),
  lastName: z.string().optional(),
  email: z.email(),
  phone: z
    .string({ error: "Phone Number must be string" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
  message: z
    .string()
    .min(5, {
      error: "Message is too short",
    })
    .max(200),
});

const Contact = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    const contactFormInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      message: data.message,
    };

    try {
      console.log(contactFormInfo);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col md:flex-row px-6 md:px-24 gap-12 relative">
      <div className="w-full md:w-1/3 bg-gradient-to-b from-[#00786f] to-[#4cb9b3] text-white p-8 rounded-lg space-y-6">
        <h2 className="text-2xl font-semibold">Get in touch</h2>

        <div>
          <h3 className="font-medium">Visit us</h3>
          <p className="text-sm">
            Come say hello at our office HQ.
            <br />
            24/12, Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>

        <div>
          <h3 className="font-medium">Chat to us</h3>
          <p className="text-sm">
            Our friendly team is here to help.
            <br />
            <a href="mailto:hello@runner.com" className="underline">
              hello@runner.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-medium">Call us</h3>
          <p className="text-sm">
            Sat–Thurs from 9am to 6pm
            <br />
            (+880) 19-1111-2222
          </p>
        </div>

        <div>
          <h3 className="font-medium">Social media</h3>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="#">🌐</a>
            <a href="#">💼</a>
            <a href="#">📸</a>
            <a href="#">🐦</a>
          </div>
        </div>
      </div>

      {/* <!-- Right Side - Contact Form --> */}
      <div className="w-full md:w-2/3 space-y-6 bg-white dark:bg-slate-900 border-0 dark:border-2 p-5 rounded-lg shadow-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public first name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is your public Last name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="john.doe@company.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your email input.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="01819112233" type="text" {...field} />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your phone number input.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Type your message here."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="sr-only">
                    This is your message input.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-[#00786f] hover:bg-[#005e57] text-white py-3 rounded"
            >
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
