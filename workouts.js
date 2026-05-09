const WORKOUTS = [
  {
    id: 1,
    name: "Push Day",       nameHe: "יום דחיפה",
    subtitle: "Chest, Shoulders & Triceps", subtitleHe: "חזה, כתפיים וטריצפס",
    description: "Compound pressing movements to build chest density and shoulder width. Based on classic PPL programming.",
    descriptionHe: "תנועות לחיצה מרכיביות לבניית צפיפות חזה ורוחב כתפיים. מבוסס על תכנות PPL קלאסי.",
    category: "Strength", categoryHe: "כוח",
    difficulty: "Intermediate", difficultyHe: "בינוני",
    durationMin: 55, icon: "fitness_center",
    bodyAreas: ["Chest","Shoulders","Triceps"],
    bodyAreasHe: ["חזה","כתפיים","טריצפס"],
    exercises: [
      { name:"Barbell Bench Press",  muscleGroup:"Chest",      muscleGroupHe:"חזה",           equipment:"Barbell",    sets:4, reps:"6-8",  restSeconds:180, suggestedWeightKg:77.5, isBodyweight:false },
      { name:"Dumbbell Incline Press",muscleGroup:"Upper Chest",muscleGroupHe:"חזה עליון",     equipment:"Dumbbells",  sets:3, reps:"8-10", restSeconds:120, suggestedWeightKg:30,   isBodyweight:false },
      { name:"Barbell Overhead Press",muscleGroup:"Shoulders",  muscleGroupHe:"כתפיים",        equipment:"Barbell",    sets:3, reps:"6-8",  restSeconds:180, suggestedWeightKg:52.5, isBodyweight:false },
      { name:"Lateral Raises",        muscleGroup:"Side Delts", muscleGroupHe:"כתפיים צדדיות",equipment:"Dumbbells",  sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:13.5, isBodyweight:false },
      { name:"Cable Flyes",           muscleGroup:"Chest",      muscleGroupHe:"חזה",           equipment:"Cable",      sets:3, reps:"10-12",restSeconds:90,  suggestedWeightKg:20,   isBodyweight:false },
      { name:"Tricep Rope Pushdown",  muscleGroup:"Triceps",    muscleGroupHe:"טריצפס",        equipment:"Cable",      sets:3, reps:"10-12",restSeconds:90,  suggestedWeightKg:25,   isBodyweight:false },
      { name:"Overhead Tricep Extension",muscleGroup:"Triceps", muscleGroupHe:"טריצפס",        equipment:"Dumbbell",   sets:3, reps:"12-15",restSeconds:60,  suggestedWeightKg:17.5, isBodyweight:false }
    ]
  },
  {
    id: 2,
    name: "Pull Day",       nameHe: "יום משיכה",
    subtitle: "Back & Biceps", subtitleHe: "גב וביצפס",
    description: "Heavy pulling movements to build a thick back and strong biceps. Deadlift-focused for maximum posterior chain development.",
    descriptionHe: "תנועות משיכה כבדות לבניית גב עבה וביצפס חזק. ממוקד בדדליפט לפיתוח מקסימלי של השרשרת האחורית.",
    category: "Strength", categoryHe: "כוח",
    difficulty: "Intermediate", difficultyHe: "בינוני",
    durationMin: 55, icon: "rowing",
    bodyAreas: ["Back","Biceps","Rear Delts"],
    bodyAreasHe: ["גב","ביצפס","כתפיים אחוריות"],
    exercises: [
      { name:"Barbell Deadlift",     muscleGroup:"Posterior Chain",muscleGroupHe:"שרשרת אחורית",equipment:"Barbell",  sets:3, reps:"5",    restSeconds:180, suggestedWeightKg:130, isBodyweight:false },
      { name:"Barbell Bent-Over Row",muscleGroup:"Back",           muscleGroupHe:"גב",           equipment:"Barbell",  sets:4, reps:"6-8",  restSeconds:180, suggestedWeightKg:85,  isBodyweight:false },
      { name:"Pull-ups",             muscleGroup:"Lats",           muscleGroupHe:"לטיסימוס",     equipment:"Bodyweight",sets:3,reps:"8-10", restSeconds:120, suggestedWeightKg:10,  isBodyweight:true  },
      { name:"Dumbbell Rows",        muscleGroup:"Back",           muscleGroupHe:"גב",           equipment:"Dumbbells",sets:3, reps:"10-12",restSeconds:120, suggestedWeightKg:42.5,isBodyweight:false },
      { name:"Barbell Curls",        muscleGroup:"Biceps",         muscleGroupHe:"ביצפס",        equipment:"Barbell",  sets:3, reps:"8-10", restSeconds:90,  suggestedWeightKg:35,  isBodyweight:false },
      { name:"Lat Pulldown",         muscleGroup:"Lats",           muscleGroupHe:"לטיסימוס",     equipment:"Machine",  sets:3, reps:"10-12",restSeconds:90,  suggestedWeightKg:65,  isBodyweight:false },
      { name:"Dumbbell Hammer Curls",muscleGroup:"Biceps",         muscleGroupHe:"ביצפס",        equipment:"Dumbbells",sets:3, reps:"12-15",restSeconds:60,  suggestedWeightKg:20,  isBodyweight:false }
    ]
  },
  {
    id: 3,
    name: "Leg Day",        nameHe: "יום רגליים",
    subtitle: "Quads, Hamstrings & Glutes", subtitleHe: "ריבועים, ירכיים וישבן",
    description: "Squat-based leg program for total lower body development. Covers all major muscle groups from quads to calves.",
    descriptionHe: "תוכנית רגליים מבוססת סקוואט לפיתוח פלג גוף תחתון מלא. מכסה את כל קבוצות השרירים מהריבועים עד התאומים.",
    category: "Strength", categoryHe: "כוח",
    difficulty: "Intermediate", difficultyHe: "בינוני",
    durationMin: 60, icon: "directions_run",
    bodyAreas: ["Quads","Hamstrings","Glutes","Calves"],
    bodyAreasHe: ["ריבועים","ירכיים אחוריות","ישבן","תאומים"],
    exercises: [
      { name:"Barbell Back Squat",    muscleGroup:"Quads",     muscleGroupHe:"ריבועים",         equipment:"Barbell",  sets:4, reps:"6-8",  restSeconds:180, suggestedWeightKg:110, isBodyweight:false },
      { name:"Romanian Deadlift",     muscleGroup:"Hamstrings",muscleGroupHe:"ירכיים אחוריות",  equipment:"Barbell",  sets:3, reps:"8-10", restSeconds:150, suggestedWeightKg:95,  isBodyweight:false },
      { name:"Leg Press",             muscleGroup:"Quads",     muscleGroupHe:"ריבועים",         equipment:"Machine",  sets:3, reps:"10-12",restSeconds:120, suggestedWeightKg:240, isBodyweight:false },
      { name:"Leg Curls",             muscleGroup:"Hamstrings",muscleGroupHe:"ירכיים אחוריות",  equipment:"Machine",  sets:3, reps:"10-12",restSeconds:120, suggestedWeightKg:80,  isBodyweight:false },
      { name:"Leg Extensions",        muscleGroup:"Quads",     muscleGroupHe:"ריבועים",         equipment:"Machine",  sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:105, isBodyweight:false },
      { name:"Bulgarian Split Squats",muscleGroup:"Glutes",    muscleGroupHe:"ישבן",            equipment:"Dumbbells",sets:3, reps:"10-12",restSeconds:90,  suggestedWeightKg:20,  isBodyweight:false },
      { name:"Calf Raises",           muscleGroup:"Calves",    muscleGroupHe:"תאומים",          equipment:"Machine",  sets:3, reps:"15-20",restSeconds:60,  suggestedWeightKg:140, isBodyweight:false }
    ]
  },
  {
    id: 4,
    name: "Full Body 5×5",  nameHe: "גוף מלא 5×5",
    subtitle: "Compound Strength Program", subtitleHe: "תוכנית כוח מרכיבית",
    description: "The classic StrongLifts 5×5 — three compound movements, five sets of five reps. Simple, proven, brutally effective for strength gains.",
    descriptionHe: "ה-StrongLifts 5×5 הקלאסי — שלוש תנועות מרכיביות, חמישה סטים של חמש חזרות. פשוט, מוכח, ואפקטיבי ברוטאלית לרכישת כוח.",
    category: "Strength", categoryHe: "כוח",
    difficulty: "Intermediate", difficultyHe: "בינוני",
    durationMin: 50, icon: "sports",
    bodyAreas: ["Full Body","Core","Back","Legs"],
    bodyAreasHe: ["גוף מלא","ליבה","גב","רגליים"],
    exercises: [
      { name:"Barbell Back Squat",    muscleGroup:"Quads",          muscleGroupHe:"ריבועים",    equipment:"Barbell", sets:5, reps:"5", restSeconds:180, suggestedWeightKg:105, isBodyweight:false },
      { name:"Barbell Bench Press",   muscleGroup:"Chest",          muscleGroupHe:"חזה",        equipment:"Barbell", sets:5, reps:"5", restSeconds:180, suggestedWeightKg:75,  isBodyweight:false },
      { name:"Barbell Bent-Over Row", muscleGroup:"Back",           muscleGroupHe:"גב",         equipment:"Barbell", sets:5, reps:"5", restSeconds:180, suggestedWeightKg:85,  isBodyweight:false },
      { name:"Barbell Overhead Press",muscleGroup:"Shoulders",      muscleGroupHe:"כתפיים",     equipment:"Barbell", sets:3, reps:"8", restSeconds:120, suggestedWeightKg:50,  isBodyweight:false },
      { name:"Deadlift",              muscleGroup:"Posterior Chain",muscleGroupHe:"שרשרת אחורית",equipment:"Barbell",sets:1, reps:"5", restSeconds:180, suggestedWeightKg:130, isBodyweight:false }
    ]
  },
  {
    id: 5,
    name: "Upper Hypertrophy", nameHe: "היפרטרופיה עליונה",
    subtitle: "Chest, Back, Shoulders & Arms", subtitleHe: "חזה, גב, כתפיים וזרועות",
    description: "High-volume upper body workout targeting all major muscle groups for maximum hypertrophy. 8–12 rep range with moderate rest.",
    descriptionHe: "אימון פלג גוף עליון בנפח גבוה הממקד את כל קבוצות השרירים הגדולות למיקסום היפרטרופיה. טווח 8–12 חזרות עם מנוחה בינונית.",
    category: "Hypertrophy", categoryHe: "היפרטרופיה",
    difficulty: "Intermediate", difficultyHe: "בינוני",
    durationMin: 65, icon: "layers",
    bodyAreas: ["Chest","Back","Shoulders","Arms"],
    bodyAreasHe: ["חזה","גב","כתפיים","זרועות"],
    exercises: [
      { name:"Barbell Bench Press",  muscleGroup:"Chest",     muscleGroupHe:"חזה",      equipment:"Barbell",  sets:3, reps:"8-10", restSeconds:150, suggestedWeightKg:75,   isBodyweight:false },
      { name:"Dumbbell Rows",        muscleGroup:"Back",      muscleGroupHe:"גב",       equipment:"Dumbbells",sets:3, reps:"10-12",restSeconds:120, suggestedWeightKg:40,   isBodyweight:false },
      { name:"Dumbbell Shoulder Press",muscleGroup:"Shoulders",muscleGroupHe:"כתפיים", equipment:"Dumbbells",sets:3, reps:"10-12",restSeconds:120, suggestedWeightKg:28,   isBodyweight:false },
      { name:"Chest Flyes",          muscleGroup:"Chest",     muscleGroupHe:"חזה",      equipment:"Dumbbells",sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:17.5, isBodyweight:false },
      { name:"Barbell Curls",        muscleGroup:"Biceps",    muscleGroupHe:"ביצפס",    equipment:"Barbell",  sets:3, reps:"10-12",restSeconds:90,  suggestedWeightKg:32.5, isBodyweight:false },
      { name:"Tricep Rope Pushdown", muscleGroup:"Triceps",   muscleGroupHe:"טריצפס",   equipment:"Cable",    sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:25,   isBodyweight:false },
      { name:"Face Pulls",           muscleGroup:"Rear Delts",muscleGroupHe:"כתפיים אחוריות",equipment:"Cable",sets:3,reps:"15-20",restSeconds:60,  suggestedWeightKg:30,   isBodyweight:false },
      { name:"Lat Pulldown",         muscleGroup:"Lats",      muscleGroupHe:"לטיסימוס", equipment:"Machine",  sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:65,   isBodyweight:false }
    ]
  },
  {
    id: 6,
    name: "Lower Power",    nameHe: "כוח תחתון",
    subtitle: "Explosive Lower Body Training", subtitleHe: "אימון פלג גוף תחתון פיצוצי",
    description: "Power-focused lower body session combining Olympic lifts with plyometrics. Develops fast-twitch muscle fibers and athletic explosiveness.",
    descriptionHe: "אימון פלג גוף תחתון ממוקד כוח המשלב הרמות אולימפיות עם פליאומטריקה. מפתח סיבי שריר מהירים ופיצוץ אתלטי.",
    category: "Strength", categoryHe: "כוח",
    difficulty: "Advanced", difficultyHe: "מתקדם",
    durationMin: 55, icon: "flash_on",
    bodyAreas: ["Quads","Hamstrings","Glutes","Full Body"],
    bodyAreasHe: ["ריבועים","ירכיים אחוריות","ישבן","גוף מלא"],
    exercises: [
      { name:"Power Clean",      muscleGroup:"Full Body",  muscleGroupHe:"גוף מלא",         equipment:"Barbell",   sets:5, reps:"3",    restSeconds:180, suggestedWeightKg:70, isBodyweight:false },
      { name:"Box Jumps",        muscleGroup:"Quads",      muscleGroupHe:"ריבועים",          equipment:"Bodyweight",sets:4, reps:"5",    restSeconds:90,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Front Squat",      muscleGroup:"Quads",      muscleGroupHe:"ריבועים",          equipment:"Barbell",   sets:4, reps:"5",    restSeconds:150, suggestedWeightKg:90, isBodyweight:false },
      { name:"Kettlebell Swings",muscleGroup:"Hamstrings", muscleGroupHe:"ירכיים אחוריות",  equipment:"Kettlebell",sets:4, reps:"8",    restSeconds:90,  suggestedWeightKg:24, isBodyweight:false },
      { name:"Jump Squats",      muscleGroup:"Quads",      muscleGroupHe:"ריבועים",          equipment:"Bodyweight",sets:3, reps:"8",    restSeconds:60,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Walking Lunges",   muscleGroup:"Glutes",     muscleGroupHe:"ישבן",             equipment:"Dumbbells", sets:3, reps:"10/leg",restSeconds:90, suggestedWeightKg:30, isBodyweight:false }
    ]
  },
  {
    id: 7,
    name: "Core & Abs",     nameHe: "ליבה ובטן",
    subtitle: "Core Strength & Stability", subtitleHe: "כוח ויציבות ליבה",
    description: "Targeted core work combining weighted abdominal exercises with stability training. Builds functional core strength and visible definition.",
    descriptionHe: "עבודת ליבה ממוקדת המשלבת תרגילי בטן ממושקלים עם אימון יציבות. בונה כוח ליבה פונקציונלי ועיצוב נראה לעין.",
    category: "Core", categoryHe: "ליבה",
    difficulty: "Beginner", difficultyHe: "מתחיל",
    durationMin: 25, icon: "rotate_right",
    bodyAreas: ["Core","Abs","Lower Back"],
    bodyAreasHe: ["ליבה","בטן","גב תחתון"],
    exercises: [
      { name:"Weighted Cable Crunches",muscleGroup:"Abs",      muscleGroupHe:"בטן",    equipment:"Cable",    sets:3, reps:"12-15",restSeconds:90, suggestedWeightKg:40, isBodyweight:false },
      { name:"Ab Rollouts",            muscleGroup:"Core",     muscleGroupHe:"ליבה",   equipment:"Barbell",  sets:3, reps:"10-12",restSeconds:90, suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Hanging Leg Raises",     muscleGroup:"Lower Abs",muscleGroupHe:"בטן תחתונה",equipment:"Bodyweight",sets:3,reps:"10-12",restSeconds:90,suggestedWeightKg:0,isBodyweight:true },
      { name:"Russian Twists",         muscleGroup:"Obliques", muscleGroupHe:"אלכסוניים",equipment:"Dumbbell",sets:3,reps:"20",  restSeconds:60, suggestedWeightKg:15, isBodyweight:false },
      { name:"Pallof Press",           muscleGroup:"Core",     muscleGroupHe:"ליבה",   equipment:"Cable",    sets:3, reps:"12/side",restSeconds:60,suggestedWeightKg:30,isBodyweight:false },
      { name:"Bicycle Crunches",       muscleGroup:"Abs",      muscleGroupHe:"בטן",    equipment:"Bodyweight",sets:3,reps:"20",  restSeconds:60, suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Plank Hold",             muscleGroup:"Core",     muscleGroupHe:"ליבה",   equipment:"Bodyweight",sets:3,reps:"45-60s",restSeconds:90,suggestedWeightKg:0, isBodyweight:true  }
    ]
  },
  {
    id: 8,
    name: "HIIT Circuit",   nameHe: "מעגל HIIT",
    subtitle: "High Intensity Interval Training", subtitleHe: "אימון אינטרוולים בעצימות גבוהה",
    description: "8-exercise circuit with 40s work / 20s rest intervals. Burns maximum calories and boosts cardiovascular capacity. 4 rounds total.",
    descriptionHe: "מעגל 8 תרגילים עם 40 שניות עבודה / 20 שניות מנוחה. שורף קלוריות מקסימלי ומשפר כושר לב-ריאה. 4 סבבים סה\"כ.",
    category: "Cardio", categoryHe: "קרדיו",
    difficulty: "Advanced", difficultyHe: "מתקדם",
    durationMin: 35, icon: "bolt",
    bodyAreas: ["Full Body","Cardio"],
    bodyAreasHe: ["גוף מלא","קרדיו"],
    exercises: [
      { name:"Jump Rope",      muscleGroup:"Cardio",          muscleGroupHe:"קרדיו",    equipment:"Rope",      sets:4, reps:"40s", restSeconds:20,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Burpees",        muscleGroup:"Full Body",       muscleGroupHe:"גוף מלא", equipment:"Bodyweight",sets:4, reps:"40s", restSeconds:20,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Kettlebell Swings",muscleGroup:"Posterior Chain",muscleGroupHe:"שרשרת אחורית",equipment:"Kettlebell",sets:4,reps:"40s",restSeconds:20,suggestedWeightKg:20,isBodyweight:false},
      { name:"Mountain Climbers",muscleGroup:"Core",           muscleGroupHe:"ליבה",    equipment:"Bodyweight",sets:4, reps:"40s", restSeconds:20,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Box Jumps",      muscleGroup:"Quads",           muscleGroupHe:"ריבועים", equipment:"Bodyweight",sets:4, reps:"40s", restSeconds:20,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Push-ups",       muscleGroup:"Chest",           muscleGroupHe:"חזה",     equipment:"Bodyweight",sets:4, reps:"40s", restSeconds:20,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"High Knees",     muscleGroup:"Cardio",          muscleGroupHe:"קרדיו",    equipment:"Bodyweight",sets:4, reps:"40s", restSeconds:20,  suggestedWeightKg:0,  isBodyweight:true  },
      { name:"Rowing Machine", muscleGroup:"Full Body",       muscleGroupHe:"גוף מלא", equipment:"Machine",   sets:4, reps:"40s", restSeconds:300, suggestedWeightKg:0,  isBodyweight:false }
    ]
  },
  {
    id: 9,
    name: "Shoulder & Arms", nameHe: "כתפיים וזרועות",
    subtitle: "Delts, Biceps & Triceps", subtitleHe: "דלטואידים, ביצפס וטריצפס",
    description: "Dedicated shoulder and arm session for maximum hypertrophy. Overhead press for strength, isolation work for pump and definition.",
    descriptionHe: "אימון כתפיים וזרועות ייעודי למיקסום היפרטרופיה. לחיצת כתפיים לכוח, עבודת בידוד לנפח ועיצוב.",
    category: "Hypertrophy", categoryHe: "היפרטרופיה",
    difficulty: "Intermediate", difficultyHe: "בינוני",
    durationMin: 50, icon: "accessibility_new",
    bodyAreas: ["Shoulders","Biceps","Triceps"],
    bodyAreasHe: ["כתפיים","ביצפס","טריצפס"],
    exercises: [
      { name:"Barbell Overhead Press",  muscleGroup:"Shoulders", muscleGroupHe:"כתפיים",          equipment:"Barbell",  sets:4, reps:"6-8",  restSeconds:180, suggestedWeightKg:52.5, isBodyweight:false },
      { name:"Dumbbell Lateral Raises", muscleGroup:"Side Delts",muscleGroupHe:"כתפיים צדדיות",   equipment:"Dumbbells",sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:13.5, isBodyweight:false },
      { name:"Dumbbell Shoulder Press", muscleGroup:"Shoulders", muscleGroupHe:"כתפיים",          equipment:"Dumbbells",sets:3, reps:"10-12",restSeconds:120, suggestedWeightKg:28,   isBodyweight:false },
      { name:"Barbell Curls",           muscleGroup:"Biceps",    muscleGroupHe:"ביצפס",           equipment:"Barbell",  sets:3, reps:"8-10", restSeconds:90,  suggestedWeightKg:35,   isBodyweight:false },
      { name:"Seated Rear Delt Flyes",  muscleGroup:"Rear Delts",muscleGroupHe:"כתפיים אחוריות",  equipment:"Dumbbells",sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:12.5, isBodyweight:false },
      { name:"Tricep Rope Pushdown",    muscleGroup:"Triceps",   muscleGroupHe:"טריצפס",          equipment:"Cable",    sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:25,   isBodyweight:false },
      { name:"Dumbbell Hammer Curls",   muscleGroup:"Biceps",    muscleGroupHe:"ביצפס",           equipment:"Dumbbells",sets:3, reps:"10-12",restSeconds:90,  suggestedWeightKg:20,   isBodyweight:false },
      { name:"Overhead Tricep Extension",muscleGroup:"Triceps",  muscleGroupHe:"טריצפס",          equipment:"Dumbbell", sets:3, reps:"12-15",restSeconds:60,  suggestedWeightKg:17.5, isBodyweight:false }
    ]
  },
  {
    id: 10,
    name: "Back & Posterior Chain", nameHe: "גב ושרשרת אחורית",
    subtitle: "Back, Hamstrings & Glutes",    subtitleHe: "גב, ירכיים אחוריות וישבן",
    description: "Comprehensive posterior chain session. Heavy deadlifts and rows build a thick back, while hamstring work creates full athletic development.",
    descriptionHe: "אימון שרשרת אחורית מקיף. דדליפטים וחתירות כבדות לגב עבה, עבודת ירכיים לפיתוח אתלטי מלא.",
    category: "Strength", categoryHe: "כוח",
    difficulty: "Advanced", difficultyHe: "מתקדם",
    durationMin: 60, icon: "vertical_align_bottom",
    bodyAreas: ["Back","Hamstrings","Rear Delts","Glutes"],
    bodyAreasHe: ["גב","ירכיים אחוריות","כתפיים אחוריות","ישבן"],
    exercises: [
      { name:"Conventional Deadlift",muscleGroup:"Posterior Chain",muscleGroupHe:"שרשרת אחורית",equipment:"Barbell",sets:3, reps:"5",    restSeconds:180, suggestedWeightKg:130, isBodyweight:false },
      { name:"Barbell Bent-Over Row",muscleGroup:"Back",           muscleGroupHe:"גב",           equipment:"Barbell",sets:4, reps:"8-10", restSeconds:150, suggestedWeightKg:80,  isBodyweight:false },
      { name:"Pull-ups",             muscleGroup:"Lats",           muscleGroupHe:"לטיסימוס",     equipment:"Bodyweight",sets:3,reps:"8-10",restSeconds:120,suggestedWeightKg:10,  isBodyweight:true  },
      { name:"Romanian Deadlift",    muscleGroup:"Hamstrings",     muscleGroupHe:"ירכיים אחוריות",equipment:"Barbell",sets:3,reps:"8-10", restSeconds:120, suggestedWeightKg:95,  isBodyweight:false },
      { name:"Chest Supported Row",  muscleGroup:"Back",           muscleGroupHe:"גב",           equipment:"Machine", sets:3, reps:"10-12",restSeconds:120, suggestedWeightKg:65,  isBodyweight:false },
      { name:"Lat Pulldown",         muscleGroup:"Lats",           muscleGroupHe:"לטיסימוס",     equipment:"Machine", sets:3, reps:"12-15",restSeconds:90,  suggestedWeightKg:70,  isBodyweight:false },
      { name:"Leg Curls",            muscleGroup:"Hamstrings",     muscleGroupHe:"ירכיים אחוריות",equipment:"Machine",sets:3,reps:"12-15",restSeconds:90,  suggestedWeightKg:80,  isBodyweight:false },
      { name:"Face Pulls",           muscleGroup:"Rear Delts",     muscleGroupHe:"כתפיים אחוריות",equipment:"Cable",  sets:3,reps:"15-20",restSeconds:60,  suggestedWeightKg:30,  isBodyweight:false }
    ]
  }
];
