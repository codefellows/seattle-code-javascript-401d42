# Reading - Custom Hooks

Below you will find some reading material, code samples, and some additional resources that support today's topic and the upcoming lecture.

Review the Submission Instructions for guidance on completing and submitting this assignment.

## Review, Research, and Discussion

1. What does a component's lifecycle refer to?
1. Why do you sometimes need to "wrap" functions in `useCallback` when called from within `useEffect`
1. Why are functional components preferred over class components?
1. What is wrong with the following code?

   ```javascript
   import React, {useState, useEffect} from 'react';

   function MyComponent(props) {
     const [count, setCount] = useState(0);

     function changeCount(e) {
       setCount(e.target.value);
     }

     let renderedItems = []

     for (let i = 0; i < count; i++) {
       useEffect( () => {
         console.log('component mount/update');
       }, [count]);

       renderedItems.push(<div key={i}>Item</div>);
     }

     return (<div>
        <input type='number' value={count} onChange={changeCount}/>
         {renderedItems}
       </div>);
   }
   ```

### Document the following Vocabulary Terms

| Term                            |
| ------------------------------- |
| state hook                      |
| effect hook                     |
| reducer hook                    |

## Preview

Skim the following materials in preparation for the upcoming lecture. Note the following as you browse the material, and be prepared to participate in discussions during lecture

1. Which 3 things had you heard about previously and now have better clarity on?
1. Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
1. What are you most excited about trying to implement or see how it works?

### Preparation Materials

Authoring

- [custom hooks - all you need to know](https://www.telerik.com/blogs/everything-you-need-to-create-a-custom-react-hook){:target="_blank"}
- [async hooks](https://dev.to/vinodchauhan7/react-hooks-with-async-await-1n9g){:target="_blank"}
- [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer){:target="_blank"}
- [react custom hooks](https://reactjs.org/docs/hooks-custom.html){:target="_blank"}

Hooks Lists/Collections

- [use hooks](https://usehooks.com/){:target="_blank"}
- [hooks list](https://github.com/rehooks/awesome-react-hooks){:target="_blank"}
- [10 essential react hooks](https://blog.bitsrc.io/10-react-custom-hooks-you-should-have-in-your-toolbox-aa27d3f5564d){:target="_blank"}
