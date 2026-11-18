import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Lycée - ISTM",
  description: "Séries A, C, D, G et Baccalauréat.",
};

export default function LyceePage() {
  return (
    <PageTemplate title="Lycée" href="/secondaire/lycee" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le lycée de l'ISTM propose les séries A, C, D et G. Nos étudiants
          sont préparés au Baccalauréat et à l'orientation vers l'enseignement
          supérieur.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-istm-900 mb-4">Séries proposées</h3>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              <li><strong>Série A :</strong> Lettres et langues</li>
              <li><strong>Série C :</strong> Mathématiques et sciences physiques</li>
              <li><strong>Série D :</strong> Sciences de la vie et de la terre</li>
              <li><strong>Série G :</strong> Sciences de gestion et économie</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">Baccalauréat</h3>
            <p className="text-sm text-istm-600">
              Une préparation complète aux épreuves du Bac, avec des examens
              blancs et un suivi personnalisé.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}