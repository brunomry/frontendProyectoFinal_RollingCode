import "../../../styles/horariosContacto.css";

const HorariosContacto = () => {
    return (
        <article className="containerSchedulesContact text-center">
        <h4 className="mb-3 border-2 rounded-5 px-4 border-bottom py-3  border-warning text-center mx-auto">
          Horarios de Atención
        </h4>
        <div className="d-flex flex-column align-items-center">
          <div className="mb-1 d-flex justify-content-between containerScheduleContact">
            <span className="fw-bold me-2">Lunes</span>
            <span>12:00 - 00:00</span>
          </div>
          <hr className="containerScheduleContact my-0" />
          <div className="mb-1 d-flex justify-content-between containerScheduleContact">
            <span className="fw-bold me-2">Martes</span>12:00 - 00:00
          </div>
          <hr className="containerScheduleContact my-0" />
          <div className="mb-1 d-flex justify-content-between containerScheduleContact">
            <span className="fw-bold me-2">Miércoles</span>12:00 - 00:00
          </div>
          <hr className="containerScheduleContact my-0" />
          <div className="mb-1 d-flex justify-content-between containerScheduleContact">
            <span className="fw-bold me-2">Jueves</span>12:00 - 00:00
          </div>
          <hr className="containerScheduleContact my-0" />
          <div className="mb-1 d-flex justify-content-between containerScheduleContact">
            <span className="fw-bold me-2">Viernes</span>12:00 - 00:00
          </div>
          <hr className="containerScheduleContact my-0" />
          <div className="mb-1 d-flex justify-content-between containerScheduleContact">
            <span className="fw-bold me-2">Sábado</span>12:00 - 00:00
          </div>
          <hr className="containerScheduleContact my-0" />
        </div>
      </article>
    );
};

export default HorariosContacto;