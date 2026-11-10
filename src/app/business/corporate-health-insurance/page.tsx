import type { Metadata } from "next";
import { ProductView } from "@/components/page/ProductView";
import { products } from "@/content/products";
import { productMetadata } from "@/lib/seo";

const product = products["corporate-health"];

export const metadata: Metadata = productMetadata(product, { noIndex: true });

export default function Page() {
  return <ProductView product={product} />;
}
