# CodePills-Astro-Layouts

Bienvenido a nuestro proyecto de Astro de Garaje Code Pills. Este es un proyecto de ejemplo que utiliza [Astro](https://astro.build/) para construir aplicaciones web rápidas y modernas.

## Descripción

Este proyecto demuestra cómo puedes utilizar Astro para crear layouts, rutas y componentes de manera eficiente y elegante.

## Requisitos previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/)

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/proyecto-astro.git
    ```
2. Ve a la carpeta del proyecto:

   ```bash
   cd proyecto-astro
   ```
3. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución

Para ejecutar la aplicación localmente, utiliza el siguiente comando:
    
    ```bash
    npm run dev
    ```

Visita http://localhost:4321 en tu navegador para ver la aplicación.

## Crear un build de producción

Para crear un build de producción, utiliza el siguiente comando:

    ```bash
    npm run build
    ``` 
Esto generará los archivos optimizados en el directorio `dist`.

## Ejemplos

Puedes crear un nuevo componente en el directorio `src/components/`. Aquí hay un ejemplo:

```astro
// EjemploComponente.astro

---
export const nombre = "EjemploComponente";
---

<p>Hola, soy el componente {nombre}.</p>
```

## Crear un layout o plantilla

Puedes crear un nuevo layout en el directorio `src/layouts/`. Aquí hay un ejemplo:

```astro
// LayoutPrincipal.astro

---
export const title = "Layout Principal";
---

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
</head>
<body>
  <slot />
</body>
</html>
```

## Crear una ruta

Puedes crear una nueva ruta en el directorio `src/pages/`. Aquí hay un ejemplo:

```astro
// index.astro

---
import EjemploComponente from '../components/EjemploComponente.astro';
---

<LayoutPrincipal title="Página de Inicio">
  <h1>Bienvenido a nuestro proyecto Astro</h1>
  <EjemploComponente />
</LayoutPrincipal>
```

¡Explora más sobre Astro y comienza a construir aplicaciones web asombrosas!

## Contribuciones
¡Contribuciones son bienvenidas! Si encuentras algún problema o tienes alguna sugerencia, no dudes en abrir un issue o enviar un pull request.
