## Author: Hai Dang

## SWR Caching Data NextJS

In Next.js, you can use the built-in SWR (Service Worker Registration) to cache data. This allows you to pre-render pages at build time and makes them available for offline use.

To use SWR in Next.js, you need to create a `next.config.js` file with the `swr` option enabled:
`module.exports = { // Enable SWR swr: true, };`
