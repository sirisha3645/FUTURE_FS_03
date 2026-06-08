import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Award, 
  Star, 
  Clock, 
  Heart, 
  Users, 
  Calendar, 
  ArrowRight, 
  Check, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Send, 
  CheckCircle,
  BookOpen,
  Shield,
  Percent,
  Compass
} from 'lucide-react';
import { submitContactMessage } from '../firebase/contact';

interface HomeViewProps {
  setCurrentPage: (page: string) => void;
}

// ----------------------------------------------------
// AESTHETIC SVG MOTIFS & DIVIDERS
// ----------------------------------------------------

const LotusIcon = ({ className = "h-6 w-6 text-rose-gold" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M50 15 C42 32, 42 68, 50 85 C58 68, 58 32, 50 15 Z" fill="currentColor" fillOpacity="0.08" />
    <path d="M50 40 C32 35, 15 45, 10 60 C22 62, 38 52, 50 40 Z" fill="currentColor" fillOpacity="0.06" />
    <path d="M50 40 C68 35, 85 45, 90 60 C78 62, 62 52, 50 40 Z" fill="currentColor" fillOpacity="0.06" />
    <path d="M50 52 C28 52, 8 65, 15 78 C28 78, 42 68, 50 52 Z" fill="currentColor" fillOpacity="0.04" />
    <path d="M50 52 C72 52, 92 65, 85 78 C72 78, 58 68, 50 52 Z" fill="currentColor" fillOpacity="0.04" />
    <path d="M30 78 C35 84, 65 84, 70 78" />
  </svg>
);

const FloralDivider = () => (
  <div className="flex items-center justify-center space-x-4 py-4" id="home-floral-divider">
    <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-rose-gold/30 to-rose-gold" />
    <LotusIcon className="h-8 w-8 text-rose-gold" />
    <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-rose-gold/30 to-rose-gold" />
  </div>
);

const OrnamentalCorner = () => (
  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-rose-gold/20 rounded-tl-lg pointer-events-none" />
);

const OrnamentalCornerRight = () => (
  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-rose-gold/20 rounded-tr-lg pointer-events-none" />
);

const OrnamentalCornerBottomLeft = () => (
  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-rose-gold/20 rounded-bl-lg pointer-events-none" />
);

const OrnamentalCornerBottomRight = () => (
  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-rose-gold/20 rounded-br-lg pointer-events-none" />
);

const TraditionalMandalaGrid = () => (
  <div className="absolute inset-0 z-0 opacity-5 pointer-events-none mix-blend-multiply" id="home-mandala-overlay">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="#B76E79" strokeWidth="0.5" fill="none" />
      <circle cx="50" cy="50" r="30" stroke="#B76E79" strokeWidth="0.3" fill="none" />
      <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" stroke="#B76E79" strokeWidth="0.2" />
      <polygon points="50,5 57,28 80,20 65,40 85,65 60,60 50,85 40,60 15,65 35,40 20,20 43,28" stroke="#B76E79" strokeWidth="0.3" fill="none" />
    </svg>
  </div>
);

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  
  // Interactive Transformation Slider State
  const [sliderVal, setSliderVal] = useState<number>(50);

  // Trust numbers configuration to avoid empty states
  const trustStats = [
    { label: 'Brides Styled', count: '1,200+', detail: 'Across South & North Indian cultures' },
    { label: 'Years Heritage', count: '10+ Years', detail: 'Elite boutique salon standards' },
    { label: 'Studio Rating', count: '4.9 ★★★★★', detail: 'Consistently perfect guest reviews' },
    { label: 'Master Artisans', count: '4 Experts', detail: 'Fully verified beauty academy credentials' }
  ];

  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ----------------------------------------------------
  // SECTION 3 — COHESIVE SERVICES DATA (Matching specific illustrations)
  // ----------------------------------------------------
  const premiumServices = [
    {
      id: 'bridal-makeup',
      title: 'Royal Shubh Vivah Bridal Makeup',
      img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=600',
      description: 'Our signature luxury treatment close-up look. Flawless high-definition Base designed to endure photography spotlights and intense warm wedding environments.',
      duration: '150 mins',
      price: '18,500'
    },
    {
      id: 'hair-styling',
      title: 'Couture Hair Styling & Jasmine Sculpting',
      img: 'https://images.unsplash.com/photo-1596178060810-729ab7912440?auto=format&fit=crop&q=80&w=600',
      description: 'Couture braids, traditional floral braids adorned with fresh jasmine wreaths, messy royal top buns, and elegant crown jewelry pinning.',
      duration: '60 mins',
      price: '3,500'
    },
    {
      id: 'facials',
      title: 'Vedic Saffron HydraGlow Dermal Facial',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600',
      description: 'Luxury cellular prep treatment and advanced dermaplaning mask. Uses rich saffron water, goat milk, and pure raw almonds to plump up deep tone.',
      duration: '75 mins',
      price: '4,500'
    },
    {
      id: 'mehendi-services',
      title: 'Traditional Intricate Bridal Mehendi',
      img: 'https://images.unsplash.com/photo-1612547087680-aa16032af419?auto=format&fit=crop&q=80&w=600',
      description: 'Detailed hand-drawn mandalas, custom jaali, peacock designs and traditional vows representations, crafted with 100% home-rolled mahogany organic henna.',
      duration: '240 mins',
      price: '8,000'
    },
    {
      id: 'nail-art',
      title: 'Imperial Nail Gel Art & Swarovski Crystals',
      img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=600',
      description: 'Luxury manicure extensions, hand-painted gold foils, and precise placement of high-shine crystals customized to coordinate with your lehenga.',
      duration: '90 mins',
      price: '2,500'
    }
  ];

  // ----------------------------------------------------
  // SECTION 4 — BRIDAL PACKAGES DATA (Renamed as requested)
  // ----------------------------------------------------
  const packagesList = [
    {
      name: 'Silver Bride',
      price: '15,000',
      subtitle: 'Classic Grace',
      summary: 'Timeless luxury essentials with full HD cosmetics and customized jasmine accessories styling.',
      features: [
        'Signature HD Bridal Makeup (sweatproof setup)',
        'Traditional braid or heavy ornate structural top bun',
        'Traditional fresh jasmine flower crown setting',
        'Saree draping & dupatta settings (single shift)',
        'Personal consultation beauty trial card at our studio'
      ]
    },
    {
      name: 'Golden Bride',
      price: '25,000',
      subtitle: 'The Photographic Masterpiece',
      summary: 'Advanced micro-priming and deluxe multi-layer floral draping made specifically for grand videography environments.',
      features: [
        'Advanced HD Makeup (MAC or high-end Estée Lauder formulas)',
        'Intricate braids with orchid jewelry or fresh Mogra cords',
        'Heavy saree draping or lehenga set double-pinning',
        'Saffron milk hydrating manicure & Rosewood foot pedicure',
        'Complimentary pre-wedding Glow Facial (3 days prior)',
        '15% discount for up to 3 bridesmaids or mothers'
      ]
    },
    {
      name: 'Royal Bride',
      price: '45,000',
      subtitle: 'High-Fashion Extravaganza',
      summary: 'Complete sweatproof Temptu airbrush finish, dual-event look alterations and deep cellular preparation.',
      features: [
        'Ultra-Flawless premium Temptu Airbrush base setup',
        'Double styling adjustments (ceremony transition to reception waves)',
        'Multi-dress wardrobe support with companion assistant',
        'Advanced HydraGlow customized skin face prep session',
        'Hard gel nail extensions with dynamic real gold foils',
        'Professional pre-wedding trail alignment with physical lighting'
      ]
    },
    {
      name: 'Maharani Experience',
      price: '75,000',
      subtitle: 'The Empress Luxury Suite',
      summary: 'Our crown jewel. A multi-day all-inclusive comprehensive wedding ritual including organic customized Mehendi and private salon suite access.',
      features: [
        'HD + Airbrush makeovers for major Shubh Vivah event + Reception',
        'Traditional detailed bridal Mehendi (full forearms & calves)',
        'Premium fresh Rose, Jasmine, and Lilac jewelry settings',
        'Saree wardrobe companion assisting with all ceremony attire shifts',
        '24K real gold leaf botanical skin facial & lifting treatment',
        'Deluxe keepsake touch-up kit containing premium customized lipstick',
        'Exclusive access to private VIP vanity dressing suite with custom high-end tea'
      ]
    }
  ];

  // ----------------------------------------------------
  // INTERACTIVE PACKAGE COMPARATIVE COMPARISON DATA
  // ----------------------------------------------------
  const comparisonFeatures = [
    { name: 'HD Makeup Base Formula', silver: 'Standard', golden: 'Refined MAC', royal: 'Temptu Airbrush', maharani: 'Airbrush + HD Luxury' },
    { name: 'Hairstyle Floral Settings', silver: 'Fresh Jasmine', golden: 'Mogra / Wreaths', royal: 'Custom Orchids', maharani: 'Unlimited Elite Florals' },
    { name: 'Saree / Wardrobe Shifts', silver: '1 Wardrobe', golden: '1 Wardrobe', royal: '2 Wardrobe changes', maharani: 'Unlimited changes + Assistant' },
    { name: 'Gel Nails / Design Extensions', silver: 'Classic Lacquer', golden: 'Gel Color', royal: 'Extensions + Foils', maharani: 'Extensions + Swarovskis' },
    { name: 'Dermal Facials Prep', silver: 'Add-on option', golden: '1x Glow Facial', royal: '1x HydraGlow Facial', maharani: '1x 24K Gold Cellular Lift' },
    { name: 'Private Room Booking', silver: 'Standard space', golden: 'Standard space', royal: 'Priority space', maharani: 'Exclusive Private Suite' }
  ];

  // ----------------------------------------------------
  // SECTION 6 — COHESIVE TEAM DATA (With credentials and backgrounds)
  // ----------------------------------------------------
  const expertsList = [
    {
      name: 'Saanvi Reddy',
      role: 'Founder & Principal Maestro',
      exp: '20+ Years Experience',
      certification: 'Certified by MAC Global & Christine Valmy London',
      specialty: 'Contemporary Royal HD Makeup & Couture Draping',
      photo: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Ananya Sen',
      role: 'Lead Airbrush Stylist',
      exp: '12 Years Experience',
      certification: 'Temptu New York Airbrush Certification',
      specialty: 'Weightless Temperature Airbrushing & Precision Lashes',
      photo: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Hair & Flora Artisan',
      exp: '8 Years Experience',
      certification: 'Schwarzkopf Professional Braiding Academy Diploma',
      specialty: 'Traditional South Indian Jada Braiding & Floral Settings',
      photo: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Dr. Rohit Rao',
      role: 'Dermal Preparation Lead',
      exp: '10 Years Experience',
      certification: 'Bachelor of Ayurvedic Skin Therapies & London Academy',
      specialty: 'Ayurvedic Preparation Masks & Sandalwood Skin Lifting',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
    }
  ];

  // ----------------------------------------------------
  // SECTION 7 — CLIENT TESTIMONIALS
  // ----------------------------------------------------
  const testimonials = [
    {
      name: 'Meenakshi & Vignesh',
      city: 'Hyderabad Bride',
      role: 'Golden Bride Package',
      photo: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400',
      story: 'Saanvi and her crew are magic! My saree did not shift a single millimeter during my 5-hour long Muhurtham ceremony, and the makeup felt as light as a feather. I received endless compliments about my Mogra braid.'
    },
    {
      name: 'Harshita & Karan',
      city: 'Delhi Destination Bride',
      role: 'Maharani Experience Suite',
      photo: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&q=80&w=400',
      story: 'I booked the Maharani Experience, and it was worth every single rupee. The organic Rajasthani henna paste gave a deeply rich, dark maroon stain that stayed glorious for three entire weeks. Highly elite care and very professional.'
    },
    {
      name: 'Dr. Divya Rao',
      city: 'Secunderabad Bride',
      role: 'Royal Bride Package',
      photo: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&q=80&w=400',
      story: 'Exceptional hygiene benchmarks. From the autoclaved cosmetic brushes to the warm almond-infused foot spa rituals, they made me feel like real royalty. I walked onto the wedding stage feeling serene and beautiful.'
    }
  ];

  // ----------------------------------------------------
  // SECTION 9 — INSTAGRAM SHOWCASE IMAGES (Mehendi, hair styling, jewelry, makeup closeups, salon interior)
  // ----------------------------------------------------
  const instagramFeed = [
    { id: 1, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=400', tag: '#SaanviBrides', type: 'Bridal Close-Up' },
    { id: 2, img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=400', tag: '#HeirloomKundan', type: 'Bridal Jewelry' },
    { id: 3, img: 'https://images.unsplash.com/photo-1612547087680-aa16032af419?auto=format&fit=crop&q=80&w=400', tag: '#SymmetricalHenna', type: 'Bridal Mehendi' },
    { id: 4, img: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80&w=400', tag: '#JasmineJada', type: 'Jasmine Styling' },
    { id: 5, img: 'https://images.unsplash.com/photo-1600948836101-f9ffdb5965e5?auto=format&fit=crop&q=80&w=400', tag: '#MarbleSalon', type: 'Luxury Lounge' },
    { id: 6, img: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?auto=format&fit=crop&q=80&w=400', tag: '#SilkPleating', type: 'Saree Draping' }
  ];

  // ----------------------------------------------------
  // CONTACT FORM & FIREBASE HANDLERS
  // ----------------------------------------------------
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setFormError('Please provide your name and phone number so we may contact you.');
      return;
    }

    setFormLoading(true);
    setFormError(null);
    try {
      await submitContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        createdAt: new Date().toISOString()
      });
      setFormSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err: any) {
      setFormError(err.message || 'Connecting to database failed. Please attempt again.');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="space-y-24 pb-20 animate-fade-in bg-warm-ivory text-charcoal">
      
      {/* ==================================================== */}
      {/* SECTION 1 — HERO SECTION (Centred, floral, Indian motifs, ivory/pastel pink) */}
      {/* ==================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-16 px-4">
        
        {/* Full-screen luxury bridal background photograph */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&q=80&w=1600" 
            alt="Royal Pastels Indian Bride Lehenga close-up" 
            className="h-full w-full object-cover object-center translate-y-[-4%]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Soft elegant ivory overlay for perfect visual contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-warm-ivory/95 z-[1]" />

        {/* Subtle Indian motif design background */}
        <TraditionalMandalaGrid />

        {/* Ambient floral corner borders */}
        <div className="absolute top-[15%] left-[5%] h-72 w-72 rounded-full bg-baby-pink/30 blur-3xl pointer-events-none z-[1]" />
        <div className="absolute bottom-[15%] right-[5%] h-80 w-80 rounded-full bg-blush-pink/35 blur-3xl pointer-events-none z-[1]" />

        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-8 px-4">
          
          <div className="inline-flex items-center space-x-2 rounded-full bg-white/90 border border-rose-gold/25 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#B76E79] shadow-sm">
            <Sparkles className="h-4 w-4 text-soft-gold" />
            <span>The Crest of Royal Indian Bridal Heritage</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-charcoal leading-tight max-w-4xl mx-auto">
            Where Royal Heritage <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#B76E79] via-[#C08A8F] to-[#D4AF37]">
              Meets Bridal Perfection
            </span>
          </h1>

          <p className="font-sans text-xs sm:text-sm text-soft-grey tracking-wide leading-relaxed max-w-2xl mx-auto">
            Signature HD & Airbrush cosmetics engineered to remain absolutely sweatproof, glowing, and majestic under cameras. Hand-crafted with pure Kashmiri saffron and fresh jasmine.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 max-w-md mx-auto">
            <button
              onClick={() => handleNav('booking')}
              className="w-full sm:w-auto font-sans flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-baby-pink to-blush-pink text-[11px] font-bold uppercase tracking-widest text-[#B76E79] border border-rose-gold/20 px-8 py-4 shadow-soft hover:shadow-md hover:scale-[1.02] transform transition-all cursor-pointer"
              id="hero-book-now"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={() => handleNav('services')}
              className="w-full sm:w-auto font-sans flex items-center justify-center space-x-2 rounded-full bg-white border border-rose-gold text-[11px] font-bold uppercase tracking-widest text-rose-gold px-8 py-4 hover:bg-baby-pink/30 hover:scale-[1.02] transform transition-all cursor-pointer"
              id="hero-view-services"
            >
              <span>Explore Services</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </section>

      {/* ==================================================== */}
      {/* SECTION 2 — TRUST BUILDING / STATS SECTION (Salon Interior, Saffron moments) */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-white rounded-3xl border border-blush-pink/60 p-8 sm:p-14 relative overflow-hidden shadow-soft">
          
          <OrnamentalCorner />
          <OrnamentalCornerRight />
          <OrnamentalCornerBottomLeft />
          <OrnamentalCornerBottomRight />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            
            {/* Left Column: Handcrafted details */}
            <div className="lg:col-span-6 space-y-6 text-left relative z-10">
              <span className="text-[10px] font-bold tracking-[0.25em] text-rose-gold uppercase font-sans block">
                Taj Hotel Level Luxury
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal">
                A Living Sanctuary of <span className="font-semibold text-rose-gold">Regal Indian Care</span>
              </h2>
              
              <div className="h-[2px] w-14 bg-gradient-to-r from-rose-gold to-soft-gold" />

              <p className="text-soft-grey text-xs sm:text-sm leading-relaxed font-sans">
                Welcome to Saanvi Luxury Studio, where ancient skin therapies and grand regional heritage converge. We curate highly bespoke, therapeutic-grade bridal preparations. Every face mask is hand-blended with house-pressed Kashmiri saffron fibers, Kannada wild rose hydrosols, and organic organic sandalwood oils.
              </p>

              <p className="text-soft-grey text-xs sm:text-sm leading-relaxed font-sans">
                Our Jubilee Hills studio provides Hyderabad’s ultimate benchmark for flawless, non-oxidizing Airbrush cosmetics, pristine saree hand-pleating, and ornate fresh jasmine braids designed to stay perfect throughout your celebrations.
              </p>

              {/* Trust Indicators Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-blush-pink/50">
                {trustStats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xl font-bold font-serif text-charcoal">{stat.count}</div>
                    <div className="text-[10px] font-bold text-rose-gold uppercase tracking-wider">{stat.label}</div>
                    <div className="text-[10px] text-soft-grey">{stat.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Luxury Collages of interior, preparation and ornaments */}
            <div className="lg:col-span-6 relative z-10 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden border border-blush-pink shadow-soft aspect-[3/4]">
                  <img 
                    src="https://images.unsplash.com/photo-1600948836101-f9ffdb5965e5?auto=format&fit=crop&q=80&w=500" 
                    alt="Luxury Ivory Salon Interior dressing suite" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-blush-pink shadow-soft aspect-square bg-warm-ivory flex flex-col justify-center p-4 text-center">
                  <Award className="h-8 w-8 text-rose-gold mx-auto mb-2" />
                  <span className="text-[11px] font-bold text-charcoal uppercase tracking-wider block">Mac Certified Artists</span>
                  <span className="text-[10px] text-soft-grey mt-1">Dermatologically compliant sterile cosmetic procedures</span>
                </div>
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden border border-blush-pink shadow-soft aspect-square bg-warm-ivory flex flex-col justify-center p-4 text-center">
                  <Shield className="h-8 w-8 text-rose-gold mx-auto mb-2" />
                  <span className="text-[11px] font-bold text-charcoal uppercase tracking-wider block">100% Sweatproof Base</span>
                  <span className="text-[10px] text-soft-grey mt-1">Proven to survive 18 hours of studio heat</span>
                </div>
                <div className="rounded-2xl overflow-hidden border border-blush-pink shadow-soft aspect-[3/4]">
                  <img 
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500" 
                    alt="Bride Preparation Sessions" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 3 — SERVICES SECTION (Visual matching list) */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-rose-gold block">Elegant Shringar Menu</span>
          <h2 className="font-serif text-4xl font-light text-charcoal">
            Premium <span className="font-semibold text-rose-gold">Bridal Services</span>
          </h2>
          <div className="h-[2px] w-14 bg-gradient-to-r from-rose-gold to-soft-gold mx-auto" />
          <p className="text-xs text-soft-grey leading-relaxed">
            Every facial, draping layout, and cosmetic touch is delivered with medical sanitation levels. Realize your custom bridal vision.
          </p>
        </div>

        {/* Cohesive Handpicked Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {premiumServices.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-white rounded-3xl border border-blush-pink overflow-hidden shadow-soft flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transform transition-all duration-300"
              id={`premium-service-${service.id}`}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-warm-ivory">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/95 rounded-full px-3 py-1 border border-blush-pink text-[9px] font-bold text-rose-gold uppercase tracking-widest leading-none shadow-xs">
                  ₹{service.price} onwards
                </div>
                <div className="absolute top-4 right-4 bg-charcoal/80 rounded-full px-3 py-1 text-[9px] font-bold text-white uppercase tracking-widest leading-none">
                  {service.duration}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-rose-gold transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-soft-grey leading-relaxed font-sans">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blush-pink/30 flex items-center justify-between">
                  <span className="text-[10px] text-soft-grey font-mono uppercase tracking-wide">Premium Grade Care</span>
                  <button
                    onClick={() => {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="rounded-full bg-baby-pink/30 hover:bg-baby-pink text-rose-gold border border-rose-gold/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all"
                  >
                    Select service
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Saffron and Sandalwood Premium Card Option to round out grid */}
          <div className="group bg-gradient-to-tr from-white to-baby-pink/20 rounded-3xl border-2 border-dashed border-rose-gold/30 p-8 flex flex-col justify-between text-center relative overflow-hidden h-full">
            <TraditionalMandalaGrid />
            <div className="space-y-4 relative z-10 my-auto">
              <LotusIcon className="h-10 w-10 text-rose-gold mx-auto" />
              <h3 className="font-serif text-xl font-bold text-charcoal">Design Your Custom Shringar Suite</h3>
              <p className="text-xs text-soft-grey leading-relaxed">
                Need a tailored combination of Mehendi, fresh Mogra braiding, collagen lifts, and airbrush cosmetics for your entire bride squad?
              </p>
              <button
                onClick={() => handleNav('calculator')}
                className="inline-flex items-center space-x-1.5 text-xs text-rose-gold font-bold uppercase tracking-widest hover:underline"
              >
                <span>Try Custom Estimator</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* ==================================================== */}
      {/* SECTION 4 — BRIDAL PACKAGES (Silver, Golden, Royal, Maharani) */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-rose-gold block">The Bridal Collections</span>
          <h2 className="font-serif text-4xl font-light text-charcoal">
            The Bridal <span className="font-semibold text-rose-gold">Packages Suite</span>
          </h2>
          <div className="h-[2px] w-14 bg-gradient-to-r from-rose-gold to-soft-gold mx-auto" />
          <p className="text-xs text-soft-grey leading-relaxed">
            Beautiful wedding invitation styled cards prepared with gold boundaries and rich Indian traditional settings.
          </p>
        </div>

        {/* Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {packagesList.map((pkg, idx) => (
            <div 
              key={idx}
              className={`relative bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between shadow-soft hover:shadow-md hover:-translate-y-1 ${
                pkg.name === 'Royal Bride' || pkg.name === 'Maharani Experience'
                  ? 'border-rose-gold/60 ring-1 ring-rose-gold/20' 
                  : 'border-blush-pink'
              }`}
              id={`package-invitation-${idx}`}
            >
              <OrnamentalCorner />
              <OrnamentalCornerRight />
              <OrnamentalCornerBottomLeft />
              <OrnamentalCornerBottomRight />

              {/* Decorative dashed inner boundary */}
              <div className="absolute inset-2 border border-dashed border-blush-pink pointer-events-none rounded-2xl" />

              <div className="space-y-6 relative z-10 pt-4 px-2">
                
                <div className="text-center space-y-1.5">
                  <span className="font-sans text-[9px] font-bold text-rose-gold uppercase tracking-[0.25em] block">{pkg.subtitle}</span>
                  <h3 className="font-serif text-xl font-bold text-charcoal tracking-wide">{pkg.name}</h3>
                  <div className="h-[1px] w-10 bg-rose-gold/30 mx-auto my-2" />
                  <p className="text-[10.5px] text-soft-grey leading-relaxed italic">{pkg.summary}</p>
                </div>

                <div className="text-center py-4 border-y border-blush-pink/40">
                  <span className="text-[9px] text-[#B76E79] block uppercase tracking-widest font-mono">Investment</span>
                  <span className="font-serif text-3xl font-light text-rose-gold">₹{pkg.price}</span>
                  <span className="text-[9px] text-soft-grey block mt-1 font-sans">Complimentary Trials Included</span>
                </div>

                <ul className="space-y-3 pt-2">
                  {pkg.features.slice(0, 5).map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-[11px] text-soft-grey leading-tight font-sans">
                      <Check className="h-3.5 w-3.5 text-rose-gold shrink-0 mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 5 && (
                    <li className="text-[10px] text-rose-gold/80 italic pl-5">
                      + {pkg.features.length - 5} More Premium Treatments included
                    </li>
                  )}
                </ul>

              </div>

              <div className="relative z-10 pt-6 px-2 text-center pb-2">
                <button
                  onClick={() => handleNav('booking')}
                  className={`w-full font-sans justify-center rounded-full text-xs font-bold uppercase tracking-wider py-3.5 border transition-all cursor-pointer ${
                    pkg.name === 'Maharani Experience' || pkg.name === 'Royal Bride'
                      ? 'bg-gradient-to-r from-baby-pink to-blush-pink text-rose-gold border-rose-gold/25 shadow-soft hover:scale-[1.01]'
                      : 'bg-warm-ivory text-rose-gold border-blush-pink hover:bg-baby-pink/30'
                  }`}
                >
                  Reserve Suite
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Visual Package Comparison Table */}
        <div className="bg-white border border-blush-pink rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-soft overflow-hidden">
          <div className="flex items-center justify-center space-x-2.5 mb-6 text-center">
            <LotusIcon className="h-6 w-6 text-rose-gold" />
            <h3 className="font-serif text-xl font-bold text-charcoal">Visual Suite Comparison Matrix</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs min-w-[600px]">
              <thead>
                <tr className="border-b border-blush-pink/60 text-rose-gold font-bold text-[9.5px] uppercase tracking-wider">
                  <th className="py-3">Included Benefits</th>
                  <th className="py-3">Silver Bride</th>
                  <th className="py-3">Golden Bride</th>
                  <th className="py-3">Royal Bride</th>
                  <th className="py-3 text-[#B76E79]">Maharani Experience</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blush-pink/30 text-soft-grey">
                {comparisonFeatures.map((feat, idx) => (
                  <tr key={idx} className="hover:bg-warm-ivory/50 transition-colors">
                    <td className="py-3.5 font-bold text-charcoal">{feat.name}</td>
                    <td className="py-3.5">{feat.silver}</td>
                    <td className="py-3.5">{feat.golden}</td>
                    <td className="py-3.5 font-medium text-rose-gold">{feat.royal}</td>
                    <td className="py-3.5 font-bold text-rose-gold bg-baby-pink/10">{feat.maharani}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </section>

      {/* ==================================================== */}
      {/* SECTION 5 — TRANSFORMATIONS (Custom Interactive Slider) */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 bg-white border border-blush-pink p-8 sm:p-14 rounded-3xl shadow-soft">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-10">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-rose-gold block">Before & After Radiance</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-charcoal">
            The Interactive <span className="font-semibold text-rose-gold">Shringar Slider</span>
          </h2>
          <p className="text-xs sm:text-sm text-soft-grey leading-relaxed">
            Drag the slider or click on the image below to view the incredible transformation from our hydrating skin-prep base to a luminous royal Indian bridal face.
          </p>
        </div>

        {/* Custom interactive comparison component */}
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-soft border border-blush-pink select-none">
          
          {/* Before Face (Base prep canvas) */}
          <img 
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1000" 
            alt="Before - Skin Preparation" 
            className="absolute inset-0 w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 z-20 bg-charcoal/70 text-white text-[9px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-xs">
            Dermal Prep Base (Before)
          </div>

          {/* After Face (Clipped Overlay with slide coordinate) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden border-r-2 border-white/95"
            style={{ width: `${sliderVal}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?auto=format&fit=crop&q=80&w=1000" 
              alt="After - Royal Bridal Makeup" 
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: '100%', height: '100%', maxWidth: 'none' }}
              referrerPolicy="no-referrer"
            />
            {/* After Tag on the right top */}
            {sliderVal > 15 && (
              <div className="absolute top-4 right-4 z-20 bg-rose-gold text-white text-[9px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                Royal Shubh Vivah Glam (After)
              </div>
            )}
          </div>

          {/* Interactive Drag input Range overlay */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderVal} 
            onChange={(e) => setSliderVal(Number(e.target.value))}
            className="absolute inset-0 opacity-0 w-full h-full cursor-ew-resize z-30 font-sans"
            aria-label="Drag to compare before and after makeup look"
          />

          {/* Sliding central white handlebar line */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 pointer-events-none bg-white"
            style={{ left: `${sliderVal}%` }}
          >
            {/* Central Round handle icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border-2 border-rose-gold shadow flex items-center justify-center text-rose-gold text-sm font-bold shadow-md">
              &harr;
            </div>
          </div>

        </div>

        <div className="pt-4 flex items-center justify-between text-xs text-soft-grey font-mono uppercase tracking-wide">
          <span>&larr; Slide Left for Base Prep</span>
          <span>Slide Right for Bridal Glam &rarr;</span>
        </div>

      </section>

      {/* ==================================================== */}
      {/* SECTION 6 — MASTER TEAM (Cohesive portraits with qualifications) */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-rose-gold block font-sans">The Royal Guild</span>
          <h2 className="font-serif text-4xl font-light text-charcoal">
            Meet the <span className="font-semibold text-rose-gold">Master Artisans</span>
          </h2>
          <div className="h-[2px] w-14 bg-gradient-to-r from-[#B76E79] to-[#D4AF37] mx-auto" />
          <p className="text-xs text-soft-grey leading-relaxed">
            Every artist is legally verified and carries credentials from world-renowned beauty schools and academies.
          </p>
        </div>

        {/* Experts List Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertsList.map((expert, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-blush-pink p-6 shadow-soft group text-center flex flex-col justify-between items-center h-full hover:shadow-md transition-shadow"
              id={`expert-guild-card-${idx}`}
            >
              <div className="space-y-4 flex flex-col items-center">
                {/* Full Circle High Quality Avatar headshot */}
                <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-blush-pink bg-warm-ivory shadow-inner">
                  <img 
                    src={expert.photo} 
                    alt={expert.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1.5 font-sans">
                  <h3 className="font-serif text-lg font-bold text-charcoal">{expert.name}</h3>
                  <div className="text-xs font-bold text-rose-gold uppercase tracking-wide">{expert.role}</div>
                  <div className="text-[10px] font-semibold text-soft-grey bg-baby-pink/30 px-2.5 py-0.5 rounded-full inline-block">
                    {expert.exp}
                  </div>
                  <p className="text-[10.5px] font-medium text-rose-gold/80 italic pt-1 line-clamp-1 block">
                    "{expert.certification}"
                  </p>
                </div>
              </div>

              <p className="text-[11px] text-soft-grey font-sans leading-relaxed italic border-t border-blush-pink/40 pt-4 mt-4 w-full">
                Spec: {expert.specialty}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ==================================================== */}
      {/* SECTION 7 — CLIENT TESTIMONIALS & TRUST BADGES */}
      {/* ==================================================== */}
      <section className="relative py-20 bg-baby-pink/15 border-y border-blush-pink/30">
        
        <TraditionalMandalaGrid />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-rose-gold block font-sans">Shubh Vivah Chronicles</span>
            <h2 className="font-serif text-4xl font-light text-charcoal">
              Love Letters from <span className="font-semibold text-rose-gold">Our Royal Brides</span>
            </h2>
            <p className="text-xs text-soft-grey leading-relaxed">
              Every photograph depicts real weddings aligned with the expert work of Saanvi Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-blush-pink shadow-soft space-y-6 flex flex-col justify-between hover:shadow-md transition-shadow"
                id={`bride-testimonial-${idx}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-soft-gold">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-soft-grey leading-relaxed italic">
                    "{test.story}"
                  </p>
                </div>

                <div className="flex items-center space-x-3.5 pt-4 border-t border-blush-pink/55">
                  <img 
                    src={test.photo} 
                    alt={test.name} 
                    className="h-12 w-12 rounded-full object-cover border border-rose-gold/20 shadow-xs shrink-0" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="font-sans text-left">
                    <h4 className="text-xs font-bold text-charcoal tracking-wide">{test.name}</h4>
                    <span className="text-[10px] text-rose-gold uppercase tracking-widest block font-bold mt-0.5">{test.city}</span>
                    <span className="text-[9.5px] text-soft-grey font-semibold block">{test.role}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Core Trust Badges Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-blush-pink/40 max-w-4xl mx-auto text-center font-sans">
            <div className="space-y-1.5 p-4 bg-white/80 rounded-2xl border border-blush-pink/40">
              <Star className="h-5.5 w-5.5 text-soft-gold mx-auto fill-current" />
              <div className="text-xs font-bold text-charcoal">4.9 Star Google Rating</div>
              <p className="text-[10px] text-soft-grey">Voted most trusted bridal styling salon</p>
            </div>
            <div className="space-y-1.5 p-4 bg-white/80 rounded-2xl border border-blush-pink/40">
              <Award className="h-5.5 w-5.5 text-rose-gold mx-auto" />
              <div className="text-xs font-bold text-charcoal">Taj Hotel Standard Luxury</div>
              <p className="text-[10px] text-soft-grey">Premium ingredients & sanitized tools</p>
            </div>
            <div className="space-y-1.5 p-4 bg-white/80 rounded-2xl border border-blush-pink/40">
              <Shield className="h-5.5 w-5.5 text-rose-gold mx-auto animate-pulse" />
              <div className="text-xs font-bold text-charcoal">Sweatproof HD Base</div>
              <p className="text-[10px] text-soft-grey">Formulated for intense spotlights</p>
            </div>
            <div className="space-y-1.5 p-4 bg-white/80 rounded-2xl border border-blush-pink/40">
              <CheckCircle className="h-5.5 w-5.5 text-emerald-600 mx-auto" />
              <div className="text-xs font-bold text-charcoal">Medical Grade Sanitation</div>
              <p className="text-[10px] text-soft-grey">Autoclaved brushes in separate pouches</p>
            </div>
          </div>

        </div>
      </section>

      {/* ==================================================== */}
      {/* SECTION 8 — BEAUTY TIPS */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-16 font-sans">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-rose-gold block font-sans">Vedic Shringar Guides</span>
          <h2 className="font-serif text-4xl font-light text-charcoal">
            Traditional <span className="font-semibold text-rose-gold">Beauty Rituals</span>
          </h2>
          <div className="h-[2px] w-14 bg-gradient-to-r from-rose-gold to-soft-gold mx-auto" />
          <p className="text-xs text-soft-grey leading-relaxed">
            Beautiful home skincare and haircare rituals written directly by Saanvi Reddy and our master specialists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Pure Saffron Dermal Prep',
              category: 'Natural Skincare',
              summary: 'Soak three precious fibers of organic Kashmiri Saffron in warm raw goat/almond milk overnight. Gently massage into cheeks twice weekly to double skin radiance.',
              img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500'
            },
            {
              title: 'Karnataka Rose & Sandalwood Cleanser',
              category: 'Bridal Treatment',
              summary: 'Mix red rose petal powder with cold-pressed sandalwood pulp and fresh rainwater. Use as an active mask to soothe skin lipids and purge dirt.',
              img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=500'
            },
            {
              title: 'Botanical Coconut Scalp Massage',
              category: 'Haircare Routine',
              summary: 'Mix virgin biological coconut oil with rosemary drops. Thoroughly massage in circular steps to boost hair thickness and seal structural hair cuticles.',
              img: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=500'
            }
          ].map((tip, idx) => (
            <div 
              key={idx}
              onClick={() => handleNav('blog')}
              className="bg-white rounded-3xl border border-blush-pink overflow-hidden shadow-soft hover:-translate-y-1 transform transition-all duration-300 cursor-pointer flex flex-col justify-between"
              id={`beauty-tip-grid-${idx}`}
            >
              <div className="relative aspect-[16/10] bg-warm-ivory">
                <img src={tip.img} alt={tip.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/95 rounded-full px-3 py-1 border border-blush-pink text-[9px] font-bold text-rose-gold uppercase tracking-wider">
                  {tip.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="font-serif text-lg font-bold text-charcoal hover:text-rose-gold transition-colors">{tip.title}</h3>
                <p className="text-xs text-soft-grey leading-relaxed">{tip.summary}</p>
                
                <div className="pt-2 border-t border-blush-pink/40 flex justify-between items-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-rose-gold">Read full article</span>
                  <BookOpen className="h-4 w-4 text-rose-gold" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ==================================================== */}
      {/* SECTION 9 — INSTAGRAM FEED SHOWCASE (Bridal visual grid only) */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-rose-gold block">Follow Our Aesthetic</span>
          <h2 className="font-serif text-3xl font-light text-charcoal">
            Follow Our Grid <span className="font-semibold text-rose-gold">@SaanviLounge</span>
          </h2>
          <p className="text-xs text-soft-grey font-sans">
            View real-time bridal transformations, intricate hairstyles, cosmetics closeups, and client moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {instagramFeed.map((post) => (
            <a 
              href="https://instagram.com" 
              key={post.id}
              target="_blank" 
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-warm-ivory border border-blush-pink block"
              id={`insta-item-grid-${post.id}`}
            >
              <img 
                src={post.img} 
                alt={post.tag} 
                loading="lazy" 
                className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center space-y-1">
                <Instagram className="h-6 w-6 text-[#B76E79]" />
                <span className="text-[10px] font-bold text-rose-gold uppercase tracking-wider">{post.tag}</span>
                <span className="text-[9.5px] text-soft-grey font-medium tracking-wide">
                  {post.type}
                </span>
              </div>
            </a>
          ))}
        </div>

      </section>

      {/* ==================================================== */}
      {/* SECTION 10 — CONTACT & booking PANEL (Visual Map and Symmetrical form) */}
      {/* ==================================================== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-blush-pink overflow-hidden shadow-soft">
          
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Contact details list & Map - Left span 5 */}
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-8 bg-baby-pink/15 relative overflow-hidden flex flex-col justify-between">
              <TraditionalMandalaGrid />
              
              <div className="space-y-6 relative z-10 font-sans">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B76E79]">Operational coordinates</span>
                  <h3 className="font-serif text-3xl font-light text-charcoal">We’d love to <span className="font-bold text-rose-gold">host you</span></h3>
                  <p className="text-xs text-soft-grey leading-relaxed">
                    Have a custom query regarding your upcoming Shubh Vivah event, wardrobe shifts, or booking deposits? Engage our VIP front desk team.
                  </p>
                </div>

                <div className="space-y-4 pt-1">
                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-charcoal">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-blush-pink shadow-xs">
                      <MapPin className="h-4 w-4 text-[#B76E79]" />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal uppercase tracking-wider text-[11px]">Bridal Head Office</p>
                      <p className="text-xs text-soft-grey mt-0.5">Plot No. 82, Film Nagar, Jubilee Hills Road, Hyderabad, Telangana 500096</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-xs sm:text-sm text-charcoal">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white border border-blush-pink shadow-xs">
                      <Phone className="h-4 w-4 text-[#B76E79]" />
                    </div>
                    <div>
                      <p className="font-bold text-charcoal uppercase tracking-wider text-[11px]">Wedding Support & Front Desk</p>
                      <p className="text-xs text-soft-grey mt-0.5">+91 40 555-SAANVI (722684)</p>
                      <p className="text-[10.5px] text-rose-gold font-semibold">+91 98855 01034 (Text Support Line)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map card with professional map placeholder coordinate */}
              <div className="border border-blush-pink rounded-2xl overflow-hidden aspect-video relative z-10 shadow-xs bg-white flex flex-col justify-between mt-4">
                <div className="absolute inset-0 bg-[#E8ECEF] opacity-75 flex flex-col justify-between p-3 pointer-events-none">
                  <div className="w-full h-full relative" style={{ backgroundImage: 'radial-gradient(#C6CBD1 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
                    <div className="absolute top-[35%] left-0 w-full h-7 bg-white border-y border-[#BAC0C7] transform rotate-[8deg]" />
                    <div className="absolute left-[45%] top-0 w-7 h-full bg-white border-x border-[#BAC0C7] transform rotate-[-15deg]" />
                    <div className="absolute top-[42%] left-[28%] w-14 h-14 rounded-full border-2 border-[#819C3F] bg-[#DAE5A7] flex items-center justify-center text-[7.5px] font-bold text-[#556923] text-center uppercase tracking-wider">Jubilee Arc</div>
                    <div className="absolute top-[38%] left-[50%] animate-bounce flex flex-col items-center">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#B76E79] to-rose-gold shadow-md text-white">
                        <Sparkles className="h-3.5 w-3.5 text-soft-gold" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative p-2.5 bg-white/95 border-b border-blush-pink/40 flex items-center justify-between text-[10px]">
                  <span className="font-bold text-charcoal">Jubilee Hills Salon, Hyderabad</span>
                  <span className="text-[9px] font-mono text-rose-gold">Live GPS Location</span>
                </div>

                <div className="relative p-2 bg-white/95 text-right">
                  <a 
                    href="https://maps.google.com/?q=Film+Nagar+Jubilee+Hills+Hyderabad" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-[9.5px] font-bold text-[#B76E79] uppercase tracking-wider inline-flex items-center space-x-1 hover:underline"
                  >
                    <span>Inspect coordinates</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Live Interactive Contact form beside a beautiful salon interior display - Right span 7 */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
              
              <div className="space-y-2 font-sans text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-gold">Send Luxury Inquiry</span>
                <h3 className="font-serif text-2xl font-light text-charcoal">Connect with Our <span className="font-bold text-rose-gold">Concierge Desk</span></h3>
                <p className="text-xs text-soft-grey">Transmit specifics regarding your ceremony dates safely into our leads system.</p>
              </div>

              {formSuccess ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-300 p-6 space-y-4 text-center font-sans">
                  <CheckCircle className="h-10 w-10 text-emerald-700 mx-auto" />
                  <h4 className="font-bold text-emerald-800 text-sm">Inquiry Transmitted Successfully</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed max-w-sm mx-auto">
                    A physical representative on our Hyderabad VIP front desk team has cataloged your details. We will touch base within 2 business hours via WhatsApp/Phone call.
                  </p>
                  <button 
                    onClick={() => setFormSuccess(false)}
                    className="text-xs font-bold text-emerald-800 hover:underline uppercase tracking-widest block mx-auto pt-2"
                  >
                    Submit another message
                  </button>
                </div>
              ) : (
                <form onSubmit={submitInquiry} className="space-y-4 font-sans text-xs">
                  
                  {formError && (
                    <div className="p-3 bg-rose-50 border border-rose-300 text-rose-800 rounded-lg text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="font-bold text-charcoal uppercase tracking-wider block">Full Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        placeholder="e.g. Aishwarya Sen" 
                        className="w-full bg-warm-ivory border border-blush-pink focus:border-[#B76E79] rounded-xl px-4 py-3 placeholder-soft-grey text-charcoal text-xs focus:outline-none transition-colors"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="font-bold text-charcoal uppercase tracking-wider block">Mobile Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="e.g. +91 98480 22338" 
                        className="w-full bg-warm-ivory border border-[#FADADD] focus:border-[#B76E79] rounded-xl px-4 py-3 placeholder-soft-grey text-charcoal text-xs focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-bold text-charcoal uppercase tracking-wider block">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="e.g. guest@royal.in" 
                      className="w-full bg-warm-ivory border border-blush-pink focus:border-[#B76E79] rounded-xl px-4 py-3 placeholder-soft-grey text-charcoal text-xs focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="font-bold text-charcoal uppercase tracking-wider block">Custom Event specifics & requirements</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={3} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Sangeet on Nov 12, Wedding Muhurtham on Nov 14. Requesting Saffron HydraGlow preps and heavy saree draping..." 
                      className="w-full bg-warm-ivory border border-blush-pink focus:border-[#B76E79] rounded-xl px-4 py-3 placeholder-soft-grey text-charcoal text-xs focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={formLoading}
                      className="w-full font-sans flex items-center justify-center space-x-2 rounded-full bg-gradient-to-r from-baby-pink to-blush-pink py-4 text-xs font-bold uppercase tracking-widest text-rose-gold border border-rose-gold/25 shadow-soft hover:shadow-md hover:scale-[1.01] transition-all cursor-pointer"
                    >
                      {formLoading ? (
                        <span>Transmitting lead...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Transmit Secure Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

              <div className="pt-4 border-t border-blush-pink/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[10px] text-soft-grey text-center sm:text-left leading-relaxed">
                  Call or WhatsApp our front-desk coordinators directly for immediate response.
                </span>
                
                <div className="flex space-x-2 shrink-0">
                  <a 
                    href="tel:+9140555722" 
                    className="rounded-full bg-white border border-rose-gold text-rose-gold font-bold text-[10px] uppercase tracking-wider px-4 py-3 flex items-center space-x-1.5 hover:bg-baby-pink/30 hover:scale-103 transition-all"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    <span>Call Concierge</span>
                  </a>

                  <a 
                    href="https://wa.me/919885501034?text=Hello%20Saanvi%20Lounge%2C%20I%20am%20interested%20in%20reserving%20a%20bridal%20consultation" 
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[10px] uppercase tracking-wider px-5 py-3.5 flex items-center space-x-1.5 transition-all hover:scale-103 shadow-xs cursor-pointer"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-white" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
