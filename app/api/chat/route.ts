export const dynamic = 'force-dynamic'

export async function POST() {
  return Response.json(
    {
      error: 'Chat API coming soon',
      message: 'The Ask Briton chat feature will be enabled after launch.',
    },
    { status: 503 }
  )
}
