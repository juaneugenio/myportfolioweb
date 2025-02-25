/** @format */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
    base: '/',
    plugins: [
        react(),
        svgr({
            exportAsDefault: true,
            svgrOptions: {
                icon: true,
                typescript: false,
                dimensions: true,
                expandProps: true,
                svgo: true,
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@styles': path.resolve(__dirname, './src/styles'),
        },
    },
});