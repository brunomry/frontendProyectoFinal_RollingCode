import "../../styles/menu.css";
import { Container, Form, Row } from "react-bootstrap";
import CardProducto from "./product/CardProducto";
import { useState, useEffect } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import pdf from "../../assets/Menú_Ambiente_Bohemio.pdf";

const Menu = ({ agregarProductoCarrito, productosCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  const filtrarProductosPorCategoria = (categoria) =>
    productos.filter(
      (producto) => producto.categoria.toLowerCase() === categoria.toLowerCase()
    );

  const handleDownloadPDF = () => {
    const urlPDF = pdf;
    window.open(urlPDF, "_blank");
  };

  const filtrarProductosPorNombre = () => {
    const inputBusqueda = busqueda.toLowerCase().trim();

    if (inputBusqueda === "") {
      setProductosFiltrados([]);
    } else {
      const productosFiltrados = productos.filter((producto) =>
        producto.nombre.toLowerCase().startsWith(inputBusqueda)
      );
      setProductosFiltrados(productosFiltrados);
    }
  };

  useEffect(() => {
    filtrarProductosPorNombre();
  }, [busqueda]);

  return (
    <>
      <section className="bannerMenu d-flex flex-column justify-content-center align-items-center">
        <h1 className="title pb-3">Nuestro Menú</h1>
        <p className="fw-bold bannerText pb-3">
          ¡Descubre nuestro festín de sabores!
        </p>
        <button
          className="bannerBTN text-center py-3 text-decoration-none fw-bold"
          onClick={handleDownloadPDF}
        >
          DESCARGAR MENÚ
        </button>
      </section>
      <div className="border-bottom border-secondary d-flex justify-content-center py-3 pe-2 menuCategoryContainer position-sticky top-0">
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#pizzas"
        >
          Pizzas
        </a>
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#hamburguesas"
        >
          Hamburguesas
        </a>
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#pastas"
        >
          Pastas
        </a>
        <a
          className="link-dark text-decoration-none btn btn-warning me-2"
          href="#empanadas"
        >
          Empanadas
        </a>
      </div>
      <Form className="d-flex justify-content-center my-3 px-2">
        <Form.Group className="mb-3 search" controlId="buscarMenu">
          <Form.Control
            type="text"
            placeholder="nombre de producto"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
              }
            }}
          />
        </Form.Group>
      </Form>
      <Container
        className={
          filtrarProductosPorCategoria("Pizzas").length === 0 || busqueda !== ""
            ? "d-none"
            : "pb-5"
        }
      >
        {busqueda === "" &&
          filtrarProductosPorCategoria("Pizzas").length > 0 && (
            <div className="d-flex align-items-center" id="pizzas">
              <h2 className="categoryTitle">Pizzas</h2>
            </div>
          )}
        <Row className="gy-2 gx-3">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Pizzas").length > 0 &&
            filtrarProductosPorCategoria("Pizzas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
              ></CardProducto>
            ))}
        </Row>
      </Container>
      <Container
        className={
          filtrarProductosPorCategoria("Hamburguesas").length === 0 ||
          busqueda !== ""
            ? "d-none"
            : "pb-5"
        }
      >
        {busqueda === "" &&
          filtrarProductosPorCategoria("Hamburguesas").length > 0 && (
            <div className="d-flex align-items-center" id="hamburguesas">
              <h2 className="categoryTitle">Hamburguesas</h2>
            </div>
          )}
        <Row className="gy-3 gx-4">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Hamburguesas").length > 0 &&
            filtrarProductosPorCategoria("Hamburguesas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
              ></CardProducto>
            ))}
        </Row>
      </Container>
      <Container
        className={
          filtrarProductosPorCategoria("Empanadas").length === 0 ||
          busqueda !== ""
            ? "d-none"
            : "pb-5"
        }
      >
        {busqueda === "" &&
          filtrarProductosPorCategoria("Empanadas").length > 0 && (
            <div className="d-flex align-items-center" id="empanadas">
              <h2 className="categoryTitle">Empanadas</h2>
            </div>
          )}
        <Row className="gy-3 gx-4">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Empanadas").length > 0 &&
            filtrarProductosPorCategoria("Empanadas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
              ></CardProducto>
            ))}
        </Row>
      </Container>
      <Container
        className={
          filtrarProductosPorCategoria("Pastas").length === 0 || busqueda !== ""
            ? "d-none"
            : "pb-5"
        }
      >
        {busqueda === "" &&
          filtrarProductosPorCategoria("Pastas").length > 0 && (
            <div className="d-flex align-items-center" id="pastas">
              <h2 className="categoryTitle">Pastas</h2>
            </div>
          )}
        <Row className="gy-3 gx-4">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Pastas").length > 0 &&
            filtrarProductosPorCategoria("Pastas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
              ></CardProducto>
            ))}
        </Row>
      </Container>
      <Container className={busqueda == "" ? "d-none" : "pb-5"}>
        {productosFiltrados.length > 0 && (
          <Row className="gy-2 gx-3">
            {productosFiltrados.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
              ></CardProducto>
            ))}
          </Row>
        )}
        {productosFiltrados.length === 0 && busqueda !== "" && (
          <div className="py-5">
            No se encontraron productos.
          </div>
        )}
      </Container>
    </>
  );
};

export default Menu;
