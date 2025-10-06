import { useSelector } from "react-redux";
import "../styles/menu.css";
import { useEffect } from "react";
import CardProducto from "../components/CardProduct";
import FilterCategories from "@/common/filters/FilterCategories";
import { useProduct } from "../../admin/hooks/useProduct";
import FilterName from "@/common/filters/FilterName";

const Menu = () => {
  const { getProducts } = useProduct();
  const { products, filteredProducts, status, error } = useSelector(
    (state) => state.products
  );
  const { categoria } = useSelector((state)=> state.filters);

  const categories = [...new Set(products.map((p) => p.categoria))];

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="d-flex flex-column container align-items-center w-100">
      <FilterName></FilterName>
      <FilterCategories categoria={categoria}></FilterCategories>
     
      {(filteredProducts.length > 0) ? (
        <div className=" d-flex gap-4 flex-md-wrap w-100 mb-5">
          {
            categoria !== "" && (
              <div
                className="px-0 d-flex flex-column gap-3 container"
              >
                <div className="d-flex align-items-center">
                  <h2 className=" mt-4 mb-2 w-100">{categoria}</h2>
                </div>
              </div>
            )
          }
          {filteredProducts
            .filter((product) => product.estado === "Disponible")
            .map((product) => (
              <CardProducto key={product._id} product={product}></CardProducto>
            ))}
        </div>
      ) : (
        <article className="containerCategory d-flex pb-3 flex-wrap ">
          {categories &&
            categories.map((category) => (
              <div
                key={category}
                className="pb-5 d-flex flex-column gap-3 container"
              >
                <div className="d-flex align-items-center">
                  <h2 className=" mt-4 mb-2 w-100">{category}</h2>
                </div>
                <div className=" d-flex gap-4 flex-md-wrap w-100">
                  {products &&
                    products
                      .filter(
                        (product) =>
                          product.categoria == category &&
                          product.estado === "Disponible"
                      )
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
      )}
    </section>
  );
};

export default Menu;
