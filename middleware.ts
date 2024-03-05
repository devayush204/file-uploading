import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: ["/((?!.+\\.[\\w]+$|_next).*)", "/api/send"], // Add '/api/send' to ignoredRoutes
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
