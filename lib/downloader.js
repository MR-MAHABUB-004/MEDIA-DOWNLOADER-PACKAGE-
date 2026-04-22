const axios = require("axios");

const API = "https://mahabub-aldl.vercel.app/api/dl?url=";

async function dl(url) {
  if (!url) {
    throw new Error("URL is required");
  }

  try {
    const { data } = await axios.get(API + encodeURIComponent(url));

    if (!data || data.status !== "success") {
      throw new Error("Failed to fetch media");
    }

    return {
      platform: data.platform,
      title: data.title,
      thumbnail: data.thumbnail,
      hd: data.hd,
      sd: data.sd,
      dev: data.dev
    };

  } catch (err) {
    throw new Error(err.message || "Downloader error");
  }
}

module.exports = { dl };
