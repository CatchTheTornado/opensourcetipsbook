import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	experimental: {
		assets: true
	},
	integrations: [
		starlight({
			title: 'Open Source Tips Book',
			logo: {
				src: './src/assets/tornado-logo.png',
			},			
			social: {
				github: 'https://github.com/CatchTheTornado/opensourcetipsbook',
			},
			sidebar: [
				{
					label: 'The Book',
					items: [
						{ label: 'Introduction', link: '/' },
						{ label: 'Let it fly!', link: 'chapters/chapter1-let-it-fly' },				
						{ label: 'Marketing tips', link: 'chapters/chapter2-marketing-tips' }

					],					
					autogenerate: { directory: 'chapters' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
