import { equipo } from "../../helpers/equipo";
import CardMember from "./components/CardMember";
import "./styles/equipo.css";

const Equipo = () => {
  return (
    <section className="container sectionTop text-white py-5">
      <h1 className="text-center m-0 mt-4 fw-bold">Equipo de Desarrollo</h1>
      <article className="px-2 containerMembers d-flex justify-content-md-center flex-md-wrap gap-3 py-5">
        {equipo.map((miembro) => (
          <CardMember key={miembro.id} miembro={miembro}></CardMember>
        ))}
      </article>
    </section>
  );
};

export default Equipo;
