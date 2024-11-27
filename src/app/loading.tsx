import styles from './Loading.module.css'; // Asegúrate de tener un archivo CSS para estilos

const Loading = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>Cargando...</p>
        </div>
    );
};

export default Loading;
