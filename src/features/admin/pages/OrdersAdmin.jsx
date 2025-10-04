import { Form } from "react-bootstrap";
import DataTable from "@/common/table/DataTable";
import OrderRowAdmin from "../components/table/OrderRowAdmin";
import HeadAdmin from "../components/HeadAdmin";

const OrdersAdmin = () => {
  return (
     <section className="container mainSection p-5 sectionTop">
      <HeadAdmin title="Gestión de Pedidos"></HeadAdmin>
      {/* <DataTable RowComponent={OrderRowAdmin}></DataTable> */}
    </section>
  )
}

export default OrdersAdmin;