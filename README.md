# Arvind is...

building a website for all things Arvind. Come visit [arvind.is](https://arvind.is) to see what I'm up to!

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

For local development, run:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

## Building for Production

To build the app for production, run:

```bash
npm run build
```

## Deployment

### AWS Amplify

You can deploy this app in AWS Amplify with the following amplify.yaml configuration file:

```yaml
version: 1
backend:
  phases:
    build:
      commands:
        - npm ci --cache .npm --prefer-offline
        - npx ampx pipeline-deploy --branch $AWS_BRANCH --app-id $AWS_APP_ID
frontend:
  phases:
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: ./build/client
    files:
      - '**/*'
  cache:
    paths:
      - .npm/**/*
```

---

Built with ❤️ using React Router.