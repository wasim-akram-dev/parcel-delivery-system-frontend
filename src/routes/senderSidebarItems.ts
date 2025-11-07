import CreateParcel from "@/pages/sender/CreateParcel";
import ViewParcels from "@/pages/sender/ViewParcels";
import type { ISidebarItem } from "@/types";

export const senderSidebarItems: ISidebarItem[] = [
  {
    title: "Create Parcel",
    items: [
      {
        title: "create a parcel",
        url: "create-parcel",
        // isActive: true,
        component: CreateParcel,
      },
    ],
  },
  {
    title: "Get Parcels",
    items: [
      {
        title: "View Parcels",
        url: "view-parcels",
        // isActive: true,
        component: ViewParcels,
      },
    ],
  },
];
