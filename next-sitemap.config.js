const siteUrl = 'https://www.walikystore.online'
const siteUrlSecond = 'https://walikystore.online'

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        additionalSitemaps: [
            `${siteUrl}/sitemap-0.xml`,
            `${siteUrlSecond}/sitemap.xml`,
            `${siteUrlSecond}/sitemap-0.xml`,
            `${siteUrlSecond}/server-sitemap.xml`,
            `${siteUrl}/server-sitemap.xml`,
        ]
    }
}