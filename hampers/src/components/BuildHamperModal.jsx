import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Send, Check, ChevronRight, ChevronLeft, MapPin, Gift, Heart, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BUSINESS_INFO, GREETING_CARDS, BOX_PACKAGING_STYLES, KOCHI_LOCALITIES } from '../data/hampersData';

export default function BuildHamperModal({ isOpen, onClose, initialSelection = null }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    packagingStyle: BOX_PACKAGING_STYLES[0].name,
    occasion: 'Birthday Celebration',
    treats: ['Authentic Kerala Delicacies (Kuzhalappam & Achappam)', 'Pure Coconut Oil Banana Chips'],
    keepsake: 'Hand-carved Wooden Elephant Souvenir',
    selectedCardId: GREETING_CARDS[1].id,
    customCardMessage: '',
    recipientName: '',
    deliveryLocation: 'Edappally, Kochi',
    budgetTier: 'Custom Curated',
    orderVolume: '1 Unit (Personal Hamper)',
    customNote: '',
  });

  // Populate initial selection if triggered from a specific card
  useEffect(() => {
    if (initialSelection) {
      setFormData((prev) => ({
        ...prev,
        occasion: initialSelection.title || initialSelection.name || prev.occasion,
        customNote: `Interested in: ${initialSelection.title || initialSelection.name}`,
      }));
    }
  }, [initialSelection]);

  const occasions = [
    'Birthday Celebration',
    'Wedding & Trousseau',
    'Corporate Welcome / Delegate Kit',
    'Anniversary Milestone',
    'Kerala Heritage Homecoming',
    'Tour Group Hospitality Welcome',
    'Festive (Onam, Christmas, Diwali)',
    'Baby Shower / Housewarming'
  ];

  const availableTreats = [
    { name: 'Authentic Kerala Delicacies (Kuzhalappam & Achappam)', category: 'Heritage' },
    { name: 'Pure Coconut Oil Banana Chips', category: 'Heritage' },
    { name: 'Handmade Jaggery & Ginger Cookies', category: 'Artisanal' },
    { name: 'Ellunda (Sesame) & Peanut Brittle', category: 'Heritage' },
    { name: 'Gourmet Dark Chocolates & Confections', category: 'Gourmet' },
    { name: 'Artisanal Pomegranate / Fruit Beverages', category: 'Gourmet' },
    { name: 'Roasted Spiced Cashews & Almonds', category: 'Gourmet' }
  ];

  const availableKeepsakes = [
    'Hand-carved Wooden Elephant Souvenir',
    'Miniature Brass Nilavilakku / Souvenir',
    'Fresh Rose Bunch & Baby’s Breath',
    'Handcrafted Kathakali Keepsake Mask',
    'Custom Laser-Engraved Wooden Logo Tag',
    'Artisanal Scented Soy Candle'
  ];

  const toggleTreat = (item) => {
    setFormData((prev) => {
      const exists = prev.treats.includes(item);
      if (exists) {
        return { ...prev, treats: prev.treats.filter((t) => t !== item) };
      } else {
        return { ...prev, treats: [...prev.treats, item] };
      }
    });
  };

  const selectedCard = GREETING_CARDS.find((c) => c.id === formData.selectedCardId) || GREETING_CARDS[0];

  const handleComplete = () => {
    // Fire celebratory gold confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C9A45C', '#E2C589', '#F7F1E7', '#4A1824']
    });

    // Compile WhatsApp inquiry text inspired by BoxUp's itemized format
    const message = `*Hampers Kochi - Bespoke Hamper Curation Request*
(Configured via Atelier Builder)

*Occasion:* ${formData.occasion}
*Box Packaging Style:* ${formData.packagingStyle}

*Selected Gourmet Inclusions:*
${formData.treats.map((t) => `• ${t}`).join('\n')}
*Keepsake / Souvenir:* ${formData.keepsake}

*Selected Greeting Card:* ${selectedCard.title} (${selectedCard.tagline})
${formData.customCardMessage ? `*Card Message:* "${formData.customCardMessage}"\n` : ''}
*Delivery Location in Kochi:* ${formData.deliveryLocation}
*Order Volume:* ${formData.orderVolume}
${formData.recipientName ? `*Recipient / Client:* ${formData.recipientName}\n` : ''}
${formData.customNote ? `*Special Atelier Notes:* ${formData.customNote}\n` : ''}
_Kindly provide pricing details and delivery confirmation._`;

    const url = BUSINESS_INFO.getWhatsAppUrl(message);
    window.open(url, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#090807]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#171513] border border-[#C9A45C]/40 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden z-10 my-6 text-left"
        >
          {/* Header Bar */}
          <div className="p-5 sm:p-7 pb-4 flex items-center justify-between border-b border-white/10 bg-[#141210]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C9A45C]">
                  Artisanal 4-Step Builder
                </span>
                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#C9A45C]/15 text-[#DFBA73] font-mono">
                  BoxUp Edition
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F7F1E7] mt-1">
                MAKE YOUR OWN HAMPER
              </h3>
            </div>
            
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 text-[#D8C7AD] hover:text-[#F7F1E7] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Indicators (4-Step BYOB) */}
          <div className="px-5 sm:px-7 py-3 bg-[#111111] grid grid-cols-4 gap-1 text-[11px] text-[#D8C7AD]/60 border-b border-white/5 text-center">
            <button
              onClick={() => setStep(1)}
              className={`py-1 transition-colors flex items-center justify-center gap-1 ${
                step === 1 ? 'text-[#C9A45C] font-semibold border-b-2 border-[#C9A45C]' : ''
              }`}
            >
              <span>1. Box Style</span>
            </button>
            <button
              onClick={() => setStep(2)}
              className={`py-1 transition-colors flex items-center justify-center gap-1 ${
                step === 2 ? 'text-[#C9A45C] font-semibold border-b-2 border-[#C9A45C]' : ''
              }`}
            >
              <span>2. Products</span>
            </button>
            <button
              onClick={() => setStep(3)}
              className={`py-1 transition-colors flex items-center justify-center gap-1 ${
                step === 3 ? 'text-[#C9A45C] font-semibold border-b-2 border-[#C9A45C]' : ''
              }`}
            >
              <span>3. Greeting Card</span>
            </button>
            <button
              onClick={() => setStep(4)}
              className={`py-1 transition-colors flex items-center justify-center gap-1 ${
                step === 4 ? 'text-[#C9A45C] font-semibold border-b-2 border-[#C9A45C]' : ''
              }`}
            >
              <span>4. Dispatch</span>
            </button>
          </div>

          {/* Step Content Area */}
          <div className="p-5 sm:p-7 max-h-[62vh] overflow-y-auto space-y-6">
            
            {/* STEP 1: Choose Box Style & Occasion */}
            {step === 1 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-3">
                    Step 1A: What is the celebration occasion?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        type="button"
                        onClick={() => setFormData({ ...formData, occasion: occ })}
                        className={`p-2.5 rounded-xl text-xs text-left transition-all border ${
                          formData.occasion === occ
                            ? 'bg-[#C9A45C]/20 border-[#C9A45C] text-[#FFF0D4] font-medium'
                            : 'bg-white/5 border-white/10 text-[#D8C7AD] hover:border-white/20'
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-3">
                    Step 1B: Choose Your Gift Box / Basket Style
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BOX_PACKAGING_STYLES.map((box) => (
                      <div
                        key={box.id}
                        onClick={() => setFormData({ ...formData, packagingStyle: box.name })}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                          formData.packagingStyle === box.name
                            ? 'bg-[#1f1c19] border-[#C9A45C] shadow-[0_4px_20px_rgba(201,164,92,0.2)]'
                            : 'bg-[#13110F] border-white/10 hover:border-white/20'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] uppercase tracking-wider text-[#C9A45C] font-mono">
                              {box.type}
                            </span>
                            {formData.packagingStyle === box.name && (
                              <Check className="w-4 h-4 text-[#C9A45C]" />
                            )}
                          </div>
                          <h4 className="font-serif text-sm font-normal text-[#F7F1E7] mb-1">
                            {box.name}
                          </h4>
                          <p className="text-[11px] text-[#D8C7AD]/70 leading-relaxed">
                            {box.description}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-white/5 text-[9px] uppercase tracking-wider text-[#DFBA73]">
                          Best for: {box.bestFor}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Curate Products (Treats & Keepsakes) */}
            {step === 2 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold">
                      Select Gourmet Delicacies & Treats
                    </label>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#C9A45C]/15 text-[#C9A45C] font-mono">
                      {formData.treats.length} Selected
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableTreats.map((item) => {
                      const isSelected = formData.treats.includes(item.name);
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => toggleTreat(item.name)}
                          className={`p-3 rounded-xl text-xs text-left transition-all border flex items-center justify-between gap-2 ${
                            isSelected
                              ? 'bg-[#C9A45C]/15 border-[#C9A45C] text-[#FFF0D4]'
                              : 'bg-white/5 border-white/10 text-[#D8C7AD] hover:border-white/20'
                          }`}
                        >
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-[#C9A45C]/80 block font-mono">
                              {item.category}
                            </span>
                            <span>{item.name}</span>
                          </div>
                          <span className={`w-4 h-4 rounded shrink-0 flex items-center justify-center border ${
                            isSelected ? 'bg-[#C9A45C] border-[#C9A45C] text-[#111111]' : 'border-white/20'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-3">
                    Add an Artisanal Keepsake or Souvenir
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableKeepsakes.map((ks) => (
                      <button
                        key={ks}
                        type="button"
                        onClick={() => setFormData({ ...formData, keepsake: ks })}
                        className={`p-3 rounded-xl text-xs text-left transition-all border flex items-center justify-between ${
                          formData.keepsake === ks
                            ? 'bg-[#C9A45C]/15 border-[#C9A45C] text-[#FFF0D4] font-medium'
                            : 'bg-white/5 border-white/10 text-[#D8C7AD] hover:border-white/20'
                        }`}
                      >
                        <span>{ks}</span>
                        {formData.keepsake === ks && <Check className="w-4 h-4 text-[#C9A45C]" />}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Greeting Card Selector (Directly BoxUp Style) */}
            {step === 3 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-1">
                    Select a Thematic Keepsake Greeting Card
                  </label>
                  <p className="text-[11px] text-[#D8C7AD]/70 mb-4">
                    Every hamper comes complete with a handcrafted greeting card inscribed with your message.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                    {GREETING_CARDS.map((card) => {
                      const isChosen = formData.selectedCardId === card.id;
                      return (
                        <div
                          key={card.id}
                          onClick={() => setFormData({ ...formData, selectedCardId: card.id })}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isChosen
                              ? 'bg-[#201d19] border-[#C9A45C] shadow-[0_4px_20px_rgba(201,164,92,0.25)]'
                              : 'bg-[#12100E] border-white/10 hover:border-white/20'
                          }`}
                        >
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-[#C9A45C] font-mono block mb-1">
                              {card.theme}
                            </span>
                            <h4 className="font-serif text-sm font-normal text-[#F7F1E7] mb-1">
                              {card.title}
                            </h4>
                            <p className="text-[10px] text-[#D8C7AD]/60">
                              {card.tagline}
                            </p>
                          </div>
                          {isChosen && (
                            <div className="mt-3 pt-2 border-t border-[#C9A45C]/30 flex items-center gap-1 text-[10px] text-[#DFBA73]">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Card Selected</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Card Message Preview Box */}
                  <div className="p-5 rounded-2xl bg-[#12100E] border border-[rgba(201,164,92,0.3)] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-mono flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Card Message Inscription</span>
                      </span>
                      <span className="text-[10px] text-[#D8C7AD]/60">
                        Default: "{selectedCard.messagePreview}"
                      </span>
                    </div>

                    <textarea
                      rows={3}
                      placeholder="Write your personal message here, or leave blank to use the standard card message..."
                      value={formData.customCardMessage}
                      onChange={(e) => setFormData({ ...formData, customCardMessage: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#181614] border border-white/10 text-xs text-[#F7F1E7] placeholder:text-white/30 focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Personalization, Delivery Location & WhatsApp Coordination */}
            {step === 4 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Recipient Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-2">
                      Recipient / Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maya / TCS Kakkanad Team"
                      value={formData.recipientName}
                      onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#12100E] border border-white/15 text-xs text-[#F7F1E7] placeholder:text-white/30 focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>

                  {/* Order Volume */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-2">
                      Order Volume
                    </label>
                    <select
                      value={formData.orderVolume}
                      onChange={(e) => setFormData({ ...formData, orderVolume: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#12100E] border border-white/15 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C9A45C]"
                    >
                      <option value="1 Unit (Personal Hamper)">1 Unit (Personal Hamper)</option>
                      <option value="2 - 5 Units (Family / Close Friends)">2 - 5 Units (Family / Close Friends)</option>
                      <option value="10 - 25 Units (Event / Team Favors)">10 - 25 Units (Event / Team Favors)</option>
                      <option value="25 - 100+ Units (Corporate / Wedding Bulk)">25 - 100+ Units (Corporate / Wedding Bulk)</option>
                    </select>
                  </div>
                </div>

                {/* Delivery Area in Kochi */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-2 flex items-center justify-between">
                    <span>Delivery Location in Kochi</span>
                    <span className="text-[10px] text-[#C9A45C] font-normal lowercase">hand-delivered across Kochi</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter locality or landmark in Kochi"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#12100E] border border-white/15 text-xs text-[#F7F1E7] placeholder:text-white/30 focus:outline-none focus:border-[#C9A45C] mb-2"
                  />

                  {/* Quick Kochi Locality Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {KOCHI_LOCALITIES.slice(0, 6).map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setFormData({ ...formData, deliveryLocation: loc })}
                        className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#C9A45C]/20 text-[#D8C7AD] hover:text-[#FFF0D4] border border-white/10 transition-colors"
                      >
                        + {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Instructions */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D8C7AD] font-semibold mb-2">
                    Dietary or Atelier Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific dietary preferences, delivery timings, or special requests..."
                    value={formData.customNote}
                    onChange={(e) => setFormData({ ...formData, customNote: e.target.value })}
                    className="w-full p-3 rounded-xl bg-[#12100E] border border-white/15 text-xs text-[#F7F1E7] placeholder:text-white/30 focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>

                {/* Live Hamper Summary Card */}
                <div className="p-4 rounded-2xl bg-[#12100E] border border-[#C9A45C]/40 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#C9A45C] font-semibold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Atelier Summary</span>
                    </span>
                    <span className="text-[10px] font-mono text-[#D8C7AD]/70">
                      {formData.occasion}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#D8C7AD] leading-relaxed">
                    <strong>Packaging:</strong> {formData.packagingStyle}<br />
                    <strong>Inclusions:</strong> {formData.treats.length} treats + {formData.keepsake}<br />
                    <strong>Card:</strong> {selectedCard.title} &bull; <strong>Area:</strong> {formData.deliveryLocation}
                  </p>
                </div>
              </motion.div>
            )}

          </div>

          {/* Footer Navigation */}
          <div className="p-5 sm:p-7 pt-4 bg-[#141210] border-t border-white/10 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="btn-outline-gold !py-2.5 !px-4 !text-[11px] flex items-center gap-1.5"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(step + 1)}
                className="btn-gold !py-2.5 !px-5 !text-[11px] flex items-center gap-2"
              >
                <span>Continue</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleComplete}
                className="btn-gold !py-3 !px-6 !text-xs flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Hamper Request on WhatsApp</span>
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
