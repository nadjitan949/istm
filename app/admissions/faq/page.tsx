import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import { PageTemplate } from "@/components/layout/PageTemplate";
import { Accordion } from "@/components/ui/Accordion";
import { faq } from "@/data/faq";

export const metadata = {
  title: "FAQ - ISTM",
  description: "Questions fréquentes sur l'admission.",
};

export default function FaqPage() {
  const items = faq.map((item, index) => ({
    id: `faq-${index + 1}`,
    title: item.question,
    content: item.reponse,
  }));

  return (
    <PageTemplate title="FAQ" href="/admissions/faq" showSubNav>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-istm-600" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-istm-600">
                Questions fréquentes
              </span>
            </div>
            <p className="text-lg leading-8 text-istm-700">
              Vous avez des questions sur l&apos;inscription à l&apos;ISTM ? Consultez notre FAQ.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-istm-200">
            <Image
              src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
              alt="Service des admissions de l'ISTM"
              width={800}
              height={560}
              className="h-48 w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 35vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-istm-900/40 via-transparent to-transparent" />
          </div>

          <div className="rounded-lg border border-istm-200 border-l-2 border-l-red-600 bg-white p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-istm-100 text-istm-600">
                <MessageCircleQuestion className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-istm-900">Une autre question ?</p>
                <Link
                  href="/contact"
                  className="group mt-1.5 inline-flex items-center gap-2 text-sm font-medium text-istm-700 transition-colors hover:text-red-600"
                >
                  Nous contacter
                  <ArrowRight className="h-4 w-4 text-istm-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-red-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 flex items-end justify-between gap-6 border-b border-istm-200 pb-5">
            <h2 className="text-xl font-semibold text-istm-900">Vos questions</h2>
            <span className="text-sm font-medium tabular-nums text-istm-400">
              {String(items.length).padStart(2, "0")} questions
            </span>
          </div>
          <Accordion items={items} />
        </div>
      </div>
    </PageTemplate>
  );
}