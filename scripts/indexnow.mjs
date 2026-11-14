// Run manually after a deploy is live, not during the build.
//
// IndexNow requires the key file to be reachable on the live site before the
// first ping, so this script is kept separate from `next build`. After you have
// verified the deploy, run `npm run indexnow` to submit every URL from the live
// sitemap.xml, or pass URLs as arguments to submit only those.
const HOST = "www.orbititsolutions.in";
const KEY = "8e7f04dee40d576972eb71841d2c8cfd";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_URL = "https://api.indexnow.org/indexnow";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const urls = process.argv.slice(2);

let urlList;
if (urls.length > 0) {
  urlList = urls;
} else {
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    console.error(`Failed to fetch sitemap: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
  const sitemap = await response.text();
  urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (urlList.length === 0) {
    console.error("No URLs found in sitemap.xml");
    process.exit(1);
  }
}

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
});

const response = await fetch(INDEXNOW_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body,
});

console.log(`IndexNow: ${response.status} (${urlList.length} URLs)`);

if (response.status !== 200 && response.status !== 202) {
  const text = await response.text();
  console.error(text);
  process.exit(1);
}
