import {
  defineArrayMember,
  defineField,
  defineType,
} from "sanity";
import { serviceCategories } from "../../content/services";

export const project = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "client",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "problem",
      title: "Problem",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "approach",
      title: "Approach",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 3 })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "scope",
      title: "Scope",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "outcome",
      title: "Outcome",
      type: "array",
      of: [defineArrayMember({ type: "text", rows: 3 })],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "serviceSlugs",
      title: "Services",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: {
        list: serviceCategories.map((service) => ({
          title: service.title,
          value: service.slug,
        })),
      },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "desktopImage",
      title: "Desktop screenshot",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile screenshot",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 1,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manual",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "client",
      subtitle: "industry",
      media: "desktopImage",
    },
  },
});
