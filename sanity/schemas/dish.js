export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'string',
      validation: (Rule)=> Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price of the item in Naira',
      type: 'number',
    },
  ],
}
