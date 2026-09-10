import React, { useState, useMemo, useEffect, useRef } from 'react';

const HAMPERS_DATA = [
  {
    id: 'blushing-celebrations',
    name: 'Blushing Celebrations',
    category: 'Weddings & Welcome',
    badge: 'Wedding & Bride',
    badgeColor: 'bg-[#ffdbcc] text-[#321203]',
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
    badgeColor: 'bg-[#3f6650] text-[#ffffff]',
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
    badgeColor: 'bg-[#663c29] text-[#ffffff]',
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
    badgeColor: 'bg-[#ffc1a6] text-[#7a4d38]',
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
  // Category Filtering
  const [activeCategory, setActiveCategory] = useState('All Hampers');

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Wishlist state
  const [wishlist, setWishlist] = useState({});

  // Bag count
  const [bagCount, setBagCount] = useState(2);
  const [bagToast, setBagToast] = useState(null);

  // Custom Builder State
  const [selectedVessel, setSelectedVessel] = useState(VESSELS[0]);
  const [selectedDelicacyIds, setSelectedDelicacyIds] = useState(['truffles', 'honey', 'candle']);
  const [calligraphyNote, setCalligraphyNote] = useState('');
  const [tickerActive, setTickerActive] = useState(false);

  // Scroll reveal observer
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

  // Filtered Hampers
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

  // Dynamic Price Calculation
  const totalPrice = useMemo(() => {
    let total = selectedVessel.price;
    selectedDelicacyIds.forEach((id) => {
      const item = DELICACIES.find((d) => d.id === id);
      if (item) total += item.price;
    });
    return total;
  }, [selectedVessel, selectedDelicacyIds]);

  // Trigger ticker pop whenever total changes
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

  // WhatsApp Order URL
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
    <div className="bg-[#fcf9f6] text-[#1b1c1a] font-['Plus_Jakarta_Sans',sans-serif] min-h-screen selection:bg-[#ffc1a6] selection:text-[#7a4d38]">
      
      {/* Toast Notification */}
      {bagToast && (
        <div className="fixed top-24 right-6 z-50 bg-[#1b1c1a] text-[#ffffff] px-4 py-3 rounded-lg shadow-xl flex items-center gap-2 text-xs font-semibold animate-bounce">
          <span className="material-symbols-outlined text-sm text-[#ffb5a1]">check_circle</span>
          {bagToast}
        </div>
      )}

      {/* Atelier Announcement Banner */}
      <aside className="bg-[#99442d] text-[#ffffff] py-2.5 px-4 text-center text-[10px] uppercase font-bold tracking-wider flex items-center justify-center gap-3 overflow-hidden shadow-sm">
        <span className="inline-flex items-center gap-1.5 transition-transform duration-300 hover:scale-[1.02]">
          <span className="material-symbols-outlined text-[15px] animate-pulse">local_shipping</span>
          Same-Day Hamper Delivery Across Kochi &amp; In-Store Pick-up at Seaport-Airport Rd, Thrikkakara
        </span>
        <span className="hidden md:inline text-[#ffdbd1]">•</span>
        <span className="hidden md:inline-flex items-center gap-1.5 text-[#ffdbd1] transition-transform duration-300 hover:scale-[1.02]">
          <span className="material-symbols-outlined text-[15px]">diversity_1</span>
          Women-Owned Atelier &amp; LGBTQ+ Friendly Space
        </span>
      </aside>

      {/* TopNavBar */}
      <header className="sticky top-0 z-50 bg-[#fcf9f6]/95 backdrop-blur-md border-b border-[#dbc1ba]/40 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-7xl mx-auto h-20">
          {/* Brand Logo */}
          <a className="flex items-center gap-3 group" href="#">
            <div className="w-10 h-10 rounded-full bg-[#b85c43]/10 border border-[#b85c43]/30 flex items-center justify-center text-[#99442d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#99442d] group-hover:text-[#ffffff] shadow-sm">
              <span className="material-symbols-outlined transition-transform duration-300 group-hover:rotate-12">card_giftcard</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[22px] font-['Playfair_Display',serif] font-semibold text-[#99442d] tracking-wide transition-colors group-hover:text-[#b85c43]">
                HamPers Kochi
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#88726d] -mt-1 font-semibold">
                Artisanal Gifting Atelier
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase">
            <a className="text-[#99442d] border-b-2 border-[#99442d] pb-1 hover:text-[#b85c43] transition-all duration-200" href="#occasions">
              Occasions
            </a>
            <a className="text-[#55423e] hover:text-[#99442d] pb-1 transition-all duration-200 relative group" href="#custom-builder">
              Custom Builder
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#99442d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="text-[#55423e] hover:text-[#99442d] pb-1 transition-all duration-200 relative group" href="#reviews">
              Reviews
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#99442d] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="text-[#55423e] hover:text-[#99442d] pb-1 transition-all duration-200 relative group" href="#studio">
              Studio &amp; Delivery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#99442d] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Hand Actions */}
          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-[#f6f3f0] border border-[#dbc1ba]/60 rounded-full px-3 py-1.5 focus-within:border-[#99442d] focus-within:ring-2 focus-within:ring-[#99442d]/20 transition-all duration-200">
              <span className="material-symbols-outlined text-[#88726d] text-[18px] mr-2">search</span>
              <input
                className="bg-transparent border-none text-xs text-[#1b1c1a] placeholder:text-[#88726d] focus:outline-none w-32 xl:w-44 p-0"
                placeholder="Search occasions, treats..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <a
              aria-label="Call Atelier Concierge"
              className="p-2.5 rounded-full text-[#55423e] hover:text-[#99442d] hover:bg-[#f0edea] active:scale-95 transition-all duration-200"
              href="tel:+919846012345"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>

            <button
              aria-label="View Shopping Bag"
              onClick={() => {
                setBagToast(`Bag contains ${bagCount} curations`);
                setTimeout(() => setBagToast(null), 3000);
              }}
              className="p-2.5 rounded-full text-[#55423e] hover:text-[#99442d] hover:bg-[#f0edea] active:scale-95 transition-all duration-200 relative group"
            >
              <span className="material-symbols-outlined group-hover:scale-110 transition-transform">shopping_bag</span>
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#99442d] text-[#ffffff] text-[9px] font-bold rounded-full flex items-center justify-center shadow-sm group-hover:bg-[#b85c43] transition-colors">
                {bagCount}
              </span>
            </button>

            <a
              className="shimmer-btn hidden sm:inline-flex items-center gap-2 bg-[#99442d] text-[#ffffff] hover:bg-[#b85c43] px-4 py-2.5 rounded text-xs font-semibold tracking-wider active:scale-[0.97] transition-all duration-200 shadow-sm hover:shadow-md"
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
        <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#dbc1ba]/30">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Editorial Narrative */}
              <div className="lg:col-span-6 flex flex-col space-y-6 text-left reveal-on-scroll">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eae8e5] border border-[#dbc1ba]/60 rounded-full w-fit hover:border-[#99442d]/40 transition-colors">
                  <span className="flex h-2 w-2 rounded-full bg-[#3f6650] animate-ping"></span>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#55423e]">
                    Bespoke Atelier • Thrikkakara, Kochi
                  </span>
                </div>
                <h1 className="text-[38px] md:text-[56px] leading-[44px] md:leading-[64px] font-['Playfair_Display',serif] font-semibold text-[#1b1c1a] tracking-tight">
                  Every Gift Should Tell a Story.
                </h1>
                <p className="text-[16px] md:text-[18px] text-[#55423e] max-w-xl leading-relaxed">
                  Handcrafted, bespoke gift hampers in Kochi for weddings, birthdays, anniversaries, corporate celebrations, and festive traditions. Curated to your unique vision and delivered with love across Kochi.
                </p>
                {/* Call to Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    className="shimmer-btn inline-flex items-center justify-center bg-[#99442d] text-[#ffffff] hover:bg-[#b85c43] px-6 py-3.5 rounded text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow-lg active:scale-[0.98]"
                    href="#occasions"
                  >
                    Explore Curated Collections
                  </a>
                  <a
                    className="inline-flex items-center justify-center border border-[#99442d] text-[#99442d] hover:bg-[#ffc1a6]/20 hover:border-[#b85c43] px-6 py-3.5 rounded text-xs font-semibold tracking-wider transition-all duration-200 active:scale-[0.98]"
                    href="#custom-builder"
                  >
                    Build a Custom Hamper
                  </a>
                </div>
                {/* Atelier Trust Badges Grid */}
                <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#dbc1ba]/40">
                  <div className="flex flex-col p-2 rounded hover:bg-[#f6f3f0] transition-colors duration-200">
                    <div className="flex items-center gap-1 text-[#D49B82]">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:scale-125 duration-200" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                      <span className="font-bold text-[#1b1c1a] text-xs">4.9 / 5.0</span>
                    </div>
                    <span className="text-[11px] text-[#55423e]">18 Google Reviews</span>
                  </div>
                  <div className="flex flex-col p-2 rounded hover:bg-[#f6f3f0] transition-colors duration-200">
                    <div className="flex items-center gap-1 text-[#99442d]">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:rotate-12 duration-200">
                        bolt
                      </span>
                      <span className="font-bold text-[#1b1c1a] text-xs">Same-Day</span>
                    </div>
                    <span className="text-[11px] text-[#55423e]">Kochi Delivery &amp; Pick-up</span>
                  </div>
                  <div className="flex flex-col p-2 rounded hover:bg-[#f6f3f0] transition-colors duration-200">
                    <div className="flex items-center gap-1 text-[#3f6650]">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:scale-110 duration-200">
                        spa
                      </span>
                      <span className="font-bold text-[#1b1c1a] text-xs">Artisanal</span>
                    </div>
                    <span className="text-[11px] text-[#55423e]">Kerala Keepsakes</span>
                  </div>
                  <div className="flex flex-col p-2 rounded hover:bg-[#f6f3f0] transition-colors duration-200">
                    <div className="flex items-center gap-1 text-[#81533e]">
                      <span className="material-symbols-outlined text-[18px] transition-transform hover:scale-110 duration-200">
                        person_heart
                      </span>
                      <span className="font-bold text-[#1b1c1a] text-xs">Lead Curator</span>
                    </div>
                    <span className="text-[11px] text-[#55423e]">Hima &amp; Atelier Team</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Frame */}
              <div className="lg:col-span-6 relative reveal-on-scroll">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#ffc1a6]/30 to-[#c2ecd1]/20 rounded-xl blur-xl transition-all duration-700 hover:blur-2xl"></div>
                  <div className="relative bg-[#ffffff] border border-[#dbc1ba]/60 rounded-xl p-3 shadow-md hover:shadow-xl transition-all duration-500 group">
                    <div className="overflow-hidden rounded-lg aspect-[4/3] sm:aspect-[16/11] relative">
                      <img
                        alt="Signature handcrafted Kerala wooden hamper box with ribbons, spices, candles and calligraphy letter"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        src="https://lh3.googleusercontent.com/aida/AEtjO1XslEC3GN1TqzSfiPgVRCj8MPiNC1iFrkIsw_HiXPxJfwP2gtgAGtzIAqeT6cBlf4YLdFpQBZHK0bFnu5P0N3K8I5XVB_QwPu_fkZ4_YaAJawvr6LH753UmBadhEz8A-aRUXw2tE1976u4AcPifa46s2fsWFBSPN4iIV9qyqobt_TxYd2LzKEOVtzjRoUTXy9gY5aGXa5alM6tFRjPtSMtTUp777DWwVKAncyZcVtu012uCY5j-wIap6OhT"
                      />
                      <div className="absolute top-4 left-4 bg-[#3f6650] text-[#ffffff] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider shadow-sm flex items-center gap-1.5 transition-transform duration-300 group-hover:scale-105">
                        <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
                        Signature Atelier Curation
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-[#f6f3f0] rounded-lg flex items-center justify-between border border-[#dbc1ba]/30 group-hover:border-[#99442d]/40 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#99442d]/10 flex items-center justify-center text-[#99442d] group-hover:bg-[#99442d] group-hover:text-[#ffffff] transition-all duration-300">
                          <span className="material-symbols-outlined">verified</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#1b1c1a]">The Heritage Wooden Keepsake Chest</p>
                          <p className="text-[11px] text-[#55423e]">Hand-poured beeswax candle • Spiced cocoa • Brass memento</p>
                        </div>
                      </div>
                      <span className="text-[#99442d] font-bold text-lg">₹3,850</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curated Occasion Collections Bento & Showcase */}
        <section className="py-16 md:py-24 bg-[#f6f3f0]/40" id="occasions">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {/* Header & Category Filters */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
              <div className="max-w-xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#99442d]">
                  Curated For Every Milestone
                </span>
                <h2 className="text-[30px] md:text-[40px] leading-tight font-['Playfair_Display',serif] font-semibold text-[#1b1c1a] mt-2">
                  Signature Hamper Collections
                </h2>
                <p className="text-sm text-[#55423e] mt-2">
                  Thoughtfully arranged with bespoke Kerala confections, keepsake mementos, botanical bath luxuries, and handwritten calligraphy.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2" id="filter-pills-container">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-wider transition-all duration-200 ${
                      activeCategory === category
                        ? 'bg-[#99442d] text-[#ffffff] shadow-sm'
                        : 'bg-[#f0edea] border border-[#dbc1ba]/60 text-[#55423e] hover:text-[#1b1c1a] hover:bg-[#eae8e5]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Hampers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredHampers.map((hamper) => {
                const isWishlisted = !!wishlist[hamper.id];
                return (
                  <div
                    key={hamper.id}
                    className="tactile-card group bg-[#ffffff] border border-[#dbc1ba]/50 rounded-lg overflow-hidden flex flex-col reveal-on-scroll"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f0edea]">
                      <img
                        alt={hamper.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        src={hamper.image}
                      />
                      <div className={`absolute top-3 left-3 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider shadow-sm ${hamper.badgeColor}`}>
                        {hamper.badge}
                      </div>
                      <button
                        aria-label="Add to wishlist"
                        onClick={() => toggleWishlist(hamper.id)}
                        className={`wishlist-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-[#fcf9f6]/80 backdrop-blur-md flex items-center justify-center transition-colors shadow-sm ${
                          isWishlisted ? 'text-[#99442d]' : 'text-[#55423e] hover:text-[#99442d]'
                        }`}
                      >
                        <span
                          className="material-symbols-outlined text-[18px] transition-transform active:scale-125"
                          style={{ fontVariationSettings: isWishlisted ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          favorite
                        </span>
                      </button>
                      <div className="absolute bottom-3 left-3 right-3 bg-[#fcf9f6]/90 backdrop-blur-sm px-3 py-1.5 rounded text-[11px] text-[#3f6650] font-semibold flex items-center gap-1 shadow-sm transition-transform duration-300 group-hover:translate-y-[-2px]">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        {hamper.delivery}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-[20px] font-['Playfair_Display',serif] font-semibold text-[#1b1c1a] group-hover:text-[#99442d] transition-colors duration-200">
                          {hamper.name}
                        </h3>
                        <p className="text-xs text-[#55423e] mt-2 line-clamp-2 leading-relaxed">
                          {hamper.description}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-[#dbc1ba]/40 flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-[#88726d] block">Price per Hamper</span>
                          <span className="text-base font-bold text-[#1b1c1a]">₹{hamper.price.toLocaleString('en-IN')}</span>
                        </div>
                        <button
                          onClick={() => handlePersonalizeHamper(hamper)}
                          className="shimmer-btn px-3.5 py-2 rounded bg-[#b85c43] text-[#ffffff] text-[11px] font-semibold tracking-wider hover:bg-[#99442d] transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
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
            <div className="mt-12 p-6 md:p-8 bg-[#eae8e5] rounded-xl border border-[#dbc1ba]/60 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-all duration-300 reveal-on-scroll">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#99442d] text-[#ffffff] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 hover:scale-110">
                  <span className="material-symbols-outlined text-2xl">palette</span>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-[#1b1c1a]">Need a specific theme or color palette?</h4>
                  <p className="text-xs text-[#55423e]">We handcraft custom wedding favors, bridal shower hampers, and Onam/Vishu festive packaging from scratch.</p>
                </div>
              </div>
              <a
                className="shimmer-btn inline-flex items-center gap-2 bg-[#1b1c1a] text-[#ffffff] hover:bg-[#99442d] px-5 py-3 rounded text-xs font-semibold tracking-wider transition-all duration-200 shrink-0 shadow-sm hover:shadow active:scale-[0.98]"
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
        <section className="py-16 md:py-24 bg-[#fcf9f6]" id="custom-builder">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#99442d]">
                The Custom Builder Experience
              </span>
              <h2 className="text-[30px] md:text-[40px] leading-tight font-['Playfair_Display',serif] font-semibold text-[#1b1c1a] mt-2">
                Build Your Bespoke Kochi Hamper
              </h2>
              <p className="text-sm text-[#55423e] mt-2">
                Design an authentic personalized keepsake in four curated steps. Select the vessel, handpick Kerala delicacies, pen a card, and select your delivery slot.
              </p>
            </div>

            {/* 4 Step Process Indicator */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="p-4 bg-[#ffffff] border-2 border-[#99442d] rounded-lg shadow-sm transition-all duration-300">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#99442d] text-[#ffffff] font-bold flex items-center justify-center text-xs shadow-sm">01</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#88726d] block">Step 01</span>
                    <span className="text-sm font-semibold text-[#1b1c1a]">Choose Hamper Vessel</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#f6f3f0] border border-[#dbc1ba]/60 rounded-lg opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#e5e2df] text-[#1b1c1a] font-bold flex items-center justify-center text-xs">02</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#88726d] block">Step 02</span>
                    <span className="text-sm font-semibold text-[#1b1c1a]">Artisanal Delights</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#f6f3f0] border border-[#dbc1ba]/60 rounded-lg opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#e5e2df] text-[#1b1c1a] font-bold flex items-center justify-center text-xs">03</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#88726d] block">Step 03</span>
                    <span className="text-sm font-semibold text-[#1b1c1a]">Keepsake &amp; Note</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-[#f6f3f0] border border-[#dbc1ba]/60 rounded-lg opacity-90 hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#e5e2df] text-[#1b1c1a] font-bold flex items-center justify-center text-xs">04</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#88726d] block">Step 04</span>
                    <span className="text-sm font-semibold text-[#1b1c1a]">Kochi Dispatch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Interactive Selector Area */}
              <div className="lg:col-span-8 bg-[#ffffff] border border-[#dbc1ba]/60 rounded-xl p-6 md:p-8 shadow-sm">
                
                {/* Step 1: Vessel Selector */}
                <div className="mb-8">
                  <h3 className="text-base font-semibold text-[#1b1c1a] flex items-center gap-2">
                    <span>Select Your Hamper Base &amp; Finish</span>
                    <span className="text-[10px] text-[#3f6650] font-bold bg-[#c2ecd1]/40 px-2.5 py-0.5 rounded-full">Included</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    {VESSELS.map((vessel) => {
                      const isSelected = selectedVessel.id === vessel.id;
                      return (
                        <label
                          key={vessel.id}
                          className={`builder-option-card relative flex flex-col p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? 'border-2 border-[#99442d] bg-[#b85c43]/5'
                              : 'border border-[#dbc1ba]/60 hover:border-[#99442d]/50 bg-[#f6f3f0]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="vessel"
                            checked={isSelected}
                            onChange={() => setSelectedVessel(vessel)}
                            className="absolute top-3 right-3 text-[#99442d] focus:ring-[#99442d] h-4 w-4"
                          />
                          <span className={`material-symbols-outlined text-3xl mb-2 ${isSelected ? 'text-[#99442d]' : 'text-[#81533e]'}`}>
                            {vessel.icon}
                          </span>
                          <span className="font-bold text-xs text-[#1b1c1a]">{vessel.name}</span>
                          <span className="text-[11px] text-[#55423e] mt-1 leading-normal">{vessel.description}</span>
                          <span className="text-xs font-bold text-[#99442d] mt-3">₹{vessel.price.toLocaleString('en-IN')} base</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Artisan Accompaniments */}
                <div className="mb-8 pt-6 border-t border-[#dbc1ba]/40">
                  <h3 className="text-base font-semibold text-[#1b1c1a] flex items-center justify-between">
                    <span>Handpick Kerala Gourmet Delicacies</span>
                    <span className="text-xs text-[#88726d]">Select 2 to 6 items</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {DELICACIES.map((item) => {
                      const isChecked = selectedDelicacyIds.includes(item.id);
                      return (
                        <label
                          key={item.id}
                          className={`builder-option-card flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all ${
                            isChecked
                              ? 'border border-[#99442d]/60 bg-[#b85c43]/5'
                              : 'border border-[#dbc1ba]/60 hover:bg-[#f6f3f0]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleDelicacy(item.id)}
                              className="delicacy-checkbox rounded border-[#88726d] text-[#99442d] focus:ring-[#99442d] h-4 w-4"
                            />
                            <div>
                              <span className="text-xs font-semibold text-[#1b1c1a] block">{item.name}</span>
                              <span className="text-[11px] text-[#88726d]">{item.subtext}</span>
                            </div>
                          </div>
                          <span className="text-xs font-bold text-[#99442d] shrink-0">+₹{item.price}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Personalized Stationery Note */}
                <div className="pt-6 border-t border-[#dbc1ba]/40">
                  <h3 className="text-base font-semibold text-[#1b1c1a] mb-2">Pen Your Heartfelt Note</h3>
                  <p className="text-xs text-[#55423e] mb-3">Our lead calligrapher will hand-write your words onto gold-flecked deckle-edge paper and seal it with traditional wax.</p>
                  <textarea
                    value={calligraphyNote}
                    onChange={(e) => setCalligraphyNote(e.target.value)}
                    className="w-full bg-[#ffffff] border border-[#dbc1ba]/80 rounded-lg p-3 text-xs italic text-[#1b1c1a] focus:border-[#99442d] focus:ring-2 focus:ring-[#99442d]/20 transition-all outline-none"
                    placeholder="Wishing you warmth, joy, and new beginnings on this special day. With endless love..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Live Atelier Summary Drawer */}
              <div className="lg:col-span-4 sticky top-28">
                <div className="bg-[#eae8e5] border border-[#dbc1ba]/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between pb-4 border-b border-[#dbc1ba]/40">
                    <h4 className="text-[20px] font-['Playfair_Display',serif] font-semibold text-[#1b1c1a]">Hamper Summary</h4>
                    <span className="text-[10px] text-[#3f6650] bg-[#c2ecd1]/50 px-2 py-0.5 rounded font-bold animate-badge-pulse">
                      Live Atelier
                    </span>
                  </div>
                  
                  <div className="py-4 space-y-3 text-xs">
                    {/* Vessel Row */}
                    <div className="flex justify-between text-[#55423e]">
                      <span>{selectedVessel.name}</span>
                      <span className="font-semibold text-[#1b1c1a]">₹{selectedVessel.price.toLocaleString('en-IN')}</span>
                    </div>

                    {/* Selected Delicacies */}
                    {selectedDelicacyIds.map((id) => {
                      const item = DELICACIES.find((d) => d.id === id);
                      if (!item) return null;
                      return (
                        <div key={item.id} className="flex justify-between text-[#55423e]">
                          <span>{item.shortName}</span>
                          <span className="font-semibold text-[#1b1c1a]">₹{item.price}</span>
                        </div>
                      );
                    })}

                    {/* Complimentary Inclusions */}
                    <div className="flex justify-between text-[#55423e]">
                      <span>Calligraphy Note &amp; Wax Seal</span>
                      <span className="font-semibold text-[#3f6650]">Complimentary</span>
                    </div>
                    <div className="flex justify-between text-[#55423e]">
                      <span>Satin Ribbon &amp; Botanical Sprig</span>
                      <span className="font-semibold text-[#3f6650]">Complimentary</span>
                    </div>
                  </div>

                  {/* Estimated Total */}
                  <div className="pt-4 border-t border-[#dbc1ba]/60 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#88726d] block">Estimated Total</span>
                      <span className={`text-[26px] font-['Playfair_Display',serif] text-[#99442d] font-bold inline-block ${tickerActive ? 'ticker-pulse' : ''}`}>
                        ₹{totalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[11px] text-[#55423e]">Tax included</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    <a
                      className="shimmer-btn w-full flex items-center justify-center gap-2 bg-[#99442d] text-[#ffffff] hover:bg-[#b85c43] py-3 rounded text-xs font-semibold tracking-wider transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>Confirm via WhatsApp / Call</span>
                    </a>
                    <p className="text-center text-[11px] text-[#88726d] flex items-center justify-center gap-1">
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
        <section className="py-16 md:py-24 bg-[#f6f3f0]/50 border-y border-[#dbc1ba]/30" id="reviews">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal-on-scroll">
              <div>
                <div className="inline-flex items-center gap-2 text-[#99442d] font-bold text-[10px] tracking-widest uppercase">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    hotel_class
                  </span>
                  <span>Authentic Local Love</span>
                </div>
                <h2 className="text-[30px] md:text-[40px] leading-tight font-['Playfair_Display',serif] font-semibold text-[#1b1c1a] mt-2">
                  Loved by Discerning Kochi Gifters
                </h2>
                <p className="text-sm text-[#55423e] mt-2 max-w-xl">
                  From grand destination weddings to intimate midnight surprises, hear how our bespoke curations touched hearts across Kerala.
                </p>
              </div>

              {/* Google Rating Pill */}
              <div className="bg-[#ffffff] border border-[#dbc1ba]/60 rounded-xl px-5 py-3.5 shadow-sm flex items-center gap-4 shrink-0 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <span className="text-[28px] font-['Playfair_Display',serif] font-bold text-[#1b1c1a] block leading-none">4.9</span>
                  <div className="flex text-[#D49B82] mt-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-10 w-px bg-[#dbc1ba]/40"></div>
                <div>
                  <span className="text-xs font-bold text-[#1b1c1a] block">Google Verified Reviews</span>
                  <span className="text-[12px] text-[#55423e]">18 Patrons Rated 5 Stars</span>
                </div>
              </div>
            </div>

            {/* Reviews Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="tactile-card bg-[#ffffff] border border-[#dbc1ba]/50 rounded-xl p-6 flex flex-col justify-between shadow-sm reveal-on-scroll">
                <div>
                  <div className="flex text-[#D49B82] mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-[#1b1c1a] italic leading-relaxed">
                    “I've been choosing <strong className="text-[#99442d] font-semibold">HamPers Kochi</strong> for all my customized gifting needs for the past couple of years, and they have never disappointed. Their attention to detail, excellent service, and carefully curated gift products truly set them apart.”
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#dbc1ba]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffc1a6] text-[#7a4d38] font-bold flex items-center justify-center text-xs transition-transform hover:scale-110">
                    JP
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1b1c1a] block">Justin Prasad</span>
                    <span className="text-[11px] text-[#88726d]">Local Guide • 1,040 Reviews</span>
                  </div>
                </div>
              </div>

              {/* Review 2 */}
              <div className="tactile-card bg-[#ffffff] border border-[#dbc1ba]/50 rounded-xl p-6 flex flex-col justify-between shadow-sm reveal-on-scroll">
                <div>
                  <div className="flex text-[#D49B82] mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-[#1b1c1a] italic leading-relaxed">
                    “Being a tour operator, we always order welcome kit from Hampers Kochi and we always get better than committed services. Hats off to <strong className="text-[#99442d] font-semibold">Hima</strong> for your dedication.”
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#dbc1ba]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c2ecd1] text-[#284e3a] font-bold flex items-center justify-center text-xs transition-transform hover:scale-110">
                    NG
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1b1c1a] block">Nirmal Gilroy</span>
                    <span className="text-[11px] text-[#88726d]">Local Guide • Kerala Tour Operator</span>
                  </div>
                </div>
              </div>

              {/* Review 3 */}
              <div className="tactile-card bg-[#ffffff] border border-[#dbc1ba]/50 rounded-xl p-6 flex flex-col justify-between shadow-sm reveal-on-scroll">
                <div>
                  <div className="flex text-[#D49B82] mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        star
                      </span>
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-[#1b1c1a] italic leading-relaxed">
                    “I recently got one of these beautiful hampers as a birthday gift for me and my daughter and I am so impressed. The attention to detail is unmatched... you can tell so much care goes into it!”
                  </p>
                </div>
                <div className="pt-5 mt-5 border-t border-[#dbc1ba]/30 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffdbd1] text-[#7b2e19] font-bold flex items-center justify-center text-xs transition-transform hover:scale-110">
                    FA
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1b1c1a] block">Fathima Abdullah</span>
                    <span className="text-[11px] text-[#88726d]">Verified Kochi Resident</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Quote Card */}
            <div className="mt-12 bg-[#99442d]/5 border border-[#99442d]/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 reveal-on-scroll hover:border-[#99442d]/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-[#99442d] text-[#ffffff] flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 hover:rotate-6">
                <span className="material-symbols-outlined text-3xl">format_quote</span>
              </div>
              <div>
                <blockquote className="text-[20px] font-['Playfair_Display',serif] text-[#99442d] italic font-semibold">
                  “When I started HamPers Kochi, my dream was to create gifts that bring the biggest smile to people's faces.”
                </blockquote>
                <p className="text-xs text-[#55423e] mt-2 font-medium">
                  — <strong className="text-[#1b1c1a]">Hima</strong>, Founder &amp; Lead Curator at HamPers Kochi Atelier
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Storefront & Delivery Radius Section */}
        <section className="py-16 md:py-24 bg-[#fcf9f6]" id="studio">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Studio Details */}
              <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#99442d]">
                    Visit Our Atelier &amp; Pick-up Hub
                  </span>
                  <h2 className="text-[30px] md:text-[40px] leading-tight font-['Playfair_Display',serif] font-semibold text-[#1b1c1a] mt-2">
                    Crafted in Thrikkakara, Kochi
                  </h2>
                  <p className="text-sm text-[#55423e] mt-2">
                    Step into our sensory workshop to smell botanical blends, select custom ribbons, sample Kerala chocolates, and coordinate express deliveries.
                  </p>
                </div>

                {/* Address Card */}
                <div className="bg-[#f6f3f0] border border-[#dbc1ba]/60 rounded-xl p-5 space-y-4 hover:border-[#99442d]/40 transition-all shadow-sm">
                  <div className="flex items-start gap-3.5">
                    <span className="material-symbols-outlined text-[#99442d] text-2xl mt-0.5">storefront</span>
                    <div>
                      <h4 className="font-bold text-xs text-[#1b1c1a]">Thrikkakara Design Atelier</h4>
                      <p className="text-xs text-[#55423e] mt-0.5">
                        Seaport - Airport Rd, Vallathol Padi, Vidya Nagar Colony, Thrikkakara, Edappally, Kochi, Kerala 682021
                      </p>
                      <p className="text-[11px] font-mono text-[#88726d] mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-[#99442d]">location_on</span>
                        Plus Code: <strong>28PP+5R Kochi</strong>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5 pt-3 border-t border-[#dbc1ba]/30">
                    <span className="material-symbols-outlined text-[#3f6650] text-2xl mt-0.5">schedule</span>
                    <div>
                      <h4 className="font-bold text-xs text-[#1b1c1a]">Studio Hours &amp; Concierge</h4>
                      <p className="text-xs text-[#55423e] mt-0.5">
                        Open Friday onwards (Opens 10:00 AM) • Daily Phone &amp; WhatsApp Concierge Available (9:00 AM – 8:30 PM)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 bg-[#ffffff] border border-[#dbc1ba]/50 rounded-lg flex items-center gap-2.5 hover:border-[#99442d]/40 transition-colors">
                    <span className="material-symbols-outlined text-[#99442d] text-[20px]">two_wheeler</span>
                    <span className="text-xs font-semibold text-[#1b1c1a]">Express Delivery in Kakkanad &amp; Edappally</span>
                  </div>
                  <div className="p-3 bg-[#ffffff] border border-[#dbc1ba]/50 rounded-lg flex items-center gap-2.5 hover:border-[#99442d]/40 transition-colors">
                    <span className="material-symbols-outlined text-[#99442d] text-[20px]">store</span>
                    <span className="text-xs font-semibold text-[#1b1c1a]">Curbside In-Store Pick-up</span>
                  </div>
                  <div className="p-3 bg-[#ffffff] border border-[#dbc1ba]/50 rounded-lg flex items-center gap-2.5 hover:border-[#99442d]/40 transition-colors">
                    <span className="material-symbols-outlined text-[#99442d] text-[20px]">flight_takeoff</span>
                    <span className="text-xs font-semibold text-[#1b1c1a]">All-India &amp; NRI Courier Support</span>
                  </div>
                  <div className="p-3 bg-[#ffffff] border border-[#dbc1ba]/50 rounded-lg flex items-center gap-2.5 hover:border-[#99442d]/40 transition-colors">
                    <span className="material-symbols-outlined text-[#99442d] text-[20px]">verified_user</span>
                    <span className="text-xs font-semibold text-[#1b1c1a]">100% Fragile Item Care Guarantees</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    className="shimmer-btn inline-flex items-center gap-2 bg-[#1b1c1a] text-[#ffffff] hover:bg-[#99442d] px-5 py-3 rounded text-xs font-semibold tracking-wider transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow"
                    href="https://maps.google.com/?q=28PP+5R+Kochi"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="material-symbols-outlined text-[18px]">directions</span>
                    <span>Get Google Directions</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 border border-[#88726d] text-[#1b1c1a] hover:border-[#99442d] hover:text-[#99442d] px-5 py-3 rounded text-xs font-semibold tracking-wider transition-all duration-200 active:scale-[0.98]"
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
                <div className="bg-[#ffffff] border border-[#dbc1ba]/60 rounded-2xl p-4 shadow-md hover:shadow-xl transition-all duration-500 group">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#f0edea]">
                    <img
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      alt="HamPers Kochi Boutique Atelier Studio"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl_6JattfD8jkQ2jC-WADiOtPuVNuZHnXmU8BIVCdAyTBQ2aX42SZfdHnbSF8wNHpb09859ftdCmCLSkK8KvTSyCB99iQOzWHqXd21--in1Br_DGgdupFBC2IY_Eyarj2nNPWH4oi58DNeX-tfYI_E32muRhB9ZTpkHGE5MIrO7yUZ8OkdMs2oIbjaLlgMlCTSczQZpYNkwb4OCPGS7cqK6ok548q3uyEXAP2GE8z8kb9CxZkm3gfrmHZQwOixdbooox0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1a]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-[#ffffff]">
                      <span className="pin-pulse inline-flex items-center gap-1 text-[11px] font-bold bg-[#99442d] px-2.5 py-0.5 rounded uppercase tracking-wider shadow-sm">
                        <span className="material-symbols-outlined text-[12px]">location_on</span>
                        Seaport-Airport Rd, Thrikkakara
                      </span>
                      <p className="text-xs font-semibold text-[#ffffff] mt-1.5 drop-shadow-sm">
                        Warm bespoke welcome hampers handcrafted by HamPers Kochi
                      </p>
                    </div>
                  </div>

                  {/* Delivery Coverage Strip */}
                  <div className="mt-4 p-3 bg-[#f6f3f0] rounded-lg flex items-center justify-between border border-[#dbc1ba]/30 group-hover:border-[#99442d]/30 transition-colors">
                    <div className="flex items-center gap-2 text-[#55423e] text-xs">
                      <span className="material-symbols-outlined text-[#3f6650]">check_circle</span>
                      <span>Same-Day Coverage: Kakkanad, Edappally, Aluva, Fort Kochi &amp; Ernakulam City</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#99442d]">₹0 Studio Pick-up</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#f0edea] border-t border-[#dbc1ba]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 space-y-4">
              <a className="text-[26px] font-['Playfair_Display',serif] font-semibold text-[#99442d] block hover:opacity-90 transition-opacity" href="#">
                HamPers Kochi
              </a>
              <p className="text-xs text-[#55423e] max-w-sm leading-relaxed">
                Handcrafting Kerala's most thoughtful celebratory keepsakes. Dedicated to preserving warmth, artisanal excellence, and timeless stories in every ribbon and box.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="inline-flex items-center gap-1 text-[11px] bg-[#eae8e5] px-2.5 py-1 rounded text-[#55423e] hover:bg-[#e5e2df] transition-colors">
                  <span className="material-symbols-outlined text-[14px]">woman</span>
                  Woman-Owned
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] bg-[#eae8e5] px-2.5 py-1 rounded text-[#55423e] hover:bg-[#e5e2df] transition-colors">
                  <span className="material-symbols-outlined text-[14px]">favorite</span>
                  LGBTQ+ Inclusive
                </span>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#99442d] mb-3">Atelier &amp; Delivery</h5>
                <ul className="space-y-2.5 text-xs text-[#55423e]">
                  <li>
                    <a className="hover:text-[#99442d] transition-colors duration-200 block" href="#studio">
                      Thrikkakara Studio: Seaport-Airport Rd (Opens 10 AM)
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#99442d] transition-colors duration-200 block" href="#studio">
                      Edappally Pick-up Hub
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#99442d] transition-colors duration-200 block" href="#studio">
                      Same-Day Delivery Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-[#99442d] mb-3">Bespoke Concierge</h5>
                <ul className="space-y-2.5 text-xs text-[#55423e]">
                  <li>
                    <a className="hover:text-[#99442d] transition-colors duration-200 block" href="#occasions">
                      Bespoke Corporate Gifting
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-[#99442d] transition-colors duration-200 block" href="#custom-builder">
                      Care &amp; Unboxing Guide
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-[#99442d] font-semibold hover:underline inline-flex items-center gap-1"
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

          <div className="pt-8 border-t border-[#dbc1ba]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#55423e]">
            <p>© 2024 HamPers Kochi. Handcrafted in Kerala. Woman-Owned &amp; LGBTQ+ Inclusive Boutique Atelier.</p>
            <p className="text-[#88726d]">Designed with Tactile Editorial Luxury for Discerning Gifters</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
