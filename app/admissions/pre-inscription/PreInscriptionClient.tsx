"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleHelp, ListOrdered, Wallet } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { images } from "@/data/images";

const CYCLES = ["Primaire", "Secondaire", "Supérieur"] as const;

const FILIERES_BY_CYCLE: Record<(typeof CYCLES)[number], string[]> = {
  Primaire: ["CP1-CP2", "CE1-CE2", "CM1-CM2"],
  Secondaire: ["Collège", "Lycée (A, C, D, G)"],
  Supérieur: ["BTS", "BT", "Licence", "Master"],
};

const inputClass =
  "w-full rounded-md border border-istm-200 bg-white px-4 py-2.5 text-sm text-istm-900 placeholder:text-istm-400 transition-colors duration-200 hover:border-istm-300 focus:border-istm-600 focus:outline-none focus:ring-2 focus:ring-istm-600/20 disabled:cursor-not-allowed disabled:bg-istm-50 disabled:text-istm-400";

const labelClass = "mb-1.5 block text-sm font-medium text-istm-700";

const liens = [
  { label: "Procédure d'inscription", href: "/admissions/procedure", icon: ListOrdered },
  { label: "Frais de scolarité", href: "/admissions/frais", icon: Wallet },
  { label: "Questions fréquentes", href: "/admissions/faq", icon: CircleHelp },
];

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
        <div className="mx-auto max-w-2xl rounded-lg border border-istm-200 border-t-2 border-t-red-600 bg-white px-8 py-14 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-istm-100 text-istm-600">
            <CheckCircle2 className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold text-istm-900">Merci !</h2>
          <p className="mt-3 text-base leading-7 text-istm-600">
            Votre pré-inscription a bien été enregistrée. Notre équipe vous contactera bientôt.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-istm-200 px-6 py-3 text-sm font-medium text-istm-700 transition-colors duration-200 hover:border-istm-400 hover:text-istm-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-istm-600 focus-visible:ring-offset-2"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title="Pré-inscription en ligne" href="/admissions/pre-inscription" showSubNav>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] xl:gap-12">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-lg border border-istm-200 bg-white p-6 md:p-8"
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Admission
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-istm-900">
              Formulaire de pré-inscription
            </h2>
            <p className="mt-2 text-sm leading-6 text-istm-600">
              Complétez ce formulaire pour être recontacté par le service admissions.
            </p>
          </div>

          <div aria-live="polite">
            {error ? (
              <div className="rounded-md border border-red-200 border-l-2 border-l-red-600 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="pre-nom" className={labelClass}>
                Nom
              </label>
              <input
                id="pre-nom"
                required
                autoComplete="family-name"
                className={inputClass}
                value={formData.nom}
                onChange={handleChange("nom")}
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="pre-prenom" className={labelClass}>
                Prénom
              </label>
              <input
                id="pre-prenom"
                required
                autoComplete="given-name"
                className={inputClass}
                value={formData.prenom}
                onChange={handleChange("prenom")}
                placeholder="Votre prénom"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="pre-email" className={labelClass}>
                E-mail
              </label>
              <input
                id="pre-email"
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
              <label htmlFor="pre-telephone" className={labelClass}>
                Téléphone
              </label>
              <input
                id="pre-telephone"
                required
                type="tel"
                autoComplete="tel"
                className={inputClass}
                value={formData.telephone}
                onChange={handleChange("telephone")}
                placeholder="+229 XX XX XX XX"
              />
            </div>

            <div>
              <label htmlFor="pre-cycle" className={labelClass}>
                Cycle
              </label>
              <select
                id="pre-cycle"
                required
                className={inputClass}
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

            <div className="md:col-span-2">
              <label htmlFor="pre-filiere" className={labelClass}>
                Filière visée
              </label>
              <select
                id="pre-filiere"
                className={inputClass}
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
              <label htmlFor="pre-message" className={labelClass}>
                Message <span className="font-normal text-istm-400">(optionnel)</span>
              </label>
              <textarea
                id="pre-message"
                rows={4}
                className={`${inputClass} resize-y`}
                value={formData.message}
                onChange={handleChange("message")}
                placeholder="Votre message..."
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma pré-inscription"}
          </button>
        </form>

        <div className="space-y-5 xl:sticky xl:top-28 xl:self-start">
          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src={images.presentation}
              alt="Accueil des futurs élèves et étudiants de l'ISTM"
              width={800}
              height={500}
              className="h-48 w-full object-cover"
              sizes="(max-width: 1280px) 100vw, 30vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>

          <div className="rounded-lg border border-istm-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Avant de commencer
              </h3>
            </div>
            <ul className="mt-4 divide-y divide-istm-100 border-y border-istm-100">
              {liens.map((l) => {
                const Icon = l.icon;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group flex items-center gap-3 py-3 text-sm font-medium text-istm-700 transition-colors hover:text-istm-900"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="flex-1">{l.label}</span>
                      <ArrowRight className="h-4 w-4 text-istm-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}