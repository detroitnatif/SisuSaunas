# Sisu Saunas Website

A modern, responsive website for Sisu Saunas, built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Image slideshow
- Product showcase
- FAQ section
- Contact form
- About page
- Mobile-friendly navigation

## Prerequisites

- Node.js 18.x or later
- npm or yarn
- AWS account
- AWS CLI configured with appropriate credentials

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sisusaunas.git
cd sisusaunas
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your environment variables:
```env
NEXT_PUBLIC_SITE_URL=https://sisusaunas.com
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deploying to AWS

### Option 1: AWS Amplify (Recommended)

1. Install the AWS Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Initialize Amplify in your project:
```bash
amplify init
```

3. Add hosting:
```bash
amplify add hosting
```

4. Deploy:
```bash
amplify publish
```

### Option 2: AWS Elastic Beanstalk

1. Create a new Elastic Beanstalk application in the AWS Console.

2. Create a `Dockerrun.aws.json` file in the root directory:
```json
{
  "AWSEBDockerrunVersion": "1",
  "image": "node:18",
  "command": "npm start",
  "port": 3000
}
```

3. Create a `.ebignore` file:
```
.git
.gitignore
node_modules
.next
```

4. Install the Elastic Beanstalk CLI:
```bash
pip install awsebcli
```

5. Initialize Elastic Beanstalk:
```bash
eb init
```

6. Create and deploy to an environment:
```bash
eb create production
```

## Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_SITE_URL`: The URL of your website
- `AWS_REGION`: Your AWS region
- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@sisusaunas.com or create an issue in the repository.
