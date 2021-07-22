import './assets/scss/App.scss';

const App = function(){
    const app = document.createElement('h1');
    app.className =  "Header";    
    app.textContent = 'Hello world2';
    return app;
}

export { App };