# DumbMonitor

A simple website monitoring application that checks website status and displays it in a clean interface. No authentication, no storage, just monitoring.

A stupid simple website monitoring application that provides a clean, modern interface.

No auth, no storage, no nothing. Just a simple dumb monitor to see the status of your favorite sites.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env` file:
```
PORT=3000                    # Port to run the server on
WEBSITES=https://example.com,https://foo.com  # Comma-separated list of websites to monitor
CHECK_INTERVAL=5000         # Backend check interval in milliseconds
UI_REFRESH_INTERVAL=5000    # Frontend refresh interval in milliseconds
THEME=light                 # UI theme (light or dark)
```

3. Start the application:
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## Features

- Real-time website monitoring
- Clean, modern UI
- Status indicators (UP/DOWN)
- Response time tracking
- Error reporting
- Configurable backend check interval
- Configurable UI refresh interval
- Light and dark theme support 
