import { useDispatch } from "react-redux";
import {
  createProduct,
  deleteProduct,
  fetchProduct,
  fetchProducts,
  updateProduct,
} from "../../products/slices/actions/productsActions";

export const useProduct = () => {
  const dispatch = useDispatch();

  const getProducts = async () => {
    try {
      await dispatch(fetchProducts()).unwrap();
    } catch (error) {}
  };

  const getProduct = async (id) => {
    try {
      const result = await dispatch(fetchProduct(id)).unwrap();
      return result.data;
    } catch (error) {
      return null;
    }
  };

  const postProduct = async (product) => {
    try {
      await dispatch(createProduct(product)).unwrap();
    } catch (error) {
      throw error;
    }
  };

  const putProduct = async (product, id) => {
    try {
      await dispatch(updateProduct({ id: id, data: product })).unwrap();
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  };

  const deletProduct = async (id) => {
    try {
      await dispatch(deleteProduct(id)).unwrap();
      dispatch(fetchProducts());
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  };

  return { getProducts, getProduct, postProduct, putProduct, deletProduct };
};
