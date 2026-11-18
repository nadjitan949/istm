import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Clubs et activités - ISTM",
  description: "Clubs scientifiques, culturels, sportifs.",
};

export default function ClubsPage() {
  return (
    <PageTemplate title="Clubs et activités" href="/vie-scolaire/clubs" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Participez à la vie de l'établissement à travers nos clubs et
          activités périscolaires.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Club scientifique", desc: "Expériences et découvertes" },
            { title: "Club littéraire", desc: "Lecture et écriture" },
            { title: "Club informatique", desc: "Coding et numérique" },
            { title: "Club théâtre", desc: "Expression artistique" },
            { title: "Club musique", desc: "Chant et instruments" },
            { title: "Club écologie", desc: "Protection de l'environnement" },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-xl border border-istm-200 bg-white text-center">
              <h3 className="text-lg font-bold text-istm-900 mb-2">{c.title}</h3>
              <p className="text-sm text-istm-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}