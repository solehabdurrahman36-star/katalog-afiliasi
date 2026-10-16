export interface Product {
  id: string;
  name: string;
  /** URL gambar penuh (https://...) atau path lokal, misal /images/produk-1.jpg */
  image: string;
  caption: string;
  category: string;
  /** Harga terendah dalam Rupiah */
  priceMin: number;
  /** Harga tertinggi dalam Rupiah. Samakan dengan priceMin jika harga tunggal. */
  priceMax: number;
  /** Nama toko, misal "Shopee", "Tokopedia" */
  shopName: string;
  /** Link afiliasi ke online shop */
  affiliateUrl: string;
}
