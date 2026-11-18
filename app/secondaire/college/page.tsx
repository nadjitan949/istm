import { PageTemplate } from "@/components/layout/PageTemplate";

export const metadata = {
  title: "Collège - ISTM",
  description: "De la 6ème à la 3ème.",
};

export default function CollegePage() {
  return (
    <PageTemplate title="Collège" href="/secondaire/college" showSubNav>
      <div className="space-y-8">
        <p className="text-istm-600 leading-relaxed text-lg">
          Le collège de l'ISTM accueille les élèves de la 6ème à la 3ème. Nous
          leur offrons un encadrement rigoureux et une préparation solide au
          BEPC.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold text-istm-900 mb-4">Classes</h3>
            <ul className="list-disc list-inside text-istm-600 space-y-2">
              <li>6ème</li>
              <li>5ème</li>
              <li>4ème</li>
              <li>3ème</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-istm-200 bg-istm-50">
            <h3 className="text-lg font-bold text-istm-900 mb-2">BEPC</h3>
            <p className="text-sm text-istm-600">
              Une préparation intensive est proposée aux élèves de 3ème pour
              réussir le Brevet d'Étude du Premier Cycle.
            </p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}