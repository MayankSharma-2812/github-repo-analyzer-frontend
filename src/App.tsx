import { useState } from "react";
import api from "./services/api";
import RepoCard from "./components/RepoCard";
import TechBadge from "./components/TechBadge";
import MetricCard from "./components/MetricCard";
import InsightList from "./components/InsightList";
import { Robot } from "./components/ui/robot";

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyze = async () => {
    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await api.post("/analyze", { repoUrl });
      setData(res.data);
    } catch {
      setError("Invalid repository or API error");
    } finally {
      setLoading(false);
    }
  };

  const getComplexityClass = (complexity: string) => {
    switch (complexity) {
      case 'Beginner':
        return 'complexity-beginner';
      case 'Intermediate':
        return 'complexity-intermediate';
      case 'Advanced':
        return 'complexity-advanced';
      case 'Production-grade':
        return 'complexity-production';
      default:
        return 'complexity-beginner';
    }
  };

  return (
    <div>
      <div className="container">
        {/* Header */}
        <header className="header fade-in">
          <div className="header-content">
            <div className="header-text">
              <div className="badge">
                <span className="badge-dot"></span>
                <span>AI-Powered Repository Analysis</span>
              </div>
              <h1 className="title">
                🔍 GitHub Repo Analyzer
              </h1>
              <p className="subtitle">
                Instantly analyze any GitHub repository to uncover its tech stack, complexity metrics, and actionable insights
              </p>
            </div>
            
            <div className="header-robot">
              <Robot />
            </div>
          </div>
        </header>

        {/* Input Section */}
        <div className="card slide-up">
          <div className="input-group">
            <input
              type="text"
              className="input"
              placeholder="https://github.com/owner/repo"
              value={repoUrl}
              onChange={e => setRepoUrl(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={analyze}
              disabled={loading || !repoUrl.trim()}
            >
              {loading ? (
                <>
                  <div className="spinner"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Analyze Repository
                </>
              )}
            </button>
          </div>
          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}
        </div>

        {/* Results Section */}
        {data && (
          <div className="fade-in">
            <RepoCard repo={data.repo} />

            {/* Tech Stack Section */}
            <div className="card slide-in-left">
              <div className="section-header">
                <div className="section-icon section-icon-blue floating">
                  💻
                </div>
                <div className="section-content">
                  <h3>Tech Stack</h3>
                  <p>Technologies used in this repository</p>
                </div>
              </div>
              <div className="tech-badges stagger-animation">
                {data.techStack.map((t: string) => (
                  <TechBadge key={t} tech={t} />
                ))}
              </div>
            </div>

            {/* Complexity Section */}
            <div className="card slide-in-right">
              <div className="section-header">
                <div className="section-icon section-icon-purple floating">
                  📊
                </div>
                <div className="section-content">
                  <h3>Complexity Analysis</h3>
                  <p>Repository complexity assessment</p>
                </div>
              </div>
              <div className="input-group">
                <span className={`complexity-badge ${getComplexityClass(data.complexity)}`}>
                  {data.complexity}
                </span>
                <span className="complexity-description">
                  {data.complexity === 'Beginner' && 'Simple structure, easy to understand and maintain'}
                  {data.complexity === 'Intermediate' && 'Moderate complexity with good organization'}
                  {data.complexity === 'Advanced' && 'Complex architecture with multiple layers'}
                  {data.complexity === 'Production-grade' && 'Enterprise-level architecture'}
                </span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="card scale-in">
              <div className="section-header">
                <div className="section-icon section-icon-green floating">
                  📈
                </div>
                <div className="section-content">
                  <h3>Repository Metrics</h3>
                  <p>Key statistics about the codebase</p>
                </div>
              </div>
              <div className="metrics-grid stagger-animation">
                <MetricCard label="Files" value={data.metrics.files} />
                <MetricCard label="Folders" value={data.metrics.folders} />
                <MetricCard label="Max Depth" value={data.metrics.maxDepth} />
                <MetricCard label="Tests" value={data.metrics.hasTests ? "Yes" : "No"} />
              </div>
            </div>

            {/* Insights Section */}
            <div className="card slide-up">
              <div className="section-header">
                <div className="section-icon section-icon-yellow floating">
                  💡
                </div>
                <div className="section-content">
                  <h3>Key Insights</h3>
                  <p>Important findings and recommendations</p>
                </div>
              </div>
              <InsightList insights={data.insights} />
            </div>
          </div>
        )}
        
        {/* Footer */}
        <footer className="footer fade-in">
          <div className="footer-content">
            <p className="footer-text">
              Made with ❤️ by{' '}
              <a 
                href="https://github.com/MayankSharma-2812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link"
              >
                Mayank Sharma
              </a>
            </p>
            <div className="footer-icons">
              <a 
                href="https://github.com/MayankSharma-2812" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="GitHub Profile"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-.908 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/mayank-sharma-7b277b312?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="LinkedIn Profile"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.208 24 24 23.227 24 22.271V1.729C24 .774 23.208 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
