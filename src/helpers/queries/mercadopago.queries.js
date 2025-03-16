const URL_MercadoPago = import.meta.env.VITE_API_MP;

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