import { defineField, defineType, validation } from "sanity";

export const projectType = defineType({
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'url',
            title: 'URL',
            type: 'url',
        }),
        defineField({
            name: 'github',
            title: 'Github',
            type: 'url',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
        }),
        defineField({
            name: 'stack',
            title: 'Stack',
            type: 'array',
            of: [{ type: 'technologySelect' }],
            validation: Rule => Rule.required()
        })
    ]
}) 