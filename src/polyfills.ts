window.global = window.global ?? window;
// @ts-ignore
window.process = window.process ?? { env: {} }; // Minimal process polyfill

export {};
