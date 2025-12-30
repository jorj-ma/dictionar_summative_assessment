# Wordly - Single Page Dictionary App

## Overview
Wordly is a simple Single Page Application that lets you search for English words and see their definitions, synonyms, and pronunciation. You can even play the word's pronunciation audio. It uses JavaScript and the Free Dictionary API.

---

## Features
- Search for a word.
- View definitions and part of speech.
- View synonyms if available.
- Play pronunciation audio.
- Shows error messages for invalid or empty input.

---

## How to Use
1. Open `index.html` in a browser.
2. Type a word in the search bar.
3. Click **Search** or press Enter.
4. See the results below the search bar.

---

## Screenshots
**Search bar:**  
![Search Bar](screenshots/search-bar.png)  

**Results with definitions and synonyms:**  
![Results](screenshots/results.png)  

**Audio pronunciation:**  
![Audio](screenshots/audio.png)  

**Error message for invalid word:**  
![Error](screenshots/error.png)  

> Note: Replace the placeholders above with actual screenshots of your app.

---

## Technologies Used
- **HTML** – structure of the page.
- **CSS** – styling the page.
- **JavaScript** – fetch data, update DOM, handle events.
- **API** – Free Dictionary API (`dictionaryapi.dev`).

---

## How it Works
1. JavaScript listens for the form submission.
2. Fetches word data from the API.
3. Updates the page dynamically with word, definitions, synonyms, and pronunciation.
4. Shows errors if input is empty or word is not found.

---

## Testing
- Search valid words like `example` or `phone`.
- Search words with no synonyms or audio.
- Leave input empty or type nonsense words to test error handling.

---

## Notes
- Internet connection required to fetch API data.
- Beginner-friendly interface with simple design.

---

## Author
George
# dictionar_summative_assessment
