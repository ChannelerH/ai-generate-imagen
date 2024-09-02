import { signIn } from "next-auth/react";

export async function signInUseAuth({ redirectPath }: { redirectPath: string }) {
  const locale = localStorage.getItem('preferredLocale');
  const result = await signIn('google', {
     callbackUrl: `/${locale}${redirectPath}`
  });
  return result;
}
