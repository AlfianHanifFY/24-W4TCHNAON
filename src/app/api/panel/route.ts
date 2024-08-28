import { type NextRequest, NextResponse } from "next/server";
import { renderTrpcPanel } from "@metamorph/trpc-panel";
import { appRouter } from "../../../server/api/root";

export function GET(_: NextRequest) {
  const panelHtml = renderTrpcPanel(appRouter, {
    url: "https://24-w4-tchnaon-cls6-8kqvyiqyh-alfianhaniffys-projects.vercel.app/api/trpc",
    transformer: "superjson",
  });

  return new NextResponse(panelHtml, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
