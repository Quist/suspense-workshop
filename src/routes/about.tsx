import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../app/aboutPage/AboutPage.tsx";

export const Route = createFileRoute("/about")({
  component: () => <AboutPage />,
});
