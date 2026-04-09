---
title: "What Goes in the adm Field"
description: "Explains the practical role of the adm field in an OpenRTB bid response."
---

# What Goes in the adm Field

## Purpose

This document explains the practical role of the `adm` field in an OpenRTB bid response.

## Key Takeaways

- `adm` can be understood as the creative markup payload that the publisher-side runtime will render after the auction.
- In display flows, it may contain HTML or script markup; in video flows, it is often connected to VAST.
- `adm` is therefore not just a string field but a key handoff point between auction output and runtime rendering.

## Concept Flow

```mermaid
flowchart LR
    A["DSP"] -->|"Bid Response + adm"| B["SSP / Exchange"]
    B -->|"Winning Creative"| C["SDK / Player / Tag"]
    C --> D["Ad Rendering"]
```

## Draft Structure

### 1. Why `adm` matters

- It is central to post-auction creative delivery.
- It helps connect bidding, rendering, and tracking behavior.

### 2. What it may contain

- display markup
- script-based creative
- VAST XML or related video markup

### 3. What must be considered with it

- macro substitution
- click and impression trackers
- verification tags

## Prerequisite Concept

- [What Is OpenRTB](/en/standards/openrtb-overview)

## Next Document

- [Introduction to Discrepancy and Reconciliation](/en/measurement/discrepancy-and-reconciliation)
