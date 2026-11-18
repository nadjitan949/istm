"use client";

import { PageTemplate } from "@/components/layout/PageTemplate";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact - ISTM",
  description: "Contactez l'ISTM.",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = React.useState(false);

  const [formData, setFormData] = React.useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
    }
  };

  return (
    <PageTemplate title="Contact" href="/contact" showSubNav={false}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl border border-istm-200 bg-white">
          <h2 className="text-2xl font-bold text-istm-900 mb-2">Nous contacter</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-istm-700 mb-1">Nom</label>
              <input
                required
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.nom}
                onChange={handleChange("nom")}
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-istm-700 mb-1">E-mail</label>
              <input
                required
                type="email"
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="vous@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-istm-700 mb-1">Sujet</label>
              <select
                required
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-istm-700 mb-1">Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Votre message..."
              />
            </div>
            <Button type="submit" variant="red" className="w-full">
              Envoyer le message
            </Button>
          </div>
        </form>
        <div className="space-y-6">
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <div className="flex items-start gap-4">
              <MapPin className="h-5 w-5 text-istm-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-istm-900 mb-1">Adresse</h3>
                <p className="text-istm-600 text-sm">Avenue de l'Indépendance, Quartier Administratif</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <div className="flex items-start gap-4">
              <Phone className="h-5 w-5 text-istm-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-istm-900 mb-1">Téléphone</h3>
                <p className="text-istm-600 text-sm">+229 XX XX XX XX</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <div className="flex items-start gap-4">
              <Mail className="h-5 w-5 text-istm-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-istm-900 mb-1">E-mail</h3>
                <p className="text-istm-600 text-sm">contact@istm.example</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-white">
            <div className="flex items-start gap-4">
              <Clock className="h-5 w-5 text-istm-600 mt-0.5" />
              <div>
                <h3 className="font-bold text-istm-900 mb-1">Horaires</h3>
                <p className="text-istm-600 text-sm">Lun–Ven : 8h–17h | Sam : 8h–12h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}

import React from "react";