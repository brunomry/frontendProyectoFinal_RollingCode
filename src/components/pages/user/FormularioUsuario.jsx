import "../../../styles/administrador.css";

const FormularioUsuario = ({titulo, boton}) => {
  return (
    <section className="mainSection px-2 pt-2 pb-5 sectionTop">
      <div className="container-md">
        <h1 className="mt-5 titleColor">{titulo}</h1>
        <hr className="container-md text-start my-0 mb-4" />
      </div>
    </section>
  );
};

export default FormularioUsuario;
