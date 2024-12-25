import { options } from "@/src/app/api-old/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const sessionUser = async () => {
    const session = await getServerSession(options);
    return session?.user;
}