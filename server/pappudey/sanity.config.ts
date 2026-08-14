import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'pappudey',

  projectId: 'ke1thyae',
  dataset: 'pappudey',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
