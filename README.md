# Cliente Jujutsu Kaisen

Aplicación web construida con Angular 22 que consume la [API Jujutsu Kaisen](https://github.com/abomdev/api-jujutsu-kaisen) y muestra los personajes en tarjetas.

## Tecnologías

- Angular 22
- TypeScript
- CSS

## Requisitos

Tener la [API Jujutsu Kaisen](https://github.com/abomdev/api-jujutsu-kaisen) corriendo localmente en `http://localhost:5235`.

## Cómo ejecutar

1. Clona el repositorio
2. Instala las dependencias:

```
pnpm install
```

3. Inicia el servidor de desarrollo:

```
ng serve
```

La aplicación estará disponible en `http://localhost:4200`

## Funcionalidades

- Grid de tarjetas con los personajes obtenidos desde la API
- Cada tarjeta muestra nombre, grado, descripción, técnica maldita y escuela
- Imágenes optimizadas en formato .webp
- Diseño responsive (1 columna en móvil, 3 columnas en escritorio)
