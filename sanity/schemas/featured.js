export default{
    name: "featured",
    title: "Featured Menu categories",
    type: "document",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Featured Category name",
            validation: (Rule)=> Rule.required(),
        },
        {
            name: "short_description",
            type: "string",
            title: "Short Description",
            validation: (Rule)=> Rule.required(),
        },
        {
            name: "store",
            type: "array",
            title: "Store",
            of: [{type: "reference", to: [{type: "store"}]}],
        }
    ]
}