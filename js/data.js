/* ═══════════════════════════════════════════════════════════
   UPTIME – Shared Mock Data
   ═══════════════════════════════════════════════════════════ */

const DATA = {
    monitors: [
        { id: 1, name: 'Marketing Website', url: 'https://acme.com', status: 'up', uptime: 99.98, responseTime: 142, sslValid: true, sslExpiry: '2027-01-15', checks: 43200, lastCheck: '12s ago', owner: 'John Doe' },
        { id: 2, name: 'API Gateway', url: 'https://api.acme.com', status: 'up', uptime: 99.95, responseTime: 89, sslValid: true, sslExpiry: '2026-11-22', checks: 43180, lastCheck: '28s ago', owner: 'John Doe' },
        { id: 3, name: 'Customer Portal', url: 'https://portal.acme.com', status: 'down', uptime: 97.42, responseTime: 0, sslValid: true, sslExpiry: '2026-09-10', checks: 42900, lastCheck: '5s ago', owner: 'Jane Smith' },
        { id: 4, name: 'Documentation Hub', url: 'https://docs.acme.com', status: 'up', uptime: 99.99, responseTime: 67, sslValid: true, sslExpiry: '2027-03-08', checks: 43200, lastCheck: '15s ago', owner: 'John Doe' },
        { id: 5, name: 'Blog Platform', url: 'https://blog.acme.com', status: 'up', uptime: 99.87, responseTime: 198, sslValid: false, sslExpiry: '2026-04-01', checks: 43100, lastCheck: '45s ago', owner: 'Alice Johnson' },
        { id: 6, name: 'E-commerce Store', url: 'https://shop.acme.com', status: 'up', uptime: 99.91, responseTime: 234, sslValid: true, sslExpiry: '2027-06-20', checks: 43150, lastCheck: '8s ago', owner: 'Bob Wilson' },
        { id: 7, name: 'CDN Origin', url: 'https://cdn.acme.com', status: 'up', uptime: 100.00, responseTime: 23, sslValid: true, sslExpiry: '2027-02-14', checks: 43200, lastCheck: '3s ago', owner: 'John Doe' },
        { id: 8, name: 'Staging Server', url: 'https://staging.acme.com', status: 'paused', uptime: 98.50, responseTime: 310, sslValid: true, sslExpiry: '2026-12-01', checks: 20000, lastCheck: '2h ago', owner: 'Jane Smith' },
        { id: 9, name: 'Admin Panel', url: 'https://admin.acme.com', status: 'up', uptime: 99.96, responseTime: 156, sslValid: true, sslExpiry: '2027-04-30', checks: 43190, lastCheck: '20s ago', owner: 'John Doe' },
        { id: 10, name: 'GraphQL Endpoint', url: 'https://graphql.acme.com', status: 'up', uptime: 99.88, responseTime: 112, sslValid: true, sslExpiry: '2026-10-15', checks: 43170, lastCheck: '32s ago', owner: 'Alice Johnson' },
        { id: 11, name: 'WebSocket Server', url: 'wss://ws.acme.com', status: 'down', uptime: 96.20, responseTime: 0, sslValid: true, sslExpiry: '2026-08-20', checks: 42500, lastCheck: '2s ago', owner: 'Bob Wilson' },
        { id: 12, name: 'Status Page', url: 'https://status.acme.com', status: 'up', uptime: 99.99, responseTime: 45, sslValid: true, sslExpiry: '2027-05-10', checks: 43200, lastCheck: '10s ago', owner: 'John Doe' },
    ],

    incidents: [
        { id: 1, title: 'Customer Portal Complete Outage', monitor: 'Customer Portal', severity: 'critical', status: 'ongoing', startedAt: '2026-04-19 09:15', duration: '1h 39m', reporter: 'System', description: 'HTTP 503 errors detected. Backend services unreachable.' },
        { id: 2, title: 'WebSocket Connection Failures', monitor: 'WebSocket Server', severity: 'critical', status: 'investigating', startedAt: '2026-04-19 10:02', duration: '52m', reporter: 'System', description: 'Connection handshake timeouts.' },
        { id: 3, title: 'API Response Degradation', monitor: 'API Gateway', severity: 'major', status: 'ongoing', startedAt: '2026-04-19 08:45', duration: '2h 09m', reporter: 'John Doe', description: 'Average response times elevated to 800ms+.' },
        { id: 4, title: 'SSL Certificate Warning', monitor: 'Blog Platform', severity: 'major', status: 'resolved', startedAt: '2026-04-18 14:00', resolvedAt: '2026-04-18 16:30', duration: '2h 30m', reporter: 'System', description: 'SSL certificate expired. Renewed successfully.' },
        { id: 5, title: 'CDN Cache Purge Failure', monitor: 'CDN Origin', severity: 'minor', status: 'resolved', startedAt: '2026-04-17 22:00', resolvedAt: '2026-04-17 22:45', duration: '45m', reporter: 'Alice Johnson', description: 'Cache invalidation API returned errors.' },
        { id: 6, title: 'Database Connection Pool Exhaustion', monitor: 'E-commerce Store', severity: 'critical', status: 'resolved', startedAt: '2026-04-16 03:15', resolvedAt: '2026-04-16 04:00', duration: '45m', reporter: 'System', description: 'Max connections reached. Auto-scaled.' },
        { id: 7, title: 'DNS Resolution Timeout', monitor: 'Marketing Website', severity: 'minor', status: 'resolved', startedAt: '2026-04-15 11:30', resolvedAt: '2026-04-15 11:45', duration: '15m', reporter: 'System', description: 'Brief DNS propagation delay.' },
    ],

    statusPages: [
        { id: 1, name: 'Acme Cloud Status', url: 'status.acme.com', status: 'operational', monitors: ['Marketing Website', 'API Gateway', 'CDN Origin'], visibility: 'Public', owner: 'John Doe' },
        { id: 2, name: 'Developer Platform', url: 'devstatus.acme.com', status: 'degraded', monitors: ['API Gateway', 'GraphQL Endpoint', 'Documentation Hub'], visibility: 'Public', owner: 'Jane Smith' },
        { id: 3, name: 'Internal Systems', url: 'internal.acme.com/status', status: 'operational', monitors: ['Admin Panel', 'Staging Server'], visibility: 'Private', owner: 'John Doe' },
    ],

    alertChannels: [
        { id: 1, name: 'Email', desc: 'Receive alerts via email', iconKey: 'channelEmail', bg: 'var(--blue-bg)', enabled: true },
        { id: 2, name: 'SMS', desc: 'Text message notifications', iconKey: 'channelSMS', bg: 'var(--green-bg)', enabled: true },
        { id: 3, name: 'Slack', desc: 'Post to Slack channels', iconKey: 'channelSlack', bg: 'var(--purple-bg)', enabled: true },
        { id: 4, name: 'Microsoft Teams', desc: 'Teams channel integration', iconKey: 'channelTeams', bg: 'var(--blue-bg)', enabled: false },
        { id: 5, name: 'Discord', desc: 'Discord webhook alerts', iconKey: 'channelDiscord', bg: 'var(--accent-bg)', enabled: true },
        { id: 6, name: 'Telegram', desc: 'Telegram bot messages', iconKey: 'channelTelegram', bg: 'var(--cyan-bg)', enabled: false },
        { id: 7, name: 'Flock', desc: 'Flock channel integration', iconKey: 'channelFlock', bg: 'var(--yellow-bg)', enabled: false },
        { id: 8, name: 'Webhooks', desc: 'Custom HTTP webhook endpoints', iconKey: 'channelWebhook', bg: 'var(--red-bg)', enabled: true },
    ],

    paymentGateways: [
        { name: 'PayPal', iconKey: 'paypal' }, { name: 'Stripe', iconKey: 'stripe' }, { name: 'Mollie', iconKey: 'mollie' },
        { name: 'Paddle', iconKey: 'paddle' }, { name: 'Razorpay', iconKey: 'razorpay' }, { name: 'Paystack', iconKey: 'paystack' },
        { name: 'Coinbase', iconKey: 'coinbase' }, { name: 'Crypto.com', iconKey: 'bitcoin' }, { name: 'Bank Transfer', iconKey: 'bank' },
    ],

    plans: [
        { id: 1, name: 'Free', price: '$0', period: '/mo', desc: 'Get started with basic monitoring', monitors: 5, interval: '5 min', history: '24 hours', statusPages: 1, alerts: 'Email only', subscribers: 48, status: 'active' },
        { id: 2, name: 'Starter', price: '$9', period: '/mo', desc: 'For growing teams and projects', monitors: 25, interval: '2 min', history: '30 days', statusPages: 3, alerts: 'Email + Slack', subscribers: 124, status: 'active' },
        { id: 3, name: 'Pro', price: '$29', period: '/mo', desc: 'Advanced monitoring for professionals', monitors: 100, interval: '1 min', history: '90 days', statusPages: 10, alerts: 'All channels', subscribers: 89, status: 'active', popular: true },
        { id: 4, name: 'Enterprise', price: '$99', period: '/mo', desc: 'Unlimited monitoring with premium support', monitors: 'Unlimited', interval: '30 sec', history: '1 year', statusPages: 'Unlimited', alerts: 'All + Priority', subscribers: 31, status: 'active' },
    ],

    users: [
        { id: 1, name: 'John Doe', email: 'john@acme.com', plan: 'Pro', monitors: 9, joined: '2025-06-15', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@tech.io', plan: 'Enterprise', monitors: 15, joined: '2025-08-22', status: 'active' },
        { id: 3, name: 'Alice Johnson', email: 'alice@startup.co', plan: 'Starter', monitors: 6, joined: '2025-11-03', status: 'active' },
        { id: 4, name: 'Bob Wilson', email: 'bob@dev.net', plan: 'Pro', monitors: 8, joined: '2026-01-10', status: 'active' },
        { id: 5, name: 'Carol Davis', email: 'carol@agency.com', plan: 'Free', monitors: 3, joined: '2026-02-18', status: 'suspended' },
        { id: 6, name: 'Dan Brown', email: 'dan@corp.org', plan: 'Starter', monitors: 4, joined: '2026-03-05', status: 'active' },
        { id: 7, name: 'Eva Martinez', email: 'eva@design.co', plan: 'Pro', monitors: 12, joined: '2026-03-20', status: 'active' },
        { id: 8, name: 'Frank Lee', email: 'frank@host.io', plan: 'Free', monitors: 2, joined: '2026-04-01', status: 'active' },
    ],

    payments: [
        { id: 'PAY-001', user: 'Jane Smith', amount: '$99.00', gateway: 'Stripe', date: '2026-04-18', status: 'completed' },
        { id: 'PAY-002', user: 'Bob Wilson', amount: '$29.00', gateway: 'PayPal', date: '2026-04-17', status: 'completed' },
        { id: 'PAY-003', user: 'Eva Martinez', amount: '$29.00', gateway: 'Stripe', date: '2026-04-17', status: 'completed' },
        { id: 'PAY-004', user: 'Alice Johnson', amount: '$9.00', gateway: 'Razorpay', date: '2026-04-16', status: 'pending' },
        { id: 'PAY-005', user: 'Dan Brown', amount: '$9.00', gateway: 'Mollie', date: '2026-04-15', status: 'completed' },
        { id: 'PAY-006', user: 'John Doe', amount: '$29.00', gateway: 'Stripe', date: '2026-04-14', status: 'completed' },
        { id: 'PAY-007', user: 'Carol Davis', amount: '$9.00', gateway: 'Coinbase', date: '2026-04-12', status: 'declined' },
    ],

    taxRates: [
        { name: 'US Sales Tax', region: 'United States', rate: '8.5%', type: 'Inclusive', status: 'active' },
        { name: 'EU VAT', region: 'European Union', rate: '21%', type: 'Exclusive', status: 'active' },
        { name: 'UK VAT', region: 'United Kingdom', rate: '20%', type: 'Exclusive', status: 'active' },
        { name: 'GST India', region: 'India', rate: '18%', type: 'Exclusive', status: 'active' },
        { name: 'GST Australia', region: 'Australia', rate: '10%', type: 'Inclusive', status: 'inactive' },
    ],

    coupons: [
        { code: 'WELCOME20', discount: '20%', usage: '45/100', expires: '2026-06-30', status: 'active' },
        { code: 'ANNUAL50', discount: '50%', usage: '12/50', expires: '2026-12-31', status: 'active' },
        { code: 'STARTUP10', discount: '$10 off', usage: '89/200', expires: '2026-05-15', status: 'active' },
        { code: 'BLACKFRI', discount: '40%', usage: '200/200', expires: '2025-11-30', status: 'expired' },
        { code: 'BETA2026', discount: '100%', usage: '5/5', expires: '2026-03-01', status: 'expired' },
    ],
};
