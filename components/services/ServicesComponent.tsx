/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import {
  Check,
  Award,
  Mail,
  Phone,
  User,
  MessageSquare,
  ArrowRight,
  Loader2,
  Globe,
  Smartphone,
  Zap,
  Star,
  GraduationCap,
  Sparkles,
  ShoppingCart,
  LayoutDashboard,
  CreditCard,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

// ─── Floating particles canvas (services hero) ───────────────────────────────
const CODE_SNIPPETS = [
  "const dev = 'Andrew';",
  "npm run build",
  "<Component />",
  "git commit -m 'feat'",
  "async/await",
  "SELECT * FROM",
  "flex flex-col",
  "useState()",
  "border-radius: 12px",
  "export default",
  "API.get('/data')",
  "type Props = {}",
];

function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    interface Chip {
      x: number; y: number;
      vx: number; vy: number;
      text: string;
      opacity: number;
      size: number;
      rotation: number;
      rotSpeed: number;
    }

    let chips: Chip[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      chips = Array.from({ length: 22 }, () => makeChip(canvas.width, canvas.height, true));
    };

    function makeChip(w: number, h: number, randomY: boolean): Chip {
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : h + 30,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(0.2 + Math.random() * 0.4),
        text: CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)],
        opacity: 0.06 + Math.random() * 0.1,
        size: 10 + Math.random() * 5,
        rotation: (Math.random() - 0.5) * 0.4,
        rotSpeed: (Math.random() - 0.5) * 0.002,
      };
    }

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const c of chips) {
        c.x += c.vx;
        c.y += c.vy;
        c.rotation += c.rotSpeed;
        if (c.y < -40) Object.assign(c, makeChip(canvas.width, canvas.height, false));

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.globalAlpha = c.opacity;

        // pill background
        const padding = 8;
        ctx.font = `${c.size}px 'Courier New', monospace`;
        const w = ctx.measureText(c.text).width + padding * 2;
        const h = c.size + padding * 1.4;
        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.strokeStyle = "rgba(255,255,255,0.15)";
        ctx.lineWidth = 1;
        const r = 6;
        ctx.beginPath();
        ctx.moveTo(-w / 2 + r, -h / 2);
        ctx.lineTo(w / 2 - r, -h / 2);
        ctx.arcTo(w / 2, -h / 2, w / 2, -h / 2 + r, r);
        ctx.lineTo(w / 2, h / 2 - r);
        ctx.arcTo(w / 2, h / 2, w / 2 - r, h / 2, r);
        ctx.lineTo(-w / 2 + r, h / 2);
        ctx.arcTo(-w / 2, h / 2, -w / 2, h / 2 - r, r);
        ctx.lineTo(-w / 2, -h / 2 + r);
        ctx.arcTo(-w / 2, -h / 2, -w / 2 + r, -h / 2, r);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // text
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(c.text, 0, 0);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    />
  );
}



function HeroHeader({ onScrollToPackages, onScrollToContact }: { onScrollToPackages: () => void; onScrollToContact: () => void }) {
  return (
    <div className="relative w-full overflow-hidden bg-[#00296b] pt-12 pb-0">
      {/* Multi-layer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a45] via-[#00296b] to-[#003f9f]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Radial glow spots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-300/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Floating code chips canvas */}
      <HeroParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 md:py-24 max-w-4xl mx-auto">

        {/* Animated pill badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 inline-flex items-center gap-2"
        >
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-full bg-yellow-400/20 blur-md" />
          <span className="relative inline-flex items-center gap-2 border border-yellow-400/40 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 text-sm font-semibold text-white/90">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
            </span>
            Available for freelance &amp; capstone projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5"
        >
          Quality Code,{" "}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400">
              Honest Prices
            </span>
            {/* Underline accent */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/65 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
        >
          From student capstone projects to full enterprise platforms — get a
          professionally built website or mobile app at a price that makes sense
          for <span className="text-white/90 font-medium">your</span> budget.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={onScrollToPackages}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-yellow-400/30 transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base"
          >
            <Sparkles className="w-4 h-4" />
            View Packages
          </button>
          <button
            onClick={() => onScrollToContact()}
            className="inline-flex items-center gap-2 border border-white/25 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm md:text-base"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </button>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative z-10 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32 C360,56 1080,0 1440,32 L1440,56 L0,56 Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </div>
  );
}

export default function ServicesComponent({}: Props) {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"web" | "mobile">("web");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    package: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormState({
          name: "",
          email: "",
          phone: "",
          message: "",
          package: ""
        });
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectPackage = (packageName: string) => {
    setFormState((prev) => ({
      ...prev,
      package: packageName
    }));
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tiers = [
    {
      name: "Student / Capstone",
      price: "₱2,500 - ₱5,000",
      recommended: false,
      badge: "STUDENT",
      icon: GraduationCap,
      accent: "yellow",
      description: "Built for thesis & capstone deadlines",
      features: [
        { name: "Pages", value: "1-3 pages" },
        { name: "Design", value: "Simple template-based" },
        { name: "Hosting & Domain", value: "Not included" },
        { name: "SEO Optimization", value: "Not included" },
        { name: "Mobile-Friendly", value: "Yes (basic)" },
        { name: "Documentation", value: "Basic technical docs" },
        { name: "Support & Updates", value: "Until project defense" },
        { name: "Best For", value: "Capstone & thesis projects" }
      ]
    },
    {
      name: "Basic",
      price: "₱5,000 - ₱10,000",
      recommended: false,
      badge: null,
      icon: Zap,
      accent: "blue",
      description: "A clean, fast site to get you online",
      features: [
        { name: "Pages", value: "1-3 pages" },
        { name: "Design", value: "Simple template-based" },
        { name: "Hosting & Domain", value: "Not included" },
        { name: "SEO Optimization", value: "Minimal (basic keywords)" },
        { name: "Mobile-Friendly", value: "Yes (basic)" },
        { name: "Support & Updates", value: "1-month support" },
        { name: "Best For", value: "Personal blogs, resumes" }
      ]
    },
    {
      name: "Standard",
      price: "₱11,000 - ₱18,000",
      recommended: true,
      badge: "RECOMMENDED",
      icon: Star,
      accent: "navy",
      description: "The most popular choice for growing businesses",
      features: [
        { name: "Pages", value: "3-5 pages" },
        { name: "Design", value: "Semi-custom design" },
        { name: "Hosting & Domain", value: "1-year free hosting (basic)" },
        { name: "SEO Optimization", value: "On-page SEO" },
        { name: "Mobile-Friendly", value: "Fully responsive" },
        { name: "Support & Updates", value: "3-month support" },
        { name: "Best For", value: "Small businesses, portfolios" }
      ]
    },
    {
      name: "Premium",
      price: "Custom Price",
      recommended: false,
      badge: null,
      icon: Sparkles,
      accent: "purple",
      description: "Fully tailored for complex, high-impact projects",
      features: [
        { name: "Pages", value: "5+ pages (custom features)" },
        { name: "Design", value: "Fully custom & responsive" },
        { name: "Hosting & Domain", value: "Flexible options available" },
        { name: "SEO Optimization", value: "Advanced SEO + Performance" },
        { name: "Mobile-Friendly", value: "Premium responsiveness" },
        { name: "Support & Updates", value: "Tailored support plans" },
        { name: "Best For", value: "E-commerce, SaaS, complex sites" }
      ]
    }
  ];

  const mobileTiers = [
    {
      name: "Student / Capstone",
      price: "₱5,000 - ₱12,000",
      recommended: false,
      badge: "STUDENT",
      icon: GraduationCap,
      accent: "yellow",
      description: "Built for thesis & capstone deadlines",
      features: [
        { name: "Platform", value: "Android or iOS (single platform)" },
        { name: "Screens", value: "3-5 screens" },
        { name: "Design", value: "Simple template-based UI" },
        { name: "Backend / API", value: "Basic (local or simple REST)" },
        { name: "Push Notifications", value: "Not included" },
        { name: "App Store Submission", value: "Not included" },
        { name: "Documentation", value: "Basic technical docs" },
        { name: "Support & Updates", value: "Until project defense" },
        { name: "Best For", value: "Capstone & thesis mobile projects" }
      ]
    },
    {
      name: "Basic",
      price: "₱15,000 - ₱30,000",
      recommended: false,
      badge: null,
      icon: Zap,
      accent: "blue",
      description: "A simple single-platform app to launch your idea",
      features: [
        { name: "Platform", value: "Android or iOS (single platform)" },
        { name: "Screens", value: "3-5 screens" },
        { name: "Design", value: "Template-based UI" },
        { name: "Backend / API", value: "Not included" },
        { name: "Push Notifications", value: "Not included" },
        { name: "App Store Submission", value: "Not included" },
        { name: "Support & Updates", value: "1-month support" },
        { name: "Best For", value: "Simple utility apps, MVPs" }
      ]
    },
    {
      name: "Standard",
      price: "₱35,000 - ₱80,000",
      recommended: true,
      badge: "RECOMMENDED",
      icon: Star,
      accent: "navy",
      description: "Cross-platform power for growing startups",
      features: [
        { name: "Platform", value: "Cross-platform (Android & iOS)" },
        { name: "Screens", value: "5-10 screens" },
        { name: "Design", value: "Custom UI/UX design" },
        { name: "Backend / API", value: "REST API integration" },
        { name: "Push Notifications", value: "Included" },
        { name: "App Store Submission", value: "Assisted submission" },
        { name: "Support & Updates", value: "3-month support" },
        { name: "Best For", value: "Business apps, e-commerce, startups" }
      ]
    },
    {
      name: "Premium",
      price: "Custom Price",
      recommended: false,
      badge: null,
      icon: Sparkles,
      accent: "purple",
      description: "Enterprise-grade apps built to scale",
      features: [
        { name: "Platform", value: "Android + iOS (native or cross-platform)" },
        { name: "Screens", value: "10+ screens (full feature set)" },
        { name: "Design", value: "Fully custom UI/UX + branding" },
        { name: "Backend / API", value: "Custom backend + database" },
        { name: "Push Notifications", value: "Advanced (segmented)" },
        { name: "App Store Submission", value: "Full submission & ASO" },
        { name: "Support & Updates", value: "Tailored support plans" },
        { name: "Best For", value: "Complex apps, SaaS, enterprise" }
      ]
    }
  ];

  const accentStyles: Record<string, { header: string; badge: string; btn: string; glow: string; border: string; icon: string; check: string }> = {
    yellow: {
      header: "from-yellow-400 to-yellow-500",
      badge: "bg-yellow-400 text-yellow-900",
      btn: "bg-yellow-400 hover:bg-yellow-500 text-yellow-900",
      glow: "shadow-yellow-400/30",
      border: "border-yellow-400",
      icon: "text-yellow-500",
      check: "text-yellow-500"
    },
    blue: {
      header: "from-blue-500 to-blue-600",
      badge: "bg-blue-500 text-white",
      btn: "bg-blue-500 hover:bg-blue-600 text-white",
      glow: "shadow-blue-500/20",
      border: "border-blue-400",
      icon: "text-blue-500",
      check: "text-blue-500"
    },
    navy: {
      header: "from-[#00296b] to-[#003f9f]",
      badge: "bg-[#00296b] text-white",
      btn: "bg-[#00296b] hover:bg-[#001d4a] text-white",
      glow: "shadow-[#00296b]/30",
      border: "border-[#00296b]",
      icon: "text-[#00296b]",
      check: "text-[#00296b]"
    },
    purple: {
      header: "from-purple-600 to-purple-700",
      badge: "bg-purple-600 text-white",
      btn: "bg-purple-600 hover:bg-purple-700 text-white",
      glow: "shadow-purple-600/20",
      border: "border-purple-500",
      icon: "text-purple-600",
      check: "text-purple-600"
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  function TierGrid({ tiers: tierList, prefix }: { tiers: typeof tiers; prefix: string }) {
    return (
      <motion.div
        key={prefix}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
      >
        {tierList.map((tier) => {
          const s = accentStyles[tier.accent];
          const TierIcon = tier.icon;
          const isHovered = hoveredTier === `${prefix}-${tier.name}`;
          return (
            <motion.div
              key={tier.name}
              variants={item}
              className={`relative rounded-2xl overflow-hidden border-2 flex flex-col transition-all duration-300 cursor-pointer
                ${s.border}
                ${tier.recommended ? `shadow-xl ${s.glow}` : "shadow-md"}
                ${isHovered ? "-translate-y-2 shadow-2xl" : ""}
              `}
              onMouseEnter={() => setHoveredTier(`${prefix}-${tier.name}`)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              {/* Colored header band */}
              <div className={`bg-gradient-to-r ${s.header} p-5 flex items-start justify-between`}>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <TierIcon className="w-5 h-5 text-white/90" />
                    <span className="text-white font-bold text-lg leading-tight">{tier.name}</span>
                  </div>
                  <p className="text-white/75 text-xs leading-snug">{tier.description}</p>
                </div>
                {tier.badge && (
                  <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full whitespace-nowrap ml-2 mt-0.5 ${
                    tier.badge === "STUDENT"
                      ? "bg-white/25 text-white"
                      : "bg-white/25 text-white"
                  }`}>
                    {tier.badge === "RECOMMENDED" ? "★ TOP PICK" : "🎓 STUDENT"}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="px-5 pt-4 pb-3 bg-white border-b border-gray-100">
                <div className="text-2xl font-extrabold text-gray-900">{tier.price}</div>
                <div className="text-xs text-gray-400 mt-0.5">one-time project rate</div>
              </div>

              {/* Features */}
              <div className="flex-1 bg-white px-5 py-4">
                <ul className="space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature.name} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${s.check}`} />
                      <span>
                        <span className="font-semibold text-gray-700">{feature.name}:</span>{" "}
                        <span className="text-gray-500">{feature.value}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5 bg-white pt-3">
                <button
                  onClick={() => {
                    selectPackage(`${prefix === "web" ? "Web" : "Mobile App"} – ${tier.name}`);
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${s.btn}`}
                >
                  {tier.recommended ? "Get Started" : "Choose Plan"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <HeroHeader
        onScrollToPackages={() => {
          const el = document.getElementById("packages-section");
          el?.scrollIntoView({ behavior: "smooth" });
        }}
        onScrollToContact={() => {
          formRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <div id="packages-section" className="container mx-auto px-4 py-12">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-2xl shadow-md border border-gray-100 p-1.5">
            <button
              onClick={() => setActiveCategory("web")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === "web"
                  ? "bg-[#00296b] text-white shadow-lg shadow-[#00296b]/20"
                  : "text-gray-500 hover:text-[#00296b] hover:bg-gray-50"
              }`}
            >
              <Globe className="w-4 h-4" />
              Website Development
            </button>
            <button
              onClick={() => setActiveCategory("mobile")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeCategory === "mobile"
                  ? "bg-[#00296b] text-white shadow-lg shadow-[#00296b]/20"
                  : "text-gray-500 hover:text-[#00296b] hover:bg-gray-50"
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile App Development
            </button>
          </div>
        </motion.div>

        {/* Section label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: activeCategory === "web" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeCategory === "web" ? 20 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              {activeCategory === "web" ? (
                <Globe className="w-6 h-6 text-[#00296b]" />
              ) : (
                <Smartphone className="w-6 h-6 text-[#00296b]" />
              )}
              <h2 className="text-2xl font-bold text-gray-800">
                {activeCategory === "web" ? "Website Development Packages" : "Mobile App Development Packages"}
              </h2>
              <span className="text-xs font-semibold bg-[#00296b]/10 text-[#00296b] px-3 py-1 rounded-full">
                PHP (₱)
              </span>
            </div>

            {/* Tier Grid */}
            {activeCategory === "web" ? (
              <TierGrid tiers={tiers} prefix="web" />
            ) : (
              <TierGrid tiers={mobileTiers} prefix="mobile" />
            )}

            {/* Add-ons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="w-5 h-5 text-[#00296b]" />
                <h2 className="text-xl font-bold text-gray-800">Optional Add-ons</h2>
              </div>
              {activeCategory === "web" ? (
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00296b]/10 flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="w-5 h-5 text-[#00296b]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">E-commerce Setup</h3>
                        <p className="text-sm text-gray-500 mt-0.5">Full-featured online store with payment processing</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-extrabold text-gray-900">₱15,000 – ₱25,000+</div>
                      <div className="text-xs text-gray-400">scales with features</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00296b]/10 flex items-center justify-center flex-shrink-0">
                        <LayoutDashboard className="w-5 h-5 text-[#00296b]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Admin Dashboard</h3>
                        <p className="text-sm text-gray-500 mt-0.5">Web-based panel to manage app content and users</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-extrabold text-gray-900">₱10,000 – ₱20,000+</div>
                      <div className="text-xs text-gray-400">scales with features</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#00296b]/10 flex items-center justify-center flex-shrink-0">
                        <CreditCard className="w-5 h-5 text-[#00296b]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">In-App Purchases / Payments</h3>
                        <p className="text-sm text-gray-500 mt-0.5">GCash, PayMaya, Stripe integration</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-lg font-extrabold text-gray-900">₱8,000 – ₱15,000+</div>
                      <div className="text-xs text-gray-400">per gateway</div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Notes */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mb-14"
            >
              <div className="bg-gradient-to-r from-[#00296b] to-[#003f9f] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="w-5 h-5 text-yellow-300" />
                  <h2 className="text-lg font-bold">
                    {activeCategory === "web" ? "Premium Tier Notes" : "Mobile App Premium Notes"}
                  </h2>
                </div>
                <ul className="space-y-2.5">
                  {activeCategory === "web" ? (
                    <>
                      <li className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                        Custom pricing based on project complexity (e.g., APIs, databases, integrations).
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                        Free consultation to align features with your budget.
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                        Built with React Native or Flutter for true cross-platform performance on Android and iOS.
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                        Custom pricing based on complexity — real-time features, offline support, third-party integrations, etc.
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-white/85">
                        <Check className="w-4 h-4 text-yellow-300 flex-shrink-0 mt-0.5" />
                        Free consultation to scope your app and align features with your budget.
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          id="contact-form"
          ref={formRef}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Mail className="w-6 h-6 text-[#00296b]" />
            <h2 className="text-2xl font-bold text-gray-800">Get In Touch</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            {/* Left panel */}
            <div className="lg:col-span-2 relative overflow-hidden bg-gradient-to-br from-[#00296b] to-[#003f9f] p-8 flex flex-col justify-between">
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "22px 22px"
                }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3">Let's build something great</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Have questions about a package? Ready to kick off your project?
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
                <div className="space-y-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 font-medium uppercase tracking-wide">Email</div>
                      <div className="text-white/90 text-sm font-medium">hilarioandrew12@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-white/50 font-medium uppercase tracking-wide">Phone</div>
                      <div className="text-white/90 text-sm font-medium">+63 976 184 7449</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative circle */}
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
              <div className="absolute bottom-12 right-12 w-24 h-24 bg-white/5 rounded-full" />
            </div>

            {/* Right panel — form */}
            <div className="lg:col-span-3 bg-white p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Send a message</h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          className="pl-9 w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00296b]/30 focus:border-[#00296b] transition"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          className="pl-9 w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00296b]/30 focus:border-[#00296b] transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Phone <span className="normal-case font-normal text-gray-400">(optional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="pl-9 w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00296b]/30 focus:border-[#00296b] transition"
                        placeholder="+63 123 456 7890"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="package" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Interested Package
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={formState.package}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#00296b]/30 focus:border-[#00296b] transition"
                    >
                      <option value="">Select a package</option>
                      <optgroup label="Website Development">
                        <option value="Web – Student / Capstone">Web – Student / Capstone</option>
                        <option value="Web – Basic">Web – Basic</option>
                        <option value="Web – Standard">Web – Standard</option>
                        <option value="Web – Premium">Web – Premium</option>
                      </optgroup>
                      <optgroup label="Mobile App Development">
                        <option value="Mobile App – Student / Capstone">Mobile App – Student / Capstone</option>
                        <option value="Mobile App – Basic">Mobile App – Basic</option>
                        <option value="Mobile App – Standard">Mobile App – Standard</option>
                        <option value="Mobile App – Premium">Mobile App – Premium</option>
                      </optgroup>
                      <option value="Custom">I need a custom solution</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      Your Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="pl-9 w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 px-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00296b]/30 focus:border-[#00296b] transition resize-none"
                        placeholder="Tell me about your project requirements..."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00296b] hover:bg-[#001d4a] disabled:opacity-60 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-lg shadow-[#00296b]/20 hover:shadow-xl hover:-translate-y-0.5"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
