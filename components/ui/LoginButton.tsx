import { FaG } from "react-icons/fa6"
import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

export const LoginGoogleButton = () => {
    return (
        <form action={async () => {
            "use server";
            await signIn("google");
        }}>
            <Button className="w-full gap-2 bg-orange-400 cursor-pointer hover:bg-orange-500" variant="default">
                <FaG className="size-5" />
                Sign In With Google
            </Button>
        </form>
    )
}