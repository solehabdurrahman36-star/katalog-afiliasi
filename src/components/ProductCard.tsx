import { ExternalLink } from 'lucide-react';
import type { Product } from '../types';
import { formatPriceRange } from '../lib/format';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-square w-full bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-emerald-600">
          {product.category}
        </span>
        <h2 className="text-base font-semibold leading-snug">{product.name}</h2>
        <p className="line-clamp-3 text-sm text-slate-600">{product.caption}</p>

        <p className="mt-auto pt-2 text-lg font-bold text-slate-900">
          {formatPriceRange(product.priceMin, product.priceMax)}
        </p>

        <a
          href={product.affiliateUrl}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Beli di {product.shopName}
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
