import React, { useState, useMemo, useEffect } from 'react';

const HAMPERS_DATA = [
  {
    id: 'blushing-celebrations',
    name: 'Blushing Celebrations',
    category: 'Weddings & Welcome',
    badge: 'Wedding & Bride',
    badgeClass: 'bg-secondary-fixed text-on-secondary-fixed',
    price: 4200,
    delivery: 'Ready for Same-Day Kochi Delivery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV-UTs4eHXRePBin874jIbbEGIqpBU7WgVA7tAvnYXCtHkNqkon_qQDR2r_uctc_1D1r5ndByqp-RazubLLzw3eYX3lt85_zvJxss7ozWWPudtalwkhWZ9_J8EnFGKlyk8hzpPHnnbsM5I4dp-vfziyLoWUNTQtpob5OT_F9bsE5GWUqQgMVzMdLL6rIvbcfgC4LYwF-Ug6K3vaphBbApS-x6PyCBmmFz1lE0SZ4te4Q_MJXKIQYPBtleNgrwqGuWlZUA',
    description: 'Pastel woven wicker basket, delicate floral sprigs, personalized wax-sealed greeting note, spiced nuts, and Kerala brass miniature.'
  },
  {
    id: 'malabar-royal',
    name: 'The Malabar Royal',
    category: 'Gourmet',
    badge: 'Signature Luxury',
    badgeClass: 'bg-tertiary text-on-tertiary',
    price: 3850,
    delivery: 'Handcrafted to Order • In-Store Pick-up',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAebt73xD3243DkRxXeLeVEwFDXQcrkRvRBQeQ-md3nrwGCxMSaITQ9S0uhdOofWCdLLmzYBvaVmPj990r18mZulI9xkyLB26W1jTz_L8dooeTSGzXqSeUznmetqk043_MOeWqcPtuuaohbjLxVo7CFSQJVbb5g9wozemK9OzeQNGkl4w4ry5jUNtb1lFFKHU_P8XjZDULHqySVjeNmw2EsYB2YZCvnl8Gp_-5ZZ9Nkvnl-24NFlOgCImbehLV4VWvG9so',
    description: 'Premium walnut box, engraved brass nilavilakku memento, handcrafted single-origin chocolates, cardamon raw honey, and Nilgiri tea.'
  },
  {
    id: 'executive-welcome',
    name: 'Executive Welcome Kit',
    category: 'Corporate',
    badge: 'Corporate & VIP',
    badgeClass: 'bg-on-secondary-fixed-variant text-on-secondary',
    price: 2100,
    delivery: 'Bulk Tiers Available (10+ to 500+ units)',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXkn8Fd7yhDAteofYtGTo56uRmQN25qSwwLdlXf4XFWNhgDVciZij5_BT1SguN1EFit3IqdF6dN3ZPxip_dK33pi3jzGLmP26W2pKe2zxDozj-rk1HTd1WKTWrV_MZ6hpN6b7U77iFLTHn8nKNl7B5_QI6VSwQ2mu3immbCTpThZApC2OmcydVkheUfvR5O1_xU9ajl2roLY-2OIVbxniEZ5K1h1NKyiNRhWj-ZkozyKvsQ38anDR4W-lAvpSx-Vx8Jc4',
    description: 'Custom-branded textured rigid box, handcrafted linen journal, matte tumbler, roasted cashew blend, and bespoke founder welcome card.'
  },
  {
    id: 'sweet-nostalgia',
    name: 'Sweet Nostalgia Hamper',
    category: 'Birthdays',
    badge: 'Birthday Joy',
    badgeClass: 'bg-secondary-container text-on-secondary-container',
    price: 2650,
    delivery: 'Ready for Same-Day Kochi Delivery',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJdfNbeca6fruu3CIMXLwrUookU4-H0VpmJtg_UBbZ50-xy9xcg4LQ7jydY_scjI-vnqnPnMKKI9_3jQCoOFrJVtcpo16Zn7SPegUnkQXMZNhvtoKvzL8OWCbotflL6ZVrMrSoIDtnF5HzoX_kjnahkjuvMQqdjZUzdrTcArDWOX3fQF2S9doAncT9XvF9Mzl-yDTujGZ0l-FuC-RrfmCNox3mad-Jyf3J8Brlj6I08PG5uGDdlqt7-VcsBsax-9N7paM',
    description: 'Artisan confections, mini photo keepsake stand, Kerala banana chip crisps, luxury bath botanical salts, and celebration sparkles.'
  }
];

const VESSELS = [
  {
    id: 'pinewood',
    name: 'Solid Pinewood Chest',
    price: 1100,
    icon: 'package_2',
    description: 'Re-usable sliding lid box with brass hinges and wax seal'
  },
  {
    id: 'wicker',
    name: 'Pastel Woven Basket',
    price: 850,
    icon: 'shopping_basket',
    description: 'Hand-braided natural wicker with silk satin ribbon bow'
  },
  {
    id: 'rigid',
    name: 'Luxury Rigid Box',
    price: 650,
    icon: 'inventory_2',
    description: 'Matte emerald or ivory box with customized gold hot-foil'
  }
];

const DELICACIES = [
  {
    id: 'truffles',
    name: 'Artisan Spiced Truffles (12 Pcs)',
    shortName: 'Artisan Spiced Truffles',
    price: 480,
    subtext: 'Dark Kerala single-origin cocoa'
  },
  {
    id: 'honey',
    name: 'Cardamom Forest Honey Jar (250g)',
    shortName: 'Cardamom Forest Honey',
    price: 340,
    subtext: 'Wayanad wild raw harvest'
  },
  {
    id: 'candle',
    name: 'Handmade Soy Candle in Amber Glass',
    shortName: 'Handmade Soy Candle',
    price: 520,
    subtext: 'Notes of vanilla bean & spice'
  },
  {
    id: 'cashews',
    name: 'Roasted Spiced Kerala Cashews (180g)',
    shortName: 'Roasted Spiced Kerala Cashews',
    price: 360,
    subtext: 'Crushed pepper & curry leaf'
  }
];

const CATEGORIES = ['All Hampers', 'Weddings & Welcome', 'Birthdays', 'Corporate', 'Gourmet'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All Hampers');
  const [searchQuery, setSearchQuery] = useState('');
  const [wishlist, setWishlist] = useState({});
  const [bagCount, setBagCount] = useState(2);
  const [bagToast, setBagToast] = useState(null);

  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [selectedDelicacyIds, setSelectedDelicacyIds] = useState(['truffles', 'honey', 'candle']);
  const [calligraphyNote, setCalligraphyNote] = useState('');
  const [tickerActive, setTickerActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filteredHampers = useMemo(() => {
    return HAMPERS_DATA.filter((hamper) => {
      const matchesCategory = activeCategory === 'All Hampers' || hamper.category === activeCategory;
      const matchesSearch =
        searchQuery === '' ||
        hamper.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hamper.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hamper.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const totalPrice = useMemo(() => {
    let total = selectedVessel.price;
    selectedDelicacyIds.forEach((id) => {
      const item = DELICACIES.find((d) => d.id === id);
      if (item) total += item.price;
    });
    return total;
  }, [selectedVessel, selectedDelicacyIds]);

  useEffect(() => {
    setTickerActive(true);
    const timer = setTimeout(() => setTickerActive(false), 380);
    return () => clearTimeout(timer);
  }, [totalPrice]);

  const toggleDelicacy = (id) => {
    setSelectedDelicacyIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePersonalizeHamper = (hamper) => {
    const el = document.getElementById('custom-builder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setBagToast(`Personalizing "${hamper.name}" in Builder`);
    setTimeout(() => setBagToast(null), 3500);
  };

  const whatsappOrderUrl = useMemo(() => {
    const selectedTreatNames = selectedDelicacyIds
      .map((id) => DELICACIES.find((d) => d.id === id)?.shortName)
      .filter(Boolean)
      .join(', ');
    const treatText = selectedTreatNames ? `with ${selectedTreatNames}` : 'without add-ons';
    const noteText = calligraphyNote.trim() ? ` Note: "${calligraphyNote.trim().slice(0, 60)}..."` : '';
    const text = encodeURIComponent(
      `Hi Hampers Kochi, I have customized a ${selectedVessel.name} ${treatText}.${noteText} Estimated Total: INR ${totalPrice}.`
    );
    return `https://wa.me/919846012345?text=${text}`;
  }, [selectedVessel, selectedDelicacyIds, calligraphyNote, totalPrice]);

  return (
    <div className="bg-background text-on-surface font-body-md antialiased selection:bg-secondary-container selection:text-on-secondary-container min-h-screen">
      
      {/* Toast Notification */}
      {bagToast && (
        <div className="fixed top-24 right-6 z-50 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 text-label-md font-label-md animate-bounce">
          <span className="material-symbols-outlined text-sm text-primary-fixed">check_circle</span>
          {bagToast}
        </div>
      )}

      {/* Atelier Announcement Banner */}
      <aside className="bg-primary text-on-primary py-2.5 px-4 text-center text-label-sm font-label-sm tracking-wider flex items-center justify-center gap-3 overflow-hidden shadow-sm">
        <span className="inline-flex items-center gap-1.5 transition-transform duration-300 hover:scale-[1.02]">
          <span className="material-symbols-outlined text-[15px] animate-pulse">local_shipping</span>
          Same-Day Hamper Delivery Across Kochi &amp; In-Store Pick-up at Seaport-Airport Rd, Thrikkakara
        </span>
        <span className="hidden md:inline text-primary-fixed">•</span>
        <span className="hidden md:inline-flex items-center gap-1.5 text-primary-fixed transition-transform duration-300 hover:scale-[1.02]">
          <span className="material-symbols-outlined text-[15px]">diversity_1</span>
          Women-Owned Atelier &amp; LGBTQ+ Friendly Space
        </span>
      </aside>

      {/* TopNavBar */}
      <header className="sticky top-0 z-50 bg-surface/95 dark:bg-inverse-surface/95 backdrop-blur-md border-b border-outline-variant/40 dark:border-outline/20 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
          {/* Brand Logo Anchor */}
          <a className="flex items-center gap-3 group" href="#">
            <div className="w-10 h-10 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary shadow-sm">
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12">card_giftcard</span>
            </div>
            <div className="flex flex-col">
              <span className="text-headline-sm font-headline-sm text-primary dark:text-inverse-primary tracking-wide transition-colors group-hover:text-primary-container">
                HamPers Kochi
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-outline -mt-1 font-semibold">
                Artisanal Gifting Atelier
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-primary dark:text-primary-fixed border-b-2 border-primary font-semibold pb-1 text-label-md font-label-md hover:text-primary dark:hover:text-primary-fixed transition-all duration-200" href="#occasions">
              Occasions
            </a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-medium pb-1 text-label-md font-label-md transition-all duration-200 relative group" href="#custom-builder">
              Custom Builder
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-medium pb-1 text-label-md font-label-md transition-all duration-200 relative group" href="#reviews">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-medium pb-1 text-label-md font-label-md transition-all duration-200 relative group" href="#studio">
              Studio &amp; Delivery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Hand Actions */}
          <div className="flex items-center gap-3">
            {/* Search bar anchor */}
            <div className="hidden lg:flex items-center bg-surface-container-low border border-outline-variant/60 rounded-full px-3 py-1.5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200">
              <span className="material-symbols-outlined text-outline text-[18px] mr-2">search</span>
              <input
                className="bg-transparent border-none text-body-sm font-body-sm text-on-surface placeholder:text-outline focus:ring-0 w-32 xl:w-44 p-0 outline-none"
                placeholder="Search occasions, treats..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <a
              aria-label="Call Atelier Concierge"
              className="p-2.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container active:scale-95 transition-all duration-200"
              href="tel:+919846012345"
            >
              <span className="material-symbols-outlined">call</span>
            </a>

            <button
              aria-label="View Shopping Bag"
              onClick={() => {
                setBagToast(`Bag contains ${bagCount} curations`);
                setTimeout(() => setBagToast(null), 3000);
              }}
              className="p-2.5 rounded-full text-on-surface-variant hover:text-primary hover:bg-surface-container active:scale-95 transition-all duration-200 relative group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">shopping_bag</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-primary text-on-primary text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary-container transition-colors">
                {bagCount}
              </span>
            </button>

            <a
              className="shimmer-btn hidden sm:inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-4 py-2.5 rounded text-label-md font-label-md tracking-wider active:scale-[0.97] transition-all duration-200 shadow-sm hover:shadow-md"
              href="https://wa.me/919846012345"
              target="_blank"
              rel="noreferrer"
            >
              <span>Quick Order</span>
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-0.5">arrow_forward</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-outline-variant/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Editorial Narrative */}
              <div className="lg:col-span-6 flex flex-col space-y-6 text-left reveal-on-scroll">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-outline-variant/60 rounded-full w-fit hover:border-primary/40 transition-colors">
                  <span className="flex h-2 w-2 rounded-full bg-tertiary animate-ping"></span>
                  <span className="text-label-sm font-label-sm tracking-wider uppercase text-on-surface-variant font-semibold">
                    Bespoke Atelier • Thrikkakara, Kochi
                  </span>
                </div>
                <h1 className="text-display-mobile md:text-display font-display text-on-surface leading-tight tracking-tight">
                  Every Gift Should Tell a Story.
                </h1>
                <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
                  Handcrafted, bespoke gift hampers in Kochi for weddings, birthdays, anniversaries, corporate celebrations, and festive traditions. Curated to your unique vision and delivered with love across Kochi.
                </p>
                
                {/* Call to Actions with exact padding and sizing */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    className="shimmer-btn inline-flex items-center justify-center bg-primary text-on-primary hover:bg-primary-container px-6 py-3.5 rounded text-label-md font-label-md tracking-wider transition-all duration-200 shadow-sm hover:shadow-lg active:scale-[0.98]"
                    href="#occasions"
                  >
                    Explore Curated Collections
                  </a>
                  <a
                    className="inline-flex items-center justify-center border border-primary text-primary hover:bg-secondary-container/20 hover:border-primary-container px-6 py-3.5 rounded text-label-md font-label-md tracking-wider transition-all duration-200 active:scale-[0.98]"
                    href="#custom-builder"
                  >
                    Build a Custom Hamper
                  </a>
                </div>

                {/* Atelier Trust Badges Grid */}
                <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-outline-variant/40">
                  <div className="flex flex-col p-2 rounded hover:bg-surface-container-low transition-colors duration-200">
                    <div className="flex items-center gap-1 text-[#D49B82]">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:scale-125 duration-200" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-bold text-on-surface text-body-sm font-body-sm">4.9 / 5.0</span>
                    </div>
                    <span className="text-[11px] text-on-surface-variant">18 Google Reviews</span>
                  </div>
                  <div className="flex flex-col p-2 rounded hover:bg-surface-container-low transition-colors duration-200">
                    <div className="flex items-center gap-1 text-primary">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:rotate-12 duration-200">
                        bolt
                      </span>
                      <span className="font-bold text-on-surface text-body-sm font-body-sm">Same-Day</span>
                    </div>
                    <span className="text-[11px] text-on-surface-variant">Kochi Delivery &amp; Pick-up</span>
                  </div>
                  <div className="flex flex-col p-2 rounded hover:bg-surface-container-low transition-colors duration-200">
                    <div className="flex items-center gap-1 text-tertiary">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:scale-110 duration-200">
                        spa
                      </span>
                      <span className="font-bold text-on-surface text-body-sm font-body-sm">Artisanal</span>
                    </div>
                    <span className="text-[11px] text-on-surface-variant">Kerala Keepsakes</span>
                  </div>
                  <div className="flex flex-col p-2 rounded hover:bg-surface-container-low transition-colors duration-200">
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:scale-110 duration-200">
                        person_heart
                      </span>
                      <span className="font-bold text-on-surface text-body-sm font-body-sm">Lead Curator</span>
                    </div>
                    <span className="text-[11px] text-on-surface-variant">Hima &amp; Atelier Team</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Anchor */}
              <div className="lg:col-span-6 relative reveal-on-scroll">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-secondary-container/30 to-tertiary-fixed/20 rounded-xl blur-xl transition-all duration-700 hover:blur-2xl"></div>
                  <div className="relative bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-3 shadow-md hover:shadow-xl transition-all duration-500 group">
                    <div className="overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[16/11] relative">
                      <img
                        alt="Signature handcrafted Kerala wooden hamper box with ribbons, spices, candles and calligraphy letter"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida/AEtjO1XslEC3GN1TqzSfiPgVRCj8MPiNC1iFrkIsw_HiXPxJfwP2gtgAGtzIAqeT6cBlf4YLdFpQBZHK0bFnu5P0N3K8I5XVB_QwPu_fkZ4_YaAJawvr6LH753UmBadhEz8A-aRUXw2tE1976u4AcPifa46s2fsWFBSPN4iIV9qyqobt_TxYd2LzKEOVtzjRoUTXy9gY5aGXa5alM6tFRjPtSMtTUp777DWwVKAncyZcVtu012uCY5j-wIap6OhT"
                      />
                      <div className="absolute top-4 left-4 bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-label-sm font-label-sm tracking-wider shadow-sm flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105">
                        <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                        Signature Atelier Curation
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-surface-container-low rounded-lg flex items-center justify-between border border-outline-variant/30 group-hover:border-primary/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                          <span className="material-symbols-outlined">verified</span>
                        </div>
                        <div>
                          <p className="text-body-sm font-body-sm font-bold text-on-surface">The Heritage Wooden Keepsake Chest</p>
                          <p className="text-[11px] text-on-surface-variant">Hand-poured beeswax candle • Spiced cocoa • Brass memento</p>
                        </div>
                      </div>
                      <span className="text-primary font-bold text-title-md font-title-md">₹3,850</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Occasion Collections Bento & Showcase */}
        <section className="py-16 md:py-24 bg-surface-container-low/40" id="occasions">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
              <div className="max-w-xl">
                <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">
                  Curated For Every Milestone
                </span>
                <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-2">
                  Signature Hamper Collections
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant mt-2">
                  Thoughtfully arranged with bespoke Kerala confections, keepsake mementos, botanical bath luxuries, and handwritten calligraphy.
                </p>
              </div>

              {/* Filter Pills with exact padding & styling */}
              <div className="flex flex-wrap gap-2" id="filter-pills-container">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`filter-pill px-4 py-1.5 rounded-full text-label-sm font-label-sm tracking-wider transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'bg-surface-container border border-outline-variant/60 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Hampers Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredHampers.map((hamper) => {
                const isWishlisted = !!wishlist[hamper.id];
                return (
                  <div
                    key={hamper.id}
                    className="tactile-card group bg-surface-container-lowest border border-outline-variant/50 rounded-lg overflow-hidden flex flex-col reveal-on-scroll"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
                      <img
                        alt={hamper.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        src={hamper.image}
                      />
                      <div className={`absolute top-3 left-3 px-2.5 py-0.5 rounded text-label-sm font-label-sm tracking-wider shadow-sm ${hamper.badgeClass}`}>
                        {hamper.badge}
                      </div>
                      <button
                        aria-label="Add to wishlist"
                        onClick={() => toggleWishlist(hamper.id)}
                        className="wishlist-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 backdrop-blur-md text-on-surface-variant hover:text-primary flex items-center justify-center transition-colors shadow-sm"
                      >
                        <span
                          className={`material-symbols-outlined text-[18px] transition-transform active:scale-125 ${isWishlisted ? 'text-primary' : ''}`}
                          style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          favorite
                        </span>
                      </button>
                      <div className="absolute bottom-3 left-3 right-3 bg-surface/90 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] text-tertiary font-semibold flex items-center gap-1 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {hamper.delivery}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-headline-sm font-headline-sm text-on-surface group-hover:text-primary transition-colors duration-200">
                          {hamper.name}
                        </h3>
                        <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 line-clamp-2">
                          {hamper.description}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-outline-variant/40 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-outline block">Price per Hamper</span>
                          <span className="text-title-md font-title-md font-bold text-on-surface">₹{hamper.price.toLocaleString('en-IN')}</span>
                        </div>
                        <button
                          onClick={() => handlePersonalizeHamper(hamper)}
                          className="shimmer-btn px-3.5 py-2 rounded bg-primary-container text-on-primary text-label-sm font-label-sm tracking-wider hover:bg-primary transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
                        >
                          Personalize
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Theme Consultation Banner */}
            <div className="mt-12 p-6 md:p-8 bg-surface-container-high rounded-xl border border-outline-variant/60 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all duration-300 reveal-on-scroll">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-110">
                  <span className="material-symbols-outlined text-2xl">palette</span>
                </div>
                <div>
                  <h4 className="text-title-md font-title-md text-on-surface">Need a specific theme or color palette?</h4>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">We handcraft custom wedding favors, bridal shower hampers, and Onam/Vishu festive packaging from scratch.</p>
                </div>
              </div>
              <a
                className="shimmer-btn inline-flex items-center gap-2 bg-on-surface text-surface hover:bg-primary hover:text-on-primary px-5 py-3 rounded text-label-md font-label-md tracking-wider transition-all duration-200 shrink-0 shadow-sm hover:shadow active:scale-[0.98]"
                href="https://wa.me/919846012345?text=Hi%20Hampers%20Kochi!%20I%20would%20like%20to%20consult%20on%20a%20custom%20hamper."
                target="_blank"
                rel="noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp Our Lead Stylist</span>
              </a>
            </div>
          </div>
        </section>

        {/* Interactive 4-Step Custom Hamper Atelier Builder */}
        <section className="py-16 md:py-24 bg-surface" id="custom-builder">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
              <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">
                The Custom Builder Experience
              </span>
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-2">
                Build Your Bespoke Kochi Hamper
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant mt-2">
                Design an authentic personalized keepsake in four curated steps. Select the vessel, handpick Kerala delicacies, pen a card, and select your delivery slot.
              </p>
            </div>

            {/* 4 Step Process Indicator */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="p-4 bg-surface-container-lowest border-2 border-primary rounded-lg shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center text-label-md shadow-sm">01</span>
                  <div>
                    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline block">Step 01</span>
                    <span className="text-body-md font-body-md font-semibold text-on-surface">Choose Hamper Vessel</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low border border-outline-variant/60 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface font-bold flex items-center justify-center text-label-md">02</span>
                  <div>
                    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline block">Step 02</span>
                    <span className="text-body-md font-body-md font-semibold text-on-surface">Artisanal Delights</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low border border-outline-variant/60 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface font-bold flex items-center justify-center text-label-md">03</span>
                  <div>
                    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline block">Step 03</span>
                    <span className="text-body-md font-body-md font-semibold text-on-surface">Keepsake &amp; Note</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-surface-container-low border border-outline-variant/60 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface font-bold flex items-center justify-center text-label-md">04</span>
                  <div>
                    <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline block">Step 04</span>
                    <span className="text-body-md font-body-md font-semibold text-on-surface">Kochi Dispatch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Interactive Selector Area */}
              <div className="lg:col-span-8 bg-surface-container-lowest border border-outline-variant/60 rounded-xl p-6 md:p-8 shadow-sm">
                
                {/* Step 1: Vessel Selector */}
                <div className="mb-8">
                  <h3 className="text-title-md font-title-md text-on-surface flex items-center gap-2">
                    <span>Select Your Hamper Base &amp; Finish</span>
                    <span className="text-label-sm font-label-sm text-tertiary font-bold bg-tertiary-fixed/30 px-2.5 py-0.5 rounded-full">Included</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4" id="vessel-selector-group">
                    {VESSELS.map((vessel) => {
                      const isSelected = selectedVessel.id === vessel.id;
                      return (
                        <label
                          key={vessel.id}
                          className={`builder-option-card relative flex flex-col p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'border-2 border-primary bg-primary-container/5'
                              : 'border border-outline-variant/60 hover:border-primary/50 bg-surface-container-low'
                          }`}
                        >
                          <input
                            type="radio"
                            name="vessel"
                            checked={isSelected}
                            onChange={() => setSelectedVessel(vessel)}
                            className="absolute top-3 right-3 text-primary focus:ring-primary h-4 w-4"
                          />
                          <span className={`material-symbols-outlined text-3xl mb-2 ${isSelected ? 'text-primary' : 'text-secondary'}`}>
                            {vessel.icon}
                          </span>
                          <span className="font-bold text-body-md font-body-md text-on-surface">{vessel.name}</span>
                          <span className="text-[12px] text-on-surface-variant mt-1">{vessel.description}</span>
                          <span className="text-label-sm font-label-sm font-bold text-primary mt-3">₹{vessel.price.toLocaleString('en-IN')} base</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Artisan Accompaniments */}
                <div className="mb-8 pt-6 border-t border-outline-variant/40">
                  <h3 className="text-title-md font-title-md text-on-surface flex items-center justify-between">
                    <span>Handpick Kerala Gourmet Delicacies</span>
                    <span className="text-body-sm font-body-sm text-outline">Select 2 to 6 items</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4" id="delicacies-group">
                    {DELICACIES.map((item) => {
                      const isChecked = selectedDelicacyIds.includes(item.id);
                      return (
                        <label
                          key={item.id}
                          className={`builder-option-card flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                            isChecked
                              ? 'border border-primary/50 bg-primary-container/5'
                              : 'border border-outline-variant/60 hover:bg-surface-container-low'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleDelicacy(item.id)}
                              className="delicacy-checkbox rounded border-outline text-primary focus:ring-primary h-4 w-4"
                            />
                            <div>
                              <span className="text-body-sm font-body-sm font-medium text-on-surface block">{item.name}</span>
                              <span className="text-[11px] text-outline">{item.subtext}</span>
                            </div>
                          </div>
                          <span className="text-body-sm font-body-sm font-semibold text-primary shrink-0">+₹{item.price}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Personalized Stationery Note */}
                <div className="pt-6 border-t border-outline-variant/40">
                  <h3 className="text-title-md font-title-md text-on-surface mb-2">Pen Your Heartfelt Note</h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mb-3">Our lead calligrapher will hand-write your words onto gold-flecked deckle-edge paper and seal it with traditional wax.</p>
                  <textarea
                    value={calligraphyNote}
                    onChange={(e) => setCalligraphyNote(e.target.value)}
                    className="w-full bg-surface-container-lowest border border-outline-variant/80 rounded-lg p-3 text-body-sm font-body-sm focus:border-primary focus:ring-2 focus:ring-primary/20 italic text-on-surface transition-all outline-none"
                    placeholder="Wishing you warmth, joy, and new beginnings on this special day. With endless love..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Live Atelier Summary Drawer */}
              <div className="lg:col-span-4 sticky top-28">
                <div className="bg-surface-container-high border border-outline-variant/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-4 border-b border-outline-variant/40">
                    <h4 className="text-headline-sm font-headline-sm text-on-surface">Hamper Summary</h4>
                    <span className="text-label-sm font-label-sm text-tertiary bg-tertiary-fixed/40 px-2 py-0.5 rounded font-bold animate-badge-pulse">
                      Live Atelier
                    </span>
                  </div>
                  
                  <div className="py-4 space-y-3 text-body-sm font-body-sm" id="summary-items-list">
                    <div className="flex justify-between text-on-surface-variant" id="summary-vessel-row">
                      <span className="vessel-label">{selectedVessel.name}</span>
                      <span className="font-medium text-on-surface vessel-cost">₹{selectedVessel.price.toLocaleString('en-IN')}</span>
                    </div>

                    {selectedDelicacyIds.map((id) => {
                      const item = DELICACIES.find((d) => d.id === id);
                      if (!item) return null;
                      return (
                        <div key={item.id} className="flex justify-between text-on-surface-variant delicacy-row">
                          <span>{item.shortName}</span>
                          <span className="font-medium text-on-surface">₹{item.price}</span>
                        </div>
                      );
                    })}

                    <div className="flex justify-between text-on-surface-variant">
                      <span>Calligraphy Note &amp; Wax Seal</span>
                      <span className="font-semibold text-tertiary">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-on-surface-variant">
                      <span>Satin Ribbon &amp; Botanical Sprig</span>
                      <span className="font-semibold text-tertiary">Complimentary</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-outline-variant/60 flex items-center justify-between">
                    <div>
                      <span className="text-label-sm font-label-sm uppercase tracking-wider text-outline block">Estimated Total</span>
                      <span className={`text-headline-md font-headline-md text-primary font-bold inline-block ${tickerActive ? 'ticker-pulse' : ''}`} id="total-price-display">
                        ₹{totalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[11px] text-on-surface-variant">Tax included</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <a
                      className="shimmer-btn w-full flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-primary-container py-3 rounded text-label-md font-label-md tracking-wider transition-all duration-200 shadow-sm hover:shadow-md font-semibold active:scale-[0.98]"
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noreferrer"
                      id="whatsapp-order-btn"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>Confirm via WhatsApp / Call</span>
                    </a>
                    <p className="text-center text-[11px] text-outline flex items-center justify-center gap-1">
                      <span className="material-symbols-outlined text-[13px]">lock</span>
                      Direct consultation with lead curator Hima
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verified Customer Love & Google Reviews Section */}
        <section className="py-16 md:py-24 bg-surface-container-low/50 border-y border-outline-variant/30" id="reviews">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal-on-scroll">
              <div>
                <div className="inline-flex items-center gap-2 text-primary font-bold text-label-sm font-label-sm tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    hotel_class
                  </span>
                  <span>Authentic Local Love</span>
                </div>
                <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-2">
                  Loved by Discerning Kochi Gifters
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant mt-2 max-w-xl">
                  From grand destination weddings to intimate midnight surprises, hear how our bespoke curations touched hearts across Kerala.
                </p>
              </div>

              {/* Google Rating Pill */}
              <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-xl px-5 py-3.5 shadow-sm flex items-center gap-4 shrink-0 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <span className="text-headline-md font-headline-md font-bold text-on-surface block leading-none">4.9</span>
                  <div className="flex text-[#D49B82] mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-10 w-px bg-outline-variant/40"></div>
                <div>
                  <span className="text-body-sm font-body-sm font-bold text-on-surface block">Google Verified Reviews</span>
                  <span className="text-[12px] text-on-surface-variant">18 Patrons Rated 5 Stars</span>
                </div>
              </div>
            </div>

            {/* Reviews Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="tactile-card bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 flex flex-col justify-between shadow-sm reveal-on-scroll">
                <div>
                  <div className="flex text-[#D49B82] mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-body-md font-body-md text-on-surface italic leading-relaxed">
                    “I've been choosing <strong className="text-primary font-semibold">HamPers Kochi</strong> for all my customized gifting needs for the past couple of years, and they have never disappointed. Their attention to detail, excellent service, and carefully curated gift products truly set them apart.”
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container font-bold flex items-center justify-center text-label-md transition-transform hover:scale-110">
                    JP
                  </div>
                  <div>
                    <span className="text-body-sm font-body-sm font-bold text-on-surface block">Justin Prasad</span>
                    <span className="text-[11px] text-outline">Local Guide • 1,040 Reviews</span>
                  </div>
                </div>
              </div>

              <div className="tactile-card bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 flex flex-col justify-between shadow-sm reveal-on-scroll">
                <div>
                  <div className="flex text-[#D49B82] mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-body-md font-body-md text-on-surface italic leading-relaxed">
                    “Being a tour operator, we always order welcome kit from Hampers Kochi and we always get better than committed services. Hats off to <strong className="text-primary font-semibold">Hima</strong> for your dedication.”
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-bold flex items-center justify-center text-label-md transition-transform hover:scale-110">
                    NG
                  </div>
                  <div>
                    <span className="text-body-sm font-body-sm font-bold text-on-surface block">Nirmal Gilroy</span>
                    <span className="text-[11px] text-outline">Local Guide • Kerala Tour Operator</span>
                  </div>
                </div>
              </div>

              <div className="tactile-card bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-6 flex flex-col justify-between shadow-sm reveal-on-scroll">
                <div>
                  <div className="flex text-[#D49B82] mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-body-md font-body-md text-on-surface italic leading-relaxed">
                    “I recently got one of these beautiful hampers as a birthday gift for me and my daughter and I am so impressed. The attention to detail is unmatched... you can tell so much care goes into it!”
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-outline-variant/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-bold flex items-center justify-center text-label-md transition-transform hover:scale-110">
                    FA
                  </div>
                  <div>
                    <span className="text-body-sm font-body-sm font-bold text-on-surface block">Fathima Abdullah</span>
                    <span className="text-[11px] text-outline">Verified Kochi Resident</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 reveal-on-scroll hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 hover:rotate-6">
                <span className="material-symbols-outlined text-3xl">format_quote</span>
              </div>
              <div>
                <blockquote className="text-headline-sm font-headline-sm text-primary italic">
                  “When I started HamPers Kochi, my dream was to create gifts that bring the biggest smile to people's faces.”
                </blockquote>
                <p className="text-body-sm font-body-sm text-on-surface-variant mt-2 font-medium">
                  — <strong className="text-on-surface">Hima</strong>, Founder &amp; Lead Curator at HamPers Kochi Atelier
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Storefront & Delivery Radius Section */}
        <section className="py-16 md:py-24 bg-surface" id="studio">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Studio Details */}
              <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
                <div>
                  <span className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold">
                    Visit Our Atelier &amp; Pick-up Hub
                  </span>
                  <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-on-surface mt-2">
                    Crafted in Thrikkakara, Kochi
                  </h2>
                  <p className="text-body-md font-body-md text-on-surface-variant mt-2">
                    Step into our sensory workshop to smell botanical blends, select custom ribbons, sample Kerala chocolates, and coordinate express deliveries.
                  </p>
                </div>

                {/* Address Card */}
                <div className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-5 space-y-4 hover:border-primary/40 transition-all shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-primary text-2xl mt-0.5">storefront</span>
                    <div>
                      <h4 className="font-bold text-body-md font-body-md text-on-surface">Thrikkakara Design Atelier</h4>
                      <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                        Seaport - Airport Rd, Vallathol Padi, Vidya Nagar Colony, Thrikkakara, Edappally, Kochi, Kerala 682021
                      </p>
                      <p className="text-[12px] font-mono text-outline mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-primary">location_on</span>
                        Plus Code: <strong>28PP+5R Kochi</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 pt-3 border-t border-outline-variant/30">
                    <span className="material-symbols-outlined text-tertiary text-2xl mt-0.5">schedule</span>
                    <div>
                      <h4 className="font-bold text-body-md font-body-md text-on-surface">Studio Hours &amp; Concierge</h4>
                      <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">
                        Open Friday onwards (Opens 10:00 AM) • Daily Phone &amp; WhatsApp Concierge Available (9:00 AM – 8:30 PM)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg flex items-center gap-2.5 hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-[20px]">two_wheeler</span>
                    <span className="text-body-sm font-body-sm font-medium text-on-surface">Express Delivery in Kakkanad &amp; Edappally</span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg flex items-center gap-2.5 hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-[20px]">store</span>
                    <span className="text-body-sm font-body-sm font-medium text-on-surface">Curbside In-Store Pick-up</span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg flex items-center gap-2.5 hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-[20px]">flight_takeoff</span>
                    <span className="text-body-sm font-body-sm font-medium text-on-surface">All-India &amp; NRI Courier Support</span>
                  </div>
                  <div className="p-3 bg-surface-container-lowest border border-outline-variant/50 rounded-lg flex items-center gap-2.5 hover:border-primary/40 transition-colors">
                    <span className="material-symbols-outlined text-primary text-[20px]">verified_user</span>
                    <span className="text-body-sm font-body-sm font-medium text-on-surface">100% Fragile Item Care Guarantees</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    className="shimmer-btn inline-flex items-center gap-2 bg-on-surface text-surface hover:bg-primary hover:text-on-primary px-5 py-3 rounded text-label-md font-label-md tracking-wider transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow"
                    href="https://maps.google.com/?q=28PP+5R+Kochi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">directions</span>
                    <span>Get Google Directions</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 border border-outline text-on-surface hover:border-primary hover:text-primary px-5 py-3 rounded text-label-md font-label-md tracking-wider transition-all duration-200 active:scale-[0.98]"
                    href="https://wa.me/919846012345"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Chat with Hima</span>
                  </a>
                </div>
              </div>

              {/* Visual Map / Studio Showcase */}
              <div className="lg:col-span-6 reveal-on-scroll">
                <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 group">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-surface-container">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      alt="HamPers Kochi Boutique Atelier Studio"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl_6JattfD8jkQ2jC-WADiOtPuVNuZHnXmU8BIVCdAyTBQ2aX42SZfdHnbSF8wNHpb09859ftdCmCLSkK8KvTSyCB99iQOzWHqXd21--in1Br_DGgdupFBC2IY_Eyarj2nNPWH4oi58DNeX-tfYI_E32muRhB9ZTpkHGE5MIrO7yUZ8OkdMs2oIbjaLlgMlCTSczQZpYNkwb4OCPGS7cqK6ok548q3uyEXAP2GE8z8kb9CxZkm3gfrmHZQwOixdbooox0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-surface">
                      <span className="pin-pulse inline-flex items-center gap-1 text-[11px] font-bold bg-primary px-2.5 py-0.5 rounded uppercase tracking-wider shadow-sm">
                        <span className="material-symbols-outlined text-[12px]">location_on</span>
                        Seaport-Airport Rd, Thrikkakara
                      </span>
                      <p className="text-body-sm font-body-sm font-semibold text-surface mt-1.5 drop-shadow-sm">
                        Warm bespoke welcome hampers handcrafted by HamPers Kochi
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-surface-container-low rounded-lg flex items-center justify-between border border-outline-variant/30 group-hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2 text-on-surface-variant text-body-sm font-body-sm">
                      <span className="material-symbols-outlined text-tertiary">check_circle</span>
                      <span>Same-Day Coverage: Kakkanad, Edappally, Aluva, Fort Kochi &amp; Ernakulam City</span>
                    </div>
                    <span className="text-label-sm font-label-sm font-bold text-primary">₹0 Studio Pick-up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant/30 dark:border-outline/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <a className="text-headline-md font-headline-md text-primary dark:text-inverse-primary block hover:opacity-90 transition-opacity" href="#">
                HamPers Kochi
              </a>
              <p className="text-body-sm font-body-sm text-on-surface-variant dark:text-surface-variant max-w-sm leading-relaxed">
                Handcrafting Kerala's most thoughtful celebratory keepsakes. Dedicated to preserving warmth, artisanal excellence, and timeless stories in every ribbon and box.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1 text-label-sm font-label-sm bg-surface-container-high px-2.5 py-1 rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-[14px]">woman</span>
                  Woman-Owned
                </span>
                <span className="inline-flex items-center gap-1 text-label-sm font-label-sm bg-surface-container-high px-2.5 py-1 rounded text-on-surface-variant hover:bg-surface-container-highest transition-colors">
                  <span className="material-symbols-outlined text-[14px]">favorite</span>
                  LGBTQ+ Inclusive
                </span>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold mb-3">Atelier &amp; Delivery</h5>
                <ul className="space-y-2.5 text-body-sm font-body-sm">
                  <li>
                    <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 block" href="#studio">
                      Thrikkakara Studio: Seaport-Airport Rd (Opens 10 AM)
                    </a>
                  </li>
                  <li>
                    <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 block" href="#studio">
                      Edappally Pick-up Hub
                    </a>
                  </li>
                  <li>
                    <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 block" href="#studio">
                      Same-Day Delivery Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-label-sm font-label-sm uppercase tracking-widest text-primary font-bold mb-3">Bespoke Concierge</h5>
                <ul className="space-y-2.5 text-body-sm font-body-sm">
                  <li>
                    <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 block" href="#occasions">
                      Bespoke Corporate Gifting
                    </a>
                  </li>
                  <li>
                    <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-200 block" href="#custom-builder">
                      Care &amp; Unboxing Guide
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-primary dark:text-primary-fixed font-semibold hover:underline inline-flex items-center gap-1"
                      href="https://wa.me/919846012345"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>WhatsApp Concierge</span>
                      <span className="material-symbols-outlined text-[15px]">open_in_new</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-outline-variant/30 dark:border-outline/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-label-sm font-label-sm text-on-surface-variant dark:text-surface-variant">
            <p>© 2024 HamPers Kochi. Handcrafted in Kerala. Woman-Owned &amp; LGBTQ+ Inclusive Boutique Atelier.</p>
            <p className="text-outline">Designed with Tactile Editorial Luxury for Discerning Gifters</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
