import type { ReactNode } from "react";

import { AppLayout } from "@/components/app";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
