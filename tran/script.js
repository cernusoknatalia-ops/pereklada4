// script.js (ES module)
const App = (() => {
  // ---------- ДЕМО-ДАНІ (можна винести в data/words.json) ----------
  const SAMPLE_WORDS = [
  { "id": 1, "en": "I", "uk": "я", "example": "I am happy.", "level": "A1" },
  { "id": 2, "en": "you", "uk": "ти / ви", "example": "You are my friend.", "level": "A1" },
  { "id": 3, "en": "he", "uk": "він", "example": "He is a student.", "level": "A1" },
  { "id": 4, "en": "she", "uk": "вона", "example": "She is a teacher.", "level": "A1" },
  { "id": 5, "en": "it", "uk": "воно / це", "example": "It is a cat.", "level": "A1" },
  { "id": 6, "en": "we", "uk": "ми", "example": "We are at school.", "level": "A1" },
  { "id": 7, "en": "they", "uk": "вони", "example": "They are happy.", "level": "A1" },
  { "id": 8, "en": "this", "uk": "це", "example": "This is my book.", "level": "A1" },
  { "id": 9, "en": "that", "uk": "те", "example": "That is his house.", "level": "A1" },
  { "id": 10, "en": "here", "uk": "тут", "example": "I am here.", "level": "A1" },
  { "id": 11, "en": "there", "uk": "там", "example": "She is there.", "level": "A1" },
  { "id": 12, "en": "what", "uk": "що", "example": "What is this?", "level": "A1" },
  { "id": 13, "en": "who", "uk": "хто", "example": "Who are you?", "level": "A1" },
  { "id": 14, "en": "where", "uk": "де", "example": "Where is my bag?", "level": "A1" },
  { "id": 15, "en": "when", "uk": "коли", "example": "When is the lesson?", "level": "A1" },
  { "id": 16, "en": "why", "uk": "чому", "example": "Why are you sad?", "level": "A1" },
  { "id": 17, "en": "how", "uk": "як", "example": "How are you?", "level": "A1" },
  { "id": 18, "en": "man", "uk": "чоловік", "example": "The man is tall.", "level": "A1" },
  { "id": 19, "en": "woman", "uk": "жінка", "example": "The woman is kind.", "level": "A1" },
  { "id": 20, "en": "child", "uk": "дитина", "example": "The child is small.", "level": "A1" },
  { "id": 21, "en": "friend", "uk": "друг", "example": "He is my friend.", "level": "A1" },
  { "id": 22, "en": "family", "uk": "сім’я", "example": "My family is big.", "level": "A1" },
  { "id": 23, "en": "day", "uk": "день", "example": "It is a good day.", "level": "A1" },
  { "id": 24, "en": "night", "uk": "ніч", "example": "The night is dark.", "level": "A1" },
  { "id": 25, "en": "morning", "uk": "ранок", "example": "Good morning!", "level": "A1" },
  { "id": 26, "en": "evening", "uk": "вечір", "example": "Good evening!", "level": "A1" },
  { "id": 27, "en": "food", "uk": "їжа", "example": "The food is tasty.", "level": "A1" },
  { "id": 28, "en": "water", "uk": "вода", "example": "I drink water.", "level": "A1" },
  { "id": 29, "en": "bread", "uk": "хліб", "example": "I eat bread.", "level": "A1" },
  { "id": 30, "en": "milk", "uk": "молоко", "example": "I drink milk.", "level": "A1" },
  { "id": 31, "en": "tea", "uk": "чай", "example": "I like tea.", "level": "A1" },
  { "id": 32, "en": "coffee", "uk": "кава", "example": "I drink coffee.", "level": "A1" },
  { "id": 33, "en": "apple", "uk": "яблуко", "example": "I ate an apple.", "level": "A1" },
  { "id": 34, "en": "book", "uk": "книга", "example": "She reads a book.", "level": "A1" },
  { "id": 35, "en": "pen", "uk": "ручка", "example": "I write with a pen.", "level": "A1" },
  { "id": 36, "en": "table", "uk": "стіл", "example": "The table is big.", "level": "A1" },
  { "id": 37, "en": "chair", "uk": "стілець", "example": "This is my chair.", "level": "A1" },
  { "id": 38, "en": "house", "uk": "будинок", "example": "The house is new.", "level": "A1" },
  { "id": 39, "en": "car", "uk": "машина", "example": "My car is fast.", "level": "A1" },
  { "id": 40, "en": "city", "uk": "місто", "example": "The city is big.", "level": "A1" },
  { "id": 41, "en": "school", "uk": "школа", "example": "I go to school.", "level": "A1" },
  { "id": 42, "en": "work", "uk": "робота", "example": "I like my work.", "level": "A1" },
  { "id": 43, "en": "money", "uk": "гроші", "example": "He has money.", "level": "A1" },
  { "id": 44, "en": "love", "uk": "любов", "example": "Love is strong.", "level": "A1" },
  { "id": 45, "en": "time", "uk": "час", "example": "Time is important.", "level": "A1" },
  { "id": 46, "en": "year", "uk": "рік", "example": "This year is good.", "level": "A1" },
  { "id": 47, "en": "week", "uk": "тиждень", "example": "A week has seven days.", "level": "A1" },
  { "id": 48, "en": "month", "uk": "місяць", "example": "A month has 30 days.", "level": "A1" },
  { "id": 49, "en": "life", "uk": "життя", "example": "Life is beautiful.", "level": "A2" },
  { "id": 50, "en": "world", "uk": "світ", "example": "The world is big.", "level": "A1" },
  { "id": 51, "en": "people", "uk": "люди", "example": "People are kind.", "level": "A1" },
  { "id": 52, "en": "hand", "uk": "рука", "example": "My hand is small.", "level": "A1" },
  { "id": 53, "en": "eye", "uk": "око", "example": "She has blue eyes.", "level": "A1" },
  { "id": 54, "en": "head", "uk": "голова", "example": "My head hurts.", "level": "A1" },
  { "id": 55, "en": "foot", "uk": "нога (ступня)", "example": "His foot is big.", "level": "A1" },
  { "id": 56, "en": "dog", "uk": "собака", "example": "The dog runs fast.", "level": "A1" },
  { "id": 57, "en": "cat", "uk": "кіт", "example": "The cat is black.", "level": "A1" },
  { "id": 58, "en": "sun", "uk": "сонце", "example": "The sun is bright.", "level": "A1" },
  { "id": 59, "en": "moon", "uk": "місяць", "example": "The moon is white.", "level": "A1" },
  { "id": 60, "en": "star", "uk": "зірка", "example": "The star is far.", "level": "A1" },
  { "id": 61, "en": "sky", "uk": "небо", "example": "The sky is blue.", "level": "A1" },
  { "id": 62, "en": "earth", "uk": "земля", "example": "The earth is round.", "level": "A1" },
  { "id": 63, "en": "fire", "uk": "вогонь", "example": "The fire is hot.", "level": "A1" },
  { "id": 64, "en": "air", "uk": "повітря", "example": "The air is clean.", "level": "A1" },
  { "id": 65, "en": "rain", "uk": "дощ", "example": "It is raining.", "level": "A1" },
  { "id": 66, "en": "snow", "uk": "сніг", "example": "It is snowing.", "level": "A1" },
  { "id": 67, "en": "hot", "uk": "гарячий", "example": "The soup is hot.", "level": "A1" },
  { "id": 68, "en": "cold", "uk": "холодний", "example": "The water is cold.", "level": "A1" },
  { "id": 69, "en": "good", "uk": "добрий", "example": "He is a good boy.", "level": "A1" },
  { "id": 70, "en": "bad", "uk": "поганий", "example": "It is a bad day.", "level": "A1" },
  { "id": 71, "en": "big", "uk": "великий", "example": "The car is big.", "level": "A1" },
  { "id": 72, "en": "small", "uk": "маленький", "example": "The dog is small.", "level": "A1" },
  { "id": 73, "en": "new", "uk": "новий", "example": "This is a new phone.", "level": "A1" },
  { "id": 74, "en": "old", "uk": "старий", "example": "This book is old.", "level": "A1" },
  { "id": 75, "en": "happy", "uk": "щасливий", "example": "I am happy.", "level": "A1" },
  { "id": 76, "en": "sad", "uk": "сумний", "example": "She is sad.", "level": "A1" },
  { "id": 77, "en": "beautiful", "uk": "красивий", "example": "A beautiful day.", "level": "A2" },
  { "id": 78, "en": "fast", "uk": "швидкий", "example": "The car is fast.", "level": "A1" },
  { "id": 79, "en": "slow", "uk": "повільний", "example": "The turtle is slow.", "level": "A1" },
  { "id": 80, "en": "yes", "uk": "так", "example": "Yes, I can.", "level": "A1" },
  { "id": 81, "en": "no", "uk": "ні", "example": "No, thank you.", "level": "A1" },
  { "id": 82, "en": "please", "uk": "будь ласка", "example": "Please help me.", "level": "A1" },
  { "id": 83, "en": "thank you", "uk": "дякую", "example": "Thank you very much.", "level": "A1" },
  { "id": 84, "en": "hello", "uk": "привіт", "example": "Hello, my friend!", "level": "A1" },
  { "id": 85, "en": "goodbye", "uk": "до побачення", "example": "Goodbye, see you later.", "level": "A1" },
  { "id": 86, "en": "sorry", "uk": "вибач", "example": "I am sorry.", "level": "A1" },
  { "id": 87, "en": "help", "uk": "допомога", "example": "Can you help me?", "level": "A1" },
  { "id": 88, "en": "stop", "uk": "стоп", "example": "Stop the car.", "level": "A1" },
  { "id": 89, "en": "go", "uk": "йти", "example": "I go to school.", "level": "A1" },
  { "id": 90, "en": "come", "uk": "приходити", "example": "Come here.", "level": "A1" },
  { "id": 91, "en": "see", "uk": "бачити", "example": "I see a bird.", "level": "A1" },
  { "id": 92, "en": "speak", "uk": "говорити", "example": "I speak English.", "level": "A1" },
  { "id": 93, "en": "eat", "uk": "їсти", "example": "I eat an apple.", "level": "A1" },
  { "id": 94, "en": "drink", "uk": "пити", "example": "I drink water.", "level": "A1" },
  { "id": 95, "en": "sleep", "uk": "спати", "example": "I sleep at night.", "level": "A1" },
  { "id": 96, "en": "read", "uk": "читати", "example": "I read a book.", "level": "A1" },
  { "id": 97, "en": "write", "uk": "писати", "example": "I write a letter.", "level": "A1" },
  { "id": 98, "en": "know", "uk": "знати", "example": "I know the answer.", "level": "A2" },
  { "id": 99, "en": "think", "uk": "думати", "example": "I think about it.", "level": "A2" },
  { "id": 100, "en": "want", "uk": "хотіти", "example": "I want water.", "level": "A1" },
  { "id": 101, "en": "can", "uk": "могти", "example": "I can run fast.", "level": "A1" },
  { "id": 102, "en": "will", "uk": "буду", "example": "I will help you.", "level": "A2" }

];

  // ---------- Налаштування та стани ----------
  const STATE = {
    route: 'home', // home, lessons, flashcards, quiz, profile
    words: [],
    progress: { learned: 0, total: 0, lastQuizScore: null },
    flashIndex: 0,
    quiz: { current: null, choices: [], score: 0, qIndex: 0, qCount: 5 }
  };

  // localStorage keys
  const LS = {
    words: 'speakeasy_words_v1',
    progress: 'speakeasy_progress_v1'
  };

  // ---------- HELPERS ----------
  const $ = sel => document.querySelector(sel);
  const $$ = sel => Array.from(document.querySelectorAll(sel));
  const saveLS = (key, obj) => localStorage.setItem(key, JSON.stringify(obj));
  const loadLS = (key, fallback) => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch(e) { return fallback; }
  };

  // Text-to-speech (Web Speech API)
  function speak(text, lang='en-US') {
    if (!('speechSynthesis' in window)) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 0.95;
    utter.pitch = 1;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  // Shuffle array
  function shuffle(a){ return a.slice().sort(()=>Math.random()-0.5); }

  // ---------- ROUTING & RENDER ----------
  function setRoute(route){
    STATE.route = route;
    $$('.nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.route===route));
    render();
  }

  function mount(){
    // load words / progress from LS or use sample
    STATE.words = loadLS(LS.words, SAMPLE_WORDS);
    STATE.progress = loadLS(LS.progress, { learned: 0, total: STATE.words.length, lastQuizScore: null });

    // set year
    $('#year').textContent = new Date().getFullYear();

    // nav listeners
    $$('.nav-btn').forEach(b => b.addEventListener('click', () => setRoute(b.dataset.route)));

    // initial render
    render();
  }

  function render(){
    const root = $('#app');
    root.innerHTML = '';
    if(STATE.route === 'home') root.appendChild(Home());
    if(STATE.route === 'lessons') root.appendChild(Lessons());
    if(STATE.route === 'flashcards') root.appendChild(Flashcards());
    if(STATE.route === 'quiz') root.appendChild(QuizPage());
    if(STATE.route === 'profile') root.appendChild(Profile());
  }

  // ---------- UI COMPONENTS ----------
  function containerCard(title, child){
    const el = document.createElement('section');
    el.className = 'card';
    if (title){
      const h = document.createElement('h2');
      h.textContent = title;
      el.appendChild(h);
    }
    if (child) el.appendChild(child);
    return el;
  }

  // HOME
  function Home(){
    const wrap = document.createElement('div');
    wrap.className = 'grid';

    const intro = document.createElement('div');
    intro.className = 'card full';
    intro.innerHTML = `
      <h2>Ласкаво просимо в SpeakEasy</h2>
      <p>Навчайся щодня: словник, флешкарти, швидкі тести і відстеження прогресу. Натисни 'Уроки' щоб почати.</p>
      <div class="controls" style="margin-top:12px">
        <button class="btn" id="start-lessons">Почати урок</button>
        <button class="secondary" id="to-quiz">Швидкий тест</button>
      </div>
    `;
    wrap.appendChild(intro);

    // quick stats
    const stats = document.createElement('div');
    stats.className = 'card';
    const learned = STATE.progress.learned || 0;
    const total = STATE.progress.total || STATE.words.length;
    stats.innerHTML = `
      <h2>Прогрес</h2>
      <p class="small">Вивчені слова: <strong>${learned}/${total}</strong></p>
      <div class="progress-bar" aria-hidden="true" style="margin-top:8px">
        <div class="progress-fill" style="width:${Math.round((learned/Math.max(1,total))*100)}%"></div>
      </div>
    `;
 // recent vocab
    const recent = document.createElement('div');
    recent.className = 'card';
    recent.innerHTML = `<><h2>Останні слова</h2><div id="recent-list" class="small"></div></>`;
    wrap.appendChild(recent);

    // listeners
    setTimeout(()=>{
      $('#start-lessons').addEventListener('click', ()=> setRoute('lessons'));
      $('#to-quiz').addEventListener('click', ()=> {
        STATE.quiz.qIndex = 0; STATE.quiz.score = 0;
        setRoute('quiz');
      });
      const list = $('#recent-list');
      const slice = STATE.words.slice(0,5);
      list.innerHTML = slice.map(w=>`<div style="margin-bottom:8px"><strong>${w.en}</strong> — ${w.uk} <button class="secondary small-speak" data-text="${w.en}">🔊</button></div>`).join('');
      $$('.small-speak').forEach(b=>b.addEventListener('click', e=>speak(e.target.dataset.text)));
    },0);

    return wrap;
  }

  // LESSONS
  function Lessons(){
    const wrap = document.createElement('div');
    wrap.className = 'grid';

    // lesson list
    const listCard = document.createElement('div');
    listCard.className = 'card full';
    listCard.innerHTML = `
      <h2>Уроки</h2>
      <p>Вибери рівень або тему. Тут можна додавати власні слова.</p>
    `;

    // controls: add word
    const addForm = document.createElement('div');
    addForm.style.marginTop = '12px';
    addForm.innerHTML = `
      <div class="search">
        <input id="q-en" class="input" placeholder="English word (e.g., 'table')" />
        <input id="q-uk" class="input" placeholder="Український переклад" />
        <button id="add-word" class="btn">Додати</button>
      </div>
      <div id="lesson-list" style="margin-top:14px"></div>
    `;
    listCard.appendChild(addForm);
    wrap.appendChild(listCard);

    // left column: words
    const vocab = document.createElement('div');
    vocab.className = 'card';
    vocab.innerHTML = `<h2>Словник</h2><p class="small">Пошук та редагування слів.</p>
      <div style="margin-top:12px">
        <input id="search" class="input" placeholder="Шукати слово..." />
      </div>
      <div id="vocab-list" style="margin-top:12px"></div>
    `;
    wrap.appendChild(vocab);

    // right column: lesson overview
    const overview = document.createElement('div');
    overview.className = 'card';
    overview.innerHTML = `
      <h2>Швидкий огляд</h2>
      <p class="small">Озвучка, повторення, фільтри.</p>
      <div style="margin-top:10px" class="controls">
        <button id="repeat-unknown" class="secondary">Повторити невивчені</button>
        <button id="export" class="secondary">Експорт JSON</button>
      </div>
    `;
    wrap.appendChild(overview);

    // listeners & populating lists
    setTimeout(()=> {
      const vocabList = $('#vocab-list');
      function renderVocab(filter=''){
        const f = filter.trim().toLowerCase();
        const arr = STATE.words.filter`w => !f  w.en.includes(f)  (w.uk && w.uk.includes(f))`;
        vocabList.innerHTML = arr.map(w=>`
          <div style="display:flex;justify-content:space-between;align-items:center;padding:8px;border-radius:8px;margin-bottom:8px;background:rgba(255,255,255,0.01)">
            <div>
              <div style="font-weight:700">${w.en} <span style="color:var(--muted);font-weight:500">— ${w.uk || ''}</span></div>
              <div class="small">${w.example || ''}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center">
              <button class="secondary small-speak" data-text="${w.en}">🔊</button>
              <button class="secondary edit-word" data-id="${w.id}">Редаг</button>
              <button class="secondary del-word" data-id="${w.id}">Видал</button>
            </div>
          </div>
        `).join('');
        $$('.small-speak').forEach(b=>b.addEventListener('click', e=>speak(e.target.dataset.text)));
        $$('.del-word').forEach(b=>b.addEventListener('click', e=>{
          const id = +e.target.dataset.id;
          if (!confirm('Видалити слово?')) return;
          STATE.words = STATE.words.filter(x=>x.id!==id);
          STATE.progress.total = STATE.words.length;
          saveLS(LS.words, STATE.words);
          saveLS(LS.progress, STATE.progress);
          renderVocab($('#search').value);
        }));
        $$('.edit-word').forEach(b=>b.addEventListener('click', e=>{
          const id = +e.target.dataset.id;
          const w = STATE.words.find(x=>x.id===id);
          const newEn = prompt('Англійське слово', w.en);
          if (!newEn) return;
          w.en = newEn.trim();
          w.uk = prompt('Український переклад', w.uk) || w.uk;
          saveLS(LS.words, STATE.words);
          renderVocab($('#search').value);
        }));
      }
      renderVocab();

      // add new word
      $('#add-word').addEventListener('click', ()=>{
        const en = $('#q-en').value.trim();
        const uk = $('#q-uk').value.trim();
        if (!en) { alert('Введи англійське слово'); return; }
        const id = Date.now();
        STATE.words.unshift({id,en,uk,example:'',level:'A1'});
        STATE.progress.total = STATE.words.length;
        saveLS(LS.words, STATE.words);
        saveLS(LS.progress, STATE.progress);
        $('#q-en').value=''; $('#q-uk').value='';
        renderVocab();
      });

      // search
      $('#search').addEventListener('input', e => renderVocab(e.target.value));

      // repeat unknown (demo: shuffle)
      $('#repeat-unknown').addEventListener('click', ()=>{
        STATE.flashIndex = 0;
        STATE.words = shuffle(STATE.words);
        saveLS(LS.words, STATE.words);
        setRoute('flashcards');
      });

      $('#export').addEventListener('click', ()=>{
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(STATE.words,null,2));
        const a = document.createElement('a');
        a.href = dataStr; a.download = "vocab.json";
        document.body.appendChild(a); a.click(); a.remove();
      });
    },0);

    return wrap;
  }

  // FLASHCARDS
  function Flashcards(){
    const wrap = document.createElement('div');
    wrap.className = 'grid';

    const card = document.createElement('div');
    card.className = 'card full';
    card.innerHTML = `<><h2>Флешкарти</h2><p class="small">Натисни на картку щоб перевернути. Використовуйте голос для озвучки.</p></>`;
    wrap.appendChild(card);

    const fc = document.createElement('div');
    fc.className = 'card full';
    fc.innerHTML = `
      <div id="flash-area" class="flashcard" tabindex="0" role="button" aria-pressed="false">
        <div id="flash-front"></div>
        <div id="flash-back" style="display:none"></div>
      </div>
      <div style="margin-top:12px;display:flex;gap:8px;justify-content:center">
        <button id="prev" class="secondary">⬅</button>
        <button id="speak" class="btn">🔊 Озвучити</button>
        <button id="flip" class="secondary">Перевернути</button>
        <button id="next" class="secondary">➡</button>
        <button id="mark-known" class="btn">Позначити вивченим</button>
      </div>
    `;
    wrap.appendChild(fc);

    setTimeout(()=>{
      function renderCard(){
        const w = STATE.words[STATE.flashIndex % STATE.words.length];
        if (!w) { $('#flash-front').textContent = 'Словник порожній'; $('#flash-back').textContent = ''; return; }
        $('#flash-front').textContent = w.en;
        $('#flash-back').textContent = `${w.uk || ''}\n\n${w.example || ''}`;
      }
      renderCard();

      $('#flip').addEventListener('click', ()=>{
        const front = $('#flash-front'), back = $('#flash-back');
        const fa = $('#flash-area');
        if (front.style.display !== 'none') {
          front.style.
          display = 'none'; back.style.display = 'block';
          fa.setAttribute('aria-pressed','true');
        } else {
          front.style.display = 'block'; back.style.display = 'none';
          fa.setAttribute('aria-pressed','false');
        }
      });
      $('#speak').addEventListener('click', ()=> {
        const w = STATE.words[STATE.flashIndex % STATE.words.length];
        if (w) speak(w.en);
      });
      $('#next').addEventListener('click', ()=> { STATE.flashIndex = (STATE.flashIndex+1) % STATE.words.length; renderCard(); });
      $('#prev').addEventListener('click', ()=> { STATE.flashIndex = (STATE.flashIndex-1+STATE.words.length) % STATE.words.length; renderCard(); });
      $('#mark-known').addEventListener('click', ()=>{
        const w = STATE.words[STATE.flashIndex % STATE.words.length];
        if (!w) return;
        // помітити як вивчене — просто видалимо або перемістимо в кінець
        STATE.words = STATE.words.filter(x=>x.id !== w.id);
        STATE.progress.learned = (STATE.progress.learned || 0) + 1;
        STATE.progress.total = STATE.words.length;
        saveLS(LS.words, STATE.words);
        saveLS(LS.progress, STATE.progress);
        if (STATE.words.length === 0) { alert('Вітаю! Ти вивчив всі слова.'); setRoute('home'); return; }
        STATE.flashIndex = STATE.flashIndex % STATE.words.length;
        renderCard();
      });

      // keyboard support: space flip, arrow nav
      document.addEventListener('keydown', (e)=>{
        if (STATE.route !== 'flashcards') return;
        if (e.key === ' '){ e.preventDefault(); $('#flip').click(); }
        if (e.key === 'ArrowRight') $('#next').click();
        if (e.key === 'ArrowLeft') $('#prev').click();
      });
    },0);

    return wrap;
  }

  // QUIZ
  function QuizPage(){
    const wrap = document.createElement('div');
    wrap.className = 'grid';

    const qcard = document.createElement('div');
    qcard.className = 'card full';
    qcard.innerHTML = `<h2>Тест — швидка перевірка</h2><p class="small">Відповідай на ${STATE.quiz.qCount} питань — в кінці побачиш результат.</p>
      <div id="quiz-area" style="margin-top:12px"></div>
    `;
    wrap.appendChild(qcard);

    setTimeout(()=> {
      prepareQuiz();
      renderQuestion();
    },0);

    function prepareQuiz(){
      const pool = STATE.words.length ? STATE.words : SAMPLE_WORDS;
      const qCount = Math.min(pool.length, STATE.quiz.qCount);
      STATE.quiz.qIndex = 0;
      STATE.quiz.score = 0;
      STATE.quiz.questions = shuffle(pool).slice(0, qCount);
    }

    function renderQuestion(){
      const area = $('#quiz-area');
      const qIndex = STATE.quiz.qIndex;
      const qTotal = STATE.quiz.questions.length;
      if (qIndex >= qTotal){
        // finished
        area.innerHTML = `<div style="text-align:center"><h3>Результат: ${STATE.quiz.score}/${qTotal}</h3>
          <p class="small">Ваш результат збережено у профілі.</p>
          <div style="margin-top:12px"><button id="back-home" class="btn">На головну</button> <button id="retry" class="secondary">Повторити</button></div></div>`;
        STATE.progress.lastQuizScore = `${STATE.quiz.score}/${qTotal}`;
        saveLS(LS.progress, STATE.progress);
        $('#back-home').addEventListener('click', ()=> setRoute('home'));
        $('#retry').addEventListener('click', ()=> { prepareQuiz(); renderQuestion(); });
        return;
      }

      const q = STATE.quiz.questions[qIndex];
      // prepare choices (one correct + 3 wrong)
      const pool = STATE.words.length ? STATE.words : SAMPLE_WORDS;
      const wrong = shuffle(pool.filter(x=>x.id !== q.id)).slice(0,3).map(x=>x.en);
      const choices = shuffle([q.en, ...wrong]);

      area.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div class="small">Питання ${qIndex+1}/${qTotal}</div>
          <div class="small">Рівень: ${q.level || '-'}</div>
        </div>
        <div style="margin-top:10px">
          <div style="font-size:20px;font-weight:700">${q.uk}</div>
          <div class="small" style="margin-top:6px">Яке англ. слово відповідає перекладу?</div>
        </div>
        <div class="options" style="margin-top:12px">
          ${choices.map((c,idx)=>`<button class="option" data-choice="${c}" data-correct="${c===q.en}" id="opt${idx}">${c}</button>`).join('')}
        </div>
      `;
      // attach listeners
      choices.forEach((c, idx)=>{
        const btn = $(`#opt${idx}`);
        btn.addEventListener('click', ()=>{
          const correct = btn.dataset.correct === 'true';
          if (correct){
            btn.classList.add('correct');
            STATE.quiz.score++;
          } else {
            btn.classList.add('wrong');
            // highlight correct one
            $$('.option').forEach(o=>{ if (o.dataset.correct === 'true') o.classList.add('correct'); });
          }
          // disable
          $$('.option').forEach(o=> o.disabled = true);
          setTimeout(()=> {
            STATE.quiz.qIndex++;
            renderQuestion();
          }, 900);
        });
      });
    }

    return wrap;
  }

  // PROFILE
  function Profile(){
    const wrap = document.createElement('div');
    wrap.className = 'grid';

    const prof = document.createElement('div');
    prof.className = 'card';
    prof.innerHTML = `<h2>Профіль</h2>
      <p class="small">Локальна статистика (зберігається в браузері).</p>
      <div style="margin-top:12px">
        <div class="small">Останній результат тесту: <strong>${STATE.progress.lastQuizScore || '—'}</strong></div>
        <div style="margin-top:10px" class="small">Вивчені слова: <strong>${STATE.progress.learned || 0}</strong></div>
      </div>
      <div style="margin-top:12px">
        <button id="reset" class="secondary">Скинути прогрес</button>
      </div>
    `;
    wrap.appendChild(prof);

    const about = document.createElement('div');
    about.className = 'card';
    about.innerHTML = `
    <h2>Поради</h2>
    <p class="small">Повторюй флешкарти щодня, роби короткі тести та додавай свої слова. Використовуй озвучку для вимови.</p>
    `;
    wrap.appendChild(about);

    setTimeout(()=>{
      $('#reset').addEventListener('click', ()=>{
        if (!confirm('Скинути прогрес і повернути початкові слова?')) return;
        localStorage.removeItem(LS.words);
        localStorage.removeItem(LS.progress);
        STATE.words = SAMPLE_WORDS.slice();
        STATE.progress = { learned: 0, total: STATE.words.length, lastQuizScore: null };
        saveLS(LS.words, STATE.words);
        saveLS(LS.progress, STATE.progress);
        alert('Скинуто. Повертаю на головну.');
        setRoute('home');
      });
    },0);

    return wrap;
  }

  // ---------- Публічні функції ----------
  return { mount };
})();

// старт
document.addEventListener('DOMContentLoaded', () => App.mount());

