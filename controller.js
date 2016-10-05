$(function () {

    var photoData =
        [
            { "year": 1925, "url": "http://img.timeinc.net/time/2008/cover_photos/1925_chaplin.jpg" },
            { "year": 1937, "url": "http://img.timeinc.net/time/2008/cover_photos/1937_quintuplets.jpg" },
            { "year": 1952, "url": "http://img.timeinc.net/time/2008/cover_photos/1952_taxpayer.jpg" },
            { "year": 2001, "url": "http://img.timeinc.net/time/2008/cover_photos/2001_911.jpg" },
            { "year": 1990, "url": "http://img.timeinc.net/time/2008/cover_photos/1990_women.jpg" },
            { "year": 1979, "url": "http://img.timeinc.net/time/2008/cover_photos/1979_margaret_thatcher.jpg" },
            { "year": 1924, "url": "http://img.timeinc.net/time/2008/cover_photos/1924_freud.jpg" },
            { "year": 1928, "url": "http://img.timeinc.net/time/2008/cover_photos/1928_lindbergh.jpg" },
            { "year": 1976, "url": "http://img.timeinc.net/time/2008/cover_photos/1976_gore_vidal.jpg" },
            { "year": 1930, "url": "http://img.timeinc.net/time/2008/cover_photos/1930_jones.jpg" },
            { "year": 1975, "url": "http://img.timeinc.net/time/2008/cover_photos/1975_springsteen.jpg" },
            { "year": 1957, "url": "http://img.timeinc.net/time/2008/cover_photos/1957_george_walker.jpg" },
            { "year": 1931, "url": "http://img.timeinc.net/time/2008/cover_photos/1931_gandhi.jpg" },
            { "year": 1941, "url": "http://img.timeinc.net/time/2008/cover_photos/1941_churchill.jpg" },
            { "year": 1968, "url": "http://img.timeinc.net/time/2008/cover_photos/1968_robt_kennedy.jpg" },
            { "year": 1923, "url": "http://img.timeinc.net/time/2008/cover_photos/1923_cannon.jpg" },
            { "year": 1965, "url": "http://img.timeinc.net/time/2008/cover_photos/1965_marc_chagall.jpg" },
            { "year": 1964, "url": "http://img.timeinc.net/time/2008/cover_photos/1964_buckminster_fuller.jpg" },
            { "year": 1978, "url": "http://img.timeinc.net/time/2008/cover_photos/1978_church_shock.jpg" },
            { "year": 1981, "url": "http://img.timeinc.net/time/2008/cover_photos/1981_reagan.jpg" },
            { "year": 1943, "url": "http://img.timeinc.net/time/2008/cover_photos/1943_osami_nagano.jpg" },
            { "year": 1967, "url": "http://img.timeinc.net/time/2008/cover_photos/1967_beatles.jpg" },
            { "year": 1987, "url": "http://img.timeinc.net/time/2008/cover_photos/1987_air_travel.jpg" },
            { "year": 1956, "url": "http://img.timeinc.net/time/2008/cover_photos/1956_marilyn_monroe.jpg" },
            { "year": 2005, "url": "http://img.timeinc.net/time/2008/cover_photos/2005_new_orleans.jpg" },
            { "year": 1977, "url": "http://img.timeinc.net/time/2008/cover_photos/1977_richard_leakey.jpg" },
            { "year": 1993, "url": "http://img.timeinc.net/time/2008/cover_photos/1993_cloning_humans.jpg" },
            { "year": 1953, "url": "http://img.timeinc.net/time/2008/cover_photos/1953_queen_elizabeth.jpg" },
            { "year": 1988, "url": "http://img.timeinc.net/time/2008/cover_photos/1988_christ.jpg" },
            { "year": 1950, "url": "http://img.timeinc.net/time/2008/cover_photos/1950_coca_cola.jpg" },
            { "year": 1939, "url": "http://img.timeinc.net/time/2008/cover_photos/1939_grover_whalen.jpg" },
            { "year": 1929, "url": "http://img.timeinc.net/time/2008/cover_photos/1929_chrysler.jpg" },
            { "year": 2002, "url": "http://img.timeinc.net/time/2008/cover_photos/2002_bin_laden.jpg" },
            { "year": 1999, "url": "http://img.timeinc.net/time/2008/cover_photos/1999_einstein.jpg" },
            { "year": 1973, "url": "http://img.timeinc.net/time/2008/cover_photos/1973_nixon_impeach.jpg" },
            { "year": 1986, "url": "http://img.timeinc.net/time/2008/cover_photos/1986_challenger.jpg" },
            { "year": 1932, "url": "http://img.timeinc.net/time/2008/cover_photos/1932_marx_brothers.jpg" },
            { "year": 2006, "url": "http://img.timeinc.net/time/2008/cover_photos/2006_republican_mess.jpg" },
            { "year": 1934, "url": "http://img.timeinc.net/time/2008/cover_photos/1934_joyce.jpg" },
            { "year": 1927, "url": "http://img.timeinc.net/time/2008/cover_photos/1927_amery.jpg" },
            { "year": 1989, "url": "http://img.timeinc.net/time/2008/cover_photos/1989_endangered_earth.jpg" },
            { "year": 1955, "url": "http://img.timeinc.net/time/2008/cover_photos/1955_ed_sullivan.jpg" },
            { "year": 1944, "url": "http://img.timeinc.net/time/2008/cover_photos/1944_harry_truman.jpg" },
            { "year": 1942, "url": "http://img.timeinc.net/time/2008/cover_photos/1942_erich_raeder.jpg" },
            { "year": 1980, "url": "http://img.timeinc.net/time/2008/cover_photos/1980_ayatullah_khomeini.jpg" },
            { "year": 1969, "url": "http://img.timeinc.net/time/2008/cover_photos/1969_prince_charles.jpg" },
            { "year": 1940, "url": "http://img.timeinc.net/time/2008/cover_photos/1940_stalin_man_of_year.jpg" },
            { "year": 2000, "url": "http://img.timeinc.net/time/2008/cover_photos/2000_unpresidented.jpg" },
            { "year": 1966, "url": "http://img.timeinc.net/time/2008/cover_photos/1966_is_god_dead.jpg" },
            { "year": 1995, "url": "http://img.timeinc.net/time/2008/cover_photos/1995_rabin.jpg" },
            { "year": 1926, "url": "http://img.timeinc.net/time/2008/cover_photos/1926_mussolini.jpg" },
            { "year": 1962, "url": "http://img.timeinc.net/time/2008/cover_photos/1962_berlin_wall.jpg" },
            { "year": 1938, "url": "http://img.timeinc.net/time/2008/cover_photos/1938_frank_lloyd_wright.jpg" },
            { "year": 1991, "url": "http://img.timeinc.net/time/2008/cover_photos/1991_evil.jpg" },
            { "year": 2004, "url": "http://img.timeinc.net/time/2008/cover_photos/2004_abu_grahib.jpg" },
            { "year": 2003, "url": "http://img.timeinc.net/time/2008/cover_photos/2003_ben_franklin.jpg" },
            { "year": 1951, "url": "http://img.timeinc.net/time/2008/cover_photos/1951_bert_lahr.jpg" },
            { "year": 1954, "url": "http://img.timeinc.net/time/2008/cover_photos/1954_dave_brubeck.jpg" },
            { "year": 1945, "url": "http://img.timeinc.net/time/2008/cover_photos/1945_adolf_hitler.jpg" },
            { "year": 1947, "url": "http://img.timeinc.net/time/2008/cover_photos/1947_jackie_robinson.jpg" },
            { "year": 1970, "url": "http://img.timeinc.net/time/2008/cover_photos/1970_jesse_jackson.jpg" },
            { "year": 1983, "url": "http://img.timeinc.net/time/2008/cover_photos/1983_computers.jpg" },
            { "year": 1936, "url": "http://img.timeinc.net/time/2008/cover_photos/1936_clark_gable.jpg" },
            { "year": 1946, "url": "http://img.timeinc.net/time/2008/cover_photos/1946_generalissimo_franco.jpg" },
            { "year": 1933, "url": "http://img.timeinc.net/time/2008/cover_photos/1933_joseph_goebbels.jpg" },
            { "year": 1935, "url": "http://img.timeinc.net/time/2008/cover_photos/1935_ford.jpg" },
            { "year": 1948, "url": "http://img.timeinc.net/time/2008/cover_photos/1948_howard_hughes.jpg" },
            { "year": 1996, "url": "http://img.timeinc.net/time/2008/cover_photos/1996_twa_flight.jpg" },
            { "year": 1974, "url": "http://img.timeinc.net/time/2008/cover_photos/1974_nixon_court.jpg" },
            { "year": 1960, "url": "http://img.timeinc.net/time/2008/cover_photos/1960_jacques_cousteau.jpg" },
            { "year": 1959, "url": "http://img.timeinc.net/time/2008/cover_photos/1959_charles_degaulle.jpg" },
            { "year": 1961, "url": "http://img.timeinc.net/time/2008/cover_photos/1961_nikita_khrushchev.jpg" },
            { "year": 1984, "url": "http://img.timeinc.net/time/2008/cover_photos/1984_cholesterol.jpg" },
            { "year": 1982, "url": "http://img.timeinc.net/time/2008/cover_photos/1982_john_updike.jpg" },
            { "year": 1958, "url": "http://img.timeinc.net/time/2008/cover_photos/1958_alec_guinness.jpg" },
            { "year": 1998, "url": "http://img.timeinc.net/time/2008/cover_photos/1998_feminism.jpg" },
            { "year": 1972, "url": "http://img.timeinc.net/time/2008/cover_photos/1972_woody_allen.jpg" },
            { "year": 1994, "url": "http://img.timeinc.net/time/2008/cover_photos/1994_evolution.jpg" },
            { "year": 2007, "url": "http://img.timeinc.net/time/2008/cover_photos/2007_iraq.jpg" },
            { "year": 1949, "url": "http://img.timeinc.net/time/2008/cover_photos/1949_louis_armstrong.jpg" },
            { "year": 1992, "url": "http://img.timeinc.net/time/2008/cover_photos/1992_clinton.jpg" },
            { "year": 1997, "url": "http://img.timeinc.net/time/2008/cover_photos/1997_ellen_degeneres.jpg" },
            { "year": 1985, "url": "http://img.timeinc.net/time/2008/cover_photos/1985_peter_ueberroth.jpg" },
            { "year": 1971, "url": "http://img.timeinc.net/time/2008/cover_photos/1971_akio_morita.jpg" },
            { "year": 1963, "url": "http://img.timeinc.net/time/2008/cover_photos/1963_cassius_clay.jpg" }
        ]

    photoData = photoData.sort(function (a, b) {
        if (a["year"] > b["year"]) return 1;
        else if (a["year"] < b["year"]) return -1;
        else 0;
    });

    var container = $('#photos');
    var images = '';
    $.each(photoData, function (i, v) {
        if ( v.year >= 1960){
            images = images + '<div class="col-sm-6 col-md-3">' +
            '<div class="thumbnail">' +
            '<img src="' + v.url + '" alt="' + v.year + '" ></img>' +
            '<div class="caption">' +
            '<h1 class="text-center">' + v.year + '</h1>' +
            '</div>' +
            '</div>' +
            '</div>'
        }
        
    });
    container.append(images);
});