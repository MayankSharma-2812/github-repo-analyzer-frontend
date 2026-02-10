export default function RepoCard({ repo }: any) {
  return (
    <div className="card">
      <div className="repo-title">
        <div className="repo-icon">
          📦
        </div>
        {repo.name}
      </div>
      <p className="repo-description">{repo.description}</p>
      
      <div className="repo-stats">
        <div className="repo-stat">
          <div className="stat-icon stat-icon-yellow">
            ⭐
          </div>
          <div className="stat-info">
            <span className="stat-value">{repo.stars.toLocaleString()}</span>
            <span className="stat-label">stars</span>
          </div>
        </div>
        
        <div className="repo-stat">
          <div className="stat-icon stat-icon-blue">
            🍴
          </div>
          <div className="stat-info">
            <span className="stat-value">{repo.forks.toLocaleString()}</span>
            <span className="stat-label">forks</span>
          </div>
        </div>
        
        {repo.primaryLanguage && (
          <div className="repo-stat">
            <div className="stat-icon stat-icon-green">
              🧠
            </div>
            <span className="language-badge">
              {repo.primaryLanguage}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
