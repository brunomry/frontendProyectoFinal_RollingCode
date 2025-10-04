import "../styles/admin.css";
import DataTable from "@/common/table/DataTable";
import { useSelector } from "react-redux";
import { colsTable } from "@/helpers/colsTable";
import { useEffect } from "react";
import ProductRowAdmin from "../components/table/ProductRowAdmin";
import HeadAdmin from "../components/HeadAdmin";
import { useProduct } from "../hooks/useProduct";
import Filters from "../../../common/filters/Filters";

const ProductsAdmin = () => {
  const { products, filteredProducts } = useSelector((state) => state.products);
  const { search } = useSelector((state) => state.filters);

  const { getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="container mainSection p-5 sectionTop">
      <HeadAdmin title="Gestión de Menú"></HeadAdmin>
      <Filters></Filters>
      {filteredProducts.length > 0 ? (
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
