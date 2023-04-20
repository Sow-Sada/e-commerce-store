const product = {
name: "product",

title: "Product",

type: "document",

fields: [
  {
    name: "image",
    title: "Image",
    type: "image",
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: "alt",
        title: "Alt",
        type: "string",
      }
    ]
  },
  {
    name: "name",
    title: "Name",
    type: "string",
  },
  {
    name: "slug",
    title: "Slug",
    type: "slug",
    options: {
      source: "name",
      maxLength: 90
    }
  },
  
  {
    name: "price",
    title: "Price",
    type: "string"
  }
  

]

}

export default product