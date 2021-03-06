import styles from './header.module.css';

export default function Header(){
    return(
        <header className={styles.container}>
            <h3 className={styles.title}>
                Faça compras sem sair de casa!
            </h3>
        </header>
    )
};