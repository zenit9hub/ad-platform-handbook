---
title: "퍼블리셔 온보딩과 지면 등록"
description: "퍼블리셔가 광고플랫폼에 참여하기 위한 등록 구조를 설명한다."
---

# 퍼블리셔 온보딩과 지면 등록

## 문서 목적

퍼블리셔가 광고플랫폼에 참여하기 위해 어떤 정보와 절차가 필요한지 설명한다.

## 핵심 요약

- 퍼블리셔는 광고 지면을 판매하기 전에 계정, 사이트 또는 앱, 지면 정보를 등록해야 한다.
- `ads.txt`와 `app-ads.txt`는 판매 권한 공개에 가깝고, 실제 지면 등록 절차를 대체하지 않는다.
- 온보딩 단계에서 식별자 체계와 placement 구조를 명확히 해 두어야 이후 tracking과 정산이 안정된다.

## 개념 흐름

```mermaid
flowchart LR
    A["Publisher"] --> B["계정 생성 / 계약"]
    B --> C["Site / App 등록"]
    C --> D["Placement 등록"]
    D --> E["ads.txt / app-ads.txt 반영"]
    E --> F["운영 시작"]
```

## 본문 구조 초안

### 1. 퍼블리셔 온보딩 시 필요한 정보

- 도메인 또는 앱 정보
- 광고 슬롯 또는 placement 정보
- 포맷 정보
- 앱 또는 플레이어 환경 정보

### 2. 지면 등록의 목적

- 어떤 광고가 어디에 노출되는지 식별하기 위함
- 입찰 요청에 placement 맥락을 반영하기 위함
- 로그와 정산의 기준 키를 만들기 위함

### 3. ads.txt와의 관계

- `ads.txt` 또는 `app-ads.txt`는 authorized seller 공개 수단이다.
- 실제 운영을 위한 site/app/placement 등록은 SSP 내부 온보딩 절차에서 이뤄진다.

## 후속 연결 문서

- [광고 요청과 Bid Request의 차이](/fundamentals/ad-request-vs-bid-request)
- [ads.txt와 app-ads.txt 이해](/standards/ads-txt-and-app-ads-txt)
