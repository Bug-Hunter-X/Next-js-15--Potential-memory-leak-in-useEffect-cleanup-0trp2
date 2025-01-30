# Next.js 15 - Potential Memory Leak in useEffect Cleanup

This repository demonstrates a potential memory leak in a Next.js 15 application.  A simple counter component uses `useEffect` to update the count every second.  The issue arises if the component unmounts before the `clearInterval` function executes within the cleanup function of the useEffect hook. This will lead to a memory leak since the `setInterval` continues to run even after the component is unmounted from the DOM, consuming memory unnecessarily. 

## How to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the counter incrementing every second. 
5. Navigate to another route, then navigate back to this route. Observe the interval id and behaviour. 

## Solution

The provided solution ensures that the `setInterval` is always cleared before the component unmounts, preventing memory leaks.  

## Note

This is a simplified example to illustrate the issue. More complex scenarios may involve different cleanup mechanisms, such as closing WebSockets or canceling fetch requests.  Always ensure proper cleanup in `useEffect` to prevent memory leaks in your React applications.
