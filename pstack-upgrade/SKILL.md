---
name: pstack-upgrade
description: Upgrade pstack to the latest version from GitHub. Detects current version, pulls latest, re-runs setup, and reports what changed. Use when prompted with UPGRADE_AVAILABLE or to manually get the latest course materials.
---

# pstack-upgrade — Stay Current

Keeps your pstack skills in sync with the latest course version. When your instructor pushes updates — revised skills, new starter paths, improved guidance — this pulls them automatically.

## Check Your Version

```bash
cat ~/.claude/skills/pstack/VERSION
```

## Upgrade Flow

Run this to get the latest version:

```bash
PSTACK_DIR=$(cd "$(dirname "$(readlink -f ~/.claude/skills/pstack/SKILL.md 2>/dev/null || echo ~/.claude/skills/pstack/SKILL.md)")" 2>/dev/null && pwd || echo ~/.claude/skills/pstack)
LOCAL_VERSION=$(cat "$PSTACK_DIR/VERSION" 2>/dev/null || echo "unknown")
```

**If it's a git repo** (standard install):

```bash
cd "$PSTACK_DIR"
git pull --ff-only origin main
NEW_VERSION=$(cat VERSION)
echo "$LOCAL_VERSION" > ~/.pstack/just-upgraded-from
bash setup
echo "pstack upgraded: $LOCAL_VERSION → $NEW_VERSION"
```

**If not a git repo** (re-clone):

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
echo "pstack re-cloned and upgraded: $LOCAL_VERSION → $NEW_VERSION"
```

## After Upgrade

Tell the user: "pstack is now at v{NEW_VERSION}. Your skills have been updated."

If the version didn't change: "Already on the latest version ({LOCAL_VERSION})."
