import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/pages/Login";
import Inicio from "./components/pages/Inicio";
import Menu from "./components/pages/Menu";
import Nosotros from "./components/pages/Nosotros";
import MenuNavegacion from "./components/common/MenuNavegacion";
import Pedido from "./components/pages/Pedido";
import Error404 from "./components/pages/Error404";
import Registro from "./components/pages/Registro";
import Footer from "./components/common/Footer";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import { useEffect, useState } from "react";
import { leerProductosAPI } from "./helpers/queries";
import Swal from "sweetalert2";
import RutasProtegidasUsuario from "./components/routes/RutasProtegidasUsuario";
import RutasUsuario from "./components/routes/RutasUsuario";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioLogeado")) || {};
  const [usuarioLogeado, setUsuarioLogeado] = useState(usuario);

  const [carrito, setCarrito] = useState(
    JSON.parse(sessionStorage.getItem("carrito")) || []
  );
  const [montoCarrito, setMontoCarrito] = useState(0);
  const [pedidos, setPedidos] = useState([]);
  const [productosCarrito, setProductosCarrito] = useState(null);

  const calcularMonto = () => {
    let productoCarritoAux = [...productosCarrito];
    let montoAux = 0;
    // console.log("productoCarritoAux: ", productoCarritoAux);
    // console.log("carrito: ", carrito);
    if (carrito.length > 0 && productosCarrito.length > 0) {
      for (let i = 0; i < productoCarritoAux.length; i++) {
        let precioProductoCarrito = carrito.find(
          (productoCarrito) =>
            productoCarrito.producto == productoCarritoAux[i]._id
        );
        montoAux +=
          precioProductoCarrito.cantidad * productoCarritoAux[i].precio;
      }
    }
    setMontoCarrito(montoAux);
  };

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      const carritoVarAux = carrito.map((productoCarrito) => {
        return productoCarrito.producto;
      });
      const datos = respuesta.filter((producto) =>
        carritoVarAux.includes(producto._id)
      );
      setProductosCarrito(datos);
    } catch (error) {
      console.log(error);
    }
  };

  const agregarCantidadProducto = (idProductoCarrito) => {
    let carritoAux = [...carrito];
    const indexProductoCarrito = carritoAux.findIndex(
      (productoCarrito) => productoCarrito.id == idProductoCarrito
    );
    if (carritoAux[indexProductoCarrito].cantidad < 10) {
      carritoAux[indexProductoCarrito].cantidad++;
      setCarrito(carritoAux);
    }
  };

  const quitarCantidadProducto = (idProductoCarrito) => {
    let carritoAux = [...carrito];
    const indexProductoCarrito = carritoAux.findIndex(
      (productoCarrito) => productoCarrito.id == idProductoCarrito
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
        text: "El producto se agrego correctamente.",
      });
      console.log(Object.keys(usuario));
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
    // console.log("Monto:", montoCarrito);
  }, [montoCarrito]);

  useEffect(() => {
    consultarAPI();
    // console.log("carrito: ", carrito);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  useEffect(() => {
    if (productosCarrito) {
      calcularMonto();
    }
    // console.log("ProductosCarrito:", productosCarrito);
  }, [productosCarrito]);

  return (
    <>
      <BrowserRouter>
        <MenuNavegacion
          usuarioLogeado={usuarioLogeado}
          setUsuarioLogeado={setUsuarioLogeado}
          productosCarrito={productosCarrito}
        ></MenuNavegacion>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route
            exact
            path="/menu"
            element={
              <Menu
                productosCarrito={productosCarrito}
                agregarProductoCarrito={agregarProductoCarrito}
                usuarioLogeado={usuarioLogeado}
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
            path="/miPedido/*"
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
          <Route path="*" element={<Error404></Error404>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
