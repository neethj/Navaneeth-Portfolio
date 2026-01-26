# Image Upload Guide

## Folder Structure

Your images should be placed in the `public/images/` directory. Here's the structure:

```
public/images/
├── avatar.jpg                    # Your profile picture (already exists)
├── projects/                     # Project images folder
│   ├── build-mode-ai/
│   │   └── cover.jpg
│   ├── music-genre-classifier/
│   │   └── cover.jpg
│   ├── career-capital/
│   │   └── cover.jpg
│   ├── student-performance-predictor/
│   │   └── cover.jpg
│   ├── stay-abroad/
│   │   └── cover.jpg
│   └── marketing-analysis/
│       └── cover.jpg
└── og/
    └── home.jpg                  # Open Graph image for social sharing
```

## Steps to Upload Images

### 1. Upload Your Avatar

**Location:** `public/images/avatar.jpg`

- Replace the existing `avatar.jpg` with your own photo
- Recommended size: 400x400px or larger (square)
- Formats: JPG, PNG, WebP
- The avatar is used in:
  - About page
  - Hero section button
  - Footer

### 2. Upload Project Images

**Location:** `public/images/projects/[project-name]/cover.jpg`

Create folders for each project and add cover images:

1. **Build Mode AI**
   - Folder: `public/images/projects/build-mode-ai/`
   - Image: `cover.jpg`
   - Recommended: 1200x675px (16:9 aspect ratio)

2. **Music Genre Classifier**
   - Folder: `public/images/projects/music-genre-classifier/`
   - Image: `cover.jpg`

3. **Career Capital**
   - Folder: `public/images/projects/career-capital/`
   - Image: `cover.jpg`

4. **Student Performance Predictor**
   - Folder: `public/images/projects/student-performance-predictor/`
   - Image: `cover.jpg`

5. **Stay Abroad**
   - Folder: `public/images/projects/stay-abroad/`
   - Image: `cover.jpg`

6. **Marketing Analysis**
   - Folder: `public/images/projects/marketing-analysis/`
   - Image: `cover.jpg`

### 3. Image Recommendations

- **Format:** JPG or WebP (for better compression)
- **Aspect Ratio:** 16:9 (1200x675px or similar)
- **File Size:** Keep under 500KB per image for fast loading
- **Quality:** High quality but optimized for web

## After Uploading

Once you've uploaded your images, the code will automatically use them. The project cards are already set up to display images when you add them to the `image` property in the project data.

## Current Image Paths in Code

- **Avatar:** `/images/avatar.jpg` (already configured)
- **Projects:** Will be `/images/projects/[project-name]/cover.jpg` (ready to use)

## Quick Reference

To update project images in code, change:
```typescript
image: null,
```
to:
```typescript
image: "/images/projects/build-mode-ai/cover.jpg",
```
