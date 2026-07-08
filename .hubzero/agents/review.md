# Review

Every completed implementation should be reviewed before it is considered finished.

Review is not about finding mistakes.

It is about ensuring the final result reflects HubZero's engineering standards, design philosophy, and long-term quality expectations.

Never assume that working software is finished software.

---

# Review the Problem

Before reviewing the implementation, verify that the original problem has actually been solved.

Ask:

* Does this satisfy the user's request?
* Does it satisfy the business objective?
* Does it improve the product?

A technically correct solution may still solve the wrong problem.

---

# Review the User Experience

Evaluate the complete experience rather than isolated components.

Consider:

* Clarity
* Navigation
* Information hierarchy
* Discoverability
* Accessibility
* Feedback
* Responsiveness

The interface should feel effortless to use.

---

# Review the Design

Confirm that the implementation remains consistent with:

* `.hubzero/design/principles.md`
* The selected architecture
* The selected SEO strategy
* The selected design language

Ask:

* Does this feel intentional?
* Does this improve trust?
* Does it preserve the blueprint's personality?
* Is anything visually unnecessary?

Elegance should emerge from thoughtful decisions rather than decoration.

---

# Review the Architecture

Verify that the implementation respects the chosen architecture.

The website should clearly communicate its intended purpose.

New features should strengthen the overall experience rather than disrupt it.

---

# Review the SEO

Confirm that the implementation remains consistent with the selected SEO strategy.

Evaluate:

* Information architecture
* Metadata
* Heading hierarchy
* Internal linking
* Structured data
* Crawlability
* Content organization

The implementation should improve discoverability without compromising user experience.

---

# Review the Engineering

Evaluate:

* Simplicity
* Maintainability
* Readability
* Reusability
* Scalability

Avoid unnecessary complexity.

Prefer solutions another engineer can quickly understand and confidently extend.

---

# Review Consistency

The project should feel cohesive.

Check for consistency in:

* Layout
* Components
* Spacing
* Typography
* Motion
* Content structure
* Naming
* Interaction patterns

Consistency builds confidence.

---

# Review Production Readiness

Confirm that the implementation is suitable for real-world deployment.

Verify that:

* Placeholder content has been removed where appropriate.
* Error states have been considered.
* Empty states behave correctly.
* Responsive layouts function correctly.
* Accessibility has not been compromised.
* Existing functionality remains intact.

Blueprints should always move toward production readiness.

---

# Improve Before Approving

If something can be meaningfully improved without introducing unnecessary complexity, improve it.

Do not stop at "good enough."

Pursue thoughtful refinement.

---

# Final Question

Before completing the review, ask one final question:

> If this implementation represented HubZero publicly, would we be proud to ship it?

If the answer is anything less than an unqualified **yes**, continue refining.

---

# Guiding Principle

A review is successful when the final result is not only correct, but thoughtful, elegant, maintainable, and worthy of becoming part of a HubZero blueprint.
