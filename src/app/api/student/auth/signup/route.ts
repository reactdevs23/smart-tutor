import { ecryptPassword } from '@/lib/hash';
import prisma from '@/lib/prisma';
import { error, success } from '@/lib/response.helper';

const GET = (request: any) => {
    return Response.json({ success: true })
}

const POST = async (request: any) => {
    const requestData = await request?.json();
    const { password, email } = requestData;
    const isExist = await prisma.student.findFirst({
        where: {
            email: email
        }
    });

    if (isExist) {
        return Response.json(error("Already Exist"));
    }

    const hashedPassword = await ecryptPassword(password);
    requestData.password = hashedPassword;
    const student = await prisma.student.create({ data: requestData });
    if (!student) {
        Response.error();
    }

    delete student['password' as string];
    return Response.json(success(student));
}

export { GET, POST };