Below is a **complete, copy/paste command playbook** to keep your fork (`QuanHNguyen232/quanhnguyen232.github.io`) up-to-date with the upstream template (`alshedivat/al-folio`) while still keeping your personal edits.

This workflow is the standard “fork + upstream remote + periodic merges/rebases” approach (you’ll occasionally resolve merge conflicts, which is normal). ([GitHub][1])

---

## 0) One-time setup (local repo + upstream remote)

### Clone *your* GitHub Pages repo

```bash
git clone https://github.com/QuanHNguyen232/quanhnguyen232.github.io.git
cd quanhnguyen232.github.io
```

### Add the template as `upstream`

```bash
git remote add upstream https://github.com/alshedivat/al-folio.git
git remote -v
```

You should see:

* `origin` → your repo
* `upstream` → alshedivat/al-folio

---

## 1) Day-to-day: make your personal changes safely (feature branches)

Create a branch for your edits:

```bash
git checkout main
git pull --ff-only origin main
git checkout -b edit/my-content
```

OR update branch from main
```bash
git checkout main
git pull --ff-only origin main
git checkout edit/my-content
git merge origin/main
```

Edit files, then:

```bash
git status
git add -A
git commit -m "Update personal info"
git push -u origin edit/my-content
```

Then merge into main:

```bash
git checkout main
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
gh repo sync QuanHNguyen232/quanhnguyen232.github.io -b main
```

This syncs your fork’s `main` with upstream, but I still recommend the “update branch” method above if you want safer conflict handling.

---

## 4) What branch should GitHub Pages deploy from for al-folio?

Most al-folio setups deploy via GitHub Actions (build → publish) rather than directly serving `/docs` or a branch. The al-folio community docs emphasize setting up automatic deployment and then “commit and push” updates. ([GitHub][2])

So: **keep deploying from `main`** (default), unless you’ve explicitly configured Pages to deploy from a different branch/folder.

To check your Pages setting quickly:

* Repo → **Settings** → **Pages**
* See “Build and deployment”

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

* Try to put your info mostly in config/data/content files (like `_config.yml`, `_data/`, and pages), and avoid heavily editing theme/layout internals unless needed.
* When upstream updates hit the same files you edited (e.g., layout includes), conflicts will happen more often—normal for templates. ([GitHub][1])

---

If you paste (or screenshot) what your **Settings → Pages** shows (“Deploy from branch” vs “GitHub Actions”), I can tailor the last step so your deployment matches your current config exactly—but the Git workflow above stays the same.

[1]: https://github.com/alshedivat/al-folio/discussions/3545?utm_source=chatgpt.com "Customizability of v1.0 · alshedivat al-folio"
[2]: https://github.com/al-folio/al-folio.github.io?utm_source=chatgpt.com "GitHub - al-folio/al-folio.github.io: A beautiful, simple, clean, ..."
