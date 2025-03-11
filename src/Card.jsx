const Card = ({ usuario }) => {
  // console.log(usuario);
  return (
    <section className="card">
      <div>
        <p>Nombre: {usuario.nombre}</p>
        <p>Ciudad: {usuario.ciudad}</p>
        <p>Telefono: {usuario.telefono}</p>
      </div>
      <div>
        <p>Ver</p>
      </div>
    </section>
  )
}
export default Card