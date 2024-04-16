# Mocking ES Modules with Node test runner

Try both:

This passes:

```bash
node --import quibble index.test.mjs
```

This fails:

```bash
node --import quibble --import tsx index.test.ts
# or the other way around, since order matters
node --import tsx --import quibble index.test.ts
```

The quibble loader does not seem to work with `tsx` to mock out `node:child_process`.

## Notes

`index.mjs` and `index.ts` are meant to be the exact same thing, the former is without types
