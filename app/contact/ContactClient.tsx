"use client";

import * as React from "react";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { site } from "@/data/site";
import { images } from "@/data/images";

const inputClass =
  "w-full rounded-md border border-istm-200 bg-white px-4 py-2.5 text-sm text-istm-900 placeholder:text-istm-400 transition-colors duration-200 hover:border-istm-300 focus:border-istm-600 focus:outline-none focus:ring-2 focus:ring-istm-600/20";

const labelClass = "mb-1.5 block text-sm font-medium text-istm-700";

const infos = [
  { label: "Adresse", value: site.address, icon: MapPin },
  {
    label: "Téléphone",
    value: (
      <span className="mt-1 flex flex-col gap-1 text-sm leading-6 text-istm-900">
        {site.phones.map((phone) => (
          <a key={phone.dial} href={`tel:${phone.dial}`} className="hover:text-red-600">
            {phone.display}
          </a>
        ))}
      </span>
    ),
    icon: Phone,
  },
  { label: "E-mail", value: site.email, icon: Mail },
  { label: "Horaires", value: site.hours, icon: Clock },
];

export function ContactClient() {
  const [notice, setNotice] = React.useState(false);
  const [formData, setFormData] = React.useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange =
    (key: keyof typeof formData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [key]: event.target.value }));
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setNotice(true);
  };

  return (
    <PageTemplate title="Contact" href="/contact" showSubNav={false}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg border border-istm-200 bg-white p-6 md:p-8"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Écrivez-nous
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-istm-900">Nous contacter</h2>
            <p className="mt-2 text-sm leading-6 text-istm-600">
              Une question sur les admissions, les filières ou la vie scolaire ? Écrivez-nous.
            </p>
          </div>

          {notice ? (
            <p role="status" className="rounded-md border border-istm-200 bg-istm-50 px-4 py-3 text-sm leading-6 text-istm-700">
              L&apos;envoi depuis ce formulaire n&apos;est pas encore disponible. Vous pouvez nous joindre
              par téléphone ou par e-mail avec les coordonnées indiquées à côté.
            </p>
          ) : null}

          <div className="space-y-5">
            <div>
              <label htmlFor="contact-nom" className={labelClass}>
                Nom
              </label>
              <input
                id="contact-nom"
                required
                autoComplete="name"
                className={inputClass}
                value={formData.nom}
                onChange={handleChange("nom")}
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                E-mail
              </label>
              <input
                id="contact-email"
                required
                type="email"
                autoComplete="email"
                className={inputClass}
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="vous@example.com"
              />
            </div>

            <div>
              <label htmlFor="contact-sujet" className={labelClass}>
                Sujet
              </label>
              <select
                id="contact-sujet"
                required
                className={inputClass}
                value={formData.sujet}
                onChange={handleChange("sujet")}
              >
                <option value="">Sélectionner un sujet</option>
                <option value="admissions">Admissions</option>
                <option value="formations">Formations</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                required
                rows={5}
                className={`${inputClass} resize-y`}
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Envoyer
            </button>
          </div>
        </form>

        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Campus de l'ISTM"
              width={800}
              height={500}
              className="h-48 w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>

          <ul className="divide-y divide-istm-100 rounded-lg border border-istm-200 bg-white">
            {infos.map((info) => {
              const Icon = info.icon;
              return (
                <li key={info.label} className="flex items-start gap-4 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-500">
                      {info.label}
                    </h3>
                    {info.label === "Téléphone" ? (
                      info.value
                    ) : (
                      <p className="mt-1 text-sm leading-6 text-istm-900">{info.value}</p>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PageTemplate>
  );
}
