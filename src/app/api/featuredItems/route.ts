import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "../../../../lib/rateLimit";

const FEATURED_ITEMS = [
  {
    id: 1,
    name: "Modern Sofa Set",
    imgSrc: "/images/sofa.jpg", // TODO: the correct image path
    alt: "Modern Sofa Set",
    description:
      "A luxurious modern sofa set with sleek design, perfect for any living room. Upholstered in premium fabric for comfort.",
    price: "$8900",
  },
  {
    id: 2,
    name: "Dining Table Set",
    imgSrc: "/images/dining-table.jpg", // TODO: the correct image path
    alt: "Dining Table Set",
    description:
      "Elegant dining table set made of solid oak wood, seating up to six people. Ideal for contemporary kitchen spaces.",
    price: "$10850",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    imgSrc: "/images/office-chair.jpg", // TODO: the correct image path
    alt: "Ergonomic Office Chair",
    description:
      "Designed for maximum comfort, this ergonomic office chair provides lumbar support for long working hours.",
    price: "$3400",
  },
  {
    id: 4,
    name: "Queen Bed Frame",
    imgSrc: "/images/bed-frame.jpg", // TODO: the correct image path
    alt: "Queen Bed Frame",
    description:
      "Minimalist queen bed frame made from solid walnut wood, featuring a smooth headboard and modern design.",
    price: "$2950",
  },
  {
    id: 5,
    name: "Leather Recliner",
    imgSrc: "/images/recliner.jpg", // TODO: the correct image path
    alt: "Leather Recliner",
    description:
      "A classic leather recliner with a smooth mechanism for ultimate relaxation. Perfect for living rooms or home theaters.",
    price: "$4300",
  },
];

export async function GET(req: NextRequest, res: NextResponse) { 
  await new Promise<void>((resolve) => {
    rateLimit(req, res, () => resolve());
  });

  return NextResponse.json(FEATURED_ITEMS);
}
