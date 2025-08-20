import { Card, CardContent, Typography } from '@mui/material';

const Results = ({ score, total }) => (
  <Card sx={{ mt: 3 }}>
    <CardContent>
      <Typography variant="h5" color="primary" gutterBottom>
        Results
      </Typography>
      <Typography variant="body1">
        Your Score: {score} / {total}
      </Typography>
      {total > 0 && (
        <Typography variant="body2" color="success.main">
          Accuracy: {Math.round((score/total)*100)}%
        </Typography>
      )}
    </CardContent>
  </Card>
);

export default Results;
