export default {
	mode: 'universal',
	target: 'static',

	head: {
		title: 'Prismic + Nuxt Blog example',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Prismic + Nuxt Blog example' }],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
		],
	},

	loading: { color: '#fff' },

	layoutTransition: {
		name: 'page',
		mode: 'out-in',
	},

	sitemap: {
		path: '/sitemap.xml',
		hostname: 'https://kolby.dev',
		gzip: true,
		defaults: {
			changefreq: 'daily',
			priority: 1,
			lastmod: new Date(),
		},
	},

	css: [],

	plugins: ['@/assets/css/bundle.scss', '@/plugins/lazy-sizes.client.js', '@/plugins/lazy-sizes'],

	modules: ['@nuxtjs/google-analytics', '@nuxtjs/prismic', '@nuxtjs/sitemap'],

	prismic: {
		endpoint: 'https://prismic-starter-template.cdn.prismic.io/api/v2',
		linkResolver: '@/plugins/link-resolver',
		htmlSerializer: '@/plugins/html-serializer',
	},

	//googleAnalytics: {
	//  id: 'UA-79905161-1',
	//},

	build: {
		extend(config, { isDev, isClient, loaders: { vue } }) {
			config.resolve.alias['vue'] = 'vue/dist/vue.common';
			vue.transformAssetUrls.img = ['data-src', 'src'];
			vue.transformAssetUrls.source = ['data-srcset', 'srcset'];
		},
	},

	generate: {
		fallback: '404.html',
	},
};
