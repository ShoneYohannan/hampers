import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Sparkles, Send, CheckCircle2, ShieldCheck, Tag, Gift, Users } from 'lucide-react';
import { BUSINESS_INFO, CORPORATE_CAPABILITIES } from '../data/hampersData';

export default function CorporateSection({ onOpenEnquiry }) {
  const [volume, setVolume] = useState('25-50 Units');
  const [occasion, setOccasion] = useState('Tech Summit & Conference Delegates');
  const [budgetTier, setBudgetTier] = useState('Executive Tier');
  const [includeBranding, setIncludeBranding] = useState(true);
  const [companyName, setCompanyName] = useState('');

  const volumeOptions = [
    '10 - 25 Units',
    '25 - 50 Units',
    '50 - 100 Units',
    '100 - 250 Units',
    '250+ Grand Volume'
  ];

  const occasionOptions = [
    'Tech Summit & Conference Delegates',
    'Executive Client Appreciation',
    'Employee Onboarding / Festive (Onam & New Year)',
    'Inbound Tour & Luxury Hotel Welcome',
    'Destination Wedding Favors (Kochi Venues)'
  ];

  const handleCorporateSubmit = (e) => {
    e.preventDefault();
    const msg = `*Hampers Kochi - Corporate & Bulk Gifting Request*

*Company / Organization:* ${companyName || 'Not specified'}
*Estimated Volume:* ${volume}
*Occasion / Purpose:* ${occasion}
*Budget Tier:* ${budgetTier}
*Custom Branding Required:* ${includeBranding ? 'Yes (Logo ribbons / custom tags)' : 'No / Standard luxury atelier'}
*Delivery Area:* Kochi & Kerala

_Please share the corporate catalog and bulk proposal._`;

    const url = BUSINESS_INFO.getWhatsAppUrl(msg);
    window.open(url, '_blank');
  };

  return (
    <section id="corporate-atelier" className="py-24 lg:py-36 bg-[#13110F] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] rounded-full bg-[rgba(201,164,92,0.05)] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[rgba(74,24,36,0.08)] blur-[140px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(247,241,231,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(247,241,231,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c1916] border border-[#C9A45C]/30 text-[#C9A45C] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Corporate & Bulk Atelier</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-[#F7F1E7] tracking-tight mb-4">
            DISTINGUISHED CORPORATE <br />
            <span className="italic font-normal text-gold-gradient">
              & HOSPITALITY GIFTING.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#D8C7AD] font-light leading-relaxed">
            Elevate your brand presence across Kochi. From Kakkanad Infopark executive delegations to 5-star hotel guest welcomes and high-volume festive curations.
          </p>
        </div>

        {/* Corporate Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {CORPORATE_CAPABILITIES.stats.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#191715] border border-[rgba(201,164,92,0.2)] text-center shadow-lg"
            >
              <div className="font-serif text-2xl sm:text-3xl font-normal text-[#C9A45C] mb-1">
                {stat.number}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-[#D8C7AD]/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Two Columns: Capabilities on Left & Interactive Bulk Estimator on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Branding Capabilities (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#181614] border border-[rgba(201,164,92,0.22)] shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5 text-[#C9A45C]" />
                <h3 className="font-serif text-2xl font-light text-[#F7F1E7]">
                  Brand Customization Options
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                {CORPORATE_CAPABILITIES.services.map((srv, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#12100E] border border-white/5 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#DFBA73]">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A45C] shrink-0" />
                      <span>{srv.title}</span>
                    </div>
                    <p className="text-[11px] text-[#D8C7AD]/70 leading-relaxed font-light">
                      {srv.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Showcase Image Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 h-52 group">
                <img
                  src="/images/hampers/corporate-travel-hampers.png"
                  alt="Corporate Gifting Atelier"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A45C] font-mono">
                      Real Corporate Order
                    </span>
                    <p className="font-serif text-base text-[#F7F1E7]">
                      Ghumakkad Corporate & Tour Welcome Hamper
                    </p>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#111111]/80 text-[#C9A45C] border border-[#C9A45C]/30">
                    Midnight Polka Edition
                  </span>
                </div>
              </div>
            </div>

            {/* Seamless Delivery Assurance */}
            <div className="p-6 rounded-2xl bg-[#161412] border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#C9A45C]/10 border border-[#C9A45C]/30 flex items-center justify-center shrink-0 text-[#C9A45C]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-sm font-semibold text-[#F7F1E7]">
                  Punctual Venue & Hotel Coordination
                </h4>
                <p className="text-xs text-[#D8C7AD]/80 font-light mt-0.5 leading-relaxed">
                  We coordinate directly with banquet managers, conference hosts, and bus tour operators for on-time handover anywhere in Kochi.
                </p>
              </div>
            </div>

          </div>

          {/* Right: Interactive Corporate Bulk Inquiry Form (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-8 rounded-3xl bg-[#1A1815] border border-[#C9A45C]/40 shadow-[0_15px_50px_rgba(0,0,0,0.7)] text-left h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C9A45C]">
                      B2B Corporate Desk
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#F7F1E7] mt-0.5">
                      Request Bulk Proposal
                    </h3>
                  </div>
                  <Building2 className="w-6 h-6 text-[#C9A45C]" />
                </div>

                <form onSubmit={handleCorporateSubmit} className="space-y-4">
                  {/* Company Name */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D8C7AD] font-semibold mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Infopark Tech / Event Co."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#12100E] border border-white/15 text-xs text-[#F7F1E7] placeholder:text-white/30 focus:outline-none focus:border-[#C9A45C]"
                    />
                  </div>

                  {/* Volume Selection */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D8C7AD] font-semibold mb-1.5">
                      Estimated Volume
                    </label>
                    <select
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#12100E] border border-white/15 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C9A45C]"
                    >
                      {volumeOptions.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>

                  {/* Occasion / Purpose */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D8C7AD] font-semibold mb-1.5">
                      Event / Purpose
                    </label>
                    <select
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      className="w-full p-3 rounded-xl bg-[#12100E] border border-white/15 text-xs text-[#F7F1E7] focus:outline-none focus:border-[#C9A45C]"
                    >
                      {occasionOptions.map((occ) => (
                        <option key={occ} value={occ}>{occ}</option>
                      ))}
                    </select>
                  </div>

                  {/* Target Budget Tier */}
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#D8C7AD] font-semibold mb-1.5">
                      Target Budget Preference
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Signature Luxe', 'Executive Tier', 'Royal Bespoke'].map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          onClick={() => setBudgetTier(tier)}
                          className={`p-2 rounded-lg text-[10px] text-center border transition-all ${
                            budgetTier === tier
                              ? 'bg-[#C9A45C]/20 border-[#C9A45C] text-[#FFF0D4] font-medium'
                              : 'bg-white/5 border-white/10 text-[#D8C7AD] hover:border-white/20'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Custom Branding Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-center gap-2.5 cursor-pointer text-xs text-[#D8C7AD]">
                      <input
                        type="checkbox"
                        checked={includeBranding}
                        onChange={(e) => setIncludeBranding(e.target.checked)}
                        className="rounded accent-[#C9A45C] w-4 h-4 cursor-pointer"
                      />
                      <span>Include Custom Company Logo Ribbons / Tags</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="btn-gold w-full flex items-center justify-center gap-2 !py-3.5 !text-xs font-semibold"
                    >
                      <Send className="w-4 h-4 text-[#111111]" />
                      <span>Send Corporate Bulk Inquiry</span>
                    </button>
                    
                    <p className="text-[10px] text-center text-[#D8C7AD]/60 font-light mt-2.5">
                      Instant direct consultation with Hampers Kochi atelier concierge
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
