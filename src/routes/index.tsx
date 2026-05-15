import { createFileRoute } from "@tanstack/react-router";
import SEOPage from "../pages/SEOPage";

export const Route = createFileRoute("/")({
  component: SEOPage,
});