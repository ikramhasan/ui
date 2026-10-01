# UI Registry

A custom component registry distributed through the [shadcn CLI](https://ui.shadcn.com/docs/registry/getting-started).

## Development

```bash
pnpm install
pnpm dev
```

## Adding registry items

1. Add source files under `registry/<item-name>/`.
2. Register the item in `registry.json` (see the [registry-item schema](https://ui.shadcn.com/docs/registry/registry-item-json)).
3. Build the registry:

   ```bash
   pnpm registry:build
   ```

   This writes JSON files to `public/r/`, served at `/r/<item-name>.json`.

## Installing items

```bash
npx shadcn@latest add http://localhost:3000/r/<item-name>.json
```

Replace `http://localhost:3000` with the deployed URL (and update `homepage` in `registry.json`).
