import logoUser from './assets/user.jpg'
import MenuLateral from './MenuLateral'
export const PanelControl = () => {
  return (
    <section className="panel-control">
      <MenuLateral />
      <div className="panel-control-contenido">
        <h1>Mensaje de bienvenida</h1>
      </div>
    </section>
  )
}

export default PanelControl

