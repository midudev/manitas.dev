import { defineConfig } from 'astro/config'
import { astroImageTools } from 'astro-imagetools'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'

export default defineConfig({
	integrations: [
		astroImageTools,
		tailwind(),
		compress()
	]
})