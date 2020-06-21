export default class RestoService {
  data = [
    {
      "title": "Салат Цезарь",
      "price": 120,
      "url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
      "category": "салаты",
      "id": 1
    },
    {
      "title": "Пицца Маргарита",
      "price": 100,
      "url": "https://www.nicolasalvatore.com/web/wp-content/uploads/2017/05/Pizza_Margherita_accademia_Barilla_1.jpg",
      "category": "пицца",
      "id": 2
    },
    {
      "title": "Неаполитанская Пицца",
      "price": 130,
      "url": "https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/decalogo_avpn_1.jpg",
      "category": "пицца",
      "id": 3
    },
    {
      "title": "Салат \"Греческий\"",
      "price": 80,
      "url": "https://assets.epicurious.com/photos/576454fb42e4a5ed66d1df6b/master/pass/greek-salad.jpg",
      "category": "салаты",
      "id": 4
    },
    {
      "title": "Ковбойский Стейк",
      "price": 250,
      "url": "https://i.cbc.ca/1.4491288.1516208229!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cowboysteak.jpg",
      "category": "мясо",
      "id": 5
    }
  ]

  getData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data)
      }, 1000)
    })
  }
}
