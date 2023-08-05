import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Open Source Tips Book',
			social: {
				github: 'https://github.com/CatchTheTornado/opensourcetipsbook',
			},
			sidebar: [
				{
					label: 'The Book',
					autogenerate: { directory: 'chapters' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
