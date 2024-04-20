import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import SecondaryLink from "@/Components/General/atoms/SecondaryLink";

export default function AuthLink({ authUser }) {
    return (
        <>
            {authUser ? (
                <PrimaryLink
                    text="Dashboard"
                    href={
                        authUser.role == "guru"
                            ? route("dashboard.guru")
                            : authUser.role == "admin"
                            ? route("dashboard.admin")
                            : route("dashboard.murid")
                    }
                />
            ) : (
                <div className="flex gap-3">
                    <SecondaryLink text="Register" href={route("register")} />
                    <PrimaryLink text="Login" href={route("login")} />
                </div>
            )}
        </>
    );
}
