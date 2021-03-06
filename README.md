<div>
  <h1 align="center"><a href="https://epicreact.dev">🔥 Advanced React Hooks 🚀 EpicReact.Dev</a></h1>
  <strong>
    Learn the more advanced React hooks and different patterns to enable great
    developer APIs for custom hooks.
  </strong>
  <p>
    We’ll look at some of the more advanced hooks and ways they can be used to
    optimize your components and custom hooks. We’ll also look at several
    patterns you can follow to make custom hooks that provide great APIs for
    developers to be productive building applications.
  </p>

  <a href="https://epicreact.dev">
    <img
      alt="Learn React from Start to Finish"
      src="https://kentcdodds.com/images/epicreact-promo/er-1.gif"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![All Contributors][all-contributors-badge]](#contributors)
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- You should be experienced with `useState`, `useEffect`, and `useRef`.

## Additional Resources

- Videos
  [Getting Closure on React Hooks by Shaen Wang](https://www.youtube.com/watch?v=KJP1E-Y-xyo)
  (26 minutes)

## System Requirements

- [git][git] v2.13 or greater
- [NodeJS][node] `^10.13 || 12 || 14 || 15`
- [npm][npm] v6 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

> If you want to commit and push your work as you go, you'll want to
> [fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo)
> first and then clone your fork rather than this repo directly.

After you've made sure to have the correct things (and versions) installed, you
should be able to just run a few commands to get set up:

```
git clone https://github.com/kentcdodds/advanced-react-hooks.git
cd advanced-react-hooks
node setup
```

This may take a few minutes. **It will ask you for your email.** This is
optional and just automatically adds your email to the links in the project to
make filling out some forms easier.

If you get any errors, please read through them and see if you can find out what
the problem is. If you can't work it out on your own then please [file an
issue][issue] and provide _all_ the output from the commands you ran (even if
it's a lot).

If you can't get the setup script to work, then just make sure you have the
right versions of the requirements listed above, and run the following commands:

```
npm install
npm run validate
```

If you are still unable to fix issues and you know how to use Docker 🐳 you can
setup the project with the following command:

```
docker-compose up
```

It's recommended you run everything locally in the same environment you work in
every day, but if you're having issues getting things set up, you can also set
this up using [GitHub Codespaces](https://github.com/features/codespaces)
([video demo](https://www.youtube.com/watch?v=gCoVJm3hGk4)) or
[Codesandbox](https://codesandbox.io/s/github/kentcdodds/advanced-react-hooks).

## Running the app

To get the app up and running (and really see if it worked), run:

```shell
npm start
```

This should start up your browser. If you're familiar, this is a standard
[react-scripts](https://create-react-app.dev/) application.

You can also open
[the deployment of the app on Netlify](https://advanced-react-hooks.netlify.app/).

## Running the tests

```shell
npm test
```

This will start [Jest](https://jestjs.io/) in watch mode. Read the output and
play around with it. The tests are there to help you reach the final version,
however _sometimes_ you can accomplish the task and the tests still fail if you
implement things differently than I do in my solution, so don't look to them as
a complete authority.

### Exercises

- `src/exercise/00.md`: Background, Exercise Instructions, Extra Credit
- `src/exercise/00.js`: Exercise with Emoji helpers
- `src/__tests__/00.js`: Tests
- `src/final/00.js`: Final version
- `src/final/00.extra-0.js`: Final version of extra credit

The purpose of the exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask me as
_I_ walk through the material.

### Helpful Emoji 🐨 💪 🏁 💰 💯 🦉 📜 💣 👨‍💼 🚨

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala** 🐨 will tell you when there's something specific you should
  do
- **Matthew the Muscle** 💪 will indicate what you're working with an exercise
- **Chuck the Checkered Flag** 🏁 will indicate that you're working with a final
  version
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Hannah the Hundred** 💯 will give you extra challenges you can do if you
  finish the exercises early.
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes and a
  link for elaboration and feedback.
- **Dominic the Document** 📜 will give you links to useful documentation
- **Berry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing.

## Personal Notes

**useReducer** : When to use: when one element of your state relies on the value
of another element of your state in order to update

**useReducer vs useState**:

- When it's just an independent element of state you're managing: useState
- When one element of your state relies on the value of another element of your
  state in order to update: useReducer
- In general, its suggested to start with useState, and moving to useReducer
  when you notice elements of state need to change together.
- Simulating this.setState with reducer, supporting setState with both function
  and object

```js
const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' ? action(state) : action),
})

// ...

const increment = () =>
    setState(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}
```

- useReducer with TS
  (https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c):

```js
type Dispatch<A> = (value: A) => void
type Reducer<S, A> = (prevState: S, action: A) => S
type ReducerState<R extends Reducer<any, any>> = R extends Reducer<infer S, any>
  ? S
  : never
type ReducerAction<R extends Reducer<any, any>> = R extends Reducer<
  any,
  infer A
>
  ? A
  : never

function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I & ReducerState<R>,
  initializer: (arg: I & ReducerState<R>) => ReducerState<R>,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]

function useReducer<R extends Reducer<any, any>, I>(
  reducer: R,
  initializerArg: I,
  initializer: (arg: I) => ReducerState<R>,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]

function useReducer<R extends Reducer<any, any>>(
  reducer: R,
  initialState: ReducerState<R>,
  initializer?: undefined,
): [ReducerState<R>, Dispatch<ReducerAction<R>>]
```

- **Custom Hooks**: when creating custom hooks with high reuse, often we will
  have to handle async callbacks (i.e data fetching), below is some example of
  how to do it (so people who are using the hook will have to return a promise
  if they want the async thing to happen or just return nothing if they don't.
  We'll get that promise. If they return early from that async callback, or
  explicitly return null or undefined, then we'll exit early at that point)

```js
React.useEffect(() => {
  // 💰 this first early-exit bit is a little tricky, so let me give you a hint:
  const promise = asyncCallback()
  if (!promise) {
    return
  }
  promise.then(
    data => {
      dispatch({type: 'resolved', data})
    },
    error => {
      dispatch({type: 'rejected', error})
    },
  )
}, dependencies) //dependencies comes from props in this case
```

- it would be much easier if we could just put the function itself in the
  dependency list:

```js
const updateLocalStorage = () => window.localStorage.setItem('count', count)
React.useEffect(() => {
  updateLocalStorage()
}, [updateLocalStorage]) // <-- function as a dependency
```

- The problem with that though is because updateLocalStorage is defined inside
  the component function body, it’s re-initialized every render, which means
  it’s brand new every render, which means it changes every render, which means,
  you guessed it, our callback will be called every render! This is the problem
  useCallback solves. And here’s how you solve it:

```js
const updateLocalStorage = React.useCallback(
  () => window.localStorage.setItem('count', count),
  [count], // <-- yup! That's a dependency list!
)
React.useEffect(() => {
  updateLocalStorage()
}, [updateLocalStorage])
```

- The first argument to **useCallback** is the callback you want called, the
  second argument is an array of dependencies which is similar to useEffect.
  When one of the dependencies changes between renders, the callback you passed
  in the first argument will be the one returned from useCallback. If they do
  not change, then you’ll get the callback which was returned the previous time
  (so the callback remains the same between renders).

- Context = 🦉 Keep in mind that while context makes sharing state easy, it’s
  not the only solution to Prop Drilling pains and it’s not necessarily the best
  solution either. React’s composition model is powerful and can be used to
  avoid issues with prop drilling as well. Learn more about this from
  [Michael Jackson on Twitter](https://twitter.com/mjackson/status/1195495535483817984)

- It's a good practice to create a consumer hook, instead of using the
  useContext hook directly while gaining the ability to provide custom errors:

```js
const usePokemonCache = () => {
  const value = React.useContext(PokemonCacheContext)
  if (!value) {
    throw Error('usePokemonCache must be called within a PokemonCacheProvider')
  }
  return value
}
```

- **useLayoutEffect** runs before browser paint screen, opposite to it's
  simbling useEffect, Here’s the simple rule for when you should use
  useLayoutEffect: If you are making observable changes to the DOM (that will
  require the browser to paint what you've made), then it should happen in
  useLayoutEffect, otherwise useEffect.
- Also, when you need your effect to run before all others effect, check the
  diagram:
  ![](https://raw.githubusercontent.com/donavon/hook-flow/master/hook-flow.png)
- One other situation you might want to use useLayoutEffect instead of useEffect
  is if you're updating a value (like a ref) and you want to make sure it's
  up-to-date before any other code runs. For example:

```js
const ref = React.useRef()
React.useEffect(() => {
  ref.value = 'some value'
})
// then, later in another hook or something
React.useLayoutEffect(() => {
  console.log(ref.value) // <-- this logs an old value because this runs first!
})
```

- **useImperativeHandle** allows us to expose imperative methods to developers
  who pass a ref prop to our component which can be useful when you have
  something that needs to happen and is hard to deal with declaratively.

implementation would be if we are doing something like that:

```js
React.useLayoutEffect(() => {
  ref.current = {
    scrollToTop,
    scrollToBottom,
  }
}, [])
```

instead with useImperativeHandle we can do that:

```js
React.useImperativeHandle(ref, () => {
  return {
    scrollToTop,
    scrollToBottom,
  }
})
```

- **useDebugValue** - When you start writing custom hooks, it can be useful to
  give them a special label. This is especially useful to differentiate
  different usages of the same hook in a given component. (Note: only works on
  custom hooks)

```js
function useCount({initialCount = 0, step = 1} = {}) {
  React.useDebugValue({initialCount, step})
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return [count, increment]
}
```

Another example:

```js
React.useDebugValue(`\`${query}\` => ${state}`)
```

- useDebugValue also takes a second argument which is an optional formatter
  function, allowing you to do stuff like this if you like:

```js
const formatCountDebugValue = ({initialCount, step}) =>
  `init: ${initialCount}; step: ${step}`

function useCount({initialCount = 0, step = 1} = {}) {
  React.useDebugValue({initialCount, step}, formatCountDebugValue)
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return [count, increment]
}
```

- This is only really useful for situations where computing the debug value is
  computationally expensive (and therefore you only want it calculated when the
  DevTools are open and not when your users are using the app).

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://kentcdodds.com"><img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;" alt=""/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=kentcdodds" title="Code">💻</a> <a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=kentcdodds" title="Documentation">📖</a> <a href="#infra-kentcdodds" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=kentcdodds" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://frankcalise.com"><img src="https://avatars0.githubusercontent.com/u/374022?v=4" width="100px;" alt=""/><br /><sub><b>Frank Calise</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=frankcalise" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Zara603"><img src="https://avatars1.githubusercontent.com/u/4918423?v=4" width="100px;" alt=""/><br /><sub><b>Zara603</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=Zara603" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/michaelfriedman"><img src="https://avatars3.githubusercontent.com/u/17555926?v=4" width="100px;" alt=""/><br /><sub><b>Michael Friedman</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=michaelfriedman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://bitwise.cool"><img src="https://avatars1.githubusercontent.com/u/20847518?v=4" width="100px;" alt=""/><br /><sub><b>Brandon Newton</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=btnwtn" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=btnwtn" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JonathanBruce"><img src="https://avatars3.githubusercontent.com/u/1743411?v=4" width="100px;" alt=""/><br /><sub><b>Jonathan Bruce</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=JonathanBruce" title="Code">💻</a></td>
    <td align="center"><a href="http://team.thebrain.pro"><img src="https://avatars1.githubusercontent.com/u/4002543?v=4" width="100px;" alt=""/><br /><sub><b>Łukasz Gandecki</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=lgandecki" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://stackshare.io/jdorfman/decisions"><img src="https://avatars1.githubusercontent.com/u/398230?v=4" width="100px;" alt=""/><br /><sub><b>Justin Dorfman</b></sub></a><br /><a href="#fundingFinding-jdorfman" title="Funding Finding">🔍</a></td>
    <td align="center"><a href="http://motdde.com"><img src="https://avatars1.githubusercontent.com/u/12215060?v=4" width="100px;" alt=""/><br /><sub><b>Oluwaseun Oyebade</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=motdde" title="Documentation">📖</a></td>
    <td align="center"><a href="http://kevinostafinski.com"><img src="https://avatars0.githubusercontent.com/u/28754130?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Ostafinski</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=kevscript" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Snaptags"><img src="https://avatars1.githubusercontent.com/u/1249745?v=4" width="100px;" alt=""/><br /><sub><b>Markus Lasermann</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=Snaptags" title="Code">💻</a></td>
    <td align="center"><a href="https://zacjones.io"><img src="https://avatars2.githubusercontent.com/u/6188161?v=4" width="100px;" alt=""/><br /><sub><b>Zac Jones</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=zacjones93" title="Documentation">📖</a></td>
    <td align="center"><a href="https://ricardobusquet.com"><img src="https://avatars1.githubusercontent.com/u/7198302?v=4" width="100px;" alt=""/><br /><sub><b>Ricardo Busquet</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=rbusquet" title="Code">💻</a></td>
    <td align="center"><a href="https://kylereblora.github.io/"><img src="https://avatars2.githubusercontent.com/u/33372538?v=4" width="100px;" alt=""/><br /><sub><b>Kyle Matthew Reblora</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=kylereblora" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/marcosvega91"><img src="https://avatars2.githubusercontent.com/u/5365582?v=4" width="100px;" alt=""/><br /><sub><b>Marco Moretti</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=marcosvega91" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nywleswoey"><img src="https://avatars3.githubusercontent.com/u/28249994?v=4" width="100px;" alt=""/><br /><sub><b>Selwyn Yeow</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=nywleswoey" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/gugol2"><img src="https://avatars0.githubusercontent.com/u/4933016?v=4" width="100px;" alt=""/><br /><sub><b>Watchmaker</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=gugol2" title="Code">💻</a> <a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=gugol2" title="Documentation">📖</a></td>
    <td align="center"><a href="https://fonstack.dev/"><img src="https://avatars3.githubusercontent.com/u/35873992?v=4" width="100px;" alt=""/><br /><sub><b>Carlos Fontes</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/issues?q=author%3Afonstack" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/pritamsangani/"><img src="https://avatars3.githubusercontent.com/u/22857896?v=4" width="100px;" alt=""/><br /><sub><b>Pritam Sangani</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=PritamSangani" title="Code">💻</a></td>
    <td align="center"><a href="http://wbeuil.com"><img src="https://avatars1.githubusercontent.com/u/8110579?v=4" width="100px;" alt=""/><br /><sub><b>William BEUIL</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=wbeuil" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/emzoumpo"><img src="https://avatars2.githubusercontent.com/u/2103443?v=4" width="100px;" alt=""/><br /><sub><b>Emmanouil Zoumpoulakis</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=emzoumpo" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://peter.hozak.info/"><img src="https://avatars0.githubusercontent.com/u/1087670?v=4" width="100px;" alt=""/><br /><sub><b>Peter Hozák</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=Aprillion" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/joemaffei"><img src="https://avatars1.githubusercontent.com/u/9068746?v=4" width="100px;" alt=""/><br /><sub><b>Joe Maffei</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=joemaffei" title="Documentation">📖</a></td>
    <td align="center"><a href="https://magrippis.com"><img src="https://avatars0.githubusercontent.com/u/3502800?v=4" width="100px;" alt=""/><br /><sub><b>Johnny Magrippis</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=jmagrippis" title="Code">💻</a></td>
    <td align="center"><a href="http://blog.rphuber.com"><img src="https://avatars0.githubusercontent.com/u/8245890?v=4" width="100px;" alt=""/><br /><sub><b>Ryan Huber</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=rphuber" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=rphuber" title="Code">💻</a></td>
    <td align="center"><a href="https://dominicchapman.com"><img src="https://avatars2.githubusercontent.com/u/7607007?v=4" width="100px;" alt=""/><br /><sub><b>Dominic Chapman</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=dominicchapman" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/imalbert"><img src="https://avatars1.githubusercontent.com/u/12537973?v=4" width="100px;" alt=""/><br /><sub><b>imalbert</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=imalbert" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/Huuums"><img src="https://avatars1.githubusercontent.com/u/9745322?v=4" width="100px;" alt=""/><br /><sub><b>Dennis Collon</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=Huuums" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jrozbicki"><img src="https://avatars3.githubusercontent.com/u/35103924?v=4" width="100px;" alt=""/><br /><sub><b>Jakub Różbicki</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=jrozbicki" title="Documentation">📖</a></td>
    <td align="center"><a href="https://vk.com/vasilii_kovalev"><img src="https://avatars0.githubusercontent.com/u/10310491?v=4" width="100px;" alt=""/><br /><sub><b>Vasilii Kovalev</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/issues?q=author%3Avasilii-kovalev" title="Bug reports">🐛</a></td>
    <td align="center"><a href="http://alexfertel.netlify.app"><img src="https://avatars3.githubusercontent.com/u/22298999?v=4" width="100px;" alt=""/><br /><sub><b>Alexander Gonzalez</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=alexfertel" title="Code">💻</a></td>
    <td align="center"><a href="https://www.daleseo.com"><img src="https://avatars1.githubusercontent.com/u/5466341?v=4" width="100px;" alt=""/><br /><sub><b>Dale Seo</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=DaleSeo" title="Documentation">📖</a> <a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=DaleSeo" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://michaeldeboey.be"><img src="https://avatars3.githubusercontent.com/u/6643991?v=4" width="100px;" alt=""/><br /><sub><b>Michaël De Boey</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=MichaelDeBoey" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/thegoodsheppard"><img src="https://avatars1.githubusercontent.com/u/13774377?v=4" width="100px;" alt=""/><br /><sub><b>Greg Sheppard</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=thegoodsheppard" title="Documentation">📖</a></td>
    <td align="center"><a href="http://bobbywarner.com"><img src="https://avatars0.githubusercontent.com/u/554961?v=4" width="100px;" alt=""/><br /><sub><b>Bobby Warner</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=bobbywarner" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jwm0"><img src="https://avatars0.githubusercontent.com/u/28310983?v=4" width="100px;" alt=""/><br /><sub><b>Jakub Majorek</b></sub></a><br /><a href="https://github.com/kentcdodds/advanced-react-hooks/commits?author=jwm0" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## Workshop Feedback

Each exercise has an Elaboration and Feedback link. Please fill that out after
the exercise and instruction.

At the end of the workshop, please go to this URL to give overall feedback.
Thank you! https://kcd.im/arh-ws-feedback

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/workflow/status/kentcdodds/advanced-react-hooks/validate/main?logo=github&style=flat-square
[build]: https://github.com/kentcdodds/advanced-react-hooks/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/advanced-react-hooks/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/advanced-react-hooks/blob/main/CODE_OF_CONDUCT.md
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[all-contributors-badge]: https://img.shields.io/github/all-contributors/kentcdodds/advanced-react-hooks?color=orange&style=flat-square
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/advanced-react-hooks/issues/new
<!-- prettier-ignore-end -->
