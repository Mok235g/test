const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // Import the axios library

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', async (req, res) => {
  try {
    const link_topup = req.query.url;
    
    const postData = {
      do: 'confirm',
      url: link_topup
    };

    const headers = {
      'Host': 'www.arcshop.in.th',
      'Cookie': 'arcshop=7bkpbngo1p0qk5mi7nigs37nek8rntck; _gcl_au=1.1.1299685118.1692013478; _gid=GA1.3.1152518994.1692013479; cf_clearance=eIVAMaKxIm.j5Z8aE6fVfzjDM1Ry5rELAJrvo_yakk4-1692013482-0-1-8d136230.8eee76af.da123dd0-0.2.1692013482; twk_idm_key=it5BVBGwbQZuDXGGd0-Q1; arcshopaccount=kqODrMcgCDSKGtXPJlsxaooXiGaeyqfmWMhAEQzdHbAcdrjjtuIvwHvUNxpiVTTs; _ga_WPNMZDR72H=GS1.1.1692013478.1.1.1692013498.0.0.0; _ga=GA1.3.642151656.1692013479; _ga_30PLGWBTMP=GS1.3.1692013482.1.1.1692013499.43.0.0; TawkConnectionTime=0',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'X-Requested-With': 'XMLHttpRequest',
      'Origin': 'https://www.arcshop.in.th',
      'Referer': 'https://www.arcshop.in.th/topup/truewalletGift'
    };

    // Make an HTTP POST request
    const response = await axios.post('https://www.arcshop.in.th/action/topup/truewalletGift', postData, { headers });

    // Send the HTML content received from the external server as the response
    res.send(response.data);
  } catch (error) {
    console.error('Axios Error:', error.message);
    res.status(500).send('An error occurred while fetching the data.');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
