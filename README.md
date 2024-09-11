# React02_DaeLim

## 202230233 정재승

## 2024-09-11 3주차
### SWC를 프로젝트에 적용하려면 

* #### 새로운 프로젝트에 적용하는 것은 다음 명령으로 프로젝트를 생성하면 바로 사용할 수 있다.
                $ npx create-next-app@latest
                or
                $ npx create-next-app@12
* #### Next 12 이전 벚2ㄴ의 프로젝트에 적용하려면 다음과 같이 업그레이드 해줘야 한다.
                $ npm install next@12
* #### 그리고 Babel을 설정했다면 설정 파일(.babelrc또는 babel.config.js)을 삭제해 준다.

### 2. 랜더링 전략 

* #### 렌더링 전략이란 웹 페이지 또는 웹 애플리케이션을 웹 브라우저에 제공하는 방법을 의미한다.
* #### 정적인 페이지 제작에는 Gatsby를 추천한다.
* #### 서버 사이드 렌더링 전략을 원한다면 다른 프레임워크를 검토해 보는 것이 좋다.

* #### 그런데 Next.js에서는 이 모든 방법을 완전히 새로운 수준으로 제공한다.

### Chapter2 에서는 다음과 같은 내용을 다룹니다.

* #### 서버 사이드 렌더링을 사용해서 각 요청별로 페이지를 동적으로 렌더링하는 방법
* #### 특정 컴포트를 클라이언트에서만 렌더링하는 다양한 방법

### 2.1 서버 사이드 렌더링(SSR)

* #### 생소할 수도 있지만 웹 페이지를 제공하는 가장 흔한 방법입니다.
* #### APM을 이용하는 일반적인 웹 페이지 생성이라고 보면 됩니다.
* #### 여기에 자바스크립트 코드가 적재되면 동적으로 페이지 내용을 렌더링 한다.
* #### Next.js도 이와 같이 동적으로 페이지를 렌더링 할 수 있다.
* #### 그리고 여기에 스크립트 코드를 집어 넣어서 나중에 웹 페이지를 동적으로 처리할 수도 있는데 이를 하이드레이션이라고 한다.

* #### 예를 들면 어떤 사람이 작성한 블로그 글을 한 페이지에 모아서 작성해야 한다면 SSR을 이용하는 것이 적당하다.
* #### 서버 사이드 렌더링 -> 자바스크립트가 하이드레이션된 페이지를 전송 -> 클라이언트에서 DOM 위에 각 스크립트 코드를 하이드레이션: 페이지 새로 고침 없이 사용자와 웹 페이지간 상호 작용을 가능하게 한다.

* #### 리액트 하이드레이션 덕분에 이 상태에서 웹 앱은 싱글 페이지 애플리케이션(SPA) 처럼 작동할 수 있다.
* #### CSR과 SSR의 장점을 모두 가지는 것이다.
* #### 특정 렌더링 전략만 사용한다고 가정하면 SSR이 CSR에 비해 여러 가지 장점이 있다.

### [SSR의 장점]
* #### 더 안전한 웹 애플리케이션 : 쿠키관리, 주요 API, 데이터 검증 등과 같은 작업을 서버에서 처리하기 때문에 중요한 데이터를 클라이언트에 노출할 필요가 없기 때문이다.
* #### 더 뛰어안 웹 사이트 호환성: 클라이언트 환경이 자바스크립트를 사용하지 못하거나 오래된 브라우저를 사용하더라도 서비스를 제공할 수 있다.
* #### 더 뛰어난 SEO: 서버가 렌더링한 HTML을 받기 때문에 봇이나 웹 크롤러가 페이지를 렌더링할 필요가 없기 때문이다.

### SSR이 최적의 렌더링 전략이 아닌 경우
* #### 크라이언트가 페이지를 요청할 때마다 페이지를 다시 렌더링할 수 있는 서버가 필요하다.
* #### 다른 방식에 비해 SSR이 더 많은 자원을 소모하고, 더 많은 부하를 보이며 유지 보수 비용도 증가 한다.
* #### 페이지에 대한 요청을 처리하는 시간이 길어진다.
* #### 페이지가 외부 API 또는 데이터 소스에 접근해야 한다면, 해당 페이지를 렌더링할 때마다 이를 다시 요청해야 한다.
* #### 페이지 간의 이동은 CSR에 비해 느리다. 

* #### 중요한 것은 NEXT.js가 기본적으로 빌드 시점에 정적으로 페이지를 만든다는 것이다.
* #### 페이지에서 외부 API를 호출하거나 데이터베이스에 접근하는 등 동적 작업을 해야 한다면 해당하는 함수를 페이지에 export해야 한다.

### 코드설명
* #### 이 페이지는 div 요소 안에 문자열만 표시한다.
* #### 외부 API를 호출 하지 않으면 항상 같은 문자열만 표시 된다.
                function IndexPage(){
                        return <div>This is the index page.</div>
                }

                export default IndexPage;
* #### 다음 코드는 페이지를 요청할 때마다 사용자 환영 문구를 표시한다.
* #### 특정 사용자 정보를 가져온 다음 클라이언트에 전달해서 사용할 수 있도록 하고 있다.
* #### 이 경우 미리 예약된 getServerSideProps() 함수를 사용한다.

                Export async function getServerSideProps(){
                        const userRequest = await fetch('https://example.com/api/user');
                        const userData = await userRequest.json();

                        return {
                                props: {
                                        user: userData,
                                },
                        };
                }

                function IndexPage(props){
                        return <div>Welcome, { props.user.name}!</div>;
                }
                export default IndexPage;

### Next.js 13 vs. 14

* ####  Pages Router -> App Router
* #### Data Fetching: 13까지는 getServerSideProps, getStaticProps 메소드를 이용해서 구현 했으나, 14에서는 SSG(정적 사이트 생성),SSR(서버측 렌더링) 및 ISR(증분적 정적 재생성)에서 하나의 API만을 사용해서 구현할 수 있게 되었다.

* ####  Tubopack: Rust 기반으로 개발된 새로운 번들러 사용으로 webpack보다 700배 빠르다고 발표했다.
* #### Turbopack은 3,000개의 모듈이 있는 애플리케이션에서 1.8초 만에 부팅되고, Webpack은 16.5ch, Vite는 11.4초가 걸린다.

* #### 페이지에 대한 요청이 들어오면 서버가 REST API를 호출해서 필요한 사용자 정보를 가져온다.
* ####  이 과정은 다음과 같은 세부 단계로 나눌 수 있다.
1. #### getServerSideProps라는 비동기 함수를 export 한다.
#### 빌드 과정에서 Next.js는 이 함수를 export하는 모든 페이지를 찾아서 서버가 페이지 요청을 처리할 때 getServerSideProps 함수를 호출하도록 만든다.
2. #### getServerSideProps 함수는 props라는 속성값을 갖는 객체를 반환한다.
#### 이 props는 컴포넌트로 전달되 서버와 클라이언트 모두가 props에 접근 할 수 있게 된다
#### getch API는 서버에서 실행되기 때문에 별도의 폴리필을 끼워 넣을 필요가 없다.
3. #### IndexPage 함수를 수정해서 props를 인자로 받는다.
#### 이 props는 getServerSide함수에서 반환한 props의 모든 내용을 갖고 있다.
#### # Next.js14 부터는 하나의 Api만 사용한다.

### 2.2클라이언트 사이드 렌더링(CSR)
* #### React 앱을 실행하면 렌더링 시작전에 빈 화면이 한동안 유지 되는 것이 보인다.
* #### 이는 서버에서 스크립트와 스타일만 포함된 HTML을 전송하기 때문이다.
* #### 실제 렌더링은 클라이언트에서 이루어 진다.
* #### CSR로 생성한 앱의 HTML을 보면 div 태그 하나 밖에 없다. 그래서 빈화면만 보였던 것이다.
* #### 빌드 과정에서 js와 css파이을 HTML페이지에 불러오도록 만들고 root div에 렌더링 한다.

                <body>
                        <noscript>
                        you need to enadble JAVAScript to run this app.
                        </noscript>
                        <div id="root"></div>
                        </body>




## 2024-09-04 2주차
## 1.6 Next.js 시작하기

![Alt text](image.png)
### chocolaty 사용하기
-----

![Alt text](image-1.png)
### windows powershell에 붙여넣기 
-----
![Alt text](image-2.png)
### 필요한거 다운받기
-----
<br>

### 프로젝트 생성 방법

#### create-next-app@latest
* ##### Next 13.4 부터 라우터가 /src/pages에서 /src/appㄹ 정식 변경
* ##### 만일 pages를 사용하고 싶다면, App Router를 No라고 해주면 된다.
* ##### 프로젝트가 생성되면 프로젝트 디렐토리로 이동하여 다음 명령을 실행한다. npm run dev
* ##### React처럼 바로 실행되지 않기 때문에 http://localhost:3000으로 접속하여 환인한다.

![Alt text](image.png)
![Alt text](image-5.png)
#### page router

![Alt text](image-3.png)
![Alt text](image-4.png)
#### app router

#### GitHub 저장소에서 원하는 보일러플레이트 코드를 다운로드 해서 새 Next.js 프로젝트를 시작할 수도 있다.
* ##### npx create-next-app --example <보일어플레이트 이름>

### Next.js 14의 프로젝트의 기본 구조
* ##### 프로젝트를 생성할 때 /src를 사용여부를 선택할 수 있고, 일반적으로 사용한다.
* ##### 14에서는 /public과 /src/app 디렉토리만 용도가 정해져 있습니다.

### ECMAScript 기능 중 파이프 라인 연산자를 사용해 보자.

* ##### 파이프라인은 공식적으로 채택되지 않은 연산자 이다.
        console.log(Math.random() * 10);
        // 파이프라인 연산자를 사용하면 위 코드를 아래와 같이 바꿀 수 있다.
        Math.random()
        |> x => x * 10
        |> console.log;

* ##### 기능을 사용하려면 바벨 플러그인을 설치해야 한다.
        npm install --save-dev @babel/plugin-proposal-pipeline-operator @babel/core
* ##### 그리고 .babelrc 파일을 다음과 같이 수정한다. 
        {
            "presets": ["next/babel"],
            "plugins": [
                [
                "@babel/plugin-proposal-pipeline-operator",
                {"proposal": "fsharp"}
                ]
            ]
                
        }
* ##### 이제 개발 서버를 재 시작하면 된다.

