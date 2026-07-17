# Experience Standard

This document defines how every released HubZero blueprint should feel.

Implementation alone does not produce a portfolio-quality blueprint. A blueprint can pass Engineering Review, satisfy every architectural requirement, and still feel like a starter template. This standard exists to close that gap.

A released blueprint should never feel like a demonstration of what a website *could* look like. It should feel like something HubZero would confidently show a prospective client.

---

# The Standard

A released blueprint satisfies every item below.

* **Believable fictional company.** The placeholder business has a coherent name, industry, tone, and story. Nothing about it reads as a filler.
* **Believable supporting content.** Pricing, FAQs, legal pages, company history, and support content read as production-ready rather than filler. See `content.md` in this directory.
* **Premium interactions.** Motion, hover states, and transitions are deliberate — see `.hubzero/design/principles.md` and the active Design Language's Motion Language.
* **Cohesive imagery.** Photography shares a consistent visual language across every page. See `photography.md` in this directory.
* **Integrated branding.** Logo, favicon, brand mark, and Open Graph assets exist and are wired into metadata, navigation, and footer — not merely generated and left unused. See `branding.md` in this directory.
* **Unified design system.** Corners, borders, shadows, spacing, buttons, cards, forms, and navigation all read as one system. See `.hubzero/agents/design-review.md`.
* **No unfinished sections.** Every page a visitor can reach is complete.
* **No placeholder blocks.** Gray boxes, lorem ipsum, and "image coming soon" states do not ship.
* **Deliberate mobile experience.** See `.hubzero/design/mobile-experience.md`.

---

# When This Applies

This standard is verified during the Experience Generation pass of Design Review (`.hubzero/agents/design-review.md`), after Engineering Review and the general Design Review pass, before Release Verification.

Brand Generation happens before Content Generation, which happens before Photography Generation. All three happen after implementation is architecturally complete — never during implementation itself, and never before the Architecture and Design Language have been chosen.

---

# Guiding Question

> Would a prospective client who saw this blueprint, with zero context, conclude that HubZero cares about details — or that this is an unfinished starter template?

If the honest answer is the second, the blueprint has not met this standard yet.
