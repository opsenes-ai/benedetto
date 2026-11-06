import type { ReactNode } from "react";

import { AppLayout } from "@/components/app";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
