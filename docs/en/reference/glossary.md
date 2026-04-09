---
title: "Ad Platform Glossary"
description: "Defines the core terms used throughout the handbook."
---

# Ad Platform Glossary

## Purpose

This document provides short, consistent definitions for the core terms that appear throughout the handbook.

## Terms

### Publisher

The party that owns the inventory where ads are shown and monetized.

### SSP

The supply-side platform that orchestrates auctions for publisher inventory.

### DSP

The demand-side platform that bids on ad opportunities on behalf of advertisers.

### Exchange

The marketplace layer where supply and demand meet in real time. In practice, it may be distinct from or overlap with SSP behavior.

### Ad Request

The runtime request sent by the publisher-side execution layer for a specific ad slot.

### Bid Request

The auction request sent by an SSP or exchange to bidders. In OpenRTB contexts, this is the request that starts the bidding process.

### Placement

The publisher-defined ad slot or inventory position.

### `imp`

The OpenRTB object that describes an individual ad opportunity.

### `adm`

The response field that carries creative markup or a renderable creative reference after the auction.

### VAST

The XML-based standard commonly used for video ad delivery and tracking.

### Impression

The counting unit that represents an ad being shown or becoming eligible to be shown.

### Quartile

The video progress event family typically tied to 25%, 50%, 75%, and 100% playback milestones.

### Discrepancy

A count difference between systems.

### Reconciliation

The process of analyzing and resolving those count differences into an operational basis.

### sellers.json

The IAB Tech Lab standard that exposes seller identity.

### schain

The supply-chain object that explains how a bid request traveled through the supply path.

## Related Documents

- [Ad Request vs Bid Request](/en/fundamentals/ad-request-vs-bid-request)
- [How to Read site, app, and imp](/en/standards/site-app-imp)
- [Understanding sellers.json and schain](/en/measurement/sellers-json-and-schain)
