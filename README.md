# ThreadDrop - AI-Powered T-Shirt Design Platform

ThreadDrop is a beautiful, modern web application that allows users to generate custom T-shirt designs using AI based on their mood, quotes, or ideas.

## Features

### ✨ Current Features
- **Beautiful Modern UI**: Glass-morphism design with smooth animations
- **AI Design Simulation**: Mock AI that generates design ideas based on user input
- **Interactive T-Shirt Preview**: Real-time mockup preview with generated designs
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Navigation**: Single-page app with seamless transitions

### 🚧 Features To Be Implemented
- **OpenAI Integration**: Real AI-powered design generation using GPT
- **DALL-E Integration**: AI image generation for visual designs
- **Printful Integration**: Real T-shirt printing and fulfillment
- **Firebase Authentication**: User accounts with Google sign-in
- **Design Gallery**: Save and manage user designs
- **Payment Processing**: Stripe integration for purchases
- **Admin Dashboard**: Order management and analytics

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd threaddrop
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx      # Main navigation component
│   ├── HomePage.tsx        # Landing page with hero section
│   ├── DesignPage.tsx      # Design creation interface
│   ├── AboutPage.tsx       # About page with contact form
│   └── TShirtMockup.tsx    # T-shirt preview component
├── utils/
│   └── mockAI.ts          # Mock AI functionality
├── App.tsx                # Main app component with routing
├── main.tsx              # App entry point
└── index.css             # Global styles

```

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure as a Single Page Application

## Environment Variables (For Future Features)

Create a `.env` file in the root directory:

```env
# OpenAI API
VITE_OPENAI_API_KEY=your_openai_api_key

# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id

# Printful API
VITE_PRINTFUL_API_KEY=your_printful_api_key

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## Future Integrations

### OpenAI Integration
```typescript
// Example implementation
const generateDesign = async (prompt: string) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Create a creative t-shirt design concept for: ${prompt}`,
    max_tokens: 100
  });
  return response.data.choices[0].text;
};
```

### Firebase Authentication
```typescript
// Example setup
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
```

### Printful Integration
```typescript
// Example product creation
const createProduct = async (design: DesignData) => {
  const response = await fetch('https://api.printful.com/products', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${PRINTFUL_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      // Product data
    })
  });
  return response.json();
};
```

## License

This project is licensed under the MIT License.

## Support

For support, email hello@threaddrop.com or create an issue in the GitHub repository.

---

Made with ❤️ using React, TypeScript, and Tailwind CSS#   t h r e a d d r o p  
 