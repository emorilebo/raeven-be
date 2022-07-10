export default {
  name: 'store',
  title: 'Store ',
  type: 'document',
  fields: [
   {
    name: "name",
    type: "string",
    title: "Store Name",
    validation: (Rule)=>Rule.required(),
   },
   {
    name: "short_description",
    type: "string",
    title: "Short Description",
    validation: (Rule)=>Rule.max(200),
   },
   {
    name: "iamge",
    type: "image",
    title: "Image of the Store",
   },
   {
    name: "lat",
    type: "number",
    title: "Latitude of the Shop",
   },
   {
    name: "long",
    type: "number",
    title: "Longitude of the Shop",
   },
   {
    name: "address",
    type: "string",
    title: "Store Address",
    validation: (Rule)=>Rule.required(),
   }
  ],
}
