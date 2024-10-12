/*Wagwan bitch 🌚 
search for 2349078100392 and replace with
your phone number
*/

require("./config");
const messageLogs = {};
const notifiedSpammers = new Set();
global.antispam = true;
module.exports = async (_0x24a7ff, _0x3c7dad) => {
  try {
    if (!_0x3c7dad || !_0x3c7dad.key) {
      throw new Error("Message or message key is undefined");
    }
    const _0x34bbb2 = _0x3c7dad.key.remoteJid;
    const _0x14162b = _0x3c7dad.participant || _0x34bbb2;
    if (!global.antispam) {
      return;
    }
    console.log("Demon Antibug is active.");
    if (_0x14162b === "2347041039367@s.whatsapp.net" || _0x3c7dad.key.fromMe) {
      return;
    }
    if (!_0x34bbb2.endsWith("@s.whatsapp.net")) {
      return;
    }
    if (!messageLogs[_0x14162b]) {
      messageLogs[_0x14162b] = [];
    }
    const _0x15fa20 = Date.now();
    messageLogs[_0x14162b].push(_0x15fa20);
    messageLogs[_0x14162b] = messageLogs[_0x14162b].filter(_0x42790d => _0x15fa20 - _0x42790d < 0x7d0);
    if (messageLogs[_0x14162b].length > 0x5) {
      await _0x24a7ff.updateBlockStatus(_0x34bbb2, 'block');
      console.log("Blocking spammer: " + _0x34bbb2);
      if (!notifiedSpammers.has(_0x14162b)) {
        await _0x24a7ff.sendMessage("2347041039367@s.whatsapp.net", {
          'text': "🚨 *Spam Alert* 🚨\n\n*Spammer's Number*: " + _0x14162b + "\n*Chat JID*: " + _0x34bbb2 + "\n\nThey were blocked due to excessive spamming in your DM."
        });
        console.log("Notification sent to owner: 2347041039367@s.whatsapp.net");
        notifiedSpammers.add(_0x14162b);
      }
      await _0x24a7ff.chatModify({
        'clear': true
      }, _0x34bbb2);
      console.log("Spam detected from: " + _0x14162b + ". User has been blocked.");
      return;
    }
  } catch (_0x38431a) {
    console.error("Error in antispam function: " + _0x38431a.message);
  }
};
function isDirectMessage(_0x41e062) {
  return _0x41e062.endsWith("@s.whatsapp.net");
}
function getMessageBody(_0x3e60fa) {
  if (!_0x3e60fa || !_0x3e60fa.mtype) {
    return '';
  }
  switch (_0x3e60fa.mtype) {
    case "conversation":
      return _0x3e60fa.message.conversation || '';
    case 'extendedTextMessage':
      return _0x3e60fa.message.extendedTextMessage.text || '';
    case "imageMessage":
      return _0x3e60fa.message.imageMessage.caption || "[Image]";
    case "videoMessage":
      return _0x3e60fa.message.videoMessage.caption || "[Video]";
    case 'documentMessage':
      return '[Document]';
    case "audioMessage":
      return '[Audio]';
    case "viewOnceMessage":
      return "[View Once Media]";
    case "stickerMessage":
      return '[Sticker]';
    case 'call':
      return "[Call]";
    case "interactiveResponseMessage":
      return "[Interactive Message]";
    case 'buttonsResponseMessage':
      return "[Button Response]";
    case "listResponseMessage":
      return "[List Response]";
    case "templateButtonReplyMessage":
      return "[Template Button Reply]";
    default:
      return "[Unknown Message Type]";
  }
}
async function toggleAntispam(_0x2cdd4a, _0x20c3a4) {
  global.antispam = !global.antispam;
  const _0x468ecd = global.antispam ? "enabled" : 'disabled';
  await _0x2cdd4a.sendMessage(_0x20c3a4, {
    'text': "Anti-spam has been " + _0x468ecd + '.'
  });
}
async function checkAntispamStatus(_0x54b9fa, _0x350b54) {
  const _0xf920e2 = global.antispam ? "enabled" : "disabled";
  await _0x54b9fa.sendMessage(_0x350b54, {
    'text': "Anti-spam is currently " + _0xf920e2 + '.'
  });
}
module.exports.toggleAntispam = toggleAntispam;
module.exports.checkAntispamStatus = checkAntispamStatus;