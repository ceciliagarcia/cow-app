const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('./dist/cow-app'));

app.get ('/ *', function (req, res) { 
  res.sendFile ('index.html', {root: 'dist /cow-app/'} 
); 
});


app.listen(process.env.PORT || 3000);