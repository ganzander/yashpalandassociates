import { connectToDatabase } from "@/lib/dbConnect";
import Advocate from "@/lib/advocate-model";

export async function GET() {
  await connectToDatabase();
  try {
    const advocates = await Advocate.find({});
    if (advocates.length === 0) {
      return Response.json({ data: [] });
    }
    return Response.json({ data: advocates });
  } catch (error) {
    return Response.json({ error: "Error fetching advocates" });
  }
}
