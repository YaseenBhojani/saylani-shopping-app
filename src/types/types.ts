import { DocumentData } from "@firebase/firestore";
import { ReactNode } from "react";

export type ChildrenProp = {
  children: ReactNode;
};

export type SignupFormValues = {
  contact: number;
  email: string;
  fullName: string;
  password: string;
};

export type SigninFormValues = {
  email: string;
  password: string;
};

export type User = {
  contact: string;
  email: string;
  fullName: string;
  isAdmin?: string;
} | DocumentData;

export type CategoryType = DocumentData | {
  value: string;
  label: string;
};

export type Product = DocumentData | {
  itemInfo: string;
  itemName: string;
  product: string;
  unitName: string;
  unitPrice: number;
  image?: string;
};

export type CartItemType = {
  itemName: string;
  quantity: number;
};

export type UserCartContextType = {
  getItem: (itemName: string) => number;
  increaseItemQuantity: (itemName: string) => void;
  decreaseItemQuantity: (itemName: string) => void;
  emptyCart: () => void;
};