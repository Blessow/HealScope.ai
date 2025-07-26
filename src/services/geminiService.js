const API_KEY = "AIzaSyCdf5_7K_-usm2z29v-Wr8Jc1_gvNxHW8w";


export async function analyzeImage(file, promptText = "Analyze this image.") {
  const base64 = await toBase64(file);

  const body = {
    contents: [
      {
        parts: [
          {
            inlineData: {
              mimeType: file.type,
              data: base64,
            },
          },
          {
            text: promptText,
          },
        ],
      },
    ],
  };

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Gemini API Error:", errorText);
    throw new Error("Gemini API request failed.");
  }

  const result = await response.json();
  return result?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
