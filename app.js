// ─── Seed Data ───────────────────────────────────────────────
const SEED_DATA = [
  {
    id: 's1', date: '2026-02-04', type: 'Bröst',
    exercises: [
      { name: 'Bröst', sets: 3, reps: 10, weight: 18, notes: '' },
      { name: 'Triceps', sets: 3, reps: 10, weight: 22.5, notes: '' },
      { name: 'Hängande situps', sets: 3, reps: 20, weight: 0, notes: '' },
      { name: 'Vingbröst', sets: 3, reps: 10, weight: 9, notes: '' },
      { name: 'Dips', sets: 3, reps: 7, weight: 0, notes: 'Klarade 7, 5, 4', skipped: false },
    ]
  },
  {
    id: 's2', date: '2026-02-07', type: 'Rygg',
    exercises: [
      { name: 'Pullups', sets: 3, reps: 6, weight: 0, notes: '' },
      { name: 'Biceps curls', sets: 3, reps: 10, weight: 10, notes: '' },
      { name: 'Ryggsitups', sets: 3, reps: 10, weight: 0, notes: '' },
      { name: 'Pullups maskin snäv', sets: 3, reps: 10, weight: 40, notes: '' },
      { name: 'Axlar maskin', sets: 3, reps: 10, weight: 30, notes: '' },
      { name: 'Marklyft', sets: 3, reps: 10, weight: 10, notes: 'Stång+10kg' },
      { name: 'Axlar frivikt sidan+fram', sets: 3, reps: 14, weight: 6, notes: '' },
    ]
  },
  {
    id: 's3', date: '2026-02-10', type: 'Bröst',
    exercises: [
      { name: 'Bröst', sets: 3, reps: 10, weight: 20, notes: '' },
      { name: 'Triceps', sets: 3, reps: 10, weight: 25, notes: '' },
      { name: 'Hängande situps', sets: 3, reps: 20, weight: 0, notes: '' },
      { name: 'Vingbröst', sets: 3, reps: 10, weight: 9, notes: '', skipped: true },
      { name: 'Dips', sets: 4, reps: 7, weight: 0, notes: 'Klarade 4, 5, 6, 5' },
      { name: 'Axlar vingrörelse', sets: 3, reps: 10, weight: 6, notes: '' },
    ]
  },
  {
    id: 's4', date: '2026-02-12', type: 'Rygg',
    exercises: [
      { name: 'Pullups', sets: 3, reps: 7, weight: 0, notes: '' },
      { name: 'Biceps curls', sets: 3, reps: 10, weight: 12, notes: 'Klarade 10, 9, 8' },
      { name: 'Ryggsitups', sets: 3, reps: 10, weight: 0, notes: '' },
      { name: 'Pullups maskin snäv', sets: 3, reps: 10, weight: 45, notes: '' },
      { name: 'Axlar maskin', sets: 3, reps: 10, weight: 35, notes: '' },
      { name: 'Marklyft', sets: 3, reps: 10, weight: 20, notes: 'Stång+20kg' },
      { name: 'Axlar frivikt sidan+fram', sets: 3, reps: 14, weight: 6, notes: '' },
    ]
  },
  {
    id: 's5', date: '2026-02-15', type: 'Bröst',
    exercises: [
      { name: 'Bröst', sets: 3, reps: 10, weight: 20, notes: '' },
      { name: 'Triceps', sets: 3, reps: 10, weight: 25, notes: '' },
      { name: 'Hängande situps', sets: 3, reps: 20, weight: 0, notes: '' },
      { name: 'Vingbröst', sets: 3, reps: 10, weight: 9, notes: '', skipped: true },
      { name: 'Dips', sets: 4, reps: 7, weight: 0, notes: '' },
      { name: 'Axlar vingrörelse', sets: 3, reps: 10, weight: 6, notes: '' },
      { name: 'Benpress maskin', sets: 3, reps: 10, weight: 35, notes: '' },
    ]
  },
  {
    id: 's6', date: '2026-02-19', type: 'Ben',
    exercises: [
      { name: 'Baksida lår', sets: 3, reps: 10, weight: 40, notes: 'Inställning: 2/4' },
      { name: 'Framsida lår', sets: 3, reps: 10, weight: 40, notes: 'Inställning: 2/4' },
      { name: 'Insida lår', sets: 3, reps: 12, weight: 30, notes: '' },
      { name: 'Benpress', sets: 3, reps: 12, weight: 70, notes: '' },
      { name: 'Vader', sets: 3, reps: 12, weight: 0, notes: '' },
      { name: 'Situps utsträckta armar', sets: 3, reps: 10, weight: 0, notes: '' },
    ]
  },
  {
    id: 's7', date: '2026-02-20', type: 'Rygg',
    exercises: [
      { name: 'Pullups', sets: 3, reps: 7, weight: 0, notes: '' },
      { name: 'Biceps curls', sets: 3, reps: 10, weight: 12, notes: 'Klarade 10, 10, 8' },
      { name: 'Ryggsitups', sets: 3, reps: 10, weight: 10, notes: '' },
      { name: 'Pullups maskin snäv', sets: 3, reps: 10, weight: 50, notes: '' },
      { name: 'Axlar maskin', sets: 3, reps: 10, weight: 40, notes: '' },
      { name: 'Marklyft', sets: 3, reps: 10, weight: 20, notes: 'Stång+20kg' },
      { name: 'Axlar frivikt 45 grader', sets: 3, reps: 8, weight: 6, notes: '' },
      { name: 'Kettlebell sving', sets: 3, reps: 7, weight: 20, notes: '' },
    ]
  },
  {
    id: 's8', date: '2026-02-22', type: 'Bröst',
    exercises: [
      { name: 'Bröst', sets: 3, reps: 10, weight: 22, notes: '' },
      { name: 'Triceps', sets: 3, reps: 10, weight: 25, notes: '' },
      { name: 'Hängande situps', sets: 3, reps: 25, weight: 0, notes: '' },
      { name: 'Vingbröst', sets: 3, reps: 10, weight: 9, notes: '' },
      { name: 'Dips', sets: 4, reps: 8, weight: 0, notes: '' },
      { name: 'Axlar vingrörelse', sets: 3, reps: 10, weight: 6, notes: '' },
      { name: 'Axlar press frivikt', sets: 3, reps: 10, weight: 12, notes: '' },
      { name: 'Benpress maskin', sets: 3, reps: 10, weight: 35, notes: '' },
      { name: 'Triceps frivikt bakom nacken', sets: 3, reps: 7, weight: 9, notes: '' },
      { name: 'Axlar frivikt 45 grader', sets: 3, reps: 10, weight: 6, notes: '' },
    ]
  },
  {
    id: 's9', date: '2026-02-27', type: 'Ben',
    exercises: [
      { name: 'Baksida lår', sets: 3, reps: 10, weight: 45, notes: 'Inställning: 2/4' },
      { name: 'Framsida lår', sets: 3, reps: 10, weight: 45, notes: 'Inställning: 2/4' },
      { name: 'Insida lår', sets: 3, reps: 12, weight: 35, notes: '' },
      { name: 'Benpress', sets: 3, reps: 12, weight: 80, notes: '' },
      { name: 'Vader', sets: 3, reps: 12, weight: 0, notes: '' },
      { name: 'Situps utsträckta armar', sets: 3, reps: 10, weight: 0, notes: '' },
      { name: 'Biceps curls', sets: 3, reps: 10, weight: 12, notes: '' },
      { name: 'Hängande situps', sets: 3, reps: 25, weight: 0, notes: '' },
    ]
  },
  {
    id: 's10', date: '2026-03-02', type: 'Rygg',
    exercises: [
      { name: 'Pullups', sets: 3, reps: 8, weight: 0, notes: '' },
      { name: 'Biceps curls', sets: 3, reps: 10, weight: 12, notes: '' },
      { name: 'Ryggsitups', sets: 3, reps: 12, weight: 10, notes: '' },
      { name: 'Pullups maskin snäv', sets: 3, reps: 10, weight: 50, notes: '' },
      { name: 'Axlar maskin', sets: 3, reps: 10, weight: 40, notes: '' },
      { name: 'Marklyft', sets: 3, reps: 10, weight: 25, notes: 'Stång+25kg' },
      { name: 'Axlar frivikt 45 grader', sets: 3, reps: 10, weight: 6, notes: '' },
      { name: 'Kettlebell sving', sets: 3, reps: 7, weight: 20, notes: '', skipped: true },
    ]
  },
];

// ─── Data Layer ──────────────────────────────────────────────
const DB = {
  KEY: 'gymtracker_workouts',

  init() {
    if (!localStorage.getItem(this.KEY)) {
      localStorage.setItem(this.KEY, JSON.stringify(SEED_DATA));
    }
  },

  getAll() {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]')
      .sort((a, b) => b.date.localeCompare(a.date));
  },

  get(id) {
    return this.getAll().find(w => w.id === id);
  },

  save(workout) {
    const all = this.getAll();
    const idx = all.findIndex(w => w.id === workout.id);
    if (idx >= 0) all[idx] = workout;
    else all.push(workout);
    localStorage.setItem(this.KEY, JSON.stringify(all));
  },

  delete(id) {
    const all = this.getAll().filter(w => w.id !== id);
    localStorage.setItem(this.KEY, JSON.stringify(all));
  },

  getByType(type) {
    return this.getAll()
      .filter(w => w.type === type)
      .sort((a, b) => b.date.localeCompare(a.date));
  },

  getLastByType(type) {
    return this.getByType(type)[0] || null;
  },

  getFirstByType(type) {
    const byType = this.getByType(type);
    return byType[byType.length - 1] || null;
  },

  getPreviousByType(type, date) {
    return this.getAll()
      .filter(w => w.type === type && w.date < date)
      .sort((a, b) => b.date.localeCompare(a.date))[0] || null;
  },

  getFirstByTypeBeforeDate(type, date) {
    const byType = this.getAll()
      .filter(w => w.type === type && w.date <= date)
      .sort((a, b) => a.date.localeCompare(b.date));
    return byType[0] || null;
  },

  getAllExerciseNames() {
    const map = {};
    this.getAll().forEach(w => {
      w.exercises.forEach(e => {
        if (!e.name) return;
        if (!map[e.name] || w.date > map[e.name].date) {
          map[e.name] = { sets: e.sets, reps: e.reps, weight: e.weight, date: w.date };
        }
      });
    });
    return Object.entries(map)
      .map(([name, info]) => ({ name, ...info }))
      .sort((a, b) => a.name.localeCompare(b.name, 'sv'));
  },

  getTypes() {
    const types = [...new Set(this.getAll().map(w => w.type))];
    const order = ['Bröst', 'Rygg', 'Ben'];
    return order.filter(t => types.includes(t))
      .concat(types.filter(t => !order.includes(t)));
  }
};

// ─── Theme ───────────────────────────────────────────────────
const Theme = {
  apply() {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }
};

// ─── Helpers ─────────────────────────────────────────────────
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function formatDate(iso) {
  const d = new Date(iso + 'T12:00:00');
  const day = d.getDate();
  const months = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun',
    'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
  return `${day} ${months[d.getMonth()]}`;
}

function formatDateLong(iso) {
  const d = new Date(iso + 'T12:00:00');
  const days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
  const months = ['januari', 'februari', 'mars', 'april', 'maj', 'juni',
    'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
  return `${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]}`;
}

function typeEmoji(type) {
  const map = { 'Bröst': '💪', 'Rygg': '🏋️', 'Ben': '🦵' };
  return map[type] || '🏋️';
}

function exerciseSummary(workout) {
  return workout.exercises
    .filter(e => !e.skipped)
    .map(e => e.name)
    .join(', ');
}

// ─── Progression Calculation ─────────────────────────────────
function getProgression(exerciseName, currentWorkout) {
  const prev = DB.getPreviousByType(currentWorkout.type, currentWorkout.date);
  const first = DB.getFirstByTypeBeforeDate(currentWorkout.type, currentWorkout.date);

  const current = currentWorkout.exercises.find(e => e.name === exerciseName);
  if (!current) return null;

  const result = { weight: {}, reps: {} };

  if (prev) {
    const prevEx = prev.exercises.find(e => e.name === exerciseName);
    if (prevEx && !prevEx.skipped) {
      result.weight.vsPrev = current.weight - prevEx.weight;
      result.reps.vsPrev = current.reps - prevEx.reps;
    }
  }

  if (first && first.id !== currentWorkout.id) {
    const firstEx = first.exercises.find(e => e.name === exerciseName);
    if (firstEx && !firstEx.skipped) {
      result.weight.vsFirst = current.weight - firstEx.weight;
      result.reps.vsFirst = current.reps - firstEx.reps;
    }
  }

  return result;
}

// ─── App / Router ────────────────────────────────────────────
const App = {
  view: 'home',
  tab: 'home',
  params: {},
  editingWorkout: null,

  init() {
    DB.init();
    Theme.apply();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => Theme.apply());
    window.addEventListener('hashchange', () => this.route());
    this.route();
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    }
  },

  route() {
    const hash = decodeURIComponent(location.hash.slice(1)) || 'home';
    const [view, ...rest] = hash.split('/');
    this.view = view;
    this.params = { id: rest[0] };
    this.render();
  },

  navigate(hash) {
    location.hash = hash;
  },

  render() {
    const app = document.getElementById('app');
    switch (this.view) {
      case 'home': app.innerHTML = this.renderHome(); break;
      case 'history': app.innerHTML = this.renderHistory(); break;
      case 'stats': app.innerHTML = this.renderStats(); break;
      case 'new-type': app.innerHTML = this.renderTypeSelect(); break;
      case 'new-workout': app.innerHTML = this.renderNewWorkout(); break;
      case 'detail': app.innerHTML = this.renderDetail(); break;
      default: app.innerHTML = this.renderHome();
    }
    app.innerHTML += this.renderNav();
    this.bind();
  },

  // ─── Navigation ───────────────────────────────────────────
  renderNav() {
    const tabs = [
      { id: 'home', icon: '🏠', label: 'Hem' },
      { id: 'history', icon: '📋', label: 'Historik' },
      { id: 'stats', icon: '📊', label: 'Statistik' },
    ];
    const active = ['home', 'history', 'stats'].includes(this.view) ? this.view : 'home';
    return `<nav class="bottom-nav">${tabs.map(t =>
      `<button class="nav-item ${active === t.id ? 'active' : ''}" data-nav="${t.id}">
        <span class="nav-icon">${t.icon}</span>${t.label}
      </button>`
    ).join('')}</nav>`;
  },

  // ─── Home View ────────────────────────────────────────────
  renderHome() {
    const workouts = DB.getAll().slice(0, 10);
    return `
      <div class="header">
        <h1>GymTracker</h1>
      </div>
      <div class="page">
        <button class="new-workout-btn" data-action="new">+ Nytt pass</button>
        ${workouts.length ? `
          <div class="section-title">Senaste pass</div>
          ${workouts.map(w => this.renderWorkoutCard(w)).join('')}
        ` : `
          <div class="empty-state">
            <div class="empty-icon">🏋️</div>
            <p>Inga pass loggade ännu.<br>Tryck på knappen ovan för att börja!</p>
          </div>
        `}
      </div>`;
  },

  renderWorkoutCard(w) {
    return `
      <div class="workout-card" data-action="detail" data-id="${w.id}">
        <div class="workout-card-header">
          <span class="workout-card-type">${typeEmoji(w.type)} ${w.type}</span>
          <span class="workout-card-date">${formatDate(w.date)}</span>
        </div>
        <div class="workout-card-exercises">${exerciseSummary(w)}</div>
      </div>`;
  },

  // ─── History View ─────────────────────────────────────────
  renderHistory() {
    const workouts = DB.getAll();
    const grouped = {};
    workouts.forEach(w => {
      const key = w.date.slice(0, 7);
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(w);
    });

    const monthNames = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni',
      'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];

    return `
      <div class="header"><h1>Historik</h1></div>
      <div class="page">
        ${Object.entries(grouped).map(([key, wks]) => {
          const [y, m] = key.split('-');
          return `
            <div class="section-title">${monthNames[parseInt(m) - 1]} ${y}</div>
            ${wks.map(w => this.renderWorkoutCard(w)).join('')}
          `;
        }).join('')}
        ${workouts.length === 0 ? '<div class="empty-state"><p>Inga pass ännu.</p></div>' : ''}
      </div>`;
  },

  // ─── Stats View ───────────────────────────────────────────
  renderStats() {
    const types = DB.getTypes();
    const allWorkouts = DB.getAll();
    const totalCount = allWorkouts.length;

    return `
      <div class="header"><h1>Statistik</h1></div>
      <div class="page">
        <div class="stat-card">
          <h3>Totalt antal pass</h3>
          <div class="stat-value">${totalCount}</div>
        </div>
        ${types.map(type => this.renderTypeStats(type)).join('')}
      </div>`;
  },

  renderTypeStats(type) {
    const workouts = DB.getByType(type);
    if (workouts.length < 2) return '';

    const latest = workouts[0];
    const first = workouts[workouts.length - 1];

    const progressions = [];
    latest.exercises.forEach(ex => {
      if (ex.skipped) return;
      const firstEx = first.exercises.find(e => e.name === ex.name);
      if (!firstEx || firstEx.skipped) return;
      const weightDiff = ex.weight - firstEx.weight;
      const repsDiff = ex.reps - firstEx.reps;
      if (weightDiff !== 0 || repsDiff !== 0) {
        progressions.push({ name: ex.name, weightDiff, repsDiff, currentWeight: ex.weight });
      }
    });

    if (progressions.length === 0) return '';

    return `
      <div class="stat-card">
        <h3>${typeEmoji(type)} ${type} — progression sedan start</h3>
        ${progressions.map(p => `
          <div class="stat-row">
            <span class="stat-exercise-name">${p.name}${p.currentWeight > 0 ? ` (${p.currentWeight}kg)` : ''}</span>
            <span class="stat-exercise-progression">
              ${p.weightDiff !== 0 ? `<span class="badge ${p.weightDiff > 0 ? 'badge-up' : 'badge-down'}">
                ${p.weightDiff > 0 ? '▲' : '▼'} ${Math.abs(p.weightDiff)}kg
              </span>` : ''}
              ${p.repsDiff !== 0 ? `<span class="badge ${p.repsDiff > 0 ? 'badge-reps' : 'badge-down'}">
                ${p.repsDiff > 0 ? '▲' : '▼'} ${Math.abs(p.repsDiff)} reps
              </span>` : ''}
            </span>
          </div>
        `).join('')}
      </div>`;
  },

  // ─── Type Select ──────────────────────────────────────────
  renderTypeSelect() {
    const types = [
      { type: 'Bröst', emoji: '💪', desc: '' },
      { type: 'Rygg', emoji: '🔙', desc: '' },
      { type: 'Ben', emoji: '🦵', desc: '' },
    ];

    types.forEach(t => {
      const last = DB.getLastByType(t.type);
      t.desc = last ? `Senast: ${formatDate(last.date)}` : 'Inget tidigare pass';
    });

    return `
      <div class="header">
        <button class="header-back" data-action="back">← Tillbaka</button>
        <h1>Välj typ</h1>
        <span></span>
      </div>
      <div class="type-selector">
        ${types.map(t => `
          <button class="type-btn" data-action="start-workout" data-type="${t.type}">
            <span class="type-emoji">${t.emoji}</span>
            <div class="type-info">
              ${t.type}
              <small>${t.desc}</small>
            </div>
          </button>
        `).join('')}
      </div>`;
  },

  // ─── New Workout Form ─────────────────────────────────────
  renderNewWorkout() {
    const type = this.params.id || 'Bröst';

    if (!this.editingWorkout || this.editingWorkout.type !== type) {
      const last = DB.getLastByType(type);
      const exercises = last
        ? last.exercises.map(e => ({ ...e, skipped: false, done: false }))
        : [{ name: '', sets: 3, reps: 10, weight: 0, notes: '', skipped: false, done: false }];

      this.editingWorkout = {
        id: uid(),
        date: new Date().toISOString().slice(0, 10),
        type,
        exercises
      };
    }

    const w = this.editingWorkout;

    return `
      <div class="header">
        <button class="header-back" data-action="back">← Tillbaka</button>
        <h1>${typeEmoji(type)} ${type}</h1>
        <span></span>
      </div>
      <div class="page">
        <div class="date-input-row">
          <label style="color:var(--text-dim);font-size:14px;">Datum:</label>
          <input type="date" class="date-input" value="${w.date}" data-action="set-date">
        </div>

        ${w.exercises.map((ex, i) => this.renderExerciseForm(ex, i, w)).join('')}

        <button class="add-exercise-btn" data-action="show-exercise-picker">+ Lägg till övning</button>
        <button class="save-btn" data-action="save-workout">Spara pass</button>
      </div>`;
  },

  renderExerciseForm(ex, idx, workout) {
    const prev = DB.getPreviousByType(workout.type, workout.date);
    const first = DB.getFirstByTypeBeforeDate(workout.type, workout.date);

    let badges = '';
    if (prev && !ex.skipped) {
      const prevEx = prev.exercises.find(e => e.name === ex.name);
      if (prevEx && !prevEx.skipped) {
        const wd = ex.weight - prevEx.weight;
        const rd = ex.reps - prevEx.reps;
        if (wd !== 0) {
          badges += `<span class="badge ${wd > 0 ? 'badge-up' : 'badge-down'}">
            ${wd > 0 ? '▲' : '▼'} ${Math.abs(wd)}kg vs förra</span>`;
        }
        if (rd !== 0) {
          badges += `<span class="badge ${rd > 0 ? 'badge-reps' : 'badge-down'}">
            ${rd > 0 ? '▲' : '▼'} ${Math.abs(rd)} reps vs förra</span>`;
        }
        if (wd === 0 && rd === 0) {
          badges += `<span class="badge badge-same">= samma som förra</span>`;
        }
      }
    }
    if (first && !ex.skipped && first.date !== workout.date) {
      const firstEx = first.exercises.find(e => e.name === ex.name);
      if (firstEx && !firstEx.skipped) {
        const wd = ex.weight - firstEx.weight;
        if (wd !== 0) {
          badges += `<span class="badge ${wd > 0 ? 'badge-up' : 'badge-down'}">
            ${wd > 0 ? '▲' : '▼'} ${Math.abs(wd)}kg sedan start</span>`;
        }
      }
    }

    return `
      <div class="exercise-card ${ex.done ? 'exercise-done' : ''}" data-idx="${idx}" style="${ex.skipped ? 'opacity:0.5' : ''}">
        <div class="exercise-name-row">
          <input class="exercise-name-input" value="${ex.name}" placeholder="Övningsnamn"
            data-action="set-name" data-idx="${idx}">
          <button class="exercise-delete" data-action="delete-exercise" data-idx="${idx}">✕</button>
        </div>
        <div class="exercise-inputs">
          <div class="input-group">
            <label>Set</label>
            <input type="number" inputmode="numeric" value="${ex.sets}"
              data-action="set-field" data-idx="${idx}" data-field="sets">
          </div>
          <div class="input-group">
            <label>Reps</label>
            <input type="number" inputmode="numeric" value="${ex.reps}"
              data-action="set-field" data-idx="${idx}" data-field="reps">
          </div>
          <div class="input-group">
            <label>Vikt (kg)</label>
            <input type="number" inputmode="decimal" step="0.5" value="${ex.weight}"
              data-action="set-field" data-idx="${idx}" data-field="weight">
          </div>
        </div>
        <textarea class="exercise-notes" rows="1" placeholder="Anteckningar..."
          data-action="set-notes" data-idx="${idx}">${ex.notes}</textarea>
        <div class="exercise-skip-row">
          ${!ex.skipped ? `<button class="done-toggle ${ex.done ? 'active' : ''}"
            data-action="toggle-done" data-idx="${idx}">
            ${ex.done ? '✓ Klar' : '○ Markera klar'}
          </button>` : ''}
          <button class="skip-toggle ${ex.skipped ? 'active' : ''}"
            data-action="toggle-skip" data-idx="${idx}">
            ${ex.skipped ? '✕ Uteblev' : '○ Markera uteblev'}
          </button>
        </div>
        ${badges ? `<div class="progression">${badges}</div>` : ''}
      </div>`;
  },

  // ─── Detail View ──────────────────────────────────────────
  renderDetail() {
    const w = DB.get(this.params.id);
    if (!w) return '<div class="page"><p>Passet hittades inte.</p></div>';

    return `
      <div class="header">
        <button class="header-back" data-action="back">← Tillbaka</button>
        <h1>${typeEmoji(w.type)} ${w.type}</h1>
        <span></span>
      </div>
      <div class="page">
        <div class="section-title">${formatDateLong(w.date)}</div>
        ${w.exercises.map(ex => this.renderDetailExercise(ex, w)).join('')}
        <button class="delete-workout-btn" data-action="delete-workout" data-id="${w.id}">
          Ta bort detta pass
        </button>
      </div>`;
  },

  renderDetailExercise(ex, workout) {
    const prog = getProgression(ex.name, workout);
    let badges = '';

    if (prog) {
      if (prog.weight.vsPrev !== undefined) {
        const wd = prog.weight.vsPrev;
        if (wd !== 0) {
          badges += `<span class="badge ${wd > 0 ? 'badge-up' : 'badge-down'}">
            ${wd > 0 ? '▲' : '▼'} ${Math.abs(wd)}kg vs förra</span>`;
        }
      }
      if (prog.reps.vsPrev !== undefined) {
        const rd = prog.reps.vsPrev;
        if (rd !== 0) {
          badges += `<span class="badge ${rd > 0 ? 'badge-reps' : 'badge-down'}">
            ${rd > 0 ? '▲' : '▼'} ${Math.abs(rd)} reps vs förra</span>`;
        }
      }
      if (prog.weight.vsPrev === 0 && prog.reps.vsPrev === 0) {
        badges += `<span class="badge badge-same">= samma som förra</span>`;
      }
      if (prog.weight.vsFirst !== undefined && prog.weight.vsFirst !== 0) {
        badges += `<span class="badge ${prog.weight.vsFirst > 0 ? 'badge-up' : 'badge-down'}">
          ${prog.weight.vsFirst > 0 ? '▲' : '▼'} ${Math.abs(prog.weight.vsFirst)}kg sedan start</span>`;
      }
    }

    return `
      <div class="detail-exercise ${ex.skipped ? 'skipped' : ''}">
        <div class="detail-exercise-name">
          ${ex.name}
          ${ex.skipped ? '<span class="skipped-label"> — Uteblev</span>' : ''}
        </div>
        ${!ex.skipped ? `
          <div class="detail-exercise-stats">
            ${ex.sets} set × ${ex.reps} reps${ex.weight > 0 ? ` @ ${ex.weight}kg` : ''}
          </div>
        ` : ''}
        ${ex.notes ? `<div class="detail-exercise-notes">${ex.notes}</div>` : ''}
        ${badges && !ex.skipped ? `<div class="progression">${badges}</div>` : ''}
      </div>`;
  },

  // ─── Exercise Picker ────────────────────────────────────────
  showExercisePicker() {
    const existing = this.editingWorkout
      ? this.editingWorkout.exercises.map(e => e.name)
      : [];
    const allExercises = DB.getAllExerciseNames()
      .filter(e => !existing.includes(e.name));

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-sheet">
        <div class="modal-handle"></div>
        <div class="modal-title">Lägg till övning</div>
        <input class="modal-search" placeholder="Sök övning..." autofocus>
        <ul class="modal-list">
          <button class="modal-item modal-item-new" data-pick-new="true">
            + Ny egen övning
          </button>
          ${allExercises.map(e => `
            <button class="modal-item" data-pick-name="${e.name}"
              data-pick-sets="${e.sets}" data-pick-reps="${e.reps}" data-pick-weight="${e.weight}">
              <span>${e.name}</span>
              <span class="modal-item-detail">${e.sets}×${e.reps} ${e.weight > 0 ? e.weight + 'kg' : ''}</span>
            </button>
          `).join('')}
        </ul>
      </div>
    `;

    document.body.appendChild(overlay);

    // Close on overlay click
    overlay.addEventListener('click', (ev) => {
      if (ev.target === overlay) overlay.remove();
    });

    // Search filter
    const search = overlay.querySelector('.modal-search');
    const items = overlay.querySelectorAll('.modal-item[data-pick-name]');
    search.addEventListener('input', () => {
      const q = search.value.toLowerCase();
      items.forEach(item => {
        item.style.display = item.dataset.pickName.toLowerCase().includes(q) ? '' : 'none';
      });
    });

    // Pick existing exercise
    items.forEach(item => {
      item.addEventListener('click', () => {
        if (this.editingWorkout) {
          this.editingWorkout.exercises.push({
            name: item.dataset.pickName,
            sets: parseInt(item.dataset.pickSets),
            reps: parseInt(item.dataset.pickReps),
            weight: parseFloat(item.dataset.pickWeight),
            notes: '', skipped: false, done: false
          });
          overlay.remove();
          this.render();
        }
      });
    });

    // Pick new blank
    overlay.querySelector('[data-pick-new]').addEventListener('click', () => {
      if (this.editingWorkout) {
        this.editingWorkout.exercises.push({
          name: '', sets: 3, reps: 10, weight: 0, notes: '', skipped: false, done: false
        });
        overlay.remove();
        this.render();
      }
    });
  },

  // ─── Event Binding ────────────────────────────────────────
  bind() {
    document.querySelectorAll('[data-nav]').forEach(el => {
      el.addEventListener('click', () => this.navigate(el.dataset.nav));
    });

    document.querySelectorAll('[data-action]').forEach(el => {
      const action = el.dataset.action;

      if (action === 'new') {
        el.addEventListener('click', () => this.navigate('new-type'));
      }
      else if (action === 'back') {
        el.addEventListener('click', () => history.back());
      }
      else if (action === 'detail') {
        el.addEventListener('click', () => this.navigate(`detail/${el.dataset.id}`));
      }
      else if (action === 'start-workout') {
        el.addEventListener('click', () => {
          this.editingWorkout = null;
          this.navigate(`new-workout/${el.dataset.type}`);
        });
      }
      else if (action === 'set-date') {
        el.addEventListener('change', () => {
          if (this.editingWorkout) {
            this.editingWorkout.date = el.value;
            this.render();
          }
        });
      }
      else if (action === 'set-name') {
        el.addEventListener('input', () => {
          if (this.editingWorkout) {
            this.editingWorkout.exercises[el.dataset.idx].name = el.value;
          }
        });
      }
      else if (action === 'set-field') {
        el.addEventListener('input', () => {
          if (this.editingWorkout) {
            const val = parseFloat(el.value) || 0;
            this.editingWorkout.exercises[el.dataset.idx][el.dataset.field] = val;
          }
        });
        el.addEventListener('blur', () => this.render());
      }
      else if (action === 'set-notes') {
        el.addEventListener('input', () => {
          if (this.editingWorkout) {
            this.editingWorkout.exercises[el.dataset.idx].notes = el.value;
          }
        });
      }
      else if (action === 'toggle-skip') {
        el.addEventListener('click', () => {
          if (this.editingWorkout) {
            const idx = el.dataset.idx;
            this.editingWorkout.exercises[idx].skipped = !this.editingWorkout.exercises[idx].skipped;
            this.render();
          }
        });
      }
      else if (action === 'toggle-done') {
        el.addEventListener('click', () => {
          if (this.editingWorkout) {
            const idx = el.dataset.idx;
            this.editingWorkout.exercises[idx].done = !this.editingWorkout.exercises[idx].done;
            this.render();
          }
        });
      }
      else if (action === 'delete-exercise') {
        el.addEventListener('click', () => {
          if (this.editingWorkout) {
            this.editingWorkout.exercises.splice(el.dataset.idx, 1);
            this.render();
          }
        });
      }
      else if (action === 'show-exercise-picker') {
        el.addEventListener('click', () => this.showExercisePicker());
      }
      else if (action === 'save-workout') {
        el.addEventListener('click', () => {
          if (this.editingWorkout) {
            const w = this.editingWorkout;
            w.exercises = w.exercises.filter(e => e.name.trim() !== '');
            if (w.exercises.length === 0) return;
            DB.save(w);
            this.editingWorkout = null;
            this.navigate(`detail/${w.id}`);
          }
        });
      }
      else if (action === 'delete-workout') {
        el.addEventListener('click', () => {
          if (confirm('Vill du ta bort detta pass?')) {
            DB.delete(el.dataset.id);
            this.navigate('home');
          }
        });
      }
    });
  }
};

// ─── Boot ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => App.init());
