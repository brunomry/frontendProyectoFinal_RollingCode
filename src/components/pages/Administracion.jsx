import "../../styles/administrador.css";

const Administracion = () => {
  return (
    <section className="mainSection m-0">
      <h1 className="text-center my-5">Bienvenido "Administrador"</h1>
      <article className="me-2 mx-sm-auto d-flex justify-content-center border border border-1 border-dark managementOptions px-3 px-sm-5">
        <div className="d-flex gap-3 flex-column justify-content-center align-items-center">
          <button
            className="border border-1 border-white fw-bold py-3 btnManagement rounded-2"
          >
            Gestionar Productos <i class="fa-solid fa-pizza-slice"></i>
          </button>
          <button className="border border-1 border-white fw-bold py-3 btnManagement rounded-2">
            Gestionar Usuarios <i class="fa-solid fa-user"></i>
          </button>
          <button className="border border-1 border-white fw-bold py-3 btnManagement rounded-2">
            Gestionar Pedidos <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </article>
    </section>
  );
};

export default Administracion;
