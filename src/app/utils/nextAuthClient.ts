import { signIn } from "next-auth/react";

export async function signInUseAuth({ redirectPath }: { redirectPath: string }) {
  const result = await signIn('google', {
    callbackUrl: redirectPath
  });
  return result;
}
