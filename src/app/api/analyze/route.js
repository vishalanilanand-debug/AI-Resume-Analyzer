import { model } from "../../../lib/gemini";
export async function POST(req) {

  try {

    const body = await req.json();

    const resumeText = body.resumeText;

    const prompt = `
      Analyze this resume professionally.

      Give:
      1. ATS Score
      2. Skills
      3. Resume Summary
      4. Weaknesses
      5. Suggestions

      Resume:
      ${resumeText}
    `;

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response.text();

    return Response.json({
      success: true,
      data: response,
    });

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message,
    });

  }

}