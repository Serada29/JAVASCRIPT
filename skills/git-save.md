# Skill: `/git-save`

## Overview
Inspects the working tree, analyzes what files and features were created or modified, writes an informative, structured commit message, commits the changes, and pushes directly to GitHub.

## Trigger
- `/git-save`
- `/save`
- "commit and push", "save progress to github"

## Procedures
1. Run `git status --short` and `git diff --stat` to detect all added, modified, and deleted files.
2. Analyze the diff and craft a descriptive commit message detailing what was created/updated.
3. Stage changes using `git add -A`.
4. Commit using `git commit -m "<message>"`.
5. Push to GitHub using `git push origin <branch>`.
6. Report the commit hash, message, and push confirmation to the user.

