import { NextResponse, NextRequest } from "next/server";
import { middleware } from "../../../../lib/rateLimit";

const STORE_ITEMS = [
  {
    id: 1,
    name: "Modern Sofa Set",
    imgSrc: "/images/sofa.jpg", // TODO: the correct image path
    alt: "Modern Sofa Set",
    description:
      "A luxurious modern sofa set with sleek design, perfect for any living room. Upholstered in premium fabric for comfort.",
    detailedDescription:
      "The Modern Sofa Set features a luxurious and sleek design, ideal for enhancing any living room. Upholstered in premium fabric, this sofa set offers exceptional comfort and style. The modern design includes clean lines and a sophisticated color palette, making it a versatile choice for various interior styles. The plush cushions and sturdy frame ensure durability and long-lasting comfort, while the elegant appearance adds a touch of refinement to your living space.",
    price: "$8900",
    tags: ["modern", "sofa set", "luxurious", "premium fabric"],
  },
  {
    id: 2,
    name: "Dining Table Set",
    imgSrc: "/images/dining-table.jpg", // TODO: the correct image path
    alt: "Dining Table Set",
    description:
      "Elegant dining table set made of solid oak wood, seating up to six people. Ideal for contemporary kitchen spaces.",
    detailedDescription:
      "The Dining Table Set is crafted from solid oak wood, offering an elegant and durable solution for contemporary kitchen spaces. Seating up to six people, this set is designed to accommodate family meals and gatherings in style. The solid oak construction provides both strength and sophistication, while the sleek design complements modern interiors. The set includes a spacious dining table and matching chairs, all finished to highlight the natural beauty of the wood.",
    price: "$10850",
    tags: ["dining table", "oak wood", "elegant", "contemporary"],
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    imgSrc: "/images/office-chair.jpg", // TODO: the correct image path
    alt: "Ergonomic Office Chair",
    description:
      "Designed for maximum comfort, this ergonomic office chair provides lumbar support for long working hours.",
    detailedDescription:
      "The Ergonomic Office Chair is engineered for maximum comfort and support during long working hours. Featuring advanced lumbar support, it helps maintain proper posture and reduce back strain. The chair's adjustable features, including height and armrests, ensure a customized fit for various body types and preferences. The high-quality materials and ergonomic design make it a perfect choice for both home and professional office environments, enhancing productivity and comfort throughout the workday.",
    price: "$3400",
    tags: ["ergonomic", "office chair", "lumbar support", "adjustable"],
  },
  {
    id: 4,
    name: "Queen Bed Frame",
    imgSrc: "/images/bed-frame.jpg", // TODO: the correct image path
    alt: "Queen Bed Frame",
    description:
      "Minimalist queen bed frame made from solid walnut wood, featuring a smooth headboard and modern design.",
    detailedDescription:
      "The Queen Bed Frame offers a minimalist design with a solid walnut wood construction, providing both elegance and durability. The smooth headboard and modern design contribute to a clean and sophisticated look, making it an ideal choice for contemporary bedrooms. The solid walnut wood ensures longevity and stability, while the understated design complements a variety of decor styles. This bed frame combines functionality with aesthetic appeal, creating a stylish and restful sleep environment.",
    price: "$2950",
    tags: ["queen bed", "walnut wood", "minimalist", "modern"],
  },
  {
    id: 5,
    name: "Leather Recliner",
    imgSrc: "/images/recliner.jpg", // TODO: the correct image path
    alt: "Leather Recliner",
    description:
      "A classic leather recliner with a smooth mechanism for ultimate relaxation. Perfect for living rooms or home theaters.",
    detailedDescription:
      "The Leather Recliner is designed for ultimate relaxation with its classic style and smooth reclining mechanism. Upholstered in high-quality leather, it offers both luxury and durability, making it perfect for living rooms or home theaters. The smooth mechanism allows for easy adjustment, providing personalized comfort for lounging or watching TV. The elegant design and premium leather construction ensure that this recliner not only enhances your relaxation experience but also adds a touch of sophistication to your space.",
    price: "$4300",
    tags: ["leather", "recliner", "classic", "relaxation"],
  },

  {
    id: 6,
    name: "Glass Coffee Table",
    tags: ["2024collection", "coffeeTable", "glass", "modern", "minimalist"],
    imgSrc: "/images/coffee-table.jpg",
    alt: "Glass Coffee Table",
    description:
      "A sleek, modern coffee table with a glass top and chrome base.",
    detailedDescription:
      "Crafted with a commitment to both style and durability, this Glass Coffee Table is a testament to modern design. The sleek glass surface is held by a minimalist chrome base, meticulously engineered for stability and visual appeal. The glass used is tempered for enhanced safety and durability, ensuring it stands up to daily use while maintaining its pristine clarity. This table seamlessly integrates into contemporary living spaces, providing a chic focal point that enhances the overall aesthetic of your home. Each piece is carefully inspected to meet our high standards, reflecting a blend of elegance and functionality that defines our 2024 collection.",
    price: "$3200",
  },
  {
    id: 7,
    name: "Luxury Sectional Sofa",
    tags: ["2024collection", "sectionalSofa", "luxury", "leather", "modern"],
    imgSrc: "/images/sectional-sofa.jpg",
    alt: "Luxury Sectional Sofa",
    description:
      "A luxurious sectional sofa with plush leather upholstery and adjustable headrests.",
    detailedDescription:
      "Indulge in unparalleled comfort with our Luxury Sectional Sofa, designed for those who appreciate the finer things in life. This L-shaped sectional features plush cushions upholstered in premium leather, sourced from the finest tanneries. The leather's natural grain and rich texture are preserved through a meticulous tanning process that ensures durability and a luxurious feel. The sectional's design includes adjustable headrests and deep seating, providing an inviting space to relax. The craftsmanship involved in creating this sofa includes hand-stitching and detailed quality checks, guaranteeing that each piece is as comfortable as it is stylish. Ideal for modern living rooms, this sofa exemplifies luxury and sophistication.",
    price: "$12600",
  },
  {
    id: 8,
    name: "Marble Top Dining Table",
    tags: ["2024collection", "diningTable", "marble", "modern", "luxury"],
    imgSrc: "/images/marble-dining-table.jpg",
    alt: "Marble Top Dining Table",
    description:
      "An elegant dining table with a marble top and stainless steel base.",
    detailedDescription:
      "Elevate your dining experience with our Marble Top Dining Table, an epitome of elegance and luxury. The table features a stunning marble top, each piece unique with its natural veining and polished finish. This marble is carefully selected for its quality and durability, providing a timeless surface that resists scratches and stains. The base, made from stainless steel, adds a contemporary touch with its sleek lines and reflective surface. The table is designed to comfortably seat up to eight guests, making it perfect for gatherings and formal dinners. The assembly process involves precise engineering to ensure stability and alignment, resulting in a piece that combines functionality with a sophisticated design. This table is a centerpiece that transforms any dining area into a space of refinement.",
    price: "$15400",
  },
  {
    id: 9,
    name: "Modern TV Stand",
    tags: ["2024collection", "tvStand", "modern", "oak", "storage"],
    imgSrc: "/images/tv-stand.jpg",
    alt: "Modern TV Stand",
    description:
      "A contemporary TV stand made of solid oak with multiple storage compartments.",
    detailedDescription:
      "Our Modern TV Stand is crafted from high-quality solid oak, chosen for its strength and natural beauty. The wood is treated with a protective finish that enhances its durability while maintaining its natural grain and color. The design features multiple storage compartments, ideal for organizing media equipment and accessories. The clean lines and minimalist design ensure that the TV stand complements a variety of interior styles, from contemporary to transitional. Each unit is assembled with precision to ensure stability and a seamless fit. This TV stand is not just a functional piece but a stylish addition to your living room, embodying a perfect blend of modern design and practical storage.",
    price: "$2200",
  },
  {
    id: 10,
    name: "Velvet Armchair",
    tags: ["2024collection", "armchair", "velvet", "luxury", "modern"],
    imgSrc: "/images/velvet-armchair.jpg",
    alt: "Velvet Armchair",
    description:
      "A luxurious armchair upholstered in soft velvet with brass legs.",
    detailedDescription:
      "The Velvet Armchair is a symbol of luxury and modern elegance. Upholstered in rich velvet, this armchair exudes a softness that invites you to sit and relax. The velvet fabric is sourced for its high quality, offering a plush texture that retains its color and feel over time. The armchair's brass legs add a touch of sophistication, contrasting beautifully with the deep hues of the velvet. The design includes wide seating and supportive cushioning, making it perfect for lounging or reading. Each armchair is handcrafted with attention to detail, ensuring that every stitch and finish meets our high standards. This piece not only enhances the visual appeal of your living space but also provides unparalleled comfort.",
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
      "A weather-resistant outdoor patio set made from rattan, including a sofa, chairs, and a center table.",
    detailedDescription:
      "Transform your outdoor space with our Outdoor Patio Set, designed for durability and comfort. Made from weather-resistant rattan, this set is built to withstand the elements while maintaining its aesthetic appeal. The rattan is intricately woven and treated to resist UV rays and moisture, ensuring long-lasting use. The set includes a sofa, chairs, and a center table, all featuring plush cushions upholstered in a fade-resistant fabric. The cushions are filled with high-density foam for added comfort and support. The design is both stylish and functional, with easy-to-clean surfaces and removable cushion covers. Ideal for entertaining or relaxing, this patio set brings luxury and practicality to your outdoor living area.",
    price: "$7400",
  },
  {
    id: 12,
    name: "Contemporary Bookshelf",
    tags: ["2024collection", "bookshelf", "contemporary", "storage", "modern"],
    imgSrc: "/images/bookshelf.jpg",
    alt: "Contemporary Bookshelf",
    description:
      "A tall bookshelf with open shelving and a sleek black finish.",
    detailedDescription:
      "Our Contemporary Bookshelf combines modern design with practical storage. The tall bookshelf features open shelving, allowing you to display books, art, and decorative items. Constructed with high-quality materials, the bookshelf is finished in a sleek black that complements any interior decor. The open design ensures that items are easily accessible while adding a touch of sophistication to your space. Each shelf is carefully measured and assembled to provide sturdy support for your collection. The bookshelf's design includes clean lines and a minimalistic approach, making it a versatile addition to living rooms, home offices, or libraries. The attention to detail in craftsmanship ensures that this piece not only meets but exceeds expectations in both style and functionality.",
    price: "$1800",
  },
  {
    id: 13,
    name: "Modern Floor Lamp",
    tags: ["2024collection", "floorLamp", "minimalist", "lighting", "brass"],
    imgSrc: "/images/floor-lamp.jpg",
    alt: "Modern Floor Lamp",
    description:
      "A stylish floor lamp with a brass stand and frosted glass shade.",
    detailedDescription:
      "Illuminate your space with our Modern Floor Lamp, a perfect blend of minimalist design and functional lighting. The lamp features an adjustable brass stand, which is both durable and stylish, and a frosted glass shade that provides warm, ambient light. The brass is treated to resist tarnishing, maintaining its lustrous finish over time. The design allows for easy adjustment of the lamp's height and angle, making it versatile for various lighting needs. Whether placed in a living room, office, or reading nook, this floor lamp enhances the ambiance of your space while adding a touch of contemporary elegance. Each lamp is meticulously crafted to ensure durability and aesthetic appeal, reflecting our commitment to quality and design.",
    price: "$950",
  },
  {
    id: 14,
    name: "Leather Sectional Sofa",
    tags: ["2024collection", "sectionalSofa", "leather", "luxury", "modern"],
    imgSrc: "/images/leather-sectional.jpg",
    alt: "Leather Sectional Sofa",
    description:
      "A luxurious leather sectional sofa with deep seating and adjustable headrests.",
    detailedDescription:
      "The Leather Sectional Sofa epitomizes luxury and modern sophistication. This sectional features premium leather upholstery, sourced from top-quality tanneries, known for its supple texture and durability. The leather is hand-finished to ensure a rich, uniform appearance and long-lasting resilience. The sectional's design includes adjustable headrests and deep, comfortable seating, ideal for unwinding or hosting guests. The craftsmanship involves meticulous hand-stitching and quality control to ensure each piece meets our high standards. With its elegant design and superior comfort, this sectional sofa is a statement piece that enhances any modern living space.",
    price: "$15200",
  },
  {
    id: 15,
    name: "Wooden Console Table",
    tags: ["2024collection", "consoleTable", "wood", "modern", "walnut"],
    imgSrc: "/images/console-table.jpg",
    alt: "Wooden Console Table",
    description:
      "A modern wooden console table with a walnut finish and sleek design.",
    detailedDescription:
      "Our Wooden Console Table is a striking example of modern design with a focus on quality craftsmanship. Made from rich walnut wood, this console table features sleek lines and a smooth finish. The wood is carefully selected for its grain and color, and treated to resist scratches and stains. The minimalist design ensures that the table complements various interior styles, from contemporary to classic. The craftsmanship includes precision joinery and hand-finishing, highlighting the natural beauty of the walnut wood. This console table is not only a functional piece but also a stylish addition to any hallway, entryway, or living space, providing both elegance and practicality.",
    price: "$1900",
  },
  {
    id: 16,
    name: "Modern Bedside Table",
    tags: ["2024collection", "bedsideTable", "marble", "oak", "modern"],
    imgSrc: "/images/bedside-table.jpg",
    alt: "Modern Bedside Table",
    description:
      "A stylish bedside table with a marble top and solid oak legs. Features a soft-close drawer for storage.",
    detailedDescription:
      "The Modern Bedside Table is a perfect blend of elegance and functionality. The table features a luxurious marble top, known for its durability and timeless beauty, with each piece showcasing unique veining. The solid oak legs provide a sturdy foundation, crafted from carefully selected wood that is both resilient and visually appealing. The design includes a soft-close drawer mechanism, ensuring a quiet and smooth operation. This bedside table complements modern and contemporary interiors, adding a touch of sophistication to your bedroom while offering practical storage solutions. Each unit is meticulously assembled to guarantee longevity and style.",
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
    detailedDescription:
      "The Reclaimed Wood Dining Table embodies rustic charm and sustainability. Constructed from reclaimed wood, this table features unique natural grain patterns and a weathered finish that tells a story of its past. Each table is carefully restored and treated to ensure durability while preserving its original character. Designed to seat up to six people, it is perfect for gatherings and family meals. The sturdy construction and timeless design make it an ideal addition to modern farmhouse interiors, blending traditional craftsmanship with contemporary style. This dining table combines environmental consciousness with aesthetic appeal, making it a centerpiece in any dining area.",
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
    detailedDescription:
      "The Chaise Lounge Chair is the epitome of luxury and relaxation. Upholstered in sumptuous velvet, this chair offers a rich texture and opulent feel. The velvet fabric is selected for its softness and durability, ensuring that it maintains its vibrant color and plush feel over time. The curved design of the chaise provides an inviting space for lounging, with ergonomic support that enhances comfort. Ideal for both modern and classic interiors, this chair adds a touch of elegance and sophistication to any room. Each chaise lounge is crafted with attention to detail, featuring high-quality construction and finishing that reflect our commitment to excellence.",
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
    detailedDescription:
      "The Mid-Century Modern Armchair is a timeless piece that exemplifies the elegance of mid-century design. Featuring tapered wooden legs and a button-tufted backrest, this armchair combines classic aesthetics with modern comfort. The wooden legs are crafted from high-quality materials, providing both durability and a sophisticated look. The button-tufted backrest adds a touch of refinement, while the chair's design ensures that it fits seamlessly into contemporary living rooms. Each armchair is carefully constructed to meet high standards of quality and style, making it a standout addition to any interior decor.",
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
    detailedDescription:
      "Our Modern Wall Shelf is designed to enhance your space with its minimalist aesthetic and functional design. Made from solid oak, this shelf features a clean, sleek profile that complements a variety of interior styles. The oak wood is carefully selected and finished to highlight its natural beauty and ensure durability. The shelf is easy to mount on any wall, providing a practical solution for displaying books, decorative items, or personal treasures. Each shelf is crafted with precision to offer both style and stability, making it a versatile addition to any room.",
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
    detailedDescription:
      "The Luxury Ottoman is a versatile and stylish piece that serves multiple functions. Upholstered in premium fabric, this ottoman is designed for both comfort and aesthetic appeal. The tufted design adds a touch of elegance, making it a chic addition to any living space. It can be used as a coffee table, footrest, or even extra seating, providing flexibility and style. The fabric is selected for its durability and softness, ensuring that the ottoman maintains its luxurious look and feel over time. Each ottoman is meticulously crafted to meet high standards of quality and design, making it a standout piece in any modern decor.",
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
    detailedDescription:
      "The Extendable Dining Table is designed to offer flexibility and style for your dining area. Featuring a sleek tempered glass top, the table provides a modern look while being durable and easy to clean. The metal legs add a contemporary touch and ensure stability. The extendable feature allows the table to comfortably seat between 6 to 10 people, making it ideal for both intimate dinners and larger gatherings. The design emphasizes both function and elegance, with attention to detail in the engineering and finishing. This table seamlessly integrates into modern interiors, combining practicality with sophisticated design.",
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
    detailedDescription:
      "The Velvet Chaise Lounge is a luxurious piece that enhances any living space or bedroom. Upholstered in high-quality velvet, the chaise offers a plush and comfortable seating experience. The velvet is chosen for its rich texture and durability, providing both beauty and functionality. The deep cushions ensure exceptional comfort, while the brass legs add a sophisticated touch. The elegant design and high-quality materials make this chaise lounge a standout addition to modern interiors, offering a perfect blend of relaxation and style. Each piece is meticulously crafted to meet our high standards of luxury and design.",
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
    detailedDescription:
      "The Bar Stool Set combines modern design with practical functionality. Each stool features a leather seat, offering comfort and style, and is supported by a chrome-plated base that adds a sleek, contemporary look. The chrome base is designed for durability and easy maintenance, while the leather seat is selected for its quality and comfort. The stools are ideal for use in contemporary kitchens or home bars, providing both elegance and practicality. The design ensures that each stool is both stylish and functional, making it a perfect addition to any modern space.",
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
    detailedDescription:
      "The Solid Wood Dresser is crafted from premium solid wood, offering both durability and timeless appeal. The six drawers provide ample storage space, making it a practical solution for organizing clothing and accessories in any bedroom or walk-in closet. The smooth finish enhances the natural beauty of the wood, while the design ensures that the dresser integrates seamlessly into modern interiors. Each dresser is carefully constructed to ensure long-lasting quality and style, making it a valuable addition to your home decor. The attention to detail in both design and craftsmanship highlights our commitment to excellence.",
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
    detailedDescription:
      "The Metal Bed Frame features a robust industrial design, combining functionality with a modern aesthetic. Constructed from high-quality metal, the frame offers exceptional durability and support. The slatted headboard adds a distinctive touch, enhancing the overall design while providing additional support. Available in both queen and king sizes, this bed frame is designed to fit a variety of bedroom layouts and styles. The industrial design and metal construction make it a versatile choice for contemporary interiors, blending strength and style in a single piece. Each frame is carefully engineered to meet high standards of quality and design.",
    price: "$5500",
  },
  {
    id: 27,
    name: "Luxury Armchair",
    tags: ["luxury", "living room", "velvet", "seating"],
    imgSrc: "/images/luxury-armchair.jpg",
    alt: "Luxury Armchair",
    description:
      "A plush luxury armchair with deep seating and velvet upholstery. Ideal for living rooms or reading nooks.",
    detailedDescription:
      "The Luxury Armchair offers unmatched comfort and elegance, making it a perfect addition to living rooms or reading nooks. Upholstered in sumptuous velvet, the armchair features deep seating that provides a plush and relaxing experience. The velvet fabric is chosen for its rich texture and durability, ensuring that the armchair maintains its luxurious feel over time. The design combines both style and functionality, with a focus on providing superior comfort. Each armchair is meticulously crafted to reflect our commitment to high-quality design and craftsmanship, making it a standout piece in any interior.",
    price: "$3600",
  },
  {
    id: 28,
    name: "Modern Vanity Set",
    tags: ["modern", "vanity", "glass", "storage"],
    imgSrc: "/images/vanity-set.jpg",
    alt: "Modern Vanity Set",
    description:
      "A modern vanity set with a glass top and matching stool, featuring a mirror and ample storage for beauty essentials.",
    detailedDescription:
      "The Modern Vanity Set is designed to combine style and practicality, offering a sleek and functional solution for your beauty essentials. The glass top adds a contemporary touch, while the matching stool provides comfort and support. The vanity set includes a mirror, essential for grooming and makeup application, and features ample storage to keep your beauty products organized. The design emphasizes clean lines and modern aesthetics, ensuring that it complements a variety of interior styles. Each set is crafted with attention to detail, reflecting our commitment to quality and design.",
    price: "$4100",
  },
  {
    id: 29,
    name: "Minimalist Desk",
    tags: ["minimalist", "desk", "home office", "solid wood"],
    imgSrc: "/images/minimalist-desk.jpg",
    alt: "Minimalist Desk",
    description:
      "A sleek, minimalist desk with solid wood construction and clean lines. Perfect for home offices or workspaces.",
    detailedDescription:
      "The Minimalist Desk is designed to offer a clean, uncluttered workspace that enhances productivity and style. Constructed from solid wood, the desk features a sturdy build and natural finish that highlights the wood's inherent beauty. The minimalist design ensures that the desk integrates seamlessly into modern home offices or workspaces, providing a functional and aesthetically pleasing solution. The clean lines and simple form make it versatile enough to complement various interior styles. Each desk is crafted with precision to ensure high-quality construction and a timeless design.",
    price: "$2900",
  },
  {
    id: 30,
    name: "Accent Armchair",
    tags: ["contemporary", "armchair", "geometric", "plush"],
    imgSrc: "/images/accent-armchair.jpg",
    alt: "Accent Armchair",
    description:
      "A bold accent armchair with a contemporary design, featuring geometric patterns and plush cushions. Adds flair to any room.",
    detailedDescription:
      "The Accent Armchair is designed to make a statement with its bold contemporary style. Featuring geometric patterns and plush cushions, this armchair adds a distinctive flair to any room. The design combines modern aesthetics with comfort, offering a seating experience that is both stylish and inviting. The geometric patterns are carefully crafted to create a visually appealing look, while the plush cushions provide exceptional comfort. Ideal for contemporary interiors, this armchair serves as a focal point and enhances the overall decor of your space. Each piece is crafted to meet high standards of design and quality.",
    price: "$3400",
  },
  {
    id: 31,
    name: "Convertible Sofa Bed",
    tags: ["convertible", "sofa", "queen-sized", "guest room"],
    imgSrc: "/images/sofa-bed.jpg",
    alt: "Convertible Sofa Bed",
    description:
      "A multi-functional sofa bed that converts into a queen-sized sleeper. Ideal for small apartments or guest rooms.",
    detailedDescription:
      "The Convertible Sofa Bed offers a versatile solution for small apartments or guest rooms. This multi-functional piece easily transforms from a stylish sofa into a queen-sized sleeper, providing comfort and convenience. The design emphasizes both functionality and style, with a sleek, modern appearance that fits seamlessly into various interior decor. The sofa bed is crafted with high-quality materials to ensure durability and comfort, making it an ideal choice for those who value both practicality and aesthetics. Each unit is carefully engineered to provide a smooth and easy transition between sofa and bed modes.",
    price: "$7800",
  },
  {
    id: 32,
    name: "Rattan Armchair",
    tags: ["rattan", "natural", "indoor", "outdoor"],
    imgSrc: "/images/rattan-armchair.jpg",
    alt: "Rattan Armchair",
    description:
      "A chic rattan armchair with a natural finish, perfect for indoor or outdoor spaces. Comfortable, breathable design.",
    detailedDescription:
      "The Rattan Armchair combines natural charm with comfort, making it suitable for both indoor and outdoor spaces. The chair is crafted from high-quality rattan, which is selected for its strength and natural beauty. The breathable design ensures comfort, while the natural finish highlights the rattan's unique texture and color. This armchair is ideal for adding a touch of elegance to patios, sunrooms, or living areas. Each chair is meticulously crafted to ensure durability and style, reflecting our commitment to quality and design.",
    price: "$1800",
  },
  {
    id: 33,
    name: "Wall-Mounted Storage Unit",
    tags: ["minimalist", "storage", "wall-mounted", "compartments"],
    imgSrc: "/images/storage-unit.jpg",
    alt: "Wall-Mounted Storage Unit",
    description:
      "A minimalist wall-mounted storage unit with multiple compartments for books, decorative items, or media equipment.",
    detailedDescription:
      "The Wall-Mounted Storage Unit offers a stylish and practical solution for organizing books, decorative items, or media equipment. Designed with a minimalist approach, the unit features multiple compartments that provide ample storage while maintaining a clean, uncluttered look. The wall-mounted design maximizes floor space and adds a modern touch to your interior decor. Each unit is crafted with attention to detail, ensuring durability and functionality. This storage unit seamlessly integrates into contemporary spaces, combining practicality with sleek design.",
    price: "$2300",
  },
  {
    id: 34,
    name: "Rocking Chair",
    tags: ["classic", "wooden", "rocking chair", "ergonomic"],
    imgSrc: "/images/rocking-chair.jpg",
    alt: "Rocking Chair",
    description:
      "A classic wooden rocking chair with an ergonomic seat, providing comfort and relaxation for any living room or porch.",
    detailedDescription:
      "The Rocking Chair is a classic piece designed for comfort and relaxation. Crafted from high-quality wood, the chair features an ergonomic seat that offers exceptional support and comfort. The traditional rocking motion provides a soothing experience, making it perfect for living rooms or porches. Each chair is meticulously constructed to ensure durability and style, with attention to detail in the joinery and finish. The timeless design of this rocking chair adds a touch of classic charm to any space, blending functionality with aesthetic appeal.",
    price: "$1500",
  },
  {
    id: 35,
    name: "Glass Display Cabinet",
    tags: ["glass", "display", "cabinet", "LED lighting"],
    imgSrc: "/images/display-cabinet.jpg",
    alt: "Glass Display Cabinet",
    description:
      "A glass display cabinet with adjustable shelves and LED lighting, perfect for showcasing collectibles or fine dinnerware.",
    detailedDescription:
      "The Glass Display Cabinet is designed to showcase your collectibles or fine dinnerware with elegance. Featuring adjustable shelves and LED lighting, it provides a bright and visually appealing display for your treasured items. The glass construction ensures that the contents are prominently displayed, while the LED lighting highlights their beauty. The adjustable shelves offer flexibility in organizing items of different sizes, making it a versatile addition to any interior. Each cabinet is crafted with high-quality materials and attention to detail, ensuring a stylish and functional solution for your display needs.",
    price: "$4900",
  },
  {
    id: 36,
    name: "Leather Desk Chair",
    tags: ["leather", "desk chair", "lumbar support", "executive"],
    imgSrc: "/images/leather-desk-chair.jpg",
    alt: "Leather Desk Chair",
    description:
      "An executive leather desk chair with adjustable height and lumbar support. Ideal for long hours of work in comfort.",
    detailedDescription:
      "The Leather Desk Chair is designed for those who spend long hours at their desk, offering exceptional comfort and support. Upholstered in high-quality leather, the chair features adjustable height and lumbar support, ensuring a customized seating experience. The executive design combines functionality with a sophisticated appearance, making it suitable for professional settings. The leather upholstery is chosen for its durability and elegance, while the adjustable features allow for a personalized fit. Each chair is engineered to meet high standards of comfort and design, enhancing your work environment.",
    price: "$2900",
  },
  {
    id: 37,
    name: "Woven Jute Rug",
    tags: ["woven", "jute", "rug", "natural"],
    imgSrc: "/images/jute-rug.jpg",
    alt: "Woven Jute Rug",
    description:
      "A handwoven jute rug with natural textures, adding warmth and character to any living room or bedroom.",
    detailedDescription:
      "The Woven Jute Rug is handwoven to provide a natural and textured surface that adds warmth and character to any space. The jute material is selected for its durability and eco-friendly properties, making it a sustainable choice for your home. The natural textures of the rug complement various interior styles, from modern to rustic. Each rug is crafted with care to ensure quality and durability, reflecting our commitment to providing stylish and functional decor solutions.",
    price: "$1800",
  },
  {
    id: 38,
    name: "Corner Bookshelf",
    tags: ["corner", "bookshelf", "space-saving", "five tiers"],
    imgSrc: "/images/corner-bookshelf.jpg",
    alt: "Corner Bookshelf",
    description:
      "A space-saving corner bookshelf with five tiers, perfect for displaying books, plants, or decorative items.",
    detailedDescription:
      "The Corner Bookshelf is designed to maximize space while providing ample storage and display options. Featuring five tiers, the bookshelf is ideal for organizing books, plants, or decorative items. The space-saving design allows it to fit neatly into corners, making it a practical addition to any room. The bookshelf is constructed with attention to detail, ensuring both functionality and style. Each unit is crafted to provide a stylish and practical solution for organizing your space.",
    price: "$1200",
  },
  {
    id: 39,
    name: "Glass-Top Console Table",
    tags: ["contemporary", "console table", "glass-top", "metal legs"],
    imgSrc: "/images/glass-console-table.jpg",
    alt: "Glass-Top Console Table",
    description:
      "A contemporary glass-top console table with metal legs. Ideal for hallways or living rooms as a decorative focal point.",
    detailedDescription:
      "The Glass-Top Console Table is designed to be a striking focal point in any hallway or living room. With a contemporary design featuring a glass top and metal legs, the table offers a sleek and modern appearance. The glass top provides a clear view of the table's surface, while the metal legs add a touch of sophistication and stability. Ideal for use as a decorative piece or a functional surface, the table is crafted with high-quality materials to ensure both style and durability. Each unit is carefully designed to enhance your interior decor with a touch of contemporary elegance.",
    price: "$2800",
  },
  {
    id: 40,
    name: "Contemporary Lounge Chair",
    tags: ["contemporary", "lounge chair", "plush", "modern"],
    imgSrc: "/images/lounge-chair.jpg",
    alt: "Contemporary Lounge Chair",
    description:
      "A comfortable and stylish lounge chair with a high back and plush cushioning, designed for modern interiors.",
    detailedDescription:
      "The Contemporary Lounge Chair is crafted to offer both comfort and style, featuring a high back and plush cushioning that ensures a luxurious seating experience. Designed for modern interiors, the chair combines sleek lines with contemporary aesthetics to create a visually appealing and comfortable piece. The high back provides additional support, while the plush cushioning offers exceptional comfort. Ideal for living rooms, offices, or lounges, this chair is meticulously crafted to meet high standards of design and quality, making it a standout addition to any modern space.",
    price: "$4300",
  },
  {
    id: 41,
    name: "Reclining Loveseat",
    tags: ["reclining", "loveseat", "USB ports", "plush"],
    imgSrc: "/images/reclining-loveseat.jpg",
    alt: "Reclining Loveseat",
    description:
      "A plush reclining loveseat with built-in cup holders and USB charging ports. Perfect for movie nights in luxury.",
    detailedDescription:
      "The Reclining Loveseat is designed for ultimate comfort and convenience, featuring plush seating and built-in amenities. Equipped with cup holders and USB charging ports, it provides a luxurious experience for movie nights or relaxation. The reclining feature allows you to adjust the position for optimal comfort, while the plush cushions offer a soft and supportive seating experience. Ideal for contemporary living rooms or home theaters, this loveseat combines functionality with luxury. Each unit is carefully crafted to provide high-quality design and comfort, making it a perfect addition to your home entertainment area.",
    price: "$7200",
  },
  {
    id: 42,
    name: "Industrial Coffee Table",
    imgSrc: "/images/industrial-coffee-table.jpg",
    alt: "Industrial Coffee Table",
    description:
      "A rustic industrial coffee table with a solid wood top and metal frame. Adds character to any living space.",
    detailedDescription:
      "The Industrial Coffee Table features a rugged industrial design with a solid wood top and a sturdy metal frame. This coffee table combines rustic charm with modern durability, making it an eye-catching piece that adds character to any living space. The solid wood top is finished to highlight its natural grain, while the metal frame provides a strong and stable base. Perfect for both contemporary and industrial-themed interiors, this coffee table offers a unique blend of style and functionality.",
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
    detailedDescription:
      "The Folding Dining Table is designed for versatility and convenience, making it ideal for small spaces. With a modern design, this table easily folds away when not in use, allowing you to maximize your living area. When needed, it expands to accommodate additional guests, offering flexibility for dining and entertaining. Constructed from high-quality materials, this dining table combines functionality with a sleek appearance, ensuring it fits seamlessly into various interior styles.",
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
    detailedDescription:
      "The Swivel Office Chair is designed to offer superior comfort and support during long hours at your desk. Featuring a high back with mesh support, it provides excellent ventilation and reduces strain on your back. The adjustable armrests allow for customized comfort, while the swivel function enhances mobility. Constructed with high-quality materials, this chair combines ergonomic features with a sleek design, making it an excellent choice for both home and professional office environments.",
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
    detailedDescription:
      "The Wooden TV Stand features a mid-century modern design with a solid wooden construction and multiple drawers for ample storage. Designed to fit TVs up to 65 inches, this TV stand combines functionality with a stylish appearance. The multiple drawers provide convenient storage for media components, accessories, and other essentials. The natural wood finish and clean lines make it a versatile piece that complements various interior styles while adding a touch of elegance to your living space.",
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
    detailedDescription:
      "The Velvet Sleeper Sofa offers a luxurious blend of comfort and functionality. Upholstered in soft velvet, it provides a plush seating experience that transforms into a comfortable bed for guests. Ideal for guest rooms or cozy living spaces, this sofa combines elegance with practicality. The sleek design and high-quality velvet fabric ensure durability and style, while the sleeper function offers convenience for accommodating overnight guests. Each sofa is crafted to meet high standards of comfort and design.",
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
    detailedDescription:
      "The Geometric Area Rug features a bold geometric pattern, crafted from soft wool to add both texture and warmth to your space. The intricate design and high-quality wool make this rug a stylish and functional addition to any room. The natural wool fibers provide durability and comfort, while the geometric pattern adds a modern touch to your decor. Ideal for living rooms, bedrooms, or offices, this rug enhances your interior with its combination of visual appeal and cozy texture.",
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
    detailedDescription:
      "The Console Cabinet features a sleek wooden design with sliding doors and elegant brass accents. Ideal for storing essentials, this cabinet combines functionality with a stylish appearance. The sliding doors provide easy access to the interior compartments, while the brass accents add a touch of sophistication. Perfect for use in entryways, living rooms, or dining areas, this console cabinet enhances your space with its modern design and practical storage solutions.",
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
    detailedDescription:
      "The Outdoor Dining Set is crafted from weather-resistant materials, making it perfect for outdoor entertaining. Designed to seat up to eight people, this set combines durability with style, ensuring it withstands the elements while providing a comfortable dining experience. The clean lines and robust construction make it a versatile addition to patios, decks, or garden areas. Each piece is carefully designed to offer both functionality and elegance, enhancing your outdoor living space.",
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
    detailedDescription:
      "The Upholstered Bench features a minimalist design with solid wood legs and a plush upholstered seat. Suitable for entryways, dining areas, or as additional seating in various spaces, this bench combines elegance with functionality. The solid wood legs provide a sturdy base, while the upholstered seat offers comfort and style. The clean lines and simple form make it a versatile piece that complements a range of interior decor styles, enhancing both functionality and visual appeal.",
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
    detailedDescription:
      "The Glass-Top Dining Table features a sophisticated design with a clear glass top and chrome legs. Ideal for contemporary dining spaces, this table offers a sleek and modern look that enhances any dining area. The glass top provides a transparent surface that showcases the table's elegant design, while the chrome legs add a touch of modern sophistication. Crafted with high-quality materials, this dining table combines style with durability, making it a standout piece for any dining room.",
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
    detailedDescription:
      "The Leather Ottoman is a versatile piece with a round design and button-tufted details. Upholstered in high-quality leather, it doubles as both a footrest and extra seating, making it a practical addition to any living room or lounge area. The button-tufted design adds a touch of elegance, while the durable leather upholstery ensures long-lasting use. This ottoman combines functionality with style, providing a comfortable and visually appealing solution for enhancing your space.",
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
    detailedDescription:
      "The Bamboo Side Table is crafted from sustainable bamboo, offering a natural and eco-friendly touch to your living space. The smooth finish highlights the bamboo's natural grain, creating a stylish and functional piece. Ideal for use as a side table in living rooms, bedrooms, or offices, this table combines durability with a modern aesthetic. The sustainable material and elegant design make it a practical choice for those looking to enhance their decor with an environmentally conscious option.",
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
    detailedDescription:
      "The Modern Recliner combines sleek design with exceptional comfort, featuring smooth reclining mechanisms and a contemporary appearance. Designed for modern living room setups, this recliner provides a luxurious seating experience with its plush cushioning and ergonomic design. The smooth mechanisms ensure easy adjustment, allowing you to find your perfect relaxation position. Crafted with high-quality materials, this recliner enhances your living space with both style and comfort.",
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
    detailedDescription:
      "The Tufted King Bed features a luxurious design with a high tufted headboard, making it a stunning centerpiece for any bedroom. The tufted detailing adds a touch of elegance and sophistication, while the sturdy frame provides both style and support. Upholstered in high-quality fabric, this king bed combines comfort with visual appeal, ensuring a restful and stylish sleep environment. Ideal for creating a statement in your bedroom, this bed is crafted to meet high standards of luxury and design.",
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
    detailedDescription:
      "The Round Dining Table features a classic wooden design with a pedestal base, offering ample seating space for four to six people. The round shape promotes a cozy and inclusive dining experience, making it ideal for family meals and gatherings. Constructed from high-quality wood, this table combines durability with timeless style. The pedestal base ensures stability while adding an elegant touch to the design. Perfect for both casual and formal dining spaces, this table enhances your dining area with its versatile and attractive appearance.",
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
    detailedDescription:
      "The Fabric Armchair offers a cozy and comfortable seating option with its wide seat and supportive cushions. Upholstered in soft fabric, this armchair is ideal for living rooms, reading corners, or any space where comfort is a priority. The wide seating area and plush cushions provide ample support, making it a perfect spot for relaxation. The versatile design and fabric upholstery make it easy to incorporate into various interior styles, enhancing your space with both comfort and style.",
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
    detailedDescription:
      "The Ladder Shelf is designed with a modern aesthetic and five tiers, offering ample space for displaying books, plants, or decorative items. Its compact design allows it to fit neatly into various spaces, while the stylish appearance adds a contemporary touch to your decor. The ladder design provides a visually appealing way to organize and showcase your items, making it a practical and stylish addition to any room. Constructed with quality materials, this shelf combines functionality with modern design elements.",
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
    detailedDescription:
      "The Chaise Sectional Sofa is designed with contemporary style, featuring wide seats and clean lines that make it ideal for open living spaces. This sectional offers ample seating for family and guests, with a chaise section that provides additional lounging space. The sleek design and comfortable cushioning make it a stylish and functional choice for modern interiors. Crafted with high-quality materials, this sectional sofa combines durability with a sophisticated appearance, enhancing your living area with its contemporary charm.",
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
    detailedDescription:
      "The Marble Accent Table features a round marble top with a luxurious gold metal base, creating a striking contrast that enhances any decor. Ideal for displaying decorative items or serving drinks, this table adds a touch of elegance and sophistication to your space. The marble top provides a smooth and durable surface, while the gold metal base adds a glamorous touch. Perfect for use in living rooms, entryways, or as a stylish accent piece, this table combines high-quality materials with a chic design.",
    price: "$1900",
    tags: ["marble", "accent table", "gold metal", "decorative"],
  },
];

const PAGE_SIZE = 10; // 10 items per page

export async function GET(req: NextRequest) {
  try {
    await new Promise<void>(() => {
      middleware(req);
    });

    const searchParams = req.nextUrl.searchParams;
    const pageQuery = searchParams.get("page") || "1";
    const searchQuery = searchParams.get("q") || "";
    const tagsQuery = searchParams.get("tags") || "[]";
    const itemId = searchParams.get("itemId") || "";
    const featuredItems = searchParams.get("featuredItems") || "false";

    let filteredItems = STORE_ITEMS;

    if (featuredItems === "true") {
      return NextResponse.json(filteredItems.slice(0, 5));
    }

    if (itemId) {
      const item = STORE_ITEMS.find((item) => item.id === parseInt(itemId, 10));
      return NextResponse.json(item);
    }

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

    const hasNextPage = filteredItems.length > endIndex;
    const nextCursor = hasNextPage ? pageNumber + 1 : null;

    return NextResponse.json({
      items: paginatedItems,
      nextCursor,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
