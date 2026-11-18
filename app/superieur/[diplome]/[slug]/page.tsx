import { PageTemplate } from "@/components/layout/PageTemplate";
import { getFiliereBySlug } from "@/data/filieres";

export const metadata = {
  title: "Filière - ISTM",
};

export default function FilierePage({
  params,
}: {
  params: { diplome: string; slug: string };
}) {
  const filiere = getFiliereBySlug(params.diplome, params.slug);

  if (!filiere) {
    return (
      <PageTemplate title="Filière non trouvée" href="/superieur" showSubNav={false}>
        <p className="text-istm-600">Filière non trouvée.</p>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate title={filiere.nom} href={`/superieur/${filiere.diplome.toLowerCase()}/${filiere.slug}`} showSubNav>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-istm-900 mb-2">{filiere.nom}</h1>
            <span className="text-xs font-medium text-red-600 uppercase tracking-wider mb-4 block">
              {filiere.diplome}
            </span>
            <p className="text-istm-600 leading-relaxed text-lg">{filiere.description}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-istm-100 text-istm-700 rounded-full text-xs font-medium">
                {filiere.duree}
              </span>
            </div>
          </div>
          <div className="w-full md:w-80 hidden md:block">
            <img
              src={filiere.image}
              alt={filiere.nom}
              className="w-full h-48 object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-istm-900 mb-4">Conditions d'accès</h2>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              {filiere.conditions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-istm-900 mb-4">Compétences visées</h2>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              {filiere.competences.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-bold text-istm-900 mb-4">Débouchés</h2>
        <ul className="list-disc list-inside text-istm-600 space-y-2">
          {filiere.debouches.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-istm-900 mb-4">Programme par semestre</h2>
        <div className="space-y-6">
          {filiere.programme.map((semestre) => (
            <div key={semestre.numero} className="p-4 rounded-xl border border-istm-200 bg-white">
              <h3 className="text-sm font-bold text-istm-600 uppercase tracking-wider mb-2">
                Semestre {semestre.numero}
              </h3>
              <ul className="list-disc list-inside text-sm text-istm-600 space-y-1">
                {semestre.modules.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}