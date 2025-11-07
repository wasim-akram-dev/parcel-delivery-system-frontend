import { role } from "@/constraints/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { senderSidebarItems } from "@/routes/senderSidebarItems";
// import { receiverSidebarItems } from "@/router/receiverSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    // case "ADMIN" :
    case role.admin:
      return [...adminSidebarItems];
    // if admin can view all
    // return [...adminSidebarItems, ...senderSidebarItems, ...receiverSidebarItems]
    case role.sender:
      return [...senderSidebarItems];
    // case role.receiver :
    //     return [...receiverSidebarItems]
    default:
      break;
  }
};
