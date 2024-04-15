import PrimaryLink from "@/Components/General/atoms/PrimaryLink";
import SecondaryLink from "@/Components/General/atoms/SecondaryLink";

export default function AuthLink() {
    return (
        <div className="flex gap-3">
            <SecondaryLink text="Register" href={route("register")} />
            <PrimaryLink text="Login" href={route("login")} />
        </div>
    );
}
