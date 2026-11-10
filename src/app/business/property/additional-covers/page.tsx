import type { Metadata } from "next";
import { ProductView } from "@/components/page/ProductView";
import { products } from "@/content/products";

const product = products["business-property-additional"];

export const metadata: Metadata = {
  title: product.title,
  description: product.summary,
};

export default function Page() {
  return <ProductView product={product} />;
}
