---
title: "광고플랫폼 용어사전"
description: "광고플랫폼 핵심 용어를 짧고 일관된 정의로 정리한다."
---

# 광고플랫폼 용어사전

## 문서 목적

광고플랫폼 기초 학습 중 반복해서 등장하는 핵심 용어를 짧고 일관된 정의로 정리한다.

## 용어 목록

### Publisher

광고가 노출되는 지면을 보유하고 광고 수익화를 수행하는 주체.

### SSP

퍼블리셔 인벤토리를 판매하기 위해 경매를 오케스트레이션하는 공급측 플랫폼.

### DSP

광고주의 예산과 타기팅 조건에 맞춰 입찰에 참여하는 수요측 플랫폼.

### Exchange

공급과 수요가 실시간으로 거래되는 중개 계층. SSP와 구분되기도 하고 혼용되기도 한다.

### Ad Request

퍼블리셔 측 실행 주체가 광고 슬롯에 대해 광고를 요청하는 런타임 요청.

### Bid Request

SSP 또는 exchange가 DSP에 보내는 입찰 요청. OpenRTB 문맥에서는 이 요청을 기준으로 경매가 시작된다.

### Placement

퍼블리셔가 정의한 광고 노출 위치 또는 슬롯.

### `imp`

OpenRTB request에서 개별 광고 기회를 설명하는 객체.

### `adm`

낙찰 후 퍼블리셔 실행 환경이 렌더링할 creative markup 또는 참조 정보를 담는 응답 영역.

### VAST

video 광고 전달과 tracking을 설명하는 XML 기반 표준.

### Impression

광고가 노출되었거나 노출 가능한 상태에 들어섰음을 나타내는 집계 단위.

### Quartile

video 광고 재생 진행률을 25%, 50%, 75%, 100% 기준으로 나눈 이벤트 집합.

### Discrepancy

서로 다른 시스템 간 집계 수치 차이.

### Reconciliation

집계 차이의 원인을 분석하고 운영 기준값을 맞추는 과정.

### sellers.json

seller identity를 공개하기 위한 IAB Tech Lab 표준.

### schain

bid request가 어떤 공급 경로를 거쳐 왔는지 설명하는 supply chain 구조.

## 관련 문서

- [광고 요청과 Bid Request의 차이](/fundamentals/ad-request-vs-bid-request)
- [site, app, imp 객체 읽는 법](/standards/site-app-imp)
- [sellers.json과 schain 이해](/measurement/sellers-json-and-schain)
