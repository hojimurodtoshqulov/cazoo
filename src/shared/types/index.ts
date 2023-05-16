import React from "react";

export type MainPropType = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

// export type ProductType = {
//   id: string | number;
//   titleUz: string;
//   titleRu: string;
//   descriptionUz: string;
//   descriptionRu: string;
//   discount: number;
//   price: number;
//   // attachmentContents: {
//   //   data: string;
//   // }[];
//   attachmentContentIds: number[];
// };
export interface ProductType {
  id: number;
  maker: Maker;
  model: Model;
  price: number;
  manufacturedYear: number;
  engine: number;
  fuelType: FuelType;
  mileage: number;
  gearbox: Gearbox;
  color: string;
  bodyType: BodyType;
  features: string[];
  attachments: any[];
  registrationDate: Date;
  photosIds: number[]
}

export enum BodyType {
  Coupe = "COUPE",
  Other = "OTHER",
  Suv = "SUV",
}

export enum FuelType {
  Diesel = "DIESEL",
  Electric = "ELECTRIC",
  Hybrid = "HYBRID",
  Petrol = "PETROL",
}

export enum Gearbox {
  Automatic = "AUTOMATIC",
  Manual = "MANUAL",
}

export interface Maker {
  id: number;
  name: Name;
}

export enum Name {
  Byd = "BYD",
  Kia = "Kia",
}

export interface Model {
  id: number;
  name: string;
  maker: Maker;
}
