import { redirect } from "next/navigation";
import { PLAY_STORE_URL } from "@/lib/site-content";

export default function DownloadPage() {
  redirect(PLAY_STORE_URL);
}
