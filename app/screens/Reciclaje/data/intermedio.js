const questions = [
  {
    question: require('../../../../assets/sources/Img-Reciclaje/cascaradeplatano2.png'), name: "Cáscara de plátano",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/botella2.png'), name: "Botella",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: true },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/sandia.png'), name: "Sandía",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/papel3.png'), name: "Papel",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/cascaradehuevo2.png'), name: "Cáscara de huevo",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/caja.png'), name: "Caja",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/helado.png'), name: "Helado",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/queso.png'), name: "Queso",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/empaquedecomida.png'), name: "Topper",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/bolsadepapas.png'), name: "Bolsa de papas",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: true },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/zanahoria.png'), name: "Zanahoria",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/cigarros.png'), name: "Cigarros",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/periodico.png'), name: "Periódico",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/manzana2.png'), name: "Manzana",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true },
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/hojadepapel.png'), name: "Hoja",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false },
    ]
  },
];

export default questions;