import {defineConfig} from "sanity"
import {deskTool} from "sanity/desk"
const config = defineConfig({

  projectId: "bjr53fhv",
  dataset: "production",
  title: "My e-commerce Website",
  apiVersion: "2023-04-19",
  basePath: "/admin",
  plugins: [deskTool()]

})



export default config