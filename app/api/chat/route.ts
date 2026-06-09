export async function POST() {
  return new Response(
    JSON.stringify({
      error: 'Chat API coming soon',
      message: 'The Ask Briton chat feature will be enabled after launch.',
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    }
  )
}
