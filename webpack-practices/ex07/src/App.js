import content from './hello.txt';
{ text: "Hello World"}

const App = function(){
    const app = document.createElement('h1');  
    app.textContent = content.text;
    return app;
    
}

export { App };