const Navbar = ({show}) => {
    return (
        <div className={show ? 'sidenav active': 'sidenav'}>
            <ul>
                <li>
                    <a href='/'>Juegos</a>
                </li>
                <li>
                    <a href='/'>Lista de Deseos</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar