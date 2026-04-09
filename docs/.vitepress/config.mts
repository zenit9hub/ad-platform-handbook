import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Ad Platform Handbook',
    description: 'Standards, Trust, and Web3',
    lang: 'en-US',
    base: '/ad-platform-handbook/',
    cleanUrls: true,
    sitemap: {
      hostname: 'https://zenit9hub.github.io/ad-platform-handbook/'
    },
    themeConfig: {
      logo: '/logo.svg',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Fundamentals', link: '/fundamentals/' },
        { text: 'Standards', link: '/standards/' },
        { text: 'GitHub', link: 'https://github.com/zenit9hub/ad-platform-handbook' }
      ],
      sidebar: {
        '/fundamentals/': [
          {
            text: 'Fundamentals',
            items: [
              { text: 'Overview', link: '/fundamentals/' },
              { text: 'Ad Platform Ecosystem Overview', link: '/fundamentals/ecosystem-overview' },
              { text: 'Roles of Publisher, SSP, DSP, and Exchange', link: '/fundamentals/roles' },
              { text: 'Ad Request vs Bid Request', link: '/fundamentals/ad-request-vs-bid-request' },
              { text: 'Publisher Onboarding and Placement Registration', link: '/fundamentals/publisher-onboarding' }
            ]
          }
        ],
        '/standards/': [
          {
            text: 'Standards',
            items: [
              { text: 'Overview', link: '/standards/' },
              { text: 'ads.txt and app-ads.txt', link: '/standards/ads-txt-and-app-ads-txt' }
            ]
          }
        ]
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/zenit9hub/ad-platform-handbook' }
      ],
      footer: {
        message: 'Public educational content for understanding ad platforms.',
        copyright: 'Copyright © 2026'
      },
      search: {
        provider: 'local'
      }
    },
    mermaid: {}
  })
)
