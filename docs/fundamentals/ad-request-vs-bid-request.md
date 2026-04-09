---
title: "광고 요청과 Bid Request의 차이"
description: "ad request와 bid request를 역할과 데이터 흐름 기준으로 구분한다."
---

# 광고 요청과 Bid Request의 차이

## 문서 목적

광고플랫폼 문맥에서 자주 혼용되는 `ad request`와 `bid request`를 구분한다.

## 핵심 요약

- `ad request`는 퍼블리셔 실행 환경에서 광고를 받아오기 위한 요청이다.
- `bid request`는 SSP 또는 Exchange가 DSP에 보내는 입찰 요청이다.
- 웹에서는 주로 tag 또는 script가, 앱과 CTV에서는 SDK가 `ad request`를 발생시키는 경우가 많다.
- 두 용어를 구분해야 SDK, SSP, DSP의 역할이 명확해진다.

## 데이터 흐름

```mermaid
flowchart LR
    A["Web Tag / App SDK / Player SDK"] -->|"Ad Request"| B["SSP / Ad Server / Mediation"]
    B -->|"OpenRTB Bid Request"| C["DSP"]
    C -->|"Bid Response"| B
    B -->|"Creative / VAST"| A
```

## 본문 구조 초안

### 1. ad request란 무엇인가

- 광고 슬롯이 로드될 때 발생하는 요청이다.
- 웹에서는 보통 tag 또는 player script가, 앱에서는 SDK가 이 요청을 보낸다.

### 2. bid request란 무엇인가

- RTB 거래를 위해 SSP 또는 Exchange가 DSP에 보내는 요청이다.
- OpenRTB 문맥에서는 이 요청 객체가 핵심 표준이다.

### 3. 왜 둘을 구분해야 하는가

- 실행 주체와 거래 주체가 다르기 때문이다.
- SDK가 직접 DSP와 입찰하는 것이 아니라, 보통 SSP가 중간에서 경매를 조율한다.

### 4. 실무 관점 메모

- 웹과 앱은 실행 주체 표현이 다를 수 있다.
- 웹에서는 `SDK`보다 `tag` 또는 `script`라는 표현이 더 자연스러운 경우가 많다.
- 앱과 CTV에서는 SDK가 광고 요청 주체가 되는 경우가 많다.

## 후속 연결 문서

- [퍼블리셔 온보딩과 지면 등록](/fundamentals/publisher-onboarding)
- [ads.txt와 app-ads.txt 이해](/standards/ads-txt-and-app-ads-txt)
