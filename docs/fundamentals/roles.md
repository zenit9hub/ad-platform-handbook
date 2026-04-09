---
title: "퍼블리셔, SSP, DSP, Exchange의 역할"
description: "광고플랫폼 핵심 플레이어의 역할을 구분한다."
---

# 퍼블리셔, SSP, DSP, Exchange의 역할

## 문서 목적

광고플랫폼에서 자주 혼동되는 핵심 플레이어의 역할을 구분한다.

## 핵심 요약

- 퍼블리셔는 광고가 노출되는 지면을 제공한다.
- SSP는 퍼블리셔 관점에서 광고 지면 판매를 최적화한다.
- DSP는 광고주 관점에서 광고 구매를 최적화한다.
- Exchange는 양측을 연결하는 거래 레이어로 동작한다.

## 역할 관계 도식

```mermaid
flowchart LR
    A["Publisher"] --> B["SSP"]
    B --> C["Exchange"]
    C --> D["DSP"]
    D --> E["Advertiser"]
```

## 본문 구조 초안

### 1. 퍼블리셔

- 광고 슬롯과 콘텐츠 맥락을 제공한다.
- 웹사이트, 앱, CTV 앱 등이 퍼블리셔 지면이 된다.

### 2. SSP

- 퍼블리셔 지면의 판매 효율을 높인다.
- floor, 우선순위, 수요 연결, 낙찰 관리, 로그 집계를 담당할 수 있다.

### 3. DSP

- 광고주의 예산과 타겟팅 조건에 따라 입찰을 수행한다.
- 어떤 지면에 얼마를 제안할지 결정한다.

### 4. Exchange

- 수요와 공급이 거래되는 중간 레이어다.
- 실제 시장에서는 SSP와 Exchange 기능이 일부 겹치기도 한다.

## 자주 생기는 오해

- SSP는 광고를 만드는 시스템이 아니다.
- DSP는 광고가 실제로 렌더링되는 시스템이 아니다.
- Exchange는 항상 별도 사업자로 분리되어 있는 것은 아니다.

## 선행 문서

- [광고플랫폼 생태계 한눈에 보기](/fundamentals/ecosystem-overview)

## 다음으로 읽을 문서

- [광고 요청과 Bid Request의 차이](/fundamentals/ad-request-vs-bid-request)
