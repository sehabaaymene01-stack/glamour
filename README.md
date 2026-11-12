# Glamour Bons

A phone app (installable web app) to track supplier delivery notes ("bons"), the advances paid, and the dates fixed to pay the rest.

## What it does

- **Scan a bon**: take a photo with the camera (or pick from the gallery) and attach it to the supplier's name, bon number, total, advance paid and the date to pay the rest.
- **To pay** screen: total owed, what is overdue, what is due today and in the next 7 days.
- **Payments**: add partial payments on a bon and fix a new date for the remainder; the bon is marked paid when nothing is left.
- **Suppliers**: how much is owed to each one, their bons, phone number with a call button.
- **Reminders**: notification when payments are due (when the app is opened, and in the background on Android Chrome when installed), a badge on the app icon, and an "Add reminder to calendar" button on each bon for an alarm in the phone's calendar.
- **Backup**: save / restore one file containing everything, photos included.
- English and French, any currency label (default `DA`). Works offline.

All data stays on the phone (IndexedDB). Nothing is sent to a server, so make backups from Settings.

## Put it on a phone

The app is plain static files, no build step. Host the folder on any HTTPS static host, for example GitHub Pages:
repository **Settings → Pages → Deploy from a branch**, choose the branch and `/ (root)`. Then open the address on the phone and:

- Android (Chrome): menu ⋮ → *Add to Home screen*
- iPhone (Safari): Share → *Add to Home Screen*

## Run locally

```
python3 -m http.server 8000
```

then open http://localhost:8000.
