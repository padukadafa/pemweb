class AstronomyDashboard {
  constructor() {
    this.apiMoonPhase = "https://api.farmsense.net/v1/moonphases/?d=";
    this.planets = ["Mars", "Venus", "Jupiter", "Saturn", "Mercury"];
    this.quotes = [
      "Somewhere, something incredible is waiting to be known. – Carl Sagan",
      "Equipped with his five senses, man explores the universe around him. – Edwin Hubble",
      "The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever. – Konstantin Tsiolkovsky",
      "That's one small step for a man, one giant leap for mankind. – Neil Armstrong",
    ];
  }

  start() {
    this.updateLocalTime();
    this.fetchSunTimes();
    this.fetchMoonPhase();
    this.loadPlanets();
    this.loadRandomQuote();
    this.setupThemeToggle();
  }

  updateLocalTime = () => {
    const clock = () => {
      const now = new Date();
      document.getElementById("local-time").textContent =
        now.toLocaleTimeString();
    };
    clock();
    setInterval(clock, 1000);
  };

  fetchSunTimes = async () => {
    try {
      const response = await fetch(
        `https://api.sunrise-sunset.org/json?lat=-6.2&lng=106.8&formatted=0`
      );
      const data = await response.json();
      if (data.status === "OK") {
        const sunrise = new Date(data.results.sunrise).toLocaleTimeString();
        const sunset = new Date(data.results.sunset).toLocaleTimeString();
        document.getElementById("sunrise").textContent = `Sunrise: ${sunrise}`;
        document.getElementById("sunset").textContent = `Sunset: ${sunset}`;
      }
    } catch (error) {
      console.error("Error fetching sun times:", error);
    }
  };

  fetchMoonPhase = async () => {
    try {
      const date = Math.floor(new Date().getTime() / 1000);
      const response = await fetch(`${this.apiMoonPhase}${date}`);
      const data = await response.json();
      if (data.length > 0) {
        document.getElementById("moon-phase").textContent =
          data[0].Phase || "Unknown";
      }
    } catch (error) {
      document.getElementById("moon-phase").textContent =
        "Gagal mengambil data bulan";
    }
  };

  loadPlanets = () => {
    const list = document.getElementById("planets-list");
    list.innerHTML = "";
    this.planets.forEach((planet) => {
      const li = document.createElement("li");
      li.textContent = planet;
      list.appendChild(li);
    });
  };

  loadRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    document.getElementById("science-quote").textContent =
      this.quotes[randomIndex];
  };

  setupThemeToggle = () => {
    const button = document.getElementById("toggle-theme");
    button.addEventListener("click", () => {
      document.body.classList.toggle("light");
    });
  };
}
class NotesManager {
  constructor() {
    this.notes = JSON.parse(localStorage.getItem("astro_notes")) || [];
    this.notesList = document.getElementById("notes-list");
    this.noteForm = document.getElementById("note-form");
    this.noteInput = document.getElementById("note-input");
  }

  start() {
    this.renderNotes();
    this.noteForm.addEventListener("submit", this.addNote);
  }

  saveNotes = () => {
    localStorage.setItem("astro_notes", JSON.stringify(this.notes));
  };

  addNote = (e) => {
    e.preventDefault();
    const noteText = this.noteInput.value.trim();
    if (noteText !== "") {
      this.notes.push(noteText);
      this.saveNotes();
      this.renderNotes();
      this.noteInput.value = "";
    }
  };

  deleteNote = (index) => {
    this.notes.splice(index, 1);
    this.saveNotes();
    this.renderNotes();
  };

  editNote = (index) => {
    const newNote = prompt("Edit Catatan:", this.notes[index]);
    if (newNote !== null && newNote.trim() !== "") {
      this.notes[index] = newNote.trim();
      this.saveNotes();
      this.renderNotes();
    }
  };

  renderNotes = () => {
    this.notesList.innerHTML = "";
    this.notes.forEach((note, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
          ${note}
          <div>
            <button onclick="notesManager.editNote(${index})">Edit</button>
            <button onclick="notesManager.deleteNote(${index})">Hapus</button>
          </div>
        `;
      this.notesList.appendChild(li);
    });
  };
}
const notesManager = new NotesManager();
notesManager.start();

const dashboard = new AstronomyDashboard();
dashboard.start();
