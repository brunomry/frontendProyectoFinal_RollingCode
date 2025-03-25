const URL_Mailer = import.meta.env.VITE_API_MAILER;

export const enviarDatosCorreo = async (correo) => {
  try {
    const respuesta = await fetch(URL_Mailer, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(correo),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
