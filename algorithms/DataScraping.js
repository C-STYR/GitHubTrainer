/**
 * Below you'll find a portion of a sitemap file called converted into a string, called "bigstring". 
 * It contains some url addresses that we need to strip out. 
 * Fill in the function body with the purpose of scraping
 * the urls out of the sitemap string and returning an array of url strings.
 */

const bigstring = 
`<url>
<loc>https://goteleport.com/blog/devops-access-controls/</loc>
<lastmod>2021-11-05T23:06:59+00:00</lastmod>
<changefreq>daily</changefreq>
</url>
<url>
<loc>https://goteleport.com/</loc>
<lastmod>2021-11-05T23:06:59+00:00</lastmod>
<changefreq>daily</changefreq>
</url>
<url>
<loc>https://goteleport.com/blog/ghosts-of-past-employees/</loc>
<lastmod>2021-11-05T23:06:59+00:00</lastmod>
<changefreq>daily</changefreq>
</url>
<url>
<loc>https://goteleport.com/resources/podcast/access-control-lvh/</loc>
<lastmod>2021-11-05T23:06:59+00:00</lastmod>
<changefreq>daily</changefreq>
</url>
<url>
<loc>https://goteleport.com/resources/podcast/</loc>
<lastmod>2021-11-05T23:06:59+00:00</lastmod>
<changefreq>monthly</changefreq>
</url>`

const DataScraper = (string) => {
  //write your code here
  //the return value should be an array of url strings (see below)
}

console.log(DataScraper(bigstring))
// Expected Output: 
//  [
//  "https://goteleport.com/blog/devops-access-controls/",
//  "https://goteleport.com/",
//  "https://goteleport.com/blog/ghosts-of-past-employees/",
//  "https://goteleport.com/resources/podcast/access-control-lvh/",
//  "https://goteleport.com/resources/podcast/",
//  ]