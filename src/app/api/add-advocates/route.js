import { connectToDatabase } from "@/lib/dbConnect";
import Advocate from "@/lib/advocate-model";

export async function POST(req) {
  await connectToDatabase();
  try {
    const doc = await req.json();
    const advocate = new Advocate(doc);
    await advocate.save();
    return Response.json({ message: "Advocate added successfully!" });
  } catch (error) {
    return Response.json({ error: "Failed to add advocate" });
  }
}
