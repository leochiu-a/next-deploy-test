import { GetServerSidePropsContext } from "next";

import ProductCard from "../../components/ProductCard";
import { Product } from "../../fake-data";
import { PageTitle, ProductGallery } from "./index.style";

interface HomeProps {
  products: Product[];
}

const Home = ({ products }: HomeProps) => {
  return (
    <>
      <PageTitle>商品列表 React Refresh</PageTitle>
      <ProductGallery>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGallery>
    </>
  );
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const res = await fetch(`https://fakestoreapi.com/products`);

  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default Home;
