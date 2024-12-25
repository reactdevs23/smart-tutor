import prisma from '@/lib/prisma';
import { success } from '@/lib/response.helper';
import { NextRequest } from 'next/server';
import { sessionUser } from '@/lib//session';
const GET = async (req: NextRequest) => {
    const user = await sessionUser();
    const posts = await prisma.post.findMany({
        include: {
            author: {
                select: {
                    name: true,
                    image: true,
                }
            }
        },
        where: {
            authorId: user?.id
        }
    });
    return Response.json(success(posts))
}

const POST = async (request: any) => {
    const requestData = await request?.json();
    const post = await prisma.post.create({ data: requestData });
    if (!post) {
        Response.error();
    }
    return Response.json(success(post));
}

export { GET, POST }