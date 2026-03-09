FROM node:22-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

WORKDIR /app

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY apps/backend/package.json apps/backend/
COPY packages/database/package.json packages/database/
COPY packages/config-typescript/package.json packages/config-typescript/
COPY packages/config-eslint/package.json packages/config-eslint/

RUN pnpm install --frozen-lockfile

COPY packages/ packages/
COPY apps/backend/ apps/backend/

RUN pnpm --filter @repo/database run generate
RUN pnpm --filter backend run build

FROM node:22-slim AS production

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@10.15.0 --activate

WORKDIR /app

COPY --from=base /app /app

EXPOSE 3001

CMD ["node", "apps/backend/dist/index.js"]
