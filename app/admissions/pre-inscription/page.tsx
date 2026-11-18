"use client";

import { PageTemplate } from "@/components/layout/PageTemplate";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Pré-inscription en ligne - ISTM",
  description: "Formulaire de pré-inscription.",
};

export default function PreInscriptionPage() {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  const [formData, setFormData] = React.useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    cycle: "",
    filiere: "",
    message: "",
  });

  const handleChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/pre-inscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setSubmitted(true);
    }
  };

  const cycles = ["Primaire", "Secondaire", "Supérieur"];
  const filieres = (cycle: string) => {
    const map: Record<string, string[]> = {
      Primaire: ["CP1-CP2", "CE1-CE2", "CM1-CM2"],
      Secondaire: ["Collège", "Lycée (A, C, D, G)"],
      Supérieur: ["BTS", "BT", "Licence", "Master"],
    };
    return map[cycle] || [];
  };

  if (submitted) {
    return (
      <PageTemplate title="Pré-inscription envoyée" href="/admissions/pre-inscription" showSubNav={false}>
        <div className="text-center py-20">
          <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-istm-900 mb-4">Merci !</h2>
          <p className="text-istm-600 mb-8">Votre pré-inscription a été enregistrée. Nous vous contacterons bientôt.</p>
          <Button asChild href="/">Retour à l'accueil</Button>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Pré-inscription en ligne" href="/admissions/pre-inscription" showSubNav>
      <div className="max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl border border-istm-200 bg-white">
          <h2 className="text-2xl font-bold text-istm-900 mb-2">
            Formulaire de pré-inscription
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <label className="block text-sm font-medium text-istm-700 mb-1">Prénom</label>
              <input
                required
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.prenom}
                onChange={handleChange("prenom")}
                placeholder="Votre prénom"
              />
            </div>
            <div className="md:col-span-2">
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
              <label className="block text-sm font-medium text-istm-700 mb-1">Téléphone</label>
              <input
                required
                type="tel"
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.telephone}
                onChange={handleChange("telephone")}
                placeholder="+229 XX XX XX XX"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-istm-700 mb-1">Cycle</label>
              <select
                required
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setFormData({ ...formData, cycle: e.target.value, filiere: "" });
                }}
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.cycle}
              >
                <option value="">Sélectionner un cycle</option>
                {cycles.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-istm-700 mb-1">Filière visée</label>
              <select
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.filiere}
                onChange={handleChange("filiere")}
              >
                <option value="">Sélectionner une filière</option>
                {filieres(formData.cycle).map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-istm-700 mb-1">Message (optionnel)</label>
              <textarea
                rows={3}
                className="w-full px-4 py-2 rounded-xl border border-istm-200 text-istm-900 focus:ring-2 focus:ring-istm-500 focus:border-transparent"
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Votre message..."
              />
            </div>
          </div>

          <Button type="submit" variant="red" className="w-full">
            Envoyer ma pré-inscription
          </Button>
        </form>
      </div>
    </PageTemplate>
  );
}

import React from "react";