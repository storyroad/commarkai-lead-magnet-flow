import React from "react";
import footerData from "../../design/brand-assets/footer-links.json";

/**
 * Footer component that reads its link data from design/brand-assets/footer-links.json
 * - Keeps link data separate from visuals so slugs are easy to update
 * - Safe for Vite/React apps (uses plain anchors for maximum compatibility)
 *
 * How to use:
 * - Replace your existing Footer with this file (path may vary).
 * - Update design/brand-assets/footer-links.json with your final slugs / labels / socials.
 * - If your app uses a different path to this component, adjust imports accordingly.
 */

const logoDefault = "/lovable-uploads/7e4650fb-6083-4023-acfb-62fe0fe237ca.png";

export const Footer: React.FC = () => {
  const { logo, description, socials, services, contact } = footerData;
  const logoSrc = logo && logo.length ? logo : logoDefault;

  return (
    <footer className="bg-gray-900 text-white py-12" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="footer-heading" className="sr-only">Site footer</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img
              src={logoSrc}
              alt={footerData.logoAlt || "COMMARKAI Logo"}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              {description}
            </p>

            <div className="flex space-x-4">
              {(socials || []).map((s) => {
                const isExternal = s.href && (s.href.startsWith("http") || s.href.startsWith("//"));
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    aria-label={s.name}
                  >
                    {s.name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {(services || []).map((svc) => (
                <li key={svc.slug}>
                  <a
                    href={svc.slug}
                    className="hover:text-white transition-colors"
                  >
                    {svc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              {contact?.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="hover:text-white underline transition-colors"
                  >
                    {contact.email}
                  </a>
                </li>
              )}
              {contact?.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {contact.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} COMMARKAI. All rights reserved.{" "}
            {"| "}
            <a
              href={footerData.legal?.privacy || "/privacy-policy"}
              target={footerData.legal?.privacy?.startsWith("http") ? "_blank" : undefined}
              rel={footerData.legal?.privacy?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              href={footerData.legal?.terms || "/terms-of-service"}
              target={footerData.legal?.terms?.startsWith("http") ? "_blank" : undefined}
              rel={footerData.legal?.terms?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
