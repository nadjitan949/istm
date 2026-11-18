"use client";

import * as React from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";

export function ContactClient() {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Une erreur est survenue lors de l'envoi du message.");
      }

      setSubmitted(true);
      setFormData({ nom: "", email: "", sujet: "", message: "" });
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Impossible d'envoyer le message pour le moment."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <PageTemplate title="Message envoyé" href="/contact" showSubNav={false}>
        <div className="mx-auto max-w-2xl rounded-2xl border border-green-200 bg-green-50 px-8 py-16 text-center">
          <CheckCircle2 className="mx-auto mb-6 h-14 w-14 text-green-600" />
          <h2 className="mb-4 text-3xl font-bold text-istm-900">Merci pour votre message</h2>
          <p className="mb-8 text-istm-600">
            Notre équipe vous répondra dans les plus brefs délais.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">Retour à l'accueil</Button>
            <Button variant="outline" onClick={() => setSubmitted(false)}>
              Envoyer un autre message
            </Button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Contact" href="/contact" showSubNav={false}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-istm-200 bg-white p-8"
        >
          <div>
            <h2 className="mb-2 text-2xl font-bold text-istm-900">Nous contacter</h2>
            <p className="text-sm text-istm-600">
              Une question sur les admissions, les filières ou la vie scolaire ? Écrivez-nous.
            </p>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-istm-700">Nom</label>
              <input
                required
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.nom}
                onChange={handleChange("nom")}
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-istm-700">E-mail</label>
              <input
                required
                type="email"
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.email}
                onChange={handleChange("email")}
                placeholder="vous@example.com"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-istm-700">Sujet</label>
              <select
                required
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
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
              <label className="mb-1 block text-sm font-medium text-istm-700">Message</label>
              <textarea
                required
                rows={5}
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Votre message..."
              />
            </div>

            <Button type="submit" variant="red" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
            </Button>
          </div>
        </form>

        <div className="space-y-6">
          <div className="rounded-xl border border-istm-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-0.5 h-5 w-5 text-istm-600" />
              <div>
                <h3 className="mb-1 font-bold text-istm-900">Adresse</h3>
                <p className="text-sm text-istm-600">{site.address}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-istm-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-0.5 h-5 w-5 text-istm-600" />
              <div>
                <h3 className="mb-1 font-bold text-istm-900">Téléphone</h3>
                <p className="text-sm text-istm-600">{site.phone}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-istm-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <Mail className="mt-0.5 h-5 w-5 text-istm-600" />
              <div>
                <h3 className="mb-1 font-bold text-istm-900">E-mail</h3>
                <p className="text-sm text-istm-600">{site.email}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-istm-200 bg-white p-6">
            <div className="flex items-start gap-4">
              <Clock className="mt-0.5 h-5 w-5 text-istm-600" />
              <div>
                <h3 className="mb-1 font-bold text-istm-900">Horaires</h3>
                <p className="text-sm text-istm-600">{site.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}