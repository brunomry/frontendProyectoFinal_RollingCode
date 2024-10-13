const CardMiembro = ({ miembro }) => {
  return (
    <div className="d-flex flex-column align-items-center p-4 text-white cardMember rounded-5">
      <div className="rounded-3">
        <img
          className="imgMember rounded-3"
          src={miembro.foto}
          alt={miembro.nombre}
          title={miembro.nombre}
        />
      </div>
      <div>
        <p className="py-3">{miembro.nombre}</p>
      </div>
      <div className="d-flex gap-2">
        <a
          href={miembro.linkedin}
          title="ir al perfil de LinkedIn"
          className="containerIconSocial d-flex justify-content-center bg-white align-items-center rounded-circle"
          target="blank"
        >
          <i className="fa-brands fa-linkedin fs-2"></i>
        </a>
        <a
          href={miembro.gitHub}
          title="ir al perfil de GitHub"
          className="containerIconSocial d-flex justify-content-center bg-white align-items-center rounded-circle"
          target="blank"
        >
          <i className="fa-brands fa-github text-dark fs-2"></i>
        </a>
      </div>
    </div>
  );
};

export default CardMiembro;
