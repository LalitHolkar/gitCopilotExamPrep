import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Dashboard = () => (
  <Card sx={{ mb: 3 }}>
    <CardContent>
      <Typography variant="h4" color="primary" gutterBottom>
        Exam Preparation Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome! Select a section to begin your exam practice.
      </Typography>
    </CardContent>
  </Card>
);

export default Dashboard;
