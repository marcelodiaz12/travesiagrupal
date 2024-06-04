# Mi Aplicación Ionic

La organización de viajes en grupo es una tarea desafiante en la que se deben coordinar múltiples preferencias, horarios y presupuestos. En un mundo cada vez más conectado, pero con condiciones variables de conectividad y una diversidad de dispositivos, surge la necesidad de desarrollar soluciones que simplifiquen este proceso. En este contexto, una aplicación móvil diseñada específicamente para la organización de viajes en grupo se presenta como una solución efectiva para abordar estas dificultades. 

## Comenzando

Estas instrucciones le ayudarán a obtener una copia del proyecto y ejecutarlo en su máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos

Cosas que necesitas instalar para ejecutar el software y cómo instalarlas:

Node.js:

Ve al sitio web oficial de Node.js: https://nodejs.org.
Descarga la versión recomendada para tu sistema operativo (Windows, macOS o Linux).
Sigue las instrucciones de instalación proporcionadas por el instalador.
Para verificar que Node.js se instaló correctamente, abre una terminal (en Windows, puedes usar el símbolo del sistema o PowerShell) y escribe node -v. Deberías ver la versión de Node.js que acabas de instalar.
npm (Node Package Manager):

npm generalmente se instala automáticamente junto con Node.js.
Para verificar que npm se instaló correctamente, abre una terminal y escribe npm -v. Deberías ver la versión de npm que se instaló.
Ionic CLI:

Una vez que tengas Node.js y npm instalados, puedes instalar Ionic CLI ejecutando el siguiente comando en tu terminal:

bash
Copy code
npm install -g @ionic/cli
Esto instalará Ionic CLI globalmente en tu sistema.

Puedes verificar que Ionic CLI se instaló correctamente escribiendo ionic -v en tu terminal. Deberías ver la versión de Ionic CLI que acabas de instalar.

### Instalación

npm install


### Desarrollo
### Cómo empezar el servidor de desarrollo:

ionic serve


### Construido Con
Ionic Framework - El framework web utilizado
Angular - Manejo de dependencias

### Autores

Marcelo Diaz - 

U4: Trabajo de la unidad (parte A)
Construir una aplicación móvil (parte A) 

- marcelodiaz12

### Licencia
Este proyecto no está licenciado bajo ni nunguna licencia

### Experiencia personal de aprendizaje

Durante la creacion de este proyecto me encontre con los problemas normales
que aparecen al aprender un lenguaje de programacion nuevo

El tema del routing para linkear una pagina con otra me costo un poco entenderlo
pero finalmente siguiendo el tutorial de la pagina de ionic pude ralizarlo sin mayores problemas.

### Actualizacion 04/06/2024

En esta parte de la entrega debi trabajar con datos, dado el tamaño 
pequeño de la aplicacion no utilize sqlite, sino una serie de archivos .json
donde guardé la informacion y la accesé mediante servicios que generé
para interactuar con los datos y mostrarlos por pantalla.

Lo mas complejo de esta entrega fue la creacion de una variable de sesion
para poder mostrar la informacion correcta en el perfil de usuario y los datos 
del usuario logueado donde correspondia.

### Para ingresar a la aplicacion
usuario: john@example.com
contrasena: 1234 

o revisar le archivo assets/db/usuarios.json para testear la variable de sesion