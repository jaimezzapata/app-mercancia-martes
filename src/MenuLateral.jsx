import logoUser from './assets/user.jpg'
function MenuLateral() {
  return (
    <aside className="panel-control-lateral">
      <div>
        <img src={logoUser} alt="Logo" />
      </div>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </aside>
  )
}

export default MenuLateral