import { BRANDS } from "../../lib/consts.ts";
import { Button } from "../button/button.tsx";
import { Modal, type ModalProps } from "../modal/modal.tsx";
import styles from "./add-insight.module.css";
import { useState } from "react";

type AddInsightProps = ModalProps & {
  onInsightAdded?: () => void;
};

export const AddInsight = (props: AddInsightProps) => {
  const [addInsightText, setAddInsightText] = useState<string>("");
  const [addInsightBrand, setAddInsightBrand] = useState<number>(BRANDS[0].id);

  const addInsight = async (brand: number, text: string) => {
    await fetch(`/api/insights/create`, {
      method: "POST",
      body: JSON.stringify({ brand, createdAt: Date(), text }),
    });
    setAddInsightText("");
    setAddInsightBrand(BRANDS[0].id);
    props.onClose();
    props.onInsightAdded?.();
  };

  return (
    <Modal
      {...props}
      onClose={() => {
        setAddInsightText("");
        setAddInsightBrand(BRANDS[0].id);
        props.onClose();
      }}
    >
      <h1 className={styles.heading}>Add a new insight</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          addInsight(addInsightBrand, addInsightText);
        }}
      >
        <label className={styles.field}>
          <select
            className={styles["field-input"]}
            onChange={(e) => {
              setAddInsightBrand(parseInt(e.target.value));
            }}
          >
            {BRANDS.map(({ id, name }) => <option value={id} key={id}>{name}</option>)}
          </select>
        </label>
        <label className={styles.field}>
          Insight
          <textarea
            className={styles["field-input"]}
            rows={5}
            placeholder="Something insightful..."
            value={addInsightText}
            onChange={(e) => setAddInsightText(e.target.value)}
          />
        </label>
        <Button className={styles.submit} type="submit" label="Add insight" />
      </form>
    </Modal>
  );
};
