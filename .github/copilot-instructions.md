# Kartoffelpower — Permanent Project Instructions

## Project goal

Redevelop the Kartoffelpower website as a professional, modern, responsive German-language website and customer-facing online shop.

The implementation must preserve the company's existing identity, history, products, contact information, and all approved business facts. Original business content will be supplied separately; never invent or infer missing information.

## Scope and delivery order

1. Inspect and understand existing code before proposing or making changes.
2. Build the public website first.
3. Complete the customer-facing shop afterward, including all customer flows.
4. Do not begin the admin dashboard until the public website and shop are complete and explicitly approved.
5. Work in small, clearly defined phases. Implement only the phase approved in the current instruction.
6. Never generate or replace the entire project in one pass.

## Customer-facing features

The completed shop must support:

- Customer registration and login
- Guest checkout
- Registered checkout
- Shopping cart and cart persistence
- Online payments through Stripe
- Home delivery and local collection as fulfilment options
- Loyalty points and membership tiers with configurable discounts

Do not activate home delivery until the owner confirms all required details, including delivery zones, fees, minimum order value, and available time slots. Until confirmed, keep delivery disabled and do not create assumptions or placeholder policies.

The admin dashboard is outside the current implementation scope until the public website and shop are explicitly completed.

## Technology

- Use the Next.js App Router
- Use TypeScript in strict mode
- Use Tailwind CSS
- Use Supabase for authentication and database functionality
- Use Stripe for online payments when explicitly entering the payment phase
- Prefer server components and server actions where appropriate
- Use reusable components and a clean, feature-oriented architecture
- Follow the existing project structure unless a change is explicitly approved
- Keep third-party integrations behind secure server-side boundaries

## Language and content

- All customer-facing text, labels, errors, metadata, notifications, and navigation must be in German
- Use professional, consistent German appropriate for an established local food business
- Use formal or approved tone consistently; do not mix languages in customer-facing interfaces
- Preserve original German wording and meaning where supplied
- Do not invent products, descriptions, ingredients, prices, availability, opening hours, delivery terms, legal policies, deadlines, or company history
- Do not add testimonials, awards, certifications, statistics, or contact details without approved source information
- If required information is missing or unclear, stop and request it instead of fabricating placeholder business content

## Accessibility and UX

- Build semantic, keyboard-accessible interfaces
- Provide visible focus states and accessible labels
- Use appropriate heading hierarchy and landmark structure
- Ensure sufficient color contrast
- Use responsive layouts for mobile, tablet, and desktop
- Preserve reduced-motion preferences and avoid unnecessary animation
- Use clear loading, empty, validation, success, and error states
- Avoid intrusive popups and preserve normal browser navigation behavior

## Data, validation, and security

- Validate and sanitize all user input on both client and server where applicable
- Use Zod and React Hook Form for form workflows when appropriate
- Use Supabase RLS and least-privilege access patterns
- Never expose secrets, service-role keys, Stripe secrets, or private environment variables in client-side code
- Never place secrets directly in source files or public configuration
- Use environment variables only for approved local and deployment configuration
- Handle external service failures gracefully and show concise German error messages
- Log only information that is safe and operationally useful
- Do not trust client-side prices, totals, fulfilment options, or loyalty calculations; revalidate on the server

## Ecommerce architecture expectations

- Keep product, cart, checkout, payment, fulfilment, and loyalty logic separated into maintainable modules
- Store only approved business and catalogue data
- Make delivery and collection configuration explicit; default delivery to disabled until owner approval
- Implement loyalty points and tier discount rules as configurable, server-enforced values rather than hard-coded business claims
- Prepare payment integration with server-side Stripe operations and secure webhooks
- Support idempotent checkout and payment status handling
- Preserve privacy, consent, and legal considerations without inventing policy wording

## Engineering workflow

Before changing files:

1. Explain the intended changes and affected files
2. Inspect relevant existing code and configuration
3. Make the smallest coherent set of changes for the approved phase
4. Preserve existing work and do not overwrite files unnecessarily
5. Report what changed and identify anything that still requires approval
6. Before using a new dependency, check whether an existing installed package or native Next.js feature can accomplish the task.
7. Do not install additional packages without explaining why they are needed.
8. Prefer lightweight solutions to avoid unnecessary dependencies.

After a change:

- Run relevant linting, type checking, and tests/build checks
- Inspect diagnostics and fix newly introduced issues
- Do not declare completion without validation
- Keep changes focused; do not add unrequested features or speculative pages

## Existing Next.js compatibility

This project uses Next.js 16.4.6. Its APIs and conventions may differ from older Next.js versions. Before editing Next.js framework code, read the relevant guide in `node_modules/next/dist/docs/` and follow current deprecation guidance.

## User communication

- Keep explanations short, practical, and direct
- Identify assumptions or missing approved information clearly
- Ask for original content or business decisions before implementing affected pages or policies
- Do not infer approval from silence or missing data
