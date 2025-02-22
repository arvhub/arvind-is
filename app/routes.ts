import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("WelcomePage.tsx"),
  route("home", "home/HomePage.tsx"),
  route("watching", "watching/WatchingPage.tsx"),
  route("traveling", "traveling/TravelingPage.tsx"),
  route("coding", "coding/CodingPage.tsx"),
  route("reading", "reading/ReadingPage.tsx"),
  route("learning", "learning/LearningPage.tsx"),
  ...prefix("on", [
    index("on/OnDashboardPage.tsx"),
    route("github", "on/GithubPage.tsx"),
  ]),
] satisfies RouteConfig;
