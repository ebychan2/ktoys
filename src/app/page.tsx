"use client";

import React, { useState } from 'react';

// Configure Edge runtime for Cloudflare
export const runtime = 'edge';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  rating: number;
  description: string;
  image: string;
  tag: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Eco Wooden Alphabet Blocks",
    category: "Wooden",
    price: "Bulk / Wholesale",
    rating: 4.9,
    description: "Classic alphabet and number building blocks carved from natural maple wood with child-safe organic paint.",
    image: "/products/product1.jpg",
    tag: "Educational"
  },
  {
    id: 2,
    name: "Toddler Balance Trike",
    category: "Active Play",
    price: "Bulk / Wholesale",
    rating: 4.8,
    description: "Ergonomic ride-on tricycle designed to develop balance, motor skills, and confidence in kids aged 1-3.",
    image: "/products/product2.jpg",
    tag: "Ride-on"
  },
  {
    id: 3,
    name: "Creative Magnetic Tile Set",
    category: "Educational",
    price: "Bulk / Wholesale",
    rating: 4.9,
    description: "72-piece geometric 3D magnetic building set to inspire architectural curiosity and STEM learning.",
    image: "/products/product3.jpg",
    tag: "STEM"
  },
  {
    id: 4,
    name: "Plush Forest Friends Set",
    category: "Plush",
    price: "Bulk / Wholesale",
    rating: 4.7,
    description: "Ultra-soft premium cotton plush toys featuring adorable woodland creatures: owl, fox, and deer.",
    image: "/products/product4.jpg",
    tag: "Comfort"
  },
  {
    id: 5,
    name: "Interactive Musical Keyboard",
    category: "Musical",
    price: "Bulk / Wholesale",
    rating: 4.8,
    description: "Mini digital keyboard with multi-instrument sounds, animal sound effects, and recording capabilities.",
    image: "/products/product5.jpg",
    tag: "Creative"
  },
  {
    id: 6,
    name: "Safari Adventure Play Mat",
    category: "Infant Care",
    price: "Bulk / Wholesale",
    rating: 4.9,
    description: "Thick, padded organic cotton play mat with interactive textures, mirrors, and hanging animal rattles.",
    image: "/products/product6.jpg",
    tag: "Sensory"
  },
  {
    id: 7,
    name: "Dino Explorer Board Game",
    category: "Educational",
    price: "Bulk / Wholesale",
    rating: 4.6,
    description: "Engaging pre-historic strategy board game designed to teach children history and cooperative teamwork.",
    image: "/products/product7.jpg",
    tag: "Family Game"
  },
  {
    id: 8,
    name: "Premium Wooden Dollhouse",
    category: "Wooden",
    price: "Bulk / Wholesale",
    rating: 5.0,
    description: "Three-story luxury wooden dollhouse with fully furnished rooms and open design for collaborative play.",
    image: "/products/product8.jpg",
    tag: "Imaginative"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [inquiryCart, setInquiryCart] = useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [message, setMessage] = useState('');
  const [volume, setVolume] = useState('Small-Scale Retailer');

  const categories = ["All", "Wooden", "Educational", "Active Play", "Plush", "Musical"];

  const filteredProducts = selectedCategory === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    if (!inquiryCart.some(item => item.id === product.id)) {
      setInquiryCart([...inquiryCart, product]);
    }
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setInquiryCart(inquiryCart.filter(item => item.id !== id));
  };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate Supabase submission
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryCart([]);
      setIsCartOpen(false);
      setName('');
      setEmail('');
      setBusinessName('');
      setMessage('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] text-stone-800 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-200/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-[800px] left-0 w-[400px] h-[400px] bg-rose-100/30 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 border-b border-stone-200/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="KTOYS Logo" 
              className="h-12 w-auto object-contain cursor-pointer hover:scale-102 transition-transform" 
              onError={(e) => {
                // Fallback text logo if png not loaded
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-stone-900 bg-gradient-to-r from-amber-600 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
                KTOYS
              </span>
              <span className="text-[9px] uppercase tracking-widest text-stone-400 font-bold -mt-1">
                Kumbukkal Trading
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-600">
            <a href="#hero" className="hover:text-stone-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-stone-900 transition-colors">About Us</a>
            <a href="#catalog" className="hover:text-stone-900 transition-colors">Catalog</a>
            <a href="#capabilities" className="hover:text-stone-900 transition-colors">Capabilities</a>
            <a href="#faq" className="hover:text-stone-900 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          </nav>

          {/* Inquiry Cart Icon Button */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              {inquiryCart.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-black rounded-full flex items-center justify-center animate-bounce">
                  {inquiryCart.length}
                </span>
              )}
            </button>
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-full transition-all duration-200 shadow-sm"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 border border-amber-500/20 mb-6 w-fit">
                🧸 Certified Toy Manufacturer & Trader
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-6 leading-[1.1]">
                Kumbukkal Trading <br />
                <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-indigo-600 bg-clip-text text-transparent">
                  & Manufacturing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed max-w-xl">
                Igniting children&apos;s curiosity and imagination with safe, premium, and beautifully designed toys. Leading B2B suppliers of educational, plush, and wooden toys globally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#catalog"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center"
                >
                  Explore Toy Catalog
                </a>
                <a 
                  href="#about"
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider text-stone-700 bg-white hover:bg-stone-50 border border-stone-200 rounded-full shadow-sm hover:shadow transition-all duration-300 text-center"
                >
                  Our Craftsmanship
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-3 gap-6 pt-12 border-t border-stone-200 mt-12 max-w-lg">
                <div>
                  <div className="text-3xl font-extrabold text-stone-900">100%</div>
                  <div className="text-xs text-stone-500 font-medium">Child-Safe Materials</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-stone-900">BIS</div>
                  <div className="text-xs text-stone-500 font-medium">Quality Certified</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-stone-900">50+</div>
                  <div className="text-xs text-stone-500 font-medium">Exclusive Designs</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Image Gallery */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto w-full max-w-[420px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group">
                <img 
                  src="/products/product8.jpg" 
                  alt="KTOYS Flagship Toy" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent flex flex-col justify-end p-8 text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-amber-300 mb-1">Featured Craft</span>
                  <h3 className="text-xl font-bold">Premium Wooden Dollhouse</h3>
                  <p className="text-xs text-stone-300 mt-1">Multi-story collaborative imaginative playground</p>
                </div>
              </div>
              
              {/* Floating decorative elements */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-stone-100 max-w-[200px] animate-bounce duration-[3000ms]">
                <div className="p-2 bg-rose-500/10 text-rose-500 rounded-lg">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-stone-950">Safe & Natural</div>
                  <div className="text-[10px] text-stone-500">Non-toxic finishes</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Us / Story Section */}
      <section id="about" className="py-20 bg-stone-100/50 border-y border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Image */}
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img src="/products/product1.jpg" alt="wooden block craft" className="w-full aspect-square object-cover rounded-2xl shadow-md border-2 border-white" />
                  <img src="/products/product3.jpg" alt="magnetic tile setup" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md border-2 border-white" />
                </div>
                <div className="space-y-4 pt-8">
                  <img src="/products/product2.jpg" alt="trike assembly" className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md border-2 border-white" />
                  <img src="/products/product4.jpg" alt="plush toys" className="w-full aspect-square object-cover rounded-2xl shadow-md border-2 border-white" />
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-950 mb-6">
                The Kumbukkal Standard of Excellence
              </h2>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Under the brand KTOYS, Kumbukkal Trading and Manufacturing represents a legacy of toy engineering and trading excellence. We curate, manufacture, and distribute beautiful, safe, and durable play items.
              </p>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Our facilities integrate state-of-the-art timber processing and plastic moulding with handcrafted detailing. Every KTOYS product is subjected to strict drop tests, load checks, and non-toxicity tests to ensure a safe learning space for children.
              </p>

              {/* Core Pillars */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">Strict Conformity</h4>
                    <p className="text-xs text-stone-500">Fully compliant with domestic BIS (Bureau of Indian Standards) and international EN71 toy safety certifications.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 text-sm">B2B Customization (OEM/ODM)</h4>
                    <p className="text-xs text-stone-500">Offering personalized brand prints, customized color boxes, and distinct toy configurations for bulk traders.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Catalog & Interactive Filter Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2">Our Products</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-950">
                Explore the KTOYS Catalog
              </h2>
              <p className="text-stone-500 text-sm mt-2 max-w-md">
                Browse our collection of handpicked wooden blocks, educational boards, and custom-manufactured play equipment.
              </p>
            </div>
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-stone-900 text-white border-stone-900 shadow-md"
                      : "bg-white text-stone-600 border-stone-200 hover:bg-stone-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-xl hover:border-stone-300/80 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-stone-50 border-b border-stone-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider bg-white/90 backdrop-blur-sm text-stone-800 rounded-full border border-stone-200/50 shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                    </div>
                    <span className="text-[11px] font-bold text-stone-500">({product.rating})</span>
                  </div>
                  <h3 className="font-extrabold text-stone-900 text-base mb-1.5 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed mb-4 flex-grow line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Footer & CTA */}
                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                    <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                      {product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="inline-flex items-center justify-center p-2 rounded-full bg-stone-900 text-white hover:bg-amber-600 transition-colors"
                      title="Add to Inquiry"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Manufacturing & Custom OEM Capabilities */}
      <section id="capabilities" className="py-20 bg-stone-900 text-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">OEM/ODM Capability</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Wholesale Manufacturing Excellence
            </h2>
            <p className="text-stone-400 text-sm">
              We design and produce custom formulations, wood carvings, and safety designs tailored to brand parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-stone-850 p-8 rounded-3xl border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">01</div>
                <h3 className="font-extrabold text-lg text-white mb-2">Wood Processing Unit</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Highly modern CNC wood cutters and shape sanding machinery utilizing certified kiln-dried rubberwood, beechwood, and pine.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-amber-400 mt-6 tracking-widest">Sustainably Sourced</span>
            </div>

            {/* Feature 2 */}
            <div className="bg-stone-850 p-8 rounded-3xl border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-rose-400/10 text-rose-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">02</div>
                <h3 className="font-extrabold text-lg text-white mb-2">Non-Toxic Painting Facility</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Advanced dust-free automated painting lines applying eco-friendly water-soluble varnishes and food-grade mineral dyes.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-rose-400 mt-6 tracking-widest">100% Saliva Safe</span>
            </div>

            {/* Feature 3 */}
            <div className="bg-stone-850 p-8 rounded-3xl border border-stone-800 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-indigo-400/10 text-indigo-400 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">03</div>
                <h3 className="font-extrabold text-lg text-white mb-2">Testing & QC Lab</h3>
                <p className="text-stone-400 text-xs leading-relaxed">
                  On-site test rigs confirming mechanical structural load ratings, sharp point and edge avoidance, and chemical screening.
                </p>
              </div>
              <span className="text-[10px] uppercase font-bold text-indigo-400 mt-6 tracking-widest">BIS Compliant</span>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">Common Questions</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <FAQItem 
              question="What is the Minimum Order Quantity (MOQ) for wholesale orders?" 
              answer="As a manufacturer and bulk trader, our standard MOQ is typically 50 units per design. However, for initial trial orders or wholesale partners, we can negotiate starter mix packages. Please submit an inquiry with your requirements."
            />
            <FAQItem 
              question="Are KTOYS products certified for domestic and international safety standards?" 
              answer="Yes, all KTOYS products are certified under BIS (Bureau of Indian Standards) IS 9873 guidelines. We also formulate our custom OEM designs to meet international safety criteria (EN71, ASTM F963)."
            />
            <FAQItem 
              question="Do you provide customization (OEM/ODM) for packaging and colors?" 
              answer="Absolutely. We specialize in custom manufacturing. You can choose color variations, apply your brand's screen prints/laser engravings, and utilize custom outer boxes. MOQ requirements vary depending on customization specifications."
            />
            <FAQItem 
              question="What is the standard lead time for manufacturing runs?" 
              answer="For in-stock catalog items, we ship orders within 5–7 business days. For customized manufacturing runs, lead times typically vary between 25 to 40 days depending on raw material sourcing and volume."
            />
          </div>

        </div>
      </section>

      {/* Inquiry Form & Contact Section */}
      <section id="contact" className="py-20 bg-stone-100/50 border-t border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Contact Info */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-2 block">Contact Info</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-stone-950 mb-6">
                Start a Partnership with KTOYS
              </h2>
              <p className="text-stone-600 mb-8 leading-relaxed">
                Connect with our team to obtain price sheets, request custom color samples, or negotiate distribution territories. Let&apos;s create beautiful and imaginative play experiences together.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700">
                    ✉
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-stone-400">Email Address</div>
                    <a href="mailto:ebykjose2@gmail.com" className="text-sm font-bold text-stone-900 hover:underline">ebykjose2@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-stone-700">
                    📍
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-stone-400">Corporate Address</div>
                    <div className="text-sm font-bold text-stone-900">Kumbukkal Trading and Manufacturing, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Inquiry Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-stone-200/80 shadow-lg">
              <h3 className="font-extrabold text-xl text-stone-900 mb-6">Send an Inquiry</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert("Inquiry successfully submitted! Our wholesale team will get in touch shortly.");
                setName('');
                setEmail('');
                setBusinessName('');
                setMessage('');
              }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                    placeholder="Eby K Jose"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Work Email</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Business Name</label>
                    <input 
                      type="text" 
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all"
                      placeholder="Kumbukkal Trading"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Project Message</label>
                  <textarea 
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all resize-none"
                    placeholder="We are looking for customized wooden block printing..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 text-xs font-bold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 rounded-xl transition-all shadow-md"
                >
                  Send Wholesale Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-500 py-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="text-lg font-black tracking-tight text-white mb-1">KTOYS</div>
            <div className="text-[10px] uppercase font-bold text-stone-600">Kumbukkal Trading and Manufacturing</div>
          </div>
          <div className="text-xs text-stone-600">
            &copy; {new Date().getFullYear()} KTOYS. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sliding B2B Inquiry Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden">
            
            {/* Overlay */}
            <div 
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-stone-950/40 backdrop-blur-xs transition-opacity duration-300"
            ></div>

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col bg-white shadow-2xl">
                  
                  {/* Drawer Header */}
                  <div className="px-6 py-6 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-extrabold text-stone-900">Inquiry List</h2>
                      <p className="text-xs text-stone-500">Request custom price quotes for selected toys</p>
                    </div>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="p-1 rounded-full hover:bg-stone-200 text-stone-500 transition-colors"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Drawer Content */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {inquiryCart.length === 0 ? (
                      <div className="h-full flex flex-col items-center justify-center text-center py-12">
                        <div className="text-4xl mb-4">🧸</div>
                        <h4 className="font-bold text-stone-800 text-sm">Your Inquiry List is Empty</h4>
                        <p className="text-xs text-stone-400 mt-1 max-w-[200px]">Add toys from the catalog to submit a custom price quote request.</p>
                      </div>
                    ) : (
                      <>
                        {/* Selected Items List */}
                        <div className="space-y-3">
                          <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-2">Selected Toys</span>
                          {inquiryCart.map((item) => (
                            <div key={item.id} className="flex gap-4 p-3 bg-stone-50 rounded-2xl border border-stone-200/60 items-center justify-between">
                              <div className="flex gap-3 items-center">
                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover border border-stone-200/50 bg-white" />
                                <div>
                                  <h5 className="font-bold text-xs text-stone-900 leading-tight">{item.name}</h5>
                                  <span className="text-[9px] uppercase tracking-wider text-amber-700 font-extrabold bg-amber-50 px-1.5 py-0.5 rounded-full border border-amber-200/30 inline-block mt-0.5">{item.tag}</span>
                                </div>
                              </div>
                              <button 
                                onClick={() => removeFromCart(item.id)}
                                className="p-1 text-stone-400 hover:text-rose-500 text-xs transition-colors"
                                title="Remove"
                              >
                                Remove
                              </button>
                            </div>
                          ))}
                        </div>

                        {/* Cart Inquiry Form */}
                        <div className="border-t border-stone-200 pt-6">
                          <span className="text-[10px] font-black uppercase tracking-wider text-stone-400 block mb-4">Partner Details</span>
                          
                          {inquirySubmitted ? (
                            <div className="bg-emerald-50 text-emerald-800 p-6 rounded-2xl border border-emerald-200/30 text-center animate-fade-in">
                              <div className="text-3xl mb-2">✓</div>
                              <h4 className="font-bold text-sm">Request Submitted Successfully</h4>
                              <p className="text-xs text-emerald-600 mt-1">Our wholesale team at Kumbukkal Trading will process this quote and contact you shortly.</p>
                            </div>
                          ) : (
                            <form onSubmit={handleSubmitInquiry} className="space-y-4">
                              <div>
                                <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1.5">Business Name</label>
                                <input 
                                  type="text" 
                                  required 
                                  value={businessName}
                                  onChange={(e) => setBusinessName(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                                  placeholder="Kumbukkal Trading Co."
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1.5">Contact Email</label>
                                <input 
                                  type="email" 
                                  required 
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                                  placeholder="sales@kumbukkal.com"
                                />
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1.5">Estimated Order Volume</label>
                                <select 
                                  value={volume}
                                  onChange={(e) => setVolume(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-amber-500 focus:bg-white"
                                >
                                  <option>Small-Scale Retailer (50-200 pcs)</option>
                                  <option>Medium Distributor (200-1000 pcs)</option>
                                  <option>Large Wholesale Importer (1000+ pcs)</option>
                                  <option>Custom OEM/ODM Manufacturing</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-[10px] font-bold uppercase text-stone-500 mb-1.5">Special Instructions</label>
                                <textarea 
                                  rows={3} 
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-50 text-xs focus:outline-none focus:border-amber-500 focus:bg-white resize-none"
                                  placeholder="Custom packaging, color alterations..."
                                />
                              </div>
                              <button 
                                type="submit"
                                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-stone-900 hover:bg-amber-600 rounded-xl transition-all shadow-md mt-4"
                              >
                                Submit B2B Price Quote Request
                              </button>
                            </form>
                          )}
                        </div>
                      </>
                    )}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

// Reusable FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl border border-stone-200/80 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none font-bold text-stone-900 text-sm md:text-base hover:bg-stone-50/50"
      >
        <span>{question}</span>
        <span className={`text-stone-400 font-light text-xl transform transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          ＋
        </span>
      </button>
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-40 border-t border-stone-100" : "max-h-0"}`}>
        <p className="px-6 py-5 text-stone-500 text-xs md:text-sm leading-relaxed bg-stone-50/30">
          {answer}
        </p>
      </div>
    </div>
  );
}
