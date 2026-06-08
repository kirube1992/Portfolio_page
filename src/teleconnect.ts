const TELECONNECT_CONFIG = {
  baseUrl: 'https://scwgateway.manamin.ethiotelecom.et',
  path: '/api-im/todo/sendSystemMessage',
  secretKey: '?dM"mXh"f3noow}I',   // matches backend
  appCode: 'test',                   // ← changed from 'Task' to 'Test'
  mySecretCode: '932368261',
  mySecretType: 2,
  gotoUrl: 'https://portfolio-page-roan-gamma.vercel.app/',  
}

export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactNotification(contact: ContactPayload): Promise<void> {
  const title = `New contact from ${contact.name}`
  const content = `Email: ${contact.email}\nSubject: ${contact.subject || '—'}\nMessage: ${contact.message}`

  const body = {
    data: {
      code: TELECONNECT_CONFIG.appCode,
      secretCode: TELECONNECT_CONFIG.mySecretCode,
      type: TELECONNECT_CONFIG.mySecretType,
      secretKey: TELECONNECT_CONFIG.secretKey,
      agentId: -1,
      titile: title,
      content: content,
      gotoUrl: TELECONNECT_CONFIG.gotoUrl,
    },
  }

  const url = `${TELECONNECT_CONFIG.baseUrl}${TELECONNECT_CONFIG.path}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const result = await response.json()

  if (!result.success) {
    console.warn('TeleConnect notification failed:', result)
  }
}