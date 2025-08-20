
import React from 'react';
import { List, ListItem, Button, Typography, Paper } from '@mui/material';

const QuestionList = ({ questions, onSelect }) => (
  <Paper sx={{ p: 2, mb: 3 }}>
    <Typography variant="h5" color="primary" gutterBottom>
      Questions
    </Typography>
    <List>
      {questions.map(q => (
        <ListItem key={q.id} disablePadding sx={{ mb: 1 }}>
          <Button variant="outlined" fullWidth onClick={() => onSelect(q)}>{q.text}</Button>
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default QuestionList;
