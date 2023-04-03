import styles from "./styled.module.css";

export const H1 = ({ children }: any) => {
  return <h1 className={styles.h1}>{children}</h1>;
};

export const H2 = ({ children }: any) => {
  return <h2 className={styles.h2}>{children}</h2>;
};
