# Signal Check

A small, responsive React learning activity about recognizing common security signals. in this Learners will work through seven short scenarios, choose the safest response, receive immediate feedback, build a correct-answer streak, and see a detailed answer review at the end.

## Install and run

You will need a recent version of Node.js (Node 20 or newer is recommended).

```bash
npm install
npm run dev
```

Open the local address printed by Vite in your browser.

Other useful commands:

```bash
npm test        # Run the interaction tests once
npm run build   # Create a production build in dist/
npm run preview # Preview the production build locally
```

## Structure and state choices

- `src/data/questions.js` contains all question, option, feedback, and scenario content. Keeping content independent from presentation makes it easy to edit or load from an API later.
- `src/hooks/useQuiz.js` owns the activity state and actions: current question, selected answer, submission status, score, streak, recorded responses, completion, and restart. Components receive only the data and callbacks they need.
- Components are split by responsibility: progress, scenario preview, answer list, feedback, and completion. `App` coordinates the learning flow without holding the implementation details of each view.
- Native `fieldset`, `legend`, and radio inputs provide keyboard behavior and clear semantics. Answers are disabled after submission, focus moves to new feedback, and the next question receives focus when it loads.
- The interface uses plain CSS with responsive layouts, visible focus states, generous touch targets, and reduced-motion support. No component library is required.

## With more time

I would add persistence so a learner can resume, shuffle or draw questions from a larger bank, and provide a review screen showing missed questions. For a production learning platform, I would also add analytics/xAPI events, content localization, automated accessibility checks, and broader browser/device testing.

