# Design import (feature/magicpatterns-redesign)

This branch is a safe staging area for importing the MagicPatterns export and iterating on the visual redesign for commarkai.net.

## Reference

- **MagicPatterns Preview URL**: https://project-commarkai-floating-text-landing-page-400.magicpatterns.app/#
- **Google Drive Export Link**: https://drive.google.com/file/d/1qAyXvN3fhgAwvmAp9XUhf5fhyNYae8dM/view?usp=sharing

## How to provide files for this branch:

- **Option A**: Attach the exported ZIP from MagicPatterns to this PR as a file, or upload the ZIP to Google Drive/Dropbox and paste the link in the PR comments.
- **Option B**: If MagicPatterns supports GitHub export, push the exported files to a fork or temporary repo and link it here.
- **Option C**: Upload only the specific files you want added (SVG logos, images, CSS, and the hero HTML snippet) by replying in this conversation with the files attached; I will then update the branch.

## What I'll do once you provide files:

- Integrate assets into `/public` or `/design/import`
- Add a preview route (`/preview/hero`) or update `public/design-hero-prototype/index.html`
- Update `tokens.css` and commit the color tokens
- Open or update the PR with screenshots & preview URL

## Preview locally

To preview the hero prototype locally:

```bash
# Open the static HTML file directly in your browser
open public/design-hero-prototype/index.html

# Or run the dev server and navigate to the file
npm run dev
```

Please include the reference image from this conversation for context.
