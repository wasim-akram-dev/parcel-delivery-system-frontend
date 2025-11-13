/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent } from "@/components/ui/card";

export default function ParcelDetails({ parcel }: { parcel: any }) {
  return (
    <div className="mt-8 space-y-6">
      <Card>
        <CardContent className="p-6 space-y-3">
          <h2 className="text-2xl font-bold text-primary">
            Parcel Information
          </h2>
          <p>
            <strong>Tracking ID:</strong> {parcel.trackingId}
          </p>
          <p>
            <strong>Status:</strong> {parcel.parcel_status}
          </p>
          <p>
            <strong>From:</strong> {parcel.fromAddress}
          </p>
          <p>
            <strong>To:</strong> {parcel.toAddress}
          </p>
          <p>
            <strong>Type:</strong> {parcel.parcelType}
          </p>
          <p>
            <strong>Weight:</strong> {parcel.weight} kg
          </p>
          <p>
            <strong>Delivery Fee:</strong> ৳{parcel.deliveryFee}
          </p>
          <p>
            <strong>Receiver:</strong> {parcel.receiverId?.name}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-4">Status Log</h2>
          <ul className="space-y-2">
            {parcel.statusLog.map((log: any, index: number) => (
              <li
                key={index}
                className="flex justify-between border-b border-muted-foreground/10 pb-2"
              >
                <div>
                  <p className="font-semibold">{log.status}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(log.timestamp).toLocaleString()}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {log.updatedBy || "System"}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
