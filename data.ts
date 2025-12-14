

import { Lesson } from './types';

export const lessons: Lesson[] = [
  {
    id: 'theme-bioluminescent',
    title: 'Theme: Bioluminescent',
    category: 'Theme',
    description: 'A deep-sea inspired aesthetic combining dark navy backgrounds with glowing organic accents.',
    content: `
# Bioluminescent Design

Inspired by the deep ocean, **Bioluminescent UI** is a specialized dark mode aesthetic. Unlike standard dark modes (which use neutral greys), this theme relies on deep saturated blues and high-contrast neon accents.

### Color Palette
*   **Abyssal Background**: \`#020617\` (Slate 950) or deep indigo. It creates a sense of infinite depth.
*   **Electric Accents**: Cyan (\`#06b6d4\`) and Lime (\`#84cc16\`) mimic the light produced by deep-sea organisms.
*   **Glow Effects**: Using CSS \`box-shadow\` or \`drop-shadow\` to create a halo around interactive elements, simulating light emission.

### Usage
This theme is popular in developer tools, crypto platforms, and gaming interfaces where a "futuristic" or "immersive" feel is desired.
    `,
    interactiveComponent: 'BioluminescentDemo',
    tags: ['Visual Design', 'Dark Mode', 'CSS', 'Theming']
  },
  {
    id: 'theme-swiss-polarity',
    title: 'Theme: Swiss Polarity',
    category: 'Theme',
    description: 'A stark, high-contrast aesthetic rooted in the International Typographic Style.',
    content: `
# Swiss Polarity (Neo-Brutalism)

**Swiss Polarity** takes the principles of the **International Typographic Style** (1950s) and applies them to modern web interfaces. It creates clarity through extreme contrast and rigid structure.

### Key Characteristics
1.  **Grid Lines**: Visible 1px borders separate content areas explicitly.
2.  **No Border Radius**: Buttons and cards are sharp rectangles (\`rounded-none\`).
3.  **High Contrast**: Pure Black (\`#000000\`) on Off-White (\`#FDFBF7\`) or raw primary colors (Red, Blue).
4.  **Typography**: Large, bold sans-serif fonts (Helvetica, Inter) act as the primary visual element.

### Why it works
It conveys honesty and functionality. By removing shadows, gradients, and rounded corners, the interface feels "raw" and "tool-like".
    `,
    interactiveComponent: 'SwissPolarityDemo',
    tags: ['Visual Design', 'Brutalism', 'Layout', 'Theming']
  },
  {
    id: 'case-study-imprint',
    title: 'Case Study: Imprint',
    category: 'Case Study',
    description: 'How Imprint reinvented non-fiction reading by treating phones as a tap-first medium.',
    content: `
# Imprint: The Visual Essay

**Imprint** is a Google Design Award winner that solves a specific problem: "reading" on a phone is physically exhausting. Walls of text lead to scrolling fatigue.

### The Core Insight
Imprint realized that Instagram Stories changed how we consume content. We prefer **tapping** over **scrolling**. Tapping is a discrete, measured action ("I am ready for the next bit"), whereas scrolling is continuous and imprecise.

### UI Mechanics
1.  **The Beat**: Content is broken into single sentences or phrases paired with a visual.
2.  **Dual Coding**: The visual updates *exactly* when the text updates. This synchronization binds the concept in memory.
3.  **Haptic Feedback**: Every tap has a subtle vibration, giving weight to the information.

### Why it works
It respects **Cognitive Load**. By showing only one sentence at a time, the user's working memory is never overwhelmed. It is the ultimate application of the "Chunking" principle.
    `,
    interactiveComponent: 'ImprintTap',
    tags: ['EdTech', 'Gestures', 'Mobile', 'Visual Design']
  },
  {
    id: 'case-study-linear',
    title: 'Case Study: Linear',
    category: 'Case Study',
    description: 'Analyzing the "Magical Feel" of Linear and its keyboard-first architecture.',
    content: `
# Linear: Designed for Flow

**Linear** (a project management tool) is famous for its "Cult of Quality." It feels faster than local software.

### The "Magical" Feel
What users describe as "magic" is actually a combination of three technical pillars:
1.  **Optimistic UI**: Every action happens instantly on the client. The server catches up later.
2.  **Keyboard First**: The mouse is optional. The \`Cmd+K\` command palette allows users to navigate anywhere without lifting their hands.
3.  **Sub-100ms Interaction**: Animations are tuned to be incredibly fast (approx 150ms-200ms). They provide context without slowing down the power user.

### The Command Palette
Linear popularized the \`Cmd+K\` menu in web apps. It flattens the information hierarchy. Instead of clicking *Settings > Profile > Edit*, you just type "Edit Profile".
    `,
    interactiveComponent: 'LinearCommandPalette',
    tags: ['SaaS', 'Performance', 'Keyboard', 'Shortcuts']
  },
  {
    id: 'case-study-duolingo',
    title: 'Case Study: Duolingo',
    category: 'Case Study',
    description: 'How Emotional Design and "The Owl" drive daily retention metrics.',
    content: `
# Duolingo: Weaponized Emotion

Duolingo is arguably the most successful EdTech app in history. Its secret weapon isn't linguistic pedagogy—it's **Emotional Design**.

### The Mascot (Duo)
Duo isn't just a logo; he is a state machine.
*   **Happy**: When you maintain your streak.
*   **Crying**: When you miss a notification.
*   **Passive Aggressive**: When you ignore the app for 3 days.

### Variable Rewards
Duolingo creates a "Compulsion Loop" using the **Streak**. Breaking the streak feels like a genuine loss of social capital (Loss Aversion).

> **The Lesson**: If you can make users feel an emotional connection (even guilt) towards your UI, retention skyrockets.
    `,
    interactiveComponent: 'DuolingoMascot',
    tags: ['Gamification', 'Emotion', 'Retention', 'Mascots']
  },
  {
    id: 'case-study-airbnb',
    title: 'Case Study: Airbnb',
    category: 'Case Study',
    description: 'Balancing density and clarity in search and discovery interfaces.',
    content: `
# Airbnb: The Trust Interface

Airbnb's core product challenge is **Trust**. You are sleeping in a stranger's house. The UI must convey cleanliness, safety, and accuracy.

### Split View (Map vs List)
Airbnb perfected the interaction between a list of cards and a map.
1.  **Hover Linking**: Hovering a card highlights the pin on the map. This connects "Price/Style" (List) with "Location" (Map).
2.  **Typography**: They developed their own font (Cereal) to ensure readability across devices, using heavy weights for prices to make browsing scan-friendly.

### Skeleton Loading
Airbnb was one of the first major adopters of complex **Skeleton Screens**. Instead of a spinner, you see the shape of the house cards, which lowers the perceived wait time during search.
    `,
    interactiveComponent: 'AirbnbMapToggle',
    tags: ['Marketplace', 'Maps', 'Trust', 'Layout']
  },
  {
    id: 'glassmorphism',
    title: 'Glassmorphism Deep Dive',
    category: 'UI Trend',
    description: 'Learn how to create the frosted glass effect using backdrop filters and translucency.',
    content: `
# Glassmorphism

Glassmorphism is a trend that emphasizes light and dark capabilities to create a sense of depth. Key characteristics include:

*   **Translucency**: The background is blurred, creating a "frosted glass" look.
*   **Vivid colors**: Use colorful backgrounds to highlight the blurred effect.
*   **Subtle borders**: A semi-transparent white border adds definition.

### CSS Implementation
The core property is \`backdrop-filter: blur(10px)\`. In Tailwind, we use \`backdrop-blur-md\` or \`backdrop-blur-xl\`.

> Always add a fallback background color for browsers that don't support backdrop-filter.
    `,
    interactiveComponent: 'Glassmorphism',
    tags: ['CSS', 'Tailwind', 'Visual Design']
  },
  {
    id: 'mystery-meat-navigation',
    title: 'Anti-Pattern: Mystery Meat Navigation',
    category: 'Anti-Pattern',
    description: 'Why you should never force users to hover over elements to figure out what they do.',
    content: `
# Mystery Meat Navigation

Coined in 1998 by Vincent Flanders, **Mystery Meat Navigation** (MMN) refers to buttons or links that don't look like clickable elements until you hover over them.

### Why it fails
1.  **Discovery**: Users cannot predict where they can click.
2.  **Mobile**: There is no "hover" state on touch screens. MMN renders your site unusable on mobile.
3.  **Accessibility**: Screen readers and keyboard users often struggle to identify these controls.

### The Rule
Form follows function. A button should look like a button. A link should look like a link.
    `,
    interactiveComponent: 'MysteryNavigationDemo',
    tags: ['UX', 'Bad Design', 'Accessibility']
  },
  {
    id: 'scroll-jacking',
    title: 'Anti-Pattern: Scroll Jacking',
    category: 'Anti-Pattern',
    description: 'The usability disaster of overriding the browser\'s native scrolling behavior.',
    content: `
# Scroll Jacking

Scroll Jacking occurs when a website overrides the native scroll mechanism to create a "smoother" or "step-based" experience.

### The Problem
*   **Loss of Control**: Users have spent years building muscle memory for how their mouse wheel or trackpad behaves. Changing the speed or direction feels jarring (motion sickness).
*   **Performance**: JavaScript-driven scrolling is often laggier than the browser's optimized native thread.

> **Exception**: "Scrollytelling" (where scroll *position* triggers animation) is fine, as long as 1px of scroll equals 1px of movement.
    `,
    interactiveComponent: 'ScrollJackingDemo',
    tags: ['UX', 'Performance', 'Bad Design']
  },
  {
    id: 'gestalt-proximity',
    title: 'Gestalt: Law of Proximity',
    category: 'Gestalt',
    description: 'Elements that are close together are perceived as a group.',
    content: `
# The Law of Proximity

The human brain seeks patterns. The strongest grouping mechanism is **Proximity**: things that are close to each other are related.

### UI Application
*   **Whitespace**: You don't need borders to separate content. Simply increasing margin/padding between two groups is enough to tell the user they are separate.
*   **Form Labels**: A label should be closer to its input field than to the input field above it.

> If you have to use a line to separate content, your whitespace is likely incorrect.
    `,
    interactiveComponent: 'GestaltProximityDemo',
    tags: ['Psychology', 'Layout', 'Visual Design']
  },
  {
    id: 'gestalt-common-region',
    title: 'Gestalt: Law of Common Region',
    category: 'Gestalt',
    description: 'Elements sharing an area with a clearly defined boundary are perceived as a group.',
    content: `
# Common Region

While Proximity is powerful, **Common Region** is explicit. By adding a border or background color around a set of elements, you forcefully group them.

### UI Application
*   **Cards**: Placing an image, title, and button inside a white box on a gray background creates a "Card".
*   **Modals**: The window creates a clear region separating the dialog from the backdrop.

> Common Region overrides Proximity. Even if elements are far apart, if they share a background color, they are grouped.
    `,
    interactiveComponent: 'GestaltCommonRegionDemo',
    tags: ['Psychology', 'Layout', 'UI']
  },
  {
    id: 'visual-essays',
    title: 'Visual Essays & Dual Coding',
    category: 'EdTech',
    description: 'Breaking complex concepts into bite-sized, tap-through visual stories using Dual Coding theory.',
    content: `
# The Rise of the Visual Essay

Popularized by apps like **Imprint**, **Brilliant**, and **Headway**, the Visual Essay replaces the "article" with a "story deck". It fundamentally changes the reading experience from passive scrolling to active tapping.

### The Science: Dual Coding Theory
Proposed by Allan Paivio in 1971, **Dual Coding Theory** posits that the human brain processes information through two distinct, non-competing channels:
1.  **Verbal Channel**: Processes text and audio (Sequential processing).
2.  **Visual Channel**: Processes images, diagrams, and animations (Parallel processing).

**The Multiplier Effect**: When you present information using *both* channels simultaneously (e.g., a diagram that animates exactly as the text describes it), you create two separate memory traces. This doubles the cognitive hooks available for retrieving that information later.

### Anatomy of a Visual Card
A Visual Essay isn't just a slideshow. It follows a strict spatial layout designed for focus:
*   **The Visual Hero (Top 60%)**: Occupies the majority of the screen. It is the primary teacher. It should never be static decoration; it must be a diagram, a metaphor, or a data visualization.
*   **The Anchor Text (Bottom 40%)**: Concise (15-30 words max). Its job is only to decode the visual.
*   **Progress Bars**: Segmented bars at the top indicate "beats", giving the user a clear sense of completion (Goal Gradient Effect).

### Interaction: Tap vs Scroll
*   **Scrolling** is continuous. Users tend to scan headers and skip body text. It is a "passive" consumption mode.
*   **Tapping** is discrete. By forcing a user to tap to reveal the next beat, you force a **micro-commitment**. The user is actively saying, "I am ready for the next piece of information."
    `,
    interactiveComponent: 'VisualEssay',
    tags: ['EdTech', 'Storytelling', 'Micro-learning', 'Psychology']
  },
  {
    id: 'bento-grids',
    title: 'Bento Grids',
    category: 'UI Trend',
    description: 'The modular, block-based layout style popularized by Apple and Linear.',
    content: `
# Bento Box Layouts

Named after the Japanese lunch box, **Bento Grids** separate content into distinct, rectangular cells. This trend has taken over marketing sites and dashboards in 2024.

### Why it works
*   **Hierarchy**: Larger cells command more attention.
*   **Responsiveness**: Grids naturally reflow for mobile devices.
*   **Content Density**: Allows showcasing diverse media types (video, text, graphs) side-by-side harmoniously.

### Implementation
CSS Grid is the hero here. Using \`grid-template-areas\` or simply \`col-span-x\` and \`row-span-y\` classes makes building these intuitive.
    `,
    interactiveComponent: 'BentoGrid',
    tags: ['Layout', 'CSS Grid', 'Modern UI']
  },
  {
    id: 'gradient-mesh',
    title: 'Gradient Meshes (Aurora)',
    category: 'UI Trend',
    description: 'The evolution of gradients: organic, moving blobs of color that create an ethereal background.',
    content: `
# Aurora Backgrounds

Standard linear gradients (\`to-r from-blue-500 to-green-500\`) can feel stiff. **Gradient Meshes** (or Aurora UI) involve multiple radial gradients moving slowly and blending together.

### The Technique
1.  **Multiple Blobs**: Create 3-4 absolute positioned \`divs\` with different background colors.
2.  **Heavy Blur**: Apply a massive blur (e.g., \`filter: blur(100px)\`).
3.  **Animation**: Animate their position (\`top/left\`) and scale independently in loops.

> This technique is perfect for "Glassmorphism" backgrounds as it provides the necessary color variation to make the glass effect visible.
    `,
    interactiveComponent: 'GradientMeshDemo',
    tags: ['Visual Design', 'CSS', 'Animation']
  },
  {
    id: 'optimistic-ui',
    title: 'Optimistic UI',
    category: 'UX Principle',
    description: 'Making your app feel instant by predicting success before the server responds.',
    content: `
# Faking Speed

Network requests take time (200ms - 2s). Standard UI waits for the server to respond before updating the screen. **Optimistic UI** updates the screen *immediately* as if the request already succeeded.

### The Flow
1.  **Trigger**: User clicks "Send".
2.  **Optimistic Update**: Immediately render the message in the chat list.
3.  **Background Request**: Send the data to the server.
4.  **Reconciliation**:
    *   *Success*: Do nothing (the UI is already correct).
    *   *Error*: Roll back the UI change and show an error toast.
    `,
    interactiveComponent: 'OptimisticUIDemo',
    tags: ['Performance', 'UX', 'State Management']
  },
  {
    id: 'micro-interactions',
    title: 'Mastering Micro-interactions',
    category: 'UX Principle',
    description: 'Small moments of delight that provide feedback and enhance the user experience.',
    content: `
# Micro-interactions

Micro-interactions are contained product moments that do one small task. They are the details that make a product feel "alive".

### The 4 Parts of a Micro-interaction
1.  **Trigger**: Initiates the interaction (hover, click).
2.  **Rules**: What happens (logic).
3.  **Feedback**: What the user sees/hears (animation).
4.  **Loops & Modes**: Meta-rules (what happens next time).
    `,
    interactiveComponent: 'MicroInteraction',
    tags: ['Animation', 'UX', 'Feedback']
  },
  {
    id: 'skeleton-screens',
    title: 'Skeleton Screens',
    category: 'UX Principle',
    description: 'Improving perceived performance by displaying content placeholders instead of spinners.',
    content: `
# Perceived Performance

A user's waiting experience is psychological. **Skeleton screens** (gray placeholder shapes that shimmer) make an app feel faster than it actually is.

### Comparison
*   **Spinners**: Focus attention on the *waiting*. It creates a "blocked" state.
*   **Skeletons**: Focus attention on the *progress*. It hints at the layout to come, allowing the eye to prepare for content.

### Best Practices
1.  Match the layout of the actual content as closely as possible.
2.  Use a subtle pulse animation to indicate activity.
    `,
    interactiveComponent: 'SkeletonLoader',
    tags: ['UX', 'Performance', 'Loading States']
  },
  {
    id: 'fluid-motion',
    title: 'Fluid Motion Design',
    category: 'UI Trend',
    description: 'Creating natural, physics-based animations that guide the user eye.',
    content: `
# Fluid Motion

Motion shouldn't just be decoration; it should describe spatial relationships.

*   **Ease-out**: Objects entering the screen should slow down as they arrive (decelerate).
*   **Ease-in**: Objects leaving should speed up (accelerate).
*   **Shared Layout**: Elements morphing from one state to another (like a card expanding to a page) help maintain context.

> In Framer Motion, using \`layout\` props automatically animates changes in layout (width, height, position) with high performance.
    `,
    interactiveComponent: 'FluidMotion',
    tags: ['Framer Motion', 'Animation']
  },
  {
    id: 'scroll-animations',
    title: 'Scroll-Linked Animations',
    category: 'UI Trend',
    description: 'Immersive storytelling ("Scrollytelling") where scroll position drives animation playback.',
    content: `
# Scroll-Linked Animations

Also known as "Scrollytelling", this technique binds animation progress directly to the scrollbar. As the user scrolls down, elements move, rotate, or scale in perfect sync.

### Use Cases
*   **Product Reveals**: Rotating a 3D product model as the user scrolls.
*   **Data Visualization**: Drawing charts progressively.
*   **Reading Progress**: Parallax effects to create depth.
    `,
    interactiveComponent: 'ScrollAnimation',
    tags: ['Interaction Design', 'Scrollytelling']
  },
  {
    id: 'contextual-glossary',
    title: 'Contextual Glossaries',
    category: 'EdTech',
    description: 'Reducing cognitive load by providing just-in-time definitions without leaving the context.',
    content: `
# Contextual Definitions

In educational apps, jargon is a barrier. Instead of forcing users to a separate glossary page, use **contextual popovers**.

This technique reduces **cognitive load** and keeps the user in the "flow" state of learning. 

> Use a dashed underline style for glossary terms. This is a universal pattern indicating "this text has a tooltip."
    `,
    interactiveComponent: 'GlossaryDemo',
    tags: ['EdTech', 'UX', 'Accessibility']
  },
  {
    id: 'mastery-paths',
    title: 'Mastery Paths',
    category: 'EdTech',
    description: 'Visualizing learning journeys to increase motivation and retention.',
    content: `
# Visualizing Progress

In learning applications, a simple list of lessons is demotivating. **Mastery Paths** (or maps) turn the curriculum into a journey.

### The Psychology
1.  **Goal Gradient Effect**: Users accelerate their efforts as they approach a goal.
2.  **Unlock Mechanics**: Locking future content creates curiosity and value.
3.  **Milestones**: visually celebrating small wins releases dopamine, encouraging the user to continue.
    `,
    interactiveComponent: 'MasteryPath',
    tags: ['EdTech', 'Gamification', 'Retention']
  },
  {
    id: 'confidence-checks',
    title: 'Metacognition (Confidence)',
    category: 'EdTech',
    description: 'Encouraging self-reflection by asking users to rate their confidence before or after answering.',
    content: `
# Metacognition in UI

Metacognition is "thinking about thinking." In EdTech, simply getting an answer right isn't enough. We want students to know *why* they are right.

### The Confidence Check
Before or after submitting an answer, add a UI element asking: "How sure are you?"

*   **Correct + High Confidence**: Mastery. Move on.
*   **Correct + Low Confidence**: Lucky guess. Needs review.
*   **Incorrect + High Confidence**: Misconception. Needs immediate intervention.
    `,
    interactiveComponent: 'ConfidenceDemo',
    tags: ['EdTech', 'Metacognition', 'Assessment']
  },
  {
    id: 'cognitive-chunking',
    title: 'Cognitive Chunking',
    category: 'EdTech',
    description: 'Breaking complex content into small, digestible steps to prevent cognitive overload.',
    content: `
# Breaking Down Walls of Text

A "Wall of Text" is the enemy of learning. **Cognitive Chunking** is the practice of breaking information into small, meaningful units.

### UI Pattern: The Stepper Card
Instead of a long scrollable article, present concepts one card at a time.

1.  **Focus**: The user focuses on one concept.
2.  **Accomplishment**: Clicking "Next" provides a micro-sense of progress.
3.  **Retention**: Smaller chunks are easier to commit to working memory.
    `,
    interactiveComponent: 'ChunkingDemo',
    tags: ['EdTech', 'Content Design', 'UX']
  },
  {
    id: 'adaptive-scaffolding',
    title: 'Adaptive Scaffolding',
    category: 'EdTech',
    description: 'Providing hints and assistance only when the learner struggles, maintaining "Desirable Difficulty".',
    content: `
# Just-in-Time Help

**Scaffolding** refers to the support structures provided to a student. In UI terms, this means not giving the answer away, but providing progressive hints.

### The Feedback Loop
1.  **Attempt 1 (Wrong)**: Shake animation + "Try again". (Encourage self-correction).
2.  **Attempt 2 (Wrong)**: Show a subtle Hint. (Scaffold).
3.  **Attempt 3 (Wrong)**: Show the Solution + Explanation.

This keeps the user in the "Zone of Proximal Development"—not too easy, not too hard.
    `,
    interactiveComponent: 'ScaffoldingDemo',
    tags: ['EdTech', 'Feedback', 'Interaction']
  },
  {
    id: 'habit-streaks',
    title: 'Habit Formation (Streaks)',
    category: 'EdTech',
    description: 'Leveraging loss aversion with streak counters to build daily learning habits.',
    content: `
# Designing for Consistency

Learning requires consistency. The **Streak Counter** is a powerful UI pattern that leverages *Loss Aversion*—the psychological tendency to prefer avoiding losses to acquiring equivalent gains.

### Visual Design
*   **The Flame**: A universal symbol for "hot" streaks.
*   **Calendar View**: Visualizing "Don't Break the Chain".
*   **Freeze Streak**: A mechanic to save a streak (monetization or reward), reducing user churn if they miss one day accidentally.
    `,
    interactiveComponent: 'StreakDemo',
    tags: ['EdTech', 'Gamification', 'Retention']
  },
  {
    id: 'celebration-rewards',
    title: 'Celebration & Rewards',
    category: 'EdTech',
    description: 'Using the Peak-End Rule and variable rewards to create delight upon task completion.',
    content: `
# The Peak-End Rule

Psychological research suggests that users judge an experience largely based on how they felt at its peak (most intense point) and at its end. In EdTech, finishing a lesson is the "End".

### Designing Delight
Don't just show a "Done" text. Celebrate!
1.  **Visuals**: Confetti, particles, or badge unlocks.
2.  **Sound**: A satisfying chime (Positive Reinforcement).
3.  **Timing**: Trigger the celebration immediately upon success to link the action to the reward (Operant Conditioning).
    `,
    interactiveComponent: 'CelebrationDemo',
    tags: ['EdTech', 'Gamification', 'Delight']
  },
  {
    id: 'constructive-feedback',
    title: 'Constructive Error Feedback',
    category: 'EdTech',
    description: 'Designing error states that diagnose misconceptions rather than just saying "Wrong".',
    content: `
# Feedback that Teaches

In many apps, an error state is a blocker. In Learning Apps, an error is the **most valuable moment for learning**.

### Beyond "Try Again"
A red "X" is not enough. Effective feedback must be **Diagnostic**.
*   **Generic Feedback**: "Incorrect." (Low value)
*   **Corrective Feedback**: "The answer is B." (Medium value)
*   **Elaborative Feedback**: "You selected A, but A only applies in case X. B is correct because..." (High Value).
    `,
    interactiveComponent: 'MistakeAnalysisDemo',
    tags: ['EdTech', 'Content Design', 'Pedagogy']
  },
  {
    id: 'goal-setting-ui',
    title: 'Goal Setting & Commitment',
    category: 'EdTech',
    description: 'Leveraging "Implementation Intentions" to help users stick to their learning targets.',
    content: `
# The Power of Commitment

Research shows that people are 2x more likely to follow through on a task if they explicitly state **when** and **how much** they will do it. This is called an **Implementation Intention**.

### Designing the Commitment
Allow users to set a specific daily goal (e.g., "15 minutes" or "1 Lesson").

1.  **Low Friction**: Use sliders or quick-select chips.
2.  **Visual Feedback**: Show them what "success" looks like (e.g., "That's 2 books a year!").
3.  **Contract**: Use a button that says "I Commit" rather than just "Save". This triggers a subtle psychological contract.
    `,
    interactiveComponent: 'GoalSettingDemo',
    tags: ['EdTech', 'Psychology', 'Retention']
  },
  {
    id: 'performance-tuning',
    title: 'Browser Rendering Optimization',
    category: 'Performance',
    description: 'Optimizing rendering, minimizing reflows, and managing the main thread.',
    content: `
# Rendering Performance

A beautiful UI is useless if it's slow.

### Key Concepts
*   **Reflow vs Repaint**: Changing layout properties (width, left) causes Reflow (expensive). Changing cosmetic properties (color, opacity, transform) causes Repaint (cheaper).
*   **Compositing**: Using \`transform: translate()\` moves the element to its own layer on the GPU, avoiding layout recalculations.
    `,
    interactiveComponent: 'Performance',
    tags: ['Optimization', 'Rendering', 'React']
  },
  {
    id: 'web-vitals',
    title: 'Core Web Vitals: CLS',
    category: 'Performance',
    description: 'Understanding and fixing Cumulative Layout Shift (CLS) for visual stability.',
    content: `
# Cumulative Layout Shift (CLS)

CLS measures the visual stability of a page. It occurs when visible elements change their position unexpectedly.

### Common Causes
1.  **Images without dimensions**: The browser doesn't know the size until the image downloads, pushing text down.
2.  **Ads/Embeds**: Dynamically injected content.
3.  **Web Fonts**: FOIT (Flash of Invisible Text) or FOUT (Flash of Unstyled Text).
    `,
    interactiveComponent: 'WebVitalsDemo',
    tags: ['Optimization', 'Web Vitals', 'CSS']
  },
  {
    id: 'debounce-throttle',
    title: 'Debouncing & Throttling',
    category: 'Performance',
    description: 'Handling high-frequency events like typing and scrolling efficiently.',
    content: `
# Rate Limiting Events

JavaScript events like \`onScroll\`, \`onResize\`, or \`onChange\` can fire hundreds of times per second. Running expensive logic (like API calls) on every event crashes performance.

### Definitions
*   **Debounce**: "Wait until the user stops." Good for search bars. It only fires the function if *t* milliseconds have passed without a new event.
*   **Throttle**: "At most once every *t* milliseconds." Good for scroll listeners. It ensures the function fires regularly but not too often.
    `,
    interactiveComponent: 'DebounceDemo',
    tags: ['JavaScript', 'Optimization', 'Logic']
  },
  {
    id: 'virtualization',
    title: 'List Virtualization',
    category: 'Performance',
    description: 'Rendering massive datasets without crashing the browser by windowing the viewport.',
    content: `
# Windowing / Virtualization

Rendering 10,000 items in the DOM is a performance death sentence. The browser consumes huge memory and style calculations become slow.

### The Solution
**Virtualization** only renders the items that are currently visible in the viewport (plus a small buffer).
    `,
    interactiveComponent: 'VirtualizationDemo',
    tags: ['React', 'Big Data', 'Scalability']
  },
  {
    id: 'edtech-flashcards',
    title: 'Spaced Repetition UI',
    category: 'EdTech',
    description: 'Design patterns for memory retention and active recall apps.',
    content: `
# Designing for Learning

Educational apps (EdTech) have unique UI requirements. The "Flashcard" is a staple, but its design can significantly impact learning efficacy.

### Principles
*   **Immediate Feedback**: Users need to know instantly if they were right or wrong.
*   **Minimal Distraction**: The content is the hero. Remove unnecessary chrome.
    `,
    interactiveComponent: 'FlashcardDemo',
    tags: ['Gamification', 'EdTech']
  },
  {
    id: 'dark-mode-design',
    title: 'Dark Mode Best Practices',
    category: 'Accessibility',
    description: 'How to implement dark themes that reduce eye strain without sacrificing readability.',
    content: `
# Designing for the Dark

Dark mode isn't just about swapping white for black. It requires careful color calibration to ensure accessibility and comfort.

### Key Rules
1.  **Avoid Pure Black**: Use dark greys (e.g., \`#121212\`) to reduce eye strain and smearing on OLED screens.
2.  **Desaturate Colors**: Bright accent colors vibrate against dark backgrounds. Lower the saturation or use lighter pastel tones.
    `,
    interactiveComponent: 'DarkMode',
    tags: ['Accessibility', 'Theming', 'Colors']
  },
  {
    id: 'color-blindness',
    title: 'Designing for Color Blindness',
    category: 'Accessibility',
    description: 'Why you should never rely on color alone to convey meaning.',
    content: `
# Beyond Color

Approximately 1 in 12 men are color blind. If your UI relies solely on Red for "Error" and Green for "Success", a significant portion of your users cannot tell the difference.

### The Deuteranopia Problem
Deuteranopia (Green-blindness) is the most common form. It makes reds and greens look like similar shades of muddy yellow-brown.

### The Solution: Double Encoding
Always pair color with a secondary visual cue:
*   **Icons**: Use a Checkmark vs an Alert Triangle.
*   **Text**: Explicitly state "Success" or "Error".
    `,
    interactiveComponent: 'ColorBlindnessDemo',
    tags: ['Accessibility', 'Inclusion', 'Visual Design']
  },
  {
    id: 'empty-states',
    title: 'Designing Empty States',
    category: 'UX Principle',
    description: 'Turning "zero data" moments into opportunities for onboarding and education.',
    content: `
# The "Empty" Opportunity

An empty state is what users see when there is no data to display. It is often the first impression.

### Don't leave it blank
A blank screen implies an error. Good empty states should:
1.  **Educate**: Explain *what* should be here.
2.  **Encourage**: Tell the user *how* to add data.
    `,
    interactiveComponent: 'EmptyState',
    tags: ['UX', 'Onboarding', 'Illustration']
  },
  {
    id: 'neumorphism',
    title: 'Neumorphism (Soft UI)',
    category: 'UI Trend',
    description: 'The "New Skeuomorphism" that uses highlights and shadows to create soft, extruded shapes.',
    content: `
# Neumorphism

Neumorphism (Soft UI) mimics real-world objects by using two shadows: a light one (top-left) and a dark one (bottom-right). This creates the illusion that elements are extruded from the background.

### The Code
It relies heavily on \`box-shadow\`.
\`box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;\`
    `,
    interactiveComponent: 'Neumorphism',
    tags: ['CSS', 'Visual Design', 'Shadows']
  },
  {
    id: 'progressive-disclosure',
    title: 'Progressive Disclosure',
    category: 'UX Principle',
    description: 'Managing complexity by showing users only what they need, when they need it.',
    content: `
# Progressive Disclosure

Complex forms and settings can overwhelm users. Progressive disclosure is the practice of sequencing information.

### Techniques
1.  **Accordions**: Letting users expand details.
2.  **Steppers**: Breaking a long form into wizard steps.
    `,
    interactiveComponent: 'ProgressiveDisclosure',
    tags: ['UX', 'Forms', 'Interaction']
  },
  {
    id: 'variable-fonts',
    title: 'Variable Fonts',
    category: 'UI Trend',
    description: 'Using a single font file to animate weight, width, and slant smoothly.',
    content: `
# Variable Fonts

Traditional web fonts require separate files for "Regular", "Bold", "Italic". **Variable fonts** are a single file containing every variation.

### Why it matters
1.  **Performance**: One HTTP request instead of 4-5.
2.  **Design Freedom**: You aren't stuck with \`400\` or \`700\`. You can use \`font-weight: 543\`.
    `,
    interactiveComponent: 'VariableFonts',
    tags: ['Typography', 'Performance', 'Design']
  },
  {
    id: 'toast-notifications',
    title: 'Toast Notifications',
    category: 'UX Principle',
    description: 'Providing non-blocking feedback that informs users without interrupting their flow.',
    content: `
# Toasts & Snackbars

A "Toast" is a small message that pops up (usually at the bottom or top right) to provide feedback.

### Heuristics
*   **Transient**: They should disappear automatically after 3-5 seconds.
*   **Non-blocking**: They shouldn't prevent the user from clicking other things.
    `,
    interactiveComponent: 'Toast',
    tags: ['Feedback', 'UX', 'Components']
  },
  {
    id: 'swipe-gestures',
    title: 'Mobile Swipe Gestures',
    category: 'UX Principle',
    description: ' implementing common mobile patterns like "Swipe to Delete" or "Swipe to Archive".',
    content: `
# Gestural Interaction

On mobile touchscreens, buttons occupy valuable screen real estate. **Gestures** act as invisible shortcuts.

### Swipe Actions
A common pattern in email and todo apps is swiping a list item to reveal actions underneath.
    `,
    interactiveComponent: 'SwipeAction',
    tags: ['Mobile', 'Gestures', 'Touch']
  },
  {
    id: 'file-upload',
    title: 'File Upload Zones',
    category: 'UI Trend',
    description: 'Creating intuitive drag-and-drop zones with rich visual feedback.',
    content: `
# Drag & Drop Zones

File uploading used to be a boring \`<input type="file">\`. Modern apps use large drop zones.

### Visual States
1.  **Idle**: Dashed border, "Drop files here".
2.  **Drag Over**: Highlight color, scale up icon to indicate "I am ready to receive".
    `,
    interactiveComponent: 'FileUpload',
    tags: ['Forms', 'Interaction', 'UX']
  },
  {
    id: 'onboarding-tours',
    title: 'Onboarding Tours',
    category: 'UX Principle',
    description: 'Using spotlight effects to guide new users through key features.',
    content: `
# Feature Tours

When a user opens your app for the first time, they lack mental models. An **Onboarding Tour** (or Walkthrough) highlights key UI elements one by one.

### The Spotlight Effect
This technique dims the entire screen except for the focused element. It forces focus.
    `,
    interactiveComponent: 'Onboarding',
    tags: ['Onboarding', 'UX', 'Product Growth']
  },
  {
    id: 'gamified-leaderboards',
    title: 'Gamified Leaderboards',
    category: 'EdTech',
    description: 'Driving engagement through social comparison and competitive ranking.',
    content: `
# Social Motivation

Leaderboards leverage our innate desire for status. In EdTech, they can drive daily engagement.

### Design Considerations
1.  **The "Local" View**: Don't show the top 10 global users (who have millions of points). Show the user *and their friends*, or users *near their rank*. This makes the goal achievable.
    `,
    interactiveComponent: 'Leaderboard',
    tags: ['Gamification', 'EdTech', 'Social']
  },
  {
    id: 'focus-management',
    title: 'Accessible Focus States',
    category: 'Accessibility',
    description: 'Why default outlines aren\'t enough and how to design beautiful, accessible focus rings.',
    content: `
# Keyboard Navigation

For users who rely on keyboards (motor disabilities or power users), the **focus ring** is their cursor. Removing it with \`outline: none\` breaks the interface.

### The Problem
Default browser outlines can be ugly or inconsistent with your brand. Designers often remove them, leaving keyboard users lost.
    `,
    interactiveComponent: 'FocusDemo',
    tags: ['A11y', 'Keyboard', 'CSS']
  },
  {
    id: 'hicks-law',
    title: 'Hick\'s Law',
    category: 'Psychology',
    description: 'The time it takes to make a decision increases with the number and complexity of choices.',
    content: `
# Cognitive Load & Decision Making

Hick's Law states: *The time it takes to make a decision increases logarithmically with the number of choices.*

### Application in UI
1.  **Reduce Options**: Don't show 20 links in a nav menu. Categorize them into 4-5 groups.
2.  **Break it down**: Use multi-step forms instead of one giant page.
    `,
    interactiveComponent: 'HicksLawDemo',
    tags: ['Psychology', 'UX Research', 'Conversion']
  },
  {
    id: 'serial-position-effect',
    title: 'Serial Position Effect',
    category: 'Psychology',
    description: 'Why users best remember the first and last items in a series (Primacy & Recency effects).',
    content: `
# Primacy & Recency

The human memory is flawed. When presented with a list of items, we are statistically most likely to remember:
1.  **The First Item (Primacy Effect)**: Because we had time to encode it into long-term memory.
2.  **The Last Item (Recency Effect)**: Because it is still sitting in short-term memory.
    `,
    interactiveComponent: 'SerialPositionDemo',
    tags: ['Psychology', 'Navigation', 'Memory']
  },
  {
    id: 'fitts-law',
    title: 'Fitts\'s Law',
    category: 'Psychology',
    description: 'The time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target.',
    content: `
# Target Acquisition

Fitts's Law is a predictive model of human movement. It fundamentally says: **Big targets close to the starting point are fastest to hit.**

### The Formula
\`T = a + b * log2(D/W + 1)\`
    `,
    interactiveComponent: 'FittsLawDemo',
    tags: ['Psychology', 'UX', 'Mobile']
  },
  {
    id: 'atomic-design',
    title: 'Atomic Design Principles',
    category: 'Design Systems',
    description: 'Methodology for creating design systems by breaking layouts down into basic building blocks.',
    content: `
# Atomic Design

Coined by Brad Frost, this methodology draws a parallel between chemistry and interface design.

1.  **Atoms**: Basic tags (Labels, Inputs, Buttons, Icons).
2.  **Molecules**: Groups of atoms working together (Search Form = Label + Input + Button).
3.  **Organisms**: Groups of molecules (Header = Logo + Search Form + Nav).
    `,
    interactiveComponent: 'AtomicDesignDemo',
    tags: ['Architecture', 'Scalability', 'Components']
  },
  {
    id: 'design-tokens',
    title: 'Design Tokens',
    category: 'Design Systems',
    description: 'The visual atoms of the design system: colors, spacing, and typography values stored as data.',
    content: `
# Design Tokens

Design Tokens are the semantic variables used to store design decisions. Instead of hardcoding hex values like \`#2563eb\` or pixels like \`16px\`, we use names like \`color-primary-600\` or \`spacing-md\`.
    `,
    interactiveComponent: 'DesignTokensDemo',
    tags: ['Architecture', 'Theming', 'Variables']
  },
  {
    id: 'component-props',
    title: 'Component Properties',
    category: 'Design Systems',
    description: 'Creating robust, configurable components using variants instead of separate files.',
    content: `
# Configurable Components

In a mature Design System, you don't build \`RedButton\`, \`BlueButton\`, and \`BigButton\`. You build a single **Button** component with properties.

### The Variant Pattern
Using props to control visual styles makes the library easier to maintain.
    `,
    interactiveComponent: 'ComponentPropsDemo',
    tags: ['React', 'Props', 'Scalability']
  },
  {
    id: 'color-rule',
    title: 'The 60-30-10 Rule',
    category: 'Color Theory',
    description: 'A timeless decorating rule that helps you create a balanced color palette easily.',
    content: `
# Balancing Colors

Struggling with color usage? The **60-30-10 Rule** is a classic principle used in interior design and UI.

*   **60% Primary Color**: The neutral background. It creates the canvas (usually White, Cream, or Dark Grey).
*   **30% Secondary Color**: The supporting color. Used for cards, sidebars, or headers.
*   **10% Accent Color**: The "pop". Used for Call-to-Actions (Buttons, Links, Alerts).
    `,
    interactiveComponent: 'ColorRuleDemo',
    tags: ['Visual Design', 'Colors', 'UI']
  },
  {
    id: 'typography-scale',
    title: 'Visual Hierarchy & Scale',
    category: 'Typography',
    description: 'Using modular scales and weight contrast to guide the reader\'s eye.',
    content: `
# Typographic Hierarchy

Hierarchy tells the reader what is important. It is established through size, weight, and color.

### Modular Scale
Instead of picking random sizes (13px, 17px, 22px), use a ratio (e.g., 1.25 - Major Third).
    `,
    interactiveComponent: 'TypographyDemo',
    tags: ['Fonts', 'Design', 'Readability']
  },
  {
    id: 'thumb-zone',
    title: 'The Thumb Zone',
    category: 'Mobile UX',
    description: 'Designing for how users actually hold their phones.',
    content: `
# Reachability

Steven Hoober's research shows that 49% of users hold their phone with one hand. The "Thumb Zone" is the area of the screen comfortable to reach with the thumb.
    `,
    interactiveComponent: 'ThumbZoneDemo',
    tags: ['Mobile', 'Responsive', 'Touch']
  }
];