# Mobile Optimization Review and Plan

This document reviews the current UI with a mobile-first lens and outlines concrete improvements per screen/module. It also includes code-level recommendations, Tailwind patterns, and a prioritized rollout plan.

## Summary
- Stack: Vite + React + Tailwind (`tailwind.config.js`), custom theming via CSS variables, React Router routes in `src/routes`.
- Key screens: `LandingPage`, `HomePage` (Student/Parent Dashboards), `Learn` (MainLayout: LeftPanel + CenterPanel + ChatInterface), `Practice` (InteractivePathView, PracticeSessionView), Homework helper pages.
- Current state: Works on desktop/tablet. On small devices there are spacing, typography, and layout constraints (fixed panels, `h-screen`, oversized paddings, and incorrect breakpoint ordering in several places) that reduce usability.

---

## Global Improvements

- Viewport and Safe Areas:
  - Add `viewport-fit=cover` for iOS safe areas and support dynamic browser chrome.
    - index.html: `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />`
  - Prefer `dvh` for full-height sections to avoid the mobile address bar trap.
    - Replace `h-screen`/`min-h-screen` with `min-h-[100dvh]` or add a utility in Tailwind.

- Tailwind Screens and Spacing:
  - Add an `xs` breakpoint (e.g., 360px) for very small devices, and use `sm` (≥640px) for standard.
    - tailwind.config.js → `theme.extend.screens = { xs: '360px' }`.
  - Standardize container paddings with responsive steps: `px-4 sm:px-6 lg:px-8` instead of fixed `px-8`.

- Typography:
  - Use fluid type for headlines: `text-[clamp(1.25rem,4vw,2rem)]` etc., or Tailwind’s responsive classes ordered from mobile → up.
  - Several headings use larger font on mobile than desktop (e.g., `text-5xl md:text-4xl`). Invert to mobile-first: `text-3xl sm:text-4xl lg:text-5xl`.
  - Consider system UI font for mobile readability (`font-ui` already defined). Swap base for small screens if desired.

- Touch Targets and Hit Areas:
  - Ensure min target sizes: 44x44px. Many icons are 20–24px inside tight wrappers; pad via `p-2`/`p-3`.
  - Increase inter-button spacing and avoid adjacent destructive/primary actions without separation.

- Scrolling and Overlays:
  - Avoid nested `h-screen` scroll areas; prefer a single vertical scroller per view. Use `min-h-[100dvh]` and `overflow-y-auto` on content.
  - Background decorative layers are `fixed inset-0` and add paint cost. Keep `pointer-events-none` (already present) and consider `md:fixed` with `absolute` on mobile to reduce jank.

- Safe Area Insets:
  - For bottom input bars and footers, add padding with `env(safe-area-inset-bottom)`. Example:
    - `pb-[calc(env(safe-area-inset-bottom)+12px)]` on chat/practice input containers on mobile.

- Performance:
  - Ensure images (logos) have explicit sizes and modern formats where possible. Lazy-load offscreen heavy components (already using `lazy` in routers—good).
  - Prefer `will-change: transform` sparingly for animated elements; avoid costly box-shadows on scroll.

---

## AI Tutor-Specific Mobile Considerations

### Math Input on Mobile (`src/components/learn/InputArea.tsx`)

Issues unique to mobile math input:
- Virtual keyboard covers 40-60% of screen, may hide math toolbar
- Touch-based equation editing (fractions, exponents, radicals) requires larger targets
- Symbol palette needs mobile-optimized layout
- Standard viewport height methods fail with dynamic keyboard

Recommendations:
- Keyboard Detection:
  - Use `visualViewport` API instead of `window.innerHeight` (more reliable):
    ```jsx
    const [keyboardHeight, setKeyboardHeight] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        if (window.visualViewport) {
          const vh = window.visualViewport.height;
          const wh = window.innerHeight;
          setKeyboardHeight(wh - vh);
        }
      };
      window.visualViewport?.addEventListener('resize', handleResize);
      return () => window.visualViewport?.removeEventListener('resize', handleResize);
    }, []);
    ```
  - Adjust input container padding dynamically: `style={{ paddingBottom: keyboardHeight + 'px' }}`

- Math Toolbar Layout:
  - Mobile: Float toolbar above keyboard when input is focused
  - Use sticky positioning: `sticky bottom-[calc(env(safe-area-inset-bottom)+12px)]`
  - Larger symbol buttons: 48x48px minimum (current likely 32-36px)
  - 3-column grid for symbol palette on mobile (vs. 5-6 columns desktop)
  - Quick-access row for frequently used symbols: `^`, `/`, `√`, `π`, `θ`, `°`
  - Collapse advanced symbols behind "More symbols" expandable section

- Touch Interaction:
  - Add haptic feedback for symbol insertion (if supported): `navigator.vibrate(10)`
  - Debounce rapid taps to prevent double-insertion
  - Clear visual feedback on symbol tap (brief highlight)
  - Undo/redo buttons prominently visible (common mistake recovery)

- Input Field:
  - Use `text-base` or larger on mobile (prevents iOS zoom on focus)
  - Add `inputMode="text"` to prevent numeric-only keyboard
  - Implement custom cursor position tracking for symbol insertion

Example mobile math toolbar:
```jsx
<div className="sticky bottom-0 bg-surface border-t pb-safe-bottom">
  {/* Main input */}
  <input
    className="text-base sm:text-sm px-4 py-3"
    inputMode="text"
    style={{ fontSize: '16px' }} // Prevent iOS zoom
  />

  {/* Quick symbols - always visible */}
  <div className="flex gap-2 p-2 overflow-x-auto">
    {quickSymbols.map(sym => (
      <button className="min-w-[48px] h-12 text-lg">{sym}</button>
    ))}
  </div>

  {/* Extended palette - collapsible */}
  {showExtended && (
    <div className="grid grid-cols-3 gap-2 p-2 max-h-48 overflow-y-auto">
      {allSymbols.map(sym => (
        <button className="h-12 text-lg">{sym}</button>
      ))}
    </div>
  )}
</div>
```

### Visual Math Tools on Mobile (`src/components/math-tools/*`)

Issues with interactive visualizers:
- Touch interaction patterns differ from mouse (no hover, fat fingers)
- Canvas/SVG rendering performance on mobile GPUs
- Small tap targets for geometric labels and controls
- Pinch-to-zoom conflicts with diagram interactions

Recommendations per tool type:

- Right Triangle Tool (`rightTriangle.tsx`):
  - Increase drag handle sizes: 24px → 40px touch targets
  - Add invisible padding (16px) around handles for easier tapping
  - Use `touch-action: none` to prevent scroll during drag
  - Show angle/length values in larger font on mobile: `text-base` vs `text-sm`
  - Add double-tap to reset zoom
  - Consider simplified mode: show key measurements only, hide decorative elements

- Bearings Tool:
  - Compass rose needs larger tap zones for direction selection
  - Use radial menu pattern for mobile: tap center → radial options appear
  - Increase angle arc thickness for visibility
  - Add gesture: rotate two-finger to adjust bearing

- General patterns:
  - Implement pinch-to-zoom with boundaries (0.5x - 2x)
  - Use CSS transforms for zoom (not SVG scale) for better performance
  - Add reset button (clearly labeled, 48px min) for mobile users
  - Provide haptic feedback on snap-to-grid or constraint hits
  - Use `pointer-events: bounding-box` on SVG for better hit detection

Example touch-optimized SVG control:
```jsx
<svg className="touch-none" onPointerDown={handleDragStart}>
  {/* Invisible larger hit area */}
  <circle
    cx={point.x}
    cy={point.y}
    r="20"
    fill="transparent"
    className="cursor-pointer"
  />
  {/* Visible handle */}
  <circle
    cx={point.x}
    cy={point.y}
    r="8"
    fill="var(--color-primary)"
    className="pointer-events-none"
  />
</svg>
```

### TTS and Audio Playback on Mobile

Issues specific to mobile audio:
- iOS autoplay restrictions require user gesture
- Background audio behavior (tab switching, lock screen)
- Audio interruptions (calls, notifications, other apps)
- Bandwidth concerns on cellular networks
- Lack of visible playback controls

Recommendations:

- iOS Audio Restrictions:
  - Detect iOS and show "Tap to enable audio" on first session
  - Unlock audio context on first user interaction:
    ```jsx
    const unlockAudio = async () => {
      if (audioContext.state === 'suspended') {
        await audioContext.resume();
      }
      // Play silent audio to unlock
      const buffer = audioContext.createBuffer(1, 1, 22050);
      const source = audioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(audioContext.destination);
      source.start();
    };
    ```
  - Store unlock state in sessionStorage

- Media Session API Integration:
  - Add lock screen controls for TTS playback:
    ```jsx
    useEffect(() => {
      if ('mediaSession' in navigator && currentAudio) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: 'AI Campus Tutor',
          artist: 'Math Help',
          artwork: [{ src: '/icon-192.png', sizes: '192x192' }]
        });

        navigator.mediaSession.setActionHandler('play', () => audioManager.play());
        navigator.mediaSession.setActionHandler('pause', () => audioManager.pause());
        navigator.mediaSession.setActionHandler('stop', () => audioManager.stop());
      }
    }, [currentAudio]);
    ```

- Visible Playback Controls:
  - Add play/pause button for users who disable autoplay
  - Show audio loading indicator during TTS generation (can take 1-3s)
  - Display playback progress for longer responses
  - Add speed control (0.75x, 1x, 1.25x, 1.5x) for mobile users

- Audio Caching:
  - Cache frequently used phrases: "Great job!", "Try again", "Hint:"
  - Store last 10 TTS responses in IndexedDB
  - Implement cache expiry (24 hours) to manage storage
  - Show offline indicator if cached audio is being used

- Network Optimization:
  - Detect connection type: `navigator.connection.effectiveType`
  - On slow networks (<3G), show text-only option
  - Pre-fetch next expected TTS response while user reads current problem
  - Add user preference: "Auto-play on WiFi only"

Example audio manager enhancement:
```jsx
// src/hooks/useAudioManager.ts enhancement
const useAudioManager = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [playbackState, setPlaybackState] = useState<'idle' | 'loading' | 'playing' | 'paused'>('idle');

  const unlockAudioContext = useCallback(async () => {
    // Unlock logic here
    setIsUnlocked(true);
  }, []);

  const playWithFallback = async (text: string, emotion: EmotionType) => {
    setPlaybackState('loading');
    try {
      const cached = await getCachedAudio(text);
      if (cached) {
        await playAudio(cached);
      } else {
        const audio = await generateTTS(text, emotion);
        await cacheAudio(text, audio);
        await playAudio(audio);
      }
      setPlaybackState('playing');
    } catch (error) {
      console.error('TTS failed:', error);
      setPlaybackState('idle');
      // Show text-only fallback
    }
  };

  return { playWithFallback, playbackState, isUnlocked, unlockAudioContext };
};
```

- UI Components:
  - Add audio status indicator in header: speaker icon with state (muted, playing, loading)
  - Provide global audio toggle (persist to localStorage)
  - Show bandwidth warning on cellular: "Audio may use data. Continue?"

### Enhanced Keyboard and Input Focus Management

Beyond basic `scrollIntoView`, implement comprehensive focus handling:

- Visual Viewport Monitoring:
  - Track keyboard height changes in real-time
  - Adjust layout dynamically (not just on mount)
  - Handle orientation changes (portrait ↔ landscape)
  - Example hook:
    ```jsx
    const useKeyboardHeight = () => {
      const [keyboardHeight, setKeyboardHeight] = useState(0);
      const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

      useEffect(() => {
        const handleResize = () => {
          const visualViewport = window.visualViewport;
          if (!visualViewport) return;

          const keyboardHeight = window.innerHeight - visualViewport.height;
          setKeyboardHeight(keyboardHeight);
          setIsKeyboardOpen(keyboardHeight > 100); // Threshold for keyboard detection
        };

        window.visualViewport?.addEventListener('resize', handleResize);
        window.visualViewport?.addEventListener('scroll', handleResize);

        return () => {
          window.visualViewport?.removeEventListener('resize', handleResize);
          window.visualViewport?.removeEventListener('scroll', handleResize);
        };
      }, []);

      return { keyboardHeight, isKeyboardOpen };
    };
    ```

- Smart Focus Management:
  - Don't auto-focus inputs on mobile (prevents unwanted keyboard)
  - Use explicit "Continue" or "Answer" button to focus input
  - When new problem loads, use `aria-live` region instead of focus stealing:
    ```jsx
    <div aria-live="polite" aria-atomic="true">
      {problemStatement}
    </div>
    ```
  - Provide "Show keyboard" button if user dismisses it accidentally

- Input Visibility:
  - Ensure focused input is always in top 30% of visible viewport
  - Add buffer space below input for toolbar visibility
  - Implement smooth scroll to focused element:
    ```jsx
    const scrollToInput = (element: HTMLElement) => {
      const visualViewport = window.visualViewport;
      if (!visualViewport) return;

      const rect = element.getBoundingClientRect();
      const targetY = visualViewport.height * 0.3; // Position input at 30% from top
      const scrollY = rect.top - targetY;

      window.scrollBy({ top: scrollY, behavior: 'smooth' });
    };
    ```

- Multiple Input Context:
  - Learn module: Chat input + scratch pad
  - Practice: Answer input + step-by-step fields
  - Maintain focus state across component re-renders
  - Save input values to sessionStorage (survive crashes/navigation)

### Expanded Safe Area Insets

Complete safe area handling for all orientations and notch positions:

- Global CSS Setup:
  ```css
  :root {
    --safe-top: env(safe-area-inset-top, 0px);
    --safe-right: env(safe-area-inset-right, 0px);
    --safe-bottom: env(safe-area-inset-bottom, 0px);
    --safe-left: env(safe-area-inset-left, 0px);
  }

  /* App container */
  .app-container {
    padding-left: var(--safe-left);
    padding-right: var(--safe-right);
  }

  /* Fixed header */
  .fixed-header {
    padding-top: max(var(--safe-top), 12px);
  }

  /* Bottom inputs */
  .bottom-input-container {
    padding-bottom: max(var(--safe-bottom), 12px);
  }
  ```

- Tailwind Config Update:
  ```js
  // tailwind.config.js
  export default {
    theme: {
      extend: {
        spacing: {
          'safe-top': 'env(safe-area-inset-top)',
          'safe-right': 'env(safe-area-inset-right)',
          'safe-bottom': 'env(safe-area-inset-bottom)',
          'safe-left': 'env(safe-area-inset-left)',
        },
        padding: {
          'safe': 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)',
          'safe-t': 'env(safe-area-inset-top)',
          'safe-r': 'env(safe-area-inset-right)',
          'safe-b': 'env(safe-area-inset-bottom)',
          'safe-l': 'env(safe-area-inset-left)',
        },
      }
    }
  }
  ```

- Component-Level Usage:
  - Headers: `pt-safe-t` or `pt-[max(env(safe-area-inset-top),12px)]`
  - Bottom bars: `pb-safe-b` or `pb-[calc(env(safe-area-inset-bottom)+12px)]`
  - Fullscreen overlays: `inset-0 pt-safe-t pr-safe-r pb-safe-b pl-safe-l`

- Landscape Orientation:
  - iPhone notch moves to left side in landscape
  - Use `safe-left` padding for main content area
  - Test with Device Mode in Chrome DevTools (iPhone X/12/13/14 Pro)

---

## Landing Page (`src/components/LandingPage.tsx`)

Issues observed:
- Headings use `text-5xl md:text-4xl` which makes mobile larger than desktop.
- Generous paddings (`px-8`) and button sizes (`px-12`) are wide for small screens.
- Multiple `max-w-*` centered blocks are fine but could compress more vertically on mobile.

Recommendations:
- Headings/Copy:
  - Change to mobile-first scaling: `text-3xl sm:text-4xl lg:text-5xl` and `text-lg sm:text-xl` for subheads.
  - Reduce paragraph width on mobile: `max-w-prose sm:max-w-3xl`.
- Spacing:
  - Header/sections: `px-4 sm:px-6 lg:px-8` and `py-6 sm:py-8`.
  - CTA button: `px-6 sm:px-8 py-3 sm:py-4`.
- Grids:
  - Current `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` is good; ensure cards have `text-base sm:text-sm` and wrap correctly.
- Background layer:
  - Consider `absolute` (not `fixed`) on mobile to reduce paint cost: `absolute md:fixed`.

Snippet example:
- Hero title: `className="text-3xl sm:text-4xl lg:text-5xl font-bold"`
- Page wrappers: `className="min-h-[100dvh] flex flex-col"`

---

## Home Page (`src/components/HomePage.tsx`)

Issues observed:
- Header uses `px-8` and large logo; profile section can crowd on small screens.
- StudentDashboard content uses wide container `max-w-7xl` and multiple grids—fine if cards stack cleanly.

Recommendations:
- Header:
  - Use `px-4 sm:px-6 lg:px-8` and scale logo `w-8 h-8 sm:w-12 sm:h-12`.
  - Collapse ProfileSwitcher and ProfileMenu into icon-first presentation on `sm` with labels hidden: `sm:hidden` text, `aria-label` retained.
- Footer:
  - Add bottom safe area padding: `pb-[env(safe-area-inset-bottom)]`.

---

## Student Dashboard (`src/components/dashboard/*.tsx`)

Issues observed:
- Grids use `md:grid-cols-3/4` etc. Cards may squeeze on small screens; some titles and chips may wrap awkwardly.

Recommendations:
- Card Components (`ActionCard`, `ImprovedTopicCard`, `StatCard`):
  - Ensure consistent padding `p-4` on mobile, `p-6` on md+.
  - Use `text-sm` mobile, `text-base` md+.
  - For horizontal meta chips, allow wrap with `flex-wrap` and `gap-y-2`.
- Charts (`WeeklyActivityChart`):
  - On mobile, consider summary stat with mini-sparkline or swipeable area. If keeping chart, make it `h-40` with vertical labels abbreviated, ensure overflow hidden.
- Topic grid:
  - Already `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`—good. Ensure card min-width ~`min-w-[260px]` only on md+, not mobile.

---

## Learn Module

Components: `MainLayout`, `LeftPanel`, `CenterPanel`, `ChatInterface`, `InputArea`.

Issues observed:
- `MainLayout` uses `h-screen` and collapses left panel to 60px on mobile; still consumes horizontal space and adds a resize handle on desktop only (good), but on mobile the collapsed strip may be wasted space.
- `CenterPanel` has a mobile top bar and good controls. `Avatar` in ChatInterface floats fixed at 100px from top; on small screens it can overlap content.
- `InputArea` is inside a flex column (not fixed), so keyboard overlap is less likely; safe area padding is not applied.

Recommendations:
- Layout container:
  - Switch `h-screen` to `min-h-[100dvh]` in `MainLayout` and `CenterPanel`.
  - On mobile, fully off-canvas the left panel with translate and overlay instead of `width: 60px` strip. Example:
    - LeftPanel wrapper: `hidden md:block` on mobile, and when toggled, render as `fixed inset-0 z-40 w-full` with slide-in.
  - Keep a bottom bar with key actions on mobile (toggle topics, scratch pad, theme) if needed.
- Chat header and avatar:
  - Hide the fixed avatar overlay on very small screens or anchor within the messages flow. Example: wrap with `hidden sm:block` for the fixed overlay and show a compact inline avatar in the first message on mobile.
- InputArea:
  - Add safe area padding: `pb-[calc(env(safe-area-inset-bottom)+12px)]` on mobile.
  - Increase input size to `text-base` on mobile for readability.
  - Ensure the math toolbar uses a collapsible bottom sheet pattern on mobile (current toggle OK; consider `position: sticky` near the input when open).

Example pattern for LeftPanel mobile drawer:
```
{/* Mobile Drawer */}
{isMobile && !layoutState.leftPanelCollapsed && (
  <div className="fixed inset-0 z-40">
    <div className="absolute inset-0 bg-black/50" onClick={layoutActions.collapseAllPanels} />
    <div className="absolute inset-y-0 left-0 w-[88%] max-w-sm bg-sidebar shadow-xl animate-slide-in">
      <LeftPanel ... />
    </div>
  </div>
)}
```

---

## Practice Module

Components: `InteractivePathView`, `PracticeSessionView`.

### InteractivePathView (`src/components/practice/InteractivePathView.tsx`)

Issues observed:
- Fixed 3-column layout using `w-1/4 | w-1/2 | w-1/4` and `h-screen` for each column. This severely constrains mobile (each column gets tiny width, horizontal overflow, and nested full-height scrolls).
- SVG path rendering with dynamic node positioning needs mobile optimization
- Touch interactions for node selection not optimized
- State synchronization with stats/leaderboard during layout changes

Recommendations:

- Responsive Layout:
  - Mobile (<md): stack columns in this order: Center Path (full width) → Stats → Leaderboard as collapsible panels.
  - md+: keep 3-column as today.
  - Implementation sketch:
    - Left/Right sidebars: `hidden md:flex md:w-1/4`.
    - Center: `w-full md:w-1/2`.
    - For mobile access to Stats/Leaderboard, add buttons in a sticky header or a bottom action bar that toggles slide-up drawers.
  - Replace all `h-screen` with `min-h-[100dvh]`; avoid multiple full-height scrollers—let center manage scroll.

- SVG Path Scaling Strategy:
  - Desktop: `viewBox` fits panel width (current behavior)
  - Mobile: `viewBox = screen width - 32px` (account for padding)
  - Node size scaling:
    - Desktop: 24px radius circles
    - Mobile: 36px radius circles (easier touch targets)
    - Add 16px invisible padding around each node for touch hit area
  - Vertical spacing between nodes:
    - Desktop: 80px
    - Mobile: 120px (prevents accidental taps on adjacent nodes)
  - Update node positions on resize:
    ```jsx
    useEffect(() => {
      const handleResize = () => {
        const width = centerPanelRef.current?.offsetWidth || 0;
        const isMobile = width < 768;

        setPathConfig({
          nodeRadius: isMobile ? 36 : 24,
          verticalSpacing: isMobile ? 120 : 80,
          hitAreaPadding: isMobile ? 16 : 8,
        });

        regenerateNodePositions();
      };

      window.addEventListener('resize', handleResize);
      handleResize(); // Initial calculation

      return () => window.removeEventListener('resize', handleResize);
    }, []);
    ```

- Touch Interaction Patterns:
  - Use `onPointerDown` instead of `onClick` for better touch responsiveness
  - Debounce node taps (300ms) to prevent double-activation
  - Add haptic feedback on node selection: `navigator.vibrate(10)`
  - Visual feedback: immediate highlight on touch (before AI response)
  - Prevent scroll during node interaction:
    ```jsx
    <svg
      className="touch-none select-none"
      onPointerDown={(e) => {
        e.preventDefault(); // Prevent scroll
        handleNodeTap(nodeId);
      }}
    >
      {/* Invisible larger hit area */}
      <circle
        cx={node.x}
        cy={node.y}
        r={nodeRadius + hitAreaPadding}
        fill="transparent"
        className="cursor-pointer"
      />
      {/* Visible node */}
      <circle
        cx={node.x}
        cy={node.y}
        r={nodeRadius}
        fill={node.completed ? 'var(--color-success)' : 'var(--color-primary)'}
        className="pointer-events-none"
      />
    </svg>
    ```

- Stats/Leaderboard Mobile Drawers:
  - Slide-up from bottom (not side) - more intuitive on mobile
  - Add to bottom of InteractivePathView:
    ```jsx
    {/* Mobile action bar */}
    {isMobile && (
      <div className="fixed bottom-0 left-0 right-0 bg-surface border-t pb-safe-b z-30">
        <div className="flex gap-2 p-3">
          <button
            onClick={() => setShowStats(!showStats)}
            className="flex-1 h-12 bg-primary/10 rounded-lg"
          >
            Stats
          </button>
          <button
            onClick={() => setShowLeaderboard(!showLeaderboard)}
            className="flex-1 h-12 bg-primary/10 rounded-lg"
          >
            Leaderboard
          </button>
        </div>
      </div>
    )}

    {/* Stats drawer */}
    {isMobile && showStats && (
      <div className="fixed inset-0 z-40">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setShowStats(false)}
        />
        <div className="absolute bottom-0 left-0 right-0 bg-surface rounded-t-2xl max-h-[70vh] overflow-y-auto animate-slide-up">
          <div className="sticky top-0 bg-surface border-b px-4 py-3 flex justify-between items-center">
            <h3 className="font-semibold">Your Stats</h3>
            <button onClick={() => setShowStats(false)}>✕</button>
          </div>
          <StatsPanel />
        </div>
      </div>
    )}
    ```

- Performance Optimization:
  - Use `React.memo()` for `StatsPanel` and `LeaderboardPanel` (heavy re-renders)
  - Lazy load drawer content:
    ```jsx
    const StatsPanel = lazy(() => import('./StatsPanel'));
    const LeaderboardPanel = lazy(() => import('./LeaderboardPanel'));
    ```
  - Only render drawers when opened (not just hidden)
  - Use CSS transforms for drawer animation (not `height` or `top`):
    ```css
    @keyframes slide-up {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
    ```

Example responsive shell:
```jsx
<div className="min-h-[100dvh] md:flex" ...>
  {/* Left stats - desktop only */}
  <aside className="hidden md:flex md:w-1/4 ...">
    <StatsPanel />
  </aside>

  {/* Center path - always visible */}
  <main ref={centerPanelRef} className="w-full md:w-1/2 min-h-[100dvh] overflow-y-auto pb-20 md:pb-0">
    <PathVisualization config={pathConfig} />
  </main>

  {/* Right leaderboard - desktop only */}
  <aside className="hidden md:flex md:w-1/4 ...">
    <LeaderboardPanel />
  </aside>

  {/* Mobile-only UI */}
  {isMobile && (
    <>
      <MobileActionBar />
      <Suspense fallback={<div>Loading...</div>}>
        {showStats && <StatsDrawer />}
        {showLeaderboard && <LeaderboardDrawer />}
      </Suspense>
    </>
  )}
</div>
```

### PracticeSessionView (`src/components/practice/PracticeSessionView.tsx`)

Strengths:
- Uses custom `grid-layout-responsive` class (mobile stacked, desktop split 60/40 with sticky scratch pad). Good approach.

Improvements:
- Add safe area padding to any bottom-fixed or sticky elements.
- Ensure all interactive controls meet 44px target size on mobile (submit button, toolbar, drawing tools).
- When keyboard opens, ensure input is visible: add `scroll-margin-bottom` near inputs or call `element.scrollIntoView({ block: 'nearest' })` on focus.

---

## Homework Helper and History Pages

- These follow similar layout patterns to dashboards. Ensure `px-4 sm:px-6` wrappers and stack any side-by-side panels on mobile.
- For upload zones, make the drop area a big tappable button on mobile and show native file picker prominently.

---

## Code-Level Checklist (Search-and-Replace Friendly)

- Replace `h-screen` with `min-h-[100dvh]` where fullscreen is intended:
  - Files: `MainLayout.tsx`, `InteractivePathView.tsx`, dashboard wrappers, homework pages, landing spinners.
- Fix inverted font sizes (mobile > desktop):
  - In `LandingPage.tsx` hero and section headings: use `text-3xl sm:text-4xl lg:text-5xl`.
- Container paddings:
  - Replace raw `px-8` with `px-4 sm:px-6 lg:px-8` across headers/sections.
- Column widths in Practice:
  - `w-1/4` and `w-1/2` → `hidden md:flex md:w-1/4` and `w-full md:w-1/2`.
- Add bottom safe area padding to input/footers:
  - `pb-[calc(env(safe-area-inset-bottom)+12px)]` on chat input and practice input containers.
- Add `xs` breakpoint in `tailwind.config.js` for fine-grained control on very small screens.

---

## Performance Metrics and Budgets

Define specific targets to measure mobile optimization success:

### Performance Budget

Target metrics for mobile (3G network, mid-range device):
- **First Contentful Paint (FCP):** < 1.5s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **First Input Delay (FID):** < 100ms
- **Total Blocking Time (TBT):** < 300ms

### Bundle Size Limits

- **Initial JS bundle:** < 200KB gzipped (currently ~180KB - maintain or reduce)
- **CSS bundle:** < 50KB gzipped
- **Code-split routes:**
  - Learn module: < 120KB gzipped
  - Practice module: < 100KB gzipped
  - Dashboard: < 80KB gzipped
  - Homework helper: < 60KB gzipped
- **Math tools:** Lazy-load per component (< 15KB each)
- **Fonts:** Subset to Latin + Math symbols only (~40KB)

### Monitoring Setup

Add to `package.json`:
```json
{
  "scripts": {
    "lighthouse": "lighthouse http://localhost:5173 --preset=mobile --output=html --output-path=./reports/lighthouse-mobile.html",
    "lighthouse:ci": "lighthouse http://localhost:5173 --preset=mobile --output=json --quiet",
    "bundle-analyze": "vite-bundle-visualizer",
    "perf-budget": "bundlesize"
  },
  "bundlesize": [
    {
      "path": "./dist/assets/*.js",
      "maxSize": "200 kB"
    },
    {
      "path": "./dist/assets/*.css",
      "maxSize": "50 kB"
    }
  ]
}
```

### Optimization Strategies

- **Code Splitting:**
  - Already using React.lazy() for routes - good
  - Add lazy loading for heavy components:
    ```jsx
    const MathToolsVisualizer = lazy(() => import('./math-tools/MathToolsVisualizer'));
    const WeeklyActivityChart = lazy(() => import('./dashboard/WeeklyActivityChart'));
    ```

- **Image Optimization:**
  - Convert PNG logos to WebP with PNG fallback
  - Add explicit width/height to prevent layout shift
  - Use `loading="lazy"` for below-fold images

- **Font Loading:**
  - Use `font-display: swap` for custom fonts
  - Preload critical fonts in index.html:
    ```html
    <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
    ```

- **CSS Optimization:**
  - Ensure Tailwind purges unused styles (check `tailwind.config.js`)
  - Inline critical CSS for above-fold content
  - Avoid large box-shadows on scrolling elements

- **Runtime Performance:**
  - Use `React.memo()` for expensive components (charts, visualizers)
  - Debounce resize handlers (already mentioned in SVG section)
  - Use `will-change: transform` only during animations (remove after)
  - Avoid forcing layout recalculations in hot paths

### Lighthouse CI Integration

Add GitHub Action for automated performance monitoring:
```yaml
# .github/workflows/lighthouse-ci.yml
name: Lighthouse CI
on: [pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install and Build
        run: |
          cd learning-platform
          npm ci
          npm run build
      - name: Run Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            http://localhost:5173
            http://localhost:5173/learn
            http://localhost:5173/practice
          budgetPath: ./budget.json
          uploadArtifacts: true
```

---

## Offline and Network Resilience

Critical for education context (students on unreliable networks, limited data plans):

### Service Worker Implementation

Add basic offline support for static assets:

```javascript
// src/service-worker.js (new file)
const CACHE_NAME = 'ai-campus-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/main.js',
  '/assets/main.css',
  '/fonts/inter-var.woff2',
  '/icons/icon-192.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  // Network-first for API calls, cache-first for static assets
  if (event.request.url.includes('/api/')) {
    event.respondWith(networkFirst(event.request));
  } else {
    event.respondWith(cacheFirst(event.request));
  }
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached || fetch(request);
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return caches.match(request);
  }
}
```

Register in `src/main.tsx`:
```typescript
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
```

### TTS Audio Caching

Cache TTS responses in IndexedDB:

```typescript
// src/utils/ttsCache.ts (new file)
const DB_NAME = 'ai-campus-tts';
const STORE_NAME = 'audio-cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export async function getCachedAudio(text: string): Promise<Blob | null> {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readonly');
  const store = tx.objectStore(STORE_NAME);
  const result = await store.get(text);

  if (!result) return null;

  // Check expiry
  if (Date.now() - result.timestamp > CACHE_DURATION) {
    await deleteCachedAudio(text);
    return null;
  }

  return result.audio;
}

export async function cacheAudio(text: string, audio: Blob): Promise<void> {
  const db = await openDB();
  const tx = db.transaction(STORE_NAME, 'readwrite');
  const store = tx.objectStore(STORE_NAME);

  await store.put({
    text,
    audio,
    timestamp: Date.now(),
  });
}

// Common phrases to pre-cache
const COMMON_PHRASES = [
  "Great job!",
  "Try again",
  "Here's a hint",
  "Let me show you the solution",
  "You're getting closer",
];
```

### Network Status Indicator

Add visual feedback for connection state:

```tsx
// src/components/NetworkStatus.tsx (new file)
export const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [connectionType, setConnectionType] = useState<string>('unknown');

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Detect connection type
    const connection = (navigator as any).connection;
    if (connection) {
      setConnectionType(connection.effectiveType);
      connection.addEventListener('change', () => {
        setConnectionType(connection.effectiveType);
      });
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline && connectionType !== 'slow-2g' && connectionType !== '2g') {
    return null; // Don't show anything when connection is good
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-warning/90 text-warning-foreground px-4 py-2 text-sm text-center z-50">
      {!isOnline && 'You are offline. Some features may not work.'}
      {isOnline && connectionType === 'slow-2g' && 'Slow connection detected. Audio disabled.'}
      {isOnline && connectionType === '2g' && 'Limited connection. Some features may be slow.'}
    </div>
  );
};
```

### Offline Mode for Topics

Allow previously loaded topics to work offline:

```typescript
// src/services/offlineTopicCache.ts (new file)
export async function cacheTopicData(topicId: string, data: TopicData): Promise<void> {
  const db = await openDB();
  await db.put('topics', { topicId, data, timestamp: Date.now() });
}

export async function getOfflineTopics(): Promise<string[]> {
  const db = await openDB();
  const topics = await db.getAll('topics');
  return topics.map(t => t.topicId);
}

// Show offline indicator in topic selection
const OfflineTopicBadge = ({ topicId }: { topicId: string }) => {
  const [isAvailableOffline, setIsAvailableOffline] = useState(false);

  useEffect(() => {
    checkOfflineAvailability(topicId).then(setIsAvailableOffline);
  }, [topicId]);

  if (!isAvailableOffline) return null;

  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
      📥 Available offline
    </span>
  );
};
```

### Enhanced Retry Logic

Extend existing fallback service with better mobile network handling:

```typescript
// src/services/FallbackAIService.ts enhancement
const retryWithBackoff = async (fn: () => Promise<any>, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      // Fast-fail for 503 (already implemented)
      if (error.status === 503) throw error;

      // Retry for network errors with exponential backoff
      if (error.message?.includes('network') || error.message?.includes('fetch')) {
        const delay = Math.min(1000 * Math.pow(2, i), 5000); // Max 5s
        await new Promise(resolve => setTimeout(resolve, delay));
        continue;
      }

      throw error; // Other errors - don't retry
    }
  }
  throw new Error('Max retries exceeded');
};
```

---

## Enhanced Accessibility (A11y) on Mobile

Mobile accessibility requires additional considerations beyond desktop:

### Screen Reader Navigation

- **SVG Path Accessibility:**
  - Add descriptive labels to path nodes:
    ```jsx
    <circle
      role="button"
      aria-label={`Topic: ${node.title}. Status: ${node.completed ? 'Completed' : 'Not started'}`}
      tabIndex={0}
    />
    ```
  - Provide keyboard navigation alternative:
    ```jsx
    <div role="navigation" aria-label="Learning path">
      {nodes.map(node => (
        <button
          key={node.id}
          onClick={() => selectNode(node.id)}
          className="sr-only focus:not-sr-only"
        >
          {node.title} - {node.status}
        </button>
      ))}
    </div>
    ```

- **Math Content Accessibility:**
  - Use `aria-live` regions for AI responses:
    ```jsx
    <div
      aria-live="polite"
      aria-atomic="true"
      role="status"
    >
      {tutorResponse.display.content}
    </div>
    ```
  - Add alt text for LaTeX expressions:
    ```jsx
    <span aria-label="x squared plus 3x equals 10">
      $x^2 + 3x = 10$
    </span>
    ```

- **Visual Tool Labels:**
  - Provide text descriptions for diagrams:
    ```jsx
    <RightTriangleVisualizer
      aria-label={`Right triangle with angle ${angle} degrees, opposite side ${opposite} units, and adjacent side ${adjacent} units`}
      role="img"
    />
    ```

### Touch Gesture Alternatives

- Provide button alternatives for swipe gestures:
  - Drawer close: Both swipe-down AND close button
  - Path navigation: Both swipe AND next/previous buttons
  - Chart interaction: Both pinch-zoom AND zoom buttons

### Dark Mode and High Contrast

- Ensure dark mode works in high-contrast mode:
  ```css
  @media (prefers-contrast: high) {
    :root {
      --color-primary: #0066ff;
      --color-background: #000000;
      --color-text: #ffffff;
    }
  }
  ```

- Test with iOS "Increase Contrast" and Android "High contrast text"

### Focus Indicators for External Keyboards

Many mobile users connect Bluetooth keyboards (especially tablets):

```css
/* Ensure visible focus indicators */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* But hide for mouse users */
*:focus:not(:focus-visible) {
  outline: none;
}
```

### Reduced Motion Support

Respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

In React:
```tsx
const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

// Use in drawer animations
const DrawerAnimation = ({ children }) => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ y: reducedMotion ? 0 : '100%' }}
      animate={{ y: 0 }}
      transition={{ duration: reducedMotion ? 0 : 0.3 }}
    >
      {children}
    </motion.div>
  );
};
```

### Font Scaling Support

Respect user's text size preferences:

```css
/* Use relative units (rem/em) not px */
.text-base {
  font-size: 1rem; /* Scales with user preference */
}

/* Test with iOS Text Size settings and Android Font Size */
```

---

## Prioritized Rollout Plan (Revised)

### Phase 0: Foundation (Week 1)
**Goal:** Set up infrastructure for mobile development and testing

- [ ] Add `xs` breakpoint to `tailwind.config.js`
- [ ] Update viewport meta with `viewport-fit=cover` in `index.html`
- [ ] Add safe area inset utilities to Tailwind config
- [ ] Set up mobile testing environment (BrowserStack or real devices)
- [ ] Configure Lighthouse CI in GitHub Actions
- [ ] Define performance budgets and add to `package.json`
- [ ] Create `useKeyboardHeight` and `useReducedMotion` hooks
- [ ] Measure baseline metrics (mobile Lighthouse scores, completion rates)

**Success Criteria:**
- Lighthouse CI running on PRs
- Mobile testing devices accessible
- Baseline metrics documented

### Phase 1: Critical UX Blockers (Week 2-3)
**Goal:** Fix features that completely break on mobile

- [ ] **Math Input Toolbar** (highest priority - core feature):
  - Implement `visualViewport` keyboard detection
  - Resize math toolbar for mobile (48px buttons, 3-column grid)
  - Add safe area padding to input container
  - Test on iPhone SE and Pixel 5

- [ ] **Learn Module Layout:**
  - Convert `LeftPanel` to off-canvas drawer on mobile
  - Hide fixed avatar overlay on small screens
  - Add safe area padding to `InputArea`
  - Test keyboard behavior with math input

- [ ] **TTS Audio on iOS:**
  - Implement audio context unlock on first user gesture
  - Add visible play/pause controls
  - Show loading state during TTS generation
  - Test on Safari iOS (autoplay restrictions)

**Success Criteria:**
- Students can enter math equations on mobile devices
- Learn module usable on iPhone SE (smallest target)
- Audio works on iOS without user confusion

### Phase 2: Practice Module (Week 4)
**Goal:** Make practice mode fully functional on mobile

- [ ] Refactor `InteractivePathView`:
  - Implement responsive 3→1 column layout
  - Scale SVG nodes and spacing for mobile (36px radius, 120px spacing)
  - Add touch interaction with 16px invisible padding
  - Create slide-up drawers for Stats/Leaderboard
  - Add mobile action bar at bottom

- [ ] Optimize `PracticeSessionView`:
  - Verify touch targets (≥44px) on all interactive elements
  - Add safe area padding to bottom controls
  - Test keyboard visibility with answer inputs

**Success Criteria:**
- Path navigation works smoothly on mobile (60fps)
- No accidental node taps
- Stats/Leaderboard accessible without cramping main view

### Phase 3: Global Typography and Spacing (Week 5)
**Goal:** Consistent, mobile-first responsive scaling

- [ ] Fix inverted font sizes (mobile > desktop):
  - Update `LandingPage.tsx` headings: `text-3xl sm:text-4xl lg:text-5xl`
  - Audit all components for incorrect responsive order

- [ ] Standardize container paddings:
  - Replace `px-8` with `px-4 sm:px-6 lg:px-8` globally
  - Use search-and-replace patterns from checklist

- [ ] Replace `h-screen` with `min-h-[100dvh]`:
  - Update `MainLayout`, `InteractivePathView`, landing pages
  - Test on iOS Safari (address bar behavior)

**Success Criteria:**
- No more horizontal scrolling on 360px screens
- Text is readable without zooming
- Full-height sections work with dynamic browser chrome

### Phase 4: Dashboards and Secondary Pages (Week 6)
**Goal:** Polish non-critical user flows

- [ ] Normalize dashboard components:
  - Consistent card padding: `p-4` mobile, `p-6` md+
  - Allow chip wrapping with `flex-wrap gap-y-2`
  - Simplify `WeeklyActivityChart` on mobile

- [ ] Update `HomePage`:
  - Responsive header padding and logo size
  - Collapse `ProfileSwitcher` to icon-only on small screens
  - Add bottom safe area padding to footer

- [ ] Homework Helper pages:
  - Stack side-by-side panels on mobile
  - Make upload zone a large tappable button

**Success Criteria:**
- Dashboards readable and functional on mobile
- No layout breaks or awkward wrapping

### Phase 5: Performance and Offline (Week 7)
**Goal:** Optimize for slow networks and limited data

- [ ] Implement service worker for static assets
- [ ] Add TTS audio caching (IndexedDB)
- [ ] Lazy-load heavy components (charts, visualizers)
- [ ] Add network status indicator
- [ ] Pre-cache common TTS phrases
- [ ] Implement offline topic caching
- [ ] Optimize bundle sizes (ensure <200KB main bundle)

**Success Criteria:**
- Lighthouse mobile performance score >90
- App loads on 3G in <3.5s
- Previously visited topics work offline

### Phase 6: Accessibility and Final Polish (Week 8)
**Goal:** Ensure inclusive mobile experience

- [ ] Add ARIA labels to SVG paths and math tools
- [ ] Implement keyboard navigation for all interactive elements
- [ ] Test with screen readers (VoiceOver on iOS, TalkBack on Android)
- [ ] Add reduced motion support
- [ ] Test with large text sizes (iOS Text Size, Android Font Size)
- [ ] Verify focus indicators with Bluetooth keyboard
- [ ] Final cross-browser testing (iOS Safari, Android Chrome, Samsung Internet)

**Success Criteria:**
- Lighthouse accessibility score >95
- App usable with screen reader
- All interactions possible via keyboard

### Phase 7: User Testing and Iteration (Week 9-10)
**Goal:** Validate with real students on mobile devices

- [ ] Conduct user testing with 5-10 students (mix of iOS/Android)
- [ ] A/B test new mobile layouts vs. old (if feature-flagged)
- [ ] Collect qualitative feedback (surveys, interviews)
- [ ] Monitor analytics: mobile completion rates, input method usage
- [ ] Fix critical issues discovered during testing
- [ ] Document lessons learned

**Success Criteria:**
- Mobile practice completion rate within ±10% of desktop
- <5% of users report mobile usability issues
- Student satisfaction score >4/5 for mobile experience

---

## Implementation Risks and Mitigation

### High-Risk Changes

**1. InteractivePathView Refactor**
- **Risk:** Complex SVG manipulation, dynamic node positioning, high regression risk
- **Impact:** Practice module completely broken if done incorrectly
- **Mitigation:**
  - Feature-flag the mobile layout: `VITE_MOBILE_PATH_VIEW=true`
  - Create parallel component: `InteractivePathViewMobile.tsx` initially
  - A/B test with 10-20% of mobile users before full rollout
  - Keep old implementation as fallback for 2 weeks
  - Comprehensive visual regression tests (Percy, Chromatic)

**2. Global `min-h-[100dvh]` Replacement**
- **Risk:** May break existing layouts (modals, overlays, nested containers)
- **Impact:** Various layout bugs across multiple pages
- **Mitigation:**
  - Search for all `h-screen` usage first: `grep -r "h-screen" src/`
  - Replace one component at a time (not bulk find-replace)
  - Test each component individually on mobile before committing
  - Keep `h-screen` for modals and fullscreen overlays (intentional)
  - Document exceptions in code comments

**3. LeftPanel Mobile Drawer**
- **Risk:** State management complexity, animation jank, touch event conflicts
- **Impact:** Learn module navigation broken on mobile
- **Mitigation:**
  - Use CSS transforms (not width/left) for 60fps animations
  - Add `will-change: transform` only during animation
  - Use `React.memo()` to prevent unnecessary re-renders
  - Debounce touch events to prevent double-triggers
  - Test on low-end Android devices (not just simulators)

### Medium-Risk Changes

**4. Font Size Inversion Fixes**
- **Risk:** May affect brand consistency, designer approval needed
- **Impact:** Visual appearance changes across site
- **Mitigation:**
  - Show before/after screenshots to design lead
  - Test with brand guidelines (maintain hierarchy)
  - Ensure mobile headings still feel prominent

**5. Touch Target Expansion**
- **Risk:** May increase visual clutter, affect desktop layouts
- **Impact:** Desktop users see larger, less dense UI
- **Mitigation:**
  - Use responsive utilities: `p-2 md:p-1` for padding
  - Only expand on touch devices: `@media (pointer: coarse)`
  - Get designer sign-off on increased spacing

### Low-Risk Changes

**6. Safe Area Padding**
- **Risk:** Minimal - only affects iOS notch devices
- **Impact:** Extra padding on non-notch devices (acceptable)
- **Mitigation:**
  - Use `max()` fallback: `max(env(safe-area-inset-bottom), 12px)`
  - Test on non-notch devices to ensure padding isn't excessive

### Rollback Strategy

For each phase:
1. **Git tags:** Tag before each phase deployment
   ```bash
   git tag mobile-opt-phase-1-start
   git tag mobile-opt-phase-1-complete
   ```

2. **Feature flags:** Use environment variables for major changes
   ```typescript
   const useMobileLayout = import.meta.env.VITE_MOBILE_LAYOUT === 'true';
   ```

3. **Deploy script:** Add rollback option
   ```bash
   # Rollback to previous tag
   git checkout mobile-opt-phase-1-start
   npm run build && npm run deploy
   ```

4. **Monitoring:** Watch error rates and bounce rates for 24h post-deploy
   - If mobile error rate increases >5%: immediate rollback
   - If mobile bounce rate increases >10%: investigate and potentially rollback

---

## Component-Level Testing Checklist

### Learn Module (`src/components/learn/`)

**MainLayout.tsx**
- [ ] Left panel collapses to off-canvas drawer on mobile (<768px)
- [ ] Drawer slides in smoothly at 60fps
- [ ] Backdrop dims content and closes drawer on tap
- [ ] Drawer doesn't interfere with center panel scrolling
- [ ] `min-h-[100dvh]` works correctly on iOS Safari
- [ ] Safe area insets respected in header and footer

**InputArea.tsx**
- [ ] Math toolbar appears above keyboard on mobile
- [ ] Symbol buttons are 48x48px minimum
- [ ] Quick symbols row always visible
- [ ] Extended symbols collapse behind "More" button
- [ ] Keyboard doesn't cover input field
- [ ] `visualViewport` API detects keyboard correctly
- [ ] Safe area padding at bottom (no overlap with home indicator)
- [ ] Input font size ≥16px (prevents iOS zoom)
- [ ] Haptic feedback on symbol tap (if supported)

**ChatInterface.tsx**
- [ ] Fixed avatar overlay hidden on mobile (<640px)
- [ ] Messages scroll smoothly without jank
- [ ] `aria-live` regions announce new messages for screen readers
- [ ] LaTeX renders correctly at mobile font sizes
- [ ] Code blocks overflow horizontally (not break layout)

### Practice Module (`src/components/practice/`)

**InteractivePathView.tsx**
- [ ] Three-column layout collapses to single column on mobile
- [ ] SVG nodes scale to 36px radius on mobile
- [ ] Vertical spacing increases to 120px on mobile
- [ ] Touch targets have 16px invisible padding
- [ ] No accidental taps on adjacent nodes
- [ ] Stats/Leaderboard slide up from bottom (not side)
- [ ] Drawers close on backdrop tap
- [ ] Drawers close on swipe-down gesture
- [ ] Mobile action bar fixed at bottom with safe area padding
- [ ] Path re-calculates on orientation change
- [ ] 60fps scrolling and animations
- [ ] Lazy-loaded drawer content (not rendered until opened)

**PracticeSessionView.tsx**
- [ ] Problem and scratch pad stack vertically on mobile
- [ ] All buttons ≥44px touch targets
- [ ] Answer input visible when keyboard opens
- [ ] Drawing tools accessible with keyboard open
- [ ] Submit button fixed and visible (not behind keyboard)
- [ ] Safe area padding on bottom controls

### Dashboard Components (`src/components/dashboard/`)

**StudentDashboard.tsx**
- [ ] Cards stack in single column on mobile
- [ ] Consistent padding: `p-4` mobile, `p-6` desktop
- [ ] Meta chips wrap properly with `flex-wrap gap-y-2`
- [ ] No horizontal overflow on 360px screens
- [ ] `WeeklyActivityChart` simplified or shows summary stat on mobile

**ActionCard.tsx**
- [ ] Title and description readable at mobile sizes
- [ ] Icon scales appropriately (24px mobile, 32px desktop)
- [ ] Tap target covers entire card (not just text)
- [ ] Card doesn't "dance" on tap (prevent double-tap zoom)

### Visual Math Tools (`src/components/math-tools/`)

**RightTriangleVisualizer.tsx**
- [ ] Drag handles 40px diameter on mobile (24px desktop)
- [ ] Invisible hit area 16px padding around handles
- [ ] Labels use `text-base` font on mobile
- [ ] Double-tap resets zoom
- [ ] Pinch-to-zoom works (0.5x - 2x bounds)
- [ ] Touch doesn't trigger page scroll during drag
- [ ] `aria-label` describes triangle configuration
- [ ] Reset button clearly visible and ≥44px

**BearingsVisualizer.tsx**
- [ ] Compass rose tap zones ≥44px
- [ ] Two-finger rotate adjusts bearing
- [ ] Angle values readable on small screens
- [ ] Simplified mode hides decorative elements on mobile

### Global Components

**NetworkStatus.tsx** (new)
- [ ] Shows banner when offline
- [ ] Shows warning on slow-2g or 2g connection
- [ ] Hides when connection is good
- [ ] Positioned at top (not blocking content)
- [ ] Respects safe area insets

**AudioControls.tsx** (enhancement)
- [ ] Play/pause button visible on mobile
- [ ] Shows loading state during TTS generation
- [ ] Playback speed selector (0.75x - 1.5x)
- [ ] Mute toggle persists to localStorage
- [ ] Works after audio context unlock on iOS

---

## QA Checklist (Mobile Devices)

### iOS Safari Testing

**Devices to test:**
- iPhone SE (3rd gen) - 375px width, smallest modern iPhone
- iPhone 14 Pro - 393px width, notch + dynamic island
- iPhone 14 Pro Max - 430px width, largest iPhone
- iPad Mini - 768px width, tablet breakpoint

**Critical checks:**
- [ ] Safe areas respected; no clipped content under sensor housing
- [ ] Content not hidden behind dynamic island
- [ ] Keyboard doesn't hide input areas; screen doesn't jump unexpectedly
- [ ] TTS audio works after user gesture (not blocked by autoplay restrictions)
- [ ] `100dvh` handles address bar show/hide correctly
- [ ] Touch targets ≥44px (iOS HIG requirement)
- [ ] Pinch-to-zoom disabled on inputs (via viewport meta)
- [ ] No 300ms tap delay (via touch-action CSS)
- [ ] Reduced motion respected (Settings > Accessibility > Motion)
- [ ] VoiceOver navigation works (swipe through elements, double-tap to activate)
- [ ] Text Size scaling works (Settings > Display > Text Size)

### Android Chrome Testing

**Devices to test:**
- Small device - 360px width (common budget phones)
- Pixel 5 - 393px width, mid-range
- Pixel 8 - 412px width, flagship
- Tablet - 768px+ width

**Critical checks:**
- [ ] All buttons reachable; no horizontal scrolling on primary views
- [ ] Safe area insets work (if applicable - some Android devices have notches)
- [ ] Keyboard doesn't hide input areas
- [ ] TTS audio works without restrictions
- [ ] Touch targets ≥48dp (Android Material Design requirement)
- [ ] Back button closes drawers (not exits app)
- [ ] TalkBack navigation works (swipe through elements, double-tap to activate)
- [ ] Font Size scaling works (Settings > Display > Font size)
- [ ] High contrast text mode respected (Settings > Accessibility)

### Cross-Platform Checks

**All devices:**
- [ ] Touch targets ≥44px (iOS) or ≥48dp (Android)
- [ ] Adequate spacing between interactive elements (≥8px)
- [ ] Scrolling smooth (60fps); no nested scroll jank
- [ ] Overlays (modals, drawers) trap focus and close via swipe/tap/button
- [ ] No content requiring horizontal scroll
- [ ] Images have explicit dimensions (prevent layout shift)
- [ ] Fonts readable without zooming (≥16px for body text)
- [ ] Forms submit on "Enter" key (mobile keyboards)
- [ ] Loading states visible (no "frozen" appearance)
- [ ] Error messages accessible and actionable

**Network conditions:**
- [ ] Test on 3G network (DevTools throttling)
- [ ] Verify graceful degradation when offline
- [ ] Check TTS behavior on slow connection (should disable or show warning)
- [ ] Ensure retry logic works for flaky connections

**Orientation changes:**
- [ ] Layout adapts correctly portrait → landscape
- [ ] No content clipped or hidden after rotation
- [ ] Safe areas update correctly (landscape notch position)
- [ ] Focus maintained on active input after rotation

---

## Concrete Code Examples

- Viewport meta (index.html):
```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

- Tailwind screens (tailwind.config.js):
```js
export default {
  theme: {
    extend: {
      screens: { xs: '360px' },
    }
  }
}
```

- Full-height containers:
```jsx
<div className="min-h-[100dvh] flex flex-col">...</div>
```

- Standard section padding:
```jsx
<section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">...</section>
```

- Correct headline scaling:
```jsx
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">...</h1>
```

- Practice 3→1 column on mobile:
```jsx
<aside className="hidden md:flex md:w-1/4">...</aside>
<main className="w-full md:w-1/2">...</main>
<aside className="hidden md:flex md:w-1/4">...</aside>
```

- Safe area padding for bottom input:
```jsx
<div className="border-t p-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">...</div>
```

---

## Summary of Enhancements to Original Review

This updated review adds critical **AI tutor-specific mobile considerations** that were missing from the original analysis:

### New Sections Added

1. **Math Input on Mobile** (lines 48-123)
   - `visualViewport` API for keyboard detection
   - Mobile-optimized math toolbar (48px buttons, 3-column grid)
   - Touch interaction patterns and haptic feedback
   - Safe area integration

2. **Visual Math Tools on Mobile** (lines 125-176)
   - Touch-optimized SVG controls (40px handles, 16px invisible padding)
   - Pinch-to-zoom implementation
   - Tool-specific recommendations (right triangle, bearings)
   - Accessibility labels for diagrams

3. **TTS and Audio Playback on Mobile** (lines 178-281)
   - iOS autoplay restrictions and audio context unlock
   - Media Session API for lock screen controls
   - Audio caching strategy (IndexedDB)
   - Network optimization and bandwidth detection

4. **Enhanced Keyboard and Input Focus Management** (lines 283-352)
   - Real-time keyboard height tracking
   - Smart focus management (no auto-focus on mobile)
   - Input visibility strategies
   - Multi-context input handling

5. **Expanded Safe Area Insets** (lines 354-416)
   - Complete safe area handling (all orientations)
   - Tailwind config utilities
   - Landscape orientation support

6. **Performance Metrics and Budgets** (lines 727-840)
   - Specific performance targets (FCP, LCP, TTI, CLS)
   - Bundle size limits per route
   - Lighthouse CI integration
   - Monitoring setup

7. **Offline and Network Resilience** (lines 842-1061)
   - Service worker implementation
   - TTS audio caching
   - Network status indicator
   - Offline topic caching
   - Enhanced retry logic

8. **Enhanced Accessibility (A11y) on Mobile** (lines 1063-1219)
   - Screen reader navigation for SVG paths and math content
   - Touch gesture alternatives
   - Dark mode and high contrast support
   - Focus indicators for external keyboards
   - Reduced motion support

9. **Revised Prioritized Rollout Plan** (lines 1221-1374)
   - 7-phase plan with specific success criteria
   - Week-by-week breakdown
   - Math input prioritized as Phase 1 (critical UX blocker)
   - User testing phase added

10. **Implementation Risks and Mitigation** (lines 1378-1462)
    - High/medium/low risk categorization
    - Specific mitigation strategies
    - Feature flags and rollback plan
    - Monitoring thresholds

11. **Component-Level Testing Checklist** (lines 1466-1568)
    - Module-by-module test cases
    - Specific measurements (48px buttons, 36px SVG nodes, 120px spacing)
    - Per-component acceptance criteria

12. **Expanded QA Checklist** (lines 1571-1638)
    - Device-specific testing (iPhone SE, Pixel 5, etc.)
    - iOS Safari vs. Android Chrome differences
    - Network condition testing
    - Orientation change testing

### Key Improvements

**Depth of Detail:**
- Original: Generic recommendations ("add safe area padding")
- Updated: Exact code examples with utilities (`pb-[calc(env(safe-area-inset-bottom)+12px)]`)

**AI Tutor Context:**
- Original: Missed math input, visual tools, TTS challenges
- Updated: Comprehensive coverage of unique mobile challenges for education app

**Actionability:**
- Original: High-level suggestions
- Updated: Component-level checklists, code snippets, exact measurements

**Risk Management:**
- Original: None
- Updated: Risk assessment, mitigation strategies, rollback plan

**Success Criteria:**
- Original: "Lighthouse mobile pass"
- Updated: Specific metrics (>90 performance, <3.5s TTI, ±10% completion rate)

### Estimated Implementation Timeline

- **Original estimate:** ~5 weeks (4 phases)
- **Updated estimate:** ~10 weeks (7 phases)
- **Reason for increase:** Added critical AI tutor features (math input, TTS, visual tools) that were underestimated in original review

### Next Steps

1. **Review with team:**
   - Get designer approval for typography and spacing changes (Phase 3)
   - Get product manager buy-in on 10-week timeline
   - Assign ownership for each phase

2. **Set up infrastructure (Phase 0):**
   - Configure BrowserStack or acquire test devices
   - Set up Lighthouse CI
   - Create performance budget configuration

3. **Prototype highest-risk changes:**
   - Build POC for `InteractivePathView` mobile layout
   - Test `visualViewport` keyboard detection on real devices
   - Validate TTS audio unlock flow on iOS Safari

4. **Begin Phase 1 implementation:**
   - Start with math input toolbar (highest priority)
   - Run A/B test with small percentage of users
   - Monitor metrics closely for regressions

---

## Notes on Non-Blocking Issues

- Multiple decorative `fixed` backgrounds exist across screens. These should be measured for paint cost on low-end devices. Consider toggling off on very small screens.
- The serif base font (`Georgia`) may reduce readability on small screens for dense content. Consider `font-ui` on small screens.
- Consider adding PWA manifest for "Add to Home Screen" capability (not critical for MVP but improves mobile experience).
- Explore WebAssembly for math rendering optimization if KaTeX performance becomes an issue on low-end devices.

---

## Acknowledgments and References

**Original review author:** Demonstrated strong understanding of mobile-first design, responsive patterns, and platform-specific concerns. The foundation was solid and comprehensive.

**Updated review contributions:**
- AI tutor-specific mobile challenges
- Education app context (offline learning, unreliable networks)
- Detailed implementation guidance
- Risk assessment and testing strategies

**Useful resources for implementation:**
- [iOS Human Interface Guidelines - Touch Targets](https://developer.apple.com/design/human-interface-guidelines/inputs/touch-targets)
- [Android Material Design - Touch Targets](https://m3.material.io/foundations/interaction/states/state-layers)
- [Visual Viewport API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API)
- [Media Session API MDN](https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API)
- [Web Audio API - iOS Considerations](https://developer.apple.com/documentation/webkit/delivering_video_content_for_safari)
- [Lighthouse Performance Budgets](https://web.dev/performance-budgets-101/)

---

If you want, I can implement any of these sections (global changes, Learn module refactor, Practice module optimization, TTS enhancements, etc.) in follow-up PRs. Just let me know which phase you'd like to start with!

