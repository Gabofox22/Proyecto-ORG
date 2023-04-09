import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.facebook.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>

            <a href='https://twitter.com/home'>
                <img src="/img/twitter.png" alt='Twitter' />
            </a>

            <a href='https://instagram.com/adriangabriel0204/'>
                <img src="/img/instagram.png" alt='Instagram' />
            </a>

        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Adrián Galíndez</strong>
    </footer>
}

export default Footer

