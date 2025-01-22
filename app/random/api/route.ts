import {sleep} from "../../sleep";


export async function GET() {
    const result = await sleep();
    return Response.json({ message: result })
}
