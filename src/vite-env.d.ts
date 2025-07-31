/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{},{},any>;
    export default component;
}
// Este archivo declara cómo deben tratarse los archivos .vue en un proyecto con Vite y TypeScript.
// Define que cualquier archivo con extensión .vue será tratado como un componente Vue genérico.
// También incluye los tipos de cliente de Vite para que funciones como import.meta.env estén disponibles.
