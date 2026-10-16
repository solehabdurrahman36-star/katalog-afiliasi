import type { Product } from '../types';

/**
 * Tambah produk dengan menambah satu objek baru di array ini.
 * Ganti `image` dengan URL/path gambar produk dan `affiliateUrl`
 * dengan link afiliasi kamu. Data di bawah hanya contoh.
 */
export const products: Product[] = [
  {
    id: 'contoh-1',
    name: 'Contoh Produk Satu',
    image: '/images/placeholder.svg',
    caption:
      'Deskripsi singkat produk: kelebihan utama, bahan, dan alasan kenapa produk ini layak dibeli.',
    category: 'Elektronik',
    priceMin: 150000,
    priceMax: 250000,
    shopName: 'Shopee',
    affiliateUrl: 'https://example.com/link-afiliasi-1',
  },
  {
    id: 'contoh-2',
    name: 'Contoh Produk Dua',
    image: '/images/placeholder.svg',
    caption: 'Caption produk kedua. Tulis 1–2 kalimat yang menarik dan jelas.',
    category: 'Rumah Tangga',
    priceMin: 75000,
    priceMax: 120000,
    shopName: 'Tokopedia',
    affiliateUrl: 'https://example.com/link-afiliasi-2',
  },
  {
    id: 'contoh-3',
    name: 'Contoh Produk Tiga',
    image: '/images/placeholder.svg',
    caption: 'Caption produk ketiga dengan harga tunggal, tanpa range.',
    category: 'Fashion',
    priceMin: 99000,
    priceMax: 99000,
    shopName: 'Lazada',
    affiliateUrl: 'https://example.com/link-afiliasi-3',
  },
  {
    id: 'contoh-4',
    name: 'Contoh Produk Empat',
    image: '/images/placeholder.svg',
    caption: 'Caption produk keempat. Ganti dengan deskripsi produk aslimu.',
    category: 'Elektronik',
    priceMin: 300000,
    priceMax: 450000,
    shopName: 'Shopee',
    affiliateUrl: 'https://example.com/link-afiliasi-4',
  },
];
