import { equipo } from "@/helpers/equipo";
import CardMember from "./CardMember";
import "./team.css";

const Team = () => {
  return (
    <section className="container sectionTop py-5 my-5">
      <h1 className="text-center m-0 mt-4 fw-bold">Equipo de Desarrollo</h1>
      <article className="px-2 containerMembers d-flex justify-content-md-center flex-md-wrap gap-2 gap-xl-5 py-5">
        {equipo.map((miembro) => (
          <CardMember key={miembro.id} miembro={miembro}></CardMember>
        ))}
      </article>
    </section>
  );
};

export default Team;
