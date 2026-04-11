---
title: "OpenRTB 2.6 Required and Recommended Fields at a Glance"
description: "A concise quick reference to the required, recommended, and conditionally required fields that matter most in BidRequest and related objects."
---

# OpenRTB 2.6 Required and Recommended Fields at a Glance

## Purpose

This document provides a compact table-based reference to the core objects and fields that should be checked first when reading OpenRTB 2.6 or reviewing an implementation.

## Key Takeaways

- `Required` means the field is fundamentally required by the OpenRTB 2.6 specification.
- `Conditionally Required` means the field becomes required when a given format or transaction context applies.
- `Recommended` fields are not always strictly mandatory in the spec, but they strongly influence transaction quality and interpretability in practice.
- The important distinction is between `spec status` and `practical importance`.

## How to Read This Page

|Label|Meaning|
|---|---|
|Required|Fundamentally required by the OpenRTB 2.6 spec|
|Conditionally Required|Required when a specific object or format is in use|
|Recommended|Strongly recommended or generally expected in practice|
|Optional|Optional in the spec, but still important in certain transaction contexts|

## 1. Top-Level BidRequest Objects

|Object / Field|Spec Status|Practical Importance|Description|
|---|---|---|---|
|`id`|Required|Very high|Unique identifier for the overall bid request.|
|`imp[]`|Required|Very high|Array of actual ad opportunities. At least one `imp` is required.|
|`site`|Recommended|Very high|Describes the web or mobile web context.|
|`app`|Recommended|Very high|Describes the app or CTV app context.|
|`device`|Recommended|High|Carries device, identity, location, and tracking restriction signals.|
|`user`|Recommended|High|Carries user identity and audience context.|
|`regs`|Optional|High|Important for privacy, COPPA, and regulatory interpretation.|
|`source`|Optional|High|Adds transaction context such as supply path, transaction ID, and payment chain.|

## 2. Imp and Format Objects

|Object / Field|Spec Status|Practical Importance|Description|
|---|---|---|---|
|`imp.id`|Required|Very high|Identifies each ad opportunity within the request.|
|`banner`|Conditionally Required|High|Required when the opportunity is a banner ad.|
|`video`|Conditionally Required|Very high|Required when the opportunity is a video ad.|
|`audio`|Conditionally Required|High|Required when the opportunity is an audio ad.|
|`native`|Conditionally Required|High|Required when the opportunity is a native ad.|
|`pmp`|Optional|High|Important when PMP or direct-deal context is present.|
|`metric[]`|Optional|Medium|Carries exchange-provided performance or quality metrics.|
|`banner.format[]`|Recommended|High|Defines the allowed banner size candidates.|
|`video.mimes`|Required|Very high|Lists the supported video MIME types.|
|`video.protocols`|Recommended|Very high|Declares supported VAST/protocol combinations.|
|`audio.mimes`|Required|High|Lists the supported audio MIME types.|
|`native.request`|Required|Very high|Carries the Native Ad Specification request payload.|

## 3. Frequently Reviewed Detailed Fields

|Object / Field|Spec Status|Practical Importance|Description|
|---|---|---|---|
|`source.fd`|Recommended|Medium|Indicates whether the exchange or an upstream source made the final sale decision.|
|`source.tid`|Recommended|High|Common transaction ID shared across participants for reconciliation.|
|`source.pchain`|Recommended|Medium|Carries payment chain information.|
|`deal.id`|Required|Very high|Unique identifier for a PMP or direct deal.|
|`site.id`|Recommended|High|Exchange-defined site identifier.|
|`app.id`|Recommended|High|Exchange-defined app identifier.|
|`device.ua`|Recommended|High|Browser or runtime user-agent signal.|
|`device.ip`|Recommended|High|Commonly used for geo and network context.|
|`device.dnt`|Recommended|High|Do Not Track signal.|
|`device.lmt`|Recommended|Very high|Limit Ad Tracking signal with strong practical impact.|
|`user.id`|Recommended|High|Exchange-defined user identifier.|
|`user.buyeruid`|Recommended|High|Buyer-mapped user identifier.|
|`metric.type`|Required|Medium|The metric name, typically pre-agreed with bidders.|
|`metric.value`|Required|Medium|The metric value. Probabilistic values should be in the 0.0 to 1.0 range.|
|`metric.vendor`|Recommended|Medium|Describes the metric source.|

## Implementation Notes

- `site` and `app` are generally not used together. The channel context determines which one is primary.
- In real SSP, DSP, and measurement integrations, many `recommended` fields are treated as practically essential.
- Signals such as `source`, `regs`, `schain`, and ID provenance extend the trust layer beyond a narrow required-field checklist.
- This page should be read as a quick reference. For design or implementation review, it works best alongside the more detailed object-level documents.

## Next Documents

- [How to Read site, app, and imp](/en/standards/site-app-imp)
- [How to read OpenRTB top-level control fields](/en/standards/top-level-control-fields)
- [What OpenRTB 3.0 aimed for and what returned in 2.6](/en/standards/openrtb-3-and-2-6)

## Related Documents

- [What Is OpenRTB](/en/standards/openrtb-overview)
- [Understanding sellers.json and schain](/en/measurement/sellers-json-and-schain)

## Official References

- [OpenRTB 2.6 PDF](https://iabtechlab.com/wp-content/uploads/2022/04/OpenRTB-2-6_FINAL.pdf)
- [IAB Tech Lab OpenRTB Standard](https://dev.iabtechlab.com/standards/openrtb/)
- [The OpenRTB updates you should adopt in 2025](https://iabtechlab.com/the-openrtb-updates-you-should-adopt-in-2025-courtesy-of-iab-tech-lab/)
