# Class 32: Context Behaviors and Custom Hooks

## Lightening Talk: Tim - Vue JS

* Progressive Framework
  * Can be plugged into just parts of a project or your whole project.
  * Focuses on view layer of project.
  * Core library (focus on core problem domain)
    * lets other libraries do other things
  * Companion libraries / plugins are kept up to date with the core library.
  * 
* Questions:

## Code Review

* Lots of New things:
  * BluePrint: importing styles, sometimes the docs are not the clearest.
    1. Install your dependencies `npm install @blueprintjs/core`
    2. Add styles to your index.html

```html
<head>
 <!-- Style dependencies -->
  <link href="https://unpkg.com/normalize.css@^7.0.0" rel="stylesheet" />
  <!-- Blueprint stylesheets -->
  <link href="https://unpkg.com/@blueprintjs/icons@^3.4.0/lib/css/blueprint-icons.css" rel="stylesheet" />
<link href="https://unpkg.com/@blueprintjs/core@^3.10.0/lib/css/blueprint.css" rel="stylesheet" />
</head>
```

   1. Add Blueprintjs components to your Views / Components.

  * Pagination features
    * Store vales for pagaination in our Context Provider.
      * Global state component.
      * Global state `object` for value instantiation.

## Context Behaviors & Custom Hooks

Up until we are only reading from `Context` not updating.
  * The power to update global is a lot, an update may have large unknown effects accross our application.
  * We want to give very specific controls to our child component (as a provider)

```javascript

function SettingsProvider(props) {

  const [itemNumber, setItemNumber] = useState(3);

  const handleItemNumber = (arg) => {
    if (typeof arg !=== 'number') {
      console.error('Argument for setItemNumber must be a number');
    } else {
      setItemNumber(arg);
    }
  }

  return (
    <SettingsContext.Provider value={{itemNumber, handleItemNumber}}>
      {props.children}
    </SettingsContext.Provider>
  )
}

```

## Custom Hooks

* This is a function that doens't return any JSX, it's just business logic.
  * If you find yourself doing specific things a lot, turn it into a hook and use it whenever that functionality needs to be resued.
  * custom hooks return values that are calculated by the hook logic (getters).
  * Plus any function that we want the component to call to change that value also gets returned (setter).

```javascript


function Form() {


  function handleSubmit(e) {
    e.preventDefault();
    callAPI();
  }

  function callAPI() {
    axios.get('http://locahost:3000').then(
      res => setResponse(res.data);
    );
  }

  return(
    <form onSubmit={handleSubmit}>

    </form>
  )
}


// After we add a custom hook

 const [data, callAPI] = useAPI(url, method);

 return(
    <form onSubmit={handleSubmit}>

    </form>
  )

```
