const questions = {
  easy: [
    {
      question:
        'Was ist das zentral für den Kompetenzbereich "Unterrichten, Ausbilden und Weiterbilden"?',
      answers: [
        "technische Funktionsweise von Kraftfahrzeugen",
        "rechtliche Grundlagen",
        "Gestaltung der Fahrschulausbildung",
        "Psychologie des Fahrverhaltens",
      ],
      correct: "Gestaltung der Fahrschulausbildung",
    },

    {
      question: "Was ist die Hauptaufgabe des Curricularen Leitfadens?",
      answers: [
        "Festlegung der genauen Anzahl an Fahrstunden",
        "Vorgabe von Lernzielen und Aufgaben für die Fahrpraktische Ausbildung",
        "Definition der rechtlichen Rahmenbedingungen für Fahrlehrer",
        "Beschreibung der technischen Details von Fahrschulfahrzeugen",
      ],
      correct:
        "Vorgabe von Lernzielen und Aufgaben für die Fahrpraktische Ausbildung",
    },

    {
      question: "Was ist ein ASF-Seminar?",
      answers: [
        "freiwilliges Fahrsicherheitstraining für Fahranfänger",
        "Vorbereitungskurs auf die praktische Fahrerlaubnisprüfung",
        "verpflichtende Maßnahme für auffällige Fahranfänger in der Probezeit",
        "Seminar für Fahranfänger zum Thema Umweltbewusstsein",
      ],
      correct:
        "verpflichtende Maßnahme für auffällige Fahranfänger in der Probezeit",
    },

    {
      question: "Welches Dokument muss in einer Fahrschule ausliegen?",
      answers: [
        "Kompetenzrahmen für die Fahrlehrerausbildung",
        "Ausbildungsplan der Fahrschule",
        "Curriculare Leitfaden",
        "Fahrschüler-Ausbildungsordnung",
      ],
      correct: "Ausbildungsplan der Fahrschule",
    },

    {
      question:
        "Was ist KEIN Bestandteil der professionellen Kompetenz von Fahrlehrern?",
      answers: [
        "Wissen über Verkehrsregeln und Fahrzeugtechnik",
        "pädagogisches Geschick",
        "sicheres und verantwortungsvolles Fahrkönnen",
        "Mitgliedschaft in einem Automobilclub",
      ],
      correct: "Mitgliedschaft in einem Automobilclub",
    },
  ],
  medium: [
    {
      question:
        'Was versteht man unter "inhaltlicher Verzahnung" in der Fahrschulausbildung?',
      answers: [
        "Erarbeitung von Lerninhalten im Selbststudium",
        "Trennung von theoretischen und praktischen Ausbildungsinhalten",
        "Verknüpfung von Inhalten aus dem Theorieunterricht mit der Fahrpraktischen Ausbildung",
        "Durchführung von Fahrstunden ausschließlich auf Verkehrsübungsplätzen",
      ],
      correct:
        "Verknüpfung von Inhalten aus dem Theorieunterricht mit der Fahrpraktischen Ausbildung",
    },

    {
      question:
        'Was ist ein zentrales Ziel der "Didaktischen Reduktion" in der Fahrschulausbildung?',
      answers: [
        "Vermittlung möglichst vieler Fachbegriffe",
        "verständliche Aufbereitung von Inhalten",
        "Reduzierung auf ein Minimum",
        "Beschränkung auf die wichtigsten Fachbegriffe",
      ],
      correct: "verständliche Aufbereitung von Inhalten",
    },

    {
      question:
        'Welche der folgenden Aussagen trifft auf die "Konstruktive Auffassung von Lehren und Lernen" zu?',
      answers: [
        "Fahrlehrer gibt strikte Anweisungen, die der Fahrschüler ausführt",
        "Fahrschüler entwickelt eigenständig Fahrstrategien in geeigneten Lernumgebungen",
        "Fahrpraktische Ausbildung findet hauptsächlich auf Verkehrsübungsplätzen statt",
        "Theorieunterricht beschränkt sich auf die Bearbeitung von Prüfungsfragen",
      ],
      correct:
        "Fahrschüler entwickelt eigenständig Fahrstrategien in geeigneten Lernumgebungen",
    },

    {
      question:
        'Was ist ein Beispiel für "Binnendifferenzierung" im Theorieunterricht?',
      answers: [
        "Fahrlehrer wiederholt den Stoff",
        "Fahrlehrer passt die Schwierigkeit der Aufgaben an",
        "Fahrlehrer gibt den Fahrschülern Hausaufgaben auf",
        "Fahrlehrer lässt die Fahrschüler selbst entscheiden, welche Themen sie behandeln möchten",
      ],
      correct:
        "Fahrschüler entwickelt eigenständig Fahrstrategien in geeigneten Lernumgebungen",
    },

    {
      question:
        'Was ist ein Beispiel für "inhaltliche Verzahnung" in der Fahrschulausbildung?',
      answers: [
        "Fahrlehrer erklärt die Funktionsweise der Kupplung",
        "Fahrlehrer lässt im Theorieunterricht eine Gefahrenstrecke beurteilen, bevor diese in der Fahrstunde befahren wird",
        "Fahrlehrer demonstriert das richtige Einparken",
        "Fahrlehrer lässt Prüfungsfragen am Computer bearbeiten",
      ],
      correct:
        "Fahrlehrer lässt im Theorieunterricht eine Gefahrenstrecke beurteilen, bevor diese in der Fahrstunde befahren wird",
    },

    {
      question:
        'Was ist die Zielsetzung des Ansatzes "Zielgerichtetes Üben im Sinne von Deliberate Practice"?',
      answers: [
        "Fahrschüler sollen durch gezieltes Üben ihrer Schwächen ihre Fähigkeiten verbessern",
        "Fahrschüler sollen möglichst schnell alle Fahraufgaben beherrschen",
        "Fahrschüler sollen die Inhalte der theoretischen Fahrerlaubnisprüfung auswendig lernen",
        "Fahrschüler sollen ein möglichst komfortables Fahrgefühl entwickeln",
      ],
      correct:
        "Fahrschüler sollen durch gezieltes Üben ihrer Schwächen ihre Fähigkeiten verbessern",
    },
  ],
  hard: [
    {
      question:
        'Was ist ein Beispiel für eine "instruktive Methode" im Theorieunterricht?',
      answers: [
        "Fahrschüler diskutieren in Gruppenarbeit über Vorfahrtsregeln",
        "Fahrlehrer hält einen Lehrvortrag zum Thema Vorfahrtsregeln",
        "Fahrschüler erarbeiten sich die Vorfahrtsregeln anhand von Lernvideos",
        "Fahrschüler berichten von ihren Erfahrungen mit Vorfahrtssituationen",
      ],
      correct: "Fahrlehrer hält einen Lehrvortrag zum Thema Vorfahrtsregeln",
    },

    {
      question:
        'Was sollte ein Fahrlehrer bei der "fachlichen Vermittlung der Lehr-Lerninhalte" im Theorieunterricht beachten?',
      answers: [
        "Den Unterricht möglichst unterhaltsam gestalten",
        "Verwendung von Fachbegriffen vermeiden",
        "Zusammenhänge richtig und nachvollziehbar vermitteln",
        "Theorieunterricht ausschließlich mit Präsentationen gestalten",
      ],
      correct: "Zusammenhänge richtig und nachvollziehbar vermitteln",
    },

    {
      question:
        'Was ist KEIN Bestandteil des in der FahrschAusbO vorgeschriebenen Prüfungsteils "Prüfungsfahrt"?',
      answers: [
        "Abfahrtkontrolle",
        "Fahraufgaben",
        "Grundfahraufgaben",
        "Prüfung, ob Verkehrssituationen sicher, verantwortungsvoll und umweltbewusst bewältigt werden",
      ],
      correct: "Abfahrtkontrolle",
    },

    {
      question:
        'Was ist ein Beispiel für "Fehlvorstellungen von Fahrschülern"?',
      answers: [
        "Fahrschüler meint, immer die Kupplung treten zu müssen, um langsamer zu fahren",
        "Fahrschüler gibt zu, dass er noch unsicher beim Einparken ist",
        "Fahrschüler fragt nach, wenn er eine Anweisung nicht verstanden hat",
        "Fahrschüler hat Angst vor der praktischen Fahrerlaubnisprüfung",
      ],
      correct:
        "Fahrschüler meint, immer die Kupplung treten zu müssen, um langsamer zu fahren",
    },

    {
      question:
        'Was ist ein Beispiel für "kognitives Aktivieren" von Fahrschülern im Theorieunterricht?',
      answers: [
        "Fahrlehrer zeigt ein Bild von einem Hund am Straßenrand, um die Gefühle der Fahrschüler anzusprechen",
        "Fahrlehrer bittet die Fahrschüler, sich zu entspannen",
        "Fahrlehrer zeigt ein Bild einer bekannten Vorfahrtsituation und bittet, die richtige Reihenfolge der Fahrzeuge zu benennen",
        "Fahrlehrer macht Dehnübungen mit den Fahrschülern, um sie aufzulockern",
      ],
      correct:
        "Fahrlehrer zeigt ein Bild einer bekannten Vorfahrtsituation und bittet, die richtige Reihenfolge der Fahrzeuge zu benennen",
    },
  ],
};

const MAX_QUESTIONS = 15;
const PRIZE_TIERS = [
  50, 100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000,
  500000, 1000000,
];

let currentLevel = "easy";
let answeredQuestions = 0;
let usedJokers = {
  "50_50": 3, // Starten mit 3 Jokern
};
let remainingQuestions = {
  easy: [...questions.easy],
  medium: [...questions.medium],
  hard: [...questions.hard],
};

let askedQuestions = [];
let currentQuestion = null;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

function loadQuestion() {
  let questionsArray = remainingQuestions[currentLevel];

  while (questionsArray.length === 0) {
    currentLevel = currentLevel === "easy" ? "medium" : "hard";
    questionsArray = remainingQuestions[currentLevel];

    if (questionsArray.length === 0) {
      updateFeedback("Keine Fragen mehr übrig.");
      return;
    }
  }

  let questionIndex = Math.floor(Math.random() * questionsArray.length);
  let questionData = questionsArray[questionIndex];

  while (askedQuestions.includes(questionData.question)) {
    questionsArray.splice(questionIndex, 1);
    if (questionsArray.length === 0) {
      currentLevel = currentLevel === "easy" ? "medium" : "hard";
      questionsArray = remainingQuestions[currentLevel];
    }
    questionIndex = Math.floor(Math.random() * questionsArray.length);
    questionData = questionsArray[questionIndex];
  }

  askedQuestions.push(questionData.question);
  currentQuestion = questionData;

  document.getElementById("question").textContent = questionData.question;
  const answers = [...questionData.answers];
  shuffleArray(answers);

  const answerButtons = document.querySelectorAll(".answer");
  answerButtons.forEach((button, i) => {
    button.textContent = answers[i];
    button.style.display = "inline-block";
    button.dataset.correct =
      answers[i] === questionData.correct ? "true" : "false";
    button.onclick = () => chooseAnswer(button.dataset.correct === "true");
  });

  updateFeedback("Frage geladen.");
  updateJokerButton();
}

function chooseAnswer(isCorrect) {
  if (isCorrect) {
    answeredQuestions++;
    document.getElementById("questions-answered").textContent =
      answeredQuestions;

    let prize = PRIZE_TIERS[answeredQuestions - 1] || 0;
    document.getElementById("prize").textContent = prize;

    if (answeredQuestions >= MAX_QUESTIONS) {
      updateFeedback("Herzlichen Glückwunsch! Sie haben 1.000.000 € gewonnen!");
      document.getElementById("joker-50_50").className = "out-of-stock";
      document.getElementById("joker-50_50").disabled = true;
      disableAnswerButtons();
      document.getElementById("start-button").style.display = "block";
      return;
    }

    loadQuestion();
  } else {
    updateFeedback("Leider falsch! Das Spiel endet.");
    document.getElementById("prize").textContent = "0";
    disableAnswerButtons();
    document.getElementById("joker-50_50").className = "out-of-stock";
    document.getElementById("joker-50_50").disabled = true;
    document.getElementById("start-button").style.display = "block";
  }
}

function disableAnswerButtons() {
  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
    button.style.backgroundColor = "#6c757d"; // Grau für deaktiviert
    button.style.cursor = "not-allowed";
  });
}

function useJoker(jokerType) {
  if (jokerType === "50_50") {
    if (usedJokers["50_50"] <= 0) {
      updateFeedback("Keine 50:50-Joker mehr verfügbar!");
      return;
    }

    usedJokers["50_50"]--;
    updateJokerButton();

    const answerButtons = document.querySelectorAll(".answer");
    let incorrectAnswers = [];

    answerButtons.forEach((button) => {
      if (button.dataset.correct === "false") {
        incorrectAnswers.push(button);
      }
    });

    shuffleArray(incorrectAnswers);
    incorrectAnswers.slice(0, 2).forEach((button) => {
      button.style.display = "none";
    });

    updateFeedback("50:50-Joker verwendet.");
  }
}

function updateJokerButton() {
  const jokerButton = document.getElementById("joker-50_50");
  if (usedJokers["50_50"] === 3) {
    jokerButton.className = "available";
    jokerButton.textContent = `50:50 (${usedJokers["50_50"]})`;
  } else if (usedJokers["50_50"] === 2) {
    jokerButton.className = "used-once";
    jokerButton.textContent = `50:50 (${usedJokers["50_50"]})`;
  } else if (usedJokers["50_50"] === 1) {
    jokerButton.className = "used-twice";
    jokerButton.textContent = `50:50 (${usedJokers["50_50"]})`;
  } else {
    jokerButton.className = "out-of-stock";
    jokerButton.textContent = `50:50 (0)`;
  }
  jokerButton.disabled =
    usedJokers["50_50"] === 0 || answeredQuestions >= MAX_QUESTIONS;
}

function updateFeedback(message) {
  document.getElementById("feedback-message").textContent = message;
}

function startGame() {
  // Spiel zurücksetzen
  answeredQuestions = 0;
  document.getElementById("questions-answered").textContent = answeredQuestions;
  document.getElementById("prize").textContent = "0";
  usedJokers = { "50_50": 3 };

  remainingQuestions = {
    easy: [...questions.easy],
    medium: [...questions.medium],
    hard: [...questions.hard],
  };

  askedQuestions = [];
  currentQuestion = null;

  // UI zurücksetzen
  document.getElementById("feedback-message").textContent =
    "Willkommen zum Spiel!";
  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = false;
    button.style.backgroundColor = "#007bff"; // Zurücksetzen auf ursprüngliche Farbe
    button.style.cursor = "pointer";
  });

  document.getElementById("joker-50_50").className = "available";
  document.getElementById(
    "joker-50_50"
  ).textContent = `50:50 (${usedJokers["50_50"]})`;
  document.getElementById("joker-50_50").disabled = false;

  document.getElementById("start-button").style.display = "none";
  loadQuestion();
}

// Initiales Spiel laden
loadQuestion();
