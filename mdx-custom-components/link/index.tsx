import Link from "next/link";
import styles from "./styled.module.css";

interface AlinkProps {
  children: React.ReactElement;
  href: string;
}

export const Alink = (props: any) => {
  const { href, children } = props as AlinkProps;
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
};
