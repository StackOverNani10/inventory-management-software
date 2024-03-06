/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Permitir solicitudes desde el origen específico
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: 'https://inventory-management-software-roan.vercel.app' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET, POST, OPTIONS, PUT, DELETE' },
                    { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
                ],
            },
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
            }
        ]
    }
}

module.exports = nextConfig
