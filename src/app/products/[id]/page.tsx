import ProductDetails from "@/components/ProductDetails";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  console.log("Route Params:", resolvedParams); // Log para depurar los parámetros dinámicos
  return <ProductDetails params={resolvedParams} />;
}
