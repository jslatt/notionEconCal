/// James Slattery
/// Sync Notion DB with Economic Calendar 
const { Client } = require("@notionhq/client")
const request = require('request');
require('dotenv').config();

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const options = {
  method: 'GET',
  url: 'https://finnhub.io/api/v1/calendar/economic?token=' + process.env.FINNHUB_TOKEN
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  let data = JSON.parse(body);

  const highImpactEvents = data.economicCalendar.filter(x=>x.impact === "high");
  
});

// Post highImpactEvents to Notion DB....


// TODO