# DesignMastery Improvement Roadmap

This document outlines strategic improvements for the DesignMastery application, categorized by domain. These suggestions aim to elevate the platform from a prototype/educational tool to a production-grade Learning Management System (LMS).

---

## 1. Engineering & Architecture

### Performance Optimization
*   **Service Workers (PWA):** Implement `vite-plugin-pwa` or similar to enable offline reading capabilities. Users should be able to download lessons for subway/airplane study.
*   **Image Optimization:** Replace external placeholder images (Picsum) with locally optimized WebP assets or a CDN with automatic format delivery to reduce Largest Contentful Paint (LCP).
*   **Virtualization:** Implement list virtualization (e.g., `react-window`) for the Lesson Library page if the number of lessons exceeds 50 to maintain 60fps scrolling.

### Code Quality & Testing
*   **Unit Testing:** Implement `Vitest` and `React Testing Library`. Specifically target the `InteractiveDemos` to ensure logic (like the Debounce or Throttle demos) behaves correctly.
*   **E2E Testing:** Add `Playwright` tests for critical flows: Navigation -> Lesson View -> PDF Export -> Admin Login.
*   **Strict Typing:** Tighten TypeScript strictness. Currently, some demo components use loose types for rapid prototyping. Define strict interfaces for all component props.

### Backend Integration
*   **CMS Integration:** Move `data.ts` to a Headless CMS (Contentful, Strapi, or Sanity). This allows non-developers to update lesson content without redeploying the code.
*   **Auth System:** Replace the mock PIN authentication in `AdminPage` with a real provider (Firebase Auth, Auth0, or Supabase) to secure the admin route.

---

## 2. User Experience (UX) & Features

### Engagement
*   **User Accounts & Progress:** Add a user layer to track "Read" vs. "Unread" lessons. Implement the "Habit Streak" and "Mastery Path" concepts (taught in the lessons) into the actual app UI.
*   **Bookmarking:** Allow users to "Star" specific lessons for quick reference later.
*   **Search Enhancements:** Implement fuzzy search (using `fuse.js`) for the library to handle typos and search within lesson body content, not just titles.

### Interactivity
*   **Live Code Playground:** Integrate `Sandpack` or `Monaco Editor`. Allow users to actually edit the CSS/Tailwind classes in the demos and see changes live, rather than just using pre-set sliders.
*   **Quizzes:** Add a "Knowledge Check" at the bottom of every lesson. 3 simple questions to verify understanding before marking the lesson complete.

### Personalization
*   **Theme Toggle:** The app is currently "Dark Mode Default". Implement a global context to toggle Light/Dark mode for the entire application wrapper, not just inside the specific Dark Mode demo.
*   **Font Sizing:** Add accessibility controls in the Navbar to increase base font size for the entire application.

---

## 3. Accessibility (A11y)

### Compliance
*   **Audit:** Run a full WCAG 2.1 AA audit.
*   **Screen Readers:** Ensure all `framer-motion` animations have `aria-hidden` or appropriate `role` attributes. The interactive visuals (like the Bento Grid) need text alternatives describing the layout.
*   **Reduced Motion:** Respect `prefers-reduced-motion` media query. Globally disable heavy animations (like the floating orbs in Glassmorphism) if the user has this system setting enabled.
*   **Focus Management:** Ensure the custom "Skip to Content" links are present for keyboard users.

---

## 4. Content Strategy

### Curriculum Expansion
*   **"Anti-Patterns" Category:** A new section dedicated to bad design. Show a "Do This, Not That" side-by-side comparison for every topic.
*   **Case Studies:** Deep dives into specific apps (e.g., "How Airbnb does Search", "How Spotify does Navigation").
*   **Gestalt Principles:** Add lessons on Proximity, Similarity, Continuity, Closure, and Figure/Ground.

### Media
*   **Video Integration:** Embed short (30s) loop videos for complex interactions that are hard to simulate with code alone (e.g., complex 3D page transitions).

---

## 5. Admin Console Enhancements

### Functionality
*   **WYSIWYG Editor:** Replace the mock content list with a Markdown editor (like `react-markdown-editor-lite`) so admins can write lessons directly in the browser.
*   **Analytics Dashboard:** Connect the charts in the Admin Dashboard to a real analytics provider (PostHog or Google Analytics 4) to visualize real traffic retention.
*   **User Management:** Ability to ban users or reset passwords (if auth is implemented).

---

## 6. PDF / E-Book Export

### Refinement
*   **Custom Selection:** Allow users to select *which* chapters to include in the PDF export (e.g., "Export only Performance Module").
*   **Cover Page Customization:** Let users add their name to the cover page ("Prepared for: [Name]").
*   **Hyperlinks:** Ensure internal links within the PDF (Table of Contents) work correctly in the exported file.
