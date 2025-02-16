import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("home","home/HomePage.tsx"),
  route("watching","watching/WatchingPage.tsx"),
  route("traveling","traveling/TravelingPage.tsx"),
  route("coding","coding/CodingPage.tsx"),
  route("reading","reading/ReadingPage.tsx"),
  route("learning","learning/LearningPage.tsx"),
] satisfies RouteConfig;
