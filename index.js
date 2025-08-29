// This is the code for your serverless function (e.g., a Google Cloud Function).
// It securely handles the API call to Google Vision AI.

const functions = require('@google-cloud/functions-framework');
const Vision = require('@google-cloud/vision');

// Your Google Cloud Vision API Key
const GOOGLE_API_KEY = 'AIzaSyAtGsDtHxveawmNMP686em3fl8TiwIZvms';

// Create a client for the Vision API
const visionClient = new Vision.ImageAnnotatorClient({
  key: GOOGLE_API_KEY
});

// Register an HTTP function that can be called from your website
functions.http('processMenuImage', async (req, res) => {
  // Set CORS headers to allow requests from your website
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Pre-flight request; reply successfully
    res.status(204).send('');
    return;
  }

  try {
    // Get the base64-encoded image from the request body
    const imageBase64 = req.body.image;
    if (!imageBase64) {
      throw new Error('No image data provided.');
    }

    // Prepare the request for the Vision API
    const request = {
      image: {
        content: imageBase64,
      },
      features: [{ type: 'TEXT_DETECTION' }],
    };

    // Call the Vision API
    const [result] = await visionClient.textDetection(request);
    const detections = result.textAnnotations;
    
    // The first result is the full text block, which we can send back
    const fullText = detections.length > 0 ? detections[0].description : '';

    // In a real application, you would parse this text to find menu items.
    // For now, we'll send the raw text back and use mock data on the front-end.
    console.log('OCR successful. Full text found:', fullText.substring(0, 100) + '...');

    // For this example, we still resolve with mock data after a successful scan.
    // This demonstrates the connection is working.
    const mockOcrResult = [
        { id: 1, name: 'Ribeye Steak', variant: '300g', modifiers: 'Mushroom Sauce, Chips', category: 'Main Course', price: 250.00 },
        { id: 2, name: 'Calamari', variant: 'Starter', modifiers: 'Lemon Butter', category: 'Appetizers', price: 95.50 },
        { id: 3, name: 'Greek Salad', variant: '', modifiers: 'No Feta', category: 'Salads', price: 80.00 },
    ];

    res.status(200).json(mockOcrResult);

  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Error processing image.');
  }
});
