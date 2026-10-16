# Katalog Produk Afiliasi

Website katalog produk: gambar, caption, range harga, dan tombol link ke online shop.
Dibangun dengan React, TypeScript, Vite, Tailwind CSS, React Router, dan Lucide React.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka alamat yang tampil di terminal (biasanya http://localhost:5173).

## Menambah / mengubah produk

Edit `src/data/products.ts`. Satu produk = satu objek:

```ts
{
  id: 'produk-unik',
  name: 'Nama Produk',
  image: '/images/produk-unik.jpg',   // file di folder public/images, atau URL https://...
  caption: 'Deskripsi singkat produk.',
  category: 'Elektronik',
  priceMin: 150000,
  priceMax: 250000,                    // samakan dengan priceMin jika harga tunggal
  shopName: 'Shopee',
  affiliateUrl: 'https://link-afiliasi-kamu',
}
```

Letakkan file gambar di `public/images/`. Ganti semua data contoh dengan produk aslimu.

## Deploy ke Cloudflare Pages

1. Unggah proyek ini ke repositori GitHub.
2. Di Cloudflare: Workers & Pages → Create → Pages → Connect to Git, pilih repositori.
3. Pengaturan build:
   - Framework preset: Vite (atau None)
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Setelah online di `namaproyek.pages.dev`, hubungkan domain bensyarif.site lewat
   Custom domains di proyek Pages tersebut.

File `public/_redirects` sudah disertakan supaya routing React Router tidak error 404.
