import styles from './Layout.module.scss';

const Layout = (props) => {
    return (
        <main className={styles.layout}>
            <nav className={styles.navbar}>
                <div>Navbar</div>
            </nav>
            <section className={styles.content}>
                <div>{props.children}</div>
            </section>
            <footer className={styles.footer}>
                <div>Footer</div>
            </footer>
            <div className={styles.end}>
                <div>&copy;HackCovid2.0 | Github</div>
            </div>
        </main>
    );
};

export default Layout;
