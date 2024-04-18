/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['res.cloudinary.com'],
	},
	webpack: (config, { isServer }) => {
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
