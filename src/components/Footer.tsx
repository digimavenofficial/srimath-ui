"use client";

import {
  BRAND_NAME,
  QUICK_LINKS,
  PROJECT_LINKS,
  SOCIAL_LINKS,
  OFFICE_ADDRESS,
  COMPANY_PHONE,
  COMPANY_EMAIL,
} from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "instagram":
        return "📷";
      case "facebook":
        return "f";
      case "linkedin":
        return "in";
      case "youtube":
        return "▶";
      default:
        return "●";
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{BRAND_NAME}</h3>
            <p className="text-gray-400 leading-relaxed">
              Premium builder delivering quality homes and commercial spaces in
              Chennai with commitment to excellence and customer satisfaction.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#F69F11] text-white flex items-center justify-center hover:bg-amber-400 transition-all transform hover:scale-110"
                  aria-label={social.label}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F69F11] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">PROJECTS</h4>
            <ul className="space-y-3">
              {PROJECT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#F69F11] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">GET IN TOUCH</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">ADDRESS</p>
                <p className="text-gray-200">{OFFICE_ADDRESS}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">PHONE</p>
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="text-[#F69F11] hover:text-amber-500"
                >
                  {COMPANY_PHONE}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">EMAIL</p>
                <a
                  href={`mailto:${COMPANY_EMAIL}`}
                  className="text-[#F69F11] hover:text-amber-500"
                >
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} {BRAND_NAME}. All Rights Reserved.
          </p>
          <div className="flex gap-6 md:justify-end flex-wrap">
            <a
              href="#"
              className="text-gray-400 hover:text-[#F69F11] text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#F69F11] text-sm transition-colors"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
