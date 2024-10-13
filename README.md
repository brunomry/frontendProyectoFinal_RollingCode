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
* El administrador debe poder crear y suspender usuarios.
* Enviar un mail al usuario informando su registro exitoso.

En página principal y administración:
* Poder filtrar productos por categoría o nombre
* Agregar paginación

## Enlace de Mockups de interfaces

Los mockups de interfaces fueron desarrollados usando la herramienta de software Draw.

<img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" alt="Trello" title="Trello (para la gestión de proyectos)" width="48" height="48" style="margin-right: 10px"/>

🔗 [Mockups - Google Drive](https://drive.google.com/drive/folders/1quZYkRI5o2lAExI1dT_w_qAYkeIU_NBf?usp=sharing)

## Enlace de Trello 

<img src="https://img.icons8.com/color/48/000000/trello.png" alt="Trello" title="Trello (para la gestión de proyectos)" width="48" height="48" style="margin-right: 10px"/>

🔗 [Grupo 2 - Proyecto Final](https://trello.com/b/Bu5iY5B1/grupo-2-proyecto-final-rollingcode)

## Deploy de la aplicación

La aplicación está desplegada en Netlify. Puedes acceder haciendo clic en el siguiente enlace:

🔗 [Ambiente Bohemio - Restaurante](http://ambiente-bohemio-restaurante.netlify.app)

## Integración con proyecto de Backend

Este proyecto de Frontend se integró a su proyecto Backend correspondiente donde se utilizó la base de datos no relacional de MongoDB para almacenar los datos de los productos del restaurante, usuarios y pedidos realizados.

* #### Repositorio Backend: [backendProyectoFinal_RollingCode](https://github.com/brunomry/backendProyectoFinal_RollingCode.git)

## Funcionalidades Principales 

1. **Consulta de Productos:** 

    * **Descripción:** Los usuarios pueden ver la lista de productos disponibles en la página de Menú y buscar un producto en particular.
    * **Página de Referencia:** Página de Menú.
    * **Componentes Clave:** Lista de Productos por categoría.
    * **Acción Principal:** Visualizar Detalle del Producto.
    * **Resultado:** Los usuarios pueden hacer clic en un producto para ver más detalles y agregarlo a "Mi Pedido" si están logueados.

2. **Visualización Detallada de un producto:** 

    * **Descripción:** Los usuarios pueden hacer clic en un producto para ver más detalles del mismo, como su nombre, imagen, descripción y precio, teniendo la posibilidad de seleccionar la cantidad y agregar el producto a su pedido en caso de haber iniciado sesión.
    * **Página de Referencia:** Modal de Detalle del Producto.
    * **Componentes Clave:** Detalles del Producto, Botón de Agregar a Mi Pedido.
    * **Acción Principal:** Agregar a Mi Pedido.
    * **Resultado:** Los usuarios pueden agregar productos a su pedido desde la vista detallada del producto.

3. **Administración de Productos:**

    * **Descripción:** Los administradores pueden gestionar los productos del restaurante, incluyendo la creación (create), edición (update), eliminación (delete) y visualización (read) de todos los productos disponibles.
    * **Página de Referencia:** Página de Gestión de productos.
    * **Componentes Clave:** Formulario de Creación/Edición, Lista de Productos.
    * **Acción Principal:** Crear, Editar, Eliminar Producto.
    * **Resultado:** Los administradores pueden mantener actualizada la lista de productos del restaurante.

4. **Administración de Usuarios:**

    * **Descripción:** Los administradores pueden ver una lista completa de todos los usuarios registrados en la aplicación.
    * **Página de Referencia:** Página de Gestión de usuarios.
    * **Componentes Clave:** Lista de Usuarios.
    * **Acción Principal:** Visualizar Detalles del Usuario.
    * **Resultado:** Los administradores pueden supervisar la base de usuarios registrados.

5. **Administración de Pedidos:**

    * **Descripción:** Los administradores pueden ver una lista completa de todos los pedidos realizados por los usuarios, así como modificar el estado de los pedidos de "Pendiente" a "Realizado".
    * **Página de Referencia:** Página de Gestión de pedidos.
    * **Componentes Clave:** Lista de Pedidos.
    * **Acción Principal:** Modificar Estado de Pedido.
    * **Resultado:** Los administradores pueden gestionar de manera eficiente los pedidos realizados en la aplicación.

6. **Autenticación de Usuarios:**
    
    * **Descripción:** Permite a los usuarios gestionar su acceso a la aplicación.
    * **Página de Referencia:** Página de Inicio de Sesión, Página de Registro.
    * **Componentes Clave:** Formulario de Inicio de Sesión, Formulario de Registro.
    * **Acción Principal:**
      * **Iniciar Sesión (Login):** Los usuarios pueden iniciar sesión ingresando su correo y contraseña.
      * **Registro:** Los usuarios pueden crear una nueva cuenta ingresando su nombre y apellido, correo y contraseña.
    * **Resultado:**
Los usuarios pueden acceder a funcionalidades exclusivas de usuarios registrados.
Las opciones de administrador estarán ocultas para los usuarios que no tengan privilegios de administrador.

7. **Solicitud de pedidos:**

    * **Descripción:** Los usuarios logueados además de poder ver el detalle de un producto en un modal, podrán seleccionar la cantidad y agregarlo a "Mi Pedido".
    * **Página de Referencia:** Página de "Mi Pedido".
    * **Componentes Clave:** Modal de Detalle del Producto, Tarjetas de Producto en "Mi Pedido", Tarjeta de Resumen del Pedido.
    * **Acción Principal:** Confirmar Pedido.
    * **Resultado:** Al hacer clic en "Confirmar Pedido", se guarda el pedido en la base de datos con estado "pendiente" y se muestra un mensaje de confirmación al usuario. 

8. **Pago mediante la aplicación de MERCADOPAGO:**

NOTAS IMPORTANTES A TENER EN CUENTA: 
- En caso de probar esta funcionalidad, en la página de Menú se encuentra un producto de prueba para MERCADOPAGO. 
- Es importante destacar que esta funcionalidad está activa y el pago se realizará de manera real. Se te descontarán $10 pesos del producto de prueba.

    * **Descripción:** Los usuarios logueados al confirmar un pedido, tendrán la opción de realizar el pago del mismo mediante MERCADOPAGO mientras el estado del pedido sea "Realizado".
    * **Página de Referencia:** Página de Detalle de Compra.
    * **Componentes Clave:** Página de Pedido, Resumen del Pedido, Página de Detalle de Compra, Pagina Mis Pedidos.
    * **Acción Principal:** PAGAR.
    * **Resultado:** Al hacer clic en "PAGAR AHORA", se visualizará el botón de MERCADOPAGO que al presionar redirigirá al usuario a la aplicación donde podrá realizar el pago correspondiente.

## Tecnologías utilizadas

* Mockups: Draw.io
* Frontend:
HTML5, CSS3, Bootstrap5, Javascript, Reactjs, React-Hook-Form, React-Router-Dom, React-Bootstrap, Jason Web Token (JWT),SweetAlert, Json-server
* Gestión del proyecto:
Trello, Metodología Scrum
* Envío de emails:
Nodemailer
* Backend:
Node js, Express js, MongoDB, Mongoose, bcrypt, 
* Otras: MercadoPago

## Requisitos previos

- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).

## Configuración

1. Clona este repositorio en tu máquina local a través de una terminal:

  git clone <[url-del-repositorio](https://github.com/brunomry/frontendProyectoFinal_RollingCode.git)>

2. Navega al directorio del proyecto:

  cd frontendProyectoFinal_RollingCode

3. Instala las dependencias del proyecto:

  npm install

4. Crea un archivo .env en la raíz del proyecto y configura las variables de entorno necesarias. Aquí hay un ejemplo:

* API_PRODUCTOS=url

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