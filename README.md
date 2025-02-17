# DumbMonitor
Because apparently Uptime Kuma is too complicated for you. Here's yet another website monitoring tool for those who think Docker is scary and databases are dark magic.

A laughably simple website monitoring application that provides a clean interface for the monitoring-challenged. Perfect for when you want to reinvent the wheel, but make it square.

No authentication (because who needs security?), no storage (why persist data when you can live in the moment?), no nothing. Just a simple dumb monitor for people who think `ping` is too advanced.

## Setup
1. Install dependencies (yes, you actually need to do this):
```bash
npm install
```

2. Configure environment variables in `.env` file (we made it really simple for you):
```
PORT=3000                    # Pick a port, any port (as long as it's available)
WEBSITES=https://example.com,https://foo.com  # List your precious websites here
CHECK_INTERVAL=5000         # How often to check (in milliseconds, for those counting)
UI_REFRESH_INTERVAL=5000    # How often to refresh the UI (also milliseconds, shocking)
THEME=light                 # For when dark mode is too edgy for you
```

3. Start the application (the moment you've been waiting for):
```bash
npm start
```

4. Open your browser (yes, that program you use for Facebook) and visit `http://localhost:3000`

## Features
- Real-time website monitoring (like Uptime Kuma, but worse)
- Clean, modern UI (because we can't compete on functionality)
- Status indicators (UP/DOWN - we kept it simple enough for management to understand)
- Response time tracking (in case you need numbers to look at)
- Error reporting (for when things inevitably go wrong)
- Configurable intervals (because options make it feel professional)
- Light and dark theme support (the bare minimum for a 2025 app)

## Why This Exists
Because sometimes you just want to monitor a few websites without all those pesky "features" getting in the way. Sure, you could use Uptime Kuma like a normal person, but where's the fun in that?

_Note: If you're actually deploying this in production, please reconsider your life choices. Uptime Kuma is right there, and it's actually good._
