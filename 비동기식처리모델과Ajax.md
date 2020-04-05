비동기식 처리 모델과 Ajax

# Ajax(Asynchronous JavaScript and XML)
Ajax는 자바스크립트를 이용해 비동기적으로 서버와 브라우저가 데이터를 교환할 수 있는 통신 방식을 의미한다.
페이지 일부만 갱신하고 동일한 효과를 볼 수 있게 한 것.


# JSON(JavaScript Object Notation)
JSON은 클라이언트와 서버 간 데이터 교환을 위한 규칙, 즉 데이터 포맷을 말한다.

JSON은 순수한 텍스트로 구성된 규칙이 있는 데이터 구조이다.

`키는 큰따옴표로 무조건 감싸야 한다.`

  ## JSON.stringify
  JSON.stringify 메소드는 객체를 JSON 형식의 문자열로 변환한다.

  ## JSON.parse
  JSON.parse 메소드는 JSON 데이터를 가진 문자열을 객체로 변환한다. 

  배열이 JSON 형식이었다면 배열 객체로 변환한다.


# XMLHttpRequest
브라우저는 XMLHttpRequest 객체를 이용해 Ajax 요청을 생성하고 전송한다. 서버가 브라우저의 요청에대해 응답을 반환하면 XMLHttpRequest 객체가 결과를 처리한다.

```
const xhr = new XMLHttpRequest();
xhr.open('GET', '/users');
xhr.send();
```

  ## XMLHttpRequest.open
  XMLHttpRequest 객체의 인스턴스를 생성하고 XMLHttpRequest.open 메소드를 사용해 서버로의 요청을 준비한다.

  ```
  XMLHttpRequest.open(meghod, url[, async])
  ```

  ## XMLHttpRequest.send
  XMLHttpRequest.send 메소드로 준비된 요청을 Request Body에 담아 전송할 인수를 전달할 수 있다.

  GET 메소드 : URL 일부부인 쿼리문자열로 데어티를 서버로 전송한다. send 메소드의 인수는 무시되고 request body는 null로 설정된다.

  POST 메소드 : 데이터(페이로드)를 Request Body에 담아 전송한다.

  ## XMLHttpRequest.setRequestHeader
  XMLHttpRequest.setRequestHeader 메소드는 HTTP Request Header 값을 설정한다. setRequestHeader 메소드는 반드시 XMLHttpRequest.open 메소드 호출 이후 호출한다.

  . content-type
  Content-type은 request body에 전송할 데이터의 MIME-type의 정보를 표현한다.

  text 타입 : text/plain, text/html, text/css, text/javascript

  Application 타입 : application/jkson, application/x-www-form-urlencode

  File을 업로드 하기 위한 타입 : multipart/formed-data

  . Accept
  ```
  xhr.setRequestHeader('Accept', 'application/json');
  ```
  Accept 헤더를 설정하지 않으면 send 메소드가 호출될 때 Accept 헤더가 */*로 전송된다.

  ## Ajax response
  ```
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function (e) {
    if (xhr.readySate !== XMLHttpRequest.DONE) return;
    if(xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log('Error!');
    }
  };
  ```

  XMLHttpRequest.onreadystatechange는 Response가 클라이언트에 도달하여 발생된 이벤트를 감지하고 콜백 함수를 실행한다. 

  XMLHttpRequest.readySate 값이 4인 경우 정상적으로 Response가 돌아왔다.


# Web Server
웹서버는 브라우저와 같은 클라언트로부터 HTTP 요청을 받아들이고 HTML 문서와 같은 웹페이지를 반환하는 컴퓨터 프로그램이다.



