
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Alliance Invitation Endpoint
app.post('/alliance/invite', (req, res) => {
  const { orgName, contactPerson, contactEmail, divineAlignmentStatement } = req.body;
  res.json({
    status: 'invitation_sent',
    invitationId: 'FED-INV-441X2025',
    received: { orgName, contactPerson, contactEmail, divineAlignmentStatement }
  });
});

app.listen(port, () => {
  console.log(`PANTHEON backend listening on port ${port}`);
});
