import type { ComponentType } from "react";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
    isActive?: boolean;
  }[];
}

// role type
export type TRole = "ADMIN" | "SENDER" | "RECEIVER";

// view-all-parcel interface
export interface IParcel {
  _id: string;
  trackingId: string;
  sender_email: string;
  receiver_email: string;
  fromAddress: string;
  toAddress: string;
  parcel_status: string;
  createdAt: string;
  statusLog: {
    location: string;
    note: string;
    status: string;
    timestamp: string;
  }[];
}

// view-all-user interface
export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  isActive: string;
  isVerified?: boolean;
  createdAt: string;
}
