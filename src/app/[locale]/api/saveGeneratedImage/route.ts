import {insertGeneratedImage} from "@/app/[locale]/servers/user";

export async function POST(req: Request) {
    const { email, imageUrl } = await req.json();
  
    const result = await insertGeneratedImage(email, imageUrl);
    return Response.json(result);
}