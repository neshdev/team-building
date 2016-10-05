var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var data =
[ 
{ "year": '1923', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704191,00.html'},
{ "year": '1924', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704221,00.html'},
{ "year": '1925', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704223,00.html'},
{ "year": '1926', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704224,00.html'},
{ "year": '1927', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704225,00.html'},
{ "year": '1928', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704227,00.html'},
{ "year": '1929', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704228,00.html'},
{ "year": '1930', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704229,00.html'},
{ "year": '1931', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704231,00.html'},
{ "year": '1932', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704232,00.html'},
{ "year": '1933', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704234,00.html'},
{ "year": '1934', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704235,00.html'},
{ "year": '1935', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704236,00.html'},
{ "year": '1936', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704240,00.html'},
{ "year": '1937', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704242,00.html'},
{ "year": '1938', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704243,00.html'},
{ "year": '1939', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704185_1704245,00.html'},
{ "year": '1940', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704259,00.html'},
{ "year": '1941', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704260,00.html'},
{ "year": '1942', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704261,00.html'},
{ "year": '1943', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704262,00.html'},
{ "year": '1944', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704264,00.html'},
{ "year": '1945', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704265,00.html'},
{ "year": '1946', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704266,00.html'},
{ "year": '1947', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704267,00.html'},
{ "year": '1948', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704268,00.html'},
{ "year": '1949', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704269,00.html'},
{ "year": '1950', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704270,00.html'},
{ "year": '1951', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704271,00.html'},
{ "year": '1952', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704272,00.html'},
{ "year": '1953', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704273,00.html'},
{ "year": '1954', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704275,00.html'},
{ "year": '1955', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704276,00.html'},
{ "year": '1956', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704277,00.html'},
{ "year": '1957', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704278,00.html'},
{ "year": '1958', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704279,00.html'},
{ "year": '1959', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704254_1704280,00.html'},
{ "year": '1960', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704283,00.html'},
{ "year": '1961', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704285,00.html'},
{ "year": '1962', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704286,00.html'},
{ "year": '1963', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704287,00.html'},
{ "year": '1964', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704288,00.html'},
{ "year": '1965', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704289,00.html'},
{ "year": '1966', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704290,00.html'},
{ "year": '1967', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704291,00.html'},
{ "year": '1968', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704292,00.html'},
{ "year": '1969', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704293,00.html'},
{ "year": '1970', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704297,00.html'},
{ "year": '1971', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704298,00.html'},
{ "year": '1972', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704300,00.html'},
{ "year": '1973', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704301,00.html'},
{ "year": '1974', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704304,00.html'},
{ "year": '1975', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704309,00.html'},
{ "year": '1976', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704310,00.html'},
{ "year": '1977', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704312,00.html'},
{ "year": '1978', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704313,00.html'},
{ "year": '1979', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704256_1704314,00.html'},
{ "year": '1980', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704493,00.html'},
{ "year": '1981', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704496,00.html'},
{ "year": '1982', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704497,00.html'},
{ "year": '1983', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704498,00.html'},
{ "year": '1984', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704499,00.html'},
{ "year": '1985', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704500,00.html'},
{ "year": '1986', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704501,00.html'},
{ "year": '1987', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704502,00.html'},
{ "year": '1988', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704503,00.html'},
{ "year": '1989', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704504,00.html'},
{ "year": '1990', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704505,00.html'},
{ "year": '1991', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704506,00.html'},
{ "year": '1992', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704507,00.html'},
{ "year": '1993', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704508,00.html'},
{ "year": '1994', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704509,00.html'},
{ "year": '1995', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704510,00.html'},
{ "year": '1996', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704511,00.html'},
{ "year": '1997', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704513,00.html'},
{ "year": '1998', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704514,00.html'},
{ "year": '1999', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704516,00.html'},
{ "year": '2000', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704517,00.html'},
{ "year": '2001', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704518,00.html'},
{ "year": '2002', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704520,00.html'},
{ "year": '2003', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704521,00.html'},
{ "year": '2004', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704522,00.html'},
{ "year": '2005', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704523,00.html'},
{ "year": '2006', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704524,00.html'},
{ "year": '2007', "url" : 'http://content.time.com/time/specials/2007/article/0,28804,1704183_1704257_1704525,00.html'},
]


data.forEach((x,v)=> visit(x.year,x.url))

function visit(year, url){
    request(url, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   // Check status code (200 is HTTP OK)
   //console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
     var $ = cheerio.load(body);
     console.log( '{"year":' + year + ' , "url :"'   + $('.wp-post-image').attr('src') + "},");
   }
});
}

