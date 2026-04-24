---
title: "Audience data and taxonomy signaling"
description: "Explains how hierarchical audience taxonomies can be represented through OpenRTB user.data.segment."
---

# Audience data and taxonomy signaling

## Purpose

This document explains how internal labels such as `lvl1`, `lvl2`, and `lvl3` should be interpreted when audience data is exchanged through OpenRTB. The key point is to avoid exposing internal level names as if they were standard fields, and instead describe them as nodes in a hierarchical audience taxonomy represented through `user.data[].segment[]`.

## Key Takeaways

- `lvl1`, `lvl2`, and `lvl3` are internal classification levels, not OpenRTB standard fields.
- OpenRTB can carry user or contextual data signals through `user.data[]` and `data.segment[]`.
- The `segment[]` array does not directly guarantee a hierarchy by itself.
- The hierarchy is interpreted through the taxonomy referenced by segment IDs.
- `name` is useful for display and interpretation, while matching and reporting should be designed around `id`.

## Conceptual shift

An internal implementation may describe audience levels like this:

```text
lvl1 / lvl2 / lvl3
```

For external integration and standard-oriented explanations, this should be framed as:

```text
Hierarchical Audience Taxonomy
```

In other words, `lvl1~3` are convenient internal names. Externally, they are better described as nodes in a hierarchical audience taxonomy.

## OpenRTB mapping

In OpenRTB, `user.data[]` carries additional user data, and `segment[]` inside each `Data` object carries segment values. A hierarchical audience classification can therefore be represented by sending each taxonomy node as a segment.

```json
{
  "user": {
    "data": [
      {
        "name": "audience",
        "segment": [
          { "id": "aud.shopping", "name": "Shopping" },
          { "id": "aud.shopping.electronics", "name": "Electronics" },
          { "id": "aud.shopping.electronics.smartphone", "name": "Smartphones" }
        ]
      }
    ]
  }
}
```

This example does not mean that OpenRTB directly models the hierarchy. The relationship is interpreted through the ID scheme and the taxonomy metadata referenced by those IDs.

## Design principles

### 1. Send a flat structure, interpret it through taxonomy

`segment[]` is an array. Keep the transport structure flat, and interpret parent-child relationships through taxonomy ID rules or external taxonomy metadata.

### 2. Avoid fixed-depth design

Hardcoding two, three, or four levels limits extensibility. Some segments may have only two meaningful levels, while others may have deeper taxonomy paths.

### 3. Use IDs as the logic basis

`name` is a human-readable display value. Matching, filtering, reporting, and aggregation should be designed around `segment.id`.

### 4. SSP and DSP must interpret the same taxonomy

Passing segment IDs is not enough if both sides interpret those IDs differently. Taxonomy version, provider, and ID namespace need to be managed together.

## Practical SSP / DSP interpretation

|Area|Interpretation|
|---|---|
|Targeting|DSPs can use segment IDs as targeting conditions and adjust precision by taxonomy depth.|
|Matching|PMP, deal, and line-item conditions can be matched against segment IDs.|
|Reporting|Results can be aggregated by parent or child taxonomy nodes.|
|Optimization|Segment-level performance can influence bid strategy or audience weighting.|

## Risks and considerations

### 1. Do not depend on a single fixed depth

Designs that only look at `lvl2` or `lvl3` are fragile when the taxonomy changes or when depth varies by category.

### 2. Manage taxonomy consistency

If SSPs and DSPs interpret the same segment ID differently, targeting, matching, and reporting can all diverge.

### 3. Over-segmentation can reduce bid density

Sending only very deep and narrow segments can reduce the number of buyers that can match the opportunity. Precision and tradability need to be balanced.

### 4. Consider privacy and consent signals together

Audience segments are user data signals, so privacy, consent, data provenance, and transparency requirements need to be part of the design.

## Meeting-ready phrasing

> This field should not be treated as a literal `lvl1~3` standard field. It is better understood as one or more nodes in a hierarchical audience taxonomy represented through OpenRTB `user.data[].segment[]`.

> Level names are internal classification aids. Actual integration should rely on segment IDs and the taxonomy definition behind them.

## Related Documents

- [OpenRTB 2.6 Required and Recommended Fields at a Glance](/en/standards/openrtb-required-and-recommended)
- [DSP ↔ SSP / Exchange: RTB auction segment](/en/standards/dsp-to-ssp-exchange)
- [Advertiser · Agency ↔ DSP: campaign control segment](/en/standards/advertiser-agency-to-dsp)

## Official References

- [IAB Tech Lab OpenRTB](https://iabtechlab.com/standards/openrtb/)
- [IAB Tech Lab Audience Taxonomy](https://iabtechlab.com/standards/audience-taxonomy/)
- [IAB Tech Lab Data Transparency Standard](https://iabtechlab.com/standards/data-transparency-standard/)
