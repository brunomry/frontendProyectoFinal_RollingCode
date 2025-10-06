import { useProductsFilters } from "@/features/admin/hooks/useProductsFilters";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./filterCategories.css";

const FilterCategories = ({ categoria }) => {
  const [color, setColor] = useState(false);
  const { products } = useSelector((state) => state.products);
  const categories = ["Todos", ...new Set(products.map((p) => p.categoria))];
  const { filterCategory } = useProductsFilters();

  const filterByCategory = (e) => {
    filterCategory(e.target.value);
    setColor(true);
  };

  return (
    <article className="d-flex gap-2 filterCategoryContainer justify-content-center mt-2 px-2">
      {categories.map((category) => (
        <button
          className={`${
            category === "Todos" && categoria === ""
              ? "bg-outline-secondary"
              : color && categoria === category
              ? "bg-outline-secondary"
              : "bg-white"
          } text-secondary text-decoration-none px-4 py-2 rounded-5 border border-2`}
          key={category}
          value={category}
          onClick={filterByCategory}
        >
          {category}
        </button>
      ))}
    </article>
  );
};

export default FilterCategories;
