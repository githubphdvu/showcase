/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
//   images:{ //deprecated
//     domains:['res.cloudinary.com',
//     'lh3.googleusercontent.com',
//   'firebasestorage.googleapis.com']
//   }


    images: {//newer version
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
          }
        ]
      }
}
module.exports = nextConfig