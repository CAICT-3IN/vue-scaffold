import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { resolve } from 'path';

export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "~/styles/element/index.scss" as *;`,
			},
		},
	},
	server: {
		port: 8080,
	},
	resolve: {
		extensions: ['.vue', '.ts', '.tsx', '.js', '.jsx'],
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
			'@': resolve(__dirname, 'src'),
		},
	},
	plugins: [
		vue(),
		createSvgIconsPlugin({
			// 指定需要缓存的图标文件夹
			iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
			// 指定symbolId格式
			symbolId: 'icon-[dir]-[name]',
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
});
