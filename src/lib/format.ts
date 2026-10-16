const rupiah = (n: number) =>
  'Rp ' + new Intl.NumberFormat('id-ID').format(n);

export function formatPriceRange(min: number, max: number): string {
  return min === max ? rupiah(min) : `${rupiah(min)} – ${rupiah(max)}`;
}
