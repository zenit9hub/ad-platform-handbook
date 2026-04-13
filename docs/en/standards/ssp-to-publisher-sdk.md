---
title: "SSP ↔ Publisher SDK / Player / Tag: ad delivery segment"
description: "Explains how ads are requested from and delivered between SSPs and publisher runtime environments."
---

# SSP ↔ Publisher SDK / Player / Tag: ad delivery segment

## Purpose

This document explains the request and response segment between the publisher runtime and the SSP. It serves as a baseline for understanding the relationship among `ad request`, `ad response`, `adm`, VAST, and markup.

## Key Takeaways

- The core concern in this segment is `fetching an ad and delivering it into the runtime environment`.
- Industry patterns are strong, but there is no single universal protocol comparable to OpenRTB here.
- In video, VAST is a major delivery format.
- `adm` in an OpenRTB bid response is a creative handoff mechanism before this segment, not proof that the SDK response must use the same field name.

## Main concerns in this segment

|Concern|Description|
|---|---|
|Ad request creation|sending placement, session, format, and device context to the SSP|
|Ad response delivery|passing the winning creative, VAST URL/XML, and trackers back to the publisher runtime|
|Format compatibility|ensuring display, video, native, or audio output matches the runtime|
|Runtime readiness|deciding what data the SDK, player, or tag needs before rendering|

## Standard protocol status

|Item|Assessment|
|---|---|
|Dominant universal request/response standard|Weak|
|Video delivery standard|VAST plays a major role|
|Emerging transport standard|CATS aims to standardize ad requests across RTB and non-RTB scenarios|

## Data often seen in this segment

### On the request side

- placement id
- app / site context
- format capability
- device / session signal
- consent / privacy signal

### On the response side

- creative markup
- VAST URL or inline VAST
- click tracker
- impression tracker
- macro values or substitution hints

## Relationship to OpenRTB

- The bid response from DSP to SSP is OpenRTB.
- The ad response from SSP to SDK may be an internal platform model.
- The SSP can interpret `adm`, `nurl`, inline VAST, or a VAST URL and reshape that into the format expected by the SDK.

In other words, `bid response` and `SDK ad response` should not be treated as the same thing.

## Practical interpretation

This segment is the handoff layer that turns an auction outcome into an executable ad response. That is also why `ad request` and `bid request` must be kept separate.

## Related Documents

- [Ad Request vs Bid Request](/en/fundamentals/ad-request-vs-bid-request)
- [What Goes in the adm Field](/en/delivery/adm-field)
- [DSP ↔ SSP / Exchange: RTB auction segment](/en/standards/dsp-to-ssp-exchange)
- [SDK / Player ↔ Measurement / Verification: runtime event segment](/en/standards/sdk-to-measurement-verification)
