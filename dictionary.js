const form = document.getElementById('search-form');
const wordInput = document.getElementById('word-input');
const wordTitle = document.getElementById('word-title');
const phoneticsDiv = document.getElementById('phonetics');
const definitionsDiv = document.getElementById('definitions');
const synonymsDiv = document.getElementById('synonyms');
const errorDiv = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const word = wordInput.value.trim();
  if (!word) {
    showError("Please enter a word.");
    return;
  }
  await fetchWordData(word);
});

async function fetchWordData(word) {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    if (!response.ok) throw new Error("Word not found");
    const data = await response.json();
    displayWordData(data[0]);
  } catch (err) {
    showError(err.message);
  }
}

function displayWordData(data) {
  errorDiv.classList.add('hidden');
  wordTitle.textContent = data.word || '';
  
  // Phonetics
  phoneticsDiv.innerHTML = '';
  if (data.phonetics && data.phonetics.length) {
    data.phonetics.forEach(p => {
      if (p.text) phoneticsDiv.innerHTML += `<p>Pronunciation: ${p.text}</p>`;
      if (p.audio) {
        const audioBtn = document.createElement('button');
        audioBtn.textContent = "🔊 Play Audio";
        audioBtn.addEventListener('click', () => new Audio(p.audio).play());
        phoneticsDiv.appendChild(audioBtn);
      }
    });
  }

  // Definitions
  definitionsDiv.innerHTML = '';
  data.meanings.forEach(meaning => {
    definitionsDiv.innerHTML += `<h3>${meaning.partOfSpeech}</h3>`;
    meaning.definitions.forEach((def, i) => {
      definitionsDiv.innerHTML += `<p>${i+1}. ${def.definition}</p>`;
    });
  });

  // Synonyms
  synonymsDiv.innerHTML = '';
  const allSynonyms = data.meanings.flatMap(m => m.definitions.flatMap(d => d.synonyms || []));
  if (allSynonyms.length) {
    synonymsDiv.innerHTML = `<strong>Synonyms:</strong> ${allSynonyms.join(', ')}`;
  } else {
    synonymsDiv.innerHTML = `<strong>Synonyms:</strong> None found`;
  }
}

function showError(message) {
  errorDiv.textContent = message;
  errorDiv.classList.remove('hidden');
  wordTitle.textContent = '';
  phoneticsDiv.innerHTML = '';
  definitionsDiv.innerHTML = '';
  synonymsDiv.innerHTML = '';
}
