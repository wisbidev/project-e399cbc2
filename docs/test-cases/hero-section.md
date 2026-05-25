# Test Cases — Hero Section

## Happy Path Scenarios

**Scenario**: Hero section renders with dark background and blue gradient overlay
**Given**: The landing page is loaded
**When**: The Hero section is in the viewport
**Then**: The background is dark with a blue-cyan gradient overlay covering the full viewport height

**Scenario**: Headline displays correct Vietnamese copy
**Given**: The Hero section is rendered
**When**: The page loads
**Then**: The headline text reads "AI Team. Không cần thuê dev." in large bold white typography (≥ 4xl on mobile, ≥ 6xl on desktop)

**Scenario**: Subheadline explains the value proposition
**Given**: The Hero section is rendered
**When**: The page loads
**Then**: A subheadline with 1–2 sentences in muted gray/blue-300 color is visible below the headline, with constrained max-width

**Scenario**: Primary CTA button "Bắt đầu ngay" is visible and links to Telegram
**Given**: The Hero section is rendered
**When**: The page loads
**Then**: A filled blue button labeled "Bắt đầu ngay" is visible above the fold and links to the Telegram bot

**Scenario**: Secondary CTA button "Xem cách hoạt động" smooth-scrolls to Pipeline
**Given**: The Hero section is rendered
**When**: The user clicks the "Xem cách hoạt động" button
**Then**: The page smooth-scrolls down to the Pipeline section

**Scenario**: Hero section is responsive on mobile
**Given**: The page is viewed on a mobile screen (320px–767px width)
**When**: The Hero section renders
**Then**: All content stacks vertically with proper spacing, no horizontal overflow, and both CTAs are visible without scrolling

**Scenario**: Hero section is responsive on desktop
**Given**: The page is viewed on a desktop screen (≥ 1024px width)
**When**: The Hero section renders
**Then**: The layout spans the full viewport height, typography scales up to ≥ 6xl, and content is centered with proper spacing
