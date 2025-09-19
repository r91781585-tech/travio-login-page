# Travio Login Page

A modern, responsive login page built with Next.js 14, TypeScript, and Tailwind CSS. This project recreates the Travio login interface with a clean design featuring social authentication options and comprehensive form handling.

## ✨ Features

- 🎨 **Modern Design**: Clean, minimalist interface matching the Travio brand
- 📱 **Responsive Layout**: Works seamlessly on desktop and mobile devices
- 🔐 **Form Validation**: Comprehensive client-side validation with real-time feedback
- 🎭 **Social Login**: Integration ready for Twitter, Facebook, and LinkedIn
- ⚡ **Next.js 14**: Latest Next.js with App Router and TypeScript
- 🎯 **Type Safety**: Full TypeScript support throughout the application
- 💨 **Tailwind CSS**: Utility-first CSS framework for rapid styling
- 🧩 **Reusable Components**: Modular component architecture
- 🪝 **Custom Hooks**: Clean form state management with custom React hooks
- 🛡️ **Error Handling**: Robust error handling and user feedback
- 🔌 **API Ready**: Backend API routes prepared for authentication

## 🎨 Design Elements

- **Color Scheme**: Light gray background (#E5E5E5) with yellow accent (#F5E663)
- **Typography**: Clean, bold fonts for headers and readable text
- **Layout**: Split-screen design with clean yellow section and login form
- **Interactive Elements**: Hover effects, focus states, and loading indicators
- **Accessibility**: Proper ARIA labels and keyboard navigation support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/r91781585-tech/travio-login-page.git
cd travio-login-page
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables:**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
travio-login-page/
├── app/
│   ├── api/auth/login/       # Authentication API routes
│   ├── globals.css           # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main login page component
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Input.tsx             # Reusable input component
│   ├── SocialButton.tsx      # Social authentication button
│   └── index.ts              # Component exports
├── hooks/
│   └── useLoginForm.ts       # Custom form handling hook
├── lib/
│   ├── utils.ts              # Utility functions
│   └── validation.ts         # Form validation logic
├── types/
│   └── index.ts              # TypeScript type definitions
├── public/                   # Static assets
├── .env.example              # Environment variables template
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🔧 Customization

### Colors
Custom colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'travio-yellow': '#F5E663',
  'travio-gray': '#E5E5E5',
}
```

### Form Validation
Validation rules are in `lib/validation.ts`. Customize validation logic:
```typescript
export const validateEmail = (email: string): string | undefined => {
  // Add your custom validation logic
}
```

### API Integration
The login API route is in `app/api/auth/login/route.ts`. Replace the demo logic with your authentication system:
```typescript
// TODO: Implement actual authentication logic
// Example: JWT tokens, database queries, etc.
```

### Social Authentication
Social login buttons are ready for integration in `components/SocialButton.tsx`. Add your OAuth logic:
```typescript
const handleSocialLogin = () => {
  // Implement OAuth flow for each provider
}
```

## 🧩 Components

### Button Component
```tsx
<Button variant="primary" size="lg" fullWidth>
  Log in
</Button>
```

### Input Component
```tsx
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  error={errors.email}
/>
```

### Social Button
```tsx
<SocialButton provider="twitter">
  <FaTwitter className="w-8 h-8" />
</SocialButton>
```

## 🪝 Custom Hooks

### useLoginForm Hook
```tsx
const { formData, formState, updateField, submitForm } = useLoginForm()
```

Provides:
- Form state management
- Real-time validation
- Loading states
- Error handling

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🔐 Authentication Flow

1. **Client-side validation** - Real-time form validation
2. **API request** - Secure POST to `/api/auth/login`
3. **Server validation** - Backend validation and authentication
4. **Response handling** - Success/error state management
5. **User feedback** - Loading states and error messages

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
This Next.js app can be deployed to:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify
- Heroku

## 🔮 Future Enhancements

- [ ] NextAuth.js integration
- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] JWT token management
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Two-factor authentication
- [ ] Remember me functionality
- [ ] Rate limiting
- [ ] Session management
- [ ] User dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help with the project:
- Open an issue on GitHub
- Check the documentation
- Review the code comments

## 🙏 Acknowledgments

- Design inspiration from modern authentication interfaces
- Built with the amazing Next.js and Tailwind CSS ecosystems
- Icons provided by React Icons

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

### Demo Credentials
For testing the login functionality:
- Email: `demo@travio.com`
- Password: `password123`