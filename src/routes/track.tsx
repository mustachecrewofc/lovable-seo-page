import { createFileRoute } from "@tanstack/react-router";
import TrackPage from "../pages/TrackPage";

export const Route = createFileRoute("/track")({
  component: TrackPage,
});
