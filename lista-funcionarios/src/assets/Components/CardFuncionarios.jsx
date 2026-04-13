import styles from './CardFuncionarios.module.css'

function CardFuncionarios ({nome, cargo, dataAdmissao, foto}) {
    return (
        <>
        <div className={styles.card}>
            <h2 className={styles["card.nome"]}>{nome}</h2>
            <p className={styles["card.texto"]}>{cargo}</p>
            <p className={styles["card.texto"]}>{dataAdmissao}</p>
            <img className={styles["card.image"]} src={foto} />
        </div>
        </>
    )
}

export default CardFuncionarios