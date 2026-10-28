import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

type WebhookBody = {
  _type?: string;
};

export async function POST(request: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookBody>(
      request,
      process.env.SANITY_REVALIDATE_SECRET,
    );

    if (!isValidSignature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 },
      );
    }

    if (body?._type !== "caseStudy") {
      return NextResponse.json({ message: "Ignored" });
    }

    revalidateTag("case-study", { expire: 0 });
    revalidatePath("/");
    revalidatePath("/work");
    revalidatePath("/services");
    revalidatePath("/sitemap.xml");

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error("Sanity revalidation failed:", error);
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 },
    );
  }
}
