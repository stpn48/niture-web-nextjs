export type storeItem = {
  id: number;
  name: string;
  imgSrc: string;
  alt: string;
  description: string;
  detailedDescription: string;
  price: string;
  tags: string[]
};

export type cartItem = storeItem & {
  quantity: number;
};

export type collection = {
  id: number;
  name: string;
  imgSrc: string;
  alt: string;
  description: string;
  items: storeItem[];
};


