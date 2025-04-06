export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbxEHFHQSpe_PvP0Ikvs0hkXQxf6SOK5OYqABkttuqMNFvpWHbVEDJqXGrDZhH--YSAhzQ/exec";

  try {
    // Validate request body
    const formData = await request.json();
    if (!formData || typeof formData !== "object") {
      return Response.json({ error: "Invalid form data" }, { status: 400 });
    }

    if (!scriptUrl) {
      throw new Error("GOOGLE_SCRIPT_URL is not defined");
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Google Script returned ${response.status}`);
    }

    const data = await response.json();
    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Form submission error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Error submitting form";
    return Response.json({ error: errorMessage }, { status: 500 });
  }
}
