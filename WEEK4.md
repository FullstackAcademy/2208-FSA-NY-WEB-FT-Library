# Week 4: Redux, React Router, Forms

[⬅ Go Back](README.md)


## Day 1: Redux

- Pre-Work:
  - [Redux: Core Concepts][redux-core-concepts]
  - [Redux: Three Principles][redux-three-principles]
  - [egghead.io: Getting Started with Redux][egghead-redux]
  - [gitconnected: An Unforgettable Way to Learn Redux - The Visual Guide][unforgettable-redux]

[redux-core-concepts]: https://redux.js.org/introduction/core-concepts
[redux-three-principles]: https://redux.js.org/introduction/three-principles
[egghead-redux]: https://egghead.io/lessons/react-redux-the-single-immutable-state-tree
[unforgettable-redux]: https://levelup.gitconnected.com/an-unforgettable-way-to-learn-redux-f36afd38c966

| Topic                       | Lecture                                        | Slides                   | Demo                         | Solution                 |
| --------------------------- | ---------------------------------------------- | ------------------------ | ---------------------------- | ------------------------ |
| Intro to Redux (Redux Bank) |       [📺][intro-redux-lec]                  | [🖼️][intro-redux-slides] | -                            |      |
| Pixelate-Redux              | | -                        | -                            | [👾][redux-bank-sol]  |
| React-Redux Intro           |                  | -                        |  | -                        |
| Morning Review              | -                                              | [🎟][am-rev-4-1-ticket]   | -                            |      |

[//]: # ' Paste in table above >> [📺][intro-redux-lec] '
[intro-redux-lec]: https://youtu.be/Wc6-UckY9WU
[//]: # ' Paste in table above >> [📺][pixelate-mid-checkin-lec] '
[pixelate-mid-checkin-lec]: https://youtu.be/bhRvPXe9J_E
[intro-redux-slides]: https://docs.google.com/presentation/d/1GRN3chkUUxoWm94DgPy_T6MtvDRhOGYMnA8Djdo3rmA/edit?usp=sharing
[//]: # ' Paste in table above >> [🧑‍💻][intro-redux-demo] '
[intro-redux-demo]: ###
[//]: # ' Paste in table above >> [👾][redux-bank-sol] '
[redux-bank-sol]: 01-junior-phase/day-15-redux/lab.redux-solution
[//]: # ' Paste in table above >> [📺][react-redux-intro-lec] '
[react-redux-intro-lec]: https://youtu.be/ZqrKNkLdSV4
[//]: # ' Paste in table above >> [🧑‍💻][react-redux-intro-demo] '
[react-redux-intro-demo]: 01-junior-phase/day-15-redux/react-redux
[//]: # ' Paste in table above >> [👾][pixelate-redux-sol] '
[pixelate-redux-sol]: https://github.com/FullstackAcademy/PairExercise-PixelateRedux-Solution-V2
[//]: # ' Paste in table above >> [📺][am-rev-4-1] '
[am-rev-4-1]: #paste-YouTube-link-here
[//]: # ' Paste in table above >> [🎟][am-rev-4-1-ticket] '
[am-rev-4-1-ticket]: https://forms.gle/ChQZu7DmgFiBjscQ8
[//]: # ' Paste in table above >> [🧑‍💻][am-rev-4-1-demo] '
[am-rev-4-1-demo]: #link-demo-here
[//]: # ' Paste in table above >> [👾][am-rev-4-1-sol] '
[am-rev-4-1-sol]: https://github.com/FullstackAcademy/2206-FSA-RM-WEB-FT/blob/main/01-junior-phase/exit-ticket-solutions/15-redux.md

- **You should be able to:**
  - Create a Redux store (with a proper reducer)
  - Write action types and creators corresponding to your store
  - Subscribe to store changes
  - Dispatch state-changing actions to the store

## Day 2: React-Redux, Thunks, `combineReducers`

- Pre-Work:
  - [React-redux "connect" explained][connect-explained]
  - [Thunks in Redux: The Basics][thunks-the-basics]

[connect-explained]: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
[thunks-the-basics]: https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60

| Topic                   | Lecture                   | Slides                 | Demo                       | Solution                  | Review |
| ----------------------- | ------------------------- | ---------------------- | -------------------------- | ------------------------- | ------ |
| React-Redux    |    [📺][connect-lec]    | [🖼️][thunks-slides]  | -                          |         | -      |
| Redux Groceries         |  | -                      | -                          | [👾][redux-groceries-sol] | -      |

[//]: # ' Paste in table above >> [📺][connect-lec] '
[connect-lec]: https://youtu.be/P3sHi0i5oaw
[connect-slides]: https://docs.google.com/presentation/d/16wYjdImk0qyF3PCZYb2hm8ynLaRfkeWx9i-SlLmpnLs/edit?usp=sharing
[//]: # ' Paste in table above >> [👾][connect-sol] '
[connect-sol]: https://github.com/FullstackAcademy/Lab.ReactReduxConnect/tree/solution
[redux-groceries-lec]: https://youtu.be/TdlV2Q_O3Z4
[//]: # ' Paste in table above >> [👾][redux-groceries-sol] '
[redux-groceries-sol]: https://github.com/joker-jonesy/goceries
[//]: # ' Paste in table above >> [📺][thunks-lec] '
[thunks-lec]: https://youtu.be/JHch3lqKikY
[thunks-slides]: https://docs.google.com/presentation/d/1fnISsDpLf-uG5vhGMwTzERSv0BHxg_fysz-dMsIhhWo/edit?usp=sharing
[//]: # ' Paste in table above >> [🧑‍💻][thunks-demo] '
[thunks-demo]: https://github.com/FullstackAcademy/2206-FSA-RM-WEB-FT/commit/6e22c1235d983a3b7eb9c67b20a5a1badce1b551
[//]: # ' Paste in table above >> [👾][thunks-sol] '
[thunks-sol]: https://github.com/FullstackAcademy/Lab.Thunk/tree/solution
[//]: # ' Paste in table above >> [📺][combinereducers-lec] '
[combinereducers-lec]: https://youtu.be/UW--9sO-mC0
[//]: # ' Paste in table above >> [🧑‍💻][combineReducers-demo] '
[combinereducers-demo]: https://github.com/FullstackAcademy/2206-FSA-RM-WEB-FT/tree/main/01-junior-phase/day-16-thunk-combineReducers/combine-reducers-demo
[//]: # ' Paste in table above >> [👾][combinereducers-sol] '
[combinereducers-sol]: https://github.com/FullstackAcademy/Lab.CombineReducers/tree/solution
[//]: # ' Paste in table above >> [📺][am-rev-4-2] '
[am-rev-4-2]: https://youtu.be/Q9lW04Und20
[//]: # ' Paste in table above >> [🎟][am-rev-4-2-ticket] '
[am-rev-4-2-ticket]: https://forms.gle/9DGrzkcfassVKxGQA
[//]: # ' Paste in table above >> [🧑‍💻][am-rev-4-2-demo] '
[am-rev-4-2-demo]: 01-junior-phase/day-17-react-router/Morning-Review.js
[//]: # ' Paste in table above >> [👾][am-rev-4-2-sol] '
[am-rev-4-2-sol]: #paste-gist-here

- **You should be able to:**
  - Create a Redux store (with a proper reducer and any necessary middleware)
  - Use thunks to perform AJAX requests with a React/Redux application
  - Use `combineReducers` to split your reducer function into separate functions, each managing independent slices of your store's state

**<details><summary>📎 Extra Resources:</summary>**

- [Redux Essentials, Part 5: Async Logic and Data Fetching](https://redux.js.org/tutorials/essentials/part-5-async-logic)
  - [Loading State for Requests](https://redux.js.org/tutorials/essentials/part-5-async-logic#loading-state-for-requests)
- [egghead.io's Redux: Displaying Loading Indicators](https://egghead.io/lessons/javascript-redux-displaying-loading-indicators) – Taught by Dan Abramov!

</details>

## Day 3: React Router, Readium

- Pre-Work:
  - [A Simple React Router v4 Tutorial][react-router-tutorial]
  - [React Router: Quick Start][react-router-quick-start]

[react-router-tutorial]: https://blog.pshrmn.com/simple-react-router-v4-tutorial/
[react-router-quick-start]: https://reacttraining.com/react-router/web/guides/quick-start

| Topic            | Lecture              | Slides                  | Demo              | Solution             | Review |
| ---------------- | -------------------- | ----------------------- | ----------------- | -------------------- | ------ |
| React Router 101 | [📺][router-101-lec] | [🖼️][router-101-slides] | -                 |                    | -      |
| React Router 201 |  | [🖼️][router-201-slides] |  |                     | -      |
| Readium          | [📺][readium-rev]                    | -                       | -                 | [👾][readium-sol]  | -      |
| Morning Review   |     | [🎟][am-rev-4-3-ticket]  | -                 |  |   [📺][am-rev-4-3] |

[//]: # ' Paste in table above >> [📺][router-101-lec] '
[router-101-lec]: https://youtu.be/qWv5_eSLgb0
[router-101-slides]: https://docs.google.com/presentation/d/1lfxgExnD_gjI97Dalwk_Gskefk49AFMm3YL4g-hsljc/edit?usp=sharing
[//]: # ' Paste in table above >> [📺][router-201-lec] '
[router-201-lec]: https://youtu.be/ecjxIliULco
[router-201-slides]: https://docs.google.com/presentation/d/18aYozkFFmBQ1BNQCznw2T6tkF8O9dONFPPtrRnxSf28/edit?usp=sharing
[//]: # ' Paste in table above >> [🧑‍💻][router-demo] '
[router-demo]: 01-junior-phase/day-17-react-router/React-Router-Demo
[//]: # ' Paste in table above >> [👾][readium-sol] '
[readium-sol]: https://github.com/joker-jonesy/readium-solution
[//]: # ' Paste in table above >> [📺][readium-rev] '
[readium-rev]: https://youtu.be/AtlvIhvd1q4
[//]: # ' Paste in table above >> [📺][am-rev-4-3] '
[am-rev-4-3]: https://youtu.be/_QX8MBf4Yd8
[//]: # ' Paste in table above >> [🎟][am-rev-4-3-ticket] '
[am-rev-4-3-ticket]: https://forms.gle/xLJqG3Hd6P93gNHp7
[//]: # ' Paste in table above >> [🧑‍💻][am-rev-4-3-demo] '
[am-rev-4-3-demo]: #link-demo-here
[//]: # ' Paste in table above >> [👾][am-rev-4-3-sol] '
[am-rev-4-3-sol]: https://github.com/FullstackAcademy/2206-FSA-RM-WEB-FT/blob/main/01-junior-phase/exit-ticket-solutions/17-react-router

- **You should be able to:**
  - Use the URL bar to manage state and control navigation within a SPA using the `react-router-dom` library
  - Set up `HashRouter`/`BrowserRouter` in a parents component to handle routing
  - Swap views using `Route` components
  - Navigate to specific routes using `Link` components

**<details><summary>📎 Extra Resources:</summary>**

- [MDN: id](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id)
- [MDN: Document fragment identifier](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web#Fragment)
- [MDN: History.back()](https://developer.mozilla.org/en-US/docs/Web/API/History/back)
- [MDN: History.forward()](https://developer.mozilla.org/en-US/docs/Web/API/History/forward)
- [MDN: Window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [React Router documentation](https://reacttraining.com/react-router/web/guides/quick-start)

</details>

## Day 4: React Forms

- Pre-Work:
  - [React: Forms][react-forms-docs]

[react-forms-docs]: https://reactjs.org/docs/forms.html

| Topic          | Lecture             | Slides                                        | Demo                  | Solution                                                                                                                              | Review                                         |
| -------------- | ------------------- | --------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| React Forms    | [📺][forms-101-lec] [📺][forms-201-lec] | [🖼️][forms-101-slides] [🖼️][forms-201-slides] |   [🧑‍💻][forms-demo]   |                                                                                                                       | -                                              |
| Todo List      | -                   | -                                             | -                     | https://github.com/joker-jonesy/todo-solution |  |
| Morning Review |    | [🎟][am-rev-4-4-ticket]                        | | -                                                                                                                                     | -                                              |

[forms-sol]: https://github.com/FullstackAcademy/Solution.ReactForms
[//]: # ' Paste in table above >> [📺][forms-101-lec] '
[forms-101-lec]: https://youtu.be/iVeotKqAwgU
[forms-101-slides]: https://docs.google.com/presentation/d/1pkRzpRAqq9ZtWx58WZLjhkJ0zS3lemaLZwKb1wCSfRU/edit?usp=sharing
[//]: # ' Paste in table above >> [📺][forms-201-lec] '
[forms-201-lec]: https://youtu.be/oLwh16plgIw
[forms-201-slides]: https://docs.google.com/presentation/d/11e9PBgkmjd0ng-jpOhxDEjfhG2OAvU5NbDkfb9GW85c/edit?usp=sharing
[//]: # ' Paste in table above >> [🧑‍💻][forms-demo] '
[forms-demo]: https://github.com/joker-jonesy/forms-react
[//]: # ' Paste in table above >> [👾][todo-list-sol] '
[todo-list-sol-1]: https://github.com/joker-jonesy/todo-solution
[todo-list-sol-2]: https://github.com/FullstackAcademy/PairExercise.TodoList.V2.Solution/tree/without-todo-in-state
[//]: # ' Paste in table above >> [📺][todo-list-rev] '
[todo-list-rev]: https://www.youtube.com/playlist?list=PLx0iOsdUOUmnS1eehO0qAX1uBqBP6G113
[//]: # ' Paste in table above >> [📺][am-rev-4-4] '
[am-rev-4-4]: https://youtu.be/LfzjfdmILvM
[//]: # ' Paste in table above >> [🎟][am-rev-4-4-ticket] '
[am-rev-4-4-ticket]: https://forms.gle/mAF1NLCBxbVMLzCUA
[//]: # ' Paste in table above >> [🧑‍💻][am-rev-4-4-demo] '
[am-rev-4-4-demo]: https://youtu.be/Sv40tkoD980
[//]: # ' Paste in table above >> [👾][am-rev-4-4-sol] '
[am-rev-4-4-sol]: #paste-gist-here

- **You should be able to:**
  - Explain the difference between a controlled and uncontrolled form
  - Build a form using React
  - Explain the difference between local state and application state

**<details><summary>📎 Extra Resources:</summary>**

- **React Forms**
  - [React-Champ: Part I: Controlled vs Uncontrolled Components][controlled-uncontrolled-1]
  - [React-Champ: Part II: When and how to use uncontrolled components][controlled-uncontrolled-2]
  - [Building forms using React - everything you need to know][codementor-react-forms]
- **MDN Documentation: HTML Forms**
  - [Your first form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
  - [`<form>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
  - [`<input>`: The Input (Form Input) element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
  - [`<button>`: The Button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
  - [HTMLFormElement: submit event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)

[controlled-uncontrolled-1]: https://medium.com/@adarshsingh1407/react-champ-part-i-controlled-vs-uncontrolled-components-9af452277d79
[controlled-uncontrolled-2]: https://medium.com/@adarshsingh1407/react-champ-part-ii-when-to-use-controlled-uncontrolled-components-870f42cf398
[codementor-react-forms]: https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

</details>

## Day 5: Course Review, Junior Phase Final Project (JPFP)

| Topic          | Lecture | Slides | Demo | Solution | Review |
| -------------- | ------- | ------ | ---- | -------- | ------ |
| Goodie Bag     | [📺][goodie-bag-lec]  | -      | -    | -        | -      |
| Intro to JPFP  | [📺][jpfp-lec]  | -      | -    | -        | -      |
| Morning Review | [📺][morn-rev]  | -      | -    | -        | -      |

[//]: # ' Paste in table above >> [📺][goodie-bag-lec] '
[goodie-bag-lec]: https://youtu.be/AtE6lVOHZo8
[//]: # ' Paste in table above >> [🔗][goodie-bag] >> ALREADY LINKED AT TOP IN SUPPLEMENTAL STUDY MATERIALS '
[goodie-bag]: 01-junior-phase/day-19-goodie-bag/GoodieBag
[//]: # ' Paste in table above >> [👾][goodie-bag-sol] '
[goodie-bag-sol]: https://github.com/FullstackAcademy/GoodieBag.Solution
[//]: # ' Paste in table above >> [📺][morn-rev] '
[morn-rev]: https://youtu.be/I9NJHJMd_P4
[//]: # ' Paste in table above >> [🔗][draw-the-stack] >> ALREADY LINKED AT TOP IN SUPPLEMENTAL STUDY MATERIALS '
[//]: # ' Paste in table above >> [👾][draw-the-stack-sol] '
[draw-the-stack-sol]: ###link-to-img-of-end-point
[//]: # ' Paste in table above >> [📺][jpfp-lec] '
[jpfp-lec]: https://youtu.be/Uq1u9_r-DXQ
[//]: # ' Paste in table above, already linked at top in Checkpoints section >> [🔗][jpfp] '

</details>

[Continue to 📆 Week 5](WEEK5.md)
