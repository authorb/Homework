// 1. 변수가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식.
var x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}
// 2. for문 사용, 0부터 10미만 정수 중 짝수만 작은 수부터 출력.
for (var i = 0; i < 10; i += 2) {
  console.log(i);
}
// 3. for문 사용, 0부터 10미만 정수 중 짝수만 작은 수부터 문자열로 출력.
var string = '';
for (var i = 0; i < 10; i += 2) {
  console.log(i); 
  string += i;
}
console.log(string)

// 4. for문 사용, 0부터 10미만 정수 중 홀수만 큰 수부터 출력.
for (var i = 10; i > 0; i--) {
  if (i % 2)
  console.log(i);
}

// 5. while문 사용, 0부터 10까지 짝수만 작은 수부터 출력.
var x =  0;
while (x < 10) {
  console.log(x);
  x += 2;
}

// 6. while문 사용, 0부터 10미만 정수 중 홀수만 큰 수부터 출력.
var x = 10;
while (x > 0) {
  if (x % 2) 
  console.log(x);
  x -= 1;
}

// 7. for문 사용, 0부터 10미만의 정수의 합 출력.
var sum = 0;
for (var i = 0; i < 10; i++) {
  sum += i;  
}
console.log(sum)

// 8. 1부터 20 미만 정수 중 2 또는 3의 배수가 아닌 수의 총합.
var sum = 0;
for (var i = 0; i < 20; i++) {
  if (i % 3 && i % 2)  
  sum += i; 
}
console.log(sum)

// 9. 1부터 20 미만 정수 중 2 또는 3의 배수인 수의 총합.
var sum = 0;
for (var i = 0; i < 20; i++) {
  if (!(i % 3 && i % 2))
  sum += i;
} 
console.log(sum)

// 10. 두 개의 주사위 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력.
for (var i = 1; i < 6; i++) {
  for (var x = 1; x < 6; x++) {
    if (i + x === 6)
    console.log([i, x]);
  }
}

// 11. 삼각형 출력하기 - pattern 1
var triangle = '';
for (var i = 1; i < 6; i++) {
  triangle += '*';
  console.log(triangle);
}
// 12. 삼각형 출력하기 - pattern 2
// 13. 삼각형 출력하기 - pattern 3
// 14. 삼각형 출력하기 - pattern 4
// 15. 정삼각형 출력하기
// 16. 역정삼각형 출력하기

