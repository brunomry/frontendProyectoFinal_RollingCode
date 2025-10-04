import { Button } from "react-bootstrap";

const OrderRowAdmin = ({ row }) => {
  return (
    <tr>
      <td>nombre cliente</td>
      <td>{row.fecha}</td>
      <td>${row.monto}</td>
      <td>
        <ul>
          {row.productos.map((producto) => (
            <li key={producto.id}>
              {producto.producto.nombre + " X" + producto.cantidad}
            </li>
          ))}
        </ul>
        <p>Metodo del envio:</p>
      </td>
      <td>
        <Button className={`me-lg-2 btn fw-bold w-100`}>{row.estado}</Button>
      </td>
    </tr>
  );
};

export default OrderRowAdmin;
