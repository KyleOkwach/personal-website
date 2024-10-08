import { type SchemaTypeDefinition } from 'sanity'
import { aboutType } from './aboutType'
import { projectType } from './projectType'
import { technologyType } from './technnologyType'
import { experienceType } from './experienceType'
import { technologySelectType } from './technologySelectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    aboutType,
    projectType,
    technologyType,
    technologySelectType,
    experienceType
  ]
}