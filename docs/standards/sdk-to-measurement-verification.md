---
title: "SDK / Player ↔ Measurement / Verification: 런타임 이벤트 구간"
description: "광고가 실제로 노출되고 검증되는 런타임 구간의 표준과 데이터를 정리한다."
---

# SDK / Player ↔ Measurement / Verification: 런타임 이벤트 구간

## 문서 목적

광고가 실제로 렌더링된 뒤 impression, click, quartile, viewability, verification이 어떻게 다뤄지는지 구분한다. 이 문서는 `runtime event`와 `verification layer`를 한 층으로 섞지 않기 위한 기준선이다.

## 핵심 요약

- 실제 노출과 재생 진행은 SDK, player, tag 같은 runtime 주체가 가장 잘 안다.
- 비디오 tracking은 VAST의 `Impression`, `ClickTracking`, `TrackingEvents`와 강하게 연결된다.
- 검증 벤더 연동은 OM SDK / OMID 같은 표준 인터페이스가 핵심이다.
- `impression`과 `viewability`, `verification`은 같은 이벤트가 아니다.

## 이 구간의 주요 관심사

|관심사|설명|
|---|---|
|노출 이벤트|impression, click, quartile, complete 같은 runtime event|
|검증|viewability, audibility, invalid traffic, fraud signal|
|트래킹 신뢰성|누가 어떤 시점에 이벤트를 확정하는지 구분|
|정합성|server win, render, impression, billable event 사이의 차이 관리|

## 표준 프로토콜 존재 여부

|항목|판단|
|---|---|
|video tracking 표준|VAST가 강한 기준선|
|verification interface 표준|OM SDK / OMID가 핵심|
|모든 포맷을 단일 메시지로 덮는 표준|강하지 않음|

## 이 구간에서 자주 보는 데이터

- impression
- click
- quartile
- error code
- viewability state
- `AdVerifications`
- OM session context
- event timestamp

## 실무 해석

- `imp`는 request-side 객체다.
- `impression`은 runtime event다.
- `viewability`는 verification 결과에 더 가깝다.

따라서 SDK나 player가 노출과 재생 상태를 가장 잘 안다고 해서, 모든 측정이 SDK 단독 로직으로 끝나는 것은 아니다. video에서는 VAST와 OMID가 함께 작동하고, display 계열에서는 creative markup과 tracker 호출이 더 직접적으로 작동할 수 있다.

## 관련 문서

- [imp와 impression은 왜 다른가](/measurement/imp-vs-impression)
- [TrackingEvents, impression, click, quartile 이해](/measurement/tracking-events)
- [SSP ↔ Publisher SDK / Player / Tag: 광고 전달 구간](/standards/ssp-to-publisher-sdk)
