---
title: "Publisher Onboarding and Placement Registration"
description: "Explains how publishers register inventory and placements."
---

# Publisher Onboarding and Placement Registration

## Purpose

This document explains what information and setup steps are typically required when a publisher starts operating through an ad platform.

## Key Takeaways

- Publishers must register accounts, sites or apps, and placements before inventory can be sold properly.
- `ads.txt` and `app-ads.txt` help disclose authorized sellers, but they do not replace onboarding or placement registration.
- Clear placement identifiers and inventory structure are essential for stable delivery, tracking, and reporting.

## Concept Flow

```mermaid
flowchart LR
    A["Publisher"] --> B["Account Setup / Contract"]
    B --> C["Site / App Registration"]
    C --> D["Placement Registration"]
    D --> E["ads.txt / app-ads.txt Update"]
    E --> F["Operational Start"]
```

## Draft Structure

### 1. Required onboarding information

- Domain or app information
- Placement or ad slot definitions
- Format information
- App, player, or environment metadata

### 2. Why placement registration matters

- It identifies where ads can be shown.
- It provides placement context for requests and auction logic.
- It creates keys for logging, reconciliation, and reporting.

### 3. Relation to ads.txt

- `ads.txt` and `app-ads.txt` disclose authorized selling relationships.
- Actual site, app, and placement registration still happens in SSP onboarding and operations.

## Related Documents

- [Ad Request vs Bid Request](/en/fundamentals/ad-request-vs-bid-request)
- [../20. Standards and Protocols/01. Understanding ads.txt and app-ads.txt](../20.%20Standards%20and%20Protocols/01.%20Understanding%20ads.txt%20and%20app-ads.txt.md)
