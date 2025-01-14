import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Usando import.meta.url para obter o diretório atual
const __dirname = path.resolve();

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"), // Adiciona suporte para "@" como baseUrl
        },
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3000", // URL do seu json-server
                changeOrigin: true, // Necessário para lidar com CORS
                rewrite: (path) => path.replace(/^\/api/, ""), // Remove /api do caminho da requisição
            },
        },
    },
});
