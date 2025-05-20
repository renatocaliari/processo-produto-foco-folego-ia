import { PostHog } from "posthog-node"

export default function PostHogClient() {
  // Retorna um cliente mock se a chave não estiver disponível
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    if (process.env.NODE_ENV === "development") {
      console.log("PostHog key not found. Using mock client.")
    }
    // Cliente mock com métodos vazios
    return {
      capture: () => {},
      identify: () => {},
      shutdown: () => Promise.resolve(),
    } as any;
  }
  
  const posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    host: "https://us.i.posthog.com",
    flushAt: 1,
    flushInterval: 0,
  })
  return posthogClient
}
