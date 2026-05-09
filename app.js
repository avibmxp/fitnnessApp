// ─── Muscle Map ───────────────────────────────────────────────────────────────
const MUSCLE_MAP = {
  'Chest':           ['f-chest-l','f-chest-r'],
  'Upper Chest':     ['f-chest-l','f-chest-r'],
  'Shoulders':       ['f-shoulder-l','f-shoulder-r'],
  'Side Delts':      ['f-shoulder-l','f-shoulder-r'],
  'Front Delts':     ['f-shoulder-l','f-shoulder-r'],
  'Rear Delts':      ['b-rear-delt-l','b-rear-delt-r'],
  'Biceps':          ['f-bicep-l','f-bicep-r'],
  'Triceps':         ['b-tricep-l','b-tricep-r'],
  'Forearms':        ['f-forearm-l','f-forearm-r'],
  'Abs':             ['f-abs'],
  'Lower Abs':       ['f-abs'],
  'Core':            ['f-abs','f-oblique-l','f-oblique-r'],
  'Obliques':        ['f-oblique-l','f-oblique-r'],
  'Back':            ['b-trap','b-lat-l','b-lat-r'],
  'Lats':            ['b-lat-l','b-lat-r'],
  'Lower Back':      ['b-lower-back'],
  'Quads':           ['f-quad-l','f-quad-r'],
  'Hamstrings':      ['b-hamstring-l','b-hamstring-r'],
  'Glutes':          ['b-glute-l','b-glute-r'],
  'Calves':          ['f-calf-l','f-calf-r','b-calf-l','b-calf-r'],
  'Posterior Chain': ['b-hamstring-l','b-hamstring-r','b-glute-l','b-glute-r','b-lat-l','b-lat-r','b-lower-back'],
  'Full Body':       ['f-chest-l','f-chest-r','f-shoulder-l','f-shoulder-r','f-quad-l','f-quad-r','f-abs','b-lat-l','b-lat-r','b-hamstring-l','b-hamstring-r'],
  'Cardio':          [],
};

// ─── Exercise Tips ─────────────────────────────────────────────────────────────
const EXERCISE_TIPS = {
  "Barbell Bench Press": { how:["Set up with eyes under bar, feet flat","Retract shoulder blades, create natural arch","Lower with control to mid-chest","Press back up along slight arc toward rack"], tips:["Keep wrists straight over elbows","Leg drive into floor adds stability","Don't let elbows flare past 75°"] },
  "Dumbbell Incline Press": { how:["Set bench 30–45°, press dumbbells to full extension","Lower with elbows at ~60° from torso","Touch near upper chest, squeeze at top"], tips:["Greater incline = more upper chest","Neutral grip is easier on shoulders","Control the eccentric for more growth"] },
  "Barbell Overhead Press": { how:["Grip just outside shoulders, bar on upper chest","Brace core, push bar straight up overhead","Lock out at top, bar over mid-foot"], tips:["Keep glutes and abs tight","Tuck chin as bar passes face","Don't lean back excessively"] },
  "Lateral Raises": { how:["Stand with dumbbells at sides, slight bend in elbows","Raise arms to shoulder height in wide arc","Lower slowly — 3–4 seconds down"], tips:["Lead with elbows, not wrists","Think 'pouring a jug' — thumb slightly down","Heavy weight isn't the goal"] },
  "Dumbbell Lateral Raises": { how:["Stand with dumbbells at sides, slight bend in elbows","Raise arms to shoulder height in wide arc","Lower slowly — 3–4 seconds down"], tips:["Lead with elbows, not wrists","Think 'pouring a jug' — thumb slightly down","Heavy weight isn't the goal"] },
  "Cable Flyes": { how:["Set cables at chest height, step forward with slight lean","Keep soft bend in elbows throughout","Bring hands together in hugging motion, squeeze hard"], tips:["Don't let elbows drop below cable line","Focus on squeezing chest, not moving weight","Great for constant tension"] },
  "Chest Flyes": { how:["Lie on bench, dumbbells above chest with slight bend","Open arms wide, feeling stretch across chest","Reverse motion, squeezing chest at top"], tips:["Never fully straighten arms","Go only as low as you feel a stretch","Lighter weight with full ROM beats heavy partial ROM"] },
  "Tricep Rope Pushdown": { how:["Stand at cable, grip rope palms facing each other","Keep upper arms pinned to sides","Push down and slightly outward, fully extending elbows"], tips:["Flare handles outward at full extension","Don't lean forward or use momentum","Keep elbows tight to torso"] },
  "Overhead Tricep Extension": { how:["Hold dumbbell overhead with both hands","Lower behind head by bending elbows","Extend back up to full lockout"], tips:["Keep elbows pointing forward","Great stretch builds long head of tricep","Don't arch lower back — brace core"] },
  "Barbell Deadlift": { how:["Bar over mid-foot, hip-width stance","Push floor away — hips and shoulders rise together","Lock out hips and knees at top, squeeze glutes"], tips:["Keep bar dragging up shins","Take a big breath and brace before each rep","Neutral spine throughout"] },
  "Conventional Deadlift": { how:["Bar over mid-foot, hip-width stance","Push floor away — hips and shoulders rise together","Lock out hips and knees at top, squeeze glutes"], tips:["Keep bar dragging up shins","Take a big breath and brace before each rep","Neutral spine throughout"] },
  "Barbell Bent-Over Row": { how:["Hinge at hips ~45°, knees slightly bent, neutral spine","Pull bar to lower chest / upper abdomen","Lower with control, full stretch at bottom"], tips:["Drive elbows back, not up","Keep torso angle consistent","Brace core hard before each rep"] },
  "Pull-ups": { how:["Hang with arms fully extended, grip just wider than shoulders","Pull chest to bar, leading with elbows going to hips","Lower under full control to dead hang"], tips:["Initiate by depressing shoulder blades first","Cross feet behind to prevent swinging","Assisted variations are fine for building up"] },
  "Dumbbell Rows": { how:["Plant knee and hand on bench, hinge forward","Pull dumbbell to hip, elbow traveling back","Lower with control to full stretch"], tips:["Keep hips level — don't twist to lift more","Think 'elbow to ceiling'","Pause at top and feel the lat squeeze"] },
  "Chest Supported Row": { how:["Lie chest-down on incline bench or machine","Pull handles to lower chest with elbows flared","Lower with full control to stretched position"], tips:["Chest support eliminates lower back fatigue","Focus on retracting shoulder blades at top","Watch for imbalances between arms"] },
  "Barbell Curls": { how:["Stand with bar at hip height, underhand grip","Curl bar up, keep upper arms still","Lower slowly — 2–3 seconds down"], tips:["Upper arms should not swing","Don't lean back to assist","Full range: fully extend and curl high"] },
  "Dumbbell Hammer Curls": { how:["Neutral grip (palms facing each other), curl up","Alternate arms or do both simultaneously","Lower fully for complete stretch"], tips:["Works brachialis and forearms too","Great for arm thickness","Keep upper arms vertical"] },
  "Lat Pulldown": { how:["Grip bar wider than shoulder width, slight lean back","Pull bar to upper chest, leading with elbows","Let bar rise with full arm extension"], tips:["Don't lean back excessively","Initiate by depressing shoulder blades first","Imagine pulling elbows to hip pockets"] },
  "Face Pulls": { how:["Set cable at face height, rope attachment","Pull toward face, elbows stay high and flare outward","Externally rotate so hands end up by ears"], tips:["Essential for shoulder health","Light weight with perfect form","Great warm-up for any pressing day"] },
  "Barbell Back Squat": { how:["Bar on upper traps, shoulder-width stance, toes out 15–30°","Brace hard, squat until thighs are parallel or below","Drive knees out over toes, push floor away"], tips:["Keep chest up — don't collapse forward","'Knees out' prevents knee cave","Take a big belly breath and hold it (Valsalva)"] },
  "Front Squat": { how:["Bar rests on front delts, elbows high and parallel to floor","Vertical torso throughout","Squat to depth, drive up keeping elbows high"], tips:["More quad-dominant than back squat","Wrist mobility can be a limiter — use cross-grip if needed","Start lighter than you think"] },
  "Romanian Deadlift": { how:["Stand with bar at hips, soft bend in knees","Hinge at hips, lowering bar along legs","Drive hips forward to return to standing"], tips:["Bar stays close to body","Stop when you feel a strong hamstring stretch","Don't confuse with stiff-leg deadlift"] },
  "Leg Press": { how:["Feet hip-width on platform, toes slightly out","Lower until knees at 90°, don't round lower back","Push through full foot, don't lock knees out"], tips:["Foot placement changes emphasis","Never let lower back come off pad","Great for volume after heavy squats"] },
  "Leg Curls": { how:["Lie face down, pad just above ankles","Curl heels toward glutes with control","Lower slowly — the eccentric is where gains happen"], tips:["Plantarflex feet for greater contraction","Full range: fully extend and flex","Avoid jerking — hamstring tears happen here"] },
  "Leg Extensions": { how:["Sit with pad on shins just above ankles","Extend legs to full lockout, squeeze quads hard","Lower with control to 90°"], tips:["Best used as a finisher after compounds","Toes slightly inward for outer quad","Squeeze hard at top for 1–2 seconds"] },
  "Bulgarian Split Squats": { how:["Rear foot on bench, front foot forward enough for vertical shin","Lower back knee toward floor, keep torso upright","Drive through front heel to return"], tips:["The hardest leg exercise — start light","Front foot distance is personal — experiment","Great for hip flexor flexibility"] },
  "Calf Raises": { how:["Stand on edge of platform, shoulder width","Rise up on toes as high as possible, squeeze at top","Lower heel below platform for full stretch"], tips:["Full stretch at bottom is essential","Build up slowly: easy to strain Achilles","Both straight-knee and bent-knee variations are important"] },
  "Power Clean": { how:["Starting position like a deadlift","Explosive drive from floor, shrug and pull elbows high","Drop under bar, catch on front delts in quarter squat"], tips:["Speed is everything — practice with light weight","Triple extension (ankles, knees, hips) generates power","Video yourself to check form"] },
  "Box Jumps": { how:["Stand arm's length from box, squat slightly and swing arms","Explode upward, driving arms overhead","Land softly on entire foot, step down (don't jump down)"], tips:["Focus on landing mechanics — soft and controlled","Height you can land safely is the goal","Full recovery between reps"] },
  "Kettlebell Swings": { how:["Hinge at hips, hike kettlebell back between legs","Explosively drive hips forward to swing KB to shoulder height","Let KB fall back, hinge again to repeat"], tips:["This is a HIP HINGE, not a squat","Keep arms relaxed — hips generate power","Brace core hard at top of each swing"] },
  "Jump Squats": { how:["Stand feet shoulder width, squat to parallel","Explode upward with maximum force","Land with soft knees, absorb force"], tips:["Land through toe-heel sequence","Quality over height","Use light or bodyweight only"] },
  "Walking Lunges": { how:["Step forward with long stride, lower back knee toward floor","Keep front shin vertical, torso upright","Push off back foot as next step"], tips:["Long stride = more glute; short stride = more quad","Keep dumbbells at sides","Great for hip mobility"] },
  "Weighted Cable Crunches": { how:["Kneel at cable, rope behind head, curl torso toward knees","Movement is at the waist, not the hips","Fully stretch back up between reps"], tips:["Keep hips still — movement from spine","Look at your knees throughout","Resist using hip flexors by keeping thighs vertical"] },
  "Ab Rollouts": { how:["Kneel with roller under shoulders, core braced","Roll out slowly until arms extended, back flat","Pull back using abs — not momentum"], tips:["Stop before lower back arches","Hardest ab exercise at standing","Build up slowly"] },
  "Hanging Leg Raises": { how:["Dead hang from bar with full shoulder engagement","Raise legs until parallel or higher","Lower with control — don't swing"], tips:["Posterior pelvic tilt maximizes lower ab contraction","Bend knees if straight-leg is too hard","Control the descent"] },
  "Russian Twists": { how:["Sit with torso at 45°, knees bent and feet raised","Rotate side to side, touching weight to floor each side","Keep lower back flat"], tips:["Rotation comes from torso, not arms","Keep feet raised for more difficulty","Slow and controlled beats fast and sloppy"] },
  "Pallof Press": { how:["Stand sideways to cable, hold handle at chest height","Press hands straight out, resisting cable pulling sideways","Bring back to chest slowly"], tips:["Anti-rotation exercise — goal is NOT to rotate","Perfect for core stability","Excellent warm-up for heavy compound lifts"] },
  "Bicycle Crunches": { how:["Lie back, hands behind head, legs raised","Bring opposite elbow to knee as you extend other leg","Rotate fully, feel oblique squeeze each side"], tips:["Don't pull on your neck","Full rotation and extension is key","Slow controlled beats fast pedaling"] },
  "Plank Hold": { how:["Forearms on floor, elbows under shoulders, body straight","Squeeze glutes, abs, and quads to maintain neutral spine","Breathe steadily"], tips:["Sagging or piked hip = reset","Progress by adding time or harder variations","Quality > duration"] },
  "Jump Rope": { how:["Light grip, turn rope from wrists not shoulders","Small jumps — just enough clearance","Land on balls of feet with slight knee bend"], tips:["Start with basic two-foot jump","Good cardio with low impact if landing is correct","Keep elbows close to sides"] },
  "Burpees": { how:["Drop hands to floor, jump feet back to plank","Perform a push-up (optional)","Jump feet to hands, explode up with arms overhead"], tips:["Modify by stepping feet if needed","Maintain flat back in plank","Pace yourself — form breaks down fast"] },
  "Mountain Climbers": { how:["Start in high plank, hands under shoulders","Drive knee to chest alternately at speed","Keep hips level — don't bob up and down"], tips:["Slower pace = core; faster pace = cardio","Keep core tight throughout","Push the floor away with your hands"] },
  "Push-ups": { how:["Hands just wider than shoulder width, body straight","Lower chest to floor with control, elbows at ~45°","Press up to full extension"], tips:["Elevate hands to make easier; feet to make harder","Keep core tight — no sagging hips","Full range: chest touches floor, full arm extension"] },
  "High Knees": { how:["Run in place driving knees up to hip height","Pump arms in opposition to legs","Land lightly on balls of feet"], tips:["Key is KNEE HEIGHT — drive them up","Keep torso upright","Use as warm-up or high-intensity interval"] },
  "Rowing Machine": { how:["Drive with legs first, then lean back, then pull arms to chest","Return: arms out, lean forward, then bend knees","Smooth continuous motion"], tips:["Legs generate ~60% of power","Keep a straight back at catch position","Monitor pace (500m split) and stay consistent"] },
  "Dumbbell Shoulder Press": { how:["Start with dumbbells at ear height, elbows at 90°","Press straight up until arms fully extended","Lower under full control"], tips:["Slightly in front of ears, not directly to sides","Neutral grip is easier on joints","Keep core tight and avoid excessive arch"] },
  "Seated Rear Delt Flyes": { how:["Sit on edge of bench, lean forward with flat back","With dumbbells hanging, raise arms to sides at shoulder height","Squeeze rear delts and upper back at top"], tips:["Lead with elbows, not hands","Slight bend in elbows throughout","One of the best shoulder health investments"] },
  "Deadlift": { how:["Bar over mid-foot, hip-width stance","Push floor away — hips and shoulders rise together","Lock out hips and knees at top, squeeze glutes"], tips:["Keep bar dragging up shins","Take a big breath and brace before each rep","Neutral spine throughout"] },
};

// ─── UI Translations ──────────────────────────────────────────────────────────
const UI = {
  en: {
    allPlans:'All Plans', strength:'Strength', hypertrophy:'Hypertrophy', cardio:'Cardio', core:'Core',
    currentFocus:'CURRENT FOCUS', elitePrograms:'ELITE PROGRAMS',
    viewPlan:'VIEW PLAN',
    weeklyProgress:'WEEKLY PROGRESS', daysComplete:'Days Complete', daysRemaining:'Days Remaining',
    bodyAreas:'Body Areas', musclesWorked:'Muscles Worked',
    front:'Front', back:'Back', targeted:'Targeted', notTargeted:'Not targeted',
    theProtocol:'The Protocol', tapForGuide:'(tap for form guide)',
    startWorkout:'Start Workout',
    duration:'Duration', min:'Min', exercises:'Exercises',
    exerciseOf:(n,t)=>`EXERCISE ${n} OF ${t}`,
    currentTarget:'Current Target', previous:'Previous',
    weightKg:'WEIGHT (KG)', addedWeightKg:'ADDED WEIGHT (KG)', reps:'REPS',
    completeSet:'COMPLETE SET', setLog:'Set Log',
    ofDone:(a,b)=>`${a} of ${b} Done`,
    noSetsYet:'No sets completed yet',
    restTimer:'Rest Timer', skip:'SKIP', sessionActive:'Session Active',
    nextExercise:'NEXT EXERCISE', finishWorkout:'FINISH WORKOUT',
    endEarly:'END WORKOUT EARLY',
    endTitle:'End Workout?',
    endMsg:'Your progress will be saved. Are you sure you want to end this session early?',
    cancel:'Cancel', end:'End',
    workoutComplete:'Workout Complete', time:'Time', setsDone:'Sets Done',
    backToPrograms:'Back to Programs',
    howToPerform:'How To Perform', keyTips:'Key Tips', muscleActivation:'Muscle Activation',
    set:(n)=>`SET ${n}`, bw:'BW',
    navTraining:'Training', navPrograms:'Programs', navProgress:'Progress', navProfile:'Profile',
    switchLang:'🇮🇱',
  },
  he: {
    allPlans:'כל האימונים', strength:'כוח', hypertrophy:'היפרטרופיה', cardio:'קרדיו', core:'ליבה',
    currentFocus:'פוקוס נוכחי', elitePrograms:'תוכניות אלייט',
    viewPlan:'צפה בתוכנית',
    weeklyProgress:'התקדמות שבועית', daysComplete:'ימים הושלמו', daysRemaining:'ימים נותרו',
    bodyAreas:'אזורי גוף', musclesWorked:'שרירים מופעלים',
    front:'קדמי', back:'אחורי', targeted:'מופעל', notTargeted:'לא מופעל',
    theProtocol:'הפרוטוקול', tapForGuide:'(לחץ להנחיות ביצוע)',
    startWorkout:'התחל אימון',
    duration:'משך', min:'דק\'', exercises:'תרגילים',
    exerciseOf:(n,total)=>`תרגיל ${n} מתוך ${total}`,
    currentTarget:'יעד נוכחי', previous:'קודם',
    weightKg:'משקל (ק"ג)', addedWeightKg:'משקל מוסף (ק"ג)', reps:'חזרות',
    completeSet:'השלם סט', setLog:'יומן סטים',
    ofDone:(a,b)=>`${a} מתוך ${b} הושלמו`,
    noSetsYet:'טרם הושלמו סטים',
    restTimer:'טיימר מנוחה', skip:'דלג', sessionActive:'אימון פעיל',
    nextExercise:'תרגיל הבא', finishWorkout:'סיים אימון',
    endEarly:'סיים אימון מוקדם',
    endTitle:'לסיים את האימון?',
    endMsg:'ההתקדמות שלך תישמר. האם אתה בטוח שברצונך לסיים?',
    cancel:'ביטול', end:'סיים',
    workoutComplete:'האימון הושלם!', time:'זמן', setsDone:'סטים',
    backToPrograms:'חזרה לתוכניות',
    howToPerform:'כיצד לבצע', keyTips:'טיפים מרכזיים', muscleActivation:'הפעלת שרירים',
    set:(n)=>`סט ${n}`, bw:'משקל גוף',
    navTraining:'אימון', navPrograms:'תוכניות', navProgress:'התקדמות', navProfile:'פרופיל',
    switchLang:'🇺🇸',
  }
};

function t(key) {
  const l = state.lang;
  return (UI[l] && UI[l][key] !== undefined) ? UI[l][key] : (UI.en[key] || key);
}
function tW(workout, field) {
  return state.lang === 'he' ? (workout[field+'He'] || workout[field]) : workout[field];
}
function tEx(exercise, field) {
  return state.lang === 'he' ? (exercise[field+'He'] || exercise[field]) : exercise[field];
}

// ─── App State ────────────────────────────────────────────────────────────────
const state = {
  lang: 'en',
  currentScreen: 'home',
  activeFilter: 'All',
  currentWorkout: null,
  currentExerciseIndex: 0,
  currentSetIndex: 0,
  completedSets: [],
  sessionStartTime: null,
  sessionTimerInterval: null,
  restTimerInterval: null,
  restTimeRemaining: 0,
  restTimerActive: false
};

// ─── Language toggle ──────────────────────────────────────────────────────────
function toggleLang() {
  state.lang = state.lang === 'en' ? 'he' : 'en';
  const isHe = state.lang === 'he';
  document.documentElement.setAttribute('dir', isHe ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', state.lang);
  // Update all language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.textContent = t('switchLang');
  });
  // Re-render active screen
  if (state.currentScreen === 'home') {
    applyStaticTranslations();
    renderHomeScreen();
  } else if (state.currentScreen === 'overview') {
    applyStaticTranslations();
    renderPlanOverview();
  } else if (state.currentScreen === 'workout') {
    renderActiveWorkout();
  }
}

function applyStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function navigate(screen) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById('screen-' + screen).classList.remove('hidden');
  state.currentScreen = screen;
  window.scrollTo(0, 0);
}

// ─── Screen 1: Home ───────────────────────────────────────────────────────────
function renderHomeScreen() {
  applyStaticTranslations();
  const grid = document.getElementById('workout-grid');
  grid.innerHTML = '';

  const catFilter = state.activeFilter === 'All' ? null
    : (state.lang === 'he'
        ? WORKOUTS.find(w => tW(w,'category') === state.activeFilter || w.category === state.activeFilter)?.category
        : state.activeFilter);

  const filtered = state.activeFilter === 'All'
    ? WORKOUTS
    : WORKOUTS.filter(w => w.category === (catFilter || state.activeFilter));

  filtered.forEach(workout => {
    const card = document.createElement('div');
    card.className = 'gradient-card p-lg rounded-xl border border-surface-container-highest flex flex-col justify-between';
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-md">
          <span class="material-symbols-outlined text-primary-fixed bg-surface-container-highest p-sm rounded-lg">${workout.icon}</span>
          <div class="flex gap-xs flex-wrap justify-end">
            <span class="bg-surface-container-highest text-on-surface px-xs py-1 rounded font-label-caps text-[10px] uppercase">${workout.durationMin} ${t('min')}</span>
            <span class="bg-surface-container-highest text-on-surface px-xs py-1 rounded font-label-caps text-[10px] uppercase">${difficultyAbbrev(workout)}</span>
          </div>
        </div>
        <h3 class="font-h3 text-h3 uppercase mb-xs">${tW(workout,'name')}</h3>
        <p class="text-on-surface-variant text-sm mb-sm">${tW(workout,'description')}</p>
        <div class="flex flex-wrap gap-xs mb-lg">
          ${(state.lang === 'he' ? workout.bodyAreasHe : workout.bodyAreas).map(a =>
            `<span class="bg-surface-container text-on-surface-variant px-xs py-[2px] rounded text-[10px] font-bold uppercase tracking-widest border border-surface-container-highest">${a}</span>`
          ).join('')}
        </div>
      </div>
      <button onclick="openWorkout(${workout.id})"
        class="w-full border border-secondary-container text-secondary font-h3 py-sm rounded-lg font-bold uppercase tracking-tight hover:bg-secondary-container/10 transition-colors active:scale-95">
        ${t('viewPlan')}
      </button>
    `;
    grid.appendChild(card);
  });
}

function difficultyAbbrev(workout) {
  const d = state.lang === 'he' ? tW(workout,'difficulty') : workout.difficulty;
  if (d === 'Beginner' || d === 'מתחיל') return state.lang === 'he' ? 'מתחיל' : 'BEG.';
  if (d === 'Advanced'  || d === 'מתקדם') return state.lang === 'he' ? 'מתקדם' : 'ADV.';
  return state.lang === 'he' ? 'בינוני' : 'INT.';
}

function setFilter(filter) {
  state.activeFilter = filter;
  document.querySelectorAll('.filter-chip').forEach(chip => {
    const active = chip.dataset.filter === filter;
    chip.className = active
      ? 'filter-chip flex-shrink-0 bg-primary-fixed text-on-primary-fixed px-lg py-sm rounded-lg font-label-caps uppercase whitespace-nowrap cursor-pointer transition-all'
      : 'filter-chip flex-shrink-0 bg-surface-container text-on-surface px-lg py-sm rounded-lg font-label-caps uppercase whitespace-nowrap border border-surface-container-highest cursor-pointer transition-all';
  });
  renderHomeScreen();
}

// ─── Screen 2: Plan Overview ──────────────────────────────────────────────────
function openWorkout(id) {
  state.currentWorkout = WORKOUTS.find(w => w.id === id);
  renderPlanOverview();
  navigate('overview');
}

function renderPlanOverview() {
  const w = state.currentWorkout;
  document.getElementById('overview-name').textContent = tW(w,'name').toUpperCase();
  document.getElementById('overview-subtitle').textContent = tW(w,'subtitle');
  document.getElementById('overview-difficulty').textContent = tW(w,'difficulty');
  document.getElementById('overview-category').textContent = tW(w,'category');
  document.getElementById('overview-duration').textContent = w.durationMin;
  document.getElementById('overview-duration-unit').textContent = t('min');
  document.getElementById('overview-exercise-count').textContent = String(w.exercises.length).padStart(2,'0');
  document.getElementById('overview-exercise-label').textContent = t('exercises');
  document.getElementById('section-body-areas').textContent = t('bodyAreas');
  document.getElementById('section-muscles').textContent = t('musclesWorked');
  document.getElementById('section-protocol').textContent = t('theProtocol');
  document.getElementById('tap-guide-hint').textContent = t('tapForGuide');
  document.getElementById('label-front').textContent = t('front');
  document.getElementById('label-back-view').textContent = t('back');
  document.getElementById('label-targeted').textContent = t('targeted');
  document.getElementById('label-not-targeted').textContent = t('notTargeted');

  const areas = state.lang === 'he' ? w.bodyAreasHe : w.bodyAreas;
  document.getElementById('overview-areas').innerHTML = areas.map(a =>
    `<span class="bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/30 px-sm py-base rounded-full font-label-caps text-label-caps uppercase">${a}</span>`
  ).join('');

  document.getElementById('overview-exercise-list').innerHTML = w.exercises.map((ex, i) => `
    <div onclick="openExerciseModal(${i})"
      class="glass-card rounded-xl overflow-hidden cursor-pointer hover:border-primary-fixed/50 transition-colors ${i === 0 ? 'border-l-2 border-primary-fixed' : ''}">
      <div class="flex gap-md p-md items-center">
        <div class="w-20 h-20 bg-surface-container-highest rounded-lg flex-shrink-0 overflow-hidden relative">
          <img src="${exImgUrl(ex.name, ex.muscleGroup, 160, 160)}" alt="${ex.name}"
            class="w-full h-full object-cover"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
          <span class="material-symbols-outlined text-primary-fixed absolute inset-0 items-center justify-center hidden" style="display:none">${equipmentIcon(ex.equipment)}</span>
        </div>
        <div class="flex-grow min-w-0">
          <h4 class="font-h3 text-body-lg text-primary uppercase truncate">${ex.name}</h4>
          <div class="flex flex-wrap gap-xs mt-xs">
            <span class="bg-surface-container-highest text-on-surface-variant px-xs py-[2px] rounded text-[10px] font-bold uppercase tracking-widest">${ex.equipment}</span>
            <span class="bg-surface-container-highest text-on-surface-variant px-xs py-[2px] rounded text-[10px] font-bold uppercase tracking-widest">${tEx(ex,'muscleGroup')}</span>
          </div>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="font-data-display text-h3 text-primary-fixed whitespace-nowrap">${ex.sets} <span class="text-body-md font-body-md text-on-surface-variant">×</span> ${ex.reps}</span>
          <div class="font-label-caps text-label-caps text-on-surface-variant uppercase mt-xs">${formatRestTime(ex.restSeconds)}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Highlight muscles on body map
  const allMuscles = [...new Set(w.exercises.map(ex => ex.muscleGroup))];
  highlightBodyMap(allMuscles, 'ov');
}

function equipmentIcon(eq) {
  const m = { Barbell:'fitness_center',Dumbbells:'fitness_center',Dumbbell:'fitness_center',Cable:'cable',Machine:'settings',Bodyweight:'accessibility_new',Kettlebell:'sports_handball',Rope:'sports_gymnastics' };
  return m[eq] || 'fitness_center';
}

function formatRestTime(s) {
  if (s < 60) return `${s}s`;
  const m = Math.floor(s/60), sec = s%60;
  return sec === 0 ? `${m}m` : `${m}m ${sec}s`;
}

// ─── Body Map ─────────────────────────────────────────────────────────────────
function highlightBodyMap(muscleGroups, prefix) {
  document.querySelectorAll(`[data-map="${prefix}"]`).forEach(el => el.classList.remove('muscle-active'));
  const ids = new Set();
  muscleGroups.forEach(mg => (MUSCLE_MAP[mg] || []).forEach(id => ids.add(id)));
  ids.forEach(id => {
    document.querySelectorAll(`[data-map="${prefix}"][data-muscle="${id}"]`).forEach(el => el.classList.add('muscle-active'));
  });
}

// ─── Exercise Photos ─────────────────────────────────────────────────────────
// Unsplash photo IDs mapped per exercise, with muscle-group fallbacks
const EXERCISE_IMG = {
  // Barbell pressing
  'Barbell Bench Press':       'photo-1571019614242-c5c5dee9f50b',
  'Dumbbell Incline Press':    'photo-1534438327276-14e5300c3a48',
  'Push-ups':                  'photo-1598971457999-ca4ef48a9a71',
  'Cable Flyes':               'photo-1540497077202-7c8a3999166f',
  'Chest Flyes':               'photo-1534438327276-14e5300c3a48',
  // Shoulders
  'Barbell Overhead Press':    'photo-1583454110551-21f2fa2afe61',
  'Dumbbell Shoulder Press':   'photo-1583454110551-21f2fa2afe61',
  'Lateral Raises':            'photo-1603287681836-b174ce5074c2',
  'Dumbbell Lateral Raises':   'photo-1603287681836-b174ce5074c2',
  'Face Pulls':                'photo-1540497077202-7c8a3999166f',
  'Seated Rear Delt Flyes':    'photo-1603287681836-b174ce5074c2',
  // Triceps
  'Tricep Rope Pushdown':      'photo-1540497077202-7c8a3999166f',
  'Overhead Tricep Extension': 'photo-1534438327276-14e5300c3a48',
  'Pallof Press':              'photo-1540497077202-7c8a3999166f',
  // Back / Pull
  'Pull-ups':                  'photo-1581009137042-c552e485697a',
  'Lat Pulldown':              'photo-1581009137042-c552e485697a',
  'Barbell Bent-Over Row':     'photo-1517836357463-d25dfeac3438',
  'Dumbbell Rows':             'photo-1534438327276-14e5300c3a48',
  'Chest Supported Row':       'photo-1540497077202-7c8a3999166f',
  'Rowing Machine':            'photo-1534368786749-b63e05c90863',
  // Biceps
  'Barbell Curls':             'photo-1584735935682-2f2b69dff9d2',
  'Dumbbell Hammer Curls':     'photo-1584735935682-2f2b69dff9d2',
  // Hinge / Deadlift
  'Barbell Deadlift':          'photo-1517836357463-d25dfeac3438',
  'Conventional Deadlift':     'photo-1517836357463-d25dfeac3438',
  'Romanian Deadlift':         'photo-1517836357463-d25dfeac3438',
  'Deadlift':                  'photo-1517836357463-d25dfeac3438',
  'Power Clean':               'photo-1517836357463-d25dfeac3438',
  'Kettlebell Swings':         'photo-1517836357463-d25dfeac3438',
  // Squat / Legs compound
  'Barbell Back Squat':        'photo-1566241440091-ec10de8db2e1',
  'Front Squat':               'photo-1566241440091-ec10de8db2e1',
  'Bulgarian Split Squats':    'photo-1566241440091-ec10de8db2e1',
  'Walking Lunges':            'photo-1566241440091-ec10de8db2e1',
  'Jump Squats':               'photo-1549060279-7e168fcee0c2',
  // Legs isolation
  'Leg Press':                 'photo-1574680096145-d05b474e2155',
  'Leg Curls':                 'photo-1574680096145-d05b474e2155',
  'Leg Extensions':            'photo-1574680096145-d05b474e2155',
  'Calf Raises':               'photo-1574680096145-d05b474e2155',
  // Core
  'Plank Hold':                'photo-1571945153237-4929e783af4a',
  'Mountain Climbers':         'photo-1571945153237-4929e783af4a',
  'Weighted Cable Crunches':   'photo-1571945153237-4929e783af4a',
  'Bicycle Crunches':          'photo-1571945153237-4929e783af4a',
  'Ab Rollouts':               'photo-1571945153237-4929e783af4a',
  'Russian Twists':            'photo-1571945153237-4929e783af4a',
  'Hanging Leg Raises':        'photo-1581009137042-c552e485697a',
  // Cardio / Conditioning
  'Box Jumps':                 'photo-1549060279-7e168fcee0c2',
  'Burpees':                   'photo-1549060279-7e168fcee0c2',
  'High Knees':                'photo-1549060279-7e168fcee0c2',
  'Jump Rope':                 'photo-1549060279-7e168fcee0c2',
};

const GROUP_IMG = {
  'Chest':           'photo-1571019614242-c5c5dee9f50b',
  'Upper Chest':     'photo-1571019614242-c5c5dee9f50b',
  'Shoulders':       'photo-1583454110551-21f2fa2afe61',
  'Side Delts':      'photo-1603287681836-b174ce5074c2',
  'Front Delts':     'photo-1583454110551-21f2fa2afe61',
  'Rear Delts':      'photo-1603287681836-b174ce5074c2',
  'Triceps':         'photo-1540497077202-7c8a3999166f',
  'Biceps':          'photo-1584735935682-2f2b69dff9d2',
  'Forearms':        'photo-1534438327276-14e5300c3a48',
  'Back':            'photo-1517836357463-d25dfeac3438',
  'Lats':            'photo-1581009137042-c552e485697a',
  'Lower Back':      'photo-1517836357463-d25dfeac3438',
  'Posterior Chain': 'photo-1517836357463-d25dfeac3438',
  'Quads':           'photo-1566241440091-ec10de8db2e1',
  'Hamstrings':      'photo-1517836357463-d25dfeac3438',
  'Glutes':          'photo-1566241440091-ec10de8db2e1',
  'Calves':          'photo-1574680096145-d05b474e2155',
  'Abs':             'photo-1571945153237-4929e783af4a',
  'Core':            'photo-1571945153237-4929e783af4a',
  'Obliques':        'photo-1571945153237-4929e783af4a',
  'Full Body':       'photo-1549060279-7e168fcee0c2',
  'Cardio':          'photo-1549060279-7e168fcee0c2',
};

function exImgUrl(name, muscleGroup, w, h) {
  const id = EXERCISE_IMG[name] || GROUP_IMG[muscleGroup] || 'photo-1534438327276-14e5300c3a48';
  return `https://images.unsplash.com/${id}?w=${w||600}&h=${h||320}&fit=crop&q=80&auto=format`;
}

// ─── Exercise Modal ───────────────────────────────────────────────────────────

function openExerciseModal(exerciseIndex) {
  const ex = state.currentWorkout.exercises[exerciseIndex];
  const info = EXERCISE_TIPS[ex.name];

  // Hero image
  const imgUrl = exImgUrl(ex.name, ex.muscleGroup);
  document.getElementById('modal-anim-container').innerHTML = `
    <div class="relative w-full h-64 overflow-hidden mb-lg">
      <img src="${imgUrl}" alt="${ex.name}"
        class="w-full h-full object-cover"
        onerror="this.parentElement.classList.add('hidden')"/>
      <div class="absolute inset-0" style="background:linear-gradient(to top,#1c1b1b 0%,rgba(19,19,19,0.2) 60%,transparent 100%)"></div>
      <div class="absolute bottom-md left-margin right-margin flex items-end justify-between">
        <span class="font-label-caps text-[11px] text-primary-fixed uppercase tracking-widest bg-black/60 px-sm py-1 rounded-full">${ex.equipment}</span>
        <span class="font-label-caps text-[11px] text-on-surface-variant uppercase bg-black/60 px-sm py-1 rounded-full">${tEx(ex,'muscleGroup')}</span>
      </div>
    </div>`;

  document.getElementById('modal-ex-name').textContent = ex.name.toUpperCase();
  document.getElementById('modal-ex-tags').innerHTML = `
    <span class="bg-surface-container-highest text-on-surface-variant px-sm py-[3px] rounded-full font-label-caps text-[10px] uppercase">${ex.equipment}</span>
    <span class="bg-primary-fixed/10 text-primary-fixed border border-primary-fixed/30 px-sm py-[3px] rounded-full font-label-caps text-[10px] uppercase">${tEx(ex,'muscleGroup')}</span>
  `;
  document.getElementById('modal-how-title').textContent = t('howToPerform');
  document.getElementById('modal-tips-title').textContent = t('keyTips');
  document.getElementById('modal-muscle-title').textContent = t('muscleActivation');
  document.getElementById('modal-label-front').textContent = t('front');
  document.getElementById('modal-label-back').textContent = t('back');
  if (info) {
    document.getElementById('modal-how').innerHTML = info.how.map((s,i) =>
      `<div class="flex gap-sm items-start"><span class="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">${i+1}</span><span class="text-on-surface text-sm">${s}</span></div>`
    ).join('');
    document.getElementById('modal-tips').innerHTML = info.tips.map(tip =>
      `<div class="flex gap-xs items-start"><span class="material-symbols-outlined text-primary-fixed flex-shrink-0" style="font-size:16px;font-variation-settings:'FILL' 1;">bolt</span><span class="text-on-surface-variant text-sm">${tip}</span></div>`
    ).join('');
  } else {
    document.getElementById('modal-how').innerHTML = `<p class="text-on-surface-variant text-sm">Perform with controlled form and full range of motion.</p>`;
    document.getElementById('modal-tips').innerHTML = '';
  }
  highlightBodyMap([ex.muscleGroup], 'mo');
  document.getElementById('exercise-modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeExerciseModal() {
  document.getElementById('exercise-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ─── Screen 3: Active Workout ─────────────────────────────────────────────────
function startWorkout() {
  state.currentExerciseIndex = 0;
  state.currentSetIndex = 0;
  state.completedSets = [];
  state.sessionStartTime = Date.now();
  state.restTimerActive = false;
  state.restTimeRemaining = 0;
  clearInterval(state.sessionTimerInterval);
  clearInterval(state.restTimerInterval);
  state.sessionTimerInterval = setInterval(updateSessionTimer, 1000);
  renderActiveWorkout();
  navigate('workout');
}

function renderActiveWorkout() {
  const w = state.currentWorkout;
  const ex = w.exercises[state.currentExerciseIndex];
  const setNum = state.currentSetIndex + 1;

  document.getElementById('workout-name-header').textContent = tW(w,'name').toUpperCase();
  document.getElementById('exercise-counter').textContent = t('exerciseOf')(state.currentExerciseIndex + 1, w.exercises.length);
  document.getElementById('exercise-name').textContent = ex.name.toUpperCase();
  document.getElementById('exercise-tags').innerHTML = `
    <span class="bg-surface-container-high px-sm py-base rounded text-on-surface-variant font-label-caps text-label-caps uppercase">${ex.equipment}</span>
    <span class="bg-surface-container-high px-sm py-base rounded text-on-surface-variant font-label-caps text-label-caps uppercase">${tEx(ex,'muscleGroup')}</span>
  `;
  document.getElementById('set-number').textContent = t('set')(setNum);
  document.getElementById('weight-label').textContent = ex.isBodyweight ? t('addedWeightKg') : t('weightKg');
  document.getElementById('reps-label').textContent = t('reps');
  document.getElementById('current-target-label').textContent = t('currentTarget');
  document.getElementById('previous-label').textContent = t('previous');
  document.getElementById('complete-set-btn').innerHTML = `<span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">check_circle</span>${t('completeSet')}`;
  document.getElementById('end-early-btn').textContent = t('endEarly');
  document.getElementById('rest-timer-label').textContent = t('restTimer');
  document.getElementById('skip-btn').textContent = t('skip');
  document.getElementById('session-active-label').textContent = t('sessionActive');

  const prevSet = state.completedSets.filter(s => s.exerciseIndex === state.currentExerciseIndex).slice(-1)[0];
  document.getElementById('weight-input').value = prevSet ? prevSet.weight : (ex.isBodyweight ? '' : ex.suggestedWeightKg);
  document.getElementById('reps-input').value = prevSet ? prevSet.reps : (ex.reps.includes('-') ? ex.reps.split('-')[0] : ex.reps.replace(/[^0-9]/g,'') || '');

  const allPrev = state.completedSets.filter(s => s.exerciseIndex === state.currentExerciseIndex);
  document.getElementById('previous-best').textContent = allPrev.length > 0
    ? `${allPrev.slice(-1)[0].weight || t('bw')} × ${allPrev.slice(-1)[0].reps}`
    : ex.isBodyweight ? `${t('bw')} × ${ex.reps}` : `${ex.suggestedWeightKg}kg × ${ex.reps}`;

  renderSetLog();
  updateRestTimerDisplay();

  const allSetsDone = state.currentSetIndex >= ex.sets;
  document.getElementById('complete-set-btn').classList.toggle('hidden', allSetsDone);
  document.getElementById('next-exercise-btn').classList.toggle('hidden', !allSetsDone);
  const isLast = state.currentExerciseIndex >= w.exercises.length - 1;
  document.getElementById('next-exercise-btn').textContent = isLast ? t('finishWorkout') : t('nextExercise');
}

function renderSetLog() {
  const ex = state.currentWorkout.exercises[state.currentExerciseIndex];
  const done = state.completedSets.filter(s => s.exerciseIndex === state.currentExerciseIndex);
  document.getElementById('set-log-title').textContent = t('setLog');
  document.getElementById('set-log-count').textContent = t('ofDone')(done.length, ex.sets);
  document.getElementById('set-log').innerHTML = done.length === 0
    ? `<div class="px-lg py-md text-on-surface-variant text-sm text-center opacity-60">${t('noSetsYet')}</div>`
    : done.map(s => `
        <div class="flex items-center px-lg py-md bg-surface-container-low opacity-70">
          <span class="font-data-display text-on-surface-variant w-14 text-sm">${t('set')(s.setNum)}</span>
          <span class="font-body-md text-on-surface-variant flex-grow">${s.weight ? `${s.weight}kg` : t('bw')} × ${s.reps}</span>
          <span class="material-symbols-outlined text-primary-fixed text-base" style="font-variation-settings:'FILL' 1;">check</span>
        </div>`).join('');
}

function completeSet() {
  const ex = state.currentWorkout.exercises[state.currentExerciseIndex];
  state.completedSets.push({
    exerciseIndex: state.currentExerciseIndex,
    setNum: state.currentSetIndex + 1,
    weight: document.getElementById('weight-input').value || 0,
    reps: document.getElementById('reps-input').value || ex.reps
  });
  state.currentSetIndex++;
  if (state.currentSetIndex < ex.sets) startRestTimer(ex.restSeconds);
  renderActiveWorkout();
}

function nextExercise() {
  stopRestTimer();
  if (state.currentExerciseIndex >= state.currentWorkout.exercises.length - 1) { finishWorkout(); return; }
  state.currentExerciseIndex++;
  state.currentSetIndex = 0;
  renderActiveWorkout();
}

function finishWorkout() {
  clearInterval(state.sessionTimerInterval);
  clearInterval(state.restTimerInterval);
  const elapsed = Math.floor((Date.now() - state.sessionStartTime) / 1000);
  document.getElementById('finish-title').textContent = t('workoutComplete');
  document.getElementById('finish-time-label').textContent = t('time');
  document.getElementById('finish-sets-label').textContent = t('setsDone');
  document.getElementById('finish-back-btn').innerHTML = `<span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1;">home</span><span class="font-h3 text-h3 uppercase italic tracking-tighter">${t('backToPrograms')}</span>`;
  document.getElementById('finish-time').textContent = formatElapsed(elapsed);
  document.getElementById('finish-sets').textContent = state.completedSets.length;
  document.getElementById('finish-workout-name').textContent = tW(state.currentWorkout,'name').toUpperCase();
  navigate('finish');
}

// ─── Timers ───────────────────────────────────────────────────────────────────
function updateSessionTimer() {
  if (!state.sessionStartTime) return;
  const f = formatElapsed(Math.floor((Date.now() - state.sessionStartTime) / 1000));
  const h = document.getElementById('session-elapsed');
  const fl = document.getElementById('float-timer');
  if (h) h.textContent = f;
  if (fl) fl.textContent = f.replace(/^00:/,'');
}

function formatElapsed(s) {
  const h = Math.floor(s/3600), m = Math.floor((s%3600)/60), sec = s%60;
  return [h,m,sec].map(v=>String(v).padStart(2,'0')).join(':');
}

function startRestTimer(seconds) {
  clearInterval(state.restTimerInterval);
  state.restTimeRemaining = seconds;
  state.restTimerActive = true;
  showRestTimer(true);
  updateRestTimerDisplay();
  state.restTimerInterval = setInterval(() => {
    state.restTimeRemaining--;
    updateRestTimerDisplay();
    if (state.restTimeRemaining <= 0) { stopRestTimer(); playTimerEndAlert(); }
  }, 1000);
}

function stopRestTimer() {
  clearInterval(state.restTimerInterval);
  state.restTimerActive = false;
  state.restTimeRemaining = 0;
  showRestTimer(false);
}

function skipRestTimer() { stopRestTimer(); }
function addRestTime(s) { if (!state.restTimerActive) return; state.restTimeRemaining += s; updateRestTimerDisplay(); }

function updateRestTimerDisplay() {
  const el = document.getElementById('rest-timer-display');
  if (!el) return;
  const m = Math.floor(state.restTimeRemaining/60), s = state.restTimeRemaining%60;
  el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

function showRestTimer(show) {
  const panel = document.getElementById('rest-timer-panel');
  const setPanel = document.getElementById('set-input-panel');
  if (!panel || !setPanel) return;
  panel.classList.toggle('hidden', !show);
  setPanel.classList.toggle('opacity-40', show);
  setPanel.classList.toggle('pointer-events-none', show);
}

function playTimerEndAlert() {
  const d = document.getElementById('rest-timer-display');
  if (d) { d.classList.add('animate-pulse'); setTimeout(() => d.classList.remove('animate-pulse'), 2000); }
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    [0,0.2,0.4].forEach(delay => {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.frequency.value = 880;
      g.gain.setValueAtTime(0.3, ctx.currentTime+delay);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+delay+0.15);
      o.start(ctx.currentTime+delay); o.stop(ctx.currentTime+delay+0.15);
    });
  } catch(e) {}
}

// ─── End Workout ──────────────────────────────────────────────────────────────
function confirmEndWorkout() {
  document.getElementById('end-modal-title').textContent = t('endTitle');
  document.getElementById('end-modal-msg').textContent = t('endMsg');
  document.getElementById('end-modal-cancel').textContent = t('cancel');
  document.getElementById('end-modal-confirm').textContent = t('end');
  document.getElementById('end-workout-modal').classList.remove('hidden');
}
function cancelEndWorkout() { document.getElementById('end-workout-modal').classList.add('hidden'); }
function endWorkoutEarly() { cancelEndWorkout(); finishWorkout(); }

// ─── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHomeScreen();
  navigate('home');

  // Horizontal scroll via mouse wheel on filter slider
  const slider = document.querySelector('.filter-slider');
  if (slider) {
    slider.addEventListener('wheel', e => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault();
        slider.scrollBy({ left: e.deltaY * 1.5, behavior: 'smooth' });
      }
    }, { passive: false });

    // Mouse drag scroll for desktop
    let isDown = false, startX, scrollLeft;
    slider.addEventListener('mousedown', e => { isDown = true; slider.classList.add('cursor-grabbing'); startX = e.pageX - slider.offsetLeft; scrollLeft = slider.scrollLeft; });
    slider.addEventListener('mouseleave', () => { isDown = false; slider.classList.remove('cursor-grabbing'); });
    slider.addEventListener('mouseup', () => { isDown = false; slider.classList.remove('cursor-grabbing'); });
    slider.addEventListener('mousemove', e => { if (!isDown) return; e.preventDefault(); const x = e.pageX - slider.offsetLeft; slider.scrollLeft = scrollLeft - (x - startX); });
  }
});
