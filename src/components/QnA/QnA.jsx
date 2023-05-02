import React from 'react';
import './QnA.css'

const QnA = () => {
    return (
        <div className='faq-container'>
            <h1>FAQ</h1>
            <ul className='faq-list'>
                <li>
                    <div>
                        <h2>Props vs state</h2>
                        <p>In the context of web development, "props" and "state" are terms that refer to two different ways of managing and passing data between components in a React application.</p>
                        <h3>Props:</h3>
                        <ol>
                            <li>"Props" (short for "properties") are pieces of data that are passed from a parent component to a child component.</li>
                            <li>Props are read-only and cannot be modified by the child component.</li>
                            <li>Props are often used to customize or configure a child component's behavior or appearance based on the needs of the parent component.</li>
                        </ol>

                        <h3>State:</h3>
                        <ol>
                            <li>"State," on the other hand, is a way of managing data within a component itself.</li>
                            <li>It is used to store information that can change over time, such as user input or the results of an API call. </li>
                            <li>Unlike props, state can be modified by the component that owns it.</li>
                            <li>When the state changes, React re-renders the component to reflect the updated state.</li>
                        </ol>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>How does useState work?</h2>
                        <p>useState() is a React hook that allows functional components to have state. It works by returning an array with two values.</p>
                        <ol>
                            <li>The first value is the current state value.</li>
                            <li>The second value is a function that you can use to update the state value.</li>
                            <li>By clicking any changeable fuction or fetching, the current state value will changed gradually.</li>
                            
                        </ol>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>Purpose of useEffect() other than fetching data.</h2>
                        <p>While useEffect() is commonly used for fetching data from APIs, it has many other use cases beyond that. Here are a few examples:</p>
                        <ol>
                            <li>Managing document title: You can use useEffect to set the document title based on the current state of your component.</li>
                            <li>Managing side effects: useEffect can be used to perform side effects that are not directly related to fetching data.</li>
                            <li>Cleaning up after your component: useEffect can also be used to perform cleanup operations when your component unmounts.</li>
                        </ol>
                        <p>Overall, useEffect is a powerful tool that can be used for many different purposes beyond just fetching data.</p>
                    </div>
                </li>
                <li>
                    <div>
                        <h2>How Does React work?</h2>
                        <p>React is a popular JavaScript library used for building user interfaces (UIs). At its core, React works by using a virtual representation of the UI, known as the Virtual DOM. Here's a high-level overview of how React works:</p>
                        <ol>
                            <li><h3 style={{marginBottom: '10px'}}>State and Props:</h3> React components can have state, which is data that can change over time, and props, which are passed down from parent components and are read-only.</li>
                            <li><h3 style={{marginBottom: '10px'}}>Rendering:</h3> When a React component's state or props change, React will re-render the component and update the Virtual DOM tree.</li>
                            <li><h3 style={{marginBottom: '10px'}}>Virtual DOM:</h3> The Virtual DOM is a lightweight copy of the actual DOM that React keeps in memory. When a component's state or props change, React updates the Virtual DOM tree to reflect the new changes.</li>
                            <li><h3 style={{marginBottom: '10px'}}>Diffing and Reconciliation:</h3> React then uses a process called "diffing" to compare the new Virtual DOM tree to the previous one and determine which parts of the actual DOM need to be updated. When got it, then react efficiently update only the part which is changed</li>
                            <li><h3 style={{marginBottom: '10px'}}>Event Handling:</h3> React provides a way to handle events, such as user interactions like button clicks, by attaching event listeners to components. When an event is triggered, React updates the component's state and re-renders the UI.</li>
                            <li><h3 style={{marginBottom: '10px'}}>Components and Composition:</h3> React is built around the concept of components, which are reusable pieces of code that encapsulate UI and behavior. Components can be composed together to build complex UIs.</li>
                        </ol>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default QnA;