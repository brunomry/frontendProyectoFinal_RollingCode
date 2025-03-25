import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "./queries/productos.queries.js";
import Swal from "sweetalert2";
import MenuNavegacion from "./common/menu/MenuNavegacion";
import Inicio from "./pages/home/Inicio";
import Menu from "./domains/productos/Menu";
import Login from "./domains/auth/Login";
import RutasProtegidas from "./routes/RutasProtegidas";
import RutasAdmin from "./routes/RutasAdmin";
import Registro from "./domains/auth/Registro";
import RutasProtegidasUsuario from "./routes/RutasProtegidasUsuario";
import RutasUsuario from "./routes/RutasUsuario";
import Nosotros from "./pages/nosotros/Nosotros";
import Contacto from "./pages/contacto/Contacto";
import Error404 from "./pages/error404/Error404";
import Footer from "./common/footer/Footer";
import Equipo from "./pages/Equipo/Equipo";
import ScrollTop from "./common/ScrollTop";
import "./styles/App.css";
import {
  buscarProductoCarrito,
  calcularMonto,
  guardarCarrito,
  obtenerCarrito,
} from "./helpers/carrito/carrito.functions";
import { obtenerUsuario } from "./helpers/sesion/sesion.functions.js";

function App() {
  const usuario = obtenerUsuario();
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);
  const [montoCarrito, setMontoCarrito] = useState(0);
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [carrito, setCarrito] = useState(obtenerCarrito());

  const calcularTotalAcumulado = () => {
    let montoAux = calcularMonto(productosCarrito, carrito);
    setMontoCarrito(montoAux);
  };

  const consultarAPI = async () => {
    if (Object.keys(usuario).length === 0) return;
    try {
      const respuesta = await leerProductosAPI();
      const carritoVarAux = carrito.map((productoCarrito) => {
        return productoCarrito.producto;
      });
      const datos = respuesta.data.filter((producto) =>
        carritoVarAux.includes(producto._id)
      );
      setProductosCarrito(datos);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarCantidadProducto = (idProductoCarrito) => {
    const { carritoAux, indexProductoCarrito } = buscarProductoCarrito(
      idProductoCarrito,
      carrito
    );

    if (carritoAux[indexProductoCarrito].cantidad < 10) {
      carritoAux[indexProductoCarrito].cantidad++;
      setCarrito(carritoAux);
    }
  };

  const quitarCantidadProducto = (idProductoCarrito) => {
    const { carritoAux, indexProductoCarrito } = buscarProductoCarrito(
      idProductoCarrito,
      carrito
    );

    if (carritoAux[indexProductoCarrito].cantidad > 1) {
      carritoAux[indexProductoCarrito].cantidad--;
      setCarrito(carritoAux);
    }
  };

  const quitarProductoCarrito = (idProductoCarrito) => {
    Swal.fire({
      title: "¿Estás seguro de que deseas eliminar este producto de tu pedido?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        let carritoAux = [...carrito].filter(
          (productoCarrito) => productoCarrito.id != idProductoCarrito
        );
        setCarrito(carritoAux);
        Swal.fire({
          title: "Realizado",
          text: "Su producto fue eliminado.",
          icon: "success",
        });
      }
    });
  };

  const agregarProductoCarrito = (producto, cantidad) => {
    if (Object.keys(usuario).length === 0) {
      Swal.fire({
        title: "Información",
        icon: "info",
        html: `
          Para agregar productos debes
          <a href="/login">Iniciar sesión</a> o 
          <a href="/registro">Registrarte</a>
        `,
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: false,
        confirmButtonText: "Entendido",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Producto agregado",
        text: "El producto se agregó correctamente.",
      });
      let carritoAux = [...carrito];

      let productoRepetido = carritoAux.find(
        (productos) => productos.producto == producto._id
      );
      if (!productoRepetido) {
        const productoCarrito = {
          id: crypto.randomUUID(),
          producto: producto._id,
          cantidad: cantidad,
        };
        carritoAux.push(productoCarrito);
        setCarrito(carritoAux);
      }
    }
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  useEffect(() => {
    consultarAPI();
    guardarCarrito(carrito);
  }, [carrito]);

  useEffect(() => {
    if (productosCarrito) {
      calcularTotalAcumulado();
    }
  }, [productosCarrito]);

  return (
    <>
      <BrowserRouter>
        <ScrollTop></ScrollTop>
        <MenuNavegacion
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
          productosCarrito={productosCarrito}
        />
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/menu"
            element={
              <Menu
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
              ></Menu>
            }
          ></Route>
          <Route
            path="/administrador/*"
            element={
              <RutasProtegidas>
                <RutasAdmin></RutasAdmin>
              </RutasProtegidas>
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={<Login setUsuarioLogeado={setUsuarioLogeado}></Login>}
          ></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route
            exact
            path="/pedido/*"
            element={
              <RutasProtegidasUsuario>
                <RutasUsuario
                  usuarioLogeado={usuarioLogeado}
                  productosCarrito={productosCarrito}
                  carrito={carrito}
                  agregarCantidadProducto={agregarCantidadProducto}
                  quitarCantidadProducto={quitarCantidadProducto}
                  montoCarrito={montoCarrito}
                  quitarProductoCarrito={quitarProductoCarrito}
                  setCarrito={setCarrito}
                ></RutasUsuario>
              </RutasProtegidasUsuario>
            }
          ></Route>
          <Route exact path="/nosotros" element={<Nosotros></Nosotros>}></Route>
          <Route exact path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route exact path="/equipo" element={<Equipo></Equipo>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
