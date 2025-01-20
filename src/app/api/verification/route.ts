import { ROLES } from "@/lib/constant";
import prisma from "@/lib/prisma";
import { success } from "@/lib/response.helper";
import { removeRequest, requestVerify } from "@/lib/verification";
import { NextRequest } from "next/server";

export const GET = async (
    request: NextRequest,
) => {
    const response = { verify: false };
    const user_id = request.nextUrl.searchParams.get("user_id");
    const token = request.nextUrl.searchParams.get("token");

    if (!user_id || !token) {
        return Response.json(success(response));
    }
    try {
        const { verified, id, email, user_id: userId, role }: any = await requestVerify(token, user_id);
        if (!verified) {
            return Response.json(success(response));
        }
        if (role === ROLES.STUDENT) {
            await prisma.student.update({ where: { id: userId, }, data: { is_verified: true } });
            await removeRequest(email, userId);
            response.verify = true;
        } else if (role === ROLES.TEACHER) {
            await prisma.teacher.update({ where: { id: userId, }, data: { is_verified: true } });
            await removeRequest(email, userId);
            response.verify = true;
        }
        return Response.json(success(response));
    } catch (err) {
        console.error("Error verification: ", err);
        return Response.json(success(response));
    }
};

