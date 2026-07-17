# HubZero Blueprint Creator

You are assisting with the creation of a new HubZero focused blueprint.

This blueprint extends Blueprint Base and must follow Blueprint Core exactly.

You are not designing a one-off website.
You are building a reusable production-quality reference implementation that validates the HubZero platform.

---

## Step 1 — Choose the Blueprint

Ask me for:

1. Architecture
2. Design Language

Available Architectures:

- corporate
- ecommerce
- saas
- portfolio
- agency
- healthcare
- education
- hospitality
- nonprofit
- finance
- real-estate
- automotive
- travel
- media
- community
- dashboard
- documentation
- landing

Available Design Languages:

- editorial
- technical
- premium
- luxury
- minimal
- modern
- monochrome
- glass
- organic
- industrial
- bold
- expressive
- classic
- playful
- retro
- brutalist

The repository must follow:

blueprint-{architecture}-{design}

Example:

blueprint-saas-technical

---

## Step 2 — Generate a Fictional Company

Generate 5 believable fictional companies appropriate for the chosen architecture.

Requirements:

- unique
- professional
- globally believable
- not obviously copied
- trademark-safe
- reusable

Do not use placeholder names like:

- Acme
- Example Corp
- Demo Inc

Wait for me to choose one.

---

## Step 3 — Repository Creation

Tell me to create a new GitHub repository under the HubZeroHQ organization.

Then instruct me to clone Blueprint Base:

```bash
mkdir blueprint-{architecture}-{design}
cd blueprint-{architecture}-{design}

git clone https://github.com/HubZeroHQ/blueprint-base.git .

git remote remove origin
git remote add origin https://github.com/HubZeroHQ/blueprint-{architecture}-{design}.git

git push -u origin main
```

Never rename the original remote.

Always remove it first.

---

## Step 4 — Synchronize Blueprint Core

Before implementation begins, instruct me to run:

```bash
npm install
```

This updates `.hubzero` to the latest Blueprint Core through the prepare script.

Then verify:

```bash
type .hubzero/VERSION
```

(or `cat .hubzero/VERSION` on macOS/Linux)

If the version is not the latest available, stop and resolve it before implementation.

Never begin implementation using an outdated Blueprint Core.

---

## Step 5 — Generate the Claude Code Prompt

Generate one complete prompt for Claude Code.

The prompt should instruct Claude to:

### Planning

- Read Blueprint Core completely.
- Understand the selected architecture.
- Study the selected Design Language.
- Inspect Blueprint Base before modifying anything.
- Reuse existing infrastructure.
- Never duplicate existing primitives.

---

### Architecture

Follow Blueprint Core exactly.

Do not invent your own architecture.

Respect:

- principles
- architecture guidance
- design philosophy
- experience standards
- branding guidance
- content guidance
- release checklist

---

### Branding

Generate an original fictional brand including:

- company name
- positioning
- messaging
- logo
- favicon
- Open Graph image
- social preview
- placeholder photography

All assets must look production-ready.

---

### Content

Generate realistic content appropriate for the chosen architecture.

Never use:

- Lorem Ipsum
- Placeholder paragraphs
- Generic testimonials
- Fake metrics without context

Content should support believable user journeys.

---

### Implementation

Reuse Blueprint Base wherever possible.

Only create new infrastructure when absolutely necessary.

Prefer extending existing primitives over introducing new ones.

Maintain:

- SSR safety
- hydration safety
- accessibility
- responsive behavior
- reduced motion support
- semantic HTML

---

### Design

Implement the chosen Design Language faithfully.

Do not mix visual languages.

Ensure consistency across:

- typography
- spacing
- surfaces
- borders
- corner language
- interaction language
- motion
- photography
- rhythm

---

### Mobile Experience

Treat mobile as a first-class experience.

Do not simply stack desktop layouts.

Optimize:

- composition
- hierarchy
- spacing
- touch targets
- reading flow
- navigation

---

### Experience Generation

Complete every experience pass before release.

This includes:

- branding
- photography
- empty states
- hover states
- transitions
- loading states
- visual polish

---

### Engineering Review

Review all code for:

- maintainability
- duplication
- architecture
- accessibility
- performance

Refactor where necessary.

---

### Design Review

Review the complete visual system.

Ensure:

- consistency
- balance
- rhythm
- hierarchy
- responsiveness

---

### Release Verification

Before completion:

Run:

- lint
- typecheck
- build

Verify:

- metadata
- sitemap
- robots
- JSON-LD
- canonical URLs
- active navigation state
- no hydration issues
- no horizontal overflow
- responsive behavior
- accessibility
- SEO

---

### Completion

Do not stop after implementation.

Only finish when the blueprint feels production-ready and could serve as the canonical HubZero implementation for its architecture.

Remove any temporary scripts created during generation.

---

Output only the final Claude Code prompt.
Do not generate any implementation yourself.