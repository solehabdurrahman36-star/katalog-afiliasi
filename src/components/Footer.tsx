export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500">
        <p>
          Beberapa link di situs ini adalah link afiliasi. Jika kamu membeli
          lewat link tersebut, kami bisa mendapat komisi tanpa biaya tambahan
          untukmu. Harga dapat berubah sewaktu-waktu di toko terkait.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} bensyarif.site</p>
      </div>
    </footer>
  );
}
