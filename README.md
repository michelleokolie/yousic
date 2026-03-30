# Yousic Project Website

This is the project website for **Yousic** - a personal music manager app developed by HighSchoolMusical Inc.

## Deployed Version

**Live Site:** [Add your deployed URL here after publishing to Vercel]

If you've deployed to Vercel, the site is accessible at the URL provided after deployment.

---

## Running Locally

### Prerequisites

- Node.js 18+ installed
- npm, pnpm, or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd [repo-name]/website
   ```

2. **Install dependencies**
   ```bash
   # Using pnpm (recommended)
   pnpm install

   # Or using npm
   npm install

   # Or using yarn
   yarn install
   ```

3. **Run the development server**
   ```bash
   # Using pnpm
   pnpm dev

   # Or using npm
   npm run dev

   # Or using yarn
   yarn dev
   ```

4. **Open in browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

---

## Project Structure

```
website/
├── app/
│   ├── globals.css      # Global styles with Yousic color palette
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main page component
├── components/
│   ├── hero-section.tsx       # Project overview & vision
│   ├── features-section.tsx   # Major features
│   ├── demo-section.tsx       # Product demonstration
│   ├── team-section.tsx       # Team members & contributions
│   ├── postmortem-section.tsx # Development reflection
│   ├── navigation.tsx         # Site navigation
│   └── footer.tsx             # Site footer
├── README.md            # This file
└── package.json         # Dependencies
```

---

## Technologies Used

- **Next.js 16** - React framework
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Type safety
- **Lucide React** - Icons

---

## Customization Notes

Before submitting, update the following:

1. **Team Section** (`components/team-section.tsx`)
   - Replace placeholder team member names with actual names
   - Update roles, contributions, and skills for each member

2. **Postmortem Section** (`components/postmortem-section.tsx`)
   - Fill in the Iteration 2 improvement area details
   - Add your actual "What Went Well" and "What Went Wrong" items
   - Update architecture, project size, and technical debt sections

3. **Demo Section** (`components/demo-section.tsx`)
   - Replace the video placeholder with your actual demo recording
   - Update user flow descriptions as needed

4. **Footer** (`components/footer.tsx`)
   - Add your actual GitHub repository link

---

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Deploy automatically

### Option 2: GitHub Pages

1. Build the static export:
   ```bash
   pnpm build
   ```
2. Deploy the `out` folder to GitHub Pages

---

## Contact

HighSchoolMusical Inc. - COMP 3350 Project Team
