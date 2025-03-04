import Card from './Card'
import MenuLateral from './MenuLateral'
const PanelControl = () => {
  return (
    <section className="panel-control">
      <MenuLateral />
      <div className="panel-control-contenido">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default PanelControl

