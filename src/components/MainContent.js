import React, { useState, useEffect } from 'react';

const MainContent = () => {
    const [questions, setQuestions] = useState([]);
    const [filter, setFilter] = useState('activity');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_URL = 'https://api.stackexchange.com/2.3/questions';

    const fetchQuestions = async (filterType) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_URL}?order=asc&sort=${filterType}&site=stackoverflow`);

            if (!response.ok) {
                throw new Error(`API responded with status: ${response.status}`);
            }

            const data = await response.json();
            setQuestions(data.items || []);
        } catch (err) {
            setError(err.message || 'Failed to fetch data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchQuestions(filter);
    }, [filter]);

    return (
        <main className="main-content">
            <div className="content-head">
                <h3 style={{ letterSpacing: '2px', fontSize: '24px' }}>Top Questions</h3>
                <div className="main-filters">
                    {['activity', 'hot', 'week', 'month'].map((filterType) => (
                        <button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            className={filter === filterType ? 'main-selected' : ''}
                            aria-pressed={filter === filterType}
                        >
                            {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                        </button>
                    ))}
                    <span>ASK QUESTION</span>
                </div>
            </div>

            {isLoading ? (
                <p>Loading questions...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : questions.length > 0 ? (
                questions.map((q) => (
                    <div key={q.question_id} className="question-card">
                        <a
                            href={q.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="question-link"
                        >
                            <h3>{q.title}</h3>
                        </a>
                        <div className="tags">
                            {q.tags.map((tag, idx) => (
                                <span key={idx} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="question-info">
                            <div className="question-icons">
                                <p>
                                    <i className="bi bi-triangle"></i> <strong>{q.score}</strong>
                                </p>
                                <p>
                                    <i className="bi bi-chat-right-text"></i> <strong>{q.answer_count}</strong>
                                </p>
                                <p>
                                    <i className="bi bi-eye"></i> <strong>{q.view_count}</strong>
                                </p>
                            </div>
                            <div className="owner-info">
                                <p>
                                    Last activity on:{' '}
                                    <span style={{ textTransform: 'uppercase' }}>
                                        {new Date(q.last_activity_date * 1000).toLocaleString()}
                                    </span>
                                    <a
                                        href={q.owner.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        &nbsp;&nbsp;{q.owner.display_name}
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No questions found.</p>
            )}
        </main>
    );
};

export default MainContent;
