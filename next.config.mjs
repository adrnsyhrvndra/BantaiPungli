/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	webpack: (config, { isServer }) => {
		// Tambahkan konfigurasi webpack khusus di sini
		config.module.rules.push({
			test: /\.(mp3)$/,
			use: [
			{
			loader: 'file-loader',
			options: {
				publicPath: '/_next',
				name: 'static/media/[name].[hash].[ext]',
			},
			},
			],
		});

		return config;
	}
};

export default nextConfig;
