import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = ({ variant = "default" }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();
  const onHeader = variant === "header";

  if (isLoading) {
    return (
      <div
        className={`h-9 w-9 rounded-sm shrink-0 ${
          onHeader ? "bg-white/20 border border-white/30" : "bg-neutral-200 border border-gov-border"
        }`}
        aria-hidden
      />
    );
  }

  if (isAuthenticated) {
    return (
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <img
            src={user?.picture}
            alt="Profile"
            className={`h-9 w-9 rounded-sm object-cover shrink-0 border-2 ${
              onHeader ? "border-white/50" : "border-gov-border"
            }`}
          />
          <span
            className={`hidden md:block text-xs font-bold uppercase truncate max-w-[140px] lg:max-w-[220px] ${
              onHeader ? "text-white" : "text-neutral-900"
            }`}
          >
            {user?.name}
          </span>
        </div>
        <button
          type="button"
          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          className={
            onHeader
              ? "px-4 py-2 text-xs font-bold uppercase tracking-wide border-2 border-white text-white bg-transparent hover:bg-white/10 rounded-sm"
              : "px-3 py-1.5 text-xs font-bold uppercase tracking-wide border-2 border-gov-red text-gov-red bg-white hover:bg-gov-grey rounded-sm"
          }
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => loginWithRedirect({ appState: { returnTo: "/dashboard" } })}
      className={
        onHeader
          ? "px-4 py-2 text-xs font-bold uppercase tracking-wide bg-white text-gov-red border-2 border-white hover:bg-gov-panel rounded-sm"
          : "px-3 py-1.5 text-xs font-bold uppercase tracking-wide bg-gov-red text-white border-2 border-gov-red hover:bg-gov-redDark rounded-sm"
      }
    >
      Log In
    </button>
  );
};

export default AuthButton;
