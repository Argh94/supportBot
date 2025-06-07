# ربات پشتیبانی تلگرام | Telegram Support Bot

[![Language](https://img.shields.io/badge/Language-English-009688?logo=google-translate&logoColor=white)](README-EN.md)

<div dir="rtl" markdown="1">

## معرفی

این پروژه یک ربات پشتیبانی تلگرام مبتنی بر Cloudflare Workers است که برای مدیریت ارتباط بین کاربران و ادمین پیاده‌سازی شده است. ربات پیام‌های کاربران (متن و عکس) را به ادمین فوروارد می‌کند و ادمین می‌تواند به آنها پاسخ دهد، کاربران را مسدود یا آزاد کند، پیام همگانی ارسال کند و کاربران غیرفعال را پاک‌سازی نماید. ربات از دو زبان فارسی و انگلیسی پشتیبانی می‌کند و افزودن زبان جدید به سادگی امکان‌پذیر است.

## ✨ امکانات

- **پشتیبانی چندزبانه:** فارسی و انگلیسی (قابل توسعه برای زبان‌های دیگر)
- **مدیریت پیام:** فوروارد پیام‌های متنی و عکس به ادمین همراه با اطلاعات کاربر (نام، نام کاربری، ID)
- **دستورات ادمین:**  
    - `/reply <user_id> <message>`: پاسخ به کاربر خاص  
    - `/block <user_id>`: مسدود کردن کاربر  
    - `/unblock <user_id>`: آزادسازی کاربر  
    - `/broadcast <message>`: ارسال پیام همگانی  
    - `/check`: بررسی و حذف کاربران غیرفعال  
- **محدودسازی ارسال پیام:** هر کاربر فقط هر ۶۰ ثانیه مجاز به ارسال پیام است (ضداسپم)
- **امنیت:** اعتبارسنجی درخواست‌ها با توکن مخفی (secret token)
- **مدیریت خطا:** مدیریت خطاهای API تلگرام و اطلاع‌رسانی به کاربر و ادمین
- **ذخیره‌سازی:** استفاده از Cloudflare KV برای ذخیره داده‌ها (وضعیت بلاک، تعاملات، محدودیت ارسال)

## ⚙️ راه‌اندازی سریع

### ۱. پیش‌نیازها

- حساب Cloudflare Workers
- توکن ربات تلگرام (از BotFather)
- دسترسی به Cloudflare KV
- Node.js (اختیاری برای تست محلی)

### ۲. کلون کردن مخزن

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### ۳. تنظیم متغیرهای محیطی

در فایل `wrangler.toml` یا بخش داشبورد Cloudflare این مقادیر را ست کنید:

```toml
[vars]
BOT_TOKEN = "توکن ربات تلگرام"
ADMIN_ID = "آی‌دی ادمین تلگرام"
SECRET_TOKEN = "توکن مخفی"
BOT_USER_LANGUAGE = "FA" # یا "EN" برای انگلیسی

[[kv_namespaces]]
binding = "RATE_LIMIT_KV"
id = "شناسه فضای KV"
```

### ۴. ساخت فضای KV

در داشبورد Cloudflare یک فضای ذخیره‌سازی KV با نام دلخواه (مثلاً `RATE_LIMIT_KV`) بسازید و شناسه آن را در `wrangler.toml` قرار دهید.

### ۵. نصب و استقرار

```bash
npm install
npx wrangler deploy
```

### ۶. تنظیم Webhook تلگرام

```bash
curl -X POST https://api.telegram.org/bot<your-bot-token>/setWebhook?url=<your-worker-url>&secret_token=<your-secret-token>
```

## 🗂 ساختار پروژه

```
├── src/
│   └── index.js          # کد اصلی ربات
├── wrangler.toml         # تنظیمات Cloudflare Workers
├── package.json          # وابستگی‌ها و اسکریپت‌ها
└── README.md             # مستندات پروژه
```

## 💬 دستورات ربات

<div dir="ltr" align="center">

| توضیحات | دستور |
|---------|--------|
| پاسخ به یک کاربر خاص | `/reply <user_id> <message>` |
| مسدود کردن کاربر | `/block <user_id>` |
| آزاد کردن کاربر | `/unblock <user_id>` |
| ارسال پیام همگانی | `/broadcast <message>` |
| حذف کاربران غیرفعال | `/check` |

</div>

## 👤 نحوه استفاده

### برای کاربران:

- با ارسال دستور `/start` آغاز کنید.
- پیام متنی یا عکس (با کپشن) ارسال کنید تا به ادمین فوروارد شود.
- اگر محدودیت ارسال اعمال شد، ۶۰ ثانیه صبر کنید.

### برای ادمین:

- با دستورات `/reply`, `/block`, `/unblock`, `/broadcast`, `/check` کار کنید.
- به پیام‌های فوروارد شده کاربران پاسخ دهید (متن، عکس یا فایل).
- برای مسدود/آزادسازی کاربر، دستور را روی پیام فوروارد شده اجرا کنید.

## 🌍 افزودن زبان جدید

- در فایل `index.js` بخش `ALL_TEXTS`، شی جدید مطابق زبان مورد نظر (مثلاً DE برای آلمانی) اضافه کنید:
```js
DE: {
    response: { ... },
    adminMessages: { ... },
    userMessages: { ... },
    templates: { ... },
    errors: { ... }
}
```
- مقدار متغیر محیطی `BOT_USER_LANGUAGE` را به کد زبان جدید (مثلاً `DE`) تغییر دهید.

## 🛠 نکات توسعه

- برای تست محلی از `wrangler dev` استفاده کنید.
- لاگ‌های Cloudflare Workers را برای عیب‌یابی بررسی نمایید.
- نرخ درخواست به API تلگرام را برای عملکرد بهتر مدیریت کنید.

## 🤝 مشارکت

خوشحال می‌شویم در توسعه پروژه همکاری کنید!  
برای مشارکت:
- مخزن را fork کنید
- تغییرات موردنظر را اعمال و تست کنید
- Pull Request ارسال نمایید

## 📄 مجوز

این پروژه تحت مجوز MIT منتشر شده است. (فایل LICENSE را ببینید)

---

</div>


---

# Telegram Support Bot (English)

## Overview

This project is a Telegram Support Bot built with Cloudflare Workers, designed to facilitate communication between users and an admin. The bot forwards user messages (text or photos) to the admin, allows the admin to reply, block/unblock users, broadcast messages, and check user liveness. It supports multiple languages (English and Persian) with easy extensibility for additional languages.

## Features

- **Multilingual Support:** English and Persian (easily extendable)
- **Message Handling:** Forwards user text or photo messages to the admin with user details (name, username, ID)
- **Admin Commands:**  
    - `/reply <user_id> <message>`: Reply to a specific user  
    - `/block <user_id>`: Block a user  
    - `/unblock <user_id>`: Unblock a user  
    - `/broadcast <message>`: Send a message to all active users  
    - `/check`: Remove inactive users  
- **Rate-Limiting:** Users can only send one message per 60 seconds (anti-spam)
- **Security:** Validates requests using a secret token
- **Error Handling:** Robust handling of Telegram API errors with user/admin notifications
- **Storage:** Uses Cloudflare KV for storing user status, interaction, and rate-limiting data

## Quick Start

### 1. Prerequisites

- Cloudflare Workers account
- Telegram bot token (from BotFather)
- Access to Cloudflare KV
- Node.js (optional, for local testing)

### 2. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
```

### 3. Set Environment Variables

Configure the following in `wrangler.toml` or in the Cloudflare dashboard:

```toml
[vars]
BOT_TOKEN = "your-telegram-bot-token"
ADMIN_ID = "your-admin-telegram-id"
SECRET_TOKEN = "your-secret-token"
BOT_USER_LANGUAGE = "EN" # or "FA" for Persian

[[kv_namespaces]]
binding = "RATE_LIMIT_KV"
id = "your-kv-namespace-id"
```

### 4. Create KV Namespace

In your Cloudflare dashboard, create a KV namespace (e.g., `RATE_LIMIT_KV`) and set its ID in `wrangler.toml`.

### 5. Install & Deploy

```bash
npm install
npx wrangler deploy
```

### 6. Set Telegram Webhook

```bash
curl -X POST https://api.telegram.org/bot<your-bot-token>/setWebhook?url=<your-worker-url>&secret_token=<your-secret-token>
```

## Project Structure

```
├── src/
│   └── index.js          # Main bot logic
├── wrangler.toml         # Cloudflare Workers configuration
├── package.json          # Dependencies and scripts
└── README.md             # Documentation
```

## Commands

| Description                 | Command                         |
|-----------------------------|---------------------------------|
| Reply to a specific user    | `/reply <user_id> <message>`    |
| Block a user                | `/block <user_id>`              |
| Unblock a user              | `/unblock <user_id>`            |
| Broadcast to all users      | `/broadcast <message>`          |
| Remove inactive users       | `/check`                        |

## Usage

**For Users:**
- Start with the `/start` command
- Send text or photo messages (with optional captions) to be forwarded to the admin
- Wait 60 seconds between messages if rate-limited

**For Admins:**
- Use `/reply`, `/block`, `/unblock`, `/broadcast`, or `/check` commands
- Reply to forwarded user messages with text, photos, or documents
- Manage users using `/block` or `/unblock` in reply to forwarded messages

## Adding a New Language

- Add a new object to `ALL_TEXTS` in `index.js`:
```js
DE: {
    response: { ... },
    adminMessages: { ... },
    userMessages: { ... },
    templates: { ... },
    errors: { ... }
}
```
- Set the `BOT_USER_LANGUAGE` environment variable to your new language code (e.g., `DE`).

## Development Notes

- Use `wrangler dev` for local testing
- Check Cloudflare Workers logs for debugging
- Manage Telegram API request rates appropriately

## Contributing

We welcome contributions!  
To contribute:
- Fork the repository
- Make your changes and test thoroughly
- Submit a Pull Request

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
