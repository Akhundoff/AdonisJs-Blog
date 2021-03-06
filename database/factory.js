'use strict'
const Factory = use('Factory')

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

Factory.blueprint('App/Models/Yazilar', (faker) => {
    return {
        baslik:faker.sentence({words:3}),
        url:faker.sentence({words:1}),
        kategori_url:"adonisjs",
        onecikan:0,
        onicerik:faker.sentence({words:55}),
        icerik:faker.paragraph()
   }
})