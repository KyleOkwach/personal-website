import { defineField, defineType } from "sanity";

export const technologyType = defineType({
    name: 'technology',
    title: 'Technology',
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
            name: 'image',
            title: 'Image',
            type: 'image',
            validation: Rule => Rule.required()
        }),
    ]
}) 