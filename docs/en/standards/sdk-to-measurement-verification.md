---
title: "SDK / Player ↔ Measurement / Verification: runtime event segment"
description: "Explains the runtime segment where ads are actually exposed, tracked, and verified."
---

# SDK / Player ↔ Measurement / Verification: runtime event segment

## Purpose

This document explains what happens after an ad is actually rendered: impression, click, quartile, viewability, and verification. The goal is to keep `runtime events` separate from the `verification layer`.

## Key Takeaways

- Runtime actors such as SDKs, players, and tags are best positioned to know when an ad was actually rendered or progressed.
- In video, tracking is strongly tied to VAST elements such as `Impression`, `ClickTracking`, and `TrackingEvents`.
- Verification vendors typically rely on standard interfaces such as OM SDK / OMID.
- `impression`, `viewability`, and `verification` are not the same event.

## Main concerns in this segment

|Concern|Description|
|---|---|
|Exposure events|runtime events such as impression, click, quartile, and complete|
|Verification|viewability, audibility, invalid traffic, and fraud-related signals|
|Tracking trust|who confirms which event at what moment|
|Reconciliation|handling differences among server win, render, impression, and billable events|

## Standard protocol status

|Item|Assessment|
|---|---|
|Video tracking standard|VAST is a strong baseline|
|Verification interface standard|OM SDK / OMID is central|
|Single end-to-end message format for all formats|Weak|

## Data often seen in this segment

- impression
- click
- quartile
- error code
- viewability state
- `AdVerifications`
- OM session context
- event timestamp

## Practical interpretation

- `imp` is a request-side object.
- `impression` is a runtime event.
- `viewability` is closer to a verification result.

This means that even though the SDK or player knows the runtime state best, measurement is not simply a matter of the SDK calling arbitrary scripts. In video, VAST and OMID work together; in display, creative markup and trackers may execute more directly in the runtime.

## Related Documents

- [Why imp and impression are different](/en/measurement/imp-vs-impression)
- [Understanding TrackingEvents, impression, click, and quartile](/en/measurement/tracking-events)
- [SSP ↔ Publisher SDK / Player / Tag: ad delivery segment](/en/standards/ssp-to-publisher-sdk)
