"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BRAND_NAME } from "@/constants";
import MobileMenu from "./MobileMenu";
import EnquiryModal from "./EnquiryModal";
import Image from "next/image";
import { createSupabaseBrowserClient } from "@/lib/supabase";

interface HeaderProps {
  variant?: "public" | "admin";
}

export default function Header({ variant = "public" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const router = useRouter();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handlePrimaryAction = async () => {
    if (variant === "admin") {
      setIsSigningOut(true);
      const supabase = createSupabaseBrowserClient();

      if (supabase) {
        await supabase.auth.signOut();
      }

      router.replace("/login");
      router.refresh();
      return;
    }

    setIsEnquiryOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors ${
                isScrolled ? "text-[#F69F11]" : "text-white"
              }`}
            >
              <Image
                src="/images/srimath-logo.png"
                alt="srimath-logo"
                width={100}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={handlePrimaryAction}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  isScrolled
                    ? "bg-[#F69F11] text-dark hover:bg-amber-400"
                    : "bg-[#F69F11] text-dark hover:bg-amber-400"
                }`}
                disabled={variant === "admin" && isSigningOut}
              >
                {variant === "admin" ? "SIGN OUT" : "ENQUIRY NOW"}
              </button>

              {/* Hamburger Menu Icon */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-8 h-8 flex flex-col justify-center items-center gap-1.5 transition-colors ${
                  isScrolled ? "text-[#F69F11]" : "text-white"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="w-6 h-0.5 bg-current block"></span>
                <span className="w-6 h-0.5 bg-current block"></span>
                <span className="w-6 h-0.5 bg-current block"></span>
              </button>
            </div>

            {/* Mobile - Right Side */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={handlePrimaryAction}
                className="px-4 py-2 rounded-lg font-semibold bg-[#F69F11] text-dark text-sm"
                disabled={variant === "admin" && isSigningOut}
              >
                {variant === "admin" ? "SIGN OUT" : "ENQUIRY NOW"}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-8 h-8 flex flex-col justify-center items-center gap-1.5 transition-colors ${
                  isScrolled ? "text-[#F69F11]" : "text-white"
                }`}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="w-6 h-0.5 bg-current block"></span>
                <span className="w-6 h-0.5 bg-current block"></span>
                <span className="w-6 h-0.5 bg-current block"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <EnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
