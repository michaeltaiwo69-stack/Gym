# Rep Lab

A single-page gym app: exercises grouped by body part, weekly programs, a calorie/protein calculator, and a workout log. Every recommendation is tied to published research (linked to PubMed in the app's **Science** tab).

Open `index.html` in any browser. No build step; log data is saved in your browser's local storage.

- **Workouts**: 11 groups (chest, shoulders, back, biceps, triceps, quads, hamstrings, glutes, calves, core, fat-loss cardio), each with weekly set targets, cues and the evidence behind the top picks.
- **Programs**: Upper/Lower (4 days), Full Body Fat Loss (3 days + cardio), Push/Pull/Legs (6 days). Start any day as a logged session.
- **Science**: volume, frequency, effort, overload, stretch, rest, protein, deficit, cardio, sleep, creatine, spot reduction.
- **Fuel**: Mifflin–St Jeor calories with a 0.5–1%/week fat-loss pace and protein targets.
- **Log**: sets, reps and weight, with your last best set shown so you know what to beat.

General education, not medical advice.

## Run it on your phone with Expo Go

The `mobile/` folder is an Expo app that shows the same page inside a native WebView.

1. Install **Expo Go** on your phone (App Store / Google Play).
2. On your computer (Node 20+):
   ```bash
   git clone https://github.com/michaeltaiwo69-stack/gym.git
   cd gym/mobile
   npm install
   npm start
   ```
3. Scan the QR code: iPhone with the Camera app, Android from inside Expo Go.
   Your phone and computer must be on the same Wi-Fi. If they aren't, run `npx expo start --tunnel` instead.

`npm start` re-copies `../index.html` into the app first, so edits to the web page show up on the phone.
