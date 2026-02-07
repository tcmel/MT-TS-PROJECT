# MT-TS-PROJECT
Proyecto de Typescript.
# Monitoreo de Antenas en Guayaquil

Aplicación web desarrollada en TypeScript (vanilla) para visualizar y
monitorear antenas de telecomunicaciones en la ciudad de Guayaquil.

El sistema consume datos desde una API externa, muestra las antenas en
una tabla interactiva y permite visualizar su ubicación en un mapa.

------------------------------------------------------------------------

## Tecnologías utilizadas

-   TypeScript (Vanilla)
-   Fetch API
-   MockAPI.io
-   DataTables.net
-   Mapbox GL JS
-   Vite

------------------------------------------------------------------------

## Funcionalidades principales

-   Consumo de datos desde API usando Fetch.
-   Tabla interactiva con DataTables
-   Visualización de antenas en mapa usando Mapbox.
-   Marcadores dinámicos.
-   Popup con información de cada antena.
-   Botones para mostrar y ocultar ubicación.

------------------------------------------------------------------------

## Estructura del proyecto

    src/
     ├─ api/
     │   └─ antennas.api.ts     → consumo de API
     ├─ types/
     │   └─ antenna.type.ts     → definición de tipos
     ├─ map/
     │   └─ map.ts              → lógica del mapa
     ├─ main.ts                 → punto de inicio (orquestador)
    index.html                  → estructura base HTML

------------------------------------------------------------------------

## Ejecución del proyecto

1.  Instalar dependencias:

    npm install

2.  Ejecutar en modo desarrollo:

    npm run dev

3.  Abrir navegador en la URL mostrada por Vite.

------------------------------------------------------------------------

## Arquitectura

El proyecto utiliza separación de responsabilidades:

-   API → obtención de datos.
-   Types → tipado TypeScript.
-   Map → lógica del mapa y markers.
-   Main → conexión entre UI, API y mapa.

