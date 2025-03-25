const URL_Login = import.meta.env.VITE_API_LOGIN;
const URL_Registro = import.meta.env.VITE_API_REGISTRO;

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

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(URL_Login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario),
    });
    
    
    return respuesta.json();
  } catch (error) {
    console.log(error);
  }
};