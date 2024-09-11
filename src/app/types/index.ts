export type storeItem = {
  id: number;
  name: string;
  imgSrc: string;
  alt: string;
  description: string;
  price: string;
  tags: string[]
};

export type collection = {
  id: number;
  name: string;
  imgSrc: string;
  alt: string;
  description: string;
  items: storeItem[];
};
