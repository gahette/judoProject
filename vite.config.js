import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@',
                // eslint-disable-next-line no-undef
                replacement: path.resolve(__dirname, 'src')
            },
            {
                find: '@pages',
                // eslint-disable-next-line no-undef
                replacement: path.resolve(__dirname, 'src/pages')
            },
            {
                find: '@components',
                // eslint-disable-next-line no-undef
                replacement: path.resolve(__dirname, 'src/components')
            },
        ]
    }
})
