---
title: "Ad Request vs Bid Request"
description: "Distinguishes ad request from bid request in runtime and auction flow."
---

# Ad Request vs Bid Request

## Purpose

This document distinguishes `ad request` from `bid request`, two terms that are often mixed together in ad platform discussions.

## Key Takeaways

- An `ad request` is a request from the publisher runtime environment to retrieve an ad.
- A `bid request` is a request from an SSP or exchange to a DSP for bidding in an auction.
- On the web, tags or scripts typically trigger the ad request; in apps and CTV, SDKs often do.
- Distinguishing the two makes the roles of SDKs, SSPs, and DSPs much clearer.

## Data Flow

```mermaid
flowchart LR
    A["Web Tag / App SDK / Player SDK"] -->|"Ad Request"| B["SSP / Ad Server / Mediation"]
    B -->|"OpenRTB Bid Request"| C["DSP"]
    C -->|"Bid Response"| B
    B -->|"Creative / VAST"| A
```

## Draft Structure

### 1. What is an ad request

- It is triggered when an ad slot is loaded.
- On the web, a tag or player script often sends it.
- In apps, an SDK often sends it.

### 2. What is a bid request

- It is the request sent to buyers for RTB transactions.
- In the OpenRTB context, this object is the core auction request format.

### 3. Why the distinction matters

- The runtime requester and the auction orchestrator are different layers.
- SDKs typically do not auction directly with DSPs; SSPs usually orchestrate the bidding flow.

### 4. Practical notes

- The runtime terminology differs by platform.
- On the web, `tag` or `script` is often more precise than `SDK`.
- In mobile apps and CTV, `SDK` is often the natural term.

## Next Documents

- [Publisher Onboarding and Placement Registration](/en/fundamentals/publisher-onboarding)
- [Understanding ads.txt and app-ads.txt](/en/standards/ads-txt-and-app-ads-txt)
