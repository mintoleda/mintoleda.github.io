# AI Coding Agent Guidelines for `mintoleda.github.io`

Welcome to the `mintoleda.github.io` codebase! This document provides essential guidelines for AI coding agents to be productive and aligned with the project's conventions and architecture.

## Project Overview

This repository is a personal website built using **Next.js** and **TypeScript**. It follows a modern, component-based architecture with a focus on modularity and reusability. The project structure is organized to separate UI components, utilities, and application-level logic.

### Key Directories

- **`app/`**: Contains the main application entry points, including global styles (`globals.css`) and layout definitions (`layout.tsx`).
- **`components/`**: Houses reusable React components, such as `Header`, `Footer`, and `Hero`. Subdirectories like `ui/` contain atomic UI elements (e.g., `button.tsx`, `card.tsx`).
- **`lib/`**: Utility functions and shared logic, such as `utils.ts`.
- **`public/`**: Static assets like images and fonts.

## Development Workflow

### Installation

Ensure you have Node.js installed. Run the following command to install dependencies:

```bash
npm install
```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

### Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. Run the following command to check for linting issues:

```bash
npm run lint
```

### Testing

Currently, no testing framework is set up. If tests are added, update this section with relevant commands and practices.

## Project-Specific Conventions

### Component Structure

- Components are written as functional React components.
- Use TypeScript for type safety.
- Co-locate component-specific styles using CSS modules or styled-components.

### Theming

- The `theme-provider.tsx` component manages theming.
- Use `mode-toggle.tsx` or `simple-mode-toggle.tsx` for light/dark mode switching.

### UI Patterns

- Reusable UI elements (e.g., `Button`, `Card`) are located in `components/ui/`.
- Follow the atomic design principle for creating UI components.

### External Dependencies

- **Next.js**: Framework for server-side rendering and static site generation.
- **PostCSS**: Used for processing CSS.
- **ESLint**: Enforces code quality and consistency.

## Integration Points

- **Global Styles**: Defined in `app/globals.css`.
- **Layout**: Managed in `app/layout.tsx`.
- **Utilities**: Shared logic resides in `lib/utils.ts`.

## Examples

### Adding a New Component

1. Create the component file in `components/` or `components/ui/`.
2. Use the following template:

```tsx
import React from 'react';

type Props = {
  // Define props here
};

const MyComponent: React.FC<Props> = ({ /* props */ }) => {
  return <div>My Component</div>;
};

export default MyComponent;
```

3. Export the component and use it in the appropriate `page.tsx` or another component.

### Adding Utilities

1. Add the utility function to `lib/utils.ts`.
2. Write clear JSDoc comments to describe the function.

```ts
/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
```

## Notes

- Keep the codebase clean and modular.
- Follow the existing patterns and conventions.
- When in doubt, refer to the `README.md` or ask for clarification.

---

This document is a living guide. Update it as the project evolves.