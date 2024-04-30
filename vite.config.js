import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const keys = [
  "WEATHER_MAP_URL",
  "RAPID_API_KEY",
  "GEOCODE_API"
]

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {}
  keys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
  }
})
