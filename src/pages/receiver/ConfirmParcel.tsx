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
  useConfirmParcelMutation,
  useViewIncomingParcelsQuery,
} from "@/redux/features/parcels/parcels.api";
import type { IParcel } from "@/types";
import { useNavigate } from "react-router";

import { toast } from "sonner";

const ConfirmParcel = () => {
  const { data: incomingParcels, isLoading } =
    useViewIncomingParcelsQuery(undefined);
  console.log("View Incoming Parcels For Confirm Parcels", incomingParcels);
  const [confirmParcel] = useConfirmParcelMutation();
  const navigate = useNavigate();

  const handleConfirmParcel = async (id: string) => {
    try {
      const userConfirmed = confirm(
        "Are you sure you want to confirm this parcel?"
      );

      if (userConfirmed) {
        console.log("handleConfirmParcel", id);
        const res = await confirmParcel(id).unwrap();
        console.log("res", res);
        if (res?.data) {
          toast.success("Parcel Confirmed successfully");
          navigate("/receiver/view-delivery--history");
        }
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
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
            <TableHead className="border text-center">Sender Email</TableHead>
            <TableHead className="border text-center">From Address</TableHead>
            <TableHead className="border text-center">Parcel Status</TableHead>
            <TableHead className="border text-center">ParcelType</TableHead>
            <TableHead className="border text-center">Weight</TableHead>
            <TableHead className="border text-center">created_At</TableHead>
            <TableHead className="border text-center">Confirm Parcel</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incomingParcels?.data?.Incoming_Parcels?.map(
            (parcel: IParcel, index: number) => (
              <TableRow key={parcel._id} className="text-center">
                <TableCell className="font-medium border text-center">
                  {index + 1}
                </TableCell>
                <TableCell className="font-medium border text-center">
                  {parcel.trackingId}
                </TableCell>
                <TableCell className="border text-center">
                  {parcel.sender_email}
                </TableCell>
                <TableCell className="border text-center">
                  {parcel.fromAddress}
                </TableCell>
                <TableCell className="border text-center">
                  {parcel.parcel_status}
                </TableCell>
                <TableCell className="border text-center">
                  {parcel.parcelType}
                </TableCell>
                <TableCell className="border text-center">
                  {parcel.weight}
                </TableCell>
                <TableCell className="border text-center">
                  {parcel.createdAt}
                </TableCell>
                {}
                <TableCell className="border text-center">
                  {parcel?.parcel_status === "Delivered" ? (
                    <Button
                      className="bg-[#00786f] hover:bg-[#005e57] text-white px-4 py-2 rounded"
                      disabled
                    >
                      Confirmed
                    </Button>
                  ) : (
                    <Button
                      className="text-sm cursor-pointer"
                      onClick={() => handleConfirmParcel(parcel._id)}
                    >
                      Confirm Parcel
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
      {incomingParcels?.data?.length === 0 && (
        <div className="text-center mt-16 space-y-2">
          <h3 className="text-green-600 font-semibold">
            Congrats! All Parcel Confirmed Successfully
          </h3>
          <p>
            Your All <span className="font-bold">Confirmable Parcel</span> Will
            Appear Here!
          </p>
        </div>
      )}
    </div>
  );
};

export default ConfirmParcel;
