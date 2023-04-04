import styles from "./styled.module.css";
export const P = (props: any) => {
  return <p {...props} className={styles.p}></p>;
};
