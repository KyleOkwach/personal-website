import { type SchemaTypeDefinition } from 'sanity'
import { aboutType } from './aboutType'
import { projectType } from './projectType'
import { technologyType } from './technnologyType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutType,
    projectType,
    technologyType,
  ]
}