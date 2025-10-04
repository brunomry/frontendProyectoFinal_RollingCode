import { Link } from "react-router-dom";
import "../styles/my-order.css";

const MyOrder = () => {
  return (
    <div className="bannerPedido d-flex flex-column justify-content-center">
      <div className="bannerPedidoContent">
        <p className="text-center ">Aún no agregaste ningún menú a tu Pedido</p>
        <div className="text-center py-3">
          <Link
            to="/menu"
            className=" btn rounded-5 px-4 fw-bold btn-warning py-2"
          >
            ver Carta
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
