/**
 * title : ==(동등) 연산자와 ===(일치) 연산자의 차이점
 * 
 * ==(동등) 연산자는 두 타입이 다른 경우 타입 변환을 거친다음 비교
 * 
 * ===(일치) 연산자는 두 타입이 다를 경우 타입 변환을 거치지 않고 비교
 * 
 * ===(일치) 연산자를 사용하기를 권함
 */

console.log(1=='1');    // true
console.log(1==='1');   // false


