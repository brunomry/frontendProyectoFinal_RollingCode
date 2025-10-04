import { useDispatch, useSelector } from "react-redux";
import { clearFilters, setFilters, setSearch } from "../../filters/filtersSlice";
import { filterProducts } from "../../products/slices/actions/productsActions";

export const useProductsFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);

  const applyFilters = (currentFilters) => {
    dispatch(setFilters(currentFilters));

    const hasOtherFilters = currentFilters.category || currentFilters.status || currentFilters.price;

    if (currentFilters.search.length >= 3 || hasOtherFilters) {
      dispatch(filterProducts(currentFilters));
    }
  };

  const filterSearch = (value) => {
    dispatch(setSearch(value));
    
    if (value.length >= 3) {
      dispatch(filterProducts({value}));
    }
  }

  const clearAllFilters = () => {
    dispatch(clearFilters());
    dispatch(filterProducts({}));
  };

  return { applyFilters, filterSearch, clearAllFilters };
};
