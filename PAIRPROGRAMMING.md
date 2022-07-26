# Pairing with git

## Getting started

You and your partner should follow these instructions together. "PartnerA" will assume the role of "driver" first, and "PartnerB" will assume the role of "navigator" first - decide now who those will be. You should switch these roles every 15 minutes (use a timer to keep track).

The steps below will help you establish a workflow for sharing your work with each other using Git. Note that for this to work, it is very important that only one partner works on the project at a time - you must stick to the driver/navigator roles.

- Both partners should fork the repo and clone their fork to their respective machines.
- **PartnerA**: Copy the url for your fork's github page from your browser's url bar (it will be something like `https://github.com/<PartnerA_username>/<PairExercise.WorkshopTitle>`) and send that url to PartnerB via Slack
- **PartnerB**: Copy the url that PartnerA sent you, `cd` into your local clone on your machine and execute this command using that url:

Note: No need to include the "<" ">" listed below

```bash
git remote add partnerA <partnerA_github_url>
```

- Repeat the two steps above, swapping PartnerA and PartnerB
- Both partners should read the `README.md` of the project (separately)
- Once both partners have read the `README.md`, **start the pairing timer** and complete the workshop steps in order

## When it's time to switch roles

- PartnerA should commit all of their work and push it to their master branch of the project directory:

```bash
git add -A
git commit -m "A lovely commit message"
git push origin master
```

- PartnerB should then **pull** from **their partner's remote** (NOT from their own origin) in their project directory:

```bash
git pull partnerA master
```

- Once PartnerB completes the pull, they will have all of PartnerA's work, and you will both be ready to continue with roles reversed. When the time comes to switch again, you simply perform the same process (with roles reversed).
