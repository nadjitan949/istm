"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { Button } from "@/components/ui/Button";

const CYCLES = ["Primaire", "Secondaire", "Supérieur"] as const;

const FILIERES_BY_CYCLE: Record<(typeof CYCLES)[number], string[]> = {
  Primaire: ["CP1-CP2", "CE1-CE2", "CM1-CM2"],
  Secondaire: ["Collège", "Lycée (A, C, D, G)"],
  Supérieur: ["BTS", "BT", "Licence", "Master"],
};

export function PreInscriptionClient() {
  const [submitted, setSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [formData, setFormData] = React.useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    cycle: "",
    filiere: "",
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
      const response = await fetch("/api/pre-inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("La pré-inscription n'a pas pu être envoyée.");
      }

      setSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Une erreur est survenue pendant l'envoi du formulaire."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableFilieres = formData.cycle
    ? FILIERES_BY_CYCLE[formData.cycle as keyof typeof FILIERES_BY_CYCLE] ?? []
    : [];

  if (submitted) {
    return (
      <PageTemplate
        title="Pré-inscription envoyée"
        href="/admissions/pre-inscription"
        showSubNav={false}
      >
        <div className="mx-auto max-w-2xl rounded-2xl border border-green-200 bg-green-50 px-8 py-16 text-center">
          <CheckCircle2 className="mx-auto mb-6 h-14 w-14 text-green-600" />
          <h2 className="mb-4 text-3xl font-bold text-istm-900">Merci !</h2>
          <p className="mb-8 text-istm-600">
            Votre pré-inscription a bien été enregistrée. Notre équipe vous contactera bientôt.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">Retour à l'accueil</Button>
            <Button variant="outline" href="/contact">
              Nous contacter
            </Button>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Pré-inscription en ligne" href="/admissions/pre-inscription" showSubNav>
      <div className="max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-xl border border-istm-200 bg-white p-8"
        >
          <div>
            <h2 className="mb-2 text-2xl font-bold text-istm-900">Formulaire de pré-inscription</h2>
            <p className="text-sm text-istm-600">
              Complétez ce formulaire pour être recontacté par le service admissions.
            </p>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
              <label className="mb-1 block text-sm font-medium text-istm-700">Prénom</label>
              <input
                required
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.prenom}
                onChange={handleChange("prenom")}
                placeholder="Votre prénom"
              />
            </div>

            <div className="md:col-span-2">
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
              <label className="mb-1 block text-sm font-medium text-istm-700">Téléphone</label>
              <input
                required
                type="tel"
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.telephone}
                onChange={handleChange("telephone")}
                placeholder="+229 XX XX XX XX"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-istm-700">Cycle</label>
              <select
                required
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.cycle}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    cycle: event.target.value,
                    filiere: "",
                  }))
                }
              >
                <option value="">Sélectionner un cycle</option>
                {CYCLES.map((cycle) => (
                  <option key={cycle} value={cycle}>
                    {cycle}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-istm-700">Filière visée</label>
              <select
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.filiere}
                onChange={handleChange("filiere")}
                disabled={!formData.cycle}
              >
                <option value="">Sélectionner une filière</option>
                {availableFilieres.map((filiere) => (
                  <option key={filiere} value={filiere}>
                    {filiere}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-1 block text-sm font-medium text-istm-700">
                Message (optionnel)
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-istm-200 px-4 py-2 text-istm-900 focus:border-transparent focus:ring-2 focus:ring-istm-500"
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Votre message..."
              />
            </div>
          </div>

          <Button type="submit" variant="red" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma pré-inscription"}
          </Button>
        </form>
      </div>
    </PageTemplate>
  );
}