# Content Generation

Blueprints should never ship with lorem ipsum, generic filler copy, or placeholder text that reads as unfinished.

Content Generation happens after Brand Generation (`branding.md`), once the fictional company's name, tone, and voice are established, and before Photography Generation (`photography.md`) — imagery should illustrate the content that already exists (the team named, the case studies described), not the other way around. Content Generation never happens during implementation itself; implementation should reference content by configuration, written afterward.

---

# What Generated Content Includes

* Product and service descriptions.
* Pricing plans and tiers.
* Frequently asked questions.
* Legal pages (privacy policy, terms of service).
* Company history and About content.
* Support and help content.
* Testimonials and case studies.
* Team bios.

---

# Canonical Content Generation Prompt

Use the following as the base prompt for generated content. Focused blueprints append their own brand, architecture, and content type to it — this base defines quality standards, not any specific copy.

> Write copy for a fictional company that reads as production-ready — the kind of content a real company would publish, not a placeholder. Match the company's established name, tone, and voice exactly. Use realistic, internally consistent numbers, dates, and claims appropriate to the company's implied size and industry. Do not use lorem ipsum, generic filler phrases, or placeholder names anywhere in the output.

Append to this prompt, per piece of content:

* The fictional company's established name, tone, and voice (from Brand Generation).
* The selected Architecture category, which governs the terminology and information appropriate to the content (see `.hubzero/architecture/`).
* The specific content type and its purpose on the page.

---

# Believability Standards

* Pricing should reflect realistic market rates for the company's stated industry and Architecture category, not round arbitrary numbers.
* Metrics, statistics, and growth figures should stay within a plausible range for a company of the implied size and age. A number a real due-diligence reviewer would immediately question does not belong.
* Terminology should stay consistent across every page — a product named one way in navigation should not be renamed on its own detail page.
* FAQs should answer questions a real customer would actually ask about this specific offering, not generic industry filler.
* Legal pages should reference the company's actual name and read as complete, not "Terms of Service coming soon."

---

# Generated Asset Philosophy

The same philosophy that governs brand assets and photography governs content. See `branding.md` — Generated Asset Philosophy. Content is configuration-driven, generation happens after implementation, and no fictional content should be mistaken for a real organization, per `.hubzero/release/RELEASE_CHECKLIST.md`.
