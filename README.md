# Memory Palace Gym

Nine browser games that teach the memory techniques described in Joshua Foer's *Moonwalking with Einstein*. No prior reading needed: every game explains its technique, gives steps and a worked example, then lets you practise.

| Room | Game | Technique |
|---|---|---|
| 1 | Picture Recall | How strong your memory for images already is |
| 2 | Digit Span | Working memory and chunking |
| 3 | The Palace Walk | The memory palace (method of loci), with your own route |
| 4 | Names & Faces | Turning names into pictures linked to a facial feature |
| 5 | Major System | Turning numbers into words you can picture |
| 6 | Speed Cards | Person–Action–Object, with a metronome mode |
| 7 | The Tea Party | Remembering facts about people with one palace per person |
| 8 | Poem by Heart | Word-for-word memorisation with images or feelings |
| 9 | Image Forge | Making abstract words vivid |

A training log tracks every session and flags when your scores flatten out (the "OK plateau").

Progress is saved in the browser (localStorage). There is no backend and no build step: the whole app is `public/index.html`.

## Run locally

```bash
npm start
# open http://localhost:3000
```

Requires Node 18+. No dependencies to install.

## Deploy on Railway

1. Push this repo to GitHub.
2. In Railway: **New Project → Deploy from GitHub repo**, pick this repo.
3. Railway detects Node, runs `npm start`, and checks `/health`.
4. Under **Settings → Networking**, click **Generate Domain** to get a public URL.

Every push to the main branch redeploys automatically.

## Credits

Techniques summarised from *Moonwalking with Einstein* by Joshua Foer (2011). The poems included are in the public domain (Rossetti, Frost, Dickinson, Shakespeare). Faces are generated drawings, not photos of real people.
