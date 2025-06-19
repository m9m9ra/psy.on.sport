import { withContentlayer } from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	distDir: "dist",
	basePath: process.env.PAGES_BASE_PATH,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	experimental: {
		mdxRs: true,
	},
	images: {
		unoptimized: true,
	},
};

export default withContentlayer(nextConfig);
