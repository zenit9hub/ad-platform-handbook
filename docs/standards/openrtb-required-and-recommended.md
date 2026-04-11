---
title: "OpenRTB 2.6 핵심 필수 · 권장 항목 한눈에 보기"
description: "BidRequest와 주요 객체에서 먼저 확인할 필수, 권장, 조건부 필수 항목을 간결하게 정리한다."
---

# OpenRTB 2.6 핵심 필수 · 권장 항목 한눈에 보기

## 문서 목적

OpenRTB 2.6 문서를 처음 읽거나 구현 검토를 시작할 때, 먼저 확인해야 할 핵심 객체와 필드를 간결한 표로 정리한다.

## 핵심 요약

- `필수`는 OpenRTB 2.6 사양에서 기본적으로 요구하는 항목이다.
- `조건부 필수`는 특정 포맷이나 거래 문맥이 있을 때 반드시 필요한 항목이다.
- `권장`은 사양상 절대 필수는 아니어도, 실무에서는 거래 품질과 해석 가능성을 크게 좌우한다.
- 따라서 이 문서는 `표준 기준`과 `실무 중요도`를 나누어 읽는 것이 핵심이다.

## 읽는 법

|표기|의미|
|---|---|
|필수|OpenRTB 2.6 사양상 기본 요구 항목|
|조건부 필수|특정 객체나 포맷을 사용할 때 필수|
|권장|사양상 strongly recommended 또는 일반적으로 기대되는 항목|
|선택|사양상 선택 가능하지만, 특정 거래 문맥에서는 중요할 수 있음|

## 1. BidRequest 상위 객체

|객체/필드|표준 기준|실무 중요도|설명|
|---|---|---|---|
|`id`|필수|매우 높음|입찰 요청 전체를 식별하는 고유 ID다.|
|`imp[]`|필수|매우 높음|실제 광고 기회를 담는 배열이다. 최소 1개 이상의 `imp`가 필요하다.|
|`site`|권장|매우 높음|웹 또는 모바일 웹 문맥을 설명한다.|
|`app`|권장|매우 높음|앱 또는 CTV 앱 문맥을 설명한다.|
|`device`|권장|높음|디바이스, 식별, 위치, 추적 제한 신호를 전달한다.|
|`user`|권장|높음|사용자 식별 및 세그먼트 문맥을 전달한다.|
|`regs`|선택|높음|privacy, COPPA, 지역 규제 신호 해석에 중요하다.|
|`source`|선택|높음|공급 경로, transaction ID, 결제 체인 같은 거래 맥락을 보강한다.|

## 2. Imp와 포맷 객체

|객체/필드|표준 기준|실무 중요도|설명|
|---|---|---|---|
|`imp.id`|필수|매우 높음|해당 bid request 안에서 각 광고 기회를 식별한다.|
|`banner`|조건부 필수|높음|배너 포맷 거래일 때 필요하다.|
|`video`|조건부 필수|매우 높음|비디오 포맷 거래일 때 필요하다.|
|`audio`|조건부 필수|높음|오디오 포맷 거래일 때 필요하다.|
|`native`|조건부 필수|높음|네이티브 포맷 거래일 때 필요하다.|
|`pmp`|선택|높음|PMP 또는 direct deal 문맥이 있을 때 중요하다.|
|`metric[]`|선택|중간|거래소가 제공하는 추가 성과 지표를 전달한다.|
|`banner.format[]`|권장|높음|허용되는 배너 크기 후보를 전달한다.|
|`video.mimes`|필수|매우 높음|지원되는 비디오 MIME 타입을 명시한다.|
|`video.protocols`|권장|매우 높음|지원되는 VAST/프로토콜 조합을 명시한다.|
|`audio.mimes`|필수|높음|지원되는 오디오 MIME 타입을 명시한다.|
|`native.request`|필수|매우 높음|Native Ad Specification을 따르는 요청 페이로드다.|

## 3. 자주 확인하는 세부 필드

|객체/필드|표준 기준|실무 중요도|설명|
|---|---|---|---|
|`source.fd`|권장|중간|최종 판매 결정 책임이 exchange인지 upstream source인지 표시한다.|
|`source.tid`|권장|높음|참여자 간 공통 transaction ID로 정합성 추적에 유리하다.|
|`source.pchain`|권장|중간|결제 ID 체인 정보를 전달한다.|
|`deal.id`|필수|매우 높음|PMP/direct deal 식별자다.|
|`site.id`|권장|높음|exchange 기준 사이트 식별자다.|
|`app.id`|권장|높음|exchange 기준 앱 식별자다.|
|`device.ua`|권장|높음|브라우저 또는 런타임 user-agent 신호다.|
|`device.ip`|권장|높음|지리 및 네트워크 문맥 해석에 자주 쓰인다.|
|`device.dnt`|권장|높음|Do Not Track 신호다.|
|`device.lmt`|권장|매우 높음|광고 추적 제한 신호 해석에 중요하다.|
|`user.id`|권장|높음|exchange 기준 사용자 식별자다.|
|`user.buyeruid`|권장|높음|buyer 매핑 기준 사용자 식별자다.|
|`metric.type`|필수|중간|지표 이름이다. bidder와 사전 합의가 필요하다.|
|`metric.value`|필수|중간|지표 값이다. 확률형 값이면 0.0~1.0 범위를 쓴다.|
|`metric.vendor`|권장|중간|지표 출처를 설명한다.|

## 구현 관점 메모

- `site`와 `app`은 일반적으로 동시에 쓰지 않는다. 채널 문맥에 따라 하나를 중심으로 해석한다.
- `권장` 필드라도 실제 SSP, DSP, measurement 연동에서는 거의 필수처럼 취급되는 경우가 많다.
- `source`, `regs`, `schain`, ID provenance 계열 신호는 사양상 절대 필수만으로는 설명되지 않는 신뢰 계층을 보강한다.
- 따라서 이 표는 `빠른 참조`로 보고, 실제 설계 검토에서는 객체별 상세 문서와 함께 읽는 것이 적절하다.

## 다음으로 읽을 문서

- [site, app, imp 객체 읽는 법](/standards/site-app-imp)
- [OpenRTB 상위 제어 필드 읽는 법](/standards/top-level-control-fields)
- [OpenRTB 3.0이 지향한 것과 2.6에 다시 반영된 것](/standards/openrtb-3-and-2-6)

## 함께 읽을 문서

- [OpenRTB는 무엇인가](/standards/openrtb-overview)
- [sellers.json과 schain 이해](/measurement/sellers-json-and-schain)

## 참고한 공식 문서

- [OpenRTB 2.6 PDF](https://iabtechlab.com/wp-content/uploads/2022/04/OpenRTB-2-6_FINAL.pdf)
- [IAB Tech Lab OpenRTB Standard](https://dev.iabtechlab.com/standards/openrtb/)
- [The OpenRTB updates you should adopt in 2025](https://iabtechlab.com/the-openrtb-updates-you-should-adopt-in-2025-courtesy-of-iab-tech-lab/)
