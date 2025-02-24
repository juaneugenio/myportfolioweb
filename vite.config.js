/** @format */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
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
});