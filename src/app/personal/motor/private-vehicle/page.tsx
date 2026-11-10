import type { Metadata } from "next";
import { ProductView } from "@/components/page/ProductView";
import { products } from "@/content/products";
import { productMetadata } from "@/lib/seo";

const product = products["personal-private-vehicle"];

export const metadata: Metadata = productMetadata(product);

export default function Page() {
  return <ProductView product={product} />;
}
