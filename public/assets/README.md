# Assets Folder Guide

This folder contains all the images used on the Pixels Group website.
Please replace the placeholder files with your actual images.

## Instructions

1. **Keep the filenames exactly the same** if possible.
2. If you change a filename (e.g., from `.jpg` to `.png`), you MUST update the corresponding path in `src/lib/constants.ts`.
3. **Optimize your images** before uploading (compress them, resize to max 1920px width) for best website performance.

## Folder Structure

- `/logo`: Company logos (`logo.png`, `icon.png`, `apple-touch-icon.png`)
- `/projects`: 6 folders, one for each project. Inside each:
  - `cover.jpg`: The main thumbnail shown in the gallery grid.
  - `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`: Images shown inside the lightbox.
- `/packages`: Images for the pricing tiers (`silver.jpg`, `gold.jpg`, `platinum.jpg`, `vip.jpg`)
- `/banners`: Full-width banner images (e.g., `hero.jpg`, `about.jpg`, `contact.jpg`)
- `/cost-plus`: Images related to the Cost Plus section (`cost-plus.jpg`)
- `/measurement`: Images related to measurements (`measurement.jpg`)
- `/payment`: Images related to payment systems (`payment-system.jpg`)
