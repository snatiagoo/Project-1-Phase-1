import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(['/']);
// we set home ( / ) to be the only accessible page without being logged in

// To block only some pages do this:
/*



const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => { 
    if (isProtectedRoute(req)) await auth.protect()
})


*/



export default clerkMiddleware(async (auth, request) => {
   
    if (!isPublicRoute(request)){
      // if not a public route and not logged in:
      await auth.protect() // request log in
    }
  }
);





export const config = {
    matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
    // Always run for Clerk-specific frontend API routes
    '/__clerk/(.*)',
  ],
}