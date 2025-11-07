import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllCreatedParcelsQuery } from "@/redux/features/parcels/parcels.api";
import type { IParcel } from "@/types";

const ViewAllCreatedParcels = () => {
  const { data: AllParcels, isLoading } =
    useGetAllCreatedParcelsQuery(undefined);
  console.log("AllParcels", AllParcels);

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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewAllCreatedParcels;
