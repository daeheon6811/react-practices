## ex04: 애플리케이션 번들링(bundling)

1. webpack은 작게 분리된 많은 모듈들의 의존성을 분석하여 하나의 js파일로 묶은 도구

2. 하나의 js 파일을 번들(bundle)이라 하고 묶는 작업을 번들링 (bundling) 이라고 한다.

3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업만을 의미 하는 것이 아니다

4. 

5. 프로젝트 생성
    ```bash
    $ mkdie ex03
    $ cd ex02
    $ npm init -y
    $ npm i -D express
    ```
6.  프로젝트 디렉토리
    <pre>
      /ex02
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- index.html
        |       |--- index.js
        |       |--- App.js
        |--- dev-server   
    <pre>
7. scripts
```json
{
  "name": "ex01",
  "version": "1.0.0",
  "description": "",
  "type": "module",
  "main": "dev-server.js",
  "scripts": {
    "start": "node dev-server",  
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "express": "^4.17.1"
  }
}
```

4.  애플리케이션 작성
    [index.js]
    ```javascript
    document
        .getElementById('root')
        .appendChild(App());
    ```
    [App.js]
    ```javascript
    const App = function(){
        const app = document.createElement('h1');
        app.textContent = 'Hello World';
        return app;
    }

    ```

5. 테스트(테스트 서버 실행)
```bash
$ npm start
```

6. 결론
    - 프론트엔드 애플리케이션 수십에서 수백 개의 모듈로 분리된 경우 ,
    브라우저에서 개별적으로 이 모듈들을 import하는 것은 상당히 
    비효율적이다.
    - 프론트앤드 애플리케이션 자바스크립트 외에 다양한 에셋(css , images font) 에
      대한 로딩 동기화도 고려 되야 한다. 

