import { useDispatch, useSelector } from "react-redux";
import "./styles/menu.css";
import { useEffect } from "react";
import { fetchProducts } from "../../slices/actions/productsActions";
import CardProducto from "./components/CardProduct";

const Menu = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state) => state.products);
  const categories = [...new Set(products.map((p) => p.categoria))];

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-center pt-4 pb-3 pe-2 position-sticky top-0 mb-5 menuCategoryContainer">
        {categories.map((category) => (
          <a
            className="link-dark text-decoration-none btn btn-warning me-2"
            href={`#${category}`}
            key={category}
          >
            {category}
          </a>
        ))}
      </div>
      <div className="containerCategory d-flex pb-3 flex-wrap ">
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
                    .filter((product) => product.categoria == category)
                    .map((product) => (
                      <CardProducto
                        key={product._id}
                        product={product}
                      ></CardProducto>
                    ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Menu;
