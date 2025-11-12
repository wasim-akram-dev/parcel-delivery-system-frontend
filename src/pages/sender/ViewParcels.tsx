import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useCancelParcelMutation,
  useGetAllCreatedParcelsQuery,
} from "@/redux/features/parcels/parcels.api";
import type { IParcel } from "@/types";
import { toast } from "sonner";

const ViewAllCreatedParcels = () => {
  const { data: AllParcels, isLoading } =
    useGetAllCreatedParcelsQuery(undefined);
  console.log("AllParcels", AllParcels);
  const [cancelParcel] = useCancelParcelMutation();

  const handleCancelParcel = async (id: string) => {
    try {
      console.log("handleCancelParcel", id);
      const res = await cancelParcel(id).unwrap();
      console.log("res", res);
      if (res) {
        toast.success("Cancel Parcel Successfully");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("error", error);
      // const err = error as Error;
      toast("❌ Failed to cancel!", {
        description: error?.data?.message || "Something went wrong",
      });
    }
  };

  return isLoading ? (
    <div className="min-h-screen flex flex-col justify-center align-middle items-center gap-4">
      <Spinner />
    </div>
  ) : (
    <div className="mx-5 my-5">
      <Table className="">
        <TableHeader>
          <TableRow className="bg-gray-100 border">
            <TableHead className="border text-center">S.N</TableHead>
            <TableHead className="border text-center">tracking_Id</TableHead>
            <TableHead className="border text-center">Receiver Email</TableHead>
            <TableHead className="border text-center">To Address</TableHead>
            <TableHead className="border text-center">created_At</TableHead>
            <TableHead className="border text-center">Parcel Status</TableHead>
            <TableHead className="border text-center">Status Logs</TableHead>
            <TableHead className="border text-center">Cancel Parcel</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {AllParcels?.data.map((parcel: IParcel, index: number) => (
            <TableRow
              key={parcel._id}
              className={`text-center ${
                parcel?.parcel_status === "Cancelled" && "bg-slate-50"
              }`}
            >
              <TableCell className="font-medium border text-center">
                {index + 1}
              </TableCell>
              <TableCell className="font-medium border text-center">
                {parcel.trackingId}
              </TableCell>
              <TableCell className="border text-center">
                {parcel.receiver_email}
              </TableCell>
              <TableCell className="border text-center">
                {parcel.toAddress}
              </TableCell>
              <TableCell className="border text-center">
                {parcel.createdAt}
              </TableCell>
              <TableCell className="border text-center">
                {parcel.parcel_status}
              </TableCell>
              <TableCell className="border text-center">
                {parcel.statusLog.map((stat) => (
                  <div key={stat.timestamp}>
                    <span>Status: {stat.status},</span>
                    <span> Note: {stat.note}</span>
                  </div>
                ))}
              </TableCell>
              <TableCell className="border text-center">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      disabled={parcel?.parcel_status === "Cancelled"}
                      variant={"destructive"}
                      className="text-sm"
                    >
                      {parcel?.parcel_status === "Cancelled"
                        ? "Cancelled"
                        : "Cancel"}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action will cancel this parcel from your list.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Don't Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleCancelParcel(parcel?._id)}
                      >
                        Continue to Cancel
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewAllCreatedParcels;
