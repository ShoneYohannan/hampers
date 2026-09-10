/**
 * Hampers Kochi - Verified Brand & Product Data
 * Strictly adhering to provided business information with zero hallucinated prices or fake numbers.
 */

export const BUSINESS_INFO = {
  name: "Hampers Kochi",
  tagline: "The Art of Thoughtful Giving",
  category: "Custom Gift Hampers & Curated Gifting",
  rating: 4.9,
  reviewsCount: "18+",
  address: "Seaport - Airport Rd, Vallathol Padi, Vidya Nagar Colony, Thrikkakara, Edappally, Kochi, Kerala 682021",
  landmark: "Seaport - Airport Road, Thrikkakara, Edappally",
  city: "Kochi, Kerala",
  pincode: "682021",
  website: "hamperskochi.com",
  serviceCoverage: "Delivery across Kochi & Ernakulam district",
  // Contact placeholder ready for business owner's direct WhatsApp connection:
  whatsappPlaceholder: "CONTACT_WHATSAPP_NUMBER",
  // Default WhatsApp link generator:
  getWhatsAppUrl: (message = "Hello Hampers Kochi, I would like to enquire about a custom gift hamper.") => {
    // If business has a phone number set later, replace placeholder; otherwise open web intent
    return `https://wa.me/?text=${encodeURIComponent(message)}`;
  }
};

export const GREETING_CARDS = [
  {
    id: "card-wedding",
    title: "A Royal Celebration",
    tagline: "Weddings & Anniversaries",
    messagePreview: "Wishing you a lifetime of love, joy, and cherished moments together.",
    theme: "Gold Foil & Calligraphy"
  },
  {
    id: "card-birthday",
    title: "Happiest Birthday",
    tagline: "Joyful Celebrations",
    messagePreview: "May your day be filled with endless laughter, sweet treats, and sweet memories.",
    theme: "Champagne Confetti"
  },
  {
    id: "card-gratitude",
    title: "With Deepest Gratitude",
    tagline: "Corporate & Client Thanks",
    messagePreview: "Thank you for your trust, partnership, and dedication. It is an honour collaborating with you.",
    theme: "Executive Matte Charcoal"
  },
  {
    id: "card-kerala",
    title: "Welcome to God's Own Country",
    tagline: "Hospitality & Tour Groups",
    messagePreview: "Warm greetings from Kochi. May your stay be graced with the warmth and beauty of Kerala.",
    theme: "Kasavu & Palm Motif"
  },
  {
    id: "card-festive",
    title: "Festive Radiance",
    tagline: "Onam, Christmas, Diwali & New Year",
    messagePreview: "Wishing you and your loved ones peace, prosperity, and celebratory warmth.",
    theme: "Burgundy & Gold"
  },
  {
    id: "card-custom",
    title: "Bespoke Handwritten Note",
    tagline: "Personalized Words",
    messagePreview: "Your personal words penned by our calligraphy artist and sealed with atelier wax.",
    theme: "Wax-Sealed Parchment"
  }
];

export const BOX_PACKAGING_STYLES = [
  {
    id: "style-cane",
    name: "Handcrafted Cane Basket with Blush Tulle & Florals",
    type: "Signature Atelier Basket",
    description: "Natural handwoven Kerala cane basket draped in soft blush tulle with fresh roses and gold satin bow.",
    image: "/images/hampers/floral-celebration-basket.png",
    bestFor: "Weddings, Anniversaries & Birthdays"
  },
  {
    id: "style-rigid",
    name: "Matte Obsidian Rigid Keepsake Chest",
    type: "Luxury Keepsake Box",
    description: "Premium heavy-gauge rigid box with embossed champagne gold foiling and magnetic closure.",
    image: "/images/hampers/corporate-travel-hampers.png",
    bestFor: "Corporate Delegations & Milestone Gifts"
  },
  {
    id: "style-eco",
    name: "Natural Palm Leaf Eco-Platter Tray",
    type: "Kerala Heritage Eco-Platter",
    description: "Eco-friendly dried areca palm leaf platter secured with gold thread netting and artisanal kraft paper.",
    image: "/images/hampers/kerala-heritage-delicacies.png",
    bestFor: "Kerala Heritage Snacks, Tour Hospitality"
  },
  {
    id: "style-polka",
    name: "Crystalline Polka Wrap with Midnight Navy Satin",
    type: "Celebration Tray Wrap",
    description: "Classic sparkling presentation with gold-flecked cellophane and crisp double-faced midnight blue ribbons.",
    image: "/images/hampers/curated-delicacy-collection.png",
    bestFor: "Tour Groups & Festive Delegations"
  }
];

export const KOCHI_LOCALITIES = [
  "Kakkanad (Infopark)",
  "Edappally (Near Seaport-Airport Rd)",
  "Marine Drive & High Court",
  "Fort Kochi & Mattancherry",
  "Panampilly Nagar & Kadavanthra",
  "Palarivattom & Kaloor",
  "Vyttila & Maradu",
  "Aluva & Nedumbassery (Airport)",
  "Thrikkakara (Vallathol Padi)",
  "Ernakulam South & North"
];

export const CORPORATE_CAPABILITIES = {
  stats: [
    { number: "100%", label: "Curated to Brand Identity" },
    { number: "Doorstep", label: "Delivery to Venues & Hotels" },
    { number: "4.9 ★", label: "Google Rated Excellence" },
    { number: "Direct", label: "WhatsApp Concierge" }
  ],
  services: [
    {
      title: "Company Logo Ribbons & Laser Tags",
      desc: "Custom-printed satin ribbons with company insignia, laser-engraved wooden tags, or metal emblems."
    },
    {
      title: "Event & Conference Delegate Hampers",
      desc: "Bulk curations for tech summits at Kakkanad Infopark, corporate annual retreats, and hotel check-in kits."
    },
    {
      title: "Inbound Tour & Hospitality Welcome",
      desc: "Delivered directly to tourist coaches and luxury hotels across Kochi with authentic Kerala delicacies."
    },
    {
      title: "Festive & Onam Bulk Employee Gifting",
      desc: "Scalable volume orders with uniform high quality, custom greeting cards, and individual address dispatch."
    }
  ]
};

export const COLLECTIONS = [
  {
    id: "birthdays",
    title: "Birthday Curations",
    tagline: "Joyful Celebrations",
    type: "personal",
    categoryKey: "birthdays",
    description: "Thoughtfully assembled birthday hampers with custom keepsakes, artisanal treats, and hand-tied ribbons.",
    image: "/images/hampers/floral-celebration-basket.png",
    accent: "Gold & Blush Satin",
    highlights: ["Handmade presentation", "Personalized note", "Custom treats"]
  },
  {
    id: "weddings",
    title: "Wedding & Trousseau",
    tagline: "A Royal Welcome",
    type: "personal",
    categoryKey: "weddings",
    description: "Opulent wedding hampers, bridesmaid thank-you kits, and bridal favor baskets dressed in floral lace and silks.",
    image: "/images/hampers/floral-celebration-basket.png",
    accent: "Rose Tulle & Gold Sequins",
    highlights: ["Fresh floral accents", "Lace netting", "Heirloom keepsakes"]
  },
  {
    id: "corporate",
    title: "Corporate & Welcome Kits",
    tagline: "Elevated Professionalism",
    type: "corporate",
    categoryKey: "corporate",
    description: "Executive welcome kits, event delegate hampers, and corporate gifting customized with brand identity.",
    image: "/images/hampers/corporate-travel-hampers.png",
    accent: "Midnight Navy & Polka Crisp",
    highlights: ["Custom client branding", "Batch coordination", "Doorstep delivery"]
  },
  {
    id: "kerala-heritage",
    title: "Kerala Heritage Delicacies",
    tagline: "Authentic Flavors",
    type: "both",
    categoryKey: "heritage",
    description: "Handcrafted natural leaf baskets featuring authentic Kerala snacks like Kuzhalappam, Achappam, and pure coconut oil banana chips.",
    image: "/images/hampers/kerala-heritage-delicacies.png",
    accent: "Eco Kraft & Gold Ribbons",
    highlights: ["Handwritten labels", "Artisanal elephant craft", "Pure local ingredients"]
  },
  {
    id: "anniversaries",
    title: "Anniversary Keepsakes",
    tagline: "Moments of Romance",
    type: "personal",
    categoryKey: "anniversaries",
    description: "Curated hampers designed to celebrate togetherness, tailored with personal milestones and romantic details.",
    image: "/images/hampers/curated-delicacy-collection.png",
    accent: "Champagne Sheen",
    highlights: ["Personalized timeline", "Artisan confections", "Keepsake packaging"]
  },
  {
    id: "tour-welcome",
    title: "Tour Group & Hospitality Kits",
    tagline: "Warm Kochi Hospitality",
    type: "corporate",
    categoryKey: "tours",
    description: "Customized welcome hampers for tour groups, destination weddings, and travelers visiting God's Own Country.",
    image: "/images/hampers/group-welcome-tour.png",
    accent: "Festive Sparkle",
    highlights: ["Delivered to tour coaches", "Refreshing travel essentials", "Traditional treats"]
  },
  {
    id: "festive",
    title: "Festive Celebrations",
    tagline: "Tradition & Radiance",
    type: "both",
    categoryKey: "festive",
    description: "Bespoke festive hampers curated for Onam, Diwali, Christmas, Eid, and New Year celebrations.",
    image: "/images/hampers/curated-delicacy-collection.png",
    accent: "Royal Burgundy & Brass",
    highlights: ["Festival-specific treats", "Aromatic accents", "Custom greetings"]
  },
  {
    id: "custom",
    title: "Bespoke Custom Hampers",
    tagline: "Your Imagination, Realized",
    type: "both",
    categoryKey: "custom",
    description: "Complete creative freedom to pick every treat, keepsake, packaging material, and theme to match your vision.",
    image: "/images/hampers/corporate-travel-hampers.png",
    accent: "Custom Atelier",
    highlights: ["Flexible budget tiers", "Full personalization", "Handcrafted styling"]
  }
];

export const FEATURED_HAMPERS = [
  {
    id: "feat-1",
    name: "The Traditional Kerala Heritage Hamper",
    category: "Signature Collection",
    description: "Authentic Kerala snack hampers with handwritten craft packaging: Kuzhalappam, Achappam, pure coconut oil Banana Chips, Jaggery Cookies, hand-carved Elephant keepsake, and refreshing beverages.",
    image: "/images/hampers/kerala-heritage-delicacies.png",
    badge: "Bestseller",
    details: ["Handcrafted palm leaf plate", "Handwritten craft pouches", "Traditional wooden keepsake", "Artisan local snacks"]
  },
  {
    id: "feat-2",
    name: "Blush Rose & Sequin Celebration Basket",
    category: "Floral & Romance",
    description: "An elegant handcrafted cane hamper draped in blush peach tulle with sequined embroidery, fresh white & crimson roses, baby's breath, and imported treats.",
    image: "/images/hampers/floral-celebration-basket.png",
    badge: "Exclusive Atelier",
    details: ["Fresh floral bunch", "Sequined embroidered drape", "Luxury cane basket", "Gourmet confectionery"]
  },
  {
    id: "feat-3",
    name: "Hannah Group Welcome Travel Hamper",
    category: "Hospitality & Tours",
    description: "Hospitality welcome kits crafted for inbound travelers and tour groups visiting Kochi, packaged with sparkling gold cellophane and fresh regional delicacies.",
    image: "/images/hampers/group-welcome-tour.png",
    badge: "Tour Favorite",
    details: ["Custom tour group greeting", "Refreshing travel amenities", "Travel-friendly packaging", "Delivered directly to bus/hotel"]
  },
  {
    id: "feat-4",
    name: "Golden Ribbon Delicacy Tray Collection",
    category: "Festive & Milestone",
    description: "A series of beautifully tied natural baskets loaded with Ellunda sesame delicacies, Kappalandi muttay peanut brittle, banana chips, and festive gold bows.",
    image: "/images/hampers/curated-delicacy-collection.png",
    badge: "Artisanal",
    details: ["Hand-tied metallic gold bows", "Authentic sweet & savory mix", "Polka cellophane seal", "Custom event tags"]
  },
  {
    id: "feat-5",
    name: "Ghumakkad Corporate Travel Edition",
    category: "Corporate & Branded",
    description: "Tailored branded corporate gifting with midnight blue satin bows, pristine polka-dot presentation, and custom-printed company emblems for guest travelers.",
    image: "/images/hampers/corporate-travel-hampers.png",
    badge: "Corporate Choice",
    details: ["Custom branded stickers", "Midnight blue satin ribbon", "Premium treat selection", "Bulk event readiness"]
  },
  {
    id: "feat-6",
    name: "Royal Atelier Milestone Keepsake Hamper",
    category: "Signature Keepsake",
    description: "Our signature grand celebration curation featuring a bespoke keepsake chest, handcrafted regional accents, gourmet artisanal confections, and personalized wax-sealed greetings.",
    image: "/images/hampers/floral-celebration-basket.png",
    badge: "Limited Edition",
    details: ["Handcrafted luxury keepsake chest", "Traditional Kerala keepsake accents", "Wax-sealed custom stationery", "Hand-tied champagne silk ribbon"]
  }
];

export const OCCASIONS_LIST = [
  {
    name: "Birthdays",
    tagline: "Celebrate another year in style",
    description: "From surprise boxes to intimate keepsake baskets that make their eyes light up.",
    image: "/images/hampers/floral-celebration-basket.png"
  },
  {
    name: "Weddings",
    tagline: "Sacred vows & grand hospitality",
    description: "Bridal trousseau hampers, in-room guest welcome baskets, and wedding favors.",
    image: "/images/hampers/floral-celebration-basket.png"
  },
  {
    name: "Corporate Summits",
    tagline: "Professional impressions that resonate",
    description: "Bespoke executive welcome kits and delegate thank-you gifts with brand identity.",
    image: "/images/hampers/corporate-travel-hampers.png"
  },
  {
    name: "Anniversaries",
    tagline: "Honoring love and cherished chapters",
    description: "Romantic hampers adorned with roses, keepsakes, and personalized messages.",
    image: "/images/hampers/floral-celebration-basket.png"
  },
  {
    name: "Kerala Homecoming & Welcome",
    tagline: "A true God's Own Country welcome",
    description: "For visiting relatives, tour groups, and NRI homecomings laden with local nostalgia.",
    image: "/images/hampers/kerala-heritage-delicacies.png"
  },
  {
    name: "Festivals & Milestones",
    tagline: "Onam, Christmas, Diwali & Eid",
    description: "Curated festival hampers celebrating Kerala traditions and joyful generosity.",
    image: "/images/hampers/curated-delicacy-collection.png"
  }
];

export const REVIEWS = [
  {
    quote: "The attention to detail in the packaging and presentation was exceptional. You can genuinely feel the care put into each product.",
    tag: "attention to detail",
    author: "Verified Google Reviewer",
    rating: 5,
    context: "Custom Anniversary Hamper"
  },
  {
    quote: "Excellent service from the team at Hampers Kochi. The curation was spot on for our corporate delegates with timely delivery.",
    tag: "excellent service",
    author: "Corporate Client Review",
    rating: 5,
    context: "Corporate Welcome Hampers"
  },
  {
    quote: "Carefully curated gift products. They made the entire hamper feel so personalized and unique for our wedding guests.",
    tag: "carefully curated gift products",
    author: "Kochi Wedding Client",
    rating: 5,
    context: "Wedding Favor Hampers"
  },
  {
    quote: "Timely delivery across Kochi and affordable rates for custom-made gift hampers. Highly recommended for any occasion!",
    tag: "timely delivery & affordable rates",
    author: "Local Customer Review",
    rating: 5,
    context: "Birthday Hamper"
  },
  {
    quote: "The personalization was incredible. Everyone in our tour group loved the welcome hampers with local treats.",
    tag: "personalization",
    author: "Tour Group Coordinator",
    rating: 5,
    context: "Group Welcome Hospitality"
  }
];

export const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "Handwritten Kerala Snack Pouches",
    subtitle: "Artisanal Kuzhalappam & Banana Chips with Kathakali Keepsake",
    image: "/images/hampers/kerala-heritage-delicacies.png",
    aspect: "tall"
  },
  {
    id: "gal-2",
    title: "Blush Tulle & Fresh Roses",
    subtitle: "Intricate sequined embroidery and fragrant fresh blooms",
    image: "/images/hampers/floral-celebration-basket.png",
    aspect: "wide"
  },
  {
    id: "gal-3",
    title: "Tour Hospitality Experience",
    subtitle: "Smiles and warmth across Kochi tour groups",
    image: "/images/hampers/group-welcome-tour.png",
    aspect: "tall"
  },
  {
    id: "gal-4",
    title: "Golden Tied Delicacy Trays",
    subtitle: "Natural fiber baskets ready for milestone delivery",
    image: "/images/hampers/curated-delicacy-collection.png",
    aspect: "square"
  },
  {
    id: "gal-5",
    title: "Corporate Branded Packaging",
    subtitle: "Polka cellophane wrap with crisp midnight blue satin",
    image: "/images/hampers/corporate-travel-hampers.png",
    aspect: "square"
  },
  {
    id: "gal-6",
    title: "Handcrafted Heritage Curation",
    subtitle: "Authentic banana chips, achappam and traditional wooden souvenirs",
    image: "/images/hampers/kerala-heritage-delicacies.png",
    aspect: "square"
  }
];
