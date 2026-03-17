# SPOKE-PI5-DEMO

Raspberry Pi 5 spoke node demo setup guide for the one-d (Whispr Linux) system.

## Prerequisites

- Raspberry Pi 5 (4GB+ RAM recommended)
- Raspberry Pi OS (64-bit)
- Node.js 20+
- pnpm

## Setup Steps

### 1. Clone the repository

```bash
git clone https://github.com/t4tarzan/one-d.git
cd one-d
pnpm install
```

### 2. Configure environment

Copy `.env.example` to `.env` and fill in:

```bash
cp .env.example .env
```

Key variables:
- `HUB_URL` — URL of the central hub
- `API_KEY` — API key issued by the hub admin
- `DEVICE_ID` — Unique identifier for this spoke

### 3. Register the spoke

```bash
pnpm spoke register --hub $HUB_URL --key $API_KEY
```

### 4. Verify connection

Check the hub dashboard to confirm this spoke appears as connected.

### 5. Troubleshooting

- If registration fails, verify `HUB_URL` is reachable from the Pi
- Check firewall rules allow outbound TCP on port 443
- Review logs: `pnpm spoke logs`

## Next Steps

See the full edge mesh protocol documentation for advanced configuration.
