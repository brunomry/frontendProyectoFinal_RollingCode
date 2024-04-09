# Ambiente Bohemio: Restaurante

Este proyecto es una aplicación web sobre un restaurante.

## Logotipo 

<img src="./src/assets/logo.png" width="250" height="100">

##  Aplicación Web con React y Vite

Esta aplicación realizada en forma grupal corresponde al Proyecto Final del curso Desarrollador Full Stack dictado por RollingCodeSchool.

## Alcance del proyecto

El alcance de este proyecto se centra en realizar todos los pasos del CRUD y deberá contar con un login con diferentes opciones dependiendo el usuario que se loguea. Se considera que solo el usuario administrador podrá administrar las diferentes opciones de menú, mientras que los clientes deberán iniciar su sesión o registrarse para poder solicitar un pedido.

## Enunciado - Requerimientos

Desarrollar una aplicación web sobre un restaurante que incluya las siguientes páginas:

* Página principal: debe contener información del restaurante y mostrar todos los productos disponibles del mismo.
* Página de Inicio de sesión: El usuario debe autenticarse ingresando sus credenciales.
* Página o modal de Registro: un usuario debe poder darse de alta ingresando correo y contraseña.
* Página o modal de detalle del producto: se deben mostrar los datos del producto seleccionado.
* Página de Pedidos: debe contener los productos seleccionados por el usuario previamente logueado y el costo total. Al confirmar el pedido se debe almacenar en la base de datos con estado "pendiente" y mostrar al usuario un mensaje de que su pedido fue realizado.
* Página de Administrador: El administrador debe poder acceder a la página de administración donde se visualizará la lista de productos, usuarios y pedidos realizados. 
  * El administrador debe poder dar de alta, modificar, eliminar y listar productos.
  * El administrador debe poder modificar el estado de los pedidos de pendiente a realizado.
* Página de Acerca de: debe contener información sobre los miembros del proyecto.
* Página de Error404: debe contener mensaje de error con la opción de redirigir a la página principal.

## Requerimientos optativos

En página de administración:
* El admninistrador debe poder crear y suspender usuarios.
* Enviar un mail al usuario informando su registro exitoso.

En página principal y administración:
* Poder filtrar productos por categoría o nombre
* Agregar paginación

## Integración con proyecto de Backend

Este proyecto de Frontend se integró a su proyecto Backend correspondiente donde se utilizó la base de datos no relacional de MongoDB para almacenar los datos de los productos del restaurante.

* #### Repositorio Backend: [backendProyectoFinal_RollingCode](https://github.com/brunomry/backendProyectoFinal_RollingCode.git)

## Enlace de Mockups de interfaces

Los mockups de interfaces fueron desarrollados usando la herramienta de software [draw]()

🔗 [Google Drive]()

## Deploy del Proyecto

La aplicación está desplegada en Netlify. Puedes acceder haciendo clic en el siguiente enlace:

🔗 [Ambiente Bohemio - Restaurante]()

## Funcionalidades Principales 

1. Consulta de Productos: Los usuarios pueden ver la lista de productos disponibles en la página de Menú (página añadida).

2. Visualización Detallada de un producto: Los usuarios pueden hacer clic en un producto para ver más detalles del mismo, como su nombre, imagen, descripción breve y precio.

3. Administración de Productos:

    * Leer Productos (Read): Los administradores pueden ver una lista completa de todos los productos disponibles en el restaurante.
    * Crear Producto (Create): Los administradores pueden agregar nuevos productos al restaurante mediante un formulario de creación.
    * Editar Producto (Update): Los administradores pueden modificar los detalles de los productos existentes, como el título, la descripción, precio, estado e imagen.
    * Eliminar Producto (Delete): Los administradores pueden eliminar productos que ya no deseen mantener en el restaurante.

4. Autenticación de Usuarios:
    
    * Iniciar Sesión (Login): Los usuarios pueden iniciar sesión en la aplicación utilizando sus credenciales.
    * Registrarse: Los usuarios pueden crear una cuenta nueva en la aplicación.
    
    Nota: Las opciones de administrador estarán ocultas para los usuarios que no tengan privilegios de administrador.

## Requisitos previos

- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).

## Pasos para clonar el repositorio

1. Clona este repositorio en tu máquina local a través de una terminal:

  git clone <[url-del-repositorio](https://github.com/brunomry/frontendProyectoFinal_RollingCode.git)>

2. Navega al directorio del proyecto:

  cd frontendProyectoFinal_RollingCode

3. Instala las dependencias del proyecto:

  npm install

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [HTML5](https://developer.mozilla.org/es/docs/Glossary/HTML5)
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [React-Router-Dom](https://reactrouter.com/en/main/start/tutorial)
- [React-Form-Hook](https://react-hook-form.com/get-started)
- [Bootstrap5](https://getbootstrap.com/)
- [Webpack](https://webpack.js.org/)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
- [SweetAlert2](https://sweetalert2.github.io/#download)
- [Json-server](): para pruebas en desarrollo

## Crear un proyecto con React usando Vite

Guía de pasos necesarios para crear un nuevo proyecto con React utilizando Vite.

### Pasos

### 1. Crear el proyecto

En tu terminal, navega hasta la carpeta donde deseas crear el proyecto o trabajo práctico.

npm create vite@latest

### 2. Configuración inicial

Después de ejecutar el comando anterior, se te pedirá que ingreses el nombre de tu proyecto. Escribe el nombre deseado y presiona Enter.

Se te pedirá confirmar el nombre del paquete. Selecciona la opción predeterminada (el mismo nombre del proyecto) y presiona Enter.

### 3. Seleccionar opciones

Se te presentará una lista de opciones para elegir el framework. Selecciona la opción de React.

Luego, se te pedirá que elijas el tipo de script a usar. Elige la opción de JavaScript, que utiliza webpack para configurar todo el proyecto de React.

Presiona Enter para confirmar tu selección.

### 4. Configuración final

Una vez confirmadas las opciones, se mostrarán los comandos que debes ejecutar en orden:

- `cd nombreProyecto`: Cambia al directorio del proyecto recién creado.
- `npm install`: Instala las dependencias del proyecto. Este comando solo necesita ejecutarse una vez.
- `npm run dev`: Inicia un servidor de desarrollo interno, similar a live server. Después de ejecutar este comando, se te proporcionará un enlace para acceder al template creado.

### 5. Desarrollo

Una vez que hayas ejecutado el tercer comando y tengas el servidor en funcionamiento, puedes continuar trabajando en tu proyecto desde la terminal de tu editor de código preferido. Para salir del servidor interno en la terminal, simplemente presiona `ctrl + c`.

## Equipo

| Nombre                              | Perfil GitHub                                            |
|-------------------------------------|----------------------------------------------------------|
| Bruno Madozzo Romay                 | [brunomry](https://github.com/brunomry)                  |
| Leonel Rodrigo Cordero              | [LeonelRC23](https://github.com/LeonelRC23)              |
| Victor Fernando Herrera                      | [HerreFer](https://github.com/HerreFer)                |
| Elias Juarez                      | [Elias-Juarez](https://github.com/Elias-Juarez)                |