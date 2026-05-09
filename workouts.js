const WORKOUTS = [

  // ═══════════════════════════════════════════
  // BEGINNER — FBW (Full Body Workout)
  // ═══════════════════════════════════════════
  {
    id: 1,
    level: 'Beginner',     levelHe: 'מתחיל',
    name: 'Full Body Workout', nameHe: 'אימון גוף מלא',
    subtitle: 'FBW · 2–3× per week · 60–90s rest', subtitleHe: 'FBW · 2–3 פעמים בשבוע · מנוחה 60–90 שניות',
    description: 'Full body session covering all major muscle groups. Slow, controlled tempo every rep.',
    descriptionHe: 'אימון גוף מלא לכל קבוצות השרירים. ירידה איטית ומבוקרת בכל חזרה.',
    category: 'Strength', categoryHe: 'כוח',
    difficulty: 'Beginner', difficultyHe: 'מתחיל',
    durationMin: 50,
    icon: 'fitness_center',
    bodyAreas: ['Legs', 'Chest', 'Back', 'Shoulders', 'Core'],
    bodyAreasHe: ['רגליים', 'חזה', 'גב', 'כתפיים', 'ליבה'],
    details: [
      '5 תרגילים, 3 סטים כל אחד — סה"כ 15 סטים',
      'תרגילים מורכבים בלבד — גוף שלם בכל אימון',
      'טמפו מבוקר: 3 שניות ירידה, 1 שנייה עלייה',
      'מנוחה 60–90 שניות בין סטים',
      'מתאים לרמת התחלה — 0 עד 6 חודשי ניסיון',
      'תדירות: 2–3 אימונים בשבוע עם יום מנוחה ביניהם',
      'התקדמות: הוספת 2.5 ק"ג כל שבוע לכל תרגיל',
    ],
    detailsHe: [
      '5 תרגילים, 3 סטים כל אחד — סה"כ 15 סטים',
      'תרגילים מורכבים בלבד — גוף שלם בכל אימון',
      'טמפו מבוקר: 3 שניות ירידה, 1 שנייה עלייה',
      'מנוחה 60–90 שניות בין סטים',
      'מתאים לרמת התחלה — 0 עד 6 חודשי ניסיון',
      'תדירות: 2–3 אימונים בשבוע עם יום מנוחה ביניהם',
      'התקדמות: הוספת 2.5 ק"ג כל שבוע לכל תרגיל',
    ],
    exercises: [
      { name:'Goblet Squat',            muscleGroup:'Quads',       muscleGroupHe:'ריבועים',   equipment:'Dumbbells', sets:3, reps:'10-12', restSeconds:75,  suggestedWeightKg:16,  isBodyweight:false },
      { name:'Dumbbell Incline Press',  muscleGroup:'Upper Chest', muscleGroupHe:'חזה עליון', equipment:'Dumbbells', sets:3, reps:'10-12', restSeconds:75,  suggestedWeightKg:16,  isBodyweight:false },
      { name:'Lat Pulldown',            muscleGroup:'Lats',        muscleGroupHe:'לטיסימוס',  equipment:'Machine',   sets:3, reps:'10-12', restSeconds:75,  suggestedWeightKg:45,  isBodyweight:false },
      { name:'Dumbbell Shoulder Press', muscleGroup:'Shoulders',   muscleGroupHe:'כתפיים',    equipment:'Dumbbells', sets:3, reps:'10-12', restSeconds:75,  suggestedWeightKg:12,  isBodyweight:false },
      { name:'Plank Hold',              muscleGroup:'Core',        muscleGroupHe:'ליבה',       equipment:'Bodyweight',sets:3, reps:'30-45s',restSeconds:60,  suggestedWeightKg:0,   isBodyweight:true  }
    ]
  },

  // ═══════════════════════════════════════════
  // INTERMEDIATE — AB Split
  // ═══════════════════════════════════════════
  {
    id: 2,
    level: 'Intermediate', levelHe: 'בינוני',
    name: 'Upper Body — Day A', nameHe: 'פלג גוף עליון — יום א',
    subtitle: 'AB Split · 4× per week · Mon & Thu', subtitleHe: 'חלוקת AB · 4 פעמים בשבוע · ראשון ורביעי',
    description: 'Heavy pressing & pulling (strength focus) + isolation finishers. Bicep/Tricep superset at end.',
    descriptionHe: 'לחיצות ומשיכות כבדות (פוקוס כוח) + תרגילי בידוד. סופר-סט ביצפס/טריצפס בסיום.',
    category: 'Hypertrophy', categoryHe: 'היפרטרופיה',
    difficulty: 'Intermediate', difficultyHe: 'בינוני',
    durationMin: 65,
    icon: 'sports_gymnastics',
    bodyAreas: ['Chest', 'Back', 'Shoulders', 'Arms'],
    bodyAreasHe: ['חזה', 'גב', 'כתפיים', 'זרועות'],
    details: [
      '6 תרגילים, 3 סטים — סה"כ 18 סטים לאימון',
      'לחיצות ומשיכות כבדות בטווח כוח (6–10 חזרות)',
      'ביצפס + טריצפס בסופר-סט בסיום — חיסכון בזמן',
      'מנוחה 120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — לפחות 6 חודשי ניסיון',
      'תדירות: 2 פעמים בשבוע (ראשון ורביעי) — חלק מחלוקת AB',
      'התקדמות: הוספת 2.5 ק"ג כל 1–2 שבועות',
    ],
    detailsHe: [
      '6 תרגילים, 3 סטים — סה"כ 18 סטים לאימון',
      'לחיצות ומשיכות כבדות בטווח כוח (6–10 חזרות)',
      'ביצפס + טריצפס בסופר-סט בסיום — חיסכון בזמן',
      'מנוחה 120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — לפחות 6 חודשי ניסיון',
      'תדירות: 2 פעמים בשבוע (ראשון ורביעי) — חלק מחלוקת AB',
      'התקדמות: הוספת 2.5 ק"ג כל 1–2 שבועות',
    ],
    exercises: [
      { name:'Barbell Bench Press',   muscleGroup:'Chest',      muscleGroupHe:'חזה',             equipment:'Barbell',  sets:3, reps:'6-8',  restSeconds:120, suggestedWeightKg:70,   isBodyweight:false },
      { name:'Barbell Bent-Over Row', muscleGroup:'Back',       muscleGroupHe:'גב',              equipment:'Barbell',  sets:3, reps:'8-10', restSeconds:120, suggestedWeightKg:65,   isBodyweight:false },
      { name:'Cable Flyes',           muscleGroup:'Chest',      muscleGroupHe:'חזה',             equipment:'Cable',    sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:15,   isBodyweight:false },
      { name:'Lateral Raises',        muscleGroup:'Side Delts', muscleGroupHe:'כתפיים צדדיות',  equipment:'Dumbbells',sets:3, reps:'15',   restSeconds:60,  suggestedWeightKg:10,   isBodyweight:false },
      { name:'Barbell Curls',         muscleGroup:'Biceps',     muscleGroupHe:'ביצפס',           equipment:'Barbell',  sets:3, reps:'12',   restSeconds:60,  suggestedWeightKg:30,   isBodyweight:false },
      { name:'Tricep Rope Pushdown',  muscleGroup:'Triceps',    muscleGroupHe:'טריצפס',          equipment:'Cable',    sets:3, reps:'12',   restSeconds:60,  suggestedWeightKg:22.5, isBodyweight:false }
    ]
  },
  {
    id: 3,
    level: 'Intermediate', levelHe: 'בינוני',
    name: 'Lower Body + Core — Day B', nameHe: 'פלג גוף תחתון + ליבה — יום ב',
    subtitle: 'AB Split · 4× per week · Tue & Fri', subtitleHe: 'חלוקת AB · 4 פעמים בשבוע · שני וחמישי',
    description: 'Lower body compounds with targeted core finishers. 90–120s rest on compounds, 60s on isolation.',
    descriptionHe: 'תרגילי רגליים מורכבים עם עבודת ליבה ממוקדת. מנוחה 90–120 שניות בבסיס, 60 שניות בבידוד.',
    category: 'Strength', categoryHe: 'כוח',
    difficulty: 'Intermediate', difficultyHe: 'בינוני',
    durationMin: 60,
    icon: 'directions_run',
    bodyAreas: ['Legs', 'Glutes', 'Core', 'Calves'],
    bodyAreasHe: ['רגליים', 'ישבן', 'ליבה', 'תאומים'],
    details: [
      '5 תרגילים, 3–4 סטים — סה"כ 16 סטים לאימון',
      'ציר ירך (RDL) + ריצועים — כיסוי מלא של הרגל',
      'בולגרי ספליט סקוואט לחיטוב ישבן וריצועים',
      'מנוחה 90–120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — מחייב שליטה בטכניקה בסיסית',
      'תדירות: 2 פעמים בשבוע (שני וחמישי) — חלק מחלוקת AB',
      'משולב עם יום A לתוכנית שלמה של פלג עליון ותחתון',
    ],
    detailsHe: [
      '5 תרגילים, 3–4 סטים — סה"כ 16 סטים לאימון',
      'ציר ירך (RDL) + ריצועים — כיסוי מלא של הרגל',
      'בולגרי ספליט סקוואט לחיטוב ישבן וריצועים',
      'מנוחה 90–120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — מחייב שליטה בטכניקה בסיסית',
      'תדירות: 2 פעמים בשבוע (שני וחמישי) — חלק מחלוקת AB',
      'משולב עם יום A לתוכנית שלמה של פלג עליון ותחתון',
    ],
    exercises: [
      { name:'Romanian Deadlift',      muscleGroup:'Hamstrings', muscleGroupHe:'ירכיים אחוריות', equipment:'Barbell',  sets:3, reps:'8-10', restSeconds:120, suggestedWeightKg:80,  isBodyweight:false },
      { name:'Bulgarian Split Squats', muscleGroup:'Glutes',     muscleGroupHe:'ישבן',            equipment:'Dumbbells',sets:3, reps:'10',   restSeconds:90,  suggestedWeightKg:20,  isBodyweight:false },
      { name:'Leg Curls',              muscleGroup:'Hamstrings', muscleGroupHe:'ירכיים אחוריות', equipment:'Machine',  sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:50,  isBodyweight:false },
      { name:'Calf Raises',            muscleGroup:'Calves',     muscleGroupHe:'תאומים',          equipment:'Machine',  sets:4, reps:'15-20',restSeconds:60,  suggestedWeightKg:100, isBodyweight:false },
      { name:'Weighted Cable Crunches',muscleGroup:'Abs',        muscleGroupHe:'בטן',             equipment:'Cable',    sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:35,  isBodyweight:false }
    ]
  },

  // ═══════════════════════════════════════════
  // ADVANCED — PPL (Push Day)
  // ═══════════════════════════════════════════
  {
    id: 4,
    level: 'Advanced', levelHe: 'מקצוען',
    name: 'Push Day — Chest, Shoulders & Triceps', nameHe: 'יום דחיפה — חזה, כתפיים וטריצפס',
    subtitle: 'PPL · 5–6× per week · High Volume', subtitleHe: 'PPL · 5–6 פעמים בשבוע · ווליום גבוה',
    description: 'Max intensity push session. Machine Press: drop set on final set (−30%). Cable Laterals: TUT focus.',
    descriptionHe: 'אימון דחיפה בעצימות מקסימלית. לחיצת מכונה: דרופ סט בסט האחרון (−30%). הרחקות כבל: פוקוס TUT.',
    category: 'Strength', categoryHe: 'כוח',
    difficulty: 'Advanced', difficultyHe: 'מקצוען',
    durationMin: 80,
    icon: 'military_tech',
    bodyAreas: ['Chest', 'Shoulders', 'Triceps'],
    bodyAreasHe: ['חזה', 'כתפיים', 'טריצפס'],
    details: [
      '5 תרגילים, 3–4 סטים — סה"כ 18 סטים בעצימות גבוהה',
      'עצימות מקסימלית — לחיצת מוט בשיפוע בטווח כוח (5–8 חזרות)',
      'דרופ סט בסט האחרון של לחיצת מכונה (הורדת 30% משקל)',
      'TUT (זמן מתחת למתח) בהרחקות כבל — תנועה איטית ומבוקרת',
      'מנוחה 90–120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה מתקדמת — לפחות שנת אימון עקבית',
      'תדירות: 5–6 פעמים בשבוע כחלק מתוכנית PPL מלאה',
    ],
    detailsHe: [
      '5 תרגילים, 3–4 סטים — סה"כ 18 סטים בעצימות גבוהה',
      'עצימות מקסימלית — לחיצת מוט בשיפוע בטווח כוח (5–8 חזרות)',
      'דרופ סט בסט האחרון של לחיצת מכונה (הורדת 30% משקל)',
      'TUT (זמן מתחת למתח) בהרחקות כבל — תנועה איטית ומבוקרת',
      'מנוחה 90–120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה מתקדמת — לפחות שנת אימון עקבית',
      'תדירות: 5–6 פעמים בשבוע כחלק מתוכנית PPL מלאה',
    ],
    exercises: [
      { name:'Incline Barbell Bench Press', muscleGroup:'Upper Chest', muscleGroupHe:'חזה עליון',    equipment:'Barbell', sets:4, reps:'5-8',  restSeconds:120, suggestedWeightKg:90,  isBodyweight:false },
      { name:'Barbell Overhead Press',      muscleGroup:'Shoulders',   muscleGroupHe:'כתפיים',       equipment:'Barbell', sets:3, reps:'8-10', restSeconds:120, suggestedWeightKg:60,  isBodyweight:false },
      { name:'Machine Chest Press',         muscleGroup:'Chest',       muscleGroupHe:'חזה',          equipment:'Machine', sets:3, reps:'10-12',restSeconds:90,  suggestedWeightKg:75,  isBodyweight:false },
      { name:'Lateral Raises',              muscleGroup:'Side Delts',  muscleGroupHe:'כתפיים צדדיות',equipment:'Cable',   sets:4, reps:'15',   restSeconds:60,  suggestedWeightKg:8,   isBodyweight:false },
      { name:'Skull Crushers',              muscleGroup:'Triceps',     muscleGroupHe:'טריצפס',       equipment:'Barbell', sets:4, reps:'10-12',restSeconds:90,  suggestedWeightKg:40,  isBodyweight:false }
    ]
  },


  // ═══════════════════════════════════════════
  // INTERMEDIATE — Antagonist Split
  // ═══════════════════════════════════════════
  {
    id: 5,
    level: 'Intermediate', levelHe: 'בינוני',
    name: 'Antagonist Day A — Chest & Back', nameHe: 'יום אנטגוניסטים A — חזה וגב',
    subtitle: 'Antagonist · 3× per week · Mon, Wed, Fri', subtitleHe: 'אנטגוניסטי · 3 פעמים בשבוע · ראשון, שלישי, שישי',
    description: 'Chest & back paired as push/pull. While one muscle rests, the other works — more volume, less fatigue.',
    descriptionHe: 'חזה וגב בזוגות לחיצה/משיכה. בזמן שהחזה נח, הגב עובד — יותר נפח, פחות עייפות.',
    category: 'Hypertrophy', categoryHe: 'היפרטרופיה',
    difficulty: 'Intermediate', difficultyHe: 'בינוני',
    durationMin: 65,
    icon: 'swap_horiz',
    bodyAreas: ['Chest', 'Back', 'Lats', 'Shoulders'],
    bodyAreasHe: ['חזה', 'גב', 'לטיסימוס', 'כתפיים'],
    details: [
      '6 תרגילים, 3 סטים — 18 סטים בסה"כ',
      'לחיצה מול משיכה — כל זוג תרגילים על שרירים מנוגדים',
      'פחות עייפות: בזמן שהחזה נח, הגב עובד ולהיפך',
      'מנוחה 90–120 שניות בין תרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — 6+ חודשי ניסיון',
      'תדירות: 3 פעמים בשבוע (ראשון, שלישי, שישי)',
      'תועלת: שיפור יציבה + צמיחה מאוזנת של פלג הגוף העליון',
    ],
    detailsHe: [
      '6 תרגילים, 3 סטים — 18 סטים בסה"כ',
      'לחיצה מול משיכה — כל זוג תרגילים על שרירים מנוגדים',
      'פחות עייפות: בזמן שהחזה נח, הגב עובד ולהיפך',
      'מנוחה 90–120 שניות בין תרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — 6+ חודשי ניסיון',
      'תדירות: 3 פעמים בשבוע (ראשון, שלישי, שישי)',
      'תועלת: שיפור יציבה + צמיחה מאוזנת של פלג הגוף העליון',
    ],
    exercises: [
      { name:'Barbell Bench Press',        muscleGroup:'Chest',      muscleGroupHe:'חזה',           equipment:'Barbell',  sets:3, reps:'6-8',  restSeconds:120, suggestedWeightKg:70, isBodyweight:false },
      { name:'Barbell Bent-Over Row',      muscleGroup:'Back',       muscleGroupHe:'גב',            equipment:'Barbell',  sets:3, reps:'8-10', restSeconds:90,  suggestedWeightKg:65, isBodyweight:false },
      { name:'Incline Barbell Bench Press',muscleGroup:'Upper Chest',muscleGroupHe:'חזה עליון',     equipment:'Barbell',  sets:3, reps:'8-10', restSeconds:90,  suggestedWeightKg:60, isBodyweight:false },
      { name:'Lat Pulldown',               muscleGroup:'Lats',       muscleGroupHe:'לטיסימוס',      equipment:'Machine',  sets:3, reps:'10-12',restSeconds:90,  suggestedWeightKg:50, isBodyweight:false },
      { name:'Cable Flyes',                muscleGroup:'Chest',      muscleGroupHe:'חזה',           equipment:'Cable',    sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:15, isBodyweight:false },
      { name:'Dumbbell Rows',              muscleGroup:'Back',       muscleGroupHe:'גב',            equipment:'Dumbbells',sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:30, isBodyweight:false },
    ]
  },

  {
    id: 6,
    level: 'Intermediate', levelHe: 'בינוני',
    name: 'Antagonist Day B — Arms & Shoulders', nameHe: 'יום אנטגוניסטים B — זרועות וכתפיים',
    subtitle: 'Antagonist · 3× per week · Tue, Thu, Sat', subtitleHe: 'אנטגוניסטי · 3 פעמים בשבוע · שני, רביעי, שבת',
    description: 'Biceps vs triceps in classic antagonist supersets. Shoulders as the stabilizing bridge between both.',
    descriptionHe: 'ביצפס מול טריצפס בסופר-סטים אנטגוניסטים קלאסיים. כתפיים כגשר המייצב בין השניים.',
    category: 'Hypertrophy', categoryHe: 'היפרטרופיה',
    difficulty: 'Intermediate', difficultyHe: 'בינוני',
    durationMin: 55,
    icon: 'sports_mma',
    bodyAreas: ['Biceps', 'Triceps', 'Shoulders'],
    bodyAreasHe: ['ביצפס', 'טריצפס', 'כתפיים'],
    details: [
      '6 תרגילים, 3 סטים — 18 סטים בסה"כ',
      'ביצפס מול טריצפס — הזוג האנטגוניסטי הקלאסי ביותר',
      'כתפיים בתחילה כמייצב ובסיום כבידוד ממוקד',
      'מנוחה 60–90 שניות בין סטים',
      'מתאים לרמה בינונית — 6+ חודשי ניסיון',
      'תדירות: 3 פעמים בשבוע — יום B בתוכנית האנטגוניסטים',
      'תועלת: נפח זרועות + כתפיים מאוזנות ובריאות יותר',
    ],
    detailsHe: [
      '6 תרגילים, 3 סטים — 18 סטים בסה"כ',
      'ביצפס מול טריצפס — הזוג האנטגוניסטי הקלאסי ביותר',
      'כתפיים בתחילה כמייצב ובסיום כבידוד ממוקד',
      'מנוחה 60–90 שניות בין סטים',
      'מתאים לרמה בינונית — 6+ חודשי ניסיון',
      'תדירות: 3 פעמים בשבוע — יום B בתוכנית האנטגוניסטים',
      'תועלת: נפח זרועות + כתפיים מאוזנות ובריאות יותר',
    ],
    exercises: [
      { name:'Barbell Overhead Press', muscleGroup:'Shoulders',   muscleGroupHe:'כתפיים',     equipment:'Barbell',  sets:3, reps:'8-10', restSeconds:90,  suggestedWeightKg:50,  isBodyweight:false },
      { name:'Barbell Curls',          muscleGroup:'Biceps',      muscleGroupHe:'ביצפס',      equipment:'Barbell',  sets:3, reps:'10-12',restSeconds:60,  suggestedWeightKg:30,  isBodyweight:false },
      { name:'Skull Crushers',         muscleGroup:'Triceps',     muscleGroupHe:'טריצפס',     equipment:'Barbell',  sets:3, reps:'10-12',restSeconds:60,  suggestedWeightKg:35,  isBodyweight:false },
      { name:'Tricep Rope Pushdown',   muscleGroup:'Triceps',     muscleGroupHe:'טריצפס',     equipment:'Cable',    sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:20,  isBodyweight:false },
      { name:'Lateral Raises',         muscleGroup:'Side Delts',  muscleGroupHe:'כתפיים צדדיות', equipment:'Dumbbells',sets:3, reps:'15',  restSeconds:60,  suggestedWeightKg:10,  isBodyweight:false },
      { name:'Dumbbell Shoulder Press',muscleGroup:'Shoulders',   muscleGroupHe:'כתפיים',     equipment:'Dumbbells',sets:3, reps:'10-12',restSeconds:60,  suggestedWeightKg:14,  isBodyweight:false },
    ]
  },

  {
    id: 7,
    level: 'Intermediate', levelHe: 'בינוני',
    name: 'Antagonist Day C — Legs & Core', nameHe: 'יום אנטגוניסטים C — רגליים וליבה',
    subtitle: 'Antagonist · 3× per week · With 1 rest day', subtitleHe: 'אנטגוניסטי · 3 פעמים בשבוע · עם יום מנוחה',
    description: 'Quads vs hamstrings alternating. Hip-hinge and knee-dominant compounds for perfectly balanced legs.',
    descriptionHe: 'ריבועים מול ירכיים אחוריות לסירוגין. ציר ירך וכיפוף ברכיים לרגליים מאוזנות לחלוטין.',
    category: 'Strength', categoryHe: 'כוח',
    difficulty: 'Intermediate', difficultyHe: 'בינוני',
    durationMin: 60,
    icon: 'self_improvement',
    bodyAreas: ['Legs', 'Glutes', 'Core', 'Calves'],
    bodyAreasHe: ['רגליים', 'ישבן', 'ליבה', 'תאומים'],
    details: [
      '6 תרגילים, 3–4 סטים — 17 סטים בסה"כ',
      'ריבועים מול ירכיים אחוריות — שרירים אנטגוניסטים של הרגל',
      'ציר ירך (RDL) כנגד כיפוף ברכיים (גובלט/בולגרי) לאיזון מושלם',
      'מנוחה 90–120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — שליטה בטכניקת RDL ו-Squat',
      'תדירות: 3 פעמים בשבוע — יום C בתוכנית האנטגוניסטים',
      'תועלת: חוזק רגליים מאוזן + מניעת פציעות ברכיים וגב תחתון',
    ],
    detailsHe: [
      '6 תרגילים, 3–4 סטים — 17 סטים בסה"כ',
      'ריבועים מול ירכיים אחוריות — שרירים אנטגוניסטים של הרגל',
      'ציר ירך (RDL) כנגד כיפוף ברכיים (גובלט/בולגרי) לאיזון מושלם',
      'מנוחה 90–120 שניות בתרגילי בסיס, 60 שניות בבידוד',
      'מתאים לרמה בינונית — שליטה בטכניקת RDL ו-Squat',
      'תדירות: 3 פעמים בשבוע — יום C בתוכנית האנטגוניסטים',
      'תועלת: חוזק רגליים מאוזן + מניעת פציעות ברכיים וגב תחתון',
    ],
    exercises: [
      { name:'Romanian Deadlift',      muscleGroup:'Hamstrings', muscleGroupHe:'ירכיים אחוריות', equipment:'Barbell',  sets:3, reps:'8-10', restSeconds:120, suggestedWeightKg:80, isBodyweight:false },
      { name:'Goblet Squat',           muscleGroup:'Quads',      muscleGroupHe:'ריבועים',        equipment:'Dumbbells',sets:3, reps:'10-12',restSeconds:90,  suggestedWeightKg:20, isBodyweight:false },
      { name:'Bulgarian Split Squats', muscleGroup:'Glutes',     muscleGroupHe:'ישבן',           equipment:'Dumbbells',sets:3, reps:'10',   restSeconds:90,  suggestedWeightKg:18, isBodyweight:false },
      { name:'Leg Curls',              muscleGroup:'Hamstrings', muscleGroupHe:'ירכיים אחוריות', equipment:'Machine',  sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:45, isBodyweight:false },
      { name:'Calf Raises',            muscleGroup:'Calves',     muscleGroupHe:'תאומים',         equipment:'Machine',  sets:4, reps:'15-20',restSeconds:60,  suggestedWeightKg:90, isBodyweight:false },
      { name:'Weighted Cable Crunches',muscleGroup:'Abs',        muscleGroupHe:'בטן',            equipment:'Cable',    sets:3, reps:'12-15',restSeconds:60,  suggestedWeightKg:30, isBodyweight:false },
    ]
  },

];
