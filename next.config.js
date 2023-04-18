
/**@type {import('next').NextConfig} */
module.exports = {
    reactStrictMode:true,    
    images: {
      remotePatterns: [
        {
          hostname: "https://console.firebase.google.com/",
        },
      ],
      domains: ['firebasestorage.googleapis.com'],
      
      },
  }
