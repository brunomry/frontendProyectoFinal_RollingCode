import { Link } from "react-router-dom";
import "../styles/bannerIndex.css";
import banner from "@/assets/images/home/banner.webp";
import IconUtensils from "../../../common/icons/IconUtensils";
import IconLocation from "../../../common/icons/IconLocation";

const BannerHome = () => {
  return (
    <section className="banner d-flex justify-content-center align-items-center sectionTop mt-5">
      <article className=" d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-4 w-100">
        <div className="d-flex flex-column justify-content-center gap-4">
          {/*  */}
          <div className=" mt-md-0">
            <p className="mb-0 text-secondary ">Restaurante</p>
            <h1 className="fw-black titleBanner">Ambiente Bohemio</h1>
          </div>
          <p className="fw-normal mb-0 text-secondary descriptionBanner">
            Te esperamos para una experiencia gastronómica inolvidable.
          </p>
          <Link
            className="d-flex justify-content-center align-items-center gap-2 border border-1 border-white px-2 py-3 mt-4 text-decoration-none btnBanner fw-normal rounded-5"
            to={"/menu"}
          >
            <IconUtensils/>
            <span className="fw-bold">Nuestra Carta</span>
          </Link>
        </div>
      </article>
      <article className="w-100 d-flex flex-column gap-3">
        <img src={banner} alt="" className="imgBanner rounded-5" />
        <small className="fw-normal d-flex gap-2 align-items-center ">
          <IconLocation/>
          <span className="text-secondary">
            General Paz 576, San Miguel de Tucumán, Tucumán
          </span>
        </small>
      </article>
    </section>
  );
};

export default BannerHome;
