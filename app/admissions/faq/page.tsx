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
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Vous avez des questions sur l'inscription à l'ISTM ? Consultez notre
          FAQ.
        </p>
        <Accordion items={items} />
      </div>
    </PageTemplate>
  );
}