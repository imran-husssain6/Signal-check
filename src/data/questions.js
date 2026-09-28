export const questions = [
  {
    id: 'urgent-reset',
    eyebrow: 'Email · Account security',
    scenario: {
      sender: 'IT Service Desk <support@northstar-help.co>',
      subject: 'URGENT: Your account will be suspended',
      body: 'We detected unusual activity. Confirm your password within 30 minutes to prevent account suspension.',
      action: 'Verify my account',
    },
    prompt: 'What is the strongest sign that this message may be a phishing attempt?',
    options: [
      {
        id: 'branding',
        text: 'The email does not include the company logo.',
      },
      {
        id: 'pressure',
        text: 'It creates urgency and asks for credentials through an unfamiliar domain.',
      },
      {
        id: 'time',
        text: 'It arrived during the workday.',
      },
    ],
    correctOptionId: 'pressure',
    explanation:
      'Attackers often combine time pressure with a look-alike domain to rush you past your normal checks. Open your company portal directly or contact IT through a known channel instead of using the link.',
    takeaway: 'Pause when a message manufactures urgency.',
  },
  {
    id: 'shared-document',
    eyebrow: 'Chat · Shared document',
    scenario: {
      sender: 'Maya Chen · Product team',
      subject: 'Shared: “Q4 launch notes”',
      body: 'Hey — can you add your feedback before our 2 PM review? The file is in the usual project folder.',
      action: 'Open project folder',
      note: 'Link preview: drive.google.com',
    },
    prompt: 'What is the best next step?',
    options: [
      {
        id: 'report',
        text: 'Report the message immediately because all document links are unsafe.',
      },
      {
        id: 'open',
        text: 'Open the link because the sender is a coworker.',
      },
      {
        id: 'verify',
        text: 'Check the link destination and confirm the request in the existing project channel if anything looks unusual.',
      },
      {
        id: 'forward',
        text: 'Forward the message to the whole team to ask whether it is legitimate.',
      },
    ],
    correctOptionId: 'verify',
    explanation:
      'Context matters. The request may be legitimate, but sender names can be copied. Checking the destination and using an established channel gives you confidence without creating unnecessary alarm.',
    takeaway: 'Verify through a channel you already trust.',
  },
  {
    id: 'mfa-prompt',
    eyebrow: 'Phone · Sign-in alert',
    scenario: {
      sender: 'Authenticator notification',
      subject: 'Approve sign-in?',
      body: 'A sign-in request was made from Berlin, Germany. Enter the number 42 in your authenticator app to approve.',
      action: 'Approve sign-in',
      note: 'You are at home and did not try to sign in.',
    },
    prompt: 'How should you respond?',
    options: [
      {
        id: 'deny',
        text: 'Deny the request, secure the account, and report the unexpected prompt.',
      },
      {
        id: 'approve',
        text: 'Approve it in case a background app triggered the sign-in.',
      },
      {
        id: 'wait',
        text: 'Ignore it; the request will expire on its own.',
      },
    ],
    correctOptionId: 'deny',
    explanation:
      'An unexpected multi-factor prompt can mean someone already has your password. Deny it, change your password from a trusted device, and report the event so the account can be checked.',
    takeaway: 'Never approve a sign-in you did not initiate.',
  },
  {
    id: 'invoice-attachment',
    eyebrow: 'Email · Unexpected invoice',
    scenario: {
      sender: 'Bright Office Supplies <billing@bright-office.example>',
      subject: 'Overdue invoice #18493',
      body: 'Your payment is 14 days late. Review the attached spreadsheet and remit payment today to avoid a service interruption.',
      action: 'Invoice_18493.xlsm',
      note: 'You do not manage vendor payments.',
    },
    prompt: 'Which response is safest?',
    options: [
      {
        id: 'inspect',
        text: 'Open the file in preview mode to see whether the invoice looks real.',
      },
      {
        id: 'reply',
        text: 'Reply to the sender and ask why you received it.',
      },
      {
        id: 'route',
        text: 'Do not open it; report it and check with the finance team through a known contact.',
      },
    ],
    correctOptionId: 'route',
    explanation:
      'A macro-enabled spreadsheet from an unexpected sender is high risk. Do not interact with the attachment or reply. Report it, then verify with finance using contact details you already trust.',
    takeaway: 'Unexpected attachments deserve an independent check.',
  },
  {
    id: 'qr-code',
    eyebrow: 'Poster · QR code',
    scenario: {
      sender: 'Break-room notice',
      subject: 'Free coffee for employee feedback',
      body: 'Scan this QR code and sign in with your work account to claim a café voucher. Offer ends today.',
      action: 'Scan to claim',
      note: 'The poster has no company branding or contact details.',
    },
    prompt: 'What should you do before scanning the code?',
    options: [
      {
        id: 'camera',
        text: 'Scan it with your phone camera, but close the page if it looks unusual.',
      },
      {
        id: 'verify-owner',
        text: 'Verify the promotion with the team that supposedly organized it using an official channel.',
      },
      {
        id: 'personal-phone',
        text: 'Use a personal phone because it is safer than a work device.',
      },
    ],
    correctOptionId: 'verify-owner',
    explanation:
      'QR codes hide their destination until they are scanned, and stickers or posters can be replaced easily. Confirm the promotion through an official company channel before opening the link or entering credentials.',
    takeaway: 'Treat unknown QR codes like unknown links.',
  },
  {
    id: 'executive-request',
    eyebrow: 'Text message · Payment request',
    scenario: {
      sender: 'Unknown number · “Elena, CEO”',
      subject: 'Can you help with something urgent?',
      body: 'I am heading into a client meeting. Buy four gift cards and send me photos of the codes. I will reimburse you this afternoon.',
      action: 'Reply now',
      note: 'The sender asks you not to call because the meeting is confidential.',
    },
    prompt: 'Which clue is most important here?',
    options: [
      {
        id: 'meeting',
        text: 'Executives are usually too busy to buy gift cards themselves.',
      },
      {
        id: 'channel',
        text: 'The request combines secrecy, urgency, and an unusual payment method from an unknown number.',
      },
      {
        id: 'reimbursement',
        text: 'Reimbursement may take longer than one afternoon.',
      },
      {
        id: 'quantity',
        text: 'Four gift cards is more than an employee should purchase.',
      },
    ],
    correctOptionId: 'channel',
    explanation:
      'Gift-card scams often impersonate leaders and discourage verification. Do not reply or purchase anything. Contact the executive or their assistant using a known number or your normal workplace channel.',
    takeaway: 'Urgency plus secrecy is a strong warning signal.',
  },
  {
    id: 'public-wifi',
    eyebrow: 'Travel · Public Wi-Fi',
    scenario: {
      sender: 'Airport network list',
      subject: 'Available network: AIRPORT_FREE_FAST',
      body: 'A similarly named airport network appears without a password and has a stronger signal than the network shown on the terminal signs.',
      action: 'Connect',
      note: 'You need to review a confidential work document before boarding.',
    },
    prompt: 'What is the safest way to get online?',
    options: [
      {
        id: 'strongest',
        text: 'Choose the strongest free network and avoid entering passwords.',
      },
      {
        id: 'hotspot',
        text: 'Use your mobile hotspot or confirm the official network name, then use the company VPN.',
      },
      {
        id: 'incognito',
        text: 'Use an incognito browser window on the free network.',
      },
    ],
    correctOptionId: 'hotspot',
    explanation:
      'Attackers can create convincing look-alike networks. A personal hotspot is safer; if you must use public Wi-Fi, confirm its exact name and use your organization’s approved VPN before accessing work information.',
    takeaway: 'A familiar network name is not proof that it is legitimate.',
  },
]
