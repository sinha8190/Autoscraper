# Autoscraper
Chrome extension as Web scraper that periodically keeps scraping data from a webpage without users intervention each time.
This chrome extension will keep taking inputs from Google spreadsheet and scraping the data periodically (say every 1hr).

In this example -
1. The chrome extension reads the cityname from Col A of a Google spreadsheet.
2. Pastes the city name in the search tab of accuweather.com.
3. Click search button.
4. Scrapes the temperature
5. Writes the temperrature in Col C of the same Google spreadsheet.
6. It reapeating above mentioned steps periodically (say every 1hr).

Without user intervention, the user will have a trend of temperature every hour in Google spreadsheet.

