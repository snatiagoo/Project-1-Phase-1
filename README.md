README

General idea → a work friction logger

A calendar based (not visible calendar, but rather date based) note organizer with several note titles which represent a work friction, which include inforamtion about what the problem is and how to fix it, dates to fix, actions to do, whatever. Like a note app but for work. 

A logged user can create and delete friction entries, with date and description.

Nothing more than that, basic UI and thats it.

DONE CRITERIA → landing page, sign in, add things log out, close, enter again, sign in and data persists. 

Necessary:

1. LOG IN → Clerk
2. UI DESIGN → Nextjs → buttons, cards when creating an entry, entry page, etc. It has to vary when creating/deleting/editing a new entry.
3. Functionality of UI → Nextjs → link pages, create/delete entry.
4. DATABASE (fetching and storing) → Neon postgres
5. DEPLOYMENT → Vercel


Slice 0 — Scaffold + deploy empty. pnpm create next-app, push to GitHub, import to Vercel, confirm the live URL loads. You're not done with slice 0 until the empty app is live on a real URL. This front-loads the deployment pain so it's never a surprise later.
Slice 1 — Auth only. Add Clerk, get sign-up / log-in working, show a blank "you're logged in" page. Push, deploy, confirm live. Don't touch the database yet.
Slice 2 — One record, create + display. Neon schema for your one table, a form to add one item, display the list. Push, deploy, confirm live.
Slice 3 — Finish CRUD. Edit and delete. Scope to current user only. Push, deploy.
Each slice on its own branch: git checkout -b feat/auth, work, commit, push, PR-to-self, merge, git checkout main, git pull. The Git reference toggle on your Phase 1 page has the exact commands if you blank on them.

https://project-1-phase-1-snatiagoos-projects.vercel.app?_vercel_share=kDy9OUCTpicOuG9x3v950PpeMQzTQvzG
