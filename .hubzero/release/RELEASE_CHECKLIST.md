# HubZero Blueprint Release Checklist

> [!IMPORTANT]
> **This document is part of the HubZero Blueprint Core and is considered a canonical engineering standard.**
>
> **It must never be modified, rewritten, reformatted, or extended by AI agents, automation tools, or end users.**
>
> This checklist defines the minimum release requirements for every HubZero Focused Blueprint.
>
> If a blueprint requires additional release requirements, they must be documented separately within that blueprint's own documentation. They must **never** be added to, removed from, or alter this document.
>
> AI agents may **read**, **reference**, and **execute** this checklist, but they must **never edit it** under any circumstances.
>
> Any changes to this document may only be made by the maintainers of the HubZero Blueprint Core through an intentional versioned update.

---

# HubZero Blueprint Release Checklist

This checklist defines the minimum quality standard required before any HubZero Focused Blueprint may be released.

A blueprint is considered **production-ready** only when every applicable item has been completed successfully.

---

# 1. Repository

## Repository Identity

- [ ] Repository name matches the blueprint name.
- [ ] Package name matches the blueprint.
- [ ] Version updated appropriately.
- [ ] Repository URLs are correct.
- [ ] License is present.
- [ ] Author information is correct.
- [ ] Keywords and description are complete.

---

# 2. Blueprint Compliance

## Blueprint Base

- [ ] Blueprint Base infrastructure has not been recreated.
- [ ] Existing providers have been reused.
- [ ] Existing utilities have been reused.
- [ ] Existing configuration has been extended rather than replaced.
- [ ] Existing SEO infrastructure remains intact.

## Blueprint Core

- [ ] `.hubzero` remains unchanged.
- [ ] Architecture guidance has been followed.
- [ ] Design language has been followed.
- [ ] SEO guidance has been followed.
- [ ] Engineering guidance has been followed.

---

# 3. Engineering

## Code Quality

- [ ] No unused code.
- [ ] No dead files.
- [ ] No duplicated logic.
- [ ] No unnecessary abstractions.
- [ ] No unnecessary dependencies.
- [ ] TypeScript used consistently.
- [ ] No `any` unless absolutely necessary.

---

# 4. Design System

Verify consistency across the entire blueprint.

- [ ] Typography
- [ ] Color tokens
- [ ] Spacing scale
- [ ] Containers
- [ ] Buttons
- [ ] Cards
- [ ] Forms
- [ ] Navigation
- [ ] Footer
- [ ] Responsive behavior
- [ ] Motion consistency

---

# 5. Content Architecture

Verify content remains reusable.

- [ ] Branding isolated.
- [ ] Navigation configurable.
- [ ] Services configurable.
- [ ] Work configurable.
- [ ] Team configurable.
- [ ] Blog configurable.
- [ ] Footer configurable.
- [ ] Metadata configurable.
- [ ] Images configurable.

Avoid embedding large amounts of content directly inside components whenever practical.

---

# 6. Placeholder Content

Verify all placeholder content.

- [ ] Fictional company.
- [ ] Fictional people.
- [ ] Fictional clients.
- [ ] Fictional case studies.
- [ ] Fictional testimonials.
- [ ] Fictional blog articles.
- [ ] Fictional contact information.
- [ ] Placeholder content clearly documented.

No placeholder should be easily mistaken for a real organization.

---

# 7. Images

Verify placeholder imagery.

- [ ] Images generated or licensed appropriately.
- [ ] Images optimized.
- [ ] Responsive.
- [ ] Consistent visual language.
- [ ] Correct aspect ratios.
- [ ] No broken links.
- [ ] Alt text present.
- [ ] Easy to replace.

---

# 8. Accessibility

Verify accessibility.

- [ ] Semantic HTML.
- [ ] Proper heading hierarchy.
- [ ] Keyboard navigation.
- [ ] Focus states.
- [ ] Accessible forms.
- [ ] Sufficient color contrast.
- [ ] Reduced motion respected.
- [ ] Meaningful alt text.

Target WCAG AA compliance.

---

# 9. SEO

Verify SEO.

- [ ] Metadata.
- [ ] Open Graph.
- [ ] Twitter metadata.
- [ ] Canonical URLs.
- [ ] Robots.
- [ ] Sitemap.
- [ ] Structured data where appropriate.

Reuse Blueprint Base infrastructure.

---

# 10. Pages

Verify every required page.

- [ ] Home
- [ ] About
- [ ] Services
- [ ] Service Detail
- [ ] Work
- [ ] Work Detail
- [ ] Industries
- [ ] Team
- [ ] Careers
- [ ] Blog
- [ ] Blog Article
- [ ] Contact
- [ ] Privacy
- [ ] Terms
- [ ] 404

---

# 11. Runtime Verification

Verify every route.

- [ ] Loads successfully.
- [ ] No console errors.
- [ ] No hydration warnings.
- [ ] No runtime exceptions.
- [ ] Dynamic routes function correctly.
- [ ] Navigation works.
- [ ] Images load correctly.

---

# 12. Build Verification

Run every verification command.

```bash
npm install
npm run lint
npm run typecheck
npm run build
```

Confirm:

- [ ] Installation successful.
- [ ] Lint passes.
- [ ] TypeScript passes.
- [ ] Production build passes.

---

# 13. Documentation

Verify documentation.

- [ ] README complete.
- [ ] Installation instructions.
- [ ] Development instructions.
- [ ] Build instructions.
- [ ] Customization guide.
- [ ] Folder structure explained.
- [ ] Placeholder content documented.
- [ ] Screenshots included.

---

# 14. Release Assets

Prepare release assets.

- [ ] Homepage screenshot.
- [ ] Additional page screenshots.
- [ ] Release notes.
- [ ] Changelog updated.
- [ ] Version bumped.
- [ ] Git tag prepared.

---

# 15. Experience Standard

Verify the blueprint satisfies `.hubzero/experience/EXPERIENCE_STANDARD.md` in full.

- [ ] Engineering Review complete.
- [ ] Design Review complete, including the Mobile Experience Overhaul pass.
- [ ] Experience Generation Verification pass complete.
- [ ] Brand assets generated and integrated (`.hubzero/experience/branding.md`).
- [ ] Photography generated and integrated (`.hubzero/experience/photography.md`).
- [ ] No temporary generation tooling remains in the repository.

This section verifies the experience standard, not just technical completeness. Do not duplicate its criteria here — consult the referenced documents directly.

---

# 16. Final Review

Review the blueprint holistically.

Ask:

- Does this feel like a reusable blueprint rather than a finished client website?
- Is the branding easy to replace?
- Is the architecture maintainable?
- Does the design language remain consistent?
- Could another engineer confidently build upon this foundation?

If any answer is "No", address it before releasing.

---

# Release Approval

## Verification

- [ ] All checklist items complete.
- [ ] Repository reviewed.
- [ ] Final manual walkthrough completed.

## Release Decision

- [ ] Ready for Release
- [ ] Requires Additional Work

---

## Release Information

Blueprint:

Version:

Release Date:

Reviewed By:

Approved By:

Git Commit:

Git Tag: