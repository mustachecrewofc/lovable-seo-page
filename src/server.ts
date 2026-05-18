import handler, { createServerEntry } from "@tanstack/react-start/server-entry";

export default createServerEntry({
  fetch(request, env, ctx) {
    return handler.fetch(request, env, ctx);
  },
});