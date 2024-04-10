import '../../styles/menu.css';
import { Button, Container, Form, Row } from 'react-bootstrap';
import CardProducto from './product/CardProducto';
import { useState, useEffect } from 'react';
import { leerProductosAPI } from '../../helpers/queries';

const Menu = ({ agregarProductoCarrito }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  //Se agrego toLowerCase para que no haya conflicto con las mayusculas y minusculas en cateogira

  const filtrarProductosPorCategoria = (categoria) =>
    productos.filter(
      (producto) => producto.categoria.toLowerCase() === categoria.toLowerCase()
    );

  return (
    <>
      <section className='bannerMenu d-flex flex-column justify-content-center align-items-center'>
        <h1 className='title pb-3'>Nuestro Menú</h1>
        <p className='fw-bold bannerText pb-3'>
          ¡Descubre nuestro festín de sabores!
        </p>
        <a
          className='bannerBTN text-center py-3 text-decoration-none fw-bold'
          href=''
        >
          DESCARGAR MENÚ
        </a>
      </section>
      <div className='border-bottom border-secondary d-flex justify-content-center py-3 pe-2 menuCategoryContainer position-sticky top-0'>
        <a
          className='link-dark text-decoration-none btn btn-warning me-2'
          href='#pizzas'
        >
          Pizzas
        </a>
        <a
          className='link-dark text-decoration-none btn btn-warning me-2'
          href='#hamburguesas'
        >
          Hamburguesas
        </a>
        <a
          className='link-dark text-decoration-none btn btn-warning me-2'
          href='#pastas'
        >
          Pastas
        </a>
        <a
          className='link-dark text-decoration-none btn btn-warning me-2'
          href='#empanadas'
        >
          Empanadas
        </a>
      </div>
      <Form className='d-flex justify-content-center my-3 px-2'>
        <Form.Group className='mb-3 searchForm' controlId='buscarMenu'>
          <Form.Control
            type='text'
            placeholder='categoría, nombre de producto'
          />
        </Form.Group>
        <Button className='ms-2 searchBTN' variant='secondary' type='button'>
          Buscar
        </Button>
      </Form>
      <Container className='pb-5'>
        <div className='categoryPizza d-flex align-items-center' id='pizzas'>
          <h2 className='categoryTitle '>Pizzas</h2>
        </div>
        <Row className='gy-2 gx-3'>
          {filtrarProductosPorCategoria('pizzas').map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              agregarProductoCarrito={agregarProductoCarrito}
            ></CardProducto>
          ))}
        </Row>
      </Container>
      <Container className='pb-5'>
        <div
          className='categoryBurger d-flex align-items-center'
          id='hamburguesas'
        >
          <h2 className='categoryTitle'>Hamburguesas</h2>
        </div>
        <Row className='gy-2 gx-3'>
          {filtrarProductosPorCategoria('hamburguesas').map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              agregarProductoCarrito={agregarProductoCarrito}
            ></CardProducto>
          ))}
        </Row>
      </Container>
      <Container className='pb-5'>
        <div id='pastas'>
          <h2 className='categoryTitle'>Pastas</h2>
        </div>
        <Row className='gy-2 gx-3'>
          {filtrarProductosPorCategoria('pastas').map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              agregarProductoCarrito={agregarProductoCarrito}
            ></CardProducto>
          ))}
        </Row>
      </Container>
      <Container className='pb-5'>
        <div id='empanadas'>
          <h2 className='categoryTitle'>Empanadas</h2>
        </div>
        <Row className='gy-2 gx-3'>
          {filtrarProductosPorCategoria('empanadas').map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              agregarProductoCarrito={agregarProductoCarrito}
            ></CardProducto>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Menu;
