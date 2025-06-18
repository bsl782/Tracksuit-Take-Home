import { Trash2Icon } from "lucide-react";
import { cx } from "../../lib/cx.ts";
import styles from "./insights.module.css";
import type { Insight } from "../../schemas/insight.ts";

import { returnBrandName } from "../../utils/insight-brand-utils.ts";

type InsightsProps = {
  className?: string;
  insights: Insight[];
  refreshInsights: () => void;
};

export const Insights = (
  { className, insights, refreshInsights }: InsightsProps,
) => {
  const deleteInsight = async (id: number) => {
    await fetch(`/api/insights/delete/${id}`, {
      method: "DELETE",
    });
    refreshInsights();
  };

  return (
    <div className={cx(className)}>
      <h1 className={styles.heading}>Insights</h1>
      <div className={styles.list}>
        {insights?.length !== 0
          ? (
            insights.map(({ id, text, createdAt, brand }) => (
              <div className={styles.insight} key={id}>
                <div className={styles["insight-meta"]}>
                  <span>{returnBrandName(brand)}</span>
                  <div className={styles["insight-meta-details"]}>
                    <span>{new Date(createdAt).toDateString()}</span>
                    <Trash2Icon
                      className={styles["insight-delete"]}
                      onClick={() => {
                        deleteInsight(id);
                      }}
                    />
                  </div>
                </div>
                <p className={styles["insight-content"]}>{text}</p>
              </div>
            ))
          )
          : <p>We have no insights!</p>}
      </div>
    </div>
  );
};
