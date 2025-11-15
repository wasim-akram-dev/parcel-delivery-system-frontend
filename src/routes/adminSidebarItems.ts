import AllParcels from "@/pages/Admin/AllParcels";
import AllUsers from "@/pages/Admin/AllUsers";
import Overview from "@/pages/Admin/Overview";
import TrackParcel from "@/pages/TrackParcel";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Overview",
    items: [
      {
        title: "Dashboard Overview",
        url: "overview",
        component: Overview,
      },
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "View & Manage users",
        url: "view-all-users",
        component: AllUsers,
      },
    ],
  },
  {
    title: "Parcels",
    items: [
      {
        title: "View & Manage parcels",
        url: "view-all-parcels",
        component: AllParcels,
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
