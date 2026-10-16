import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
        <Link to="/" className="inline-flex items-center gap-2 text-lg font-bold">
          <ShoppingBag className="text-emerald-600" size={22} aria-hidden="true" />
          Katalog Pilihan
        </Link>
      </div>
    </header>
  );
}
