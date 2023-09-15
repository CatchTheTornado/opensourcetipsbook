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
						{ label: 'Marketing tips', link: 'chapters/chapter2-marketing-tips' },
						{ label: 'Growth hacks', link: 'chapters/chapter3-growth-hacks' },
						{ label: 'Project governance', link: 'chapters/chapter4-governing-opensource'},
						{ label: 'Investing in Open Source', link: 'chapters/chapter5-investing-in-opensource'},
						{ label: 'Spinning off a product', link: 'chapters/chapter6-spinning-off'},
						{ label: 'Road to commercialization', link: 'chapters/chapter7-road-to-commercialization'},
						{ label: 'More resources', link: 'chapters/more-resources'},
						{ label: 'Make it happen!', link: 'chapters/make-it-happen'}
					],					
					autogenerate: { directory: 'chapters' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
