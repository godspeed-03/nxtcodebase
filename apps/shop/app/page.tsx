import Image from "next/image";
import styles from "./page.module.css";
import { cn } from "@repo/ui/cn";

export default function Home() {
  const isActive = false;

  return (
    <div className={cn("bg-blue-500", isActive && "text-white", "p-4")}>
      shop
    </div>
  )
}
