import AllParcels from "@/pages/Admin/AllParcels";
import AllUsers from "@/pages/Admin/AllUsers";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
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
];
