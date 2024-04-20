import { Link } from "react-router-dom";
import "../../styles/contacto.css";
import HorariosContacto from "./contacto/HorariosContacto";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <>
      <section className="bannerContact d-flex justify-content-center align-items-center sectionTop">
        <div className="bannerOpacity"></div>
        <article className="bannerContent d-flex flex-column justify-content-center align-items-center gap-3 gap-md-4 gap-lg-3 gap-xl-4 pb-md-5 text-white">
          <div className="mt-3 mt-md-0">
            <p className="mb-0 fw-bold bannerSubtitle text-center">
              Contáctanos
            </p>
            <h1 className="bannerTitle text-center">¿Donde estamos?</h1>
          </div>
        </article>
      </section>
      <section>
        <div className="w-100 d-flex flex-column align-items-center my-4 gap-3 gap-md-2 text-center">
          <p>
            <i className="fa-solid fa-location-dot fs-5"></i>
            General Paz 576, San Miguel de Tucumán, Tucumán
          </p>
          <p title="WhatsApp">
            <i className="fa-brands fa-whatsapp fa-2xl link-success"></i>{" "}
            123-1234567
          </p>
        </div>
        <article>
          <div className="mb-4">
            <div className="containerMap w-100 d-flex align-items-center justify-content-center">
              <iframe
                className="rounded-3"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Gral.%20Paz%20576,%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n,%20Tucum%C3%A1n+(Ambiente%20Bohemio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </article>
        <div className="d-flex justify-content-center mb-4">
          <HorariosContacto></HorariosContacto>
        </div>
        <div className="d-flex justify-content-center mb-4 gap-2">
          <Link to="*" target="_blank" title="facebook">
            <i className="fa-brands fa-facebook-f fa-2xl mx-3 link-primary"></i>
          </Link>
          <Link to="*" target="_blank" title="instagram">
            <i className="fa-brands fa-instagram fa-2xl me-3 link-danger"></i>
          </Link>
          <Link to="*" target="_blank" title="twitter">
            <i className="fa-brands fa-x-twitter fa-2xl link-dark"></i>
          </Link>
        </div>
        <div className="d-flex justify-content-center">
          <Form className="text-center formContact mb-4" onSubmit={handleSubmit()}>
            <h4>Contáctate con nosotros</h4>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label className="fw-bold mt-2">Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                {...register("correo", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 3,
                    message: "El email debe contener al menos 3 caracteres",
                  },
                  maxLength: {
                    value: 265,
                    message:
                      "El email debe contener como máximo 265 caracteres",
                  },
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                    message:
                      "Ingrese una dirección de correo electrónico válida",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.correo?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="text-start" controlId="formBasicmessage">
              <Form.Label className="fw-bold">Mensaje:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Escribe un mensaje"
                className="textareaContact"
                {...register("mensaje",{
                  required:"El mensaje es obligatorio",
                  minLength: {
                    value: 10,
                    message: "El mensaje debe contener al menos 10 caracteres",
                  },
                  maxLength: {
                    value: 350,
                    message:
                      "El mensaje debe contener como máximo 350 caracteres",
                  },
                })}
                />
                <Form.Text className="text-danger">
                {errors.mensaje?.message}
              </Form.Text>
            </Form.Group>
            <div className="text-end mt-3">
              <Button type="submit" variant="success" className="px-5">
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Contacto;
