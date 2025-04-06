/* eslint-disable react/no-unescaped-entities */
"use client";

import type React from "react";

import { useState, useRef } from "react";
import {
  Check,
  Award,
  Mail,
  Phone,
  User,
  MessageSquare,
  ArrowRight,
  Loader2
} from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

export default function ServicesComponent({}: Props) {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    package: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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

    // Scroll to form
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const tiers = [
    {
      name: "Basic",
      price: "₱3,000 - ₱5,000",
      recommended: false,
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
      price: "₱6,000 - ₱10,000",
      recommended: true,
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00296b] to-[#003f9f] bg-clip-text text-transparent">
          Website Development Packages (PHP)
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Choose the perfect package that fits your needs and budget. All
          packages include responsive design and SEO optimization.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
      >
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            variants={item}
            className={`relative rounded-xl overflow-hidden border ${
              tier.recommended
                ? "border-[#00296b] shadow-lg shadow-[#00296b]/10"
                : "border-gray-200"
            } transition-all duration-300 ${
              hoveredTier === tier.name
                ? "transform -translate-y-2 shadow-xl"
                : ""
            }`}
            onMouseEnter={() => setHoveredTier(tier.name)}
            onMouseLeave={() => setHoveredTier(null)}
          >
            {tier.recommended && (
              <div className="absolute top-0 right-0 bg-[#00296b] text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center">
                <Award className="w-3 h-3 mr-1" /> RECOMMENDED
              </div>
            )}
            <div
              className={`p-6 ${
                tier.recommended ? "bg-[#00296b]/5" : "bg-white"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-2xl font-bold mb-4 text-gray-800">
                {tier.price}
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-[#00296b] mt-0.5">
                      <Check className="h-5 w-5" />
                    </div>
                    <div className="ml-3">
                      <span className="font-medium">{feature.name}:</span>{" "}
                      {feature.value}
                    </div>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => selectPackage(tier.name)}
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  tier.recommended
                    ? "bg-[#00296b] hover:bg-[#001d4a] text-white"
                    : "bg-white border border-[#00296b] text-[#00296b] hover:bg-[#00296b]/5"
                }`}
              >
                {tier.recommended ? "Get Started" : "Learn More"}
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="bg-gradient-to-r from-[#00296b]/5 to-[#003f9f]/5 rounded-xl p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Optional Add-ons</h2>
        <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
          <div className="flex-1">
            <h3 className="font-medium">E-commerce Setup</h3>
            <p className="text-gray-600">
              Full-featured online store with payment processing
            </p>
          </div>
          <div className="text-lg font-bold">
            ₱5,000 – ₱15,000+
            <span className="text-sm font-normal text-gray-500 block">
              (scales with features)
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-gray-50 rounded-xl p-8 mb-12"
      >
        <h2 className="text-2xl font-semibold mb-4">Premium Tier Notes:</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 text-[#00296b] mt-0.5">
              <Check className="h-5 w-5" />
            </div>
            <div className="ml-3">
              Custom pricing based on project complexity (e.g., APIs, databases,
              integrations).
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 h-5 w-5 text-[#00296b] mt-0.5">
              <Check className="h-5 w-5" />
            </div>
            <div className="ml-3">
              Free consultation to align features with your budget.
            </div>
          </li>
        </ul>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mb-12"
        id="contact-form"
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="bg-[#00296b] text-white p-8 md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="mb-8 opacity-90">
                Have questions about our packages? Ready to start your project?
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="opacity-90">hilarioandrew12@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="opacity-90">+63 976 184 7449</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:w-2/3">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send us a message
              </h2>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you as soon as
                    possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00296b] focus:border-transparent"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          required
                          className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00296b] focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00296b] focus:border-transparent"
                        placeholder="+63 123 456 7890"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="package"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Interested Package
                    </label>
                    <select
                      id="package"
                      name="package"
                      value={formState.package}
                      onChange={handleInputChange}
                      className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00296b] focus:border-transparent"
                    >
                      <option value="">Select a package</option>
                      <option value="Basic">Basic</option>
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                      <option value="Custom">I need a custom solution</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="pl-10 w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#00296b] focus:border-transparent"
                        placeholder="Tell us about your project requirements..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto flex items-center justify-center space-x-2 bg-[#00296b] hover:bg-[#001d4a] text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00296b]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
