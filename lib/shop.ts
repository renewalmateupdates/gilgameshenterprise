/**
 * Links to the Gilgamesh Enterprise shop. Each carries utm_source and a
 * utm_medium naming where on this site it sits, so Shopify's reports show
 * which spot sends buyers.
 */
const SHOP = 'https://shop.gilgameshenterprise.com'

export function shopUrl(medium: string, path = '/'): string {
  const q = new URLSearchParams({ utm_source: 'gilgameshenterprise', utm_medium: medium })
  return `${SHOP}${path}?${q}`
}
