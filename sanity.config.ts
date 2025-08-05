import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schema } from './sanity/schema';
import { visionTool } from '@sanity/vision';

const config = defineConfig({
  projectId: '9b55bjgt',
  dataset: 'production',
  title: 'School Website',
  schema,
  plugins: [deskTool(), visionTool()],
  studio: {
    components: {
      navbar: undefined
    }
  },
  apiVersion: '2024-03-01'
});

export default config;