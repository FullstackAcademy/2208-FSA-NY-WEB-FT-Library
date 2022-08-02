# DOM Homework

Firstly, don't stress out that we will be using this homework to judge you in any way except to understand how we can better help you.

We ask that you don't help each other or cheat. Use online resources to help your problem solving, but don't copy/paste answers to each other if you find something similar online.

## Resources

The following resources are allowed:

- Any notes you've taken so far
- Any code you have in your previous projects
- learn.fullstackacademy.com
- All slide decks we've used in class

When in doubt, remember that this homework is meant for us to provide you with meaningful feedback as you learn. There is no value in the "correct" solution, only in how you were able to come up with that solution.

## Introduction Video (Watch This First)

[![DOM Checkpoint: Getting Started](https://img.youtube.com/vi/r2H-0pzd7_0/0.jpg)](https://youtu.be/r2H-0pzd7_0)

## Introduction

In a single evening in August 2013, French web developer Julien "Orteil" Thiennot coded a simple browser-based game called "[Cookie Clicker](https://orteil.dashnet.org/cookieclicker/)", hoping to direct some traffic to his personal website while also having some fun. Overnight, the game attracted some 50,000 players, within several months garnering 1.5 million page views per day. What began as a one-night project--and something of a joke--is now considered to be a founding entry in the genre of ["idle" or "incremental" games](https://en.wikipedia.org/wiki/Incremental_game), which account for a not-insignificant percentage of the ~$550 million in revenue generated annually by casual, mobile video games.

By the end of your first week at Fullstack, you'll have almost all of the skills necessary to build Cookie Clicker; this homework assignment uses test-driven learning to walk you through the process of building a clone of Orteil's JavaScript masterpiece. Once you've passed the tests, you'll have a working browser-based interactive game and perhaps be well on your way to programming your very own smash hit casual game.

In the typical incremental game, the player performs some repetitive action (e.g. clicking) to gain or "increment" a resource, like gold, points, or cookies. The accumulated resource can then be spent to purchase "buildings" or "producers," which increment the resource automatically, giving the player the experience of "automating" the repetitive action. As the player progresses, the game begins to "play itself." In other words, the player's attention turns away from repetitive clicking and toward making decisions about optimizing expenditure of resources to maximize returns, as new buildings and features are unlocked.

If this sounds about as fun as balancing a checkbook, that's totally fine – these games are not for everyone. But it's also easier to see in action than it is to explain. So take a few minutes to check out [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/). Just remember to come back and start the workshop afterward!

## Coffee Clicker

Our Cookie Clicker clone will be coffee-themed. The player will click a giant Coffee emoji, incrementing a counter showing the quantity of coffee they currently possess. Coffee can be spent to purchase coffee-producing devices, such as percolators and espresso machines. Every second, the player will passively accumulate coffee proportionate to the number and kind of coffee-producing devices they've purchased.

Importantly, the price (in coffee) of each producer will increase according to the number already in the player's possession. This is what enables the game to remain interesting even after coffee production has been automated: the player has to make decisions about which purchases make the best use of their coffee depending on the current price of each producer. Check out the demo below or try out Cookie Clicker if what we're talking about here isn't clear.

In addition to a coffee counter, the player will be able to see how many of each producer they possess, the current price of each producer, the CPS (coffee per second) of each producer, and the total CPS for all producers, combined. Finally, to make things more interesting, we won't show all of the producers at the start of the game. The producers will be unlocked successively as the player accumulates more coffee.

If this seems rather abstract, check out this [link to the finished product](https://fullstackacademy.github.io/Checkpoint.DOM.Source/).

## Starting Point

We've written the HTML and CSS for Coffee Clicker for you. You'll be working _only_ in the `scripts.js` file. We promise that all of the tests can be passed without editing anything but `script.js`!

But `script.js` isn't the only file in this project which contains JavaScript; the `data.js` file, written for you, contains a large object which will serve as the data for Coffee Clicker. It contains two keys: `coffee`, whose value is an integer representing how much coffee the player has accumulated, and `producers`, whose value is an array of objects. Each of these objects represents a coffee producer, and the keys and values describe the producer's properties.

While you won't need to edit the `data.js` file, you will need to programmatically access and modify the data it contains. You might be wondering: how is it possible to access variables defined in one JavaScript file in another, separate JavaScript file? Later in Junior Phase, we'll talk about different ways to do this, but, for now, we've set this up for you.

Near the bottom of the `index.html` file, you'll see two `<script>` tags; these make sure the browser loads up `data.js` and `script.js` in sequence. We set up the `data.js` file to save the data object on the browser's built-in `window` object. At the top of `script.js`, we grab the `data` key from the `window` object and make it available in `script.js`'s global scope as `data`.

> Note that it is possible to access variables defined elsewhere when their script tags are in the correct order _without_ having to use the `window` object. But, if you use a linter, it will complain. Thus, we have chosen to use `window`.

We've already declared the functions in `script.js` that are being tested, but they don't yet do anything; it will be up to you to fill them in. You'll also see that we've pre-written a function body or two for you.

## Mocha

During Foundations, we used a testing framework called Jasmine to define tests and another library called Testem to run those tests in the web browser. For most of Junior Phase, we'll no longer use these libraries. Instead, we'll use another popular testing framework called Mocha.

Mocha allows us to write and run tests, but instead of running tests in the browser, Mocha runs them on the command line. After you clone a repository with mocha tests, you'll first need to run `npm install` to get everything set up. Then, to start the tests, run `npm test`.

Mocha will _watch_ the files in your folder and restart the tests every time you save a change.

You'll see some console output that prints the name of each test, finally letting you know that none have passed and all are pending. Now open the test file. You'll notice that the `it()` blocks defining tests are all prefaced with an `x` – this is part of Mocha's syntax. Adding and removing the `x` lets you decide to set some tests as _pending_, meaning that while their names will be printed out to the console, they won't run.

But what if you only want to run or see one or two tests? It would be tedious to have to add and remove `x`s to the entire test suite. To help you accomplish this, Mocha lets you add `.only` after `it` and `describe` to isolate particular tests. That is, to run only the tests in a particular `describe` block, use: the syntax `describe.only()`. To isolate one or more `it` blocks, use `it.only()`. This is much like clicking a test to isolate it in Testem.

## Reading Mocha Output

Mocha output in the console is divided into three pieces.

First, the names of all of the active tests which are not pending will be printed out along with checkmarks, if they pass. If colorized output is enabled, the passing tests will be green, and the non-passing tests will be red.

Second, once all of the tests and their statuses have been printed out, you'll get a summary: e.g. "5 passing, 2 failing."

Finally, Mocha will print out the JavaScript error messages from the failing specs. Most often, these error messages will include a reference to the line number in the test file, indicating which assertion or expectation has failed.

Importantly, the output of any `console.log()` statements, whether written in the test files or your own code, will appear in the _first_ section, as this is when the code actually executes. Mocha remembers error messages and only prints them during the third, final, part of its output.

It can sometimes be useful to clear the console output periodically when running tests to allow you to more easily find the beginning of the current run. You can do this by clicking in the terminal window and using the shortcut, `cmd + k`.

## First Steps

This assignment is set up so that as you begin to pass the tests, you'll see more functionality appear in the web page you're working on. So you'll be going back and forth between code, tests, and the final product in the browser. If you're on a Mac, I recommend using "[Split View](https://support.apple.com/en-us/HT204948)" to avoid toggling between windows as you're developing.

The command `npm start` will start a simple web server and open up your page; you'll need to keep this server running if you want to be able to refresh the page as you work. It might help to keep multiple console windows or tabs open if you want to run the server and run the tests at the same time. If you're using iTerm, `cmd + t` will open a new terminal tab and `cmd + shift + d` will split the terminal window horizontally.

True unit tests look at blocks of code in isolation from each other. Many of the tests we've written here are not true unit tests; the code they test will sometimes need to invoke other code, tested elsewhere. That is, we're going to ask some of your functions to call others, sometimes for their return values, sometimes for their effects on the DOM, and sometimes for their effects on the data.

This means that you won't be able to pass some of the later tests until you pass earlier ones. If you get stuck, ask Fellows or Instructors for help. And, remember that it's okay for some functions you write to invoke other functions you've written.

## Extra Credit

Without breaking any of the tests, can you find a way to implement one or more of the following features?

- Periodically save the game state using `window.localStorage` so that the player doesn't have to start over every time they refresh the page; load the game state from `window.localStorage` when the page loads. ([The MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) might be useful.)
- Edit `style.css` to change the application's color scheme to something more appropriate to a coffee-themed game.
- Add in the ability to sell producers for a full (or partial?) refund of one's coffee.
- Add in a one-time unlock-able upgrade system like Cookie Clicker's. Note that this is a big, complex feature! Example upgrades:
  - buying a Coffee Grinder upgrade might double the CPS of all percolators;
  - buying extra cursors would increase the coffee one gets from clicks;
  - buying a Caffeinated Cursor upgrade might make the coffee one gets from clicks in some way proportionate to total CPS.
- Do you think progress in the game is too fast? Maybe too slow? Try modifying the data to see if you can balance the game to your liking. You might also modify the formula that increases the prices when producers are purchased.
- Figure out how to deploy your completed application to the public internet using Github Pages. Google is your friend, here, but [here's a start](https://www.ostraining.com/blog/coding/github-pages/).
