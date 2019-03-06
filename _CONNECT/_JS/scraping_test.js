let cheerio = require('cheerio');
let jsonframe = require('jsonframe-cheerio');

let $ = cheerio.load('http://news.usm.edu/article/facilities-receive-recognition-during-national-sports-security-conference-2');
jsonframe($);

var frame = {
  'articles': {
    'selector': '#center .clearfix',
    'data': [{
      'title': {
        'selector': 'h1',
        'type': 'title',
      }
    },
    {
      'date': {
        'selector': '.section-date-author time',
        'type': 'date'
      }
    }]
  }
}

var dates = $('#center .clearfix').scrape(frame);
console.log(dates);
