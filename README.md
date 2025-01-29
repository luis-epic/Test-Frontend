# Prueba Técnica de Angular e Ionic

## Descripción
Esta es una prueba técnica para evaluar tus habilidades en Angular e Ionic. El objetivo es crear una aplicación frontend que consuma una API proporcionada.

## Objetivos
- Construir una aplicación en Angular e Ionic.
- Consumir datos desde la API mockeada proporcionada.
- Implementar filtros dinámicos y diseño responsivo.

## Endpoints de la API
Base URL: `https://test.worldsacross.com/api`

### Endpoints Disponibles
- `GET /tutors`: Lista de tutores.
- `GET /users`: Lista de usuarios.
- `GET /booking`: Lista de reservas.

## Funcionalidades a Implementar

### Lista de Tutores
- Mostrar una lista de tutores obtenida del endpoint `/tutors`.
- Implementar un filtro dinámico por `Speciality`.

### Lista de Usuarios
- Mostrar una lista de usuarios obtenida del endpoint `/users`.
- Agregar la funcionalidad para seleccionar un usuario y mostrar sus detalles.

### Reservas
- Mostrar todas las reservas obtenidas del endpoint `/booking`.
- Permitir filtrar reservas por `User`.

## Diseño
- Usa componentes de Ionic para listas, inputs y botones.
- Implementa un diseño responsivo que funcione en dispositivos móviles y desktop.

## Recursos
- Documentación de [Angular](https://angular.io/docs).
- Documentación de [Ionic](https://ionicframework.com/docs).

## Extras Opcionales
- Validaciones en formularios.
- Agregar mensajes de error para manejo de errores al consumir la API.
- Diseño avanzado para mejorar la experiencia del usuario.

## Instrucciones para Ejecutar la Aplicación

### Requisitos Previos
- Node.js y npm instalados en tu sistema.
- Angular CLI e Ionic CLI instalados globalmente.

### Pasos para Ejecutar la Aplicación
1. Clona el repositorio:
bash
git clone <URL_DEL_REPOSITORIO>

2. Navega al directorio del proyecto:
bash
cd <NOMBRE_DEL_PROYECTO>

3. Instala las dependencias:
bash
npm install

4. Ejecuta la aplicación:
bash
ionic serve

Notas Adicionales
Asegúrate de que el servidor de la API esté en funcionamiento antes de ejecutar la aplicación.

Puedes acceder a la aplicación en tu navegador en http://localhost:8100.
