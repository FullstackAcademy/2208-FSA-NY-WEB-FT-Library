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

| Topic                            | Lecture | Slides                  | Demo | Solution | Review |
| -------------------------------- | ------- | ----------------------- | ---- | -------- | ------ |
| Intro to Redux (Redux Bank)      | -       | [🖼️][intro-redux-slides] | -    | -        | -      |
| Action Types and Action Creators | -       | -                       | -    | -        | -      |
| Pixelate-Redux                   | -       | -                       | -    | -        | -      |
| Morning Review                   | -       | -                       | -    | -        | -      |

[//]: # " Paste in table above >> [📺][intro-redux-lec] "
[intro-redux-lec]: #paste-YouTube-link-here
[intro-redux-slides]: https://docs.google.com/presentation/d/1GRN3chkUUxoWm94DgPy_T6MtvDRhOGYMnA8Djdo3rmA/edit?usp=sharing
[//]: # " Paste in table above >> [🧑‍💻][intro-redux-demo] "
[intro-redux-demo]: ###
[//]: # " Paste in table above >> [👾][redux-bank-sol] "
[redux-bank-sol]: ###
[//]: # " Paste in table above >> [📺][action-types-creators-lec] "
[action-types-creators-lec]: #paste-YouTube-link-here
[//]: # " Paste in table above >> [🧑‍💻][action-types-creators-demo] "
[action-types-creators-demo]: ###
[//]: # " Paste in table above >> [👾][pixelate-redux-sol] "
[pixelate-redux-sol]: ###
[//]: # " Paste in table above >> [📺][am-rev-4-1] "
[am-rev-4-1]: #paste-YouTube-link-here
[//]: # " Paste in table above >> [🎟][am-rev-4-1-ticket] "
[am-rev-4-1-ticket]: #paste-google-form-link-here
[//]: # " Paste in table above >> [🧑‍💻][am-rev-4-1-demo] "
[am-rev-4-1-demo]: #link-demo-here
[//]: # " Paste in table above >> [👾][am-rev-4-1-sol] "
[am-rev-4-1-sol]: #paste-gist-here

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

| Topic                   | Lecture | Slides              | Demo | Solution | Review |
| ----------------------- | ------- | ------------------- | ---- | -------- | ------ |
| React-Redux `connect`   | -       | [🖼️][connect-slides] | -    | -        | -      |
| Redux Groceries         | -       | -                   | -    | -        | -      |
| Redux Thunks            | -       | [🖼️][thunks-slides]  | -    | -        | -      |
| Redux `combineReducers` | -       | -                   | -    | -        | -      |
| Morning Review          | -       | -                   | -    | -        | -      |

[//]: # " Paste in table above >> [📺][connect-lec] "
[connect-lec]: #paste-YouTube-link-here
[connect-slides]: https://docs.google.com/presentation/d/16wYjdImk0qyF3PCZYb2hm8ynLaRfkeWx9i-SlLmpnLs/edit?usp=sharing
[//]: # " Paste in table above >> [👾][connect-sol] "
[connect-sol]: ###
[//]: # " Paste in table above >> [👾][redux-groceries-sol] "
[redux-groceries-sol]: ###
[//]: # " Paste in table above >> [📺][thunks-lec] "
[thunks-lec]: #paste-YouTube-link-here
[thunks-slides]: https://docs.google.com/presentation/d/1fnISsDpLf-uG5vhGMwTzERSv0BHxg_fysz-dMsIhhWo/edit?usp=sharing
[//]: # " Paste in table above >> [🧑‍💻][thunks-demo] "
[thunks-demo]: ###
[//]: # " Paste in table above >> [👾][thunks-sol] "
[thunks-sol]: ###
[//]: # " Paste in table above >> [📺][combinereducers-lec] "
[combinereducers-lec]: #paste-YouTube-link-here
[//]: # " Paste in table above >> [🧑‍💻][combineReducers-demo] "
[combinereducers-demo]: ###
[//]: # " Paste in table above >> [👾][combinereducers-sol] "
[combinereducers-sol]: ###
[//]: # " Paste in table above >> [📺][am-rev-4-2] "
[am-rev-4-2]: #paste-YouTube-link-here
[//]: # " Paste in table above >> [🎟][am-rev-4-2-ticket] "
[am-rev-4-2-ticket]: #paste-google-form-link-here
[//]: # " Paste in table above >> [🧑‍💻][am-rev-4-2-demo] "
[am-rev-4-2-demo]: #link-demo-here
[//]: # " Paste in table above >> [👾][am-rev-4-2-sol] "
[am-rev-4-2-sol]: #paste-gist-here

- **You should be able to:**
  - `connect` a React component to the Redux store, mapping necessary state/dispatch to props
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

| Topic            | Lecture | Slides                 | Demo | Solution | Review |
| ---------------- | ------- | ---------------------- | ---- | -------- | ------ |
| React Router 101 | -       | [🖼️][router-101-slides] | -    | -        | -      |
| React Router 201 | -       | [🖼️][router-201-slides] | -    | -        | -      |
| Readium          | -       | -                      | -    | -        | -      |
| Morning Review   | -       | -                      | -    | -        | -      |

[//]: # " Paste in table above >> [📺][router-101-lec] "
[router-101-lec]: #paste-YouTube-link-here
[router-101-slides]: https://docs.google.com/presentation/d/1lfxgExnD_gjI97Dalwk_Gskefk49AFMm3YL4g-hsljc/edit?usp=sharing
[//]: # " Paste in table above >> [📺][router-201-lec] "
[router-201-lec]: #paste-YouTube-link-here
[router-201-slides]: https://docs.google.com/presentation/d/18aYozkFFmBQ1BNQCznw2T6tkF8O9dONFPPtrRnxSf28/edit?usp=sharing
[//]: # " Paste in table above >> [🧑‍💻][router-demo] "
[router-demo]: ###
[//]: # " Paste in table above >> [👾][readium-sol] "
[readium-sol]: ###
[//]: # " Paste in table above >> [📺][readium-rev] "
[readium-rev]: ###
[//]: # " Paste in table above >> [📺][am-rev-4-3] "
[am-rev-4-3]: #paste-YouTube-link-here
[//]: # " Paste in table above >> [🎟][am-rev-4-3-ticket] "
[am-rev-4-3-ticket]: #paste-google-form-link-here
[//]: # " Paste in table above >> [🧑‍💻][am-rev-4-3-demo] "
[am-rev-4-3-demo]: #link-demo-here
[//]: # " Paste in table above >> [👾][am-rev-4-3-sol] "
[am-rev-4-3-sol]: #paste-gist-here

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

| Topic           | Lecture | Slides                | Demo | Solution | Review |
| --------------- | ------- | --------------------- | ---- | -------- | ------ |
| React Forms 101 | -       | [🖼️][forms-101-slides] | -    | -        | -      |
| React Forms 201 | -       | [🖼️][forms-201-slides] | -    | -        | -      |
| Todo List       | -       | -                     | -    | -        | -      |
| Morning Review  | -       | -                     | -    | -        | -      |

[//]: # " Paste in table above >> [📺][forms-101-lec] "
[forms-101-lec]: #paste-YouTube-link-here
[forms-101-slides]: https://docs.google.com/presentation/d/1pkRzpRAqq9ZtWx58WZLjhkJ0zS3lemaLZwKb1wCSfRU/edit?usp=sharing
[//]: # " Paste in table above >> [📺][forms-201-lec] "
[forms-201-lec]: #paste-YouTube-link-here
[forms-201-slides]: https://docs.google.com/presentation/d/11e9PBgkmjd0ng-jpOhxDEjfhG2OAvU5NbDkfb9GW85c/edit?usp=sharing
[//]: # " Paste in table above >> [🧑‍💻][forms-demo] "
[forms-demo]: #link-demo-here
[//]: # " Paste in table above >> [👾][todo-list-sol] "
[todo-list-sol]: ###
[//]: # " Paste in table above >> [📺][todo-list-rev] "
[todo-list-rev]: ###
[//]: # " Paste in table above >> [📺][am-rev-4-4] "
[am-rev-4-4]: #paste-YouTube-link-here
[//]: # " Paste in table above >> [🎟][am-rev-4-4-ticket] "
[am-rev-4-4-ticket]: #paste-google-form-link-here
[//]: # " Paste in table above >> [🧑‍💻][am-rev-4-4-demo] "
[am-rev-4-4-demo]: #link-demo-here
[//]: # " Paste in table above >> [👾][am-rev-4-4-sol] "
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

## Day 5: Sockets

- Pre-Work:
  - [Pusher: What are WebSockets?][pusher-sockets]
  - [treehouse: An Introduction to WebSockets][treehouse-sockets]

[pusher-sockets]: https://pusher.com/websockets
[treehouse-sockets]: https://blog.teamtreehouse.com/an-introduction-to-websockets

| Topic                       | Lecture | Slides              | Demo | Solution | Review |
| --------------------------- | ------- | ------------------- | ---- | -------- | ------ |
| TCP, WebSockets & Socket.IO | -       | [🖼️][sockets-slides] | -    | -        | -      |
| StackChat                   | -       | -                   | -    | -        | -      |

[//]: # " Paste in table above >> [📺][sockets-lec] "
[sockets-lec]: #paste-YouTube-link-here
[sockets-slides]: https://docs.google.com/presentation/d/1-IVJ6SVkx6Ds2pSJogB44bEZp1Z8OTtrMFiaQD7er_w/edit?usp=sharing
[//]: # " Paste in table above >> [🧑‍💻][sockets-demo] "
[sockets-demo]: ###
[//]: # " Paste in table above >> [👾][sockets-sol] "
[sockets-sol]: ###
[//]: # " Paste in table above >> [👾][stackchat-sol] "
[stackchat-sol]: ###
[//]: # " Paste in table above >> [📺][stackchat-rev] "
[stackchat-rev]: ###
[//]: # " No Exit Ticket or Morning Review for Sockets "

- **You should be able to:**
  - Define the networking layers IP, TCP, and HTTP
  - Describe how TCP establishes a connection with a server
  - Define websockets and event emitters
  - Implement websockets using socket.io

**<details><summary>📎 Extra Resources:</summary>**

- [Socket.IO cheatsheet](https://socket.io/docs/emit-cheatsheet/)
- [Socket.IO documentation](https://socket.io/docs/)

</details>

[Continue to 📆 Week 5](WEEK5.md)
