import { ecryptPassword } from '@/lib/hash';
import prisma from '@/lib/prisma';
import { error, success } from '@/lib/response.helper';

const GET = (request: any) => {
    return Response.json({ success: true })
}

const POST = async (request: any) => {
    const requestData = await request?.json();
    const { password, email } = requestData;
    const isExistUser = await prisma.teacher.findFirst({
        where: {
            email: email
        }
    });

    if (isExistUser) {
        return Response.json(error("Already Exist"));
    }

    const hashedPassword = await ecryptPassword(password);
    requestData.password = hashedPassword;
    const teacher = await prisma.teacher.create({ data: requestData });
    if (!teacher) {
        Response.error();
    }

    delete teacher['password' as string];

    return Response.json(success(teacher));
}

export { GET, POST };