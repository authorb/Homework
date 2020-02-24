## 타입 변환과 단축 평가

## 타입 변환이란?
개발자가 의도적으로 값의 타입을 변환한 것을 
명시적 타입변환(Explicit coercion) 또는 
타입 캐스팅(Type casting)라고 한다.

개발자의 의도와 상관 없이 자동타입변환되는 것을 
암묵적 타입 변환(Implicit coercion) 또는 
타입 강제 변환(Type coercion)이라고 한다.

여기서 중요한 것은 코드를 작성할 때, 
명시적 타입변환, 암묵적 타입 변환을 모두 예측해야한다는 것이다. 
그러기 위해서는 타입 변환이 언제, 어떻게 일어나는지 
개발자가 정확하게 이해하고 사용할 줄 알아야 하고 가독성 또한 좋아야 한다.

## 암묵적 타입 변환
자바스크립트는 (에러보다는) 암묵적 타입 변환을 통해 표현식을 평가한다.

암묵적 타입변환을 할 때 
문자열, 숫자, 불리언 같은 
원시 타입 가운데 하나로 타입을 자동 변환한다.

## 문자열 타입으로 변환
자바스크립트 엔진은 문자열 연결 연산자 표현식을 평가하기 위해 
+연산자를 이용해서 문자열 타입이 아닌 연산자
(예를 들어 숫자 타입)를 문자열 타입 연산자로 타입 변환시킨다. 

템플릿 리터럴을 통해 다음과 같이 타입 변환을 할 수 있다.

console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"

자바스크립트 엔진은 문자열 아닌 값을 문자열 타입으로 
암묵적 타입 변환할 때 다음과 같이 동작한다.

// 숫자타입
-0 + '' // "0"
-1 + '' // "-1"
NaN + '' // "NaN"
Infinity + '' // "Infinity"
-Infinity + ''  // "-Infinity"

원시값 + '' ~ "ture", "false", "null", "undefined"

// 심볼타입 
(Symbol()) + ''  // TypeError: 에러 설명

// 객체타입. 아직 배우지 않아서 생략.


## 숫자 타입으로 변환
1 - '1'  //  0
1 * '10'  //  10 
1 / 'one'  //  NaN  
이 경우, 'one'을 숫자로 바꿀 수 없기에 결과가 NaN으로 평가된다.

**만약 숫자로 변환 가능한 문자열
(예를 들어 '1', '20' 같은 거)일 때는 
+ - * / 모두 산술연산자로 작동한다.**
 
'1' > 0  // true
비교 연산자도 피연산자의 크기를 비교하므로, 
숫자 타입으로 (변경 가능하다면)암묵적 타입 변환을 한다.

// 문자열 타입
+''  // 0
+'0'  // 0
+'string'  //  NaN

// 불리언 타입
+true  //  1
+false  //  0

// null 타입
+null  //  0

// undefined 타입
+undefined  //  NaN

// 심볼 타입
+Symbol( )  //  TypeError: 에러 설명

// 객체 타입
배울 예정

' ', [ ], null, false 는 0, 
true는 1, 
객체, 빈 배열이 아닌 배열, undefined는 NaN


## 불리언 타입으로 변환
if문, for문, 제어문, 삼항 조건 연산자의 조건식은 
true, false로 반환하는 표현식으로, 
자바스크립트 엔진은 조건식의 평가를 불리언 타입으로 암묵적 타입 변환한다.

false
undefined
null
0, -0
NaN
' ' (빈 문자열)

위의 여섯 가지 Falsy 값을 
제외한 나머지는 모두 true로 평가되는 Truthy 값이다.

Truthy / Falsy 값을 판별하는 함수를 통해 
값의 논리적 참, 거짓 여부를 알아낼 수 있다. 
이때 사용하는 함수는 function isTruthy( ), 
function isFalsy( )이다.


## 명시적 타입 변환
개발자의 의도에 의해 명시적으로 타입을 변경하는 방법으로, 
표준 빌트인 생성자 함수(String, Number, Boolean)를 
new 연산자 없이 호출하는 방법, 
자바스크립트에서 제공하는 빌트인 메소드를 사용하는 방법, 
암묵적 타입 변환을 이용하는 방법 등이 있다.

## 문자열 타입으로 변환
# 첫번째. String 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(String(1));  //  "1"
console.log(String(NaN));  //  "NaN"
console.log(String(Infinity));  //  "Infinity"

console.log(String(true))  //  "true"  거짓이면 false를 넣는다.


# 두번째. Object.prototype.toString 메소드를 사용하는 방법
console.log((1).toString());  //  "1"

console.log((true).toString());  //  "true"


# 세번째. 문자열 연결 연산자를 이용하는 방법
console.log(1 + '');  //  "1"

console.log(true + '');  //  "true" 


## 숫자 타입으로 변환
1.Number 생성자 합수를 new 연산자 없이 호출하는 방법
2.parseInt, parseFloat 함수를 사용하는 방법(문자열만 숫자 타입으로 변환 가능)
3.+단항 산술 연산자를 이용하는 방법
4.*산술연산자를 이용하는 방법

# 첫번째. Number 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Number('0'));  //  0
console.log(Number('-1'));  //  -1

console.log(Number(true));  //  1
console.log(Number(false));  //  0

# 두번째. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
console.log(parseInt('0'));  //  0
console.log(parseInt('10.53'))  //  10.53

# 세번째. +단항 산술 연산자를 이용하는 방법
console.log(+'0');  //  0
console.log(+'-1');  //  -1

console.log(+true);  //  1   (false 일 때는 0)

# 네번째. *산술 연산자를 이용하는 방법
console.log('-1' * 1);  //  -1

console.log(true * 1);  //  1   (false일 때는 0)


## 불리언 타입으로 변환
1.Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
2.!부정 논리 연산자를 두 번 사용하는 방법

# 첫번째.Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
console.log(Boolean('x'));  //  true
console.log(Boolean(''));  //  false
console.log(Boolean('false'));  //  true  (false여야 하는 값이라서 결과가 true???)

console.log(Boolean(0));  //  false
console.log(Boolean(NaN));  //  false
console.log(Boolean(Infinity));  //  true

console.log(Boolean(null));  //  false

console.log(Boolean(undefined));  //  false

console.log(Boolean({}));  //  true
console.log(Boolean([]));  //  true

# 두번째.!부정 논리 연산자를 두 번 사용하는 방법
console.log(!!'');  //  false
console.log(!!'false')  //  true (false가 나오는 게 정상이기에 true임.)

console.log(!!0);  //  false
console.log(!!NaN);  //  false
console.log(!!Infinity);  //  true

console.log(!!null);  //  false

console.log(!!undefined);  //  false

console.log(!!{});  //  true
console.log(!![]);  //  true


## 단축평가(Circuit evaluation)

cat && dog  //  'dog'
논리곱 연산자는 왼쪽에서 오른쪽으로 평가하기에 왼쪽값을 먼저 확인한 후, 
오른쪽 값까지 모두 확인한 다음 맨 마지막에 있는 dog를 반환한다.

cat || dog  //  'cat'
논리합 연산자도 왼쪽에서 오른쪽으로 값을 확인하기에 하나만 true여도 
결과는 true가 나온다. 그래서 'cat'을 반환한다.

단축평가는 논리 연산의 결과를 결정한 타입을 변환하지 않고 
피연산자를 그대로 반환한다.

주어진 조건이 Truthy일 때 논리곱 연산자 표현식으로 if문 대체 가능.

var done = true;
var message = '';

if (done) message = '완료';

message = done && '완료';
console.log(message);  //  완료


주어진 조건이 Falsy일 때 논리합 연산자로 표현식을 if문으로 대체 가능

var done = false;
var message = '';

if (!done) message = '미완료';

message = done || '미완료';
console.log(message);  //  미완료


삼항 조건 연산자는 if...else문으로 대체 가능

var done = true;
var message = '';

if (done) message = '완료';
else      message = '미완료';
console.log(message);  //  완료


message = done ? '완료' : '미완료';
console.log(message);  //  완료


## 객체란?
자바스크립트에서 원시값을 제외한 모든 값들은 객체이다. 
원시값은 단 하나의 값이며 변경 불가능하지만 객체 타입 값은 다양하고 변경 가능하다.

자바스크립트의 객체는 키(key)와 값(value)으로 구성된 프로퍼티(Property)들의 집합이다.

자바스크립트에서 사용 가능한 모든 값은 프로퍼티 값이 될 수 있고 
자바스크립트 함수는 일급객체로, 
값으로 취급가능하며 프로퍼티 값도 함수로 사용할 수 있다.

프로퍼티 값이 함수일 경우 
일반함수와 구분하기 위해 메소드(Method)라고 부른다.

프로퍼티 : 객체의 상태를 나타내는 값
메소드 : 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)


## 객체 리터럴에 의한 객체 생성
자바스크립트는 프로토타입 기반 객체지향 언어이다.

자바스크립트의 객체 생성 방법

객체 리터럴(가장 일반적이고 간단한 방법)
Object 생성자 함수
생성자 함수
Objeㅊt.create 메소드
클래스(ES6)

객체 리터럴은 ({...}) 안에 0개 이상의 프로퍼티를 정의하고, 
변수 할당이 이루어지는 시점에 자바스크립트 엔진은 
객체 리터럴을 해석해 객체를 생성한다. 

안에 프로퍼티가 없으면 빈 객체가 생성된다.

객체 리터럴의 {...}는 코드블록이 아니다. 
객체 리터럴은 하나의 값으로 평가되는 표현식이기 때문에 
끝에 세미콜론을 붙여야 한다.


## 프로퍼티 : 특징 및 사용 시 주의사항
객체는 프로퍼티들의 집합이며 프로퍼티는 키와 값으로 구성된다.

var person = {
  name: 'Lee',
  age: 20
}

프로퍼티 키(여기서는 name, age) : 빈 문자열을 포함하는 모든 문자열 또는 symbol 값
프로퍼티 값(여기서는 'Lee', 20) : 자바스크립트에서 사용할 수 있는 모든 값

프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로 식별자 역할을 한다. 
프로퍼티 키는 사용가능한 유효한 이름일 경우 따옴표를 생략할 수 있지만 
식별자 네이밍 규칙에 따르지 않는 이름이라면 반드시 따옴표를 붙여서 사용해야 한다.

프로퍼티 키는 문자열 또는 타입 변환을 통해 
문자열로 평가할 수 있는 표현식을 사용해 키를 동적으로 생성할 수 있다. 
이 경우 []로 묶어서 사용한다. 
이는 계산된 프로퍼티 이름이라고 부른다.

프로퍼티 키에 빈 문자열을 넣어도 에러가 아니지만 권장하지 않는다.

프로퍼티 키에 문자열이나 sumbol 이외의 값을 사용하면 
암묵적 타입 변한을 통해 문자열이 된다. 
숫자 리터럴을 사용하면, 따옴표 붙지 않아 헷갈릴 수 있지만 문자열로 변환된다.

예약어는 프로퍼티키로 적절하지 않다.

프로퍼티키를 중복 선언하면 뒤에 선언한 프로퍼티키가 다 덮어쓰기에 주의하자.


## 메소드
자바스크립트에서 사용가능한 모든 값은 프로퍼티 값으로 사용할 수 있고 
함수도 값으로 취급할 수 있으며 프로퍼티 값이 될 수 있다.

프로퍼티 값이 함수일 경우, 일반함수와 구분하기 위해 
메소드라 부르고 이는 객체에 제한된 함수이다.

var circle = {
  radius: 5,  //  프로퍼티

//  원의 지름
  getDiameter: function () {  //  메소드
    return 2 * this.radius;  //  this는 circle를 가리킨다.
  }
};
console.log(circle.getDiameter());  //  10


## 프로퍼티 접근
프로퍼티 값에 접근하려면, 마침표 표기법(Dot notation)이나 
대괄호 표기법(Bracket notation)을 사용해야 한다.

마침표, 대괄호의 좌측에 객체로 평가할 수 있는 표현식을 적고, 
마침표 우측 혹은 대괄호 내부에 따옴표로 감싼 프로퍼티 키를 지정한다.
따옴표로 감싸지 않으면 ReferenceError가 뜬다.

객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환한다.

var person = {
  name: 'Lee'
};

console.log(person.name);  //  Lee

console.log(person['name']);  //  Lee

**프로퍼티 키가 숫자로 이루어진 문자열인 경우, 대괄호 안에 넣어 따옴포로 감싸자.**

프로퍼티 키에 name이라는 단어를 쓸 때, 
자바스크립트 엔진이 식별자로 해석하는 것에 주의하자. 
브라우저 환경에서 name은 창(window)의 이름을 가리키며 
기본값은 빈 문자열로 인식한다.


## 프로퍼티 값 갱신
존재하고 있는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신된다.

뭐든 중복되는 것에 주의하자.


## 프로퍼티 동적 생성
존재하지 않는 프로퍼티에 값을 할당하면 
프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당된다.


## 프로퍼티 삭제
delete 연산자는 객체의 프로퍼티를 삭제한다. 

delete 연산자의 피연산자가 프로퍼티 값에 접근할 수 있는 표현식이어야 한다.

var person = {
  name: 'Lee'
};

person.age = 20  //  프로퍼티 동적 생성

delete person.age;  //  person 객체에 age 프로퍼티가 존재한다.
                    //  delete 연산자로 age 프로퍼티를 삭제할 수 있다.

delete person.address;  //  person 객체에 address 프로퍼티가 존재하지 않는다.
//  delete 연산자로 address 프로퍼티를 삭제할 수 없다. 에러 발생 X
console.log(person);  //  {name: "Lee"}


## ES6에서 추가된 객체 리터럴의 확장 기능

# 프로퍼티 축약 표현
객체 리터럴의 프로퍼티는 프로퍼티의 키와 값으로 구성된다.
프로퍼티 값은 변수에 할당된 값, 즉 식별자의 표현식일 수 있다.

프로퍼티 값으로 변수를 사용하는 경우, 
변수 이름과 프로퍼티 키가 동일한 이름일 때 키를 생략할 수 있다. 
이때 프로퍼티 키는 변수 이름으로 자동 생성된다.

let x = 1, y = 2;
const obj = { x, y };  //  프로퍼티 축약 표현
console.log(obj);  //  {x: 1, y: 2}

# 프로퍼티 키 동적 생성
문자열 또는 문자열로 변환 가능한 값을 반환하는 표현식을 사용해 
프로퍼티 키를 동적으로 생성할 수 있다. 
대괄호 묶으며 이를 계산된 
프로퍼티 이름(Computed property name)이라 한다.

ES6에서는 객체 리터럴 내부에서 생성 가능하다.

const prefix = 'prop';
let i = 0;
 
var obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj);  //  {prop-1: 1, prop-2: 2, prop-3: 3}

# 메소드 축약 표현
ES6에서는 메소드를 정의할 때 function 키워드를 생략 및 축약할 수 있다.

const obj = {
  name: 'Lee',
  //  메소드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

단 메소드의 축약표현 정의한 메소드는 프로프티에 할당한 함수와 다르게 동작한다...
 