import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173, // Port for the frontend
        open: true, // Automatically open in browser
    },
    base: '/', // Base URL for your app
});
