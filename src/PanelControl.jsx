import Card from './Card'
import MenuLateral from './MenuLateral'
import { usuarios } from './database'
const PanelControl = () => {

  return (
    <section className="panel-control">
      <MenuLateral />
      <div className="panel-control-contenido">
        {
          usuarios.map((usuario) => {
            return <Card />
          })
        }
      </div>
    </section>
  )
}

export default PanelControl

