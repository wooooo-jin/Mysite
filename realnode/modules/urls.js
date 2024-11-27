const url = require('url')

const { URL } = url;
const newUrl = new URL('https://search.naver.com/search.naver?where=news&ie=utf8&sm=nws_hty&query=%EB%B9%88%EC%A7%80%EB%85%B8')

console.log(newUrl)

console.log(newUrl.searchParams.getAll('ie')) //searchParams 객체는 URL의 쿼리스트링 부분을 쉽게 다룰 수 있게 해줍니다. //원하는 값을추출하게 해준는게 파싱


