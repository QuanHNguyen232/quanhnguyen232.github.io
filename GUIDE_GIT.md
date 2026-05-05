Below is a **complete, copy/paste command playbook** to keep your fork (`quanhn232/quanhn232.github.io`) up-to-date with the upstream template (`alshedivat/al-folio`) while still keeping your personal edits.

This workflow is the standard “fork + upstream remote + periodic merges/rebases” approach (you’ll occasionally resolve merge conflicts, which is normal). ([GitHub][1])

---

## 0) Clone again and set up workspace (repo already has 2 branches)

Use this when you clone your repo on a new machine.

### Clone your repo and enter folder

```bash
git clone https://github.com/quanhn232/quanhn232.github.io.git
cd quanhn232.github.io
```

### Add upstream (al-folio template) once

```bash
git remote add upstream https://github.com/alshedivat/al-folio.git
git remote -v
```

Expected remotes:

- `origin` -> `quanhn232/quanhn232.github.io`
- `upstream` -> `alshedivat/al-folio`

### Fetch all branches and create local tracking branches

```bash
git fetch --all --prune
git switch main
git pull --ff-only origin main
git switch --track origin/edit/my-content
git switch --track origin/update/upstream-sync
git switch main
```

Now your local repo has these 3 working branches ready:

- `main`
- `edit/my-content`
- `update/upstream-sync`

---

## 1) Day-to-day workflow (edit branch -> merge to main)

### Start personal edits on `edit/my-content`

```bash
git switch edit/my-content
git pull --ff-only origin edit/my-content
git merge origin/main
```

### Edit files, commit, and push

```bash
git status
git add -A
git commit -m "Update personal info"
git push origin edit/my-content
```

### Merge personal edits into `main`

```bash
git switch main
git pull --ff-only origin main
git merge --no-ff edit/my-content
git push origin main
```

---

## 2) Keeping your fork up-to-date with al-folio (recommended “update branch” workflow)

This reduces stress: do upstream updates on a dedicated branch, then merge into `main`.

### A) Create/update your “update branch”

```bash
git checkout main
git pull --ff-only origin main
git fetch upstream
git checkout -B update/upstream-sync
```

### B) Bring in upstream changes (pick ONE approach)

#### Option 1 — Merge (simplest, safer)

```bash
git merge upstream/main
```

#### Option 2 — Rebase (cleaner history, but you must be comfortable resolving conflicts)

```bash
git rebase upstream/main
```

If conflicts happen:

```bash
git status
# fix files
git add <fixed-file-1> <fixed-file-2>
git rebase --continue   # (or if merging, just commit the merge)
```

If you regret rebasing:

```bash
git rebase --abort
```

### C) Push the update branch, then merge to main

```bash
git push -u origin update/upstream-sync
```

Then merge into main locally:

```bash
git checkout main
git merge --no-ff update/upstream-sync
git push origin main
```

That’s it—your site stays current while still deploying from `main`.

---

## 3) Ultra-fast “sync” command (optional)

If you use GitHub CLI:

```bash
gh repo sync quanhn232/quanhn232.github.io -b main
```

This syncs your fork’s `main` with upstream, but I still recommend the “update branch” method above if you want safer conflict handling.

---

## 4) What branch should GitHub Pages deploy from for al-folio?

Most al-folio setups deploy via GitHub Actions (build → publish) rather than directly serving `/docs` or a branch. The al-folio community docs emphasize setting up automatic deployment and then “commit and push” updates. ([GitHub][2])

So: **keep deploying from `main`** (default), unless you’ve explicitly configured Pages to deploy from a different branch/folder.

To check your Pages setting quickly:

- Repo → **Settings** → **Pages**
- See “Build and deployment”

---

## 5) Commands you’ll use the most (cheat sheet)

### See what changed upstream since last time

```bash
git fetch upstream
git log --oneline --decorate --graph --left-right main...upstream/main
```

### Update local main from your GitHub

```bash
git checkout main
git pull --ff-only origin main
```

### Merge upstream into your update branch

```bash
git checkout -B update/upstream-sync
git fetch upstream
git merge upstream/main
```

### Resolve conflicts (typical loop)

```bash
git status
# edit files to resolve
git add -A
git commit           # (if merge)
# or:
git rebase --continue
```

---

## 6) Practical tips to reduce merge conflicts (especially for al-folio)

- Try to put your info mostly in config/data/content files (like `_config.yml`, `_data/`, and pages), and avoid heavily editing theme/layout internals unless needed.
- When upstream updates hit the same files you edited (e.g., layout includes), conflicts will happen more often—normal for templates. ([GitHub][1])

---

If you paste (or screenshot) what your **Settings → Pages** shows (“Deploy from branch” vs “GitHub Actions”), I can tailor the last step so your deployment matches your current config exactly—but the Git workflow above stays the same.

[1]: https://github.com/alshedivat/al-folio/discussions/3545?utm_source=chatgpt.com "Customizability of v1.0 · alshedivat al-folio"
[2]: https://github.com/al-folio/al-folio.github.io?utm_source=chatgpt.com "GitHub - al-folio/al-folio.github.io: A beautiful, simple, clean, ..."

## Docker (based on INSTALL.md)

```bash
docker compose pull
# -d: detach
docker compose up --build -d
# -f: watch logs
docker compose logs -f
```

Run prettier
```bash
MSYS_NO_PATHCONV=1 docker run --rm -v "$(pwd):/app" -w /app node:20 sh -c "npm install && npx prettier . --write"
```