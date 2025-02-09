/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol:"https",
                hostname:"randomuser.me",
            },
            {
                protocol: "https",
                hostname: "images.app.goo.gl", // Allow images from Google Photos shortened URLs
            },
        ],
    },

    experimental:{
        serverActions:{
            bodySizeLimit:"5mb",
        },
    },
};

export default nextConfig;
