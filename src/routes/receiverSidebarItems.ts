import ConfirmParcel from "@/pages/receiver/ConfirmParcel";
import ViewDeliveryHistory from "@/pages/receiver/ViewDeliveryHistory";
import ViewIncomingParcels from "@/pages/receiver/ViewIncomingParcels";
import TrackParcel from "@/pages/TrackParcel";
import type { ISidebarItem } from "@/types";

export const receiverSidebarItems: ISidebarItem[] = [
  {
    title: "Incoming parcels",
    items: [
      {
        title: "View incoming parcels",
        url: "view-incoming-parcels",
        // isActive: true,
        component: ViewIncomingParcels,
      },
    ],
  },
  {
    title: "Confirm parcel delivery",
    items: [
      {
        title: "Confirm parcel delivery",
        url: "confirm-parcel-delivery",
        component: ConfirmParcel,
      },
    ],
  },
  {
    title: "View delivery history",
    items: [
      {
        title: "View delivery history",
        url: "view-delivery--history",
        component: ViewDeliveryHistory,
      },
    ],
  },
  {
    title: "Trackings",
    items: [
      {
        title: "Tracking A Parcel",
        url: "track-parcel",
        component: TrackParcel,
      },
    ],
  },
];
