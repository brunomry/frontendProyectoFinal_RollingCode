const URL_Productos = import.meta.env.VITE_API_PRODUCTOS;
const URL_Producto = import.meta.env.VITE_API_PRODUCTO;
const URL_Login = import.meta.env.VITE_API_LOGIN;
const URL_Registro = import.meta.env.VITE_API_REGISTRO;
const URL_pedidos = import.meta.env.VITE_API_PEDIDOS;
const URL_pedido = import.meta.env.VITE_API_PEDIDO;
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_Mailer = import.meta.env.VITE_API_MAILER;
const URL_crearUsuario = import.meta.env.VITE_API_CREARUSUARIO;
const id_super = import.meta.env.VITE_API_SUPERADMIN;
const URL_MercadoPago = import.meta.env.VITE_API_MP;


export const leerProductosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Productos);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL_Producto + '/' + id);
    const productoObtenido = await respuesta.json();
    return productoObtenido;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoAPI = async (productoNuevo) => {
  try {
    const respuesta = await fetch(URL_Productos, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': JSON.parse(sessionStorage.getItem('usuarioLogeado')).token,
      },
      body: JSON.stringify(productoNuevo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoAPI = async (productoModificado, id) => {
  try {
    const respuesta = await fetch(`${URL_Producto}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-token': JSON.parse(sessionStorage.getItem('usuarioLogeado')).token,
      },
      body: JSON.stringify(productoModificado),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL_Producto}/${id}`, {
      method: 'DELETE',
      headers: {
        'x-token': JSON.parse(sessionStorage.getItem('usuarioLogeado')).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const leerUsuariosAPI = async () => {
  try {
    const respuesta = await fetch(URL_Login);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.error(error);
  }
};

export const crearUsuarioAPI = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URL_Registro, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const crearUsuarioAdmin = async (usuarioNuevo) => {
  try {
    const respuesta = await fetch(URL_crearUsuario, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuarioNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_Login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const validarSuperAdmin = (idUsuario) => {
  if (idUsuario == id_super) {
    return true;
  } else {
    return false;
  }
};

export const crearPedidoApi = async (pedido) => {
  try {
    const respuesta = await fetch(URL_pedidos, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pedido),
    });
    return respuesta;
  } catch (error) {
    return error;
  }
};

export const leerPedidosAPI = async () => {
  try {
    const respuesta = await fetch(URL_pedidos);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

export const editarPedidoAPI = async (pedido, id) => {
  try {
    const respuesta = await fetch(`${URL_pedido}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-token': JSON.parse(sessionStorage.getItem('usuarioLogeado')).token,
      },
      body: JSON.stringify(pedido),
    });
  } catch (error) {
    console.log(error);
  }
};

export const editarEstadoUsuario = async (usuario) => {
  try {
    const respuesta = await fetch(`${URL_usuario}/${usuario._id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-token': JSON.parse(sessionStorage.getItem('usuarioLogeado')).token,
      },
      body: JSON.stringify(usuario),
    });
  } catch (error) {
    console.log(error);
  }
};

export const enviarDatosCorreo = async (correo) => {
  try {
    const respuesta = await fetch(URL_Mailer, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(correo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const crearOrdenMP = async (orden) => {
  try {
    const respuesta = await fetch(URL_MercadoPago, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orden),
    });
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};