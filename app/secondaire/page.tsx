import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Secondaire - ISTM",
  description: "Collège, lycée et séries A, C, D, G.",
};

export default function SecondairePage() {
  return (
    <PageTemplate title="Secondaire" href="/secondaire" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le secondaire de l'ISTM comprend le collège (6ème à 3ème) et le
          lycée (2nde à Terminale) avec les séries A, C, D et G. Nous
          préparons nos élèves aux examens d'État et à l'orientation
          post-bac.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl border border-istm-200 bg-white hover:shadow-lg transition-shadow group">
            <h3 className="text-lg font-bold text-istm-900 mb-2 group-hover:text-red-600 transition-colors">Collège</h3>
            <p className="text-sm text-istm-600 mb-4">De la 6ème à la 3ème. Préparation au BEPC.</p>
            <a href="/secondaire/college" className="text-sm font-medium text-istm-600 hover:text-red-600">
              Découvrir →
            </a>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-white hover:shadow-lg transition-shadow group">
            <h3 className="text-lg font-bold text-istm-900 mb-2 group-hover:text-red-600 transition-colors">Lycée</h3>
            <p className="text-sm text-istm-600 mb-4">Séries A, C, D, G. Préparation au Baccalauréat.</p>
            <a href="/secondaire/lycee" className="text-sm font-medium text-istm-600 hover:text-red-600">
              Découvrir →
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}