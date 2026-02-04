

# Plan: Brand Intro Video Animation + Cleanup

## Summary

This plan covers two main tasks:
1. **Remove** the animated logo glow from the "Traditional Dev vs Indoverse Way" section completely
2. **Add** a one-time brand intro video that plays when visitors first arrive, then smoothly transitions to reveal the hero section

---

## Part 1: Remove Logo Animation from Problem/Solution Section

Simply remove the video background element and its glow effects from lines 208-226 in `Index.tsx`, leaving just the gradient overlay for the section background.

**Files to modify:**
- `src/pages/Index.tsx` - Remove the animated logo video and glow divs from the Problem/Solution section

---

## Part 2: Brand Intro Video Implementation

### How It Will Work

```text
+--------------------------------------------------+
|  VISITOR ARRIVES                                  |
|  ↓                                               |
|  Full-screen intro video plays (with sound)       |
|  - Covers entire viewport                         |
|  - Plays for ~10 seconds                          |
|  ↓                                               |
|  Video ends → Smooth animation transition         |
|  - Video shrinks and moves to header logo area   |
|  - Fades out as it reaches the logo position     |
|  ↓                                               |
|  Hero section content fades in beautifully        |
|  - All existing animations preserved              |
|  ↓                                               |
|  Session flag set (won't replay on navigation)    |
+--------------------------------------------------+
```

### Technical Approach

#### 1. Copy the uploaded video to project assets
- Copy `user-uploads://0205.mp4` to `src/assets/brand-intro.mp4`

#### 2. Create a new `BrandIntroOverlay` component
This component will:
- Use `sessionStorage` to track if intro has played (plays only once per session)
- Render as a full-screen overlay with the highest z-index
- Play the video with sound enabled
- After video ends (~10 seconds), animate the video container to:
  - Scale down from fullscreen to a small size (matching the header logo dimensions)
  - Move position from center to the header logo location (top-left)
  - Fade out opacity as it reaches the final position
- After transition completes, hide the overlay and reveal the hero content

#### 3. Responsive video handling
- Desktop: Video fills the viewport with `object-fit: cover` and proper aspect ratio
- Tablet: Same approach, scaled appropriately
- Mobile: Same approach, ensuring no black edges by using `object-fit: cover`

#### 4. Hero section integration
- Modify `Index.tsx` to include the `BrandIntroOverlay` component
- The hero content will start with opacity 0 and animate in after intro completes
- All existing animations (TypewriterText, badges, buttons) will be preserved and triggered after intro ends

### Animation Timeline

| Time | Event |
|------|-------|
| 0s | Visitor arrives, intro video starts playing (full-screen, with sound) |
| ~10s | Video ends (or natural end of video) |
| 10-11s | Video shrinks and moves toward header logo with easing |
| 11-11.5s | Video fades out, overlay hides |
| 11.5s+ | Hero section content animates in with existing framer-motion animations |

---

## Files to Create

| File | Purpose |
|------|---------|
| `src/assets/brand-intro.mp4` | The uploaded brand intro video |
| `src/components/BrandIntroOverlay.tsx` | Full-screen intro overlay with animation logic |

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | 1) Remove logo animation from Problem/Solution section, 2) Import and add BrandIntroOverlay, 3) Add state to control hero content visibility |

---

## Technical Details

### BrandIntroOverlay Component Structure

```text
BrandIntroOverlay
├── State: hasPlayed (from sessionStorage)
├── State: isAnimating (controls shrink animation)
├── State: isVisible (controls overlay visibility)
├── Refs: videoRef (for playback control)
│
├── Effect: Check sessionStorage on mount
│   └── If already played → hide immediately
│   └── If not played → play video
│
├── onEnded handler:
│   1. Set isAnimating = true
│   2. Wait for animation (1s)
│   3. Set sessionStorage flag
│   4. Call onComplete callback
│   5. Set isVisible = false
│
└── Render:
    └── Fixed overlay (z-50+)
        └── motion.div (video container)
            └── video element with brand-intro.mp4
```

### Animation Values (Framer Motion)

```text
Initial state (playing):
  - scale: 1
  - x: 0, y: 0 (centered)
  - opacity: 1

Final state (transitioning):
  - scale: 0.08 (to match ~40-48px logo size from full screen)
  - x: calculated to reach header logo position
  - y: calculated to reach header logo position  
  - opacity: 0
```

### Mobile/Tablet Considerations

- Video uses `object-fit: cover` to ensure no edges/letterboxing
- Container is `w-screen h-screen` on all devices
- Animation calculates header logo position dynamically using viewport dimensions
- Sound will work on mobile (user interaction not required as this is the first thing on page load with no prior interaction needed)

---

## Expected Result

1. First-time visitor sees a premium full-screen brand video (with sound)
2. After ~10 seconds, video smoothly shrinks and flies to the header logo
3. Hero section gracefully fades in with all existing animations intact
4. Returning visitors (same session) skip the intro entirely
5. Works beautifully on desktop, tablet, and mobile

