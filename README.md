# Project Portfolio Showcase

A modern, filterable portfolio showcasing various web projects.

## Deployment to GitHub Pages

This project is configured for easy deployment to GitHub Pages.

### Step 1: Update Configuration

Before deploying, you need to update two files with your GitHub information:

1.  **`package.json`**:
    -   Find the `"homepage"` line.
    -   Replace `https://<your-github-username>.github.io/<your-repo-name>` with your actual GitHub Pages URL.

2.  **`vite.config.ts`**:
    -   Find the `base` property.
    -   Replace `'/<your-repo-name>/'` with your repository name (e.g., `'/my-cool-portfolio/'`).

### Step 2: Install Dependencies

Open your terminal and run the following command to install all the necessary packages:

```bash
npm install
```

### Step 3: Deploy

After the installation is complete, run the deploy script:

```bash
npm run deploy
```

This command will automatically build the project and push the production-ready files to a `gh-pages` branch on your repository.

### Step 4: Configure GitHub Repository

1.  Go to your repository settings on GitHub.
2.  Navigate to the "Pages" section.
3.  Under "Build and deployment", select "Deploy from a branch" as the source.
4.  Choose the `gh-pages` branch and the `/ (root)` folder.
5.  Save the changes.

Your website should be live at the URL you specified in the `homepage` field within a few minutes.

## Local Development

To run the project on your local machine for development:

```bash
npm run dev
```

This will start a local development server.
