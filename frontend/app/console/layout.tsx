import type { ReactNode } from "react";

import { ConsoleLayout } from "@/components/console";

export default function ConsoleRootLayout({ children }: { children: ReactNode }) {
  return <ConsoleLayout>{children}</ConsoleLayout>;
}
