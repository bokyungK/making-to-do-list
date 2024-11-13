## 📄 Service Introduction
- 간단한 메모장 용도로 할 일을 기록할 수 있는 To Do List 서비스입니다.
- 할 일을 기록, 삭제, 미완료/완료 체크 처리할 수 있습니다.
- URL : https://bobo-to-do.netlify.app/
<br />

## 🧰 Tech
<div>
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
</div>
<br />

## 🗃️ Architecture
<pre>
📦to-do-list
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂Add
 ┃ ┃ ┃ ┣ 📜Add.jsx
 ┃ ┃ ┃ ┗ 📜Add.module.css
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Header.module.css
 ┃ ┃ ┣ 📂List
 ┃ ┃ ┃ ┣ 📜List.jsx
 ┃ ┃ ┃ ┗ 📜List.module.css
 ┃ ┃ ┗ 📂Main
 ┃ ┃ ┃ ┣ 📜Main.jsx
 ┃ ┃ ┃ ┗ 📜Main.module.css
 ┃ ┣ 📂context
 ┃ ┃ ┗ 📜DarkModeContext.jsx
 ┃ ┣ 📜App.js
 ┃ ┣ 📜App.module.css
 ┃ ┣ 📜index.css
 ┗ ┗ 📜index.js
</pre>
<br />

## 🧑🏻 Members
- 김보경
    - 기획 : 서비스 아이템 및 기능 선정, 기능별 요구 사항 정리
    - 디자인 : 페이지 시안 작업
    - 프론트엔드 : 마크업부터 동적 개발까지 담당
<br />

## 💻  More about service
- 전체 페이지 마크업, 스타일링
- useState를 사용한 to do list 등록, 삭제, 체크 기능 구현
- 조건부 렌더링을 통한 전체, 진행중, 완료 여부 표시
- localStorage에 데이터를 기록하여 재접속 시 유저 데이터를 그대로 사용
- Context api를 사용하여 다크 모드 전역 상태 관리
<br />

<p align="center">
  <img src="https://res.cloudinary.com/dxm4cqfuw/image/upload/v1728306349/light_svnxrn.jpg" align="center" width="45%">
  <img src="https://res.cloudinary.com/dxm4cqfuw/image/upload/v1728306349/dark_rcxifi.jpg" align="center" width="45%">
</p>