import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={`${styles.navigation} container` }>
      <div className='logo'>
        <img src='/images/logo.png' alt='logo-image'/>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        
      </ul>
    </nav>
  )
}

export default Navbar
