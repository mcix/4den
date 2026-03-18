import { Link } from '@/i18n/navigation';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium text-slate-500">404</p>
      <h1 className="mt-3 text-2xl font-semibold text-slate-900">
        Pagina niet gevonden
      </h1>
      <p className="mt-3 text-sm text-slate-600">
        De pagina die je zoekt bestaat niet.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        Terug naar home
      </Link>
    </div>
  );
}
