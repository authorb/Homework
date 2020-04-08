# 프로미스란?
promise는 콜백 패턴의 단점을 보완하고 비동기 처리 시점을 명확하게 표현한다.

# 콜백 패턴의 단점

  ## 콜백 헬
  자바스크립트 대부분의 DOM 이벤트와 Timer 함수(setTimeout, setInterval), Ajax 요청은 비동기식 처리 모델로 동작한다. 

  블로킹(작업 중단)이 되지 않는다는 장점이 있지만 이는 콜백 함수가 중첩되어 콜백 헬이 발생할 단점이 있다. 

  비동기 함수의 처리 결과를 반환하는 경우 순서가 보장되지 않기 때문에 그 반환 결과를 갖고 후속 처리를 할 수 없다. 

  비동기 함수 처리 결과에 대한 처리는 비동기 함수의 콜백 함수 내에서 처리해야 한다. 이때 콜백 헬이 발생한다.

  `코드의 가독성이 나빠지고 복잡도가 증가되어 에러 처리가 곤란해진다.`


# 프로미스의 생성
프로미스는 Promise 생성자 함수를 통해 인스턴스화한다. 
Promise 생성자 함수는 비동기 작업을 수행할 콜백 함수를 인자로 전달받는데, 이 콜백 함수는 resolve와 reject 함수를 인자로 전달받는다.

```
const promise = new Promise((resolve, reject) => {
  if (//비동기 작업 수행 성공) {
    resolve('result');
  } else {//비동기 작업 수행 실패
    reject('failure reasen');
    }
});
```

# 프로미스의 후속 처리 메소드
Promise로 구현한 비동기 함수는 Promise 객체를 반환해야 한다. 
반환된 Promise 객체 상태에 따라 후속 처리 메소드를 체이닝 방식으로 호출한다.

then 메소드 : 콜백 함수를 인자로 전달받는데, 첫번째 콜백 함수는 성공시 호출되고, 두번째 함수는 실패시 호출된다. 
`then 메소드는 Promise를 반환한다.`

catch 메소드 : 예외가 발생하면 호출된다. catch 메소드는 Promise를 반환한다.


# 프로미스의 에러 처리 
then 메소드의 두번째 콜백 함수는 비동기 처리에서 발생한 에러만 캐치한다.

`catch 함수는 비동기 처리에서 발생한 에러와 then 메소드 내부에서 발생한 에러 모두 캐치한다.`


# 프로미스 체이닝(chainning) 
프로미스는 후속 처리 메소드(then, catch)를 체이닝하여 여러 개의 프로미스를 연결해서 사용할 수 있다. 콜백 헬 해결이 가능하다. 

```
<!DOCTYPE html>
<html>
  <body>
    <pre class="result"></pre>
    <script>
      const $result = document.querySelector('.result');
      const render = content => { $result.testContent = JSON.stringify(content, null, 2); };

      const promiseAjax = (method, url, payload) => {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(method, url);
          xhr.setRequestHeader('Content-type', 'application/json');
          xhr.send(JSON.stringify(payload));

          xhr.onreadystatechange = function () {
            if (xhr.readyState !== XHLHttpRequest.DONE) return;

            if (xhr.status >= 200 && xhr.status < 400) {
              resolve(xhr.response); // Success!
            } else {
              reject(new Error(xhr.status)); // Failed...
            }
          };
        });
      };
      const url = 'http://jsonplaceholder.typicode.com/posts';

      // 포스트 id가 1인 포스트를 검색하고 프로미스를 반환한다.
      promiseAjax('GET', `${url}/1`)
        // 포스트 id가 1일 포스트를 작성한 사용자의 아이디로 작성된 모든 포스트를 검색하고 프로미스를 반환한다.
        .then(res => promiseAjax('GET', `${url}?userId=${JSON.parse(res).userId}`))
        .then(JSON.parse)
        .then(render)
        .catch(console.error);
    </script> 
  </body>
</html>
```


# 프로미스의 정적 메소드
Promise는 주로 생성자 함수로 사용되고 Promise 객체는 4가지 정적 메소드를 제공한다.

  ## Promise.resolve/Promise.reject
  ```
  const resolvedPromise1 = Promise.resolve([1, 2, 3]);
  resolvedPromise1.then(console.log); // [ 1, 2, 3 ]

  const resolvedPromise2 = new Promise(resolve => resolve([1, 2, 3]));
  resolvedPromise2.then(console.log); // [ 1, 2, 3 ]

  const rejectdePromise1 = Promise.reject(new Error('Error!'));
  rejectdePromise1.catch(console.log); // Error: Error!

  const rejectdePromise2 = new Promise((resolve, reject) => reject(new Error('Error!')));
  rejectdePromise2.catch(console.log); // Error: Error!
  ```


