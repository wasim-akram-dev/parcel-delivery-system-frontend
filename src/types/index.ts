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
  parcelType: string;
  weight: number;
  statusLog: {
    location: string;
    note: string;
    status: string;
    timestamp: string;
  }[];
  isBlocked: boolean;
  phone: string;
  isFragile?: boolean;
  deliveryFee: number;
  delivery_date?: Date;
  isCancelled?: boolean;
  isReturned?: boolean;
  isHeld?: boolean;
  updatedAt?: Date;
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
