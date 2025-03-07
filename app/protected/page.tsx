import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScX-UhKmbKFdn0izH7e5y8WpKpehhm3Q_CUSuhLPHjFn-FNug/viewform?embedded=true"
        width="640"
        height="466"
      >
        Loading…
      </iframe>
    </div>
  );
}
