---
title: "SSP ↔ Publisher SDK / Player / Tag: 광고 전달 구간"
description: "SSP와 퍼블리셔 실행 환경 사이에서 광고가 어떻게 요청되고 전달되는지 정리한다."
---

# SSP ↔ Publisher SDK / Player / Tag: 광고 전달 구간

## 문서 목적

퍼블리셔 실행 환경과 SSP 사이의 광고 요청과 응답 구간을 설명한다. 이 문서는 `ad request`, `ad response`, `adm`, VAST, markup이 어떤 관계에 있는지 정리하는 기준선이다.

## 핵심 요약

- 이 구간의 핵심은 `광고를 받아와 실제 실행 환경에 전달하는 것`이다.
- 업계 공통 패턴은 강하지만 OpenRTB처럼 단일 범용 프로토콜이 지배적이라고 보기는 어렵다.
- video에서는 VAST가 매우 중요한 전달 포맷이다.
- OpenRTB bid response의 `adm`는 이 구간으로 넘어오기 전의 creative handoff 수단이지, SDK 응답 필드명과 동일해야 한다는 뜻은 아니다.

## 이 구간의 주요 관심사

|관심사|설명|
|---|---|
|ad request 생성|지면, 세션, 포맷, device context를 담아 SSP에 요청|
|ad response 전달|winning creative, VAST URL/XML, tracker를 퍼블리셔 실행 환경에 전달|
|포맷 적합성|display, video, native, audio가 실행 환경과 맞는지 확인|
|runtime 준비|렌더링 전에 player, tag, SDK가 어떤 데이터를 준비해야 하는지 정리|

## 표준 프로토콜 존재 여부

|항목|판단|
|---|---|
|단일 범용 요청/응답 표준|강하지 않음|
|video delivery 표준|VAST가 핵심 역할|
|광고 전송 표준 보강 시도|CATS가 RTB와 non-RTB ad request 표준화를 목표로 함|

## 이 구간에서 자주 보는 데이터

### request 측

- placement id
- app / site context
- format capability
- device / session signal
- consent / privacy signal

### response 측

- creative markup
- VAST URL 또는 inline VAST
- click tracker
- impression tracker
- macro 값 또는 치환 정보

## OpenRTB와의 관계

- DSP가 SSP에 주는 bid response는 OpenRTB다.
- SSP가 SDK에 주는 ad response는 플랫폼별 내부 모델일 수 있다.
- 이때 SSP는 `adm`, `nurl`, inline VAST, VAST URL 같은 정보를 해석해서 SDK에 맞는 형태로 전달할 수 있다.

즉, `bid response = SDK response`라고 보면 안 된다.

## 실무 해석

이 구간은 `경매 결과를 실제 실행 가능한 광고 응답으로 바꾸는 연결 구간`이다. ad request와 bid request를 구분해야 하는 이유도 바로 여기에 있다.

## 관련 문서

- [광고 요청과 Bid Request의 차이](/fundamentals/ad-request-vs-bid-request)
- [adm 필드는 무엇을 담는가](/delivery/adm-field)
- [DSP ↔ SSP / Exchange: RTB 경매 구간](/standards/dsp-to-ssp-exchange)
- [SDK / Player ↔ Measurement / Verification: 런타임 이벤트 구간](/standards/sdk-to-measurement-verification)
