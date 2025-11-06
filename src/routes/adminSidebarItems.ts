import AllParcels from "@/pages/Admin/AllParcels";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "View all parcels",
        url: "view-all-parcels",
        // isActive: true,
        component: AllParcels,
      },
    ],
  },
  // {
  //   title: "Admin Parcel",
  //   items: [
  //     {
  //       title: "View all users",
  //       url: "view-all-users",
  //       component: Allusers,
  //     },
  //   ],
  // },
];
