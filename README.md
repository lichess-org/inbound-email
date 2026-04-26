## Development

### Rebuld type file after changing `wrangler.jsonc`

```bash
pnpm cf-typegen
```

## Deploy

```bash
# if setting/changing any secret
wrangler deploy --env=dev --secrets-file=.env.dev
# else
wrangler deploy --env=dev
```
