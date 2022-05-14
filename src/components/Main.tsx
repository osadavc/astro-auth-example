import { signIn } from "@astro-auth/client";
import { ReactStateStore } from "@astro-auth/client";

const Main = () => {
  const user = ReactStateStore.useUser({ update: true });

  return (
    <div>
      <button
        onClick={() => {
          signIn({
            provider: "google",
          });
        }}
      >
        Sign In
      </button>

      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Main;
