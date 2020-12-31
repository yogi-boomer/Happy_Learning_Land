const questions = [
  {
    question: require('../../../../assets/sources/Img-Reciclaje/bolsadepapas.png'), name: "Bolsa de papas",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/cascaradeplatano2.png'), name: "Cáscara de plátano",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/botellarota.png'), name: "Botella",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/espejo.png'), name: "Espejo",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/caja2.png'), name: "Caja",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/hueso.png'), name: "Hueso",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png') },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png') },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png') },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/ventana.png'), name: "Ventana",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/pizza.png'), name: "Pizza",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/botellas.png'), name: "Botellas",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/periodico3.png'), name: "Periódico",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/Huesopescado.png'), name: "Hueso de pescado",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/botellacristal2.png'), name: "Botella de refresco",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/garrafa.png'), name: "Garrafa",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/melon.png'), name: "Melón",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/carne.png'), name: "Carne de res",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/botelladevidrio.png'), name: "Botella",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/cajajuego.png'), name: "Caja de jugo",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/papel2.png'), name: "Periódicos",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: true },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/manzanaverde.png'), name: "Manzana",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: true }
    ]
  },
  {
    question: require('../../../../assets/sources/Img-Reciclaje/botellaplastico.png'), name: "Botella",
    answers: [
      { id: "1", text: require('../../../../assets/sources/Img-Reciclaje/papel.png'), correct: false },
      { id: "2", text: require('../../../../assets/sources/Img-Reciclaje/plastico.png'), correct: true },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/cristal.png'), correct: false },
      { id: "3", text: require('../../../../assets/sources/Img-Reciclaje/organico.png'), correct: false }
    ]
  },
];

export default questions;