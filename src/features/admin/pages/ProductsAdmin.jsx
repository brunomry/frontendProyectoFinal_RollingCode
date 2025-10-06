import "../styles/admin.css";
import DataTable from "@/common/table/DataTable";
import { useSelector } from "react-redux";
import { colsTable } from "@/helpers/colsTable";
import { useEffect } from "react";
import ProductRowAdmin from "../components/table/ProductRowAdmin";
import HeadAdmin from "../components/HeadAdmin";
import { useProduct } from "../hooks/useProduct";
import FilterName from "../../../common/filters/FilterName";
import FilterCategories from "../../../common/filters/FilterCategories";

const ProductsAdmin = () => {
  const { products, filteredProducts } = useSelector((state) => state.products);
  const { categoria } = useSelector((state) => state.filters);

  const { getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="container mainSection p-5 sectionTop">
      <HeadAdmin title="Gestión de Menú"></HeadAdmin>
      <div className="d-flex flex-column justify-content-center mb-4">
        <FilterName></FilterName>
        <FilterCategories categoria={categoria} />
      </div>
      {filteredProducts && filteredProducts.length > 0 ? (
        <DataTable
          columns={colsTable.products}
          data={filteredProducts}
          RowComponent={ProductRowAdmin}
        ></DataTable>
      ) : (
        <DataTable
          columns={colsTable.products}
          data={products}
          RowComponent={ProductRowAdmin}
        ></DataTable>
      )}
    </section>
  );
};

export default ProductsAdmin;
