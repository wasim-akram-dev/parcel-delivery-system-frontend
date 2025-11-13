import { Badge } from "@/components/ui/badge";
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
  useGetAllParcelsQuery,
  useUpdateParcelBlockStatusMutation,
  useUpdateParcelStatusMutation,
} from "@/redux/features/parcels/parcels.api";
import type { IParcel } from "@/types";
import { ParcelStatus } from "@/types/parcelType";
import { useState } from "react";
import { toast } from "sonner";

const getStatusColor = (status: string) => {
  switch (status) {
    case ParcelStatus.Delivered:
      return "bg-green-100 text-green-800";
    case ParcelStatus.Cancelled:
      return "bg-red-100 text-red-800";
    case ParcelStatus.Returned:
      return "bg-yellow-100 text-yellow-800";
    case ParcelStatus.In_Transit:
      return "bg-blue-100 text-blue-800";
    case ParcelStatus.Held:
      return "bg-orange-100 text-orange-800";
    case ParcelStatus.Blocked:
      return "bg-gray-300 text-gray-700";
    default:
      return "bg-slate-100 text-slate-700";
  }
};

const AllParcels = () => {
  const { data: AllParcels, isLoading } = useGetAllParcelsQuery(undefined);
  console.log("data", AllParcels);
  const [updateStatus, { isLoading: isUpdatingStatus }] =
    useUpdateParcelStatusMutation();
  const [updateBlockStatus, { isLoading: isUpdatingBlock }] =
    useUpdateParcelBlockStatusMutation();

  const [selectedStatus, setSelectedStatus] = useState<{
    [key: string]: string;
  }>({});

  const handleStatusChange = async (parcelId: string, newStatus: string) => {
    try {
      const res = await updateStatus({
        id: parcelId,
        parcel_status: newStatus,
      }).unwrap();
      console.log("res", res);
      if (res?.data) {
        toast.success(`Parcel status updated to ${newStatus}`);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("error", error);
      toast("❌ Failed to Action!", {
        description: error?.data?.message || "Failed to update status",
      });
    }
  };

  const handleBlockToggle = async (
    parcelId: string,
    isCurrentlyBlocked: boolean
  ) => {
    try {
      const res = await updateBlockStatus({
        id: parcelId,
        isBlocked: !isCurrentlyBlocked,
      }).unwrap();
      console.log("res", res);
      if (res?.data) {
        toast.success(
          `Parcel ${!isCurrentlyBlocked ? "blocked" : "unblocked"} successfully`
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("error", error);
      toast("❌ Failed to Action!", {
        description: error?.data?.message || "Failed to update block status",
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
            <TableHead className="border text-center">Tracking ID</TableHead>
            <TableHead className="border text-center">Sender Email</TableHead>
            <TableHead className="border text-center">Receiver Email</TableHead>
            <TableHead className="border text-center">From</TableHead>
            <TableHead className="border text-center">To</TableHead>
            <TableHead className="border text-center">Created At</TableHead>
            <TableHead className="border text-center">Status</TableHead>
            <TableHead className="border text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {AllParcels?.data.map((parcel: IParcel, index: number) => (
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
                {parcel.receiver_email}
              </TableCell>
              <TableCell className="border text-center">
                {parcel.fromAddress}
              </TableCell>
              <TableCell className="border text-center">
                {parcel.toAddress}
              </TableCell>
              <TableCell className="border">
                {new Date(parcel.createdAt).toLocaleDateString()}
              </TableCell>
              {/* STATUS with BADGE */}
              <TableCell className="border">
                <div className="flex justify-center items-center gap-2">
                  <Badge className={getStatusColor(parcel.parcel_status)}>
                    {parcel.parcel_status}
                  </Badge>
                  {parcel.isBlocked && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-200 text-gray-700"
                    >
                      Blocked
                    </Badge>
                  )}
                </div>
              </TableCell>

              <TableCell className="border text-center">
                <div className="flex flex-col gap-2 items-center">
                  <Button
                    variant={parcel.isBlocked ? "secondary" : "destructive"}
                    disabled={isUpdatingBlock}
                    onClick={() =>
                      handleBlockToggle(parcel._id, parcel.isBlocked)
                    }
                  >
                    {parcel.isBlocked ? "Unblock" : "Block"}
                  </Button>

                  {/* Dropdown for status */}
                  <select
                    className={`border rounded p-1 text-sm ${
                      parcel.isBlocked
                        ? "bg-gray-200 cursor-not-allowed text-gray-500"
                        : ""
                    }`}
                    value={selectedStatus[parcel._id] || parcel.parcel_status}
                    onChange={(e) => {
                      const newStatus = e.target.value;
                      setSelectedStatus((prev) => ({
                        ...prev,
                        [parcel._id]: newStatus,
                      }));
                      handleStatusChange(parcel._id, newStatus);
                    }}
                    disabled={isUpdatingStatus || parcel.isBlocked}
                  >
                    {Object.values(ParcelStatus).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AllParcels;
