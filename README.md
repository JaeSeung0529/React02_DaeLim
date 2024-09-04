# React02_DaeLim

## 202230233 정재승

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