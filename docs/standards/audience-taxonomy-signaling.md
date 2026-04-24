---
title: "오디언스 데이터와 taxonomy signaling"
description: "계층형 오디언스 taxonomy를 OpenRTB user.data.segment 구조로 전달할 때의 해석 기준을 정리한다."
---

# 오디언스 데이터와 taxonomy signaling

## 문서 목적

내부 구현에서 자주 쓰는 `lvl1`, `lvl2`, `lvl3` 같은 레벨 표현을 OpenRTB 연동 관점에서 어떻게 해석해야 하는지 정리한다. 핵심은 내부 레벨 필드를 외부 표준 필드처럼 노출하지 않고, 계층형 taxonomy의 노드를 `user.data[].segment[]`로 전달하는 방식으로 이해하는 것이다.

## 핵심 요약

- `lvl1`, `lvl2`, `lvl3`는 OpenRTB 표준 필드가 아니라 내부 분류 레벨이다.
- OpenRTB에서는 사용자 또는 문맥 데이터 신호를 `user.data[]`와 `data.segment[]` 구조로 전달할 수 있다.
- `segment[]` 배열 자체가 계층 관계를 직접 보장하는 것은 아니다.
- 계층성은 segment ID가 참조하는 taxonomy 체계에서 해석한다.
- `name`은 표시와 해석 보조용이고, 매칭과 리포팅 기준은 `id` 중심으로 설계하는 것이 안전하다.

## 개념 전환

내부 구현에서는 아래처럼 레벨을 나누어 부를 수 있다.

```text
lvl1 / lvl2 / lvl3
```

외부 연동과 표준 설명에서는 아래처럼 표현하는 것이 더 적절하다.

```text
Hierarchical Audience Taxonomy
```

즉, `lvl1~3`은 내부 분류 편의상 붙인 이름이고, 외부 연동에서는 `계층형 오디언스 taxonomy의 일부 노드`로 설명하는 것이 맞다.

## OpenRTB 매핑

OpenRTB에서는 `user.data[]`가 추가 사용자 데이터를 담고, 각 `Data` 객체 안의 `segment[]`가 세그먼트 값을 담는다. 따라서 계층형 오디언스 분류를 전달할 때는 각 계층 노드를 segment로 표현할 수 있다.

```json
{
  "user": {
    "data": [
      {
        "name": "audience",
        "segment": [
          { "id": "aud.shopping", "name": "쇼핑" },
          { "id": "aud.shopping.electronics", "name": "전자제품" },
          { "id": "aud.shopping.electronics.smartphone", "name": "스마트폰" }
        ]
      }
    ]
  }
}
```

이 예시는 `OpenRTB가 계층 구조를 직접 표현한다`는 뜻이 아니다. 계층 관계는 `aud.shopping`, `aud.shopping.electronics`, `aud.shopping.electronics.smartphone` 같은 ID 체계와, 그 ID가 참조하는 taxonomy 정의에서 해석된다.

## 설계 원칙

### 1. Flat 구조로 전달하고 taxonomy로 해석한다

`segment[]`는 배열 구조다. 따라서 전송 구조는 flat하게 유지하고, 상하위 관계는 taxonomy ID 규칙이나 별도 taxonomy 메타데이터에서 해석한다.

### 2. depth 고정 설계를 피한다

2단계, 3단계, 4단계처럼 depth를 고정하면 확장성이 떨어진다. 실무에서는 특정 세그먼트가 2단계까지만 존재할 수도 있고, 다른 세그먼트는 더 깊은 depth를 가질 수도 있다.

### 3. ID를 로직 기준으로 삼는다

`name`은 사람이 읽기 쉬운 표시용 값이다. 매칭, 필터링, 리포팅, aggregation은 `segment.id`를 기준으로 설계하는 것이 안전하다.

### 4. SSP와 DSP가 같은 taxonomy를 해석해야 한다

세그먼트 ID만 전달해도, 양쪽이 같은 taxonomy 버전과 ID 의미를 공유하지 않으면 targeting과 reporting이 어긋난다. 따라서 taxonomy 버전, provider, ID namespace를 함께 관리해야 한다.

## SSP / DSP 실무 해석

|영역|해석|
|---|---|
|Targeting|DSP는 전달된 segment ID를 조건으로 사용하고, depth에 따라 정밀도를 조정할 수 있다.|
|Matching|PMP, deal, line item 조건과 segment ID를 매칭할 수 있다.|
|Reporting|상위/하위 taxonomy 기준으로 aggregation할 수 있다.|
|Optimization|세그먼트 단위 성과를 비교해 bid strategy나 audience weighting에 반영할 수 있다.|

## 리스크와 고려사항

### 1. 특정 depth에만 의존하지 않는다

`lvl2만 본다`, `lvl3만 본다` 같은 설계는 taxonomy가 바뀌거나 depth가 달라질 때 깨지기 쉽다.

### 2. taxonomy 일관성을 관리한다

SSP와 DSP가 같은 segment ID를 서로 다르게 해석하면 targeting, matching, reporting이 모두 흔들릴 수 있다.

### 3. 과도한 세분화는 bid density를 낮출 수 있다

너무 깊고 좁은 segment만 전달하면 매칭 가능한 수요가 줄어들 수 있다. 세분화와 거래 가능성 사이의 균형이 필요하다.

### 4. privacy와 consent 신호를 함께 고려한다

오디언스 세그먼트는 사용자 데이터 신호이므로 privacy, consent, data provenance, transparency 요구와 함께 설계해야 한다.

## 회의용 표현

> 현재 필드는 특정 `lvl1~3` 값을 외부 표준 필드로 보내는 것이 아니라, 사용자 선호 기반의 계층형 오디언스 taxonomy 중 일부 노드를 OpenRTB `user.data[].segment[]` 구조로 전달하는 것으로 이해하는 것이 적절하다.

> Level 개념은 내부 분류 기준이고, 실제 연동에서는 segment ID와 taxonomy 정의를 기준으로 처리하는 것이 안전하다.

## 관련 문서

- [OpenRTB 2.6 핵심 필수 · 권장 항목 한눈에 보기](/standards/openrtb-required-and-recommended)
- [DSP ↔ SSP / Exchange: RTB 경매 구간](/standards/dsp-to-ssp-exchange)
- [광고주 · Agency ↔ DSP: 캠페인 제어 구간](/standards/advertiser-agency-to-dsp)

## 참고한 공식 문서

- [IAB Tech Lab OpenRTB](https://iabtechlab.com/standards/openrtb/)
- [IAB Tech Lab Audience Taxonomy](https://iabtechlab.com/standards/audience-taxonomy/)
- [IAB Tech Lab Data Transparency Standard](https://iabtechlab.com/standards/data-transparency-standard/)
