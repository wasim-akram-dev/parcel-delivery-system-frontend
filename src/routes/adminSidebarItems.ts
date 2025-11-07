import AllParcels from "@/pages/Admin/AllParcels";
import AllUsers from "@/pages/Admin/AllUsers";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Parcels",
    items: [
      {
        title: "View all parcels",
        url: "view-all-parcels",
        component: AllParcels,
      },
    ],
  },
  {
    title: "Users",
    items: [
      {
        title: "View all users",
        url: "view-all-users",
        component: AllUsers,
      },
    ],
  },
];
