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
  "Barbell Bench Press": {
    how:["Set up with eyes under bar, feet flat","Retract shoulder blades, create natural arch","Lower with control to mid-chest","Press back up along slight arc toward rack"],
    tips:["Keep wrists straight over elbows","Leg drive into floor adds stability","Don't let elbows flare past 75°"],
    howHe:["שכב עם עיניים מתחת לבר, כפות רגליים שטוחות","סגור עצמות שכמה וצור קשת טבעית","הורד בשליטה לאמצע החזה","דחוף בחזרה בקשת קלה לכיוון המתלה"],
    tipsHe:["שמור פרקי כף יד ישרים מעל המרפקים","לחץ רגליים לרצפה לייציבות","אל תניח למרפקים להתפרש מעבר ל-75°"]
  },
  "Dumbbell Incline Press": {
    how:["Set bench 30–45°, press dumbbells to full extension","Lower with elbows at ~60° from torso","Touch near upper chest, squeeze at top"],
    tips:["Greater incline = more upper chest","Neutral grip is easier on shoulders","Control the eccentric for more growth"],
    howHe:["הגדר ספסל ל-30–45°, דחוף משקולות להארכה מלאה","הורד עם מרפקים בכ-60° מהגוף","גע ליד החזה העליון, סחוט בחלק העליון"],
    tipsHe:["זווית גבוהה יותר = יותר חזה עליון","אחיזה ניטרלית קלה יותר על הכתפיים","שלוט בפאזת ההורדה לצמיחה מקסימלית"]
  },
  "Barbell Overhead Press": {
    how:["Grip just outside shoulders, bar on upper chest","Brace core, push bar straight up overhead","Lock out at top, bar over mid-foot"],
    tips:["Keep glutes and abs tight","Tuck chin as bar passes face","Don't lean back excessively"],
    howHe:["אחיזה מחוץ לכתפיים, בר על החזה העליון","מתח ליבה, דחוף בר ישר מעל הראש","נעל בחלק העליון, בר מעל אמצע כף רגל"],
    tipsHe:["שמור ישבן ובטן מתוחים","כופף סנטר כשהבר עובר על הפנים","אל תשען אחורה יתר על המידה"]
  },
  "Lateral Raises": {
    how:["Stand with dumbbells at sides, slight bend in elbows","Raise arms to shoulder height in wide arc","Lower slowly — 3–4 seconds down"],
    tips:["Lead with elbows, not wrists","Think 'pouring a jug' — thumb slightly down","Heavy weight isn't the goal"],
    howHe:["עמוד עם משקולות בצדדים, כיפוף קל במרפקים","הרם ידיים לגובה הכתף בקשת רחבה","הורד לאט — 3–4 שניות למטה"],
    tipsHe:["הוביל עם מרפקים, לא עם פרקי כף יד","חשוב 'שפיכת קנקן' — אגודל מעט למטה","משקל כבד הוא לא המטרה"]
  },
  "Dumbbell Lateral Raises": {
    how:["Stand with dumbbells at sides, slight bend in elbows","Raise arms to shoulder height in wide arc","Lower slowly — 3–4 seconds down"],
    tips:["Lead with elbows, not wrists","Think 'pouring a jug' — thumb slightly down","Heavy weight isn't the goal"],
    howHe:["עמוד עם משקולות בצדדים, כיפוף קל במרפקים","הרם ידיים לגובה הכתף בקשת רחבה","הורד לאט — 3–4 שניות למטה"],
    tipsHe:["הוביל עם מרפקים, לא עם פרקי כף יד","חשוב 'שפיכת קנקן' — אגודל מעט למטה","משקל כבד הוא לא המטרה"]
  },
  "Cable Flyes": {
    how:["Set cables at chest height, step forward with slight lean","Keep soft bend in elbows throughout","Bring hands together in hugging motion, squeeze hard"],
    tips:["Don't let elbows drop below cable line","Focus on squeezing chest, not moving weight","Great for constant tension"],
    howHe:["הגדר כבלים לגובה החזה, צעד קדימה עם נטייה קלה","שמור כיפוף רך במרפקים לאורך כל התנועה","הבא ידיים יחד בתנועת חיבוק, סחוט חזק"],
    tipsHe:["אל תתן למרפקים ליפול מתחת לקו הכבל","התמקד בסחיטת החזה, לא בהזזת המשקל","מעולה למתח קבוע"]
  },
  "Chest Flyes": {
    how:["Lie on bench, dumbbells above chest with slight bend","Open arms wide, feeling stretch across chest","Reverse motion, squeezing chest at top"],
    tips:["Never fully straighten arms","Go only as low as you feel a stretch","Lighter weight with full ROM beats heavy partial ROM"],
    howHe:["שכב על ספסל, משקולות מעל החזה עם כיפוף קל","פתח ידיים לרוחב, תחוש מתיחה על פני החזה","הפוך את התנועה, סחוט חזה בחלק העליון"],
    tipsHe:["לעולם אל תישר ידיים לגמרי","רד רק עד שתרגיש מתיחה","משקל קל עם טווח מלא עדיף על משקל כבד חלקי"]
  },
  "Tricep Rope Pushdown": {
    how:["Stand at cable, grip rope palms facing each other","Keep upper arms pinned to sides","Push down and slightly outward, fully extending elbows"],
    tips:["Flare handles outward at full extension","Don't lean forward or use momentum","Keep elbows tight to torso"],
    howHe:["עמוד בכבל, אחוז בחבל עם כפות ידיים זו מול זו","שמור זרועות עליונות צמודות לצדי הגוף","דחוף למטה ומעט החוצה, יישר מרפקים לגמרי"],
    tipsHe:["פנה ידיות החוצה ביישור מלא","אל תשתמש ביזע קדימה או תנופה","שמור מרפקים צמודים לגוף"]
  },
  "Overhead Tricep Extension": {
    how:["Hold dumbbell overhead with both hands","Lower behind head by bending elbows","Extend back up to full lockout"],
    tips:["Keep elbows pointing forward","Great stretch builds long head of tricep","Don't arch lower back — brace core"],
    howHe:["אחוז במשקולת מעל הראש בשתי ידיים","הורד מאחורי הראש על ידי כיפוף המרפקים","הרחב בחזרה ליישור מלא"],
    tipsHe:["שמור מרפקים מכוונים קדימה","מתיחה מעולה בונה את הראש הארוך של הטריצפס","אל תקמר גב תחתון — מתח ליבה"]
  },
  "Barbell Deadlift": {
    how:["Bar over mid-foot, hip-width stance","Push floor away — hips and shoulders rise together","Lock out hips and knees at top, squeeze glutes"],
    tips:["Keep bar dragging up shins","Take a big breath and brace before each rep","Neutral spine throughout"],
    howHe:["בר מעל אמצע כף רגל, עמידה ברוחב ירך","דחוף רצפה הרחק — ירכיים וכתפיים עולות יחד","נעל ירכיים וברכיים בחלק העליון, סחוט ישבן"],
    tipsHe:["שמור בר צמוד לשוקיים","קח נשימה גדולה ומתח לפני כל חזרה","עמוד שדרה ניטרלי לאורך כל התנועה"]
  },
  "Conventional Deadlift": {
    how:["Bar over mid-foot, hip-width stance","Push floor away — hips and shoulders rise together","Lock out hips and knees at top, squeeze glutes"],
    tips:["Keep bar dragging up shins","Take a big breath and brace before each rep","Neutral spine throughout"],
    howHe:["בר מעל אמצע כף רגל, עמידה ברוחב ירך","דחוף רצפה הרחק — ירכיים וכתפיים עולות יחד","נעל ירכיים וברכיים בחלק העליון, סחוט ישבן"],
    tipsHe:["שמור בר צמוד לשוקיים","קח נשימה גדולה ומתח לפני כל חזרה","עמוד שדרה ניטרלי לאורך כל התנועה"]
  },
  "Barbell Bent-Over Row": {
    how:["Hinge at hips ~45°, knees slightly bent, neutral spine","Pull bar to lower chest / upper abdomen","Lower with control, full stretch at bottom"],
    tips:["Drive elbows back, not up","Keep torso angle consistent","Brace core hard before each rep"],
    howHe:["שפוף בירכיים ~45°, ברכיים כפופות מעט, עמוד שדרה ניטרלי","משוך בר לחלק התחתון של החזה / הבטן העליונה","הורד בשליטה, מתיחה מלאה בתחתית"],
    tipsHe:["הנע מרפקים אחורה, לא מעלה","שמור זווית פלג גוף עליון עקבית","מתח ליבה חזק לפני כל חזרה"]
  },
  "Pull-ups": {
    how:["Hang with arms fully extended, grip just wider than shoulders","Pull chest to bar, leading with elbows going to hips","Lower under full control to dead hang"],
    tips:["Initiate by depressing shoulder blades first","Cross feet behind to prevent swinging","Assisted variations are fine for building up"],
    howHe:["תלה עם ידיים פרושות מלאות, אחיזה מעט רחבה מהכתפיים","משוך חזה לבר, מוביל עם מרפקים לכיוון הירכיים","הורד בשליטה מלאה לתליה מתה"],
    tipsHe:["התחל על ידי הורדת עצמות השכמה","חצות רגליים מאחור למניעת נדנוד","גרסאות עם עזרה מקובלות לבנייה"]
  },
  "Dumbbell Rows": {
    how:["Plant knee and hand on bench, hinge forward","Pull dumbbell to hip, elbow traveling back","Lower with control to full stretch"],
    tips:["Keep hips level — don't twist to lift more","Think 'elbow to ceiling'","Pause at top and feel the lat squeeze"],
    howHe:["הנח ברך ויד על ספסל, שפוף קדימה","משוך משקולת לירך, מרפק נע אחורה","הורד בשליטה למתיחה מלאה"],
    tipsHe:["שמור ירכיים ישרות — אל תסתובב כדי להרים יותר","חשוב 'מרפק לתקרה'","עצור בחלק העליון ותחוש את הסחיטה בגב"]
  },
  "Chest Supported Row": {
    how:["Lie chest-down on incline bench or machine","Pull handles to lower chest with elbows flared","Lower with full control to stretched position"],
    tips:["Chest support eliminates lower back fatigue","Focus on retracting shoulder blades at top","Watch for imbalances between arms"],
    howHe:["שכב עם חזה מטה על ספסל משופע או מכשיר","משוך ידיות לחלק התחתון של החזה עם מרפקים פרושים","הורד בשליטה מלאה למצב מתוח"],
    tipsHe:["תמיכת החזה מבטלת עייפות בגב התחתון","התמקד בקירוב עצמות השכמה בחלק העליון","שים לב לחוסר איזון בין הידיים"]
  },
  "Barbell Curls": {
    how:["Stand with bar at hip height, underhand grip","Curl bar up, keep upper arms still","Lower slowly — 2–3 seconds down"],
    tips:["Upper arms should not swing","Don't lean back to assist","Full range: fully extend and curl high"],
    howHe:["עמוד עם בר ברמת הירכיים, אחיזה תחתונה","כרוך בר מעלה, שמור זרועות עליונות קבועות","הורד לאט — 2–3 שניות למטה"],
    tipsHe:["זרועות עליונות לא צריכות להתנדנד","אל תשען אחורה לעזרה","טווח מלא: יישור מלא וכריה גבוהה"]
  },
  "Dumbbell Hammer Curls": {
    how:["Neutral grip (palms facing each other), curl up","Alternate arms or do both simultaneously","Lower fully for complete stretch"],
    tips:["Works brachialis and forearms too","Great for arm thickness","Keep upper arms vertical"],
    howHe:["אחיזה ניטרלית (כפות ידיים זו מול זו), כרוך מעלה","לחלופין ידיים או ביחד בו-זמנית","הורד לגמרי למתיחה מלאה"],
    tipsHe:["עובד גם על הברכיאליס ועל האמות","מעולה לעובי הזרוע","שמור זרועות עליונות אנכיות"]
  },
  "Lat Pulldown": {
    how:["Grip bar wider than shoulder width, slight lean back","Pull bar to upper chest, leading with elbows","Let bar rise with full arm extension"],
    tips:["Don't lean back excessively","Initiate by depressing shoulder blades first","Imagine pulling elbows to hip pockets"],
    howHe:["אחיזה רחבה מרוחב הכתפיים, נטייה קלה אחורה","משוך בר לחזה העליון, מוביל עם מרפקים","תן לבר לעלות עם יישור ידיים מלא"],
    tipsHe:["אל תישן אחורה יתר על המידה","התחל על ידי הורדת עצמות השכמה","דמיין משיכת מרפקים לכיסי הירכיים"]
  },
  "Face Pulls": {
    how:["Set cable at face height, rope attachment","Pull toward face, elbows stay high and flare outward","Externally rotate so hands end up by ears"],
    tips:["Essential for shoulder health","Light weight with perfect form","Great warm-up for any pressing day"],
    howHe:["הגדר כבל לגובה הפנים, קישור חבל","משוך לכיוון הפנים, מרפקים גבוהים ופרושים החוצה","סובב חיצונית כך שהידיים מסתיימות ליד האוזניים"],
    tipsHe:["חיוני לבריאות הכתף","משקל קל עם טופס מושלם","חימום מעולה לכל יום לחיצה"]
  },
  "Barbell Back Squat": {
    how:["Bar on upper traps, shoulder-width stance, toes out 15–30°","Brace hard, squat until thighs are parallel or below","Drive knees out over toes, push floor away"],
    tips:["Keep chest up — don't collapse forward","'Knees out' prevents knee cave","Take a big belly breath and hold it (Valsalva)"],
    howHe:["בר על הטרפזים העליונים, עמידה ברוחב כתפיים, אצבעות החוצה 15–30°","מתח חזק, כרע עד שהירכיים מקבילות לרצפה או מתחת","דחוף ברכיים החוצה מעל האצבעות, דחוף רצפה הרחק"],
    tipsHe:["שמור חזה מורם — אל תקרוס קדימה","'ברכיים החוצה' מונע קריסת ברכיים","קח נשימת בטן גדולה ואחוז אותה (ולסלווה)"]
  },
  "Front Squat": {
    how:["Bar rests on front delts, elbows high and parallel to floor","Vertical torso throughout","Squat to depth, drive up keeping elbows high"],
    tips:["More quad-dominant than back squat","Wrist mobility can be a limiter — use cross-grip if needed","Start lighter than you think"],
    howHe:["בר נח על הדלטואידים הקדמיים, מרפקים גבוהים ומקבילים לרצפה","פלג גוף עליון אנכי לאורך כל התנועה","כרע לעומק, דחוף מעלה עם שמירת מרפקים גבוהים"],
    tipsHe:["יותר דגש על ריבועים מאשר כפיפה אחורית","ניידות פרק כף יד יכולה להגביל — השתמש באחיזה צולבת במידת הצורך","התחל קל יותר ממה שאתה חושב"]
  },
  "Romanian Deadlift": {
    how:["Stand with bar at hips, soft bend in knees","Hinge at hips, lowering bar along legs","Drive hips forward to return to standing"],
    tips:["Bar stays close to body","Stop when you feel a strong hamstring stretch","Don't confuse with stiff-leg deadlift"],
    howHe:["עמוד עם בר ברמת הירכיים, כיפוף קל בברכיים","שפוף בירכיים, הורד בר לאורך הרגליים","הנע ירכיים קדימה לחזרה לעמידה"],
    tipsHe:["הבר נשאר קרוב לגוף","עצור כשתרגיש מתיחה חזקה בירכיים האחוריות","אל תבלבל עם דד-ליפט עם רגליים ישרות"]
  },
  "Leg Press": {
    how:["Feet hip-width on platform, toes slightly out","Lower until knees at 90°, don't round lower back","Push through full foot, don't lock knees out"],
    tips:["Foot placement changes emphasis","Never let lower back come off pad","Great for volume after heavy squats"],
    howHe:["רגליים ברוחב ירך על הפלטפורמה, אצבעות מעט החוצה","הורד עד שברכיים ב-90°, אל תקמר גב תחתון","דחוף דרך כל הרגל, אל תנעל ברכיים"],
    tipsHe:["מיקום הרגל משנה את הדגש","לעולם אל תתן לגב התחתון להתרחק מהמשענת","מעולה לנפח אחרי כפיפות כבדות"]
  },
  "Leg Curls": {
    how:["Lie face down, pad just above ankles","Curl heels toward glutes with control","Lower slowly — the eccentric is where gains happen"],
    tips:["Plantarflex feet for greater contraction","Full range: fully extend and flex","Avoid jerking — hamstring tears happen here"],
    howHe:["שכב עם פנים למטה, רפידה ממש מעל הקרסוליים","כרוך עקבים לכיוון הישבן בשליטה","הורד לאט — הפאזה האקסצנטרית היא מקום הצמיחה"],
    tipsHe:["פנה כפות רגליים לכיוונך לכיווץ גדול יותר","טווח מלא: יישור מלא ואז כיפוף מלא","הימנע מנגיחות — קרעי ירכיים קורים כאן"]
  },
  "Leg Extensions": {
    how:["Sit with pad on shins just above ankles","Extend legs to full lockout, squeeze quads hard","Lower with control to 90°"],
    tips:["Best used as a finisher after compounds","Toes slightly inward for outer quad","Squeeze hard at top for 1–2 seconds"],
    howHe:["שב עם הרפידה על השוקיים ממש מעל הקרסוליים","יישר רגליים לנעילה מלאה, סחוט ריבועים חזק","הורד בשליטה ל-90°"],
    tipsHe:["הכי טוב כסיום אחרי תרגילים מורכבים","אצבעות מעט פנימה לריבוע החיצוני","סחוט חזק בחלק העליון ל-1–2 שניות"]
  },
  "Bulgarian Split Squats": {
    how:["Rear foot on bench, front foot forward enough for vertical shin","Lower back knee toward floor, keep torso upright","Drive through front heel to return"],
    tips:["The hardest leg exercise — start light","Front foot distance is personal — experiment","Great for hip flexor flexibility"],
    howHe:["רגל אחורית על ספסל, רגל קדמית מספיק קדימה לשוק אנכי","הורד ברך אחורית לכיוון הרצפה, שמור פלג גוף עליון זקוף","הנע דרך עקב קדמי לחזרה"],
    tipsHe:["התרגיל הקשה ביותר לרגליים — התחל קל","מרחק הרגל הקדמית אישי — נסה עד שמרגיש נכון","מעולה לגמישות כופפי ירכיים"]
  },
  "Calf Raises": {
    how:["Stand on edge of platform, shoulder width","Rise up on toes as high as possible, squeeze at top","Lower heel below platform for full stretch"],
    tips:["Full stretch at bottom is essential","Build up slowly: easy to strain Achilles","Both straight-knee and bent-knee variations are important"],
    howHe:["עמוד על קצה פלטפורמה ברוחב כתפיים","עלה על קצות האצבעות כמה שגבוה יותר, סחוט בחלק העליון","הורד עקב מתחת לפלטפורמה למתיחה מלאה"],
    tipsHe:["מתיחה מלאה בתחתית חיונית","בנה לאט לאט: קל לעוות את גיד אכילס","חשוב לאמן גם עם ברכיים ישרות וגם כפופות"]
  },
  "Power Clean": {
    how:["Starting position like a deadlift","Explosive drive from floor, shrug and pull elbows high","Drop under bar, catch on front delts in quarter squat"],
    tips:["Speed is everything — practice with light weight","Triple extension (ankles, knees, hips) generates power","Video yourself to check form"],
    howHe:["מצב התחלתי כמו דד-ליפט","כוח פיצוצי מהרצפה, כיווץ כתפיים ומשיכת מרפקים גבוהים","ירד מתחת לבר, תפוס על הדלטואידים הקדמיים בכפיפת רבע"],
    tipsHe:["מהירות היא הכל — תרגל עם משקל קל","שלישיית הארכה (קרסוליים, ברכיים, ירכיים) מייצרת כוח","צלם את עצמך לבדיקת הטכניקה"]
  },
  "Box Jumps": {
    how:["Stand arm's length from box, squat slightly and swing arms","Explode upward, driving arms overhead","Land softly on entire foot, step down (don't jump down)"],
    tips:["Focus on landing mechanics — soft and controlled","Height you can land safely is the goal","Full recovery between reps"],
    howHe:["עמוד במרחק זרוע מהקופסה, כרע מעט ונפנף ידיים","פרוץ מעלה, הנע ידיים מעל הראש","נחת בעדינות על כל הרגל, רד בפסיעה (לא בקפיצה)"],
    tipsHe:["התמקד במכניקת הנחיתה — רכה ומבוקרת","הגובה שתוכל לנחות עליו בבטחה הוא המטרה","התאוששות מלאה בין חזרות"]
  },
  "Kettlebell Swings": {
    how:["Hinge at hips, hike kettlebell back between legs","Explosively drive hips forward to swing KB to shoulder height","Let KB fall back, hinge again to repeat"],
    tips:["This is a HIP HINGE, not a squat","Keep arms relaxed — hips generate power","Brace core hard at top of each swing"],
    howHe:["שפוף בירכיים, הכנס קטלבל אחורה בין הרגליים","הנע ירכיים בכוח קדימה להנדנד קטלבל לגובה הכתפיים","תן לקטלבל ליפול, שפוף שוב לחזרה"],
    tipsHe:["זהו שיפוף ירכיים, לא כפיפה","שמור ידיים רפויות — הירכיים מייצרות את הכוח","מתח ליבה חזק בחלק העליון של כל נדנוד"]
  },
  "Jump Squats": {
    how:["Stand feet shoulder width, squat to parallel","Explode upward with maximum force","Land with soft knees, absorb force"],
    tips:["Land through toe-heel sequence","Quality over height","Use light or bodyweight only"],
    howHe:["עמוד ברוחב כתפיים, כרע לגובה מקביל","פרוץ מעלה בכוח מקסימלי","נחת עם ברכיים רכות, ספוג כוח"],
    tipsHe:["נחת דרך רצף אצבעות-עקב","איכות על פני גובה","השתמש במשקל קל או גוף בלבד"]
  },
  "Walking Lunges": {
    how:["Step forward with long stride, lower back knee toward floor","Keep front shin vertical, torso upright","Push off back foot as next step"],
    tips:["Long stride = more glute; short stride = more quad","Keep dumbbells at sides","Great for hip mobility"],
    howHe:["פסע קדימה עם צעד ארוך, הורד ברך אחורית לכיוון הרצפה","שמור שוק קדמי אנכי, פלג גוף עליון זקוף","דחוף מהרגל האחורית לצעד הבא"],
    tipsHe:["צעד ארוך = יותר ישבן; צעד קצר = יותר ריבועים","שמור משקולות בצדדים","מעולה לניידות הירכיים"]
  },
  "Weighted Cable Crunches": {
    how:["Kneel at cable, rope behind head, curl torso toward knees","Movement is at the waist, not the hips","Fully stretch back up between reps"],
    tips:["Keep hips still — movement from spine","Look at your knees throughout","Resist using hip flexors by keeping thighs vertical"],
    howHe:["כרע בכבל, חבל מאחורי הראש, כרוף פלג גוף עליון לכיוון הברכיים","התנועה מהמותניים, לא מהירכיים","מתיחה מלאה אחורה בין חזרות"],
    tipsHe:["שמור ירכיים קבועות — התנועה מעמוד השדרה","הסתכל על הברכיים לאורך כל הדרך","התנגד לשימוש בכופפי ירכיים על ידי שמירת ירכיים אנכיות"]
  },
  "Ab Rollouts": {
    how:["Kneel with roller under shoulders, core braced","Roll out slowly until arms extended, back flat","Pull back using abs — not momentum"],
    tips:["Stop before lower back arches","Hardest ab exercise at standing","Build up slowly"],
    howHe:["כרע עם גלגל מתחת לכתפיים, ליבה מתוחה","גלגל לאט החוצה עד שהידיים מורחבות, גב שטוח","משוך בחזרה באמצעות שרירי הבטן — לא בתנופה"],
    tipsHe:["עצור לפני שהגב התחתון מתקמר","תרגיל הבטן הקשה ביותר בביצוע עמידה","בנה לאט"]
  },
  "Hanging Leg Raises": {
    how:["Dead hang from bar with full shoulder engagement","Raise legs until parallel or higher","Lower with control — don't swing"],
    tips:["Posterior pelvic tilt maximizes lower ab contraction","Bend knees if straight-leg is too hard","Control the descent"],
    howHe:["תלייה מתה מבר עם מעורבות כתף מלאה","הרם רגליים עד מקביל או גבוה יותר","הורד בשליטה — אל תתנדנד"],
    tipsHe:["הטיית אגן אחורית ממקסמת כיווץ בטן תחתונה","כפף ברכיים אם ישר קשה מדי","שלוט בירידה"]
  },
  "Russian Twists": {
    how:["Sit with torso at 45°, knees bent and feet raised","Rotate side to side, touching weight to floor each side","Keep lower back flat"],
    tips:["Rotation comes from torso, not arms","Keep feet raised for more difficulty","Slow and controlled beats fast and sloppy"],
    howHe:["שב עם פלג גוף עליון ב-45°, ברכיים כפופות ורגליים מורמות","סבב הצידה והצידה, גע במשקל לרצפה בכל צד","שמור גב תחתון שטוח"],
    tipsHe:["הסיבוב בא מפלג הגוף, לא מהידיים","שמור רגליים מורמות לקושי גדול יותר","איטי ומבוקר עדיף על מהיר ועצלני"]
  },
  "Pallof Press": {
    how:["Stand sideways to cable, hold handle at chest height","Press hands straight out, resisting cable pulling sideways","Bring back to chest slowly"],
    tips:["Anti-rotation exercise — goal is NOT to rotate","Perfect for core stability","Excellent warm-up for heavy compound lifts"],
    howHe:["עמוד בצד לכבל, אחוז בידית ברמת החזה","דחוף ידיים ישר קדימה, מתנגד לכבל המושך הצידה","הבא בחזרה לחזה לאט"],
    tipsHe:["תרגיל נגד-סיבוב — המטרה היא לא להסתובב","מושלם לייציבות הליבה","חימום מצוין לתרגילים מורכבים כבדים"]
  },
  "Bicycle Crunches": {
    how:["Lie back, hands behind head, legs raised","Bring opposite elbow to knee as you extend other leg","Rotate fully, feel oblique squeeze each side"],
    tips:["Don't pull on your neck","Full rotation and extension is key","Slow controlled beats fast pedaling"],
    howHe:["שכב אחורה, ידיים מאחורי הראש, רגליים מורמות","הבא מרפק מנגד לברך כשמישיר את הרגל השנייה","סבב מלא, תחוש כיווץ אלכסוניים בכל צד"],
    tipsHe:["אל תמשוך על הצוואר","סיבוב מלא ויישור הוא המפתח","איטי ומבוקר עדיף על רכיבה מהירה"]
  },
  "Plank Hold": {
    how:["Forearms on floor, elbows under shoulders, body straight","Squeeze glutes, abs, and quads to maintain neutral spine","Breathe steadily"],
    tips:["Sagging or piked hip = reset","Progress by adding time or harder variations","Quality > duration"],
    howHe:["אמות על הרצפה, מרפקים מתחת לכתפיים, גוף ישר","סחוט ישבן, בטן וריבועים לשמירת עמוד שדרה ניטרלי","נשם בקביעות"],
    tipsHe:["ירכיים שמשתפלות או מתרוממות = איפוס","התקדם על ידי הוספת זמן או גרסאות קשות יותר","איכות > משך"]
  },
  "Jump Rope": {
    how:["Light grip, turn rope from wrists not shoulders","Small jumps — just enough clearance","Land on balls of feet with slight knee bend"],
    tips:["Start with basic two-foot jump","Good cardio with low impact if landing is correct","Keep elbows close to sides"],
    howHe:["אחיזה קלה, סבב חבל מפרקי כף יד לא מכתפיים","קפיצות קטנות — רק מספיק פינוי","נחת על כדורי כף רגל עם כיפוף קל בברכיים"],
    tipsHe:["התחל עם קפיצה בשתי רגליים בסיסית","קרדיו טוב עם מינימום עומס אם הנחיתה נכונה","שמור מרפקים קרובים לצדדים"]
  },
  "Burpees": {
    how:["Drop hands to floor, jump feet back to plank","Perform a push-up (optional)","Jump feet to hands, explode up with arms overhead"],
    tips:["Modify by stepping feet if needed","Maintain flat back in plank","Pace yourself — form breaks down fast"],
    howHe:["הורד ידיים לרצפה, קפוץ רגליים אחורה ללוח","בצע שכיבת שמיכה (אופציונלי)","קפוץ רגליים לידיים, פרוץ מעלה עם ידיים מעל הראש"],
    tipsHe:["שנה לפסיעת רגליים אם צריך","שמור גב שטוח בלוח","נהל קצב — הטופס מתפרק מהר"]
  },
  "Mountain Climbers": {
    how:["Start in high plank, hands under shoulders","Drive knee to chest alternately at speed","Keep hips level — don't bob up and down"],
    tips:["Slower pace = core; faster pace = cardio","Keep core tight throughout","Push the floor away with your hands"],
    howHe:["התחל בלוח גבוה, ידיים מתחת לכתפיים","הנע ברך לכיוון החזה לסירוגין בקצב מהיר","שמור ירכיים ישרות — אל תתנדנד מעלה ומטה"],
    tipsHe:["קצב איטי = ליבה; קצב מהיר = קרדיו","שמור ליבה מתוחה לאורך כל הדרך","דחוף את הרצפה הרחק עם הידיים"]
  },
  "Push-ups": {
    how:["Hands just wider than shoulder width, body straight","Lower chest to floor with control, elbows at ~45°","Press up to full extension"],
    tips:["Elevate hands to make easier; feet to make harder","Keep core tight — no sagging hips","Full range: chest touches floor, full arm extension"],
    howHe:["ידיים מעט רחבות מרוחב הכתפיים, גוף ישר","הורד חזה לרצפה בשליטה, מרפקים ב-~45°","דחוף ליישור ידיים מלא"],
    tipsHe:["הרם ידיים לקל יותר; הרם רגליים לקשה יותר","שמור ליבה מתוחה — אל תשקע ירכיים","טווח מלא: חזה נוגע ברצפה, יישור ידיים מלא"]
  },
  "High Knees": {
    how:["Run in place driving knees up to hip height","Pump arms in opposition to legs","Land lightly on balls of feet"],
    tips:["Key is KNEE HEIGHT — drive them up","Keep torso upright","Use as warm-up or high-intensity interval"],
    howHe:["רוץ במקום עם ברכיים לגובה הירך","נפנף ידיים בניגוד לרגליים","נחת בעדינות על כדורי כף רגל"],
    tipsHe:["המפתח הוא גובה הברך — דחוף אותן מעלה","שמור פלג גוף עליון זקוף","השתמש כחימום או אינטרוול בעצימות גבוהה"]
  },
  "Rowing Machine": {
    how:["Drive with legs first, then lean back, then pull arms to chest","Return: arms out, lean forward, then bend knees","Smooth continuous motion"],
    tips:["Legs generate ~60% of power","Keep a straight back at catch position","Monitor pace (500m split) and stay consistent"],
    howHe:["הנע ברגליים תחילה, אז שעון אחורה, אז משוך ידיים לחזה","חזרה: ידיים קדימה, שעון קדימה, אז כוף ברכיים","תנועה רציפה וחלקה"],
    tipsHe:["רגליים מייצרות ~60% מהכוח","שמור גב ישר בנקודת התפיסה","עקוב אחרי הקצב (ספליט 500מ') ושמור עקבי"]
  },
  "Dumbbell Shoulder Press": {
    how:["Start with dumbbells at ear height, elbows at 90°","Press straight up until arms fully extended","Lower under full control"],
    tips:["Slightly in front of ears, not directly to sides","Neutral grip is easier on joints","Keep core tight and avoid excessive arch"],
    howHe:["התחל עם משקולות ברמת האוזן, מרפקים ב-90°","דחוף ישר מעלה עד יישור ידיים מלא","הורד בשליטה מלאה"],
    tipsHe:["מעט קדימה לאוזניים, לא ישר לצדדים","אחיזה ניטרלית קלה יותר לפרקים","שמור ליבה מתוחה והימנע מקמר יתר"]
  },
  "Seated Rear Delt Flyes": {
    how:["Sit on edge of bench, lean forward with flat back","With dumbbells hanging, raise arms to sides at shoulder height","Squeeze rear delts and upper back at top"],
    tips:["Lead with elbows, not hands","Slight bend in elbows throughout","One of the best shoulder health investments"],
    howHe:["שב על קצה ספסל, שפוף קדימה עם גב שטוח","עם משקולות תלויות, הרם ידיים לצדדים לגובה הכתף","סחוט דלטואידים אחוריים ופלג גוף עליון בחלק העליון"],
    tipsHe:["הוביל עם מרפקים, לא עם ידיים","כיפוף קל במרפקים לאורך כל התנועה","אחד ההשקעות הטובות ביותר לבריאות הכתף"]
  },
  "Deadlift": {
    how:["Bar over mid-foot, hip-width stance","Push floor away — hips and shoulders rise together","Lock out hips and knees at top, squeeze glutes"],
    tips:["Keep bar dragging up shins","Take a big breath and brace before each rep","Neutral spine throughout"],
    howHe:["בר מעל אמצע כף רגל, עמידה ברוחב ירך","דחוף רצפה הרחק — ירכיים וכתפיים עולות יחד","נעל ירכיים וברכיים בחלק העליון, סחוט ישבן"],
    tipsHe:["שמור בר צמוד לשוקיים","קח נשימה גדולה ומתח לפני כל חזרה","עמוד שדרה ניטרלי לאורך כל התנועה"]
  },
  "Goblet Squat": {
    how:["Hold dumbbell vertically at chest height, elbows pointed down","Stand shoulder-width, toes slightly out","Lower until thighs are parallel or below, chest stays tall","Drive through heels back to standing"],
    tips:["Dumbbell acts as a counterbalance — use it","Elbows should track inside knees on the way down","Perfect intro squat for learning the pattern"],
    howHe:["אחוז במשקולת אנכית ברמת החזה, מרפקים מכוונים למטה","עמוד ברוחב כתפיים, אצבעות מעט החוצה","רד עד שהירכיים מקבילות לרצפה או מתחת, חזה נשאר גבוה","דחוף דרך עקבים בחזרה לעמידה"],
    tipsHe:["המשקולת משמשת כנגד-משקל — נצל אותה","מרפקים צריכים לעקוב בתוך הברכיים בדרך למטה","כפיפה מבוא מושלמת ללימוד תבנית הכפיפה"]
  },
  "Incline Barbell Bench Press": {
    how:["Set bench to 30–45°, grip just wider than shoulders","Unrack bar, lower to upper chest with control","Press explosively back to full extension","Maintain leg drive and arch throughout"],
    tips:["Heavier than dumbbell variant — use a spotter","Bar should touch just below the collarbone","Explosive concentric, slow 2–3s eccentric for hypertrophy"],
    howHe:["הגדר ספסל ל-30–45°, אחיזה מעט רחבה מהכתפיים","הוצא בר מהמתלה, הורד לחזה העליון בשליטה","דחוף בחזרה ביישור מלא בכוח פיצוצי","שמור לחץ רגליים וקשת לאורך כל התנועה"],
    tipsHe:["כבד יותר מגרסת המשקולות — השתמש במאמן","הבר צריך לגעת ממש מתחת לעצם הבריח","אקסצנטרי איטי 2–3 שניות לצמיחה מקסימלית"]
  },
  "Machine Chest Press": {
    how:["Adjust seat so handles are at mid-chest height","Grip handles, feet flat on floor","Press forward to full extension, controlled return","On final set: perform a drop set — reduce weight 30% and continue to failure"],
    tips:["Machine removes stabilization demand — focus on pure squeeze","Great for chest isolation with minimal joint stress","Drop set on last set is mandatory for advanced stimulus"],
    howHe:["כוונן מושב כך שהידיות ברמת החזה האמצעית","אחוז בידיות, רגליים שטוחות על הרצפה","דחוף להארכה מלאה, חזרה מבוקרת","בסט האחרון: בצע דרופ סט — הורד 30% ממשקל והמשך עד כשל"],
    tipsHe:["המכונה מסירה את דרישת הייצוב — התמקד בסחיטה טהורה","מצוין לבידוד חזה עם עומס מינימלי על הפרקים","דרופ סט בסט האחרון הוא חובה לגירוי מתקדם"]
  },
  "Skull Crushers": {
    how:["Lie on bench, grip barbell or EZ-bar shoulder-width overhead","Lower bar toward forehead by bending elbows only","Upper arms stay vertical throughout","Extend back to lockout — squeeze triceps hard"],
    tips:["Keep upper arms perfectly vertical — elbows shouldn't flare","Slight incline bench reduces elbow stress","Use EZ-bar to reduce wrist strain"],
    howHe:["שכב על ספסל, אחוז במוט ישר או EZ ברוחב כתפיים מעל הראש","הורד מוט לכיוון המצח על ידי כיפוף מרפקים בלבד","זרועות עליונות נשארות אנכיות לאורך כל התנועה","הרחב בחזרה לנעילה — סחוט טריצפס חזק"],
    tipsHe:["שמור זרועות עליונות אנכיות לחלוטין — מרפקים לא מתפשטים","ספסל עם שיפוע קל מקטין עומס על המרפקים","השתמש ב-EZ-bar להפחתת עומס על פרקי כף היד"]
  },
};

// ─── UI Strings ───────────────────────────────────────────────────────────────
const UI = {
  allPlans:'כל האימונים', strength:'כוח', hypertrophy:'היפרטרופיה', cardio:'קרדיו', core:'ליבה',
  currentFocus:'פוקוס נוכחי', elitePrograms:'תוכניות אלייט',
  viewPlan:'צפה בתוכנית',
  weeklyProgress:'התקדמות שבועית', daysComplete:'ימים הושלמו', daysRemaining:'ימים נותרו',
  workoutDetails:'פרטי האימון',
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
  welcomeLabel:'ברוך הבא', chooseLevelTitle:'בחר את הרמה שלך',
  selectedLevelLabel:'רמה נבחרת',
  backToLevels:'חזרה לרמות',
};

const t = key => UI[key] ?? key;
const tW = (w, f) => w[f+'He'] || w[f];
const tEx = (ex, f) => ex[f+'He'] || ex[f];

// ─── App State ────────────────────────────────────────────────────────────────
const state = {
  currentScreen: 'home',
  activeLevel: null,
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
  if (!state.activeLevel) {
    renderLevelSelection();
  } else {
    renderWorkoutGrid();
  }
}

function renderLevelSelection() {
  document.querySelector('[data-i18n="currentFocus"]').textContent = t('welcomeLabel');
  document.querySelector('[data-i18n="elitePrograms"]').textContent = t('chooseLevelTitle');
  document.getElementById('filter-area').innerHTML = '';

  const grid = document.getElementById('workout-grid');
  grid.className = 'flex flex-col gap-lg';

  const levels = [
    {
      key: 'Beginner',
      label: 'מתחיל',
      prog:  'FBW — גוף מלא',
      freq:  '2–3 פעמים בשבוע',
      desc:  'אימון גוף מלא אחד. מושלם לבניית בסיס חזק.',
      badge: 'text-primary-fixed bg-primary-fixed/10 border border-primary-fixed/30',
      arrow: 'text-primary-fixed',
    },
    {
      key: 'Intermediate',
      label: 'בינוני',
      prog:  'חלוקת AB — עליון / תחתון',
      freq:  '4 פעמים בשבוע',
      desc:  'שני אימונים משלימים — פלג גוף עליון ותחתון.',
      badge: 'text-secondary bg-secondary-container/10 border border-secondary-container/40',
      arrow: 'text-secondary',
    },
    {
      key: 'Advanced',
      label: 'מקצוען',
      prog:  'חלוקת PPL — דחיפה / משיכה / רגליים',
      freq:  '5–6 פעמים בשבוע',
      desc:  'ווליום גבוה, עצימות מקסימלית. לספורטאים מנוסים בלבד.',
      badge: 'text-error bg-error/10 border border-error/30',
      arrow: 'text-error',
    },
  ];

  grid.innerHTML = levels.map(lv => {
    const count = WORKOUTS.filter(w => w.level === lv.key).length;
    const wLabel = `${count} ${count === 1 ? 'אימון' : 'אימונים'}`;
    return `
      <div onclick="setLevel('${lv.key}')" class="gradient-card p-xl rounded-xl border border-surface-container-highest cursor-pointer active:scale-[0.98] transition-transform hover:border-primary-fixed/30">
        <div class="flex justify-between items-start mb-md">
          <h2 class="font-h2 text-h2 uppercase text-primary">${lv.label}</h2>
          <span class="font-label-caps text-label-caps px-sm py-base rounded-full uppercase ${lv.badge}">${lv.freq}</span>
        </div>
        <p class="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider mb-sm">${lv.prog}</p>
        <p class="text-on-surface-variant font-body-md mb-lg">${lv.desc}</p>
        <div class="flex items-center justify-between">
          <span class="font-label-caps text-label-caps text-on-surface-variant uppercase">${wLabel}</span>
          <span class="material-symbols-outlined ${lv.arrow} rtl-mirror">arrow_forward</span>
        </div>
      </div>
    `;
  }).join('');
}

function renderWorkoutGrid() {
  const levelLabel = { Beginner: 'מתחיל', Intermediate: 'בינוני', Advanced: 'מקצוען' }[state.activeLevel];

  document.querySelector('[data-i18n="currentFocus"]').textContent = t('selectedLevelLabel');
  document.querySelector('[data-i18n="elitePrograms"]').textContent = levelLabel.toUpperCase();

  document.getElementById('filter-area').innerHTML = `
    <button onclick="setLevel(null)" class="mb-lg flex items-center gap-sm text-on-surface-variant active:opacity-60 transition-opacity">
      <span class="material-symbols-outlined rtl-mirror" style="font-size:20px">arrow_back</span>
      <span class="font-label-caps text-label-caps uppercase">${t('backToLevels')}</span>
    </button>
  `;

  const workouts = WORKOUTS.filter(w => w.level === state.activeLevel);
  const grid = document.getElementById('workout-grid');
  grid.className = 'grid grid-cols-1 sm:grid-cols-2 gap-lg';
  grid.innerHTML = '';

  workouts.forEach(workout => {
    const card = document.createElement('div');
    card.className = 'gradient-card p-lg rounded-xl border border-surface-container-highest flex flex-col justify-between';
    card.innerHTML = `
      <div>
        <div class="flex justify-between items-start mb-md">
          <span class="material-symbols-outlined text-primary-fixed bg-surface-container-highest p-sm rounded-lg">${workout.icon}</span>
          <span class="bg-surface-container-highest text-on-surface px-xs py-1 rounded font-label-caps text-[10px] uppercase">${workout.durationMin} ${t('min')}</span>
        </div>
        <h3 class="font-h3 text-h3 uppercase mb-xs" dir="auto">${tW(workout,'name')}</h3>
        <p class="text-on-surface-variant text-sm mb-sm" dir="auto">${tW(workout,'description')}</p>
        <div class="flex flex-wrap gap-xs mb-lg">
          ${workout.bodyAreasHe.map(a =>
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

function setLevel(level) {
  state.activeLevel = level;
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
  document.getElementById('section-details').textContent = t('workoutDetails');
  document.getElementById('section-body-areas').textContent = t('bodyAreas');
  document.getElementById('section-muscles').textContent = t('musclesWorked');
  document.getElementById('section-protocol').textContent = t('theProtocol');
  document.getElementById('tap-guide-hint').textContent = t('tapForGuide');
  document.getElementById('label-front').textContent = t('front');
  document.getElementById('label-back-view').textContent = t('back');
  document.getElementById('label-targeted').textContent = t('targeted');
  document.getElementById('label-not-targeted').textContent = t('notTargeted');

  const details = state.lang === 'he' ? (w.detailsHe || w.details || []) : (w.details || []);
  document.getElementById('overview-details').innerHTML = details.map(d =>
    `<li class="flex items-start gap-sm">
      <span class="text-primary-fixed mt-[2px] flex-shrink-0">▸</span>
      <span class="font-body-md text-on-surface-variant">${d}</span>
    </li>`
  ).join('');

  const areas = w.bodyAreasHe;
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
          <h4 class="font-h3 text-body-lg text-primary uppercase truncate ltr-content">${ex.name}</h4>
          <div class="flex flex-wrap gap-xs mt-xs">
            <span class="bg-surface-container-highest text-on-surface-variant px-xs py-[2px] rounded text-[10px] font-bold uppercase tracking-widest">${ex.equipment}</span>
            <span class="bg-surface-container-highest text-on-surface-variant px-xs py-[2px] rounded text-[10px] font-bold uppercase tracking-widest">${tEx(ex,'muscleGroup')}</span>
          </div>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="font-data-display text-h3 text-primary-fixed whitespace-nowrap">${ex.sets} <span class="text-body-md font-body-md text-on-surface-variant">×</span> ${ex.reps}</span>
          <div class="flex items-center justify-end gap-xs mt-xs text-on-surface-variant">
            <span class="material-symbols-outlined" style="font-size:13px;">timer</span>
            <span class="font-label-caps text-label-caps uppercase">מנוחה ${formatRestTime(ex.restSeconds)}</span>
          </div>
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
  'Dumbbell Incline Press':    'photo-1692372372344-41aed374b848',
  'Push-ups':                  'photo-1598971457999-ca4ef48a9a71',
  'Cable Flyes':               'photo-1540497077202-7c8a3999166f',
  'Chest Flyes':               'photo-1534438327276-14e5300c3a48',
  // Shoulders
  'Barbell Overhead Press':    'photo-1583454110551-21f2fa2afe61',
  'Dumbbell Shoulder Press':   'photo-1674834726923-3ba828d37846',
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
  'Lat Pulldown':              'photo-1745329532611-03818982ed31',
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
  // New exercises
  'Goblet Squat':                  'photo-1603503363848-6952525df449',
  'Incline Barbell Bench Press':   'photo-1571019614242-c5c5dee9f50b',
  'Machine Chest Press':           'photo-1571019614242-c5c5dee9f50b',
  'Skull Crushers':                'photo-1540497077202-7c8a3999166f',
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

const LOCAL_EXERCISE_IMG = {
  // Beginner
  'Goblet Squat':                'images/golbat_squat.png',
  'Dumbbell Incline Press':      'images/dumbbell_incline_press.png',
  'Lat Pulldown':                'images/lat_pulldown.png',
  'Dumbbell Shoulder Press':     'images/dumbbell_shoulders_press.png',
  'Plank Hold':                  'images/plank_hold.png',
  // Intermediate — Day A
  'Barbell Bench Press':         'images/barbell_bench_press.png',
  'Barbell Bent-Over Row':       'images/barbell_bent_over_row.png',
  'Cable Flyes':                 'images/cable_flyes.png',
  'Lateral Raises':              'images/lateral_raises.png',
  'Barbell Curls':               'images/barbell_curls.png',
  'Tricep Rope Pushdown':        'images/tricep_rope_pushdown.png',
  // Intermediate — Day B
  'Romanian Deadlift':           'images/romanian_deadlift.png',
  'Bulgarian Split Squats':      'images/bulgarian_split_squats.png',
  'Leg Curls':                   'images/leg_curls.png',
  'Calf Raises':                 'images/calf_raises.png',
  'Weighted Cable Crunches':     'images/weighted_cable_crunches.png',
  // Advanced — Push Day
  'Incline Barbell Bench Press': 'images/incline_barbell_bench_press.png',
  'Barbell Overhead Press':      'images/barbell_overhead_press.png',
  'Machine Chest Press':         'images/machine_chest_press.png',
  'Skull Crushers':              'images/skull_crushers.png',
};

function exImgUrl(name, muscleGroup, w, h) {
  if (LOCAL_EXERCISE_IMG[name]) return LOCAL_EXERCISE_IMG[name];
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

  const modalName = document.getElementById('modal-ex-name');
  modalName.textContent = ex.name.toUpperCase();
  modalName.setAttribute('dir', 'ltr');
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
    const howSteps = info.howHe || info.how;
    const tipsList  = info.tipsHe || info.tips;
    document.getElementById('modal-how').innerHTML = howSteps.map((s,i) =>
      `<div class="flex gap-sm items-start"><span class="w-6 h-6 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">${i+1}</span><span class="text-on-surface text-sm">${s}</span></div>`
    ).join('');
    document.getElementById('modal-tips').innerHTML = tipsList.map(tip =>
      `<div class="flex gap-xs items-start"><span class="material-symbols-outlined text-primary-fixed flex-shrink-0" style="font-size:16px;font-variation-settings:'FILL' 1;">bolt</span><span class="text-on-surface-variant text-sm">${tip}</span></div>`
    ).join('');
  } else {
    const fallback = 'בצע עם טכניקה מבוקרת וטווח תנועה מלא.';
    document.getElementById('modal-how').innerHTML = `<p class="text-on-surface-variant text-sm">${fallback}</p>`;
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

  // Horizontal scroll via mouse wheel on filter slider (legacy — kept for safety)
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
