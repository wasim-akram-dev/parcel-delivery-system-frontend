import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useViewDeliveryHistoryQuery } from "@/redux/features/parcels/parcels.api";
import type { IParcel } from "@/types";

const ViewDeliveryHistory = () => {
  const { data: parcelDeliveryHistory, isLoading } =
    useViewDeliveryHistoryQuery(undefined);
  console.log("Parcel Delivery History", parcelDeliveryHistory);

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
            <TableHead className="border text-center">created_At</TableHead>
            <TableHead className="border text-center">Parcel Status</TableHead>
            <TableHead className="border text-center">ParcelType</TableHead>
            <TableHead className="border text-center">Weight</TableHead>
            <TableHead className="border text-center">Status Logs</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {parcelDeliveryHistory?.data?.map(
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
                  {parcel.createdAt}
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
                  {parcel.statusLog.map((stat) => (
                    <div key={stat.timestamp}>
                      <span>Status: {stat.status},</span>
                      <span> Note: {stat.note}</span>
                    </div>
                  ))}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewDeliveryHistory;
