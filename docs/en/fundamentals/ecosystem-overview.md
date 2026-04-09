---
title: "Ad Platform Ecosystem Overview"
description: "Introduces the key participants and basic flow of a modern ad platform ecosystem."
---

# Ad Platform Ecosystem Overview

## Purpose

This document provides a compact introduction to the key participants and the basic flow of a modern ad platform ecosystem.

## Key Takeaways

- Ad platforms connect demand-side participants and supply-side participants.
- Publishers provide inventory, while advertisers allocate budget to reach audiences.
- DSPs, SSPs, and exchanges automate and optimize this transaction flow.

## One-Page View

```mermaid
flowchart LR
    A["Advertiser / Agency"] --> B["DSP"]
    B --> C["Ad Exchange / SSP"]
    C --> D["Publisher"]
    D --> E["Audience"]
    E --> D
```

## Draft Structure

### 1. Why ad platforms exist

- Publishers need to monetize inventory.
- Advertisers need to reach relevant audiences efficiently.
- Platforms automate matching, bidding, and delivery at scale.

### 2. Core participants

|Participant|Primary role|
|---|---|
|Advertiser / Agency|Campaign planning and budget execution|
|DSP|Automated buying and bidding|
|SSP|Supply monetization and yield optimization|
|Ad Exchange|Transaction layer connecting demand and supply|
|Publisher|Media owner providing ad inventory|

### 3. Basic transaction flow

1. A user visits publisher inventory.
2. An ad request is triggered.
3. The supply-side platform exposes the opportunity to demand-side buyers.
4. A winning ad is selected and rendered.
5. Delivery and event logs are collected.

## Out of Scope

- OpenRTB object structure
- ads.txt and app-ads.txt details
- Tracking, verification, and reconciliation details

## Next Documents

- [Roles of Publisher, SSP, DSP, and Exchange](/en/fundamentals/roles)
- [Ad Request vs Bid Request](/en/fundamentals/ad-request-vs-bid-request)
