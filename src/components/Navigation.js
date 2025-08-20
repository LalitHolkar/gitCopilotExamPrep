import React from 'react';
import { Button, Stack } from '@mui/material';

const Navigation = ({ onNavigate }) => (
  <Stack direction="row" spacing={2} sx={{ mb: 3, justifyContent: 'center' }}>
    <Button variant="contained" color="primary" onClick={() => onNavigate('dashboard')}>Dashboard</Button>
    <Button variant="contained" color="primary" onClick={() => onNavigate('questions')}>Questions</Button>
    <Button variant="contained" color="primary" onClick={() => onNavigate('results')}>Results</Button>
  </Stack>
);

export default Navigation;
