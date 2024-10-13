import "./styles/menu.css";
import { Container, Form, Row, Spinner } from "react-bootstrap";
import CardProducto from "./components/CardProducto";
import { useState, useEffect } from "react";
import { leerProductosAPI } from "../../helpers/queries";

const Menu = ({ agregarProductoCarrito, productosCarrito, usuarioLogeado }) => {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductos(respuesta);
      setSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const filtrarProductosPorCategoria = (categoria) =>
    productos.filter(
      (producto) =>
        producto.estado === "Disponible" &&
        producto.categoria.toLowerCase() === categoria.toLowerCase()
    );

  const filtrarProductosPorNombre = () => {
    const inputBusqueda = busqueda.toLowerCase().trim();

    if (inputBusqueda === "") {
      setProductosFiltrados([]);
    } else {
      const productosEncontrados = productos.filter(
        (producto) =>
          producto.estado === "Disponible" &&
          producto.nombre.toLowerCase().includes(inputBusqueda)
      );
      setProductosFiltrados(productosEncontrados);
    }
  };

  useEffect(() => {
    filtrarProductosPorNombre();
  }, [busqueda]);

  const handleEnter = (e) => (e.key === "Enter" ? e.preventDefault() : null);

  return (
    <>
      <Form className="d-flex justify-content-center mt-md-5 px-2 formSearch">
        <Form.Group className="mb-3 search input-group" controlId="buscarMenu">
          <Form.Control
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            className="input inputSearch text-white"
            onChange={(e) => setBusqueda(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
            id="inputSearch"
          />
          <label class="input-group-text labelSearch" htmlFor="inputSearch">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="24"
              fill="currentColor"
              class="bi bi-search text-secondary"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </label>
        </Form.Group>
        <div className="iconSearch"></div>
      </Form>
      <div className="d-flex justify-content-center pt-4 pb-3 pe-2 menuCategoryContainer position-sticky top-0 mb-5">
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
      <div
        className={`d-flex align-items-start justify-content-center custom-spinner ${
          !spinner ? "d-none" : "mb-5"
        } `}
      >
        {spinner && (
          <div className="d-flex flex-column justify-content-center align-items-center">
            <Spinner
              animation="border"
              role="status"
              className="mb-2 text-warning"
            ></Spinner>
            <span className="text-white">Espera un momento...</span>
          </div>
        )}
      </div>
      <Container
        className={
          filtrarProductosPorCategoria("Pizzas").length === 0 || busqueda !== ""
            ? "d-none"
            : "pb-5 "
        }
      >
        {busqueda === "" &&
          filtrarProductosPorCategoria("Pizzas").length > 0 && (
            <div className="d-flex align-items-center" id="pizzas">
              <h2 className="categoryTitle text-white mt-4 mb-5 w-100">
                Pizzas
              </h2>
            </div>
          )}
        <div className="containerCategory d-flex pb-3 gap-2 flex-lg-wrap gap-md-0">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Pizzas").length > 0 &&
            filtrarProductosPorCategoria("Pizzas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
                usuarioLogeado={usuarioLogeado}
              ></CardProducto>
            ))}
        </div>
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
              <h2 className="categoryTitle text-white mt-4 mb-5 w-100">
                Hamburguesas
              </h2>
            </div>
          )}
        <div className="containerCategory d-flex pb-3 gap-2 flex-lg-wrap gap-md-0">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Hamburguesas").length > 0 &&
            filtrarProductosPorCategoria("Hamburguesas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
                usuarioLogeado={usuarioLogeado}
              ></CardProducto>
            ))}
        </div>
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
              <h2 className="categoryTitle text-white mt-4 mb-5 w-100">
                Pastas
              </h2>
            </div>
          )}
        <div className="containerCategory d-flex pb-3 gap-2 flex-lg-wrap gap-md-0">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Pastas").length > 0 &&
            filtrarProductosPorCategoria("Pastas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
                usuarioLogeado={usuarioLogeado}
              ></CardProducto>
            ))}
        </div>
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
              <h2 className="categoryTitle text-white mt-4 mb-5 w-100">
                Empanadas
              </h2>
            </div>
          )}
        <div className="containerCategory d-flex pb-3 gap-2 flex-lg-wrap gap-md-0">
          {busqueda === "" &&
            filtrarProductosPorCategoria("Empanadas").length > 0 &&
            filtrarProductosPorCategoria("Empanadas").map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
                usuarioLogeado={usuarioLogeado}
              ></CardProducto>
            ))}
        </div>
      </Container>
      <Container className={busqueda == "" ? "d-none" : "pb-5"}>
        {productosFiltrados.length > 0 && (
          <div className="containerCategory d-flex pb-3 gap-2 flex-lg-wrap gap-md-0">
            {productosFiltrados.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
                usuarioLogeado={usuarioLogeado}
              ></CardProducto>
            ))}
          </div>
        )}
        {productosFiltrados.length === 0 && busqueda !== "" && (
          <div className="py-5 text-center">
            <p>No se encontraron productos.</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default Menu;
