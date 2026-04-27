## Development

### Rebuld type file after changing `wrangler.jsonc`

```bash
pnpm cf-typegen
```

## Deploy

### Dev

```bash
# if setting/changing any secret
wrangler deploy --env=dev --secrets-file=.env.dev
# else
wrangler deploy --env=dev
```

### Prod

```bash
# if setting/changing any secret
wrangler deploy --env=prod --secrets-file=.env.prod
# else
wrangler deploy --env=prod
```
