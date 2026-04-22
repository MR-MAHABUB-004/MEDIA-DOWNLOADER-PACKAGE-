# Mahabub AllDL 🚀

Universal downloader for:

- TikTok
- YouTube
- Facebook
- Instagram
- Pinterest
- CapCut
- Google Drive
- TeraBox

## Install

```bash
npm install mahabub-dl
```

## Usage

```js
const { dl } = require("mahabub-dl");

(async () => {
  const data = await dl("https://vt.tiktok.com/xxxxx");

  console.log(data);
})();
```

## Output

```json
{
  "platform": "TikTok",
  "title": "...",
  "thumbnail": "...",
  "hd": "...",
  "sd": "...",
  "dev": "@MR MAHABUB"
}
```
