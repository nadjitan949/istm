export default function Loading() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-istm-600 border-t-transparent" />
      <p className="mt-4 text-istm-600 font-medium">Chargement…</p>
    </div>
  );
}