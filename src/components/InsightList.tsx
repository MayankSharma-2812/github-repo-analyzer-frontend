export default function InsightList({ insights }: { insights: string[] }) {
  return (
    <div className="insights-list">
      {insights.map((insight, i) => (
        <div key={i} className="insight-item">
          <div className="insight-number">
            {i + 1}
          </div>
          <p className="insight-text">{insight}</p>
        </div>
      ))}
    </div>
  );
}
