import React from "react";

export type MainPropType = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export type ProductType = {
  id: string | number;
  titleUz: string;
  titleRu: string;
  descriptionUz: string;
  descriptionRu: string;
  discount: number;
  price: number;
  // attachmentContents: {
  //   data: string;
  // }[];
  attachmentContentIds: number[];
};
