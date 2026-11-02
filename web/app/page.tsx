import { getClubes } from "@/src/services/clubService";
import ClubCard from "@/src/components/clubes/ClubCard";

export default async function Home() {
  try {
    const clubes = await getClubes();

    return (
      <main className="min-h-screen bg-gray-50 px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Clubes</h1>

          {clubes.length === 0 ? (
            <p className="text-gray-600">No hay clubes disponibles.</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {clubes.map(function (club) {
                return <ClubCard key={club.id} club={club} />;
              })}
            </div>
          )}
        </div>
      </main>
    );
  } catch {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <div className="rounded-lg border border-red-200 bg-white p-6 text-center">
          <h1 className="mb-2 text-xl font-semibold text-red-700">
            No se pudieron cargar los clubes
          </h1>

          <p className="text-gray-600">
            Verificá que el servidor esté funcionando e intentá nuevamente.
          </p>
        </div>
      </main>
    );
  }
}
