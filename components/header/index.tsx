import styles from './header.module.css';

export default function Header(){
    return(
        <header className={styles.container}>
            <h3 className={styles.title}>
                Bem-vindo! Aqui a gente aprende junto!
            </h3>
        </header>
    )
};