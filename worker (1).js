// ============================================================
// --- ALL TEXT STRINGS ---
// ============================================================
const ALL_TEXTS = {
  EN: {
    response: {
      internalError: 'Internal Server Configuration Error',
      notFound: 'Not Found',
      forbidden: 'Forbidden',
      badRequest: 'Bad Request',
      updateNotHandled: 'Update type not handled',
      invalidMessageStructure: 'Bad Request - Invalid message structure',
      adminCommandProcessed: 'Admin command processed',
      adminPhotoReplyProcessed: 'Admin photo reply processed',
      adminDocumentReplyProcessed: 'Admin document reply processed',
      adminTextReplyProcessed: 'Admin text reply processed',
      adminBroadcastProcessed: 'Admin broadcast command processed',
      adminReplyProcessed: 'Admin reply processed',
      adminActionIgnored: 'Admin action processed (ignored)',
      adminActionProcessedOrIgnored: 'Admin action processed (or ignored)',
      userBlockedResponse: 'User blocked',
      startCommandIgnored: 'Start command ignored',
      unsupportedFormat: 'Unsupported format',
      rateLimited: 'Rate limited',
      userMessageForwarded: 'User message forwarded',
      failedToForwardToAdmin: 'Failed to forward to admin',
      noActionTaken: 'No action taken',
      adminCheckCommandProcessed: 'Admin user check command processed',
    },
    adminMessages: {
      replyInvalidFormat: '❌ Invalid format. Use /reply <user_id> <message>',
      userIsBlockedCantSend: (userId) => `⚠️ User ${userId} is currently blocked. Cannot send message. Use /unblock ${userId} first.`,
      commandUnrecognizedInReply: "⚠️ Command not recognized in this context or failed (check logs?).",
      noUserIdInRepliedMessage: "❌ Couldn't find user ID in the replied message. Reply to the correct forwarded message containing '🆔 ID: ...' or use commands like /reply <id> <msg>, /block <id>, /unblock <id>.",
      broadcastMessageEmpty: '❌ Broadcast message cannot be empty. Use /broadcast <message>',
      broadcastStarting: (msgContent) => `📢 Starting broadcast of: "${msgContent.substring(0, 50)}..."\nYou will be notified upon completion.`,
      replyContextCommandInvalid: "⚠️ Command not recognized or invalid in this reply context. Commands like /reply, /block, /unblock, /broadcast should be used directly or /block, /unblock when replying to a user's specific forwarded message.",
      unknownCommand: (cmd) => `❓Unknown command: ${cmd}. Available commands: /reply, /block, /unblock, /broadcast, /check.`,
      photoSentToUser: (userId) => `✅ Photo sent to ${userId} (in reply).`,
      failedToSendPhotoToUser: (userId) => `❌ Failed to send photo to ${userId}. They might have blocked the bot.`,
      fileSentToUser: (userId) => `✅ File sent to ${userId} (in reply).`,
      failedToSendFileToUser: (userId) => `❌ Failed to send file to ${userId}. They might have blocked the bot.`,
      userNowBlocked: (userId) => `🚫 User ${userId} has been blocked.`,
      userNowUnblocked: (userId) => `✅ User ${userId} has been unblocked.`,
      messageSentToUser: (userId) => `✅ Message sent to ${userId}.`,
      failedToSendMessageToUser: (userId) => `❌ Failed to send message to ${userId}. They might have blocked the bot.`,
      broadcastSummary: (success, blocked, failed) => `📣 Broadcast Complete!\n\n` +
                             `Successfully sent: ${success} users\n` +
                             `Skipped (blocked by admin): ${blocked} users\n` +
                             `Failed (e.g., bot blocked by user): ${failed} users`,
      checkCommandStarting: "🧐 Starting user liveness check. This may take some time. You'll be notified upon completion.",
      checkCommandSummary: (totalChecked, removed, failedToProbe, adminBlockedSkipped) => `✅ User Liveness Check Complete!\n\n` +
                                `Users Probed: ${totalChecked}\n` +
                                `Users Removed (blocked/deleted bot): ${removed}\n` +
                                `Admin Blocked (skipped probe): ${adminBlockedSkipped}\n` +
                                `Failed to Probe (other errors): ${failedToProbe}`,
      probingUserMessage: "🤖 Support bot connection check.",
      adminWelcome: "🤖 Welcome, Admin!\nThis bot is now active and ready to assist users.",
      adminHelpGuide: "Admin Commands Guide:\n" +
                      "`/reply <user_id> <message>` - Reply to a user.\n" +
                      "`/block <user_id>` - Block a user.\n" +
                      "`/unblock <user_id>` - Unblock a user.\n" +
                      "`/broadcast <message>` - Send a message to all active users.\n" +
                      "`/check` - Check for users who blocked/removed the bot and clean them up.\n" +
                      "You can also reply directly to a forwarded user message to send them text, photos, or documents.\n" +
                      "Replying with `/block` or `/unblock` to a forwarded message also works for that specific user."
    },
    userMessages: {
      welcome: "Welcome! Send your message or photo to support.",
      formatNotSupported: '❌ Format not supported. Please send only text messages or photos (optionally with captions).',
      rateLimitedPleaseWait: (secondsLeft) => `⏱️ Please wait ${secondsLeft} more seconds before sending another message.`,
      messageSentConfirmation: '📨 Your message has been sent to support.',
      messageSendError: '⚠️ There was an error sending your message to support. Please try again later.',
      youAreBlocked: `You have been blocked from contacting support.`,
      youAreUnblocked: `You have been unblocked and can contact support again.`,
    },
    templates: {
      adminReplyPhotoCaptionPrefix: "📩 Support Photo:\n",
      adminReplyFileCaptionPrefix: "📩 Support File:\n",
      adminReplyTextPrefix: "📩 Support:\n\n",
      userForwardPrefix: (userInfo, username, fromId) => `👤 From: ${userInfo} (${username})\n🆔 ID: ${fromId}\n\n💬 `,
      broadcastMessagePrefix: "📢 Broadcast from Support:\n\n",
    },
    errors: {
      telegramApiRequestFailedPrefix: "Telegram API request failed: ",
    }
  },
  FA: {
    response: { 
      internalError: 'خطای داخلی پیکربندی سرور',
      notFound: 'یافت نشد',
      forbidden: ' ممنوع',
      badRequest: 'درخواست نامعتبر',
      updateNotHandled: 'نوع بروزرسانی رسیدگی نشد',
      invalidMessageStructure: 'درخواست نامعتبر - ساختار پیام نامعتبر است',
      adminCommandProcessed: 'دستور مدیر پردازش شد',
      adminPhotoReplyProcessed: 'پاسخ عکس مدیر پردازش شد',
      adminDocumentReplyProcessed: 'پاسخ فایل مدیر پردازش شد',
      adminTextReplyProcessed: 'پاسخ متنی مدیر پردازش شد',
      adminBroadcastProcessed: 'دستور انتشار پیام مدیر پردازش شد',
      adminReplyProcessed: 'پاسخ مدیر پردازش شد',
      adminActionIgnored: 'اقدام مدیر پردازش شد (نادیده گرفته شد)',
      adminActionProcessedOrIgnored: 'اقدام مدیر پردازش شد (یا نادیده گرفته شد)',
      userBlockedResponse: 'کاربر مسدود شده است',
      startCommandIgnored: 'دستور شروع نادیده گرفته شد',
      unsupportedFormat: 'فرمت پشتیبانی نمی‌شود',
      rateLimited: 'محدودیت تعداد درخواست',
      userMessageForwarded: 'پیام کاربر ارسال شد',
      failedToForwardToAdmin: 'ارسال به مدیر ناموفق بود',
      noActionTaken: 'هیچ اقدامی انجام نشد',
      adminCheckCommandProcessed: 'دستور بررسی کاربران توسط مدیر پردازش شد',
    },
    adminMessages: {
      replyInvalidFormat: '❌ فرمت نامعتبر. از /reply <شناسه_کاربر> <پیام> استفاده کنید',
      userIsBlockedCantSend: (userId) => `⚠️ کاربر ${userId} در حال حاضر مسدود است. پیام ارسال نشد. ابتدا از دستور /unblock ${userId} برای رفع انسداد استفاده کنید.`,
      commandUnrecognizedInReply: "⚠️ دستور در این زمینه پاسخ شناخته نشد یا ناموفق بود (لاگ‌ها را بررسی کنید؟).",
      noUserIdInRepliedMessage: "❌ شناسه کاربر در پیام پاسخ داده شده یافت نشد. به پیام صحیح ارسال شده که حاوی '🆔 ID: ...' است پاسخ دهید یا از دستوراتی مانند /reply <id> <msg>، /block <id>، /unblock <id> استفاده کنید.",
      broadcastMessageEmpty: '❌ پیام همگانی نمی‌تواند خالی باشد. از /broadcast <پیام> استفاده کنید',
      broadcastStarting: (msgContent) => `📢 شروع ارسال پیام همگانی: "${msgContent.substring(0, 50)}..."\nپس از اتمام به شما اطلاع داده خواهد شد.`,
      replyContextCommandInvalid: "⚠️ دستور در این زمینه پاسخ، شناخته نشده یا نامعتبر است. دستوراتی مانند /reply، /block، /unblock، /broadcast باید مستقیماً یا /block، /unblock هنگام پاسخ به پیام خاص ارسال شده توسط کاربر استفاده شوند.",
      unknownCommand: (cmd) => `❓ دستور ناشناخته: ${cmd}. دستورات موجود: /reply, /block, /unblock, /broadcast, /check.`,
      photoSentToUser: (userId) => `✅ عکس به کاربر ${userId} ارسال شد (در پاسخ).`,
      failedToSendPhotoToUser: (userId) => `❌ ارسال عکس به کاربر ${userId} ناموفق بود. ممکن است ربات را مسدود کرده باشند.`,
      fileSentToUser: (userId) => `✅ فایل به کاربر ${userId} ارسال شد (در پاسخ).`,
      failedToSendFileToUser: (userId) => `❌ ارسال فایل به کاربر ${userId} ناموفق بود. ممکن است ربات را مسدود کرده باشند.`,
      userNowBlocked: (userId) => `🚫 کاربر ${userId} مسدود شد.`,
      userNowUnblocked: (userId) => `✅ کاربر ${userId} از حالت انسداد خارج شد.`,
      messageSentToUser: (userId) => `✅ پیام به کاربر ${userId} ارسال شد.`,
      failedToSendMessageToUser: (userId) => `❌ ارسال پیام به کاربر ${userId} ناموفق بود. ممکن است ربات را مسدود کرده باشند.`,
      broadcastSummary: (success, blocked, failed) => `📣 ارسال همگانی کامل شد!\n\n` +
                             `ارسال موفق: ${success} کاربر\n` +
                             `نادیده گرفته شده (مسدود شده توسط مدیر): ${blocked} کاربر\n` +
                             `ناموفق (ربات توسط کاربر مسدود شده): ${failed} کاربر`,
      checkCommandStarting: "🧐 شروع بررسی وضعیت کاربران. این عملیات ممکن است زمان‌بر باشد. پس از اتمام به شما اطلاع داده خواهد شد.",
      checkCommandSummary: (totalChecked, removed, failedToProbe, adminBlockedSkipped) => `✅ بررسی وضعیت کاربران کامل شد!\n\n` +
                                `کاربران بررسی شده: ${totalChecked}\n` +
                                `کاربران حذف شده (ربات را مسدود یا حذف کرده‌اند): ${removed}\n` +
                                `مسدود شده توسط مدیر (بررسی نشده): ${adminBlockedSkipped}\n` +
                                `خطا در بررسی (سایر خطاها): ${failedToProbe}`,
      probingUserMessage: "🤖 بررسی اتصال ربات پشتیبانی.",
      adminWelcome: "🤖 خوش آمدید ادمین!\nاین ربات اکنون فعال و آماده کمک به کاربران است.",
      adminHelpGuide: "راهنمای دستورات ادمین:\n" +
                      "`/reply <شناسه_کاربر> <پیام>` - پاسخ به کاربر.\n" +
                      "`/block <شناسه_کاربر>` - مسدود کردن کاربر.\n" +
                      "`/unblock <شناسه_کاربر>` - رفع انسداد کاربر.\n" +
                      "`/broadcast <پیام>` - ارسال پیام به تمام کاربران فعال.\n" +
                      "`/check` - بررسی کاربرانی که ربات را مسدود/حذف کرده‌اند و پاکسازی آن‌ها.\n" +
                      "همچنین می‌توانید مستقیماً به پیام ارسال شده توسط کاربر پاسخ دهید تا برایشان متن، عکس یا فایل ارسال کنید.\n" +
                      "پاسخ با `/block` یا `/unblock` به پیام ارسال شده توسط کاربر نیز برای آن کاربر خاص کار می‌کند."
    },
    userMessages: {
      welcome: "خوش آمدید! پیام یا عکس خود را برای پشتیبانی ارسال کنید.",
      formatNotSupported: '❌ فرمت پشتیبانی نمی‌شود. لطفاً فقط پیام‌های متنی یا عکس‌ها (اختیاری با کپشن) ارسال کنید.',
      rateLimitedPleaseWait: (secondsLeft) => `⏱️ لطفاً ${secondsLeft} ثانیه دیگر قبل از ارسال پیام بعدی صبر کنید.`,
      messageSentConfirmation: '📨 پیام شما برای پشتیبانی ارسال شد.',
      messageSendError: '⚠️ خطایی در ارسال پیام شما به پشتیبانی رخ داد. لطفاً بعداً دوباره تلاش کنید.',
      youAreBlocked: `شما از تماس با پشتیبانی مسدود شده‌اید.`,
      youAreUnblocked: `شما از حالت انسداد خارج شده‌اید و می‌توانید دوباره با پشتیبانی تماس بگیرید.`,
    },
    templates: {
      adminReplyPhotoCaptionPrefix: "📩 عکس از طرف پشتیبانی:\n",
      adminReplyFileCaptionPrefix: "📩 فایل از طرف پشتیبانی:\n",
      adminReplyTextPrefix: "📩 پشتیبانی:\n\n",
      userForwardPrefix: (userInfo, username, fromId) => `👤 از طرف: ${userInfo} (${username})\n🆔 شناسه: ${fromId}\n\n💬 `,
      broadcastMessagePrefix: "📢 پیام همگانی از طرف پشتیبانی:\n\n",
    },
    errors: {
      telegramApiRequestFailedPrefix: "درخواست API تلگرام ناموفق بود: ",
    }
  }
  // Add your language here: DE: { ... }, ES: { ... }💖
};

/**
 * Retrieves the localized text object.
 */
function getLocalizedTexts(langCode, defaultLangCode = 'EN') {
  const requestedLang = langCode ? langCode.toUpperCase() : defaultLangCode;
  if (ALL_TEXTS[requestedLang]) {
    return ALL_TEXTS[requestedLang];
  }
  console.warn(`Language pack for "${requestedLang}" not found. Falling back to "${defaultLangCode}".`);
  return ALL_TEXTS[defaultLangCode];
}


export default {
  async fetch(request, env, ctx) {
    if (!env.BOT_TOKEN || !env.ADMIN_ID || !env.RATE_LIMIT_KV || !env.SECRET_TOKEN) {
      console.error('CRITICAL: Missing environment variables: BOT_TOKEN, ADMIN_ID, RATE_LIMIT_KV, or SECRET_TOKEN.');
      return new Response(ALL_TEXTS.EN.response.internalError, { status: 500 });
    }
    const languageCode = env.BOT_USER_LANGUAGE || 'EN';
    const TEXTS = getLocalizedTexts(languageCode);

    const botToken = env.BOT_TOKEN;
    const adminId = env.ADMIN_ID.toString();
    const kv = env.RATE_LIMIT_KV;
    const secretToken = env.SECRET_TOKEN;
    const apiUrl = `https://api.telegram.org/bot${botToken}`;
    const MAX_CAPTION_LENGTH = 1024;
    const USER_INTERACTED_PREFIX = "user_interacted:";
    const BLOCKED_USER_PREFIX = "blocked:";
    const RATE_LIMIT_PREFIX = "ratelimit:";
    const BROADCAST_MESSAGE_DELAY_MS = 200;
    const USER_CHECK_DELAY_MS = 300;

    if (request.method !== 'POST') {
      return new Response(TEXTS.response.notFound, { status: 404 });
    }
    const requestSecretToken = request.headers.get('X-Telegram-Bot-Api-Secret-Token');
    if (requestSecretToken !== secretToken) {
      return new Response(TEXTS.response.forbidden, { status: 403 });
    }
    let update;
    try {
      update = await request.json();
    } catch (err) {
      return new Response(TEXTS.response.badRequest, { status: 400 });
    }
    const message = update.message || update.edited_message;
    if (!message) {
      return new Response(TEXTS.response.updateNotHandled, { status: 200 });
    }
    if (!message.from || !message.from.id || !message.chat || !message.chat.id) {
         return new Response(TEXTS.response.invalidMessageStructure, { status: 400 });
    }
    const fromId = message.from.id.toString();
    const chatId = message.chat.id;


    // ============================================================
    // --- Admin Logic ---
    // ============================================================
    if (fromId === adminId) {
      const text = message.text || '';

      if (text.trim() === '/start') {
        await sendMessage(apiUrl, adminId, TEXTS.adminMessages.adminWelcome, TEXTS);
        await sendMessage(apiUrl, adminId, TEXTS.adminMessages.adminHelpGuide, TEXTS);
        console.log(`Admin ${adminId} used /start command. Sent welcome and help guide.`);
        return new Response(TEXTS.response.adminCommandProcessed, { status: 200 });
      }
      
      if (text.startsWith('/reply ')) {
        const match = text.match(/^\/reply (\d+)\s+([\s\S]+)/);
        if (!match) {
          await sendMessage(apiUrl, adminId, TEXTS.adminMessages.replyInvalidFormat, TEXTS);
        } else {
          const targetUserId = match[1];
          const replyMessage = match[2];
          await sendAdminReply(apiUrl, kv, adminId, targetUserId, replyMessage, BLOCKED_USER_PREFIX, TEXTS);
        }
        return new Response(TEXTS.response.adminCommandProcessed, { status: 200 });
      }

      const blockUnblockMatch = text.match(/^\/(block|unblock)\s+(\d+)$/);
      if (blockUnblockMatch) {
        const action = blockUnblockMatch[1];
        const targetUserId = blockUnblockMatch[2];
        await handleBlockUnblock(apiUrl, kv, adminId, targetUserId, action, BLOCKED_USER_PREFIX, TEXTS);
        return new Response(TEXTS.response.adminCommandProcessed, { status: 200 });
      }

      if (text.startsWith('/broadcast ')) {
        const broadcastMessageContent = text.substring('/broadcast '.length).trim();
        if (!broadcastMessageContent) {
          await sendMessage(apiUrl, adminId, TEXTS.adminMessages.broadcastMessageEmpty, TEXTS);
        } else {
          await sendMessage(apiUrl, adminId, TEXTS.adminMessages.broadcastStarting(broadcastMessageContent), TEXTS);
          ctx.waitUntil(
            handleBroadcast(apiUrl, kv, adminId, broadcastMessageContent, USER_INTERACTED_PREFIX, BLOCKED_USER_PREFIX, BROADCAST_MESSAGE_DELAY_MS, TEXTS)
          );
        }
        return new Response(TEXTS.response.adminBroadcastProcessed, { status: 200 });
      }

      if (text.trim() === '/check') {
        await sendMessage(apiUrl, adminId, TEXTS.adminMessages.checkCommandStarting, TEXTS);
        ctx.waitUntil(
          handleUserLivenessCheck(apiUrl, kv, adminId, USER_INTERACTED_PREFIX, BLOCKED_USER_PREFIX, USER_CHECK_DELAY_MS, TEXTS)
        );
        return new Response(TEXTS.response.adminCheckCommandProcessed, { status: 200 });
      }

      if (message.reply_to_message) {
        const repliedMessage = message.reply_to_message;
        const messageContent = repliedMessage.text || repliedMessage.caption || '';
        const idMatch = messageContent.match(/🆔 (?:ID|شناسه): (\d+)/);

        if (idMatch) {
          const targetUserId = idMatch[1];
          const blockKey = `${BLOCKED_USER_PREFIX}${targetUserId}`;
          const isBlocked = await kv.get(blockKey);

          if (isBlocked && !text.startsWith('/unblock')) {
             await sendMessage(apiUrl, adminId, TEXTS.adminMessages.userIsBlockedCantSend(targetUserId), TEXTS);
             return new Response(TEXTS.response.adminCommandProcessed, { status: 200 });
          }

          if (text.trim() === '/block') {
             await handleBlockUnblock(apiUrl, kv, adminId, targetUserId, 'block', BLOCKED_USER_PREFIX, TEXTS);
             return new Response(TEXTS.response.adminCommandProcessed, { status: 200 });
          }
          else if (text.trim() === '/unblock') {
            await handleBlockUnblock(apiUrl, kv, adminId, targetUserId, 'unblock', BLOCKED_USER_PREFIX, TEXTS);
            return new Response(TEXTS.response.adminCommandProcessed, { status: 200 });
          }
          else if (message.photo && Array.isArray(message.photo) && message.photo.length > 0) {
            const photoFileId = message.photo[message.photo.length - 1].file_id;
            const caption = message.caption || '';
            const finalCaption = `${TEXTS.templates.adminReplyPhotoCaptionPrefix}${caption}`.trim().substring(0, MAX_CAPTION_LENGTH);
            try {
                await sendPhotoWithCaption(apiUrl, targetUserId, photoFileId, finalCaption, TEXTS);
                await sendMessage(apiUrl, adminId, TEXTS.adminMessages.photoSentToUser(targetUserId), TEXTS);
            } catch (error) {
                console.error(`Failed to send photo reply to user ${targetUserId}:`, error);
                await sendMessage(apiUrl, adminId, TEXTS.adminMessages.failedToSendPhotoToUser(targetUserId), TEXTS);
            }
             return new Response(TEXTS.response.adminPhotoReplyProcessed, { status: 200 });
          }
           else if (message.document) {
               const documentFileId = message.document.file_id;
               const caption = message.caption || '';
               const finalCaption = `${TEXTS.templates.adminReplyFileCaptionPrefix}${caption}`.trim().substring(0, MAX_CAPTION_LENGTH);
               try {
                   await sendDocumentWithCaption(apiUrl, targetUserId, documentFileId, finalCaption, TEXTS);
                   await sendMessage(apiUrl, adminId, TEXTS.adminMessages.fileSentToUser(targetUserId), TEXTS);
               } catch (error) {
                   console.error(`Failed to send document reply to user ${targetUserId}:`, error);
                   await sendMessage(apiUrl, adminId, TEXTS.adminMessages.failedToSendFileToUser(targetUserId), TEXTS);
               }
               return new Response(TEXTS.response.adminDocumentReplyProcessed, { status: 200 });
           }
          else if (message.text && !text.startsWith('/')) {
            await sendAdminReply(apiUrl, kv, adminId, targetUserId, text, BLOCKED_USER_PREFIX, TEXTS);
            return new Response(TEXTS.response.adminTextReplyProcessed, { status: 200 });
          }
          else {
             if (text.startsWith('/')) {
                await sendMessage(apiUrl, adminId, TEXTS.adminMessages.replyContextCommandInvalid, TEXTS);
             }
             console.log("Admin reply ignored (unhandled type or context for specific user reply)");
          }
        } else {
           if (text.startsWith('/block') || text.startsWith('/unblock') || text.startsWith('/reply') || message.photo || message.document) {
                await sendMessage(apiUrl, adminId, TEXTS.adminMessages.noUserIdInRepliedMessage, TEXTS);
           }
           console.log("Admin reply ignored (no user ID found in replied message to target specific user)");
        }
         return new Response(TEXTS.response.adminReplyProcessed, { status: 200 });
      }


      if (text.startsWith('/')) {
        await sendMessage(apiUrl, adminId, TEXTS.adminMessages.unknownCommand(text.split(' ')[0]), TEXTS);
      } else {
        console.log("Ignoring non-command/non-reply message from admin.");
      }
      return new Response(TEXTS.response.adminActionProcessedOrIgnored, { status: 200 });
    }

    // ============================================================
    // --- User Logic ---
    // ============================================================
    if (fromId !== adminId) {
       const blockKey = `${BLOCKED_USER_PREFIX}${fromId}`;
       const isBlocked = await kv.get(blockKey);
       if (isBlocked) {
         console.log(`Blocked user ${fromId} message dropped.`);
         return new Response(TEXTS.response.userBlockedResponse, { status: 200 });
       }

       const userInteractedKey = `${USER_INTERACTED_PREFIX}${fromId}`;
       ctx.waitUntil(kv.get(userInteractedKey).then(exists => {
            if (!exists) {
                kv.put(userInteractedKey, 'true');
                console.log(`Registered user ${fromId} for future broadcasts.`);
            }
       }));

       const isText = message.text && message.text.trim() !== '';
       const isPhoto = message.photo && Array.isArray(message.photo) && message.photo.length > 0;

       if (message.text && message.text.trim() === '/start') {
          console.log(`Ignored /start command from ${fromId}`);
          try { await sendMessage(apiUrl, chatId, TEXTS.userMessages.welcome, TEXTS); } catch {}
          return new Response(TEXTS.response.startCommandIgnored, { status: 200 });
       }

       if (message.text === TEXTS.adminMessages.probingUserMessage) {
            console.log(`User ${fromId} sent probing message, ignoring further processing for forwarding.`);
            return new Response("OK", { status: 200 });
       }


       if (!isText && !isPhoto) {
           console.log(`Ignored unsupported format message from ${fromId}. Message keys: ${Object.keys(message).join(', ')}`);
           try {
               await sendMessage(apiUrl, chatId, TEXTS.userMessages.formatNotSupported, TEXTS);
           } catch (error) {
               console.error(`Failed to send format error message to ${chatId}:`, error);
           }
           return new Response(TEXTS.response.unsupportedFormat, { status: 200 });
       }

       const rateLimitKey = `${RATE_LIMIT_PREFIX}${fromId}`;
       const lastMessageTime = await kv.get(rateLimitKey);
       const now = Date.now();
       const rateLimitSeconds = 60;

       if (lastMessageTime) {
         const timeElapsed = now - parseInt(lastMessageTime);
         if (timeElapsed < rateLimitSeconds * 1000) {
           const secondsLeft = Math.ceil((rateLimitSeconds * 1000 - timeElapsed) / 1000);
           try {
              await sendMessage(apiUrl, chatId, TEXTS.userMessages.rateLimitedPleaseWait(secondsLeft), TEXTS);
           } catch (error) {
                console.error(`Failed to send rate limit message to ${chatId}:`, error);
           }
           console.log(`Rate limited user ${fromId}`);
           return new Response(TEXTS.response.rateLimited, { status: 200 });
         }
       }
       ctx.waitUntil(kv.put(rateLimitKey, now.toString(), { expirationTtl: rateLimitSeconds }));

      const userInfo = `${message.from.first_name || ''} ${message.from.last_name || ''}`.trim() || 'No name';
      const username = message.from.username ? `@${message.from.username}` : 'No username';
      const messagePrefix = TEXTS.templates.userForwardPrefix(userInfo, username, fromId);

      let userMessageContent = '';
      if (isText) {
        userMessageContent = message.text;
      } else if (isPhoto) {
        userMessageContent = message.caption || '';
      }

      const fullForwardedContent = (messagePrefix + userMessageContent).substring(0, MAX_CAPTION_LENGTH);

       try {
           if (isText) {
                await sendMessage(apiUrl, adminId, fullForwardedContent, TEXTS);
           } else if (isPhoto) {
                const photoFileId = message.photo[message.photo.length - 1].file_id;
                await sendPhotoWithCaption(apiUrl, adminId, photoFileId, fullForwardedContent, TEXTS);
           }

           try {
               await sendMessage(apiUrl, chatId, TEXTS.userMessages.messageSentConfirmation, TEXTS);
           } catch (userNotifyError) {
               console.error(`Failed to send confirmation message to user ${chatId}:`, userNotifyError);
           }
           console.log(`Successfully forwarded message from ${fromId} to admin ${adminId}`);
           return new Response(TEXTS.response.userMessageForwarded, { status: 200 });

       } catch (adminForwardError) {
           console.error(`CRITICAL: Failed to forward message from ${fromId} to admin ${adminId}:`, adminForwardError);
           try {
               await sendMessage(apiUrl, chatId, TEXTS.userMessages.messageSendError, TEXTS);
           } catch (userNotifyError) {
               console.error(`Failed to send failure notification to user ${chatId}:`, userNotifyError);
           }
           return new Response(TEXTS.response.failedToForwardToAdmin, { status: 200 });
       }
    }

    console.warn("Reached end of fetch handler without specific action for update:", JSON.stringify(update));
    return new Response(TEXTS.response.noActionTaken, { status: 200 });
  }
};

// ============================================================
// --- Helper Functions ---
// ============================================================

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sendMessage(apiUrl, chatId, text, TEXTS) {
    if (!chatId || typeof text !== 'string') {
        console.error("sendMessage called with invalid chatId or non-string text:", chatId, text);
        return;
    }
    if (text.trim() === '') {
         console.warn("sendMessage called with empty text for chatId:", chatId);
         return;
    }

    const payload = { chat_id: chatId, text: text, parse_mode: "Markdown" };
    // console.log(`Sending message to ${chatId}: "${text.substring(0, 50)}..."`);
    const response = await fetch(`${apiUrl}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    if (!response.ok) {
        const errorBody = await response.text();
        const errorMessage = `Telegram API error sending message to ${chatId}: ${response.status} ${response.statusText} - ${errorBody}`;
        console.error(errorMessage);
        if (errorBody.includes("bot was blocked by the user") || errorBody.includes("chat not found") || errorBody.includes("user is deactivated")) {
            throw new Error(`USER_UNREACHABLE:${errorBody}`);
        }
        throw new Error(`${TEXTS.errors.telegramApiRequestFailedPrefix}${response.status} - ${errorBody}`);
    }
    // console.log(`Successfully sent message to ${chatId}`);
}
async function sendPhotoWithCaption(apiUrl, chatId, photoFileId, caption, TEXTS) {
   if (!chatId || !photoFileId) {
        console.error("sendPhotoWithCaption called with invalid chatId or photoFileId:", chatId, photoFileId);
        return;
    }
    const payload = { chat_id: chatId, photo: photoFileId };
    if (caption && typeof caption === 'string' && caption.trim() !== '') {
        payload.caption = caption.substring(0, 1024);
    }
    const response = await fetch(`${apiUrl}/sendPhoto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Telegram API error sending photo to ${chatId}: ${response.status} ${response.statusText} - ${errorBody}`);
        throw new Error(`${TEXTS.errors.telegramApiRequestFailedPrefix}${response.status} - ${errorBody}`);
    }
}
async function sendDocumentWithCaption(apiUrl, chatId, documentFileId, caption, TEXTS) {
   if (!chatId || !documentFileId) {
        console.error("sendDocumentWithCaption called with invalid chatId or documentFileId:", chatId, documentFileId);
        return;
    }
    const payload = { chat_id: chatId, document: documentFileId };
     if (caption && typeof caption === 'string' && caption.trim() !== '') {
        payload.caption = caption.substring(0, 1024);
    }
    const response = await fetch(`${apiUrl}/sendDocument`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorBody = await response.text();
        console.error(`Telegram API error sending document to ${chatId}: ${response.status} ${response.statusText} - ${errorBody}`);
        throw new Error(`${TEXTS.errors.telegramApiRequestFailedPrefix}${response.status} - ${errorBody}`);
    }
}
async function handleBlockUnblock(apiUrl, kv, adminId, targetUserId, action, blockedUserPrefix, TEXTS) {
    const blockKey = `${blockedUserPrefix}${targetUserId}`;
    if (action === 'block') {
        await kv.put(blockKey, 'true', { expirationTtl: 31536000 }); // 1 year 🤣😉
        console.log(`Admin ${adminId} blocked user ${targetUserId}`);
        await sendMessage(apiUrl, adminId, TEXTS.adminMessages.userNowBlocked(targetUserId), TEXTS);
        try { await sendMessage(apiUrl, targetUserId, TEXTS.userMessages.youAreBlocked, TEXTS); }
        catch (e) { console.warn(`Could not notify user ${targetUserId} about block (they may have blocked the bot).`) }
    } else { // unblock 😑
        await kv.delete(blockKey);
        console.log(`Admin ${adminId} unblocked user ${targetUserId}`);
        await sendMessage(apiUrl, adminId, TEXTS.adminMessages.userNowUnblocked(targetUserId), TEXTS);
        try {
             await sendMessage(apiUrl, targetUserId, TEXTS.userMessages.youAreUnblocked, TEXTS);
        } catch (e) {
            console.warn(`Could not notify user ${targetUserId} about unblock (they may have blocked the bot).`);
        }
    }
}
async function sendAdminReply(apiUrl, kv, adminId, targetUserId, text, blockedUserPrefix, TEXTS) {
     const isBlocked = await kv.get(`${blockedUserPrefix}${targetUserId}`);
     if (isBlocked) {
       await sendMessage(apiUrl, adminId, TEXTS.adminMessages.userIsBlockedCantSend(targetUserId), TEXTS);
       return;
     }
     try {
       await sendMessage(apiUrl, targetUserId, `${TEXTS.templates.adminReplyTextPrefix}${text}`, TEXTS);
       await sendMessage(apiUrl, adminId, TEXTS.adminMessages.messageSentToUser(targetUserId), TEXTS);
     } catch (error) {
       console.error(`Failed to send text reply message to user ${targetUserId}:`, error);
       if (error.message && error.message.startsWith('USER_UNREACHABLE')) {
           await sendMessage(apiUrl, adminId, TEXTS.adminMessages.failedToSendMessageToUser(targetUserId) + " (User may have blocked the bot)", TEXTS);
       } else {
           await sendMessage(apiUrl, adminId, TEXTS.adminMessages.failedToSendMessageToUser(targetUserId), TEXTS);
       }
     }
}
async function handleBroadcast(apiUrl, kv, adminId, messageText, userInteractedPrefix, blockedUserPrefix, broadcastMessageDelayMs, TEXTS) {
    let successCount = 0;
    let failureCount = 0;
    let blockedCount = 0; // users blocked by admi
    let unreachableDuringBroadcastCount = 0; // users who blocked bot during broadcast
    const usersToBroadcast = [];

    let cursor = undefined;
    do {
        const listResult = await kv.list({ prefix: userInteractedPrefix, cursor: cursor, limit: 1000 });
        for (const key of listResult.keys) {
            const userId = key.name.substring(userInteractedPrefix.length);
            if (userId && userId !== adminId) {
                usersToBroadcast.push(userId);
            }
        }
        cursor = listResult.list_complete ? undefined : listResult.cursor;
    } while (cursor);

    console.log(`Found ${usersToBroadcast.length} potential users for broadcast.`);
    const broadcastMessageContent = `${TEXTS.templates.broadcastMessagePrefix}${messageText}`;

    for (const userId of usersToBroadcast) {
        try {
            const isUserAdminBlocked = await kv.get(`${blockedUserPrefix}${userId}`);
            if (isUserAdminBlocked) {
                blockedCount++;
                console.log(`Broadcast: User ${userId} is admin-blocked, skipping.`);
                continue;
            }

            await sendMessage(apiUrl, userId, broadcastMessageContent, TEXTS);
            successCount++;
            // console.log(`Broadcast: Successfully sent message to user ${userId}`);
        } catch (error) {
            if (error.message && error.message.startsWith('USER_UNREACHABLE')) {
                unreachableDuringBroadcastCount++;
                console.warn(`Broadcast: User ${userId} is unreachable (blocked bot): ${error.message}`);
                // optionally remove them from user_interacted list here if desired during broadcast failures
                // await kv.delete(`${userInteractedPrefix}${userId}`);
            } else {
                failureCount++;
                console.error(`Broadcast: Failed to send message to user ${userId}:`, error.message);
            }
        }
        await delay(broadcastMessageDelayMs);
    }

    const summaryText = TEXTS.adminMessages.broadcastSummary(successCount, blockedCount, unreachableDuringBroadcastCount, failureCount);


    try {
        await sendMessage(apiUrl, adminId, summaryText, TEXTS);
    } catch (error) {
        console.error("Failed to send broadcast summary to admin:", error);
    }
    console.log(`Broadcast finished. Success: ${successCount}, Admin Blocked: ${blockedCount}, Unreachable: ${unreachableDuringBroadcastCount}, Failed: ${failureCount}`);
}

/**
 * Handles checking user liveness and removing inactive ones.
 */
async function handleUserLivenessCheck(apiUrl, kv, adminId, userInteractedPrefix, blockedUserPrefix, userCheckDelayMs, TEXTS) {
    let totalProbed = 0;
    let removedCount = 0;
    let failedToProbeCount = 0;
    let adminBlockedSkippedCount = 0;
    const usersToCheck = [];

    let cursor = undefined;
    do {
        const listResult = await kv.list({ prefix: userInteractedPrefix, cursor: cursor, limit: 1000 });
        for (const key of listResult.keys) {
            const userId = key.name.substring(userInteractedPrefix.length);
            if (userId && userId !== adminId) {
                usersToCheck.push(userId);
            }
        }
        cursor = listResult.list_complete ? undefined : listResult.cursor;
    } while (cursor);

    console.log(`[UserCheck] Found ${usersToCheck.length} users to check for liveness.`);
    const probingMessage = TEXTS.adminMessages.probingUserMessage;

    for (const userId of usersToCheck) {
        try {
            const isUserAdminBlocked = await kv.get(`${blockedUserPrefix}${userId}`);
            if (isUserAdminBlocked) {
                adminBlockedSkippedCount++;
                console.log(`[UserCheck] User ${userId} is admin-blocked, skipping probe.`);
                continue;
            }

            totalProbed++;
            console.log(`[UserCheck] Probing user ${userId}...`);
            await sendMessage(apiUrl, userId, probingMessage, TEXTS);
        } catch (error) {
            if (error.message && error.message.startsWith('USER_UNREACHABLE')) {
                console.log(`[UserCheck] User ${userId} is unreachable. Removing from KV. Reason: ${error.message}`);
                await kv.delete(`${userInteractedPrefix}${userId}`);
                removedCount++;
            } else {
                failedToProbeCount++;
                console.error(`[UserCheck] Failed to probe user ${userId} (will not remove):`, error.message);
            }
        }
        await delay(userCheckDelayMs); // Be respectful to Telegram API😎
    }

    const summaryMessage = TEXTS.adminMessages.checkCommandSummary(totalProbed, removedCount, failedToProbeCount, adminBlockedSkippedCount);
    try {
        await sendMessage(apiUrl, adminId, summaryMessage, TEXTS);
    } catch (e) {
        console.error("[UserCheck] Failed to send liveness check summary to admin:", e);
    }
    console.log(`[UserCheck] Finished. Probed: ${totalProbed}, Removed: ${removedCount}, FailedToProbe: ${failedToProbeCount}, AdminBlockedSkipped: ${adminBlockedSkippedCount}`);
}
