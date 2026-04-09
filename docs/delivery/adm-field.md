---
title: "adm 필드는 무엇을 담는가"
description: "OpenRTB bid response의 adm 필드가 어떤 역할을 하는지 설명한다."
---

# adm 필드는 무엇을 담는가

## 문서 목적

OpenRTB bid response에서 자주 등장하는 `adm` 필드가 어떤 역할을 하는지 설명한다.

## 핵심 요약

- `adm`는 낙찰 후 퍼블리셔 실행 환경이 렌더링할 creative markup을 담는 영역으로 이해할 수 있다.
- display에서는 HTML 또는 script markup이, video에서는 VAST 문서가 연계되는 경우가 많다.
- `adm`는 단순 문자열이 아니라 `누가 무엇을 어떻게 렌더링할 것인가`를 연결하는 전달 지점이다.

## 개념 흐름

```mermaid
flowchart LR
    A["DSP"] -->|"Bid Response + adm"| B["SSP / Exchange"]
    B -->|"Winning Creative"| C["SDK / Player / Tag"]
    C --> D["광고 렌더링"]
```

## 본문 구조 초안

### 1. 왜 `adm`가 중요한가

- 낙찰 이후 creative 전달의 핵심 지점이기 때문이다.
- 실제 렌더링 주체와 tracking 동작을 이해하는 출발점이기 때문이다.

### 2. 어떤 내용이 들어갈 수 있는가

- display markup
- script 기반 creative
- VAST XML 또는 VAST 참조 구조

### 3. 실무에서 함께 봐야 하는 항목

- macro 치환
- click / impression tracker
- verification tag

## 선행 개념

- [OpenRTB는 무엇인가](/standards/openrtb-overview)

## 다음으로 읽을 문서

- [Discrepancy와 Reconciliation 개요](/measurement/discrepancy-and-reconciliation)
