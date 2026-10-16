import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-2 text-slate-600">Alamat yang kamu buka tidak tersedia.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        Kembali ke katalog
      </Link>
    </div>
  );
}
