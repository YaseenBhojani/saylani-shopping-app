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

export type AdminProductProps = {
  itemInfo: string;
  itemName: string;
  product: string;
  unitName: string;
  unitPrice: string;
};