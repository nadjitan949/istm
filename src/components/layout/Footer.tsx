import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const SOCIALS = [
  { label: "E-mail", href: `mailto:${site.email}`, icon: Mail },
];

export const Footer = () => {
  const currentYear = 2026;

  // Get top-level items that have children for the footer columns
  const columns = navigation.filter((item) => item.children && item.children.length > 0);

  return (
    <footer className="mt-10 border-t border-istm-200 bg-istm-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src={images.logo}
                alt="Logo ISTM"
                width={310}
                height={66}
                className="h-14 w-auto rounded-sm bg-white px-3 py-2"
              />
            </div>
            <p className="max-w-xl text-istm-200 text-lg leading-8">
              {site.fullName} – Établissement d'enseignement du primaire,
              secondaire et supérieur (BTS, BT, Licence, Master).
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-istm-300">
              {site.tagline} Nous développons des parcours structurés, lisibles et orientés vers la réussite académique et professionnelle.
            </p>
            <div className="flex gap-4 mt-6">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-istm-300 transition-colors hover:bg-red-600 hover:text-white"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="soft-card-dark rounded-4xl p-6 md:p-8">
            <h3 className="text-white text-2xl">Contact</h3>
            <div className="space-y-3 text-istm-300 text-sm">
              <div className="mt-6 flex items-start gap-3">
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
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-red-300"
            >
              Nous écrire
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10">
          {columns.map((col) => (
            <div key={col.href}>
              <h3 className="text-white text-xl mb-4">{col.label}</h3>
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

        <div className="border-t border-istm-800 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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