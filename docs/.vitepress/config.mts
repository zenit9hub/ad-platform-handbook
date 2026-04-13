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
            { text: '표준', link: '/standards/' },
            { text: '전달과 렌더링', link: '/delivery/' },
            { text: '측정 · 검증 · 정합성', link: '/measurement/' },
            { text: '채널과 포맷', link: '/channels/' },
            { text: '구현 패턴', link: '/implementation/' },
            { text: 'Trust · Web3 실험실', link: '/lab/' },
            { text: '레퍼런스', link: '/reference/' }
          ],
          sidebar: [
            {
              text: '기초 개념',
              items: [
                { text: '개요', link: '/fundamentals/' },
                { text: '광고플랫폼 생태계 한눈에 보기', link: '/fundamentals/ecosystem-overview' },
                { text: '퍼블리셔, SSP, DSP, Exchange의 역할', link: '/fundamentals/roles' },
                { text: '광고 요청과 Bid Request의 차이', link: '/fundamentals/ad-request-vs-bid-request' },
                { text: '퍼블리셔 온보딩과 지면 등록', link: '/fundamentals/publisher-onboarding' }
              ]
            },
            {
              text: '표준',
              items: [
                { text: '개요', link: '/standards/' },
                { text: 'ads.txt와 app-ads.txt 이해', link: '/standards/ads-txt-and-app-ads-txt' },
                { text: 'OpenRTB는 무엇인가', link: '/standards/openrtb-overview' },
                { text: 'site, app, imp 객체 읽는 법', link: '/standards/site-app-imp' },
                { text: 'OpenRTB 2.6 핵심 필수 · 권장 항목 한눈에 보기', link: '/standards/openrtb-required-and-recommended' },
                { text: 'OpenRTB 상위 제어 필드 읽는 법', link: '/standards/top-level-control-fields' },
                { text: '구간별 프로토콜과 데이터 경계', link: '/standards/protocol-boundaries' },
                { text: '광고주 · Agency ↔ DSP: 캠페인 제어 구간', link: '/standards/advertiser-agency-to-dsp' },
                { text: 'DSP ↔ SSP / Exchange: RTB 경매 구간', link: '/standards/dsp-to-ssp-exchange' },
                { text: 'SSP ↔ Publisher SDK / Player / Tag: 광고 전달 구간', link: '/standards/ssp-to-publisher-sdk' },
                { text: 'SDK / Player ↔ Measurement / Verification: 런타임 이벤트 구간', link: '/standards/sdk-to-measurement-verification' },
                { text: 'OpenRTB 3.0이 지향한 것과 2.6에 다시 반영된 것', link: '/standards/openrtb-3-and-2-6' }
              ]
            },
            {
              text: '전달과 렌더링',
              items: [
                { text: '개요', link: '/delivery/' },
                { text: 'adm 필드는 무엇을 담는가', link: '/delivery/adm-field' }
              ]
            },
            {
              text: '측정 · 검증 · 정합성',
              items: [
                { text: '개요', link: '/measurement/' },
                { text: 'imp와 impression은 왜 다른가', link: '/measurement/imp-vs-impression' },
                { text: 'TrackingEvents, impression, click, quartile 이해', link: '/measurement/tracking-events' },
                { text: 'Discrepancy와 Reconciliation 개요', link: '/measurement/discrepancy-and-reconciliation' },
                { text: 'sellers.json과 schain 이해', link: '/measurement/sellers-json-and-schain' }
              ]
            },
            {
              text: '채널과 포맷',
              items: [
                { text: '개요', link: '/channels/' },
                { text: '웹, 앱, CTV는 어떻게 다른가', link: '/channels/web-app-ctv' }
              ]
            },
            {
              text: '구현 패턴',
              items: [
                { text: '개요', link: '/implementation/' },
                { text: '이벤트 로그 스키마 설계 기초', link: '/implementation/event-log-schema' }
              ]
            },
            {
              text: 'Trust · Web3 실험실',
              items: [
                { text: '개요', link: '/lab/' },
                { text: '광고플랫폼에서 SSI, Blockchain, AI Agent로 실험할 수 있는 것', link: '/lab/ssi-and-blockchain' }
              ]
            },
            {
              text: '레퍼런스',
              items: [
                { text: '개요', link: '/reference/' },
                { text: '광고플랫폼 용어사전', link: '/reference/glossary' }
              ]
            }
          ],
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
            { text: 'Standards', link: '/en/standards/' },
            { text: 'Delivery', link: '/en/delivery/' },
            { text: 'Measurement · Verification · Reconciliation', link: '/en/measurement/' },
            { text: 'Channels', link: '/en/channels/' },
            { text: 'Implementation', link: '/en/implementation/' },
            { text: 'Trust · Web3 Lab', link: '/en/lab/' },
            { text: 'Reference', link: '/en/reference/' }
          ],
          sidebar: [
            {
              text: 'Fundamentals',
              items: [
                { text: 'Overview', link: '/en/fundamentals/' },
                { text: 'Ad Platform Ecosystem Overview', link: '/en/fundamentals/ecosystem-overview' },
                { text: 'Roles of Publisher, SSP, DSP, and Exchange', link: '/en/fundamentals/roles' },
                { text: 'Ad Request vs Bid Request', link: '/en/fundamentals/ad-request-vs-bid-request' },
                { text: 'Publisher Onboarding and Placement Registration', link: '/en/fundamentals/publisher-onboarding' }
              ]
            },
            {
              text: 'Standards',
              items: [
                { text: 'Overview', link: '/en/standards/' },
                { text: 'Understanding ads.txt and app-ads.txt', link: '/en/standards/ads-txt-and-app-ads-txt' },
                { text: 'What Is OpenRTB', link: '/en/standards/openrtb-overview' },
                { text: 'How to Read site, app, and imp', link: '/en/standards/site-app-imp' },
                { text: 'OpenRTB 2.6 Required and Recommended Fields at a Glance', link: '/en/standards/openrtb-required-and-recommended' },
                { text: 'How to read OpenRTB top-level control fields', link: '/en/standards/top-level-control-fields' },
                { text: 'Protocol boundaries and data handoff by segment', link: '/en/standards/protocol-boundaries' },
                { text: 'Advertiser · Agency ↔ DSP: campaign control segment', link: '/en/standards/advertiser-agency-to-dsp' },
                { text: 'DSP ↔ SSP / Exchange: RTB auction segment', link: '/en/standards/dsp-to-ssp-exchange' },
                { text: 'SSP ↔ Publisher SDK / Player / Tag: ad delivery segment', link: '/en/standards/ssp-to-publisher-sdk' },
                { text: 'SDK / Player ↔ Measurement / Verification: runtime event segment', link: '/en/standards/sdk-to-measurement-verification' },
                { text: 'What OpenRTB 3.0 aimed for and what returned in 2.6', link: '/en/standards/openrtb-3-and-2-6' }
              ]
            },
            {
              text: 'Delivery',
              items: [
                { text: 'Overview', link: '/en/delivery/' },
                { text: 'What Goes in the adm Field', link: '/en/delivery/adm-field' }
              ]
            },
            {
              text: 'Measurement · Verification · Reconciliation',
              items: [
                { text: 'Overview', link: '/en/measurement/' },
                { text: 'Why imp and impression are different', link: '/en/measurement/imp-vs-impression' },
                { text: 'Understanding TrackingEvents, impression, click, and quartile', link: '/en/measurement/tracking-events' },
                { text: 'Introduction to Discrepancy and Reconciliation', link: '/en/measurement/discrepancy-and-reconciliation' },
                { text: 'Understanding sellers.json and schain', link: '/en/measurement/sellers-json-and-schain' }
              ]
            },
            {
              text: 'Channels',
              items: [
                { text: 'Overview', link: '/en/channels/' },
                { text: 'How Web, App, and CTV Differ', link: '/en/channels/web-app-ctv' }
              ]
            },
            {
              text: 'Implementation',
              items: [
                { text: 'Overview', link: '/en/implementation/' },
                { text: 'Event Log Schema Basics', link: '/en/implementation/event-log-schema' }
              ]
            },
            {
              text: 'Trust · Web3 Lab',
              items: [
                { text: 'Overview', link: '/en/lab/' },
                { text: 'What SSI, Blockchain, and AI Agents Can Be Used to Experiment With in Ad Platforms', link: '/en/lab/ssi-and-blockchain' }
              ]
            },
            {
              text: 'Reference',
              items: [
                { text: 'Overview', link: '/en/reference/' },
                { text: 'Ad Platform Glossary', link: '/en/reference/glossary' }
              ]
            }
          ]
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
