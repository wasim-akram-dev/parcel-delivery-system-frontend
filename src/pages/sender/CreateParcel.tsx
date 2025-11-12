import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useCreateParcelMutation } from "@/redux/features/parcels/parcels.api";
import { ParcelType } from "@/types/parcelType";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { z } from "zod";

const parcelSchema = z.object({
  receiver_email: z.email(),
  fromAddress: z
    .string()
    .min(2, { error: "Please Provide From Address" })
    .max(50),
  toAddress: z.string().min(2, { error: "Please Provide To Address" }).max(50),
  parcelType: z.enum([
    ParcelType.DOCUMENTS,
    ParcelType.ELECTRONICS,
    ParcelType.FOODS,
    ParcelType.ACCESSORIES,
  ]),
  phone: z
    .string({ error: "Phone Number must be string" })
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    }),
  weight: z
    .string()
    .min(1, { error: "Please Provide Parcel Weight In Number" })
    .max(10),
  deliveryFee: z
    .string()
    .min(2, { error: "Please Provide Delivery Fee In Number" })
    .max(10),
});

const CreateParcel = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [createParcel] = useCreateParcelMutation();
  const { data: userInfo } = useUserInfoQuery(undefined);
  const navigate = useNavigate();
  console.log("data", userInfo);
  console.log("email", userInfo?.user?.email);
  const form = useForm<z.infer<typeof parcelSchema>>({
    resolver: zodResolver(parcelSchema),
    defaultValues: {
      receiver_email: "",
      fromAddress: "",
      toAddress: "",
      parcelType: ParcelType.DOCUMENTS,
      phone: "",
      weight: "",
      deliveryFee: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof parcelSchema>) => {
    const parcelInfo = {
      sender_email: userInfo?.user?.email,
      receiver_email: data.receiver_email,
      fromAddress: data.fromAddress,
      toAddress: data.toAddress,
      parcelType: data.parcelType,
      phone: data.phone,
      weight: parseFloat(data.weight),
      deliveryFee: parseFloat(data.deliveryFee),
    };

    try {
      console.log("parcelInfo", parcelInfo);
      const result = await createParcel(parcelInfo).unwrap();
      console.log(result);
      toast.success("Parcel created successfully");
      navigate("/sender/view-parcels");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={cn("flex flex-col gap-6 relative w-full h-full ", className)}
      {...props}
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="flex flex-col items-center gap-2 text-center my-5">
        <h1 className="text-2xl font-bold">Create A Parcel</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to create a parcel
        </p>
      </div>

      <div className="grid gap-6 w-full justify-center py-5 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="receiver_email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Receiver Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="jack.john@company.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fromAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>From Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Dhanmondi, Dhaka" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="toAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>To Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Chawk bazar, Barishal" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="01922334455" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="parcelType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Your Parcel Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="w-full">
                      <SelectTrigger>
                        <SelectValue placeholder="Select A Parcel Type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="DOCUMENTS">Documents</SelectItem>
                      <SelectItem value="ELECTRONICS">Electronics</SelectItem>
                      <SelectItem value="FOODS">Foods</SelectItem>
                      <SelectItem value="ACCESSORIES">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weight</FormLabel>
                  <FormControl>
                    <Input placeholder="2" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deliveryFee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Fee</FormLabel>
                  <FormControl>
                    <Input placeholder="100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateParcel;
