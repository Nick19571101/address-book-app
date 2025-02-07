import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
	base: '/address-book-app',
	plugins: [react()],
	extends: ['eslint:all', 'plugin:react/all'],
	// parserOptions: {
	// 	ecmaFeatures: {
	// 		jsx: true,
	// 	},
	// },
})
