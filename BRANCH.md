# Local Development Guide (macOS)

Follow these steps to run n8n locally with your branch changes.

## 1. Prerequisites

Ensure you have Node.js 24+ and Homebrew installed. Then, set up `pnpm` using corepack:

```bash
# Install corepack if using Homebrew Node
brew install corepack

# Enable corepack and prepare pnpm
corepack enable
corepack prepare pnpm@10.22.0 --activate
```

> **Note:** If you get a conflict error regarding `pnpm` while installing `corepack`, run `brew unlink pnpm` and try again.

## 2. Initial Setup

Run these commands from the root of the repository to install dependencies and build the project for the first time:

```bash
# Install all dependencies and link modules
pnpm install

# Build all packages (required for the first run)
pnpm build
```

## 3. Running n8n with Your Changes

### Option A: Full Development Mode (Recommended)
This starts both the backend and frontend with hot-reload enabled. Any changes you make to the code will automatically restart the server or refresh the UI.

```bash
pnpm dev
```

### Option B: Backend Only (Faster)
If you are only changing nodes or server logic, use the backend-only mode:

```bash
pnpm dev:be
```

### Option C: Production-like Mode
To test exactly how the changes will behave in a compiled state:

```bash
pnpm build
pnpm start
```

## 4. Testing with a Clean Database
If you want to avoid affecting your existing n8n data (in `~/.n8n`), you can specify a custom directory for development:

```bash
N8N_USER_FOLDER=~/.n8n-branch-test pnpm dev
```

## 5. Summary of Useful Commands

| Command | Purpose |
| :--- | :--- |
| `pnpm install` | Update dependencies after pulling changes |
| `pnpm build` | Rebuild all packages (run after major changes) |
| `pnpm dev` | Start full dev environment (FE + BE) |
| `pnpm test` | Run the full test suite |
