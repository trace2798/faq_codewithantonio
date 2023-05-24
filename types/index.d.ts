import type { Icon } from "lucide-react";

import { Icons } from "@/components/icons";

export type SiteConfig = {
    name: string
    description: string
    url: string
    ogImage: string
    links: {
      twitter: string
      github: string
    }
  }
  