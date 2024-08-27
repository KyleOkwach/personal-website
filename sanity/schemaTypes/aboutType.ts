import { defineField, defineType } from "sanity";

export const aboutType = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'jobTitle',
            title: 'Job Title',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'tagLine',
            title: 'Tag Line',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField(({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            validation: Rule => Rule.required()
        })),
        defineField({
            name: 'summary',
            title: 'summary',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'aboutMe',
            title: 'About Me',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'resume',
            title: 'Resume',
            type: 'file',
            validation: Rule => Rule.required()
        }),
    ]
})