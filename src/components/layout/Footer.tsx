import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { Mail, Phone, MapPin } from "lucide-react";

const SOCIALS = [
  { label: "E-mail", href: `mailto:${site.email}`, icon: Mail },
];

export const Footer = () => {
  const currentYear = 2026;

  // Get top-level items that have children for the footer columns
  const columns = navigation.filter((item) => item.children && item.children.length > 0);

  return (
    <footer className="border-t border-istm-200 bg-istm-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={images.logo}
                alt="Logo ISTM"
                width={96}
                height={32}
                className="h-8 w-auto"
              />
              <span className="font-bold text-xl text-white tracking-tight">ISTM</span>
            </div>
            <p className="text-istm-300 max-w-md">
              {site.fullName} – Établissement d'enseignement du primaire,
              secondaire et supérieur (BTS, BT, Licence, Master).
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-8 h-8 rounded-lg bg-istm-800 flex items-center justify-center text-istm-300 hover:text-white hover:bg-red-600 transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-white font-semibold text-lg">Contact</h3>
            <div className="space-y-3 text-istm-300 text-sm">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-istm-500" />
                <span>{site.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-istm-500" />
                <a href={`tel:${site.phone}`} className="hover:text-white transition-colors">{site.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-istm-500" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">{site.email}</a>
              </div>
              <p className="text-xs text-istm-500">{site.hours}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 border-t border-istm-800 pt-8">
          {columns.map((col) => (
            <div key={col.href}>
              <h3 className="text-white font-semibold mb-4">{col.label}</h3>
              <ul className="space-y-2">
                {(col.children || []).slice(0, 4).map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="text-istm-300 text-sm hover:text-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-istm-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-istm-400 text-sm">
            © {currentYear} {site.fullName}. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-xs text-istm-500">
            <Link href="/admissions/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <span>Mentions légales</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;