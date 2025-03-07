"use server";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const exitUser = async (): Promise<void> => {
  const cookieStore = await cookies();

  cookieStore.delete("user");
  redirect("/");
};
