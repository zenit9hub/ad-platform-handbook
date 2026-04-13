---
title: "Advertiser · Agency ↔ DSP: campaign control segment"
description: "Explains what advertisers and agencies manage through DSPs before the auction stage."
---

# Advertiser · Agency ↔ DSP: campaign control segment

## Purpose

This document explains the advertiser and agency interaction with DSPs as a `control-plane segment before the auction`. The main goal is to distinguish campaign setup and operations from real-time bidding protocols.

## Key Takeaways

- The core of this segment is `campaign control`, not the auction itself.
- There is no dominant universal protocol comparable to OpenRTB here.
- DSP UIs, proprietary APIs, bulk upload tools, audience sync, and pixel / conversion APIs dominate this segment in practice.
- Some adjacent standards exist, but they do not play the same role that OpenRTB plays in RTB auctioning.

## Main concerns in this segment

|Concern|Description|
|---|---|
|Campaign structure|how to organize campaign, insertion order, line item, and creative|
|Targeting|audience, geo, device, content, and supply allow/block rules|
|Budget and bidding strategy|budget, pacing, bid strategy, frequency cap|
|Creative management|creative upload, approval, landing URL, tracking pixel|
|Performance connection|conversion events, attribution, audience sync, reporting|

## Standard protocol status

|Item|Assessment|
|---|---|
|Dominant universal protocol|Weak|
|Common practical interfaces|DSP UI, proprietary APIs, bulk upload, server-to-server event APIs|
|Adjacent standards|OpenDirect and Ad Management API can support selected workflows around this segment|

## Data often handled in this segment

### Control fields

- advertiser account
- campaign id
- insertion order / line item
- budget, pacing, bid strategy
- frequency cap
- start / end date

### Targeting fields

- geo target
- device target
- audience segment
- content category allow / block
- supply allowlist / blocklist

### Creative and measurement fields

- creative id
- creative type
- landing URL
- click tracker
- conversion event
- attribution window

## Why this must be separated from OpenRTB

Some of this data influences later bid decisions, but it rarely maps 1:1 into a bid request. Internal DSP structures such as line items or bid strategy logic belong more to the DSP control model than to the auction protocol itself.

## Practical interpretation

- Advertisers and agencies define `what they want to buy`.
- DSPs translate that into `how they will bid`.
- This makes the segment closer to an operating model than to a transaction protocol.

## Related Documents

- [DSP ↔ SSP / Exchange: RTB auction segment](/en/standards/dsp-to-ssp-exchange)
- [Ad Request vs Bid Request](/en/fundamentals/ad-request-vs-bid-request)
