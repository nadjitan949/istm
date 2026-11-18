"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { images } from "@/data/images";

export const Presentation = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-istm-900 mb-6">
              Présentation de l'ISTM
            </h2>
            <p className="text-istm-600 leading-relaxed mb-8">
              L'Institut Supérieur de Technologies et de Management (ISTM) est
              un établissement d'enseignement privé qui accueille des élèves
              et des étudiants du primaire au supérieur. Depuis sa création,
              l'ISTM s'engage à offrir une formation de qualité, alliant
              excellence académique et ouverture sur le monde professionnel.
            </p>
            <p className="text-istm-600 leading-relaxed mb-8">
              Notre pédagogie repose sur des valeurs de rigueur, de travail et
              d'insertion professionnelle. Nous préparons nos apprenants à
              réussir aux examens d'État et à s'insérer durablement dans la vie
              active.
            </p>
            <Link href="/ecole/presentation">
              <Button variant="red" asChild>
                <ArrowRight className="h-5 w-5 mr-2" /> En savoir plus
              </Button>
            </Link>
          </div>
          <div className="relative">
            <Image
              src={images.presentation}
              alt="Campus de l'ISTM"
              className="rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              width={800}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};