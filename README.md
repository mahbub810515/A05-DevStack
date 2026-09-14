- Name of your project:
#  A05-DevStack
- A little description about app:
#  A DevStack (LMS) App is a modern, Front-End React educational web application designed to manage courses, instructors, and student learning paths.
- Technology that use:
# React + TypeScript +Tailwind + Vite
- 3 features about my project:
# nav,benner,technologies etc.

- Also answer these React questions at the end of Readme:
  1. What is JSX, and why is it used in React?
  # Ans:jsx is jascScript xml, which contain html tag in javaScript function.
  2. What is the difference between props and state?
  # Ans:props used for transfer data one component to another and state is used
    for store and update data.
  3. What does the `useState` hook do, and where did you use it in this project?
  # Ans: `useState` is a react hook that used for store and update data. In this project useState used for store and update addTechnologyStack.
  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
  # Ans:`useEffect` is a react hook that used for load api data and control any sideEffect for fetching data.
  5. Why does every item in a `.map()` list need a unique `key` prop?
  # Ans: because of, react dom want to separate or identify every item uniquely.
  6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  # Ans: when I want to show data based on condition, that case we can use conditional rendering. Example:- {isItemAdded ? “Added” : ”Add To Stack”}
  7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  # Ans: using props we can send data from parent to child and it’s called props drilling. If we want to send data back to parent, we can use callback function pass down as a props. Because react follow the one-way data binding.


A DevStack (LMS) App is a modern, Front-End React educational web application designed to manage courses, instructors, and student learning paths. 