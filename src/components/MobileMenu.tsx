"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Drawer */}
      <nav
        className={`fixed right-0 top-0 bottom-0 w-80 max-w-full bg-white z-40 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 text-2xl"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Menu Items */}
        <div className="pt-20 px-6 pb-6">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <button
                onClick={() => link.children && toggleExpand(link.label)}
                className="w-full text-left py-4 text-lg font-semibold text-gray-900 border-b border-gray-100 flex justify-between items-center hover:text-[#8b1e23] transition-colors"
              >
                {link.label}
                {link.children && (
                  <span className="text-xl">
                    {expandedItems.includes(link.label) ? "−" : "+"}
                  </span>
                )}
              </button>

              {/* Submenu */}
              {link.children && expandedItems.includes(link.label) && (
                <div className="bg-gray-50 max-h-40 overflow-hidden transition-all duration-300">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="block py-3 px-4 text-gray-700 text-sm hover:text-[#8b1e23] hover:pl-6 transition-all"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}
