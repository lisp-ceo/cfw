addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response('Darmok and Jalad at Tanagra...Shaka, when the walls fell!', {
    headers: { 'content-type': 'text/tamarian' },
  })
}
