# REST API 중심 규칙
URI는 자원을 표현하는 데 집중하고
HTTP Method를 통해 하는 것이 REST한 API를 설계하는 중심 규칙이다.

1 URI는 정보의 자원을 표현해야 한다.

2 자원에 대한 행위는 HTTP Method로표현한다.


## HTTP Method

Method / Action / 역할 / 페이로드
GET / index, retrieve / 모든 특정 리소스를 조회 / 안됨
POST / create / 리소스를 생성 / 됨
PUT / replace / 리소스의 전체를 교체 / 됨
PATCH / modify / 리소스의 일부를 수정 / 됨
DELETE / delete / 모든, 특정 리소스를 삭제 / 안됨


# REST API

구성 요소 / 내용 / 표현 방법
Resource / 자원 / HTTP URI
Verb / 자원에 대한 행위 / HTTP Method
Representations / 자원에 대한 행위의 내용 / HTTP Message Pay Load
