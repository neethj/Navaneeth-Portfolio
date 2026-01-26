# Mailchimp Setup Guide

## Step 1: Create a Mailchimp Account & List

1. Sign up for a [Mailchimp account](https://mailchimp.com) if you don't have one
2. Create a new **Audience/List** in your Mailchimp dashboard
3. Note your **Audience ID** (you'll need this later)

## Step 2: Get Your Mailchimp Embed Form Code

1. In Mailchimp, go to **Audience** → **Signup forms** → **Embedded forms**
2. Choose **Classic** or **Unstyled** form
3. Configure your form settings
4. Click **Copy Code** to get the HTML embed code

## Step 3: Extract the Form Action URL

From the Mailchimp embed code, you'll see something like:

```html
<form action="https://YOUR-USERNAME.us21.list-manage.com/subscribe/post?u=XXXXXXXXXX&id=YYYYYYYYYY" 
      method="post" 
      id="mc-embedded-subscribe-form" 
      name="mc-embedded-subscribe-form">
```

**Copy the entire `action` URL** - this is what you need!

## Step 4: Extract Hidden Fields

From the same Mailchimp embed code, find these hidden fields:

1. **Bot protection field** (looks like this):
```html
<input type="text" name="b_XXXXXXXXXX" value="" tabindex="-1">
```
   - Copy the `name` value (e.g., `b_c1a5a210340eb6c7bff33b2ba_0462d244aa`)

2. **Group/Interest fields** (if you have any):
```html
<input type="checkbox" name="group[3492][1]" id="mce-group[3492]-3492-0" value="1">
```
   - Copy the `name` and `id` values

## Step 5: Update Your Config File

Open `src/resources/once-ui.config.ts` and update:

```typescript
const mailchimp: MailchimpConfig = {
  action: "https://YOUR-USERNAME.us21.list-manage.com/subscribe/post?u=XXXXXXXXXX&id=YYYYYYYYYY", // ← Paste your form action URL here
  effects: {
    // ... existing effects config
  },
};
```

## Step 6: Update Hidden Fields in Mailchimp Component

Open `src/components/Mailchimp.tsx` and update:

1. **Line 168** - Update the bot protection field:
```typescript
name="b_XXXXXXXXXX"  // ← Replace with your b_ value from Mailchimp
```

2. **Lines 151-158** - Update group/interest fields (if you have any):
```typescript
name="group[3492][1]"  // ← Replace with your group name
id="mce-group[3492]-3492-0"  // ← Replace with your group ID
```

## Step 7: Test Your Form

1. Start your dev server: `npm run dev`
2. Navigate to your home page
3. Scroll to the newsletter section
4. Enter an email and click Subscribe
5. Check your Mailchimp dashboard to confirm the subscriber was added

## Current Configuration

**Location:** `src/resources/once-ui.config.ts` (line 143)

**Current action URL:** `"https://url/subscribe/post?parameters"` (placeholder - needs to be replaced)

## Troubleshooting

- **Form not submitting?** Check that the action URL is correct and includes all parameters
- **Subscribers not appearing?** Verify the hidden `b_` field matches your Mailchimp form
- **404 errors?** Make sure you copied the entire action URL including all query parameters

## Example Mailchimp Action URL Format

```
https://username.us21.list-manage.com/subscribe/post?u=abc123def456&id=xyz789
```

Where:
- `username` = Your Mailchimp username/subdomain
- `us21` = Your data center (varies: us1, us2, us21, etc.)
- `u=abc123def456` = Your unique user ID
- `id=xyz789` = Your audience/list ID
