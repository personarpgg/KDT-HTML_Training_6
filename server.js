const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const root = document.getElementById("root");

//이거 쓰려면 정책 문제로 8080 써야함
fetch('/public/data.json')
.then(response => response.json())
.then(data => {
  const props = data.paragraphs;
  console.log(props); // 올바른 콘솔 로그 문법을 사용
  
  // 여기에 데이터를 처리하거나 화면에 표시하는 로직을 추가하면 됩니다.
})

    .catch(error => console.error('데이터 못 불러옴', error));
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// 모듈로 내보내기
module.exports = { app };