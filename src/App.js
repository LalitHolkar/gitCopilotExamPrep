
import './App.css';

import Dashboard from './components/Dashboard';
import QuestionList from './components/QuestionList';
import Question from './components/Question';
import Results from './components/Results';
import Navigation from './components/Navigation';
import questionsData from './components/questionsData.json';


import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('dashboard');
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [selectedSubject, setSelectedSubject] = useState('csharp');

  const handleSelectSubject = (subject) => {
    setSelectedSubject(subject);
    setPage('questions');
    setSelectedQuestion(null);
  };

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
    setPage('question');
  };

  const handleAnswer = (answer) => {
    setTotal(total + 1);
    if (answer === 'Correct') setScore(score + 1);
    setPage('questions');
    setSelectedQuestion(null);
  };

  const subjects = Object.keys(questionsData);
  const questions = questionsData[selectedSubject] || [];

  return (
    <div className="App">
      <Navigation onNavigate={setPage} />
      {page === 'dashboard' && <Dashboard />}
      {page === 'questions' && (
        <div>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            {subjects.map((subject) => (
              <button
                key={subject}
                style={{
                  margin: '0 8px',
                  padding: '8px 16px',
                  background: selectedSubject === subject ? '#2563eb' : '#e0e7ef',
                  color: selectedSubject === subject ? '#fff' : '#2563eb',
                  border: 'none',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
                onClick={() => handleSelectSubject(subject)}
              >
                {subject.charAt(0).toUpperCase() + subject.slice(1)}
              </button>
            ))}
          </div>
          <QuestionList questions={questions} onSelect={handleSelectQuestion} />
        </div>
      )}
      {page === 'question' && selectedQuestion && (
        <Question question={selectedQuestion} onAnswer={handleAnswer} />
      )}
      {page === 'results' && <Results score={score} total={total} />}
    </div>
  );
}

export default App;
