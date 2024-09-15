import { NextRequest, NextResponse } from 'next/server';

const COLLECTIONS = [
  {
    id: 1,
    name: '2024 Collection',
    imgSrc: '/2024collectionImg.jpg', // Ensure correct image path
    alt: '2024 Collection Image',
    description:
      'Our 2024 Collection continues to refine and elevate living room design...',
    items: [],
  },
  {
    id: 2,
    name: '2023 Collection',
    imgSrc: '/2023collectionImg.jpg', // Ensure correct image path
    alt: '2023 Collection Image',
    description:
      'In 2023, we shifted our focus to the living room with our 2023 Collection...',
    items: [],
  },
  {
    id: 3,
    name: '2022 Collection',
    imgSrc: '/2022collectionImg.jpg', // Ensure correct image path
    alt: '2022 Collection Image',
    description:
      'Building on the success of the previous year, our 2022 Collection...',
    items: [],
  },
  {
    id: 4,
    name: '2021 Collection',
    imgSrc: '/2021collectionImg.jpg', // Ensure correct image path
    alt: '2021 Collection Image',
    description:
      'Our inaugural 2021 Collection brought a fresh perspective to kitchen furniture...',
    items: [],
  },
];

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    return NextResponse.json(COLLECTIONS);
  } else {
    return NextResponse.json(
      { error: `Method ${req.method} Not Allowed` },
      { status: 405 }
    );
  }
}
