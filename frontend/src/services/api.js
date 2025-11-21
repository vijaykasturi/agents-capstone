function delay(data, ms = 400) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

// -------------- Mock Data --------------
const mockMindMap = {
  subject: "Math",
  nodes: [
    { id: "algebra", label: "Algebra", mastered: true },
    { id: "geometry", label: "Geometry", mastered: false },
    { id: "calculus", label: "Calculus", mastered: false },
    { id: "trigonometry", label: "Trigonometry", mastered: true },
  ],
  edges: [
    ["algebra", "geometry"],
    ["geometry", "calculus"],
    ["calculus", "trigonometry"],
  ],
};

const mockQuiz = {
  topic: "Algebra",
  questions: [
    {
      id: "q1",
      text: "What is the value of x in 2x + 3 = 7?",
      options: ["2", "1", "3", "4"],
      answer: "2"
    },
    {
      id: "q2",
      text: "Simplify (x^2 + 2x + 1)",
      options: ["(x+1)^2", "x(x+1)+1", "x^2+3x+2", "(x-1)^2"],
      answer: "(x+1)^2"
    }
  ]
};

const mockProgress = {
  overall: 62,
  subjects: [
    { name: 'Math', mastery: 80, weak: 'Calculus' },
    { name: 'Physics', mastery: 50, weak: 'Optics' },
    { name: 'Chemistry', mastery: 55, weak: 'Organic' }
  ]
};

const mockChatHistory = [
  { sender: 'user', message: 'How do I solve quadratic equations?' },
  { sender: 'mentor', message: 'Use the quadratic formula: x = (-b ± √(b²-4ac))/2a.' }
];

// -------------- Exported Functions --------------

// Simulating getting mindmap for a subject
export function fetchMindMap(subject = "Math") {
  return delay(mockMindMap);
}

// Simulating getting a quiz for a topic
export function fetchQuizQuestions(topic = "Algebra") {
  return delay(mockQuiz);
}

// Simulating submitting quiz answers
export function submitQuizAnswer(questionId, answer) {
  // Fake wMock
  return delay({ questionId, correct: true, explanation: "Correct! Well done." });
}

// Getting progress tracker data
export function fetchProgress() {
  return delay(mockProgress);
}

// Simulating sending and receiving chat messages
export function sendChatMessage(message) {
  const history = [...mockChatHistory, { sender: "user", message }];
  history.push({ sender: "mentor", message: "Here's how you could approach that..." });
  return delay({ history });
}