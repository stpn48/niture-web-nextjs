import { NextResponse, NextRequest } from "next/server";
import { rateLimit } from "../../../../lib/rateLimit";

const STORE_ITEMS = [
  {
    id: 6,
    name: "Glass Coffee Table",
    imgSrc: "/images/coffee-table.jpg", // TODO: the correct image path
    alt: "Glass Coffee Table",
    description:
      "A sleek glass coffee table with a minimalist chrome base, perfect for modern living rooms and open spaces.",
    price: "$3200",
  },
  {
    id: 7,
    name: "Luxury Sectional Sofa",
    imgSrc: "/images/sectional-sofa.jpg", // TODO: the correct image path
    alt: "Luxury Sectional Sofa",
    description:
      "A spacious L-shaped sectional sofa with plush cushions and premium leather upholstery, designed for maximum comfort and style.",
    price: "$12600",
  },
  {
    id: 8,
    name: "Marble Top Dining Table",
    imgSrc: "/images/marble-dining-table.jpg", // TODO: the correct image path
    alt: "Marble Top Dining Table",
    description:
      "An elegant marble top dining table, seated on a stainless steel base. Seats up to eight people, ideal for luxurious dining spaces.",
    price: "$15400",
  },
  {
    id: 9,
    name: "Modern TV Stand",
    imgSrc: "/images/tv-stand.jpg", // TODO: the correct image path
    alt: "Modern TV Stand",
    description:
      "A modern TV stand crafted from solid oak with multiple storage compartments. Fits up to 75-inch TVs and complements any living room.",
    price: "$2200",
  },
  {
    id: 10,
    name: "Velvet Armchair",
    imgSrc: "/images/velvet-armchair.jpg", // TODO: the correct image path
    alt: "Velvet Armchair",
    description:
      "A luxurious velvet armchair featuring a wide seat and brass legs, offering both style and comfort for any lounge or living room.",
    price: "$3900",
  },
  {
    id: 11,
    name: "Outdoor Patio Set",
    imgSrc: "/images/patio-set.jpg", // TODO: the correct image path
    alt: "Outdoor Patio Set",
    description:
      "A durable outdoor patio set made from weather-resistant rattan and tempered glass. Includes a sofa, chairs, and a center table.",
    price: "$7400",
  },
  {
    id: 12,
    name: "Contemporary Bookshelf",
    imgSrc: "/images/bookshelf.jpg", // TODO: the correct image path
    alt: "Contemporary Bookshelf",
    description:
      "A tall contemporary bookshelf with open shelving and a sleek black finish. Ideal for living rooms, home offices, or libraries.",
    price: "$1800",
  },
  {
    id: 13,
    name: "Modern Floor Lamp",
    imgSrc: "/images/floor-lamp.jpg", // TODO: the correct image path
    alt: "Modern Floor Lamp",
    description:
      "A minimalist floor lamp with an adjustable brass stand and frosted glass shade. Provides warm, ambient lighting for any room.",
    price: "$950",
  },
  {
    id: 14,
    name: "Leather Sectional Sofa",
    imgSrc: "/images/leather-sectional.jpg", // TODO: the correct image path
    alt: "Leather Sectional Sofa",
    description:
      "A premium leather sectional sofa with adjustable headrests and deep seating, designed for luxurious living spaces.",
    price: "$15200",
  },
  {
    id: 15,
    name: "Wooden Console Table",
    imgSrc: "/images/console-table.jpg", // TODO: the correct image path
    alt: "Wooden Console Table",
    description:
      "A contemporary wooden console table with sleek lines and a rich walnut finish. Perfect for hallways or living rooms.",
    price: "$2100",
  },
  {
    id: 16,
    name: "Modern Bedside Table",
    imgSrc: "/images/bedside-table.jpg", // TODO: the correct image path
    alt: "Modern Bedside Table",
    description:
      "A stylish bedside table with a marble top and solid oak legs. Features a soft-close drawer for storage.",
    price: "$1500",
  },
  {
    id: 17,
    name: "Reclaimed Wood Dining Table",
    imgSrc: "/images/reclaimed-dining-table.jpg", // TODO: the correct image path
    alt: "Reclaimed Wood Dining Table",
    description:
      "A rustic reclaimed wood dining table with natural grain patterns, seating up to six people. Perfect for modern farmhouse interiors.",
    price: "$9800",
  },
  {
    id: 18,
    name: "Chaise Lounge Chair",
    imgSrc: "/images/chaise-lounge.jpg", // TODO: the correct image path
    alt: "Chaise Lounge Chair",
    description:
      "A luxurious chaise lounge chair upholstered in soft velvet, with a curved design for ultimate relaxation and elegance.",
    price: "$6200",
  },
  {
    id: 19,
    name: "Mid-Century Modern Armchair",
    imgSrc: "/images/mid-century-armchair.jpg", // TODO: the correct image path
    alt: "Mid-Century Modern Armchair",
    description:
      "A mid-century modern armchair with tapered wooden legs and a button-tufted backrest, perfect for stylish living rooms.",
    price: "$3100",
  },
  {
    id: 20,
    name: "Modern Wall Shelf",
    imgSrc: "/images/wall-shelf.jpg", // TODO: the correct image path
    alt: "Modern Wall Shelf",
    description:
      "A minimalist wall shelf made from solid oak, ideal for displaying decorative items or books. Comes with easy wall mounting.",
    price: "$900",
  },
  {
    id: 21,
    name: "Luxury Ottoman",
    imgSrc: "/images/ottoman.jpg", // TODO: the correct image path
    alt: "Luxury Ottoman",
    description:
      "A soft, upholstered ottoman that doubles as a coffee table or footrest. Finished in premium fabric with a chic, tufted design.",
    price: "$2800",
  },
  {
    id: 22,
    name: "Extendable Dining Table",
    imgSrc: "/images/extendable-dining-table.jpg", // TODO: the correct image path
    alt: "Extendable Dining Table",
    description:
      "A modern extendable dining table with a tempered glass top and metal legs. Comfortably seats 6 to 10 people.",
    price: "$12600",
  },
  {
    id: 23,
    name: "Velvet Chaise Lounge",
    imgSrc: "/images/velvet-chaise.jpg", // TODO: the correct image path
    alt: "Velvet Chaise Lounge",
    description:
      "An elegant velvet chaise lounge with deep cushions and brass legs, offering luxury and relaxation for living spaces or bedrooms.",
    price: "$6200",
  },
  {
    id: 24,
    name: "Bar Stool Set",
    imgSrc: "/images/bar-stool.jpg", // TODO: the correct image path
    alt: "Bar Stool Set",
    description:
      "A set of two modern bar stools with leather seats and chrome-plated bases. Ideal for contemporary kitchens or bars.",
    price: "$2400",
  },
  {
    id: 25,
    name: "Solid Wood Dresser",
    imgSrc: "/images/wood-dresser.jpg", // TODO: the correct image path
    alt: "Solid Wood Dresser",
    description:
      "A six-drawer solid wood dresser with a smooth finish, offering ample storage space for any bedroom or walk-in closet.",
    price: "$4600",
  },
  {
    id: 26,
    name: "Metal Bed Frame",
    imgSrc: "/images/metal-bed-frame.jpg", // TODO: the correct image path
    alt: "Metal Bed Frame",
    description:
      "A modern metal bed frame with a minimalist design and sturdy structure. Perfect for contemporary bedroom styles.",
    price: "$2700",
  },
  {
    id: 27,
    name: "Luxury Armchair",
    imgSrc: "/images/luxury-armchair.jpg", // TODO: the correct image path
    alt: "Luxury Armchair",
    description:
      "A plush luxury armchair with deep seating and velvet upholstery. Ideal for living rooms or reading nooks.",
    price: "$3600",
  },
  {
    id: 28,
    name: "Modern Vanity Set",
    imgSrc: "/images/vanity-set.jpg", // TODO: the correct image path
    alt: "Modern Vanity Set",
    description:
      "A modern vanity set with a glass top and matching stool, featuring a mirror and ample storage for beauty essentials.",
    price: "$4100",
  },
  {
    id: 29,
    name: "Minimalist Desk",
    imgSrc: "/images/minimalist-desk.jpg", // TODO: the correct image path
    alt: "Minimalist Desk",
    description:
      "A sleek, minimalist desk with solid wood construction and clean lines. Perfect for home offices or workspaces.",
    price: "$2900",
  },
  {
    id: 30,
    name: "Accent Armchair",
    imgSrc: "/images/accent-armchair.jpg", // TODO: the correct image path
    alt: "Accent Armchair",
    description:
      "A bold accent armchair with a contemporary design, featuring geometric patterns and plush cushions. Adds flair to any room.",
    price: "$3400",
  },
  {
    id: 31,
    name: "Convertible Sofa Bed",
    imgSrc: "/images/sofa-bed.jpg", // TODO: the correct image path
    alt: "Convertible Sofa Bed",
    description:
      "A multi-functional sofa bed that converts into a queen-sized sleeper. Ideal for small apartments or guest rooms.",
    price: "$7800",
  },
  {
    id: 32,
    name: "Rattan Armchair",
    imgSrc: "/images/rattan-armchair.jpg", // TODO: the correct image path
    alt: "Rattan Armchair",
    description:
      "A chic rattan armchair with a natural finish, perfect for indoor or outdoor spaces. Comfortable, breathable design.",
    price: "$1800",
  },
  {
    id: 33,
    name: "Wall-Mounted Storage Unit",
    imgSrc: "/images/storage-unit.jpg", // TODO: the correct image path
    alt: "Wall-Mounted Storage Unit",
    description:
      "A minimalist wall-mounted storage unit with multiple compartments for books, decorative items, or media equipment.",
    price: "$2300",
  },
  {
    id: 34,
    name: "Rocking Chair",
    imgSrc: "/images/rocking-chair.jpg", // TODO: the correct image path
    alt: "Rocking Chair",
    description:
      "A classic wooden rocking chair with an ergonomic seat, providing comfort and relaxation for any living room or porch.",
    price: "$1500",
  },
  {
    id: 35,
    name: "Glass Display Cabinet",
    imgSrc: "/images/display-cabinet.jpg", // TODO: the correct image path
    alt: "Glass Display Cabinet",
    description:
      "A glass display cabinet with adjustable shelves and LED lighting, perfect for showcasing collectibles or fine dinnerware.",
    price: "$4900",
  },
  {
    id: 36,
    name: "Leather Desk Chair",
    imgSrc: "/images/leather-desk-chair.jpg", // TODO: the correct image path
    alt: "Leather Desk Chair",
    description:
      "An executive leather desk chair with adjustable height and lumbar support. Ideal for long hours of work in comfort.",
    price: "$2900",
  },
  {
    id: 37,
    name: "Woven Jute Rug",
    imgSrc: "/images/jute-rug.jpg", // TODO: the correct image path
    alt: "Woven Jute Rug",
    description:
      "A handwoven jute rug with natural textures, adding warmth and character to any living room or bedroom.",
    price: "$1800",
  },
  {
    id: 38,
    name: "Corner Bookshelf",
    imgSrc: "/images/corner-bookshelf.jpg", // TODO: the correct image path
    alt: "Corner Bookshelf",
    description:
      "A space-saving corner bookshelf with five tiers, perfect for displaying books, plants, or decorative items.",
    price: "$1200",
  },
  {
    id: 39,
    name: "Glass-Top Console Table",
    imgSrc: "/images/glass-console-table.jpg", // TODO: the correct image path
    alt: "Glass-Top Console Table",
    description:
      "A contemporary glass-top console table with metal legs. Ideal for hallways or living rooms as a decorative focal point.",
    price: "$2800",
  },
  {
    id: 40,
    name: "Contemporary Lounge Chair",
    imgSrc: "/images/lounge-chair.jpg", // TODO: the correct image path
    alt: "Contemporary Lounge Chair",
    description:
      "A comfortable and stylish lounge chair with a high back and plush cushioning, designed for modern interiors.",
    price: "$4300",
  },
  {
    id: 41,
    name: "Reclining Loveseat",
    imgSrc: "/images/reclining-loveseat.jpg", // TODO: the correct image path
    alt: "Reclining Loveseat",
    description:
      "A plush reclining loveseat with built-in cup holders and USB charging ports. Perfect for movie nights in luxury.",
    price: "$7200",
  },
  {
    id: 42,
    name: "Industrial Coffee Table",
    imgSrc: "/images/industrial-coffee-table.jpg", // TODO: the correct image path
    alt: "Industrial Coffee Table",
    description:
      "A rustic industrial coffee table with a solid wood top and metal frame. Adds character to any living space.",
    price: "$3600",
  },
  {
    id: 43,
    name: "Folding Dining Table",
    imgSrc: "/images/folding-dining-table.jpg", // TODO: the correct image path
    alt: "Folding Dining Table",
    description:
      "A modern foldable dining table perfect for small spaces. Easily expands to accommodate more guests when needed.",
    price: "$2400",
  },
  {
    id: 44,
    name: "Swivel Office Chair",
    imgSrc: "/images/swivel-office-chair.jpg", // TODO: the correct image path
    alt: "Swivel Office Chair",
    description:
      "A sleek swivel office chair with a high back, mesh support, and adjustable armrests. Ideal for long hours at your desk.",
    price: "$3400",
  },
  {
    id: 45,
    name: "Wooden TV Stand",
    imgSrc: "/images/wooden-tv-stand.jpg", // TODO: the correct image path
    alt: "Wooden TV Stand",
    description:
      "A mid-century modern wooden TV stand with multiple drawers for storage. Fits TVs up to 65 inches.",
    price: "$3100",
  },
  {
    id: 46,
    name: "Velvet Sleeper Sofa",
    imgSrc: "/images/sleeper-sofa.jpg", // TODO: the correct image path
    alt: "Velvet Sleeper Sofa",
    description:
      "A soft velvet sleeper sofa that converts into a bed. Ideal for guest rooms or cozy living spaces.",
    price: "$6700",
  },
  {
    id: 47,
    name: "Geometric Area Rug",
    imgSrc: "/images/area-rug.jpg", // TODO: the correct image path
    alt: "Geometric Area Rug",
    description:
      "A bold geometric patterned area rug made from soft wool, designed to add texture and warmth to any room.",
    price: "$2100",
  },
  {
    id: 48,
    name: "Console Cabinet",
    imgSrc: "/images/console-cabinet.jpg", // TODO: the correct image path
    alt: "Console Cabinet",
    description:
      "A sleek wooden console cabinet with sliding doors and brass accents, perfect for storing essentials in style.",
    price: "$4200",
  },
  {
    id: 49,
    name: "Outdoor Dining Set",
    imgSrc: "/images/outdoor-dining-set.jpg", // TODO: the correct image path
    alt: "Outdoor Dining Set",
    description:
      "A durable outdoor dining set made from weather-resistant materials, seating up to eight people.",
    price: "$9300",
  },
  {
    id: 50,
    name: "Upholstered Bench",
    imgSrc: "/images/upholstered-bench.jpg", // TODO: the correct image path
    alt: "Upholstered Bench",
    description:
      "A minimalist upholstered bench with solid wood legs, suitable for entryways or dining areas.",
    price: "$1900",
  },
  {
    id: 51,
    name: "Glass-Top Dining Table",
    imgSrc: "/images/glass-dining-table.jpg", // TODO: the correct image path
    alt: "Glass-Top Dining Table",
    description:
      "A sophisticated glass-top dining table with chrome legs, perfect for contemporary dining spaces.",
    price: "$6100",
  },
  {
    id: 52,
    name: "Leather Ottoman",
    imgSrc: "/images/leather-ottoman.jpg", // TODO: the correct image path
    alt: "Leather Ottoman",
    description:
      "A round leather ottoman with button-tufted details. Doubles as a footrest or extra seating.",
    price: "$1600",
  },
  {
    id: 53,
    name: "Bamboo Side Table",
    imgSrc: "/images/bamboo-side-table.jpg", // TODO: the correct image path
    alt: "Bamboo Side Table",
    description:
      "A sustainable bamboo side table with a smooth finish. Adds a natural touch to any living space.",
    price: "$1300",
  },
  {
    id: 54,
    name: "Modern Recliner",
    imgSrc: "/images/modern-recliner.jpg", // TODO: the correct image path
    alt: "Modern Recliner",
    description:
      "A sleek and comfortable recliner with smooth mechanisms, designed for a modern living room setup.",
    price: "$5200",
  },
  {
    id: 55,
    name: "Tufted King Bed",
    imgSrc: "/images/tufted-king-bed.jpg", // TODO: the correct image path
    alt: "Tufted King Bed",
    description:
      "A luxurious tufted king bed frame with a high headboard, perfect for a statement bedroom centerpiece.",
    price: "$8700",
  },
  {
    id: 56,
    name: "Round Dining Table",
    imgSrc: "/images/round-dining-table.jpg", // TODO: the correct image path
    alt: "Round Dining Table",
    description:
      "A round wooden dining table with a pedestal base, providing ample seating space for four to six people.",
    price: "$5100",
  },
  {
    id: 57,
    name: "Fabric Armchair",
    imgSrc: "/images/fabric-armchair.jpg", // TODO: the correct image path
    alt: "Fabric Armchair",
    description:
      "A cozy fabric armchair with wide seating and supportive cushions. Ideal for living rooms and reading corners.",
    price: "$2900",
  },
  {
    id: 58,
    name: "Ladder Shelf",
    imgSrc: "/images/ladder-shelf.jpg", // TODO: the correct image path
    alt: "Ladder Shelf",
    description:
      "A modern ladder shelf with five tiers for displaying books, plants, or decor. Compact and stylish.",
    price: "$1200",
  },
  {
    id: 59,
    name: "Chaise Sectional Sofa",
    imgSrc: "/images/chaise-sectional-sofa.jpg", // TODO: the correct image path
    alt: "Chaise Sectional Sofa",
    description:
      "A contemporary chaise sectional sofa with wide seats and clean lines, perfect for open living spaces.",
    price: "$14800",
  },
  {
    id: 60,
    name: "Marble Accent Table",
    imgSrc: "/images/marble-accent-table.jpg", // TODO: the correct image path
    alt: "Marble Accent Table",
    description:
      "A round marble accent table with a gold metal base, perfect for displaying decorative items or serving drinks.",
    price: "$1900",
  },
];

const PAGE_SIZE = 10; // 10 items per page

export async function GET(req: NextRequest, res: NextResponse) {

  const searchParams = req.nextUrl.searchParams;
  const pageQuery = searchParams.get("page") || "1";

  const pageNumber = parseInt(pageQuery) || 1;

  try {
    await new Promise<void>((resolve) => {
      rateLimit(req, res, () => resolve());
    });

    const startIndex = (pageNumber - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const paginatedStoreItems = STORE_ITEMS.slice(startIndex, endIndex);

    return NextResponse.json(paginatedStoreItems)
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
