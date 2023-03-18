# Joker next-tailwind

## Requirements

- [Node.js v18.12.1](https://nodejs.org) or later
- [Yarn 1.22.19](https://classic.yarnpkg.com) or later

## Configuration

Copy file `.env.example` to `.env`

```bash
cp .env.example .env
```

| Key                      | Description                       | Required | Type     |
|--------------------------|-----------------------------------|----------|----------|
| `APP_NAME`               | App Name                          | **✓**    | `string` |

## Installation

```bash
yarn install --frozen-lockfile
```

> Why use `--frozen-lockfile`?
>
> See https://classic.yarnpkg.com/en/docs/cli/install#toc-yarn-install-frozen-lockfile

## Usage

- Start Application
  ```bash
  yarn dev
  ```
- Build Application
  ```bash
  yarn build
  ```
- Check `package.json` to see more script.

## Contributors

- Vicco Semuel Manopo 
  - github: @viccosm
  - email: viccosemuelmanopo@gmail.com
