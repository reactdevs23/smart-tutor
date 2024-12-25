import prisma from '@/lib/prisma';
import { success } from '@/lib/response.helper';
import { NextRequest } from 'next/server';
const GET = async (req: NextRequest) => {
    console.log("Public Post")
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
            // published: true,
            isPrivate: false
        }
    });
    return Response.json(success(posts))
}

export { GET };
