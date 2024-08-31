import './style.css'
import American from '../../assets/images/american-express.png'
import Master from '../../assets/images/mastercard.jpeg'
import Visa from '../../assets/images/visa.png'
import Alelo from '../../assets/images/alelo.png'

export default function Brand({brand}) {
  switch (brand) {
    case 'american': return <img src={American} alt='logo american express' />;
    case 'master': return <img src={Master} alt='logo master' />;
    case 'visa': return <img src={Visa} alt='logo visa' />;
    case 'alelo': return <img src={Alelo} alt='logo alelo' />;
    default: return <h1>Selecione uma brand disponível</h1>
  }
}

// clean code
// import './style.css'
// import American from '../../assets/images/american-express.png'
// import Master from '../../assets/images/mastercard.jpeg'
// import Visa from '../../assets/images/visa.png'
// import Alelo from '../../assets/images/alelo.png'

// const brandImages = {
//   american: American,
//   master: Master,
//   visa: Visa,
//   alelo: Alelo
// }

// export default function Brand({ brand }) {
//   const ImageSrc = brandImages[brand]
//   return ImageSrc 
//   ? 
//   <img src={ImageSrc} alt={`imagem da bandeira ${brand}`} />
//   :
//   <h1>Selecione uma prop de bandeira disponível</h1>
// }
