import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Collapse } from '@mui/material';

const Question = ({ question, onAnswer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" color="primary" gutterBottom>
          Question
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>{question.text}</strong>
        </Typography>
        <Button variant="text" onClick={() => setShowAnswer(!showAnswer)} sx={{ mb: 2 }}>
          {showAnswer ? 'Hide Answer' : 'Show Answer'}
        </Button>
        <Collapse in={showAnswer}>
          <Typography variant="body2" color="secondary" sx={{ mb: 2 }}>
            {question.answer}
          </Typography>
        </Collapse>
        <Button variant="contained" color="success" onClick={() => onAnswer('Correct')} sx={{ mr: 2 }}>I knew this</Button>
        <Button variant="contained" color="error" onClick={() => onAnswer('Incorrect')}>I did not know</Button>
      </CardContent>
    </Card>
  );
};

export default Question;
