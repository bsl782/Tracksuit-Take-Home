import { Button } from "../button/button.tsx";
import styles from "./header.module.css";

export const HEADER_TEXT = "Suit Tracker Insights";
type HeaderProps = {
  onAddInsight: () => void;
};

export const Header = ({ onAddInsight }: HeaderProps) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <span className={styles.logo}>{HEADER_TEXT}</span>
          <Button
            label="Add insight"
            theme="secondary"
            onClick={onAddInsight}
          />
        </div>
      </header>
    </>
  );
};
