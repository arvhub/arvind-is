# Arvind is...

building a website for all things Arvind. Come visit [arvind.is](https://arvind.is) to see what I'm up to!

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

- `Dockerfile` - for npm

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

---

Built with ❤️ using React Router.