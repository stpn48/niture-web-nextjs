import { NextResponse, NextRequest } from "next/server";
import { rateLimit } from "../../../../lib/rateLimit";

const STORE_ITEMS = [
  {
    id: 6,
    name: "Glass Coffee Table",
    tags: ["2024collection", "coffeeTable", "glass", "modern", "minimalist"],
    imgSrc: "/images/coffee-table.jpg",
    alt: "Glass Coffee Table",
    description:
      "A sleek glass coffee table with a minimalist chrome base, perfect for modern living rooms and open spaces.",
    price: "$3200",
  },
  {
    id: 7,
    name: "Luxury Sectional Sofa",
    tags: ["2024collection", "sectionalSofa", "luxury", "leather", "modern"],
    imgSrc: "/images/sectional-sofa.jpg",
    alt: "Luxury Sectional Sofa",
    description:
      "A spacious L-shaped sectional sofa with plush cushions and premium leather upholstery, designed for maximum comfort and style.",
    price: "$12600",
  },
  {
    id: 8,
    name: "Marble Top Dining Table",
    tags: ["2024collection", "diningTable", "marble", "modern", "luxury"],
    imgSrc: "/images/marble-dining-table.jpg",
    alt: "Marble Top Dining Table",
    description:
      "An elegant marble top dining table, seated on a stainless steel base. Seats up to eight people, ideal for luxurious dining spaces.",
    price: "$15400",
  },
  {
    id: 9,
    name: "Modern TV Stand",
    tags: ["2024collection", "tvStand", "modern", "oak", "storage"],
    imgSrc: "/images/tv-stand.jpg",
    alt: "Modern TV Stand",
    description:
      "A modern TV stand crafted from solid oak with multiple storage compartments. Fits up to 75-inch TVs and complements any living room.",
    price: "$2200",
  },
  {
    id: 10,
    name: "Velvet Armchair",
    tags: ["2024collection", "armchair", "velvet", "luxury", "modern"],
    imgSrc: "/images/velvet-armchair.jpg",
    alt: "Velvet Armchair",
    description:
      "A luxurious velvet armchair featuring a wide seat and brass legs, offering both style and comfort for any lounge or living room.",
    price: "$3900",
  },
  {
    id: 11,
    name: "Outdoor Patio Set",
    tags: [
      "2024collection",
      "patioSet",
      "outdoor",
      "rattan",
      "weather-resistant",
    ],
    imgSrc: "/images/patio-set.jpg",
    alt: "Outdoor Patio Set",
    description:
      "A durable outdoor patio set made from weather-resistant rattan and tempered glass. Includes a sofa, chairs, and a center table.",
    price: "$7400",
  },
  {
    id: 12,
    name: "Contemporary Bookshelf",
    tags: ["2024collection", "bookshelf", "contemporary", "storage", "modern"],
    imgSrc: "/images/bookshelf.jpg",
    alt: "Contemporary Bookshelf",
    description:
      "A tall contemporary bookshelf with open shelving and a sleek black finish. Ideal for living rooms, home offices, or libraries.",
    price: "$1800",
  },
  {
    id: 13,
    name: "Modern Floor Lamp",
    tags: ["2024collection", "floorLamp", "minimalist", "lighting", "brass"],
    imgSrc: "/images/floor-lamp.jpg",
    alt: "Modern Floor Lamp",
    description:
      "A minimalist floor lamp with an adjustable brass stand and frosted glass shade. Provides warm, ambient lighting for any room.",
    price: "$950",
  },
  {
    id: 14,
    name: "Leather Sectional Sofa",
    tags: ["2024collection", "sectionalSofa", "leather", "luxury", "modern"],
    imgSrc: "/images/leather-sectional.jpg",
    alt: "Leather Sectional Sofa",
    description:
      "A premium leather sectional sofa with adjustable headrests and deep seating, designed for luxurious living spaces.",
    price: "$15200",
  },
  {
    id: 15,
    name: "Wooden Console Table",
    tags: ["2024collection", "consoleTable", "wood", "modern", "walnut"],
    imgSrc: "/images/console-table.jpg",
    alt: "Wooden Console Table",
    description:
      "A contemporary wooden console table with sleek lines and a rich walnut finish. Perfect for hallways or living rooms.",
    price: "$2100",
  },
  {
    id: 16,
    name: "Modern Bedside Table",
    tags: ["2024collection", "bedsideTable", "marble", "oak", "modern"],
    imgSrc: "/images/bedside-table.jpg",
    alt: "Modern Bedside Table",
    description:
      "A stylish bedside table with a marble top and solid oak legs. Features a soft-close drawer for storage.",
    price: "$1500",
  },
  {
    id: 17,
    name: "Reclaimed Wood Dining Table",
    tags: [
      "2024collection",
      "diningTable",
      "reclaimedWood",
      "farmhouse",
      "modern",
    ],
    imgSrc: "/images/reclaimed-dining-table.jpg",
    alt: "Reclaimed Wood Dining Table",
    description:
      "A rustic reclaimed wood dining table with natural grain patterns, seating up to six people. Perfect for modern farmhouse interiors.",
    price: "$9800",
  },
  {
    id: 18,
    name: "Chaise Lounge Chair",
    tags: ["2024collection", "loungeChair", "velvet", "luxury", "modern"],
    imgSrc: "/images/chaise-lounge.jpg",
    alt: "Chaise Lounge Chair",
    description:
      "A luxurious chaise lounge chair upholstered in soft velvet, with a curved design for ultimate relaxation and elegance.",
    price: "$6200",
  },
  {
    id: 19,
    name: "Mid-Century Modern Armchair",
    tags: ["2024collection", "armchair", "midCentury", "modern", "wood"],
    imgSrc: "/images/mid-century-armchair.jpg",
    alt: "Mid-Century Modern Armchair",
    description:
      "A mid-century modern armchair with tapered wooden legs and a button-tufted backrest, perfect for stylish living rooms.",
    price: "$3100",
  },
  {
    id: 20,
    name: "Modern Wall Shelf",
    tags: ["2024collection", "wallShelf", "oak", "minimalist", "modern"],
    imgSrc: "/images/wall-shelf.jpg",
    alt: "Modern Wall Shelf",
    description:
      "A minimalist wall shelf made from solid oak, ideal for displaying decorative items or books. Comes with easy wall mounting.",
    price: "$900",
  },
  {
    id: 21,
    name: "Luxury Ottoman",
    tags: ["2024collection", "ottoman", "luxury", "tufted", "modern"],
    imgSrc: "/images/ottoman.jpg",
    alt: "Luxury Ottoman",
    description:
      "A soft, upholstered ottoman that doubles as a coffee table or footrest. Finished in premium fabric with a chic, tufted design.",
    price: "$2800",
  },
  {
    id: 22,
    name: "Extendable Dining Table",
    tags: ["2024collection", "diningTable", "extendable", "glass", "modern"],
    imgSrc: "/images/extendable-dining-table.jpg",
    alt: "Extendable Dining Table",
    description:
      "A modern extendable dining table with a tempered glass top and metal legs. Comfortably seats 6 to 10 people.",
    price: "$12600",
  },
  {
    id: 23,
    name: "Velvet Chaise Lounge",
    tags: ["2024collection", "chaiseLounge", "velvet", "luxury", "modern"],
    imgSrc: "/images/velvet-chaise.jpg",
    alt: "Velvet Chaise Lounge",
    description:
      "An elegant velvet chaise lounge with deep cushions and brass legs, offering luxury and relaxation for living spaces or bedrooms.",
    price: "$6200",
  },
  {
    id: 24,
    name: "Bar Stool Set",
    tags: ["2024collection", "barStool", "leather", "modern", "chrome"],
    imgSrc: "/images/bar-stool.jpg",
    alt: "Bar Stool Set",
    description:
      "A set of two modern bar stools with leather seats and chrome-plated bases. Ideal for contemporary kitchens or bars.",
    price: "$2400",
  },
  {
    id: 25,
    name: "Solid Wood Dresser",
    tags: ["2024collection", "dresser", "solidWood", "modern", "storage"],
    imgSrc: "/images/wood-dresser.jpg",
    alt: "Solid Wood Dresser",
    description:
      "A six-drawer solid wood dresser with a smooth finish, offering ample storage space for any bedroom or walk-in closet.",
    price: "$4600",
  },
  {
    id: 26,
    name: "Metal Bed Frame",
    tags: ["2024collection", "bedFrame", "metal", "industrial", "modern"],
    imgSrc: "/images/metal-bed-frame.jpg",
    alt: "Metal Bed Frame",
    description:
      "A sturdy metal bed frame with an industrial design and slatted headboard. Available in queen and king sizes.",
    price: "$5500",
  },
  {
    id: 27,
    name: "Luxury Armchair",
    imgSrc: "/images/luxury-armchair.jpg",
    alt: "Luxury Armchair",
    description:
      "A plush luxury armchair with deep seating and velvet upholstery. Ideal for living rooms or reading nooks.",
    price: "$3600",
    tags: ["luxury", "living room", "velvet", "seating"],
  },
  {
    id: 28,
    name: "Modern Vanity Set",
    imgSrc: "/images/vanity-set.jpg",
    alt: "Modern Vanity Set",
    description:
      "A modern vanity set with a glass top and matching stool, featuring a mirror and ample storage for beauty essentials.",
    price: "$4100",
    tags: ["modern", "vanity", "glass", "storage"],
  },
  {
    id: 29,
    name: "Minimalist Desk",
    imgSrc: "/images/minimalist-desk.jpg",
    alt: "Minimalist Desk",
    description:
      "A sleek, minimalist desk with solid wood construction and clean lines. Perfect for home offices or workspaces.",
    price: "$2900",
    tags: ["minimalist", "desk", "home office", "solid wood"],
  },
  {
    id: 30,
    name: "Accent Armchair",
    imgSrc: "/images/accent-armchair.jpg",
    alt: "Accent Armchair",
    description:
      "A bold accent armchair with a contemporary design, featuring geometric patterns and plush cushions. Adds flair to any room.",
    price: "$3400",
    tags: ["contemporary", "armchair", "geometric", "plush"],
  },
  {
    id: 31,
    name: "Convertible Sofa Bed",
    imgSrc: "/images/sofa-bed.jpg",
    alt: "Convertible Sofa Bed",
    description:
      "A multi-functional sofa bed that converts into a queen-sized sleeper. Ideal for small apartments or guest rooms.",
    price: "$7800",
    tags: ["convertible", "sofa", "queen-sized", "guest room"],
  },
  {
    id: 32,
    name: "Rattan Armchair",
    imgSrc: "/images/rattan-armchair.jpg",
    alt: "Rattan Armchair",
    description:
      "A chic rattan armchair with a natural finish, perfect for indoor or outdoor spaces. Comfortable, breathable design.",
    price: "$1800",
    tags: ["rattan", "natural", "indoor", "outdoor"],
  },
  {
    id: 33,
    name: "Wall-Mounted Storage Unit",
    imgSrc: "/images/storage-unit.jpg",
    alt: "Wall-Mounted Storage Unit",
    description:
      "A minimalist wall-mounted storage unit with multiple compartments for books, decorative items, or media equipment.",
    price: "$2300",
    tags: ["minimalist", "storage", "wall-mounted", "compartments"],
  },
  {
    id: 34,
    name: "Rocking Chair",
    imgSrc: "/images/rocking-chair.jpg",
    alt: "Rocking Chair",
    description:
      "A classic wooden rocking chair with an ergonomic seat, providing comfort and relaxation for any living room or porch.",
    price: "$1500",
    tags: ["classic", "wooden", "rocking chair", "ergonomic"],
  },
  {
    id: 35,
    name: "Glass Display Cabinet",
    imgSrc: "/images/display-cabinet.jpg",
    alt: "Glass Display Cabinet",
    description:
      "A glass display cabinet with adjustable shelves and LED lighting, perfect for showcasing collectibles or fine dinnerware.",
    price: "$4900",
    tags: ["glass", "display", "cabinet", "LED lighting"],
  },
  {
    id: 36,
    name: "Leather Desk Chair",
    imgSrc: "/images/leather-desk-chair.jpg",
    alt: "Leather Desk Chair",
    description:
      "An executive leather desk chair with adjustable height and lumbar support. Ideal for long hours of work in comfort.",
    price: "$2900",
    tags: ["leather", "desk chair", "lumbar support", "executive"],
  },
  {
    id: 37,
    name: "Woven Jute Rug",
    imgSrc: "/images/jute-rug.jpg",
    alt: "Woven Jute Rug",
    description:
      "A handwoven jute rug with natural textures, adding warmth and character to any living room or bedroom.",
    price: "$1800",
    tags: ["woven", "jute", "rug", "natural"],
  },
  {
    id: 38,
    name: "Corner Bookshelf",
    imgSrc: "/images/corner-bookshelf.jpg",
    alt: "Corner Bookshelf",
    description:
      "A space-saving corner bookshelf with five tiers, perfect for displaying books, plants, or decorative items.",
    price: "$1200",
    tags: ["corner", "bookshelf", "space-saving", "five tiers"],
  },
  {
    id: 39,
    name: "Glass-Top Console Table",
    imgSrc: "/images/glass-console-table.jpg",
    alt: "Glass-Top Console Table",
    description:
      "A contemporary glass-top console table with metal legs. Ideal for hallways or living rooms as a decorative focal point.",
    price: "$2800",
    tags: ["contemporary", "console table", "glass-top", "metal legs"],
  },
  {
    id: 40,
    name: "Contemporary Lounge Chair",
    imgSrc: "/images/lounge-chair.jpg",
    alt: "Contemporary Lounge Chair",
    description:
      "A comfortable and stylish lounge chair with a high back and plush cushioning, designed for modern interiors.",
    price: "$4300",
    tags: ["contemporary", "lounge chair", "plush", "modern"],
  },
  {
    id: 41,
    name: "Reclining Loveseat",
    imgSrc: "/images/reclining-loveseat.jpg",
    alt: "Reclining Loveseat",
    description:
      "A plush reclining loveseat with built-in cup holders and USB charging ports. Perfect for movie nights in luxury.",
    price: "$7200",
    tags: ["reclining", "loveseat", "USB ports", "plush"],
  },
  {
    id: 42,
    name: "Industrial Coffee Table",
    imgSrc: "/images/industrial-coffee-table.jpg",
    alt: "Industrial Coffee Table",
    description:
      "A rustic industrial coffee table with a solid wood top and metal frame. Adds character to any living space.",
    price: "$3600",
    tags: ["industrial", "coffee table", "solid wood", "rustic"],
  },
  {
    id: 43,
    name: "Folding Dining Table",
    imgSrc: "/images/folding-dining-table.jpg",
    alt: "Folding Dining Table",
    description:
      "A modern foldable dining table perfect for small spaces. Easily expands to accommodate more guests when needed.",
    price: "$2400",
    tags: ["folding", "dining table", "expandable", "small spaces"],
  },
  {
    id: 44,
    name: "Swivel Office Chair",
    imgSrc: "/images/swivel-office-chair.jpg",
    alt: "Swivel Office Chair",
    description:
      "A sleek swivel office chair with a high back, mesh support, and adjustable armrests. Ideal for long hours at your desk.",
    price: "$3400",
    tags: ["swivel", "office chair", "mesh", "adjustable armrests"],
  },
  {
    id: 45,
    name: "Wooden TV Stand",
    imgSrc: "/images/wooden-tv-stand.jpg",
    alt: "Wooden TV Stand",
    description:
      "A mid-century modern wooden TV stand with multiple drawers for storage. Fits TVs up to 65 inches.",
    price: "$3100",
    tags: ["wooden", "TV stand", "mid-century modern", "storage"],
  },
  {
    id: 46,
    name: "Velvet Sleeper Sofa",
    imgSrc: "/images/sleeper-sofa.jpg",
    alt: "Velvet Sleeper Sofa",
    description:
      "A soft velvet sleeper sofa that converts into a bed. Ideal for guest rooms or cozy living spaces.",
    price: "$6700",
    tags: ["velvet", "sleeper sofa", "convertible", "guest room"],
  },
  {
    id: 47,
    name: "Geometric Area Rug",
    imgSrc: "/images/area-rug.jpg",
    alt: "Geometric Area Rug",
    description:
      "A bold geometric patterned area rug made from soft wool, designed to add texture and warmth to any room.",
    price: "$2100",
    tags: ["geometric", "area rug", "wool", "warmth"],
  },
  {
    id: 48,
    name: "Console Cabinet",
    imgSrc: "/images/console-cabinet.jpg",
    alt: "Console Cabinet",
    description:
      "A sleek wooden console cabinet with sliding doors and brass accents, perfect for storing essentials in style.",
    price: "$4200",
    tags: ["console cabinet", "sliding doors", "brass accents", "wooden"],
  },
  {
    id: 49,
    name: "Outdoor Dining Set",
    imgSrc: "/images/outdoor-dining-set.jpg",
    alt: "Outdoor Dining Set",
    description:
      "A durable outdoor dining set made from weather-resistant materials, seating up to eight people.",
    price: "$9300",
    tags: ["outdoor", "dining set", "weather-resistant", "seating"],
  },
  {
    id: 50,
    name: "Upholstered Bench",
    imgSrc: "/images/upholstered-bench.jpg",
    alt: "Upholstered Bench",
    description:
      "A minimalist upholstered bench with solid wood legs, suitable for entryways or dining areas.",
    price: "$1900",
    tags: ["upholstered", "bench", "minimalist", "solid wood"],
  },
  {
    id: 51,
    name: "Glass-Top Dining Table",
    imgSrc: "/images/glass-dining-table.jpg",
    alt: "Glass-Top Dining Table",
    description:
      "A sophisticated glass-top dining table with chrome legs, perfect for contemporary dining spaces.",
    price: "$6100",
    tags: ["glass-top", "dining table", "chrome", "contemporary"],
  },
  {
    id: 52,
    name: "Leather Ottoman",
    imgSrc: "/images/leather-ottoman.jpg",
    alt: "Leather Ottoman",
    description:
      "A round leather ottoman with button-tufted details. Doubles as a footrest or extra seating.",
    price: "$1600",
    tags: ["leather", "ottoman", "button-tufted", "footrest"],
  },
  {
    id: 53,
    name: "Bamboo Side Table",
    imgSrc: "/images/bamboo-side-table.jpg",
    alt: "Bamboo Side Table",
    description:
      "A sustainable bamboo side table with a smooth finish. Adds a natural touch to any living space.",
    price: "$1300",
    tags: ["bamboo", "side table", "sustainable", "natural"],
  },
  {
    id: 54,
    name: "Modern Recliner",
    imgSrc: "/images/modern-recliner.jpg",
    alt: "Modern Recliner",
    description:
      "A sleek and comfortable recliner with smooth mechanisms, designed for a modern living room setup.",
    price: "$5200",
    tags: ["modern", "recliner", "comfortable", "living room"],
  },
  {
    id: 55,
    name: "Tufted King Bed",
    imgSrc: "/images/tufted-king-bed.jpg",
    alt: "Tufted King Bed",
    description:
      "A luxurious tufted king bed frame with a high headboard, perfect for a statement bedroom centerpiece.",
    price: "$8700",
    tags: ["tufted", "king bed", "luxurious", "high headboard"],
  },
  {
    id: 56,
    name: "Round Dining Table",
    imgSrc: "/images/round-dining-table.jpg",
    alt: "Round Dining Table",
    description:
      "A round wooden dining table with a pedestal base, providing ample seating space for four to six people.",
    price: "$5100",
    tags: ["round", "dining table", "wooden", "pedestal base"],
  },
  {
    id: 57,
    name: "Fabric Armchair",
    imgSrc: "/images/fabric-armchair.jpg",
    alt: "Fabric Armchair",
    description:
      "A cozy fabric armchair with wide seating and supportive cushions. Ideal for living rooms and reading corners.",
    price: "$2900",
    tags: ["fabric", "armchair", "cozy", "supportive"],
  },
  {
    id: 58,
    name: "Ladder Shelf",
    imgSrc: "/images/ladder-shelf.jpg",
    alt: "Ladder Shelf",
    description:
      "A modern ladder shelf with five tiers for displaying books, plants, or decor. Compact and stylish.",
    price: "$1200",
    tags: ["ladder", "shelf", "five tiers", "compact"],
  },
  {
    id: 59,
    name: "Chaise Sectional Sofa",
    imgSrc: "/images/chaise-sectional-sofa.jpg",
    alt: "Chaise Sectional Sofa",
    description:
      "A contemporary chaise sectional sofa with wide seats and clean lines, perfect for open living spaces.",
    price: "$14800",
    tags: ["chaise", "sectional sofa", "contemporary", "wide seats"],
  },
  {
    id: 60,
    name: "Marble Accent Table",
    imgSrc: "/images/marble-accent-table.jpg",
    alt: "Marble Accent Table",
    description:
      "A round marble accent table with a gold metal base, perfect for displaying decorative items or serving drinks.",
    price: "$1900",
    tags: ["marble", "accent table", "gold metal", "decorative"],
  },
];

const PAGE_SIZE = 10; // 10 items per page

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await new Promise<void>((resolve) => {
      rateLimit(req, res, () => resolve());
    });

    const searchParams = req.nextUrl.searchParams;
    const pageQuery = searchParams.get("page") || "1";
    const searchQuery = searchParams.get("q") || "";
    const tagsQuery = searchParams.get("tags") || "[]";

    let filteredItems = STORE_ITEMS;

    if (searchQuery) {
      filteredItems = STORE_ITEMS.filter(
        (item) =>
          item.name
            .replace(/\s+/g, "")
            .toLowerCase()
            .includes(searchQuery.replace(/\s+/g, "").toLowerCase()), // .replace(/\s+/g, '') removes all whitespace
      );
    }

    if (tagsQuery) {
      const tags: string[] = JSON.parse(tagsQuery);
      filteredItems = filteredItems.filter((item) =>
        tags.every((tag: string) => item.tags.includes(tag)),
      );
    }


    const pageNumber = parseInt(pageQuery);
    const startIndex = (pageNumber - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;

    const paginatedItems = filteredItems.slice(startIndex, endIndex);

    return NextResponse.json(paginatedItems);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
