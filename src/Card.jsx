const Card = ({ nombre, ciudad, telefono }) => {
  console.log(nombre, ciudad, telefono);
  
  return (
    <section className="card">
      <div>
        <p>Nombre: {nombre}</p>
        <p>Ciudad: {ciudad}</p>
        <p>Telefono: {telefono}</p>
      </div>
      <div>
        <p>Ver</p>
      </div>
    </section>
  )
}
export default Card