import { useSelector } from "react-redux";
import "../styles/menu.css";
import { useEffect } from "react";
import CardProducto from "../components/CardProduct";
import FilterCategories from "../components/FilterCategories";
import { useProduct } from "../../admin/hooks/useProduct";
import Filters from "../../../common/filters/Filters";

const Menu = () => {
  const { getProducts } = useProduct();
  const { products, status, error } = useSelector((state) => state.products);
  const categories = [...new Set(products.map((p) => p.categoria))];

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="d-flex flex-column container align-items-center justify-content-center">
      <FilterCategories categories={categories}></FilterCategories>
      <Filters></Filters>
      <article className="containerCategory d-flex pb-3 flex-wrap ">
        {categories &&
          categories.map((category) => (
            <div
              key={category}
              className="pb-5 d-flex flex-column gap-3 container"
            >
              <div className="d-flex align-items-center" id={category}>
                <h2 className=" mt-4 mb-2 w-100">{category}</h2>
              </div>
              <div className=" d-flex gap-4 flex-md-wrap w-100">
                {products &&
                  products
                    .filter((product) => product.categoria == category && product.estado === "Disponible")
                    .map((product) => (
                      <CardProducto
                        key={product._id}
                        product={product}
                      ></CardProducto>
                    ))}
              </div>
            </div>
          ))}
      </article>
    </section>
  );
};

export default Menu;
