---
title: "구간별 프로토콜과 데이터 경계"
description: "광고플랫폼의 주요 구간마다 어떤 프로토콜이 쓰이고 어떤 데이터가 오가는지 구분한다."
---

# 구간별 프로토콜과 데이터 경계

## 문서 목적

광고플랫폼의 전체 흐름을 `역할`이 아니라 `구간` 기준으로 나눠서 본다. 각 구간마다 관심사가 다르고, 강한 업계 표준이 있는 구간과 플랫폼별 공통 모델에 더 많이 의존하는 구간이 다르다는 점을 구분하는 것이 목표다.

## 핵심 요약

- 광고플랫폼은 하나의 단일 프로토콜로 처음부터 끝까지 이어지지 않는다.
- `DSP ↔ SSP / Exchange` 구간은 OpenRTB가 강하게 작동하는 대표 구간이다.
- `SSP ↔ Publisher SDK / Player / Tag` 구간은 업계 공통 패턴은 있지만 단일 범용 표준은 약하다.
- `SDK / Player ↔ Measurement / Verification` 구간은 VAST tracking과 OM SDK / OMID가 중요한 기준선이 된다.
- `광고주 · Agency ↔ DSP` 구간은 실시간 입찰보다 캠페인 제어와 운영 데이터에 더 가깝다.

## 전체 그림

```mermaid
flowchart LR
    A["Advertiser / Agency"] -->|"Campaign setup\nTargeting / budget / creative"| B["DSP"]
    B -->|"OpenRTB Bid Request / Response"| C["SSP / Exchange"]
    C -->|"Ad Request / Ad Response\nVAST / markup / URL"| D["Publisher SDK / Player / Tag"]
    D -->|"Tracking / Verification\nVAST events / OMID"| E["Measurement / Verification"]
```

## 구간별 한눈에 보기

| 구간                                        | 주요 관심사                                 | 강한 표준 프로토콜                       | 대표 데이터                                                                      |
| ----------------------------------------- | -------------------------------------- | -------------------------------- | --------------------------------------------------------------------------- |
| 광고주 · Agency ↔ DSP                        | 캠페인 설정, 타기팅, 예산, 크리에이티브 운영             | 단일 범용 표준은 약함                     | campaign, line item, creative, audience, budget, goal                       |
| DSP ↔ SSP / Exchange                      | 경매, 입찰 판단, 가격, 크리에이티브 전달               | OpenRTB                          | `id`, `imp`, `site/app`, `device`, `user`, `source`, `regs`, `price`, `adm` |
| SSP ↔ Publisher SDK / Player / Tag        | 광고 요청, 광고 응답, creative/VAST 전달         | 단일 범용 표준은 약함, video에서 VAST 비중이 큼 | placement, app/site context, VAST URL/XML, markup, tracker                  |
| SDK / Player ↔ Measurement / Verification | 노출, 클릭, 진행률, viewability, verification | VAST Tracking, OM SDK / OMID     | impression, click, quartile, `AdVerifications`, OM session                  |

## 왜 이 구분이 중요한가

### 1. OpenRTB가 모든 구간을 직접 표준화한다고 오해하지 않기 위해서

OpenRTB는 매우 중요하지만, 주로 `SSP ↔ DSP / Exchange` 경매 구간에서 강하게 작동한다. SDK가 광고를 요청하고 실제로 노출과 검증 이벤트를 발생시키는 구간은 다른 프로토콜과 런타임 규칙이 함께 작동한다.

### 2. 필드의 책임 주체를 분리하기 위해서

- `campaign budget`는 광고주 · DSP 구간 데이터다.
- `imp`, `device`, `regs`는 주로 bid request 구간 데이터다.
- `adm`, VAST URL, markup은 delivery 구간으로 넘어가는 연결점이다.
- `impression`, `click`, `quartile`, `viewability`는 runtime event 구간 데이터다.

### 3. 설계 논의를 더 정확하게 하기 위해서

실무에서 가장 흔한 오해는 `ad request`와 `bid request`, `ad response`와 `bid response`, `imp`와 `impression`을 같은 층으로 섞어 보는 것이다. 구간을 분리해 보면 어떤 데이터가 어디에서 생성되고 어느 주체가 책임지는지 더 명확해진다.

## 관련 표준 문서

- [OpenRTB](https://dev.iabtechlab.com/standards/openrtb/)
- [VAST](https://dev.iabtechlab.com/specifications-guidelines/vast/)
- [Open Measurement SDK](https://iabtechlab.com/open-measurement-sdk/)
- [CATS](https://iabtechlab.com/standards/cats/)

## 이어서 볼 문서

- [광고주 · Agency ↔ DSP: 캠페인 제어 구간](/standards/advertiser-agency-to-dsp)
- [DSP ↔ SSP / Exchange: RTB 경매 구간](/standards/dsp-to-ssp-exchange)
- [SSP ↔ Publisher SDK / Player / Tag: 광고 전달 구간](/standards/ssp-to-publisher-sdk)
- [SDK / Player ↔ Measurement / Verification: 런타임 이벤트 구간](/standards/sdk-to-measurement-verification)
