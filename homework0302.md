## 프로퍼티 어트리뷰트

## 내부 슬록과 내부 메소드
자바스크립트는 작업자가 내부 슬롯과 내부 메소드에 직접 접근하거나 
호출할 수 있는 방법을 제공하지 않는다. 
일부 내부 슬롯과 내부 메소드에 한해, 
간접적으로 접근할 수 있는 수단을 제공한다.


## 프로퍼트 어트리뷰티와 프로퍼티 디스크립터 객체

프로퍼티의 상태(프로퍼티 디스크립터 객체)
  # 프로퍼티 값(value)
  # 값의 갱신 가능 여부(writable)
  # 열거 가능 여부(enumerable)
  # 재정의 가능 여부(configurable)

  프로퍼티 어트리뷰트에 직접 접근할 수 없는 대신,
  Object.getOwnPropertyDescriptor 메소드로 
  간접적으로나마 확인 가능하다.

  Ovject.getOwnPropertyDescriptor 메소드를 호출하면
  첫번째 매개변수에는 객체의 참조,
  두번째 매게변수에는 프로퍼티 키를 전달한다.
  존재하지 않거나 상속받은 프로퍼티 디스크립터 요구에는 
  undefined를 반환한다.

  Object.getOwnpropertyDescriptors 메소드는
  모든 프로퍼티 디스크립터 객체들을 반환한다(ES8도입).


## 데이터 프로퍼티와 접근자 프로퍼티
데이터 프로퍼티(Data property) : 키와 값으로 구성된
일반적인 프로퍼티.
 
접근자 프로퍼티(Accessor property) : 다른 데이터 프로퍼티의 값을 읽거나
저장할 때 호출되는 접근자 함수로 구성된 프로퍼티.


## 데이터 프로퍼티
자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으(true)로 자동 저장됨.

  # value : 
  키로 값에 접근했을 때 반환됨.
  프로퍼티 없으면 생성하고, 새성된 프로퍼티의 [[value]]에 값 저장.

  # writable : 
  프로퍼티 값의 변경 여부, 불리언 값 갖는다.
  writable 값이 false인 경우, 값 변경 못하고 읽기 전용.

  # enumerable :
  프로퍼티 열거 가능 여부, 불리언 값 갖는다.
  enumerable 값이 false인 경우,
  해당 프로퍼티는 for...in문, Object.keys 메소드 등으로 열거 불가.

  # configurable : 
  프로퍼티 재정의 가능 여부, 불리언 값 갖는다.
  consfigurable 값이 false인 경우, 해당 프로퍼티의 삭제, 
  프로퍼티 어트리뷰트 값의 변경 금지된다.

  writable이 true인 경우, value의 변경과 writable을 false로 변경하는 것은 가능하다.


## 접근자 프로퍼티(Accessor property)
접근자 프로퍼티는 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는
접근자 함수로 구성된 프로퍼티다.

  # get : 
  접근자 프로퍼티 키로 프로퍼티 값에 접근하면 getter 함수가 호출되고
  그 결과가 프로퍼티 값으로 반환된다.

  # set : 
  접근자 프로퍼티 키로 프로퍼티 값을 저장하면 setter 함수가 호출되고
  그 결과가 프로퍼티 값으로 저장된다.

  # enumerable, configurable
  데이터 프로퍼티 어트리뷰트와 같다.

  # 접근자 프로퍼티
  `접근자 프로퍼티는 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.`

  [[Get]]
  [[Set]]
  [[Enumerable]]
  [[Configurable]]

  getter / setter 함수

  // `일반 객체의 __proto__는 접근자 프로퍼티`이다.
  Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
  // {get: f, set: f, enumerable: false, configurable: true}

  // `함수 객체의 prototype은 데이터 프로퍼티`이다.
  Object.getOwnPropertyDescriptor(function() {}, 'prototype');
  // {value: {...}, writable: true, enumerable: false, configurable: false}


## 프로퍼티 정의
프로퍼티 값을 갱신하도록 할 것인가
프로퍼티를 열거하도록 할 것인가
프로퍼티를 재정의 가능하도록 할 것인가
이를 정의하는 것을 말한다.

Object.defineProperty 메소드를 사용해 프로퍼트 어트리뷰트를 정의한다.

Object.defineProperty 메소드는 한 번에 하나의 프로퍼티만,

Object.defineProperties 메소드를 사용하면 여러 개의 프로퍼티를 한 번에 정의할 수 있다.


## 객체 변경 방지

Object.preventExtensions(객체 확장 금지)
프로퍼티 삭제, 값 읽기, 값 쓰기, 어트리뷰트 재정의 가능

Object.seal(객체 밀봉)
프로퍼티 값 읽기, 값 쓰기 가능

Object.freeze(객체 동결)
프로퍼티 값 읽기만 가능


# 객체 확장 금지
Object.preventExtentions 메소드는 프로퍼티 추가를 금지한다.

`확장이 금지된 객체는 프로퍼티 추가가 금지된다.`
프로퍼티 삭제는 가능하다.

확장 금지 여부는 Object.isExtensible 메소드로 확인.


# 객체 밀봉
Object.seal 메소드는 프로퍼티 추가, 삭제, 프로퍼티 어트리뷰터 재정의를 금지한다.

`밀봉된 객체는 읽기와 쓰기만 가능하다.`

밀봉 객체 여부는 Object.isSealed 메소드로 확인 가능.


# 객체 동결
Object.freese 메소드는 프로퍼티 추가, 삭제 어트리뷰트 재정의 금지, 프로퍼티 값 갱신 금지를 의미한다.

동결된 객체는 읽기만 가능하다.

밀봉 객체 여부는 Object.isFrozen 메소드로 확인 가능.


# 불변 객체
중첩 객체까지 동결하려면 객체 값을 갖는 모든 프로퍼티에 대해 재귀적 Object.freeze 메소드를 호출해야 한다.
