# Hacker News Dark Mode Proxy

This project is a **Cloudflare Worker** that acts as a **proxy** for [Hacker News](https://news.ycombinator.com), injecting a **dark mode CSS** theme while keeping the site fully functional.

## 🚀 Features

- Proxies Hacker News through Cloudflare Workers.
- Injects custom **dark mode CSS**.
- Fast, free, and serverless.

## 📦 Installation & Setup

### 1. Clone the Repository

```sh
git clone https://github.com/vvainio/dark-hn.git
cd dark-hn
```

### 2. Install Wrangler

Wrangler is Cloudflare's CLI tool for managing Workers.

```sh
npm install -g wrangler
```

### 3. Configure Cloudflare

Update `wrangler.toml` with your Cloudflare **Account ID**. You can find it by running:

```sh
wrangler whoami
```

Then, replace `your-cloudflare-account-id` in `wrangler.toml`:

```toml
name = "dark-hn"
type = "javascript"
account_id = "your-cloudflare-account-id"
workers_dev = true
compatibility_date = "2025-02-24"
```

### 4. Deploy the Worker

To test locally:

```sh
wrangler dev
```

To deploy to Cloudflare:

```sh
wrangler publish
```

Once deployed, you'll get a URL like:

```
https://dark-hn.youraccount.workers.dev
```

Use this to browse Hacker News in **dark mode**.

## 🎨 Dark Mode CSS

The worker injects a set of **CSS styles**. These can be modified from `./src/index.ts`.

## 📜 License

MIT License. Feel free to use and modify.

---

### Enjoy browsing Hacker News in Dark Mode! 🌚
