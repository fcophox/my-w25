/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,  // Añade esto para imágenes en export estático
  },
  assetPrefix: '/', // Añade esto si vas a servir desde un subdirectorio
  basePath: '', // Configura esto si tu sitio no está en la raíz del dominio
  typescript: {
    ignoreBuildErrors: true,

  },
  trailingSlash: true,  // Añade esto para generar /study/index.html
};

export default nextConfig;


