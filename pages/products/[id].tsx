import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

import { Product as ProductType } from "../../fake-data";
import ProductCard from "../../components/ProductCard";
import { PageTitle, ProductContainer, BackLink } from "./[id].style";

const fetcher = (url: string, id: string) => {
  return fetch(`https://fakestoreapi.com${url}/${id}`).then((res) =>
    res.json()
  );
};

const Product = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: product, error } = useSWR<ProductType>(
    id ? ["/products", id] : null,
    fetcher
  );

  if (!product || error) return <div>loading</div>;

  return (
    <>
      <PageTitle>商品詳細頁面</PageTitle>
      <BackLink>
        <Link href="/products">回產品列表</Link>
      </BackLink>
      <ProductContainer>
        <ProductCard product={product} all />
      </ProductContainer>
    </>
  );
};

export default Product;
