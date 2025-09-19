# Travio Login Page

A modern, responsive login page built with Next.js 14, TypeScript, and Tailwind CSS. This project recreates the Travio login interface with a clean design featuring social authentication options.

## Features

- 🎨 **Modern Design**: Clean, minimalist interface matching the Travio brand
- 📱 **Responsive Layout**: Works seamlessly on desktop and mobile devices
- 🔐 **Form Validation**: Built-in form handling with React hooks
- 🎭 **Social Login**: Integration ready for Twitter, Facebook, and LinkedIn
- ⚡ **Next.js 14**: Latest Next.js with App Router
- 🎯 **TypeScript**: Full type safety throughout the application
- 💨 **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Design Elements

- **Color Scheme**: Light gray background (#E5E5E5) with yellow accent (#F5E663)
- **Typography**: Clean, bold fonts for headers and readable text
- **Layout**: Split-screen design with background placeholder and login form
- **Interactive Elements**: Hover effects and focus states for better UX

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/r91781585-tech/travio-login-page.git
cd travio-login-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
travio-login-page/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main login page component
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies
```

## Customization

### Colors
The design uses custom colors defined in `tailwind.config.js`:
- `travio-yellow`: #F5E663 (accent color)
- `travio-gray`: #E5E5E5 (background color)

### Social Authentication
The social login buttons are ready for integration. Add your authentication logic in the button click handlers in `app/page.tsx`.

### Form Handling
The login form includes basic state management. Extend the `handleSubmit` function to integrate with your authentication backend.

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library for social media icons
- **PostCSS**: CSS processing tool

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
This Next.js app can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help with the project, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS