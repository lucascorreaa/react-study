// uso de props
// export default function Filho({ title, description, image, imgAlt }) {
//   return (
//     <div>
//       <img src={image} alt={imgAlt} />
//       <div>
//         <p>{title}</p>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// }

// uso da prop children
// function Filho({ children }) {
//   return <div className="filho">{children}</div>;
// }

// uso da prop de tipo number
// function Filho({ idade }) {
//   return <p>{idade}</p>
// }

// uso da prop tipo boolean
// function Filho({ approved }) {
//   return (
//     <>
//     // isso é verdadeiro ? retorno :(se não) retorno
//       {approved ? <p>aprovado</p> : <p>reprovado</p>}
//     </>
//   );
// }

// uso de props com evento onClick
// function Filho({ onAlert }) {
//   return <button onClick={onAlert} >Receba seu alert</button>
// }

// uso de prop com valor default
// function Filho({ nome="Mundo" }) {
//   return <p>Olá, {nome}!</p>
// }
