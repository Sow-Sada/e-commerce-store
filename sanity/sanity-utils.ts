import { createClient, groq } from "next-sanity";


export async function getProducts() {
  const client = createClient({
    projectId: "bjr53fhv",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-04-19",
  });
  
  return client.fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug":slug.current,
      "image": image.asset->url,
      "alt": image.alt,
      price
    }`
  );
}



 
