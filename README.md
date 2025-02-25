## 🐛 Reproduction Steps

To reproduce the issue, run the following command using the self-referencing service configuration:
```bash
npm run dev -- -c wrangler.sb.jsonc
```

This will result in the following error:
```
⎔ Starting local server...
[wrangler:inf] Ready on http://localhost:8787
✘ [ERROR] Worker "core:user:my-service-bindings"'s binding "MY_SERVICE_2" refers to service "assets:router:my-service-bindings" with a named entrypoint "MyService2", but "assets:router:my-service-bindings" has no such named entrypoint.

✘ [ERROR] The Workers runtime failed to start. There is likely additional logging output above.
```

## ✅ Working Example
Running the development server with a non-self-referencing service configuration works as expected:
```
npm run dev -- -c wrangler.jsonc
```

In this setup, `wrangler.jsonc` references the service defined in `wrangler.sb.jsonc` (`my-service-bindings`) without self-referencing. As a result, no errors occur and the dev server starts successfully.

## ⚡ Key Difference

- **Failing** (`wrangler.sb.jsonc`):
The service configuration self-references its own worker, leading to a conflict when combined with Workers Assets and named service entrypoints.
- **Working** (`wrangler.jsonc`):
The service configuration references an external worker (`my-service-bindings`) instead of self-referencing, avoiding the error.
