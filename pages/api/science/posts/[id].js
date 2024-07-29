import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Cors from 'cors';

// Initialize CORS middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
  origin: '*', // Allow all origins
});

const postsDirectory = path.join(process.cwd(), 'data/posts');

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export function getPostById(id) {
  try {
    const fullPath = path.join(postsDirectory, `${id}.mdx`);
    if (!fs.existsSync(fullPath)) {
      throw new Error('Post not found');
    }
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
      content: matterResult.content,
    };
  } catch (error) {
    console.error('Error reading post:', error.message);
    throw error;
  }
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    try {
      const post = getPostById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}