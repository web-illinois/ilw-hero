import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-hero",
            entry: "ilw-hero.ts",
            fileName: "ilw-hero",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: () => {
                    return "[name][extname]";
                }
            },
        },
    },
    server: {
        hmr: false,
    },
});
