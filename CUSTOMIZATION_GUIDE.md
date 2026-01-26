# Portfolio Customization Guide

## Current Template Structure vs. Your Requirements

### ✅ What Already Exists (Ready to Customize)

| Your Requirement | Template Location | Status |
|-----------------|------------------|--------|
| **1. Hero/Home** | `src/app/page.tsx` | ✅ Ready - Already customized |
| **2. About** | `src/app/about/page.tsx` | ✅ Ready - Needs content update |
| **3. Work Experience** | `src/app/about/page.tsx` (work section) | ✅ Ready - Needs content update |
| **4. Projects** | `src/app/work/page.tsx` + `src/app/work/[slug]/page.tsx` | ✅ Ready - Needs 7 project MDX files |
| **5. Contact** | `src/components/Footer.tsx` | ⚠️ Partial - Social links exist, needs dedicated section |

---

## Detailed Customization Plan

### 1. Hero/Home Page (`src/app/page.tsx`)

**Current State:** ✅ Already customized with your info
- Headline: "AI Educator & Full Stack Developer"
- Subline: Your tagline
- Navigation removed (as requested)

**What to Keep:**
- Current hero section structure
- Button linking to About page

**Optional Enhancements:**
- Add a "View Projects" CTA button alongside "About"
- Consider adding a brief stats section (e.g., "X+ Students Taught", "Y Projects Delivered")

---

### 2. About Page (`src/app/about/page.tsx`)

**Current Structure:**
- Introduction section
- Work Experience section
- Studies/Education section
- Technical Skills section
- Table of Contents (sidebar navigation)

**What Needs Customization:**

#### A. Introduction Section (`about.intro`)
**Location:** `src/resources/content.tsx` (lines 88-97)
- ✅ Already updated with your professional summary
- **Action:** Review and refine if needed

#### B. Work Experience Section (`about.work`)
**Location:** `src/resources/content.tsx` (lines 99-143)
- **Current:** Placeholder data (FLY, Creativ3)
- **Action Required:** Replace with your actual experience:
  - Teaching roles (AI education)
  - Consulting positions
  - Development roles
  - Format: `company`, `timeframe`, `role`, `achievements[]`

**Example Structure:**
```typescript
work: {
  display: true,
  title: "Work Experience",
  experiences: [
    {
      company: "Company Name",
      timeframe: "2023 - Present",
      role: "AI Educator & Consultant",
      achievements: [
        <>Achievement 1 with metrics</>,
        <>Achievement 2 with impact</>,
      ],
      images: [], // Optional: Add screenshots/demos
    },
    // Add more experiences...
  ],
}
```

#### C. Studies/Education Section (`about.studies`)
**Location:** `src/resources/content.tsx` (lines 145-157)
- **Current:** Placeholder data
- **Action Required:** Add your education:
  - Degrees
  - Certifications
  - Relevant courses/training

#### D. Technical Skills Section (`about.technical`)
**Location:** `src/resources/content.tsx` (lines 159-219)
- **Current:** Placeholder (Figma, Next.js)
- **Action Required:** Replace with your core competencies:
  - AI/ML technologies
  - Programming languages
  - Frameworks
  - Tools and platforms

**Note:** This section supports:
- Skill descriptions
- Tags with icons
- Optional images/screenshots

---

### 3. Projects/Work Page (`src/app/work/`)

**Current Structure:**
- Main listing page: `src/app/work/page.tsx`
- Individual project pages: `src/app/work/[slug]/page.tsx`
- Project content: `src/app/work/projects/*.mdx`

**What Needs Customization:**

#### A. Create 7 Project MDX Files
**Location:** `src/app/work/projects/`

**Current Projects (to replace):**
1. `automate-design-handovers-with-a-figma-to-code-pipeline.mdx`
2. `building-once-ui-a-customizable-design-system.mdx`
3. `simple-portfolio-builder.mdx`

**Required Projects (7 total):**
1. **3 GitHub Repositories** - Create MDX files for your open-source projects
2. **2 Client Sites** - Create MDX files for client work
3. **2 Additional Projects** - Create MDX files for other notable projects

**MDX File Structure:**
```markdown
---
title: "Project Name"
publishedAt: "2024-01-15"
summary: "Brief description of the project"
images:
  - "/images/projects/project-name/cover.jpg"
team:
  - name: "Your Name"
    role: "Role"
    avatar: "/images/avatar.jpg"
    linkedIn: "https://linkedin.com/in/neethj"
link: "https://github.com/neethj/repo-name" # For GitHub repos
# OR
link: "https://client-site.com" # For client sites
---

## Overview

Detailed project description...

## Key Features

- Feature 1
- Feature 2

## Technologies Used

- Technology 1
- Technology 2
```

**Project Types to Create:**
1. **GitHub Repo 1** - e.g., "AI Learning Platform"
2. **GitHub Repo 2** - e.g., "ML Model Deployment Tool"
3. **GitHub Repo 3** - e.g., "Full Stack Application"
4. **Client Site 1** - e.g., "Client Name - AI Solution"
5. **Client Site 2** - e.g., "Client Name - Web Platform"
6. **Additional Project 1** - e.g., "Educational Course"
7. **Additional Project 2** - e.g., "Consulting Project"

**Components Used:**
- `src/components/work/Projects.tsx` - Lists all projects
- `src/components/ProjectCard.tsx` - Individual project card display

---

### 4. Contact Section

**Current State:** ⚠️ Social links exist in Footer, but no dedicated Contact page

**Options:**

#### Option A: Enhance Footer (Recommended)
**Location:** `src/components/Footer.tsx`
- ✅ Already displays social links (GitHub, LinkedIn, Email)
- **Enhancement:** Add a contact form or more prominent contact section

#### Option B: Create Dedicated Contact Page
**Location:** Create `src/app/contact/page.tsx`
- Create a new route for `/contact`
- Add contact form using Once UI components
- Include email, social links, and possibly a calendar booking link

**Recommendation:** Start with Option A (enhance Footer), then add Option B if needed.

**Footer Customization:**
```typescript
// src/components/Footer.tsx
// Already has:
- Social links (GitHub, LinkedIn, Email)
- Copyright info
// Could add:
- Contact email prominently displayed
- "Let's Connect" CTA
- Calendar booking link (if you have one)
```

---

### 5. Navigation & Routes

**Current Routes:**
- `/` - Home (Hero)
- `/about` - About page
- `/work` - Projects listing
- `/work/[slug]` - Individual project pages
- `/blog` - Blog (optional, can disable)
- `/gallery` - Gallery (optional, can disable)

**Route Configuration:**
**Location:** `src/resources/once-ui.config.ts` (lines 19-25)

**Current:**
```typescript
const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};
```

**Recommendation:**
- Keep: `/`, `/about`, `/work`
- Disable: `/blog` (unless you want a blog)
- Disable: `/gallery` (unless you want a gallery)
- Add: `/contact` (if creating dedicated contact page)

---

## Files That Need Updates

### High Priority (Content Updates)

1. **`src/resources/content.tsx`**
   - ✅ Person info (already done)
   - ✅ Home/hero (already done)
   - ⚠️ About section - Work Experience (needs your CV data)
   - ⚠️ About section - Studies/Education (needs your education)
   - ⚠️ About section - Technical Skills (needs your competencies)

2. **`src/app/work/projects/`** (Create 7 new MDX files)
   - Replace 3 existing placeholder projects
   - Add 4 new project MDX files
   - Add corresponding images to `public/images/projects/`

### Medium Priority (Enhancements)

3. **`src/components/Footer.tsx`**
   - Enhance with more prominent contact information
   - Add calendar booking link (if applicable)

4. **`src/app/page.tsx`**
   - Consider adding "View Projects" CTA
   - Optional: Add stats/metrics section

### Low Priority (Optional)

5. **`src/app/contact/page.tsx`** (Create new)
   - Only if you want a dedicated contact page with form

6. **`src/resources/once-ui.config.ts`**
   - Update routes to disable blog/gallery if not needed
   - Add contact route if creating contact page

---

## Image Assets Needed

### Project Images
Create folders in `public/images/projects/` for each of your 7 projects:
```
public/images/projects/
  ├── project-1/
  │   ├── cover.jpg
  │   └── (additional images)
  ├── project-2/
  │   └── ...
  └── project-7/
      └── ...
```

### Avatar
- ✅ Already exists: `public/images/avatar.jpg`

---

## Step-by-Step Implementation Order

### Phase 1: Content Updates (Essential)
1. ✅ Update person info (DONE)
2. ✅ Update hero section (DONE)
3. ⚠️ Update About → Work Experience with your CV
4. ⚠️ Update About → Studies with your education
5. ⚠️ Update About → Technical Skills with your competencies

### Phase 2: Projects (Essential)
6. Create 7 project MDX files in `src/app/work/projects/`
7. Add project images to `public/images/projects/`
8. Test project pages render correctly

### Phase 3: Contact Enhancement (Recommended)
9. Enhance Footer with contact information
10. (Optional) Create dedicated Contact page

### Phase 4: Polish (Optional)
11. Disable unused routes (blog/gallery)
12. Add additional CTAs or sections
13. Review and refine all content

---

## Quick Reference: Key File Locations

| Component | File Path |
|-----------|-----------|
| Hero/Home | `src/app/page.tsx` |
| About Page | `src/app/about/page.tsx` |
| About Content | `src/resources/content.tsx` (about object) |
| Projects Listing | `src/app/work/page.tsx` |
| Project Pages | `src/app/work/[slug]/page.tsx` |
| Project Content | `src/app/work/projects/*.mdx` |
| Footer/Contact | `src/components/Footer.tsx` |
| Routes Config | `src/resources/once-ui.config.ts` |
| Person Info | `src/resources/content.tsx` (person object) |
| Social Links | `src/resources/content.tsx` (social array) |

---

## Next Steps

1. **Provide your CV data** and I can help populate the About sections
2. **List your 7 projects** with:
   - Project names
   - Descriptions
   - Links (GitHub repos or client sites)
   - Technologies used
3. **Decide on Contact approach** - Footer enhancement or dedicated page
4. **Review route configuration** - Disable blog/gallery if not needed

Would you like me to start with any specific section?
