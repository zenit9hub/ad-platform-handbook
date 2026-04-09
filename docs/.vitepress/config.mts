import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Ad Platform Handbook',
    description: '표준, 신뢰, 그리고 Web3',
    lang: 'ko-KR',
    base: '/ad-platform-handbook/',
    head: [['meta', { name: 'theme-color', content: '#0f766e' }]],
    cleanUrls: true,
    sitemap: {
      hostname: 'https://zenit9hub.github.io/ad-platform-handbook/'
    },
    locales: {
      root: {
        label: '한국어',
        lang: 'ko-KR',
        description: '표준, 신뢰, 그리고 Web3',
        themeConfig: {
          nav: [
            { text: '홈', link: '/' },
            { text: '기초 개념', link: '/fundamentals/' },
            { text: '표준', link: '/standards/' }
          ],
          sidebar: {
            '/fundamentals/': [
              {
                text: '기초 개념',
                items: [
                  { text: '개요', link: '/fundamentals/' },
                  { text: '광고플랫폼 생태계 한눈에 보기', link: '/fundamentals/ecosystem-overview' },
                  { text: '퍼블리셔, SSP, DSP, Exchange의 역할', link: '/fundamentals/roles' },
                  { text: '광고 요청과 Bid Request의 차이', link: '/fundamentals/ad-request-vs-bid-request' },
                  { text: '퍼블리셔 온보딩과 지면 등록', link: '/fundamentals/publisher-onboarding' }
                ]
              }
            ],
            '/standards/': [
              {
                text: '표준',
                items: [
                  { text: '개요', link: '/standards/' },
                  { text: 'ads.txt와 app-ads.txt 이해', link: '/standards/ads-txt-and-app-ads-txt' }
                ]
              }
            ]
          },
          outlineTitle: '이 페이지에서',
          docFooter: {
            prev: '이전',
            next: '다음'
          },
          darkModeSwitchLabel: '테마 전환',
          sidebarMenuLabel: '메뉴',
          returnToTopLabel: '맨 위로',
          langMenuLabel: '언어',
          lastUpdatedText: '마지막 수정',
          footer: {
            message: '광고플랫폼 이해를 위한 공개형 학습 문서',
            copyright: 'Copyright © 2026'
          }
        }
      },
      en: {
        label: 'English',
        lang: 'en-US',
        link: '/en/',
        description: 'Standards, Trust, and Web3',
        themeConfig: {
          nav: [
            { text: 'Home', link: '/en/' },
            { text: 'Fundamentals', link: '/en/fundamentals/' },
            { text: 'Standards', link: '/en/standards/' }
          ],
          sidebar: {
            '/en/fundamentals/': [
              {
                text: 'Fundamentals',
                items: [
                  { text: 'Overview', link: '/en/fundamentals/' },
                  { text: 'Ad Platform Ecosystem Overview', link: '/en/fundamentals/ecosystem-overview' },
                  { text: 'Roles of Publisher, SSP, DSP, and Exchange', link: '/en/fundamentals/roles' },
                  { text: 'Ad Request vs Bid Request', link: '/en/fundamentals/ad-request-vs-bid-request' },
                  { text: 'Publisher Onboarding and Placement Registration', link: '/en/fundamentals/publisher-onboarding' }
                ]
              }
            ],
            '/en/standards/': [
              {
                text: 'Standards',
                items: [
                  { text: 'Overview', link: '/en/standards/' },
                  { text: 'Understanding ads.txt and app-ads.txt', link: '/en/standards/ads-txt-and-app-ads-txt' }
                ]
              }
            ]
          }
        }
      }
    },
    themeConfig: {
      logo: '/logo.svg',
      socialLinks: [
        { icon: 'github', link: 'https://github.com/zenit9hub/ad-platform-handbook' }
      ],
      search: {
        provider: 'local'
      }
    },
    mermaid: {}
  })
)
