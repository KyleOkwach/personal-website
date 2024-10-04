import { defineField, defineType } from "sanity";

export const technologySelectType = defineType({
    name: 'technologySelect',
    title: 'Technology Select',
    type: 'object',
    fields: [
        defineField({
            name: 'technology',
            title: 'Technology',
            type: 'reference',
            to: [{ type: 'technology' }],
            validation: Rule => Rule.required()
        }),
    ]
}) 