import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('Semua');

  const categories = useMemo(
    () => ['Semua', ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCategory = category === 'Semua' || p.category === category;
      const matchQuery =
        !q || p.name.toLowerCase().includes(q) || p.caption.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  return (
    <section>
      <div className="mb-6">
        <h1 className="text-2xl font-bold sm:text-3xl">Katalog Produk Pilihan</h1>
        <p className="mt-1 text-sm text-slate-600">
          Rekomendasi produk lengkap dengan range harga dan link langsung ke online shop.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3">
        <label className="relative block">
          <span className="sr-only">Cari produk</span>
          <Search
            size={18}
            aria-hidden="true"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari produk..."
            className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
          />
        </label>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={
                'shrink-0 rounded-full border px-4 py-1.5 text-sm font-medium transition ' +
                (c === category
                  ? 'border-emerald-600 bg-emerald-600 text-white'
                  : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100')
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-slate-500">
          Produk tidak ditemukan.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
