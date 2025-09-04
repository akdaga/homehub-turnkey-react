// Netlify Function: secure-download
export async function handler(event, context) {
  const user = context.clientContext && context.clientContext.user
  if (!user) return { statusCode: 401, body: 'Unauthorized: please log in.' }
  const roles = (user.app_metadata && user.app_metadata.roles) || []
  const isAllowed = roles.includes('partner') || roles.includes('admin')
  if (!isAllowed) return { statusCode: 403, body: 'Forbidden: partner/admin role required.' }

  const url = new URL(event.rawUrl || `http://x${event.path}${event.rawQuery ? '?' + event.rawQuery : ''}`)
  const file = url.searchParams.get('file')
  const allowlist = {
    'simvest-brochure-2025.pdf': 'protected/simvest-brochure-2025.pdf',
    'simvest-agent-briefing-pack.pdf': 'protected/simvest-agent-briefing-pack.pdf',
    'simvest-contract-request-form.pdf': 'protected/simvest-contract-request-form.pdf',
    'simvest-referral-agreement-qld-vic.pdf': 'protected/simvest-referral-agreement-qld-vic.pdf',
    'commission-schedule-sample.csv': 'protected/commission-schedule-sample.csv',
  }
  if (!file || !allowlist[file]) return { statusCode: 400, body: 'Bad request: unknown file.' }

  const fs = await import('fs')
  try {
    const data = fs.readFileSync(allowlist[file])
    const b64 = Buffer.from(data).toString('base64')
    const contentType = file.endsWith('.pdf') ? 'application/pdf' : file.endsWith('.csv') ? 'text/csv' : 'application/octet-stream'
    return {
      statusCode: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${file}"`,
        'Cache-Control': 'private, max-age=0, no-store'
      },
      isBase64Encoded: true,
      body: b64
    }
  } catch (e) {
    return { statusCode: 500, body: 'Server error: ' + e.message }
  }
}