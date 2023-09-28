import {createClient} from '@sanity/client'

import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'b4m33a8x',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03',
  token:
  'skSXJpn5YJ5YSAhtDsSTr7OLaNoHl7svNQ6Cgs53Ik3widOKUGaSEiVcHkyBihykM2nQoSp7NPmuMaoCEGhxAmsmkODDl40RZZ1U1rzt5aCiSaJBLtcYVDQMSTwxfYMqWAZHEJTSKSX3EI9gb4FaVqMdvBsKn4ZMJuUySoV0gi6x0ScP4Dev', 
  ignoreBrowserTokenWarning: true,
})



const builder = imageUrlBuilder(client)

export const UrlFor=(source)=>{
  
  return builder.image(source)
  
}