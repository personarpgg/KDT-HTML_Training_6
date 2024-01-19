function send() {
  //콘솔에도 안뜸
  fetch("/public/data.json")
    .then((response) => response.json())
    .then((data) => {
      const props = data.paragraphs;
      console.log(props);

      // 여기에 데이터를 처리하거나 화면에 표시하는 로직을 추가하면 됩니다.
    })

    .catch((error) => console.error("데이터 못 불러옴", error));
}
// 모듈로 내보내기
module.exports = send();
