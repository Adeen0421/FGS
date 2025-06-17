import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './sanity/schema';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export default defineConfig({
  name: 'default',
  title: 'School Website',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [deskTool()],
  schema,
  stega: {
    enabled: false,
    studioUrl: '/studio'
  }
}); 