import next, { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const COLLECTIONS = [
  {
    id: 1,
    name: "2024 Collection",
    imgSrc: "/2024collectionImg.jpg", // TODO: the correct image path
    alt: "2024 Collection Image",
    description:
      "Our 2024 Collection continues to refine and elevate living room design. With a deeper focus on comfort and modern aesthetics, this collection features sophisticated sofas, elegant media units, sleek coffee tables, and more. Designed to seamlessly fit into any modern home. Each piece in the 2024 Collection blends luxurious materials with minimalist design principles, bringing a sense of effortless style and serenity to the living room.",
    items: [], // TODO: add items
  },
  {
    id: 2,
    name: "2023 Collection",
    imgSrc: "/2023collectionImg.jpg", // TODO: the correct image path
    alt: "2023 Collection Image",
    description:
      "In 2023, we shifted our focus to the living room with our 2023 Collection. This collection was all about comfort and elegance, offering a range of modern, minimalist sofas, coffee tables, and storage pieces. With carefully selected fabrics, soft color palettes, and streamlined designs, the 2023 Collection transformed living rooms into luxurious, functional spaces where families could relax in style.",
    items: [], // TODO: add items
  },
  {
    id: 3,
    name: "2022 Collection",
    imgSrc: "/2022collectionImg.jpg", // TODO: the correct image path
    alt: "2022 Collection Image",
    description:
      "Building on the success of the previous year, our 2022 Collection further refined the art of minimalist kitchen furniture. We introduced new designs and finishes, with a focus on wood and metal accents that elevated the modern kitchen’s aesthetic. The collection included beautifully crafted dining tables, ergonomic chairs, and functional storage units, bringing both beauty and practicality to the kitchen space.",
    items: [], // TODO: add items
  },
  {
    id: 4,
    name: "2021 Collection",
    imgSrc: "/2021collectionImg.jpg", // TODO: the correct image path
    alt: "2021 Collection Image",
    description:
      "Our inaugural 2021 Collection brought a fresh perspective to kitchen furniture. Focusing on clean lines, functional design, and high-quality materials, this collection introduced sleek countertops, elegant dining sets, and space-saving storage solutions. Each piece was designed to create a minimalist yet inviting kitchen environment, perfect for modern homes.",
    items: [], // TODO: add items
  },
];

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(COLLECTIONS);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}