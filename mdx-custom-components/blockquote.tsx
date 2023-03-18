import styles from "./blockquote.module.css";
export const Blockquote = (props: any) => {
  return <blockquote className={styles["block-quota"]} {...props}></blockquote>;
};
