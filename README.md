# FileStorage

---

## Descripción

Este servidor está diseñado para gestionar la subida y manipulación de archivos, especialmente imágenes y videos. Utiliza Express.js como framework principal y ofrece varias rutas para manejar las operaciones de carga y recuperación de archivos, así como tareas de limpieza programadas.

---

## Requisitos Previos

- Node.js instalado en tu sistema.
- Dependencias de Node.js especificadas en el archivo `package.json`.
- Un entorno de servidor o una máquina local para ejecutar el servidor.

---

## Instalación

1. Clona o descarga el repositorio desde [GitHub](https://github.com/tu-usuario/server).
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el comando `npm install` para instalar todas las dependencias.

---

## Configuración

Antes de ejecutar el servidor, asegúrate de configurar correctamente las variables de entorno en un archivo `.env`. Puedes seguir el ejemplo del archivo `.env.example` proporcionado en el repositorio.

---

## Uso

Para iniciar el servidor, ejecuta el siguiente comando:

npm start


El servidor se ejecutará en el puerto 3000 por defecto. Puedes cambiar el puerto en el archivo `index.js` si lo deseas.

---

## Funcionalidades Principales

- **Subida de Archivos:** Permite a los usuarios cargar archivos al servidor.
- **Manipulación de Imágenes:** Ofrece la posibilidad de redimensionar imágenes cargadas.
- **Subida de Videos:** Permite a los usuarios cargar videos al servidor.
- **Limpieza Automática:** Programa tareas de limpieza para eliminar archivos temporales periódicamente.

---

## Rutas Disponibles

- `/wakeup`: Ruta para despertar el servidor.
- `/fileUpload`: Ruta para subir archivos.
- `/fileUimage`: Ruta para manipular imágenes.
- `/getImage`: Ruta para recuperar imágenes.
- `/getFile`: Ruta para recuperar archivos.
- `/VideoUpload`: Ruta para subir videos.

---

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir al desarrollo de este servidor, puedes hacerlo enviando sugerencias, informes de errores o contribuciones directas a través de [GitHub](https://github.com/tu-usuario/server).

---

## Licencia

Este servidor se distribuye bajo la licencia ISC. Consulta el archivo `LICENSE` para obtener más información.

---

## Autor

Desarrollado por Miguel Guerrero.

---

## Nota

Este servidor está en constante desarrollo y puede recibir actualizaciones periódicas para mejorar su funcionalidad y seguridad. Asegúrate de mantener tu servidor actualizado con las últimas versiones para disfrutar de todas las características y correcciones de errores.



