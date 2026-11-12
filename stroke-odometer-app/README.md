# Stroke Odometer

A private, installable web app. No accounts, no server, no tracking. Everything is stored on the user's own device.

## What is in this folder

- `index.html` is the whole app (styles and code included)
- `sw.js` makes it work offline
- `manifest.webmanifest` and `icons/` let people install it on their home screen
- `fonts/` holds the fonts, so the app makes no requests to anyone else's servers

## Put it online for free

Pick one. All four give you a free web address. Menu names change now and then, so follow the idea if a button looks different.

### Option A: Open 'index.html'
1. Unzip the folder
2. Double click on 'index.html'

### Option B: Netlify Drop 
1. Unzip this folder.
2. Go to app.netlify.com/drop and drag the whole folder onto the page.
3. You get a live address straight away. You may be asked for a free account to keep the site.

### Option C: Cloudflare Pages
1. Make a free Cloudflare account.
2. Go to Workers & Pages, create a Pages project, and choose Direct Upload.
3. Upload this folder. You get an address like `yourname.pages.dev`.

### Option D: GitHub Pages
1. Make a free GitHub account and a new public repository.
2. Upload every file and folder from here (index.html must sit at the top level).
3. In the repository's Settings, open Pages and publish from the main branch, root folder.
4. Your address is `yourusername.github.io/repositoryname`.

Share the address with anyone. They install it as described below.

## Installing on a phone

- **iPhone:** open the address in Safari, tap Share, then Add to Home Screen. Please do this step: Safari can clear data from websites that have not been opened for about a week, but not from apps added to the Home Screen.
- **Android:** open it in Chrome, then use the menu and tap Install app (an Install app button also appears in the page).

The installed app and the browser tab can keep separate data. Export backup and Import backup in the app move the log between them, or to a new phone.

## Updating the app later

1. Change the files and upload them again to the same place.
2. In `sw.js`, change `CACHE_VERSION` (for example `v1` to `v2`). Without this, phones keep showing the old version.
3. People get the new version the next time they open the app twice.

## Trying it on your own computer

Opening `index.html` by double clicking works for the app itself, but offline mode and installing need a web address. To test those, run `python3 -m http.server 8000` in this folder and visit `http://localhost:8000`.

## Privacy notes

- Session data never leaves the device. There is no analytics and no login.
- The hosting company can see ordinary visit information such as IP addresses, like any website. It cannot see anyone's sessions.
- Free hosts have terms that restrict adult content. The app contains none. Keep the page text, name and any screenshots you publish tasteful so it stays clearly within those terms.
- Before you promote it widely, add a short privacy statement and an 18+ notice.
