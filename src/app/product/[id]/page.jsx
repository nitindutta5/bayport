import AlsoViewedCarousel from "@/app/components/AlsoViewedCarousal";
import ProductDetails from "@/app/components/ProductDetails";


export default async function ProductPage(props) {
  const params = await props.params;
  return (
    <div className="container mx-auto">
      <ProductDetails productId={params.id} />
      <AlsoViewedCarousel/>
    </div>
  );
}
