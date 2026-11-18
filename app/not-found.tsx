import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page introuvable - ISTM",
};

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center py-20 text-center">
      <h1 className="text-6xl font-bold text-istm-600 mb-4">404</h1>
      <h2 className="text-2xl text-istm-900 mb-6">Page introuvable</h2>
      <p className="text-istm-600 mb-10 max-w-md">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <Button variant="red" href="/">
        Retour à l'accueil
      </Button>
    </main>
  );
}