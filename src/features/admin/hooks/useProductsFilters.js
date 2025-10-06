import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  setFilters,
  setNombre,
  setCategoria,
} from "../../filters/filtersSlice";
import {
  fetchProducts,
  filterProducts,
} from "../../products/slices/actions/productsActions";
import { clearFilteredProducts } from "../../products/slices/productsSlice";

export const useProductsFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const applyFilters = (currentFilters) => {
    dispatch(setFilters(currentFilters));

    const hasOtherFilters =
      currentFilters.category || currentFilters.status || currentFilters.price;

    if (currentFilters.search.length >= 3 || hasOtherFilters) {
      dispatch(filterProducts(currentFilters));
    }
  };

  const filterSearch = (value) => {
    dispatch(setNombre(value));

    if (value.length >= 3) {
      dispatch(filterProducts({ nombre: value }));
    } else if (value.length === 0) {
      clearAllFilters();
    }
  };

  const filterCategory = (value) => {
    dispatch(setCategoria(value));
    dispatch(filterProducts({ categoria: value }));
  };

  const clearAllFilters = () => {
    dispatch(clearFilters());
    dispatch(clearFilteredProducts());
    dispatch(fetchProducts());
  };

  return { applyFilters, filterSearch, clearAllFilters, filterCategory };
};
