FROM node:20-alpine AS development-dependencies-env
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy monorepo root files needed for pnpm workspace
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml /app/
# Copy web project
COPY web/ /app/web/
WORKDIR /app
RUN pnpm install --frozen-lockfile

FROM node:20-alpine AS production-dependencies-env
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy monorepo root files needed for pnpm workspace
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml /app/
# Copy web package.json
COPY web/package.json /app/web/
WORKDIR /app
RUN pnpm install --frozen-lockfile --prod --filter web

FROM node:20-alpine AS build-env
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy monorepo root files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml /app/
# Copy web project
COPY web/ /app/web/
# Copy node_modules from previous stage
COPY --from=development-dependencies-env /app/node_modules /app/node_modules
COPY --from=development-dependencies-env /app/web/node_modules /app/web/node_modules
WORKDIR /app
RUN pnpm --filter web build

FROM node:20-alpine
RUN corepack enable && corepack prepare pnpm@latest --activate
# Copy monorepo root files
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml /app/
# Copy web package.json
COPY web/package.json /app/web/
# Copy node_modules and build output
COPY --from=production-dependencies-env /app/node_modules /app/node_modules
COPY --from=production-dependencies-env /app/web/node_modules /app/web/node_modules
COPY --from=build-env /app/web/build /app/web/build
WORKDIR /app
CMD ["pnpm", "--filter", "web", "start"]