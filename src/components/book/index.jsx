import styles from "./style.module.css"

export default function Book({ id, name, numPg, autor, dtPubli, readed, gen }) {

    const data = new Date(dtPubli);
    const dataFormatada = data.toLocaleDateString("pt-BR");

    return (
        <div id={id} className={styles.container}>
            <div className={styles.nameContainer}>
                <h2>{name}</h2>
            </div>
            <div className={styles.dataContainer}>
                <p className={styles.itemContainer}>
                    <h5 className={styles.description}>Autor: </h5>
                    <h4 className={styles.itemData}>{autor}</h4>
                </p>
                <p className={styles.itemContainer}>
                    <h5 className={styles.description}>Lido: </h5>
                    <h4 className={styles.itemData}>{readed ? "Sim" : "Não"}</h4>
                </p>
                <p className={styles.itemContainer}>
                    <h5 className={styles.description}>Gênero: </h5>
                    <h4 className={styles.itemData}>{gen}</h4>
                </p>
                <p className={styles.itemContainer}>
                    <h5 className={styles.description}>Data Publi.: </h5>
                    <h4 className={styles.itemData}>{dataFormatada}</h4>
                </p>
                <p className={styles.itemContainer}>
                    <h5 className={styles.description}>Num. Páginas: </h5>
                    <h4 className={styles.itemData}>{numPg}</h4>
                </p>
            </div>
        </div>
    );
}