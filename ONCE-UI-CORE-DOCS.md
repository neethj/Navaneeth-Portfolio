# @once-ui-system/core Documentation

## Overview

**Once UI Core** is a design system for Next.js applications. It provides 100+ high-quality components, theming capabilities, and data visualization tools.

- **Package**: `@once-ui-system/core`
- **Version**: 1.5.6 (installed in this project)
- **Official Docs**: [docs.once-ui.com/once-ui/quick-start](https://docs.once-ui.com/once-ui/quick-start)
- **Homepage**: [once-ui.com](https://once-ui.com)
- **GitHub**: [github.com/once-ui-system/core](https://github.com/once-ui-system/core)

## Installation

```bash
npm install @once-ui-system/core
```

## Setup Requirements

1. **Import CSS files** in your root layout:
```tsx
import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
```

2. **Wrap your app with providers**:
```tsx
import {
  LayoutProvider,
  ThemeProvider,
  DataThemeProvider,
  ToastProvider,
  IconProvider
} from "@once-ui-system/core";
```

3. **Add theme initialization script** to prevent flash of unstyled content (FOUC).

## Package Exports

The package exports the following modules:

- **Main export**: `@once-ui-system/core` - All components, hooks, and utilities
- **Components**: `@once-ui-system/core/components/*`
- **Contexts**: `@once-ui-system/core/contexts`
- **Modules**: `@once-ui-system/core/modules`
- **Icons**: `@once-ui-system/core/icons`
- **Types**: `@once-ui-system/core/types`
- **Interfaces**: `@once-ui-system/core/interfaces`
- **Utils**: `@once-ui-system/core/utils`
- **Hooks**: `@once-ui-system/core/hooks`
- **CSS**: 
  - `@once-ui-system/core/css/styles.css`
  - `@once-ui-system/core/css/tokens.css`

## Components

### Layout Components
- `Column` - Vertical layout container
- `Row` - Horizontal layout container
- `Flex` - Flexible layout container
- `Grid` - Grid layout container
- `MasonryGrid` - Masonry grid layout
- `ServerGrid` / `ClientGrid` - Server/client grid variants
- `ServerFlex` / `ClientFlex` - Server/client flex variants

### Typography
- `Heading` - Heading component with variants
- `Text` - Text component with variants
- `BlockQuote` - Block quote component
- `InlineCode` - Inline code component
- `CodeBlock` - Code block component

### Form Components
- `Button` - Button with variants (primary, secondary, tertiary, danger)
- `IconButton` - Icon-only button
- `Input` - Text input
- `Textarea` - Textarea input
- `PasswordInput` - Password input
- `NumberInput` - Number input
- `OTPInput` - OTP input
- `ColorInput` - Color picker input
- `DateInput` - Date input
- `DatePicker` - Date picker
- `DateRangeInput` - Date range input
- `DateRangePicker` - Date range picker
- `Select` - Select dropdown
- `Checkbox` - Checkbox
- `RadioButton` - Radio button
- `Switch` - Toggle switch
- `TagInput` - Tag input field
- `SegmentedControl` - Segmented control

### Display Components
- `Card` - Card container
- `CursorCard` - Card with cursor effects
- `Avatar` - Avatar component
- `AvatarGroup` - Avatar group
- `Badge` - Badge component
- `Tag` - Tag component
- `Chip` - Chip component
- `Banner` - Banner component
- `Skeleton` - Loading skeleton
- `Spinner` - Loading spinner
- `ProgressBar` - Progress bar
- `StatusIndicator` - Status indicator
- `Kbd` - Keyboard key display

### Media Components
- `Media` - Media component (images, videos)
- `CompareImage` - Image comparison component
- `Logo` - Logo component
- `LogoCloud` - Logo cloud display
- `OgCard` - Open Graph card

### Navigation & Interaction
- `SmartLink` - Smart link component
- `NavIcon` - Navigation icon
- `Dropdown` - Dropdown menu
- `DropdownWrapper` - Dropdown wrapper
- `ContextMenu` - Context menu
- `Dialog` - Dialog/modal
- `HoverCard` - Hover card
- `Accordion` - Accordion component
- `AccordionGroup` - Accordion group
- `InteractiveDetails` - Interactive details
- `Carousel` - Carousel component
- `Swiper` - Swiper component
- `ScrollToTop` - Scroll to top button
- `Scroller` - Scroller component
- `InfiniteScroll` - Infinite scroll

### Data Display
- `Table` - Table component
- `List` - List component
- `ListItem` - List item
- `Timeline` - Timeline component
- `Feedback` - Feedback component

### Effects & Animations
- `Fade` - Fade animation
- `RevealFx` - Reveal effect
- `TiltFx` - Tilt effect
- `GlitchFx` - Glitch effect
- `HoloFx` - Holographic effect
- `ShineFx` - Shine effect
- `FlipFx` - Flip effect
- `LetterFx` - Letter animation
- `CountFx` - Count animation
- `CountdownFx` - Countdown animation
- `MatrixFx` - Matrix effect
- `WeatherFx` - Weather effect
- `Particle` - Particle effect
- `Cursor` - Custom cursor
- `Hover` - Hover effects
- `AutoScroll` - Auto scroll
- `Mask` - Mask component
- `Background` - Background component
- `Animation` - Animation component

### UI Components
- `Line` - Line/divider
- `Option` - Option component
- `EmojiPicker` - Emoji picker
- `EmojiPickerDropdown` - Emoji picker dropdown
- `StylePanel` - Style panel
- `StyleOverlay` - Style overlay
- `ThemeSwitcher` - Theme switcher
- `UserMenu` - User menu
- `FocusTrap` - Focus trap
- `Arrow` - Arrow component
- `ArrowNavigationContext` - Arrow navigation context

### Toast & Notifications
- `Toast` - Toast notification
- `Toaster` - Toast container

## Providers (Contexts)

### LayoutProvider
Provides layout context for the application.

### ThemeProvider
Manages theme configuration:
- `brand` - Brand color scheme
- `accent` - Accent color scheme
- `neutral` - Neutral color
- `solid` - Solid type
- `solidStyle` - Solid style
- `border` - Border style
- `surface` - Surface style
- `transition` - Transition style
- `scaling` - Scaling size

### DataThemeProvider
Manages data visualization theme:
- `variant` - Chart variant
- `mode` - Chart mode
- `height` - Chart height
- `axis` - Axis configuration
- `tick` - Tick configuration

### ToastProvider
Manages toast notifications.

### IconProvider
Provides icon library configuration.

## Hooks

- `useHeadingLinks` - Hook for heading links
- `useDebounce` - Debounce hook
- `useFetchOg` - Fetch Open Graph data hook
- `useTheme` - Theme hook (from ThemeProvider)
- `useToast` - Toast hook (from ToastProvider)

## Types & Interfaces

The package exports TypeScript types and interfaces for:
- Component props
- Theme configuration
- Icon names
- Chart/data visualization types
- Utility types

## Example Usage

### Basic Component Usage
```tsx
import { Column, Row, Heading, Text, Button } from "@once-ui-system/core";

export default function MyComponent() {
  return (
    <Column gap="m" padding="l">
      <Heading variant="display-strong-l">Hello World</Heading>
      <Text variant="body-default-m">This is a text component</Text>
      <Row gap="s">
        <Button variant="primary" label="Click me" />
        <Button variant="secondary" label="Cancel" />
      </Row>
    </Column>
  );
}
```

### Provider Setup
```tsx
import { Providers } from "@/components/Providers";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        {/* Theme init script */}
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

## Common Props

Many components share common props:

- `variant` - Visual variant (e.g., "primary", "secondary")
- `size` - Size ("s", "m", "l")
- `radius` - Border radius
- `fillWidth` - Fill available width
- `horizontal` - Horizontal alignment
- `vertical` - Vertical alignment
- `gap` - Gap spacing
- `padding` - Padding
- `margin` - Margin
- `className` - Custom CSS class
- `style` - Inline styles

## Resources

- **Documentation**: [docs.once-ui.com](https://docs.once-ui.com/once-ui/quick-start)
- **GitHub**: [github.com/once-ui-system/core](https://github.com/once-ui-system/core)
- **Discord Community**: [Design Engineers Club](https://discord.com/invite/5EyAQ4eNdS)
- **NPM Package**: [npmjs.com/package/@once-ui-system/core](https://www.npmjs.com/package/@once-ui-system/core)

## Notes

- This library requires Next.js >= 13.4
- React >= 18 is required
- Sass is required as a peer dependency
- Sharp is required for image optimization
- All components are TypeScript-typed
- Components support server and client rendering
- Theming is done via CSS variables and data attributes
