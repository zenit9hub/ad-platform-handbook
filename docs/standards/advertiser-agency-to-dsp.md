---
title: "광고주 · Agency ↔ DSP: 캠페인 제어 구간"
description: "광고주와 Agency가 DSP에서 어떤 관심사와 데이터를 다루는지 정리한다."
---

# 광고주 · Agency ↔ DSP: 캠페인 제어 구간

## 문서 목적

광고주와 Agency가 DSP를 통해 캠페인을 운영하는 구간을 `경매 이전의 제어 평면`으로 이해한다. 이 구간은 실시간 입찰 프로토콜보다 캠페인 설정과 운영 데이터가 중심이라는 점을 구분하는 것이 목표다.

## 핵심 요약

- 이 구간의 핵심은 `입찰`보다 `캠페인 제어`다.
- 강한 단일 범용 표준 프로토콜이 지배적이라고 보기는 어렵다.
- DSP UI, proprietary API, bulk upload, audience sync, pixel / conversion API가 실무 중심이다.
- 일부 인접 표준은 존재하지만, OpenRTB처럼 전 구간을 대표하는 단일 언어는 아니다.

## 이 구간의 관심사

|관심사|설명|
|---|---|
|캠페인 구조|campaign, insertion order, line item, creative를 어떻게 구성할지|
|타기팅|audience, geo, device, content, inventory allow/block 설정|
|예산과 입찰 전략|budget, pacing, bid strategy, frequency cap|
|크리에이티브 관리|creative upload, approval, landing URL, tracking pixel|
|성과 측정 연결|conversion event, attribution, audience sync, reporting|

## 표준 프로토콜 존재 여부

|항목|판단|
|---|---|
|단일 범용 표준 프로토콜|강하지 않음|
|주요 실무 방식|DSP UI, proprietary API, bulk upload, server-to-server event API|
|인접 표준 예시|OpenDirect, Ad Management API 같은 주변 표준이 일부 워크플로우를 보조할 수 있음|

## 이 구간에서 자주 다루는 데이터

### 운영 제어 필드

- advertiser account
- campaign id
- insertion order / line item
- budget, pacing, bid strategy
- frequency cap
- start / end date

### 타기팅 필드

- geo target
- device target
- audience segment
- content category allow / block
- supply allowlist / blocklist

### 크리에이티브 및 성과 필드

- creative id
- creative type
- landing URL
- click tracker
- conversion event
- attribution window

## 이 구간을 OpenRTB와 구분해야 하는 이유

이 구간의 데이터는 bid request에 일부 반영될 수 있지만, 1:1로 그대로 전달되지는 않는다. 예를 들어 DSP 내부의 line item 구조나 bid strategy 로직은 OpenRTB 필드가 아니라 DSP의 제어 모델에 더 가깝다.

## 실무 해석

- 광고주 · Agency는 보통 `무엇을 사고 싶은가`를 정의한다.
- DSP는 그 정의를 `어떤 bid를 낼 것인가`로 번역한다.
- 따라서 이 구간은 `거래 프로토콜`보다 `운영 모델`에 가깝다.

## 관련 문서

- [DSP ↔ SSP / Exchange: RTB 경매 구간](/standards/dsp-to-ssp-exchange)
- [광고 요청과 Bid Request의 차이](/fundamentals/ad-request-vs-bid-request)
