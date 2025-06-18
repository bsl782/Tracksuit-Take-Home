import { Header } from "../components/header/header.tsx";
import { Insights } from "../components/insights/insights.tsx";
import styles from "./app.module.css";
import { useEffect, useState } from "react";
import type { Insight } from "../schemas/insight.ts";
import { AddInsight } from "../components/add-insight/add-insight.tsx";

export const App = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [addInsightOpen, setAddInsightOpen] = useState(false);

  const getInsights = async () => {
    const res = await fetch("/api/insights");
    const data = await res.json();
    setInsights(data);
  };

  useEffect(() => {
    getInsights();
  }, []);

  return (
    <main className={styles.main}>
      <Header onAddInsight={() => setAddInsightOpen(true)} />
      <Insights
        className={styles.insights}
        insights={insights}
        refreshInsights={getInsights}
      />
      <AddInsight
        open={addInsightOpen}
        onClose={() => setAddInsightOpen(false)}
        onInsightAdded={getInsights}
      />
    </main>
  );
};
