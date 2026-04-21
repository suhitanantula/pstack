---
name: pstack-upgrade
description: Upgrade pstack to the latest version from GitHub. Detects current version, pulls latest, re-runs setup, and reports what changed. Use when prompted with UPGRADE_AVAILABLE or when you want to manually update.
---

# pstack-upgrade — Self-Updater

## Preamble

```bash
PSTACK_DIR=$(cd "$(dirname "$(readlink -f ~/.claude/skills/pstack/SKILL.md 2>/dev/null || echo ~/.claude/skills/pstack/SKILL.md)")" 2>/dev/null && pwd || echo ~/.claude/skills/pstack)
LOCAL_VERSION=$(cat "$PSTACK_DIR/VERSION" 2>/dev/null || echo "unknown")
echo "PSTACK_DIR: $PSTACK_DIR"
echo "LOCAL_VERSION: $LOCAL_VERSION"
```

## Upgrade Flow

1. Check it's a git repo (if not, re-clone):

```bash
if git -C "$PSTACK_DIR" rev-parse --git-dir > /dev/null 2>&1; then
  echo "GIT_REPO: yes"
else
  echo "GIT_REPO: no"
fi
```

**If GIT_REPO is yes:** pull and re-setup:

```bash
cd "$PSTACK_DIR"
git pull --ff-only origin main
NEW_VERSION=$(cat VERSION)
echo "$LOCAL_VERSION" > ~/.pstack/just-upgraded-from
bash setup
echo ""
echo "pstack upgraded: $LOCAL_VERSION → $NEW_VERSION"
```

**If GIT_REPO is no:** re-clone into the same location:

```bash
PARENT=$(dirname "$PSTACK_DIR")
REPO_URL="https://github.com/suhitanantula/pstack.git"
TMP="$PARENT/pstack-upgrade-tmp"
git clone "$REPO_URL" "$TMP"
mv "$PSTACK_DIR" "$PARENT/pstack-old-$(date +%s)"
mv "$TMP" "$PSTACK_DIR"
NEW_VERSION=$(cat "$PSTACK_DIR/VERSION")
echo "$LOCAL_VERSION" > ~/.pstack/just-upgraded-from
bash "$PSTACK_DIR/setup"
echo ""
echo "pstack re-cloned and upgraded: $LOCAL_VERSION → $NEW_VERSION"
```

## After Upgrade

Tell the user: "pstack is now at v{NEW_VERSION}."

If the version didn't change, say: "Already on the latest version ({LOCAL_VERSION})."
