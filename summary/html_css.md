# HTML

## HTML Introduction

https://www.w3schools.com/html/html_intro.asp

- HTML : Hyper Text Markup Language
- 웹 페이지의 내용을 표시하는 언어

  - 웹 페이지의 콘텐츠 표시

    - 텍스트 콘텐츠
    - 멀티미디어 콘텐츠 : 이미지(그림, 사진), 비디오, 오디오

  - 웹 페이지의 구조 표시

## HTML Element

https://www.w3schools.com/html/html_elements.asp

```
<tagname>Content</tagname>
=> tagname : Content 종류, 특성 표시 / 구조 표시

<tagname> : 시작태그만 존재
=> Empty Element

빈 요소는 시작태그로만 종료된다는 의미로 self-closing 기호를 사용할 수 있음(선택)
<tagname> | <tagname />

- 기본 문법 : 사용하지 않음
- reactjs 라이브러리 : 반드시 사용

포함관계(Nested)
<tag1>
  <tag2>
    <tag3>Contents</tag3>
  </tag2>
</tag1>
<tag4></tag4>

tag1 - tag2 관계
- tag1은 tag2의 Parent(부모요소)
- tag2는 tag1의 Children(자식요소)

tag1 - tag3 관계
- tag1은 tag3의 Ancestor(조상요소)
- tag3은 tag1의 descendants(자손요소)

tag1 - tag4 관계
- tag1(tag4)은 tag4(tag1)의 Siblings(형제요소)

대소문자 구별하지 않음 => 소문자로 쓰는 것이 원칙
```

## HTML Attribute

https://www.w3schools.com/html/html_attributes.asp

- Attribute : 속성
- 추가정보를 제공

```
Ex)

<img src="이미지경로/파일이름">

<a href="이동경로주소">링크이름</a>

속성이름="정보"
```

## HTML Basic

```
<!DOCTYPE html>
<html>
  <head>
    웹사이트(앱) 관련된 정보
  </head>
  <body>
    웹 사이트의 콘텐츠
  </body>
</html>
```

- html 태그의 자식요소 : head, body
- head, body : 형제요소

## HTML TEXT Contents

### HTML Heading

https://www.w3schools.com/html/html_headings.asp

- h : **h**eading => 제목 표시
- h1 ~ h6

### HTML Paragraph

https://www.w3schools.com/html/html_paragraphs.asp

- p : **p**aragraph => 단락 표시

- hr : **h**orizontal **r**ules => 수평선 표시(단락 구분의미가 포함) / empty elements

```
<p>단락</p>
<hr />
<p>단락</p>
```

- HTML paragraph display
  - 한 단락안에서 Enter 강제 줄바꿈, space 강제 공백은 적용이 안됨.
  ```
    <br> | <br /> : line (br)eak / 강제 줄바꿈, 빈 요소
    &nbsp; : (n)one-(b)reak-(sp)ace - Entity code / 강제 공백 한 칸 의미
    (& : ampersand)
  ```

### HTML Links

https://www.w3schools.com/html/html_links.asp

- a : **a**nchor
- attribute(속성)
  - href(**h**ypertext **ref**erence) / 링크 연결 주소 정보
  - target : 새 탭으로 열기 (\_blank)

```
<a href="https://www.naver.com" target="_blank">Contents(text, image)</a>
```

- 다른 페이지로 링크 연결
- 같은 페이지에서 상하 이동 => 북마크 기능

### HTML Lists

https://www.w3schools.com/html/html_lists.asp

- ul : **u**nordered **l**ist - 순서없는 목록
- ol : **o**rdered **l**ist - 순서있는 목록
- li : **l**ist **i**tem - 항목

- dl : **d**escription **l**ist - 설명 목록
- dt : **d**escription **t**itle(**t**heme) - 설명 목록 제목
- dd : **d**escription **d**ata - 설명 목록 내용

### HTML Table

https://www.w3schools.com/html/html_tables.asp
https://www.tablesgenerator.com/html_tables

표 구성 요소 : 열(세로줄), 행(가로줄), 셀(칸)

- table
- thead : 표 구성 영역 - 열 제목 영역
- tbody : 표 구성 영역 - 데이터 영역
- tr : **t**able **r**ow - 표의 행
- th : **t**able **h**eader - 열 제목 셀
- td : **t**able **d**ata - 데이터 셀

## HTML MULTIMEDIA Contents

### HTML Images

https://www.w3schools.com/html/html_images.asp

- img : image - 이미지 파일을 HTML 페이지에 삽입 / 빈 요소
- attribute
  - src : 이미지 파일의 경로/이름 정보
  - alt : **alt**ernative - 대체 텍스트

```
<img src="이미지 파일의 경로/이름" alt="이미지 설명글" />
```

### HTML_File_Paths

https://www.w3schools.com/html/html_filepaths.asp

- 파일 경로 ≒ URL

```
URL
www.w3schools.com/html/html_filepaths.asp
www.w3schools.com/html/

File 경로
www.w3schools.com/html/html_filepaths.asp

URL > File 경로
```

- 인터넷 주소

  - IP(Internet Protocol) : 인터넷에서 사용하는 실제 주소 ex) 192.168.0.1
  - Domain Name : IP주소를 대체하는 영어로 된 주소체계

- URL(Uniform Resource Locator)
  - 인터넷에서 사용하는 서버에 저장된 자원의 위치
  - 자세한 인터넷 주소

```
URL
https://codesandbox.io/s/html-css-ineej?file=/summary/html_css.md

Domain Name
https://codesandbox.io/
```

- 절대주소(URL)
  - File 이나 Resource 를 찾거나 이동하기 위한 기준 지점이 서버의 주소(IP, 도메인 주소)
  - 항상 같은 위치를 찾거나 이동할 수 있음

```
<a href="https://github.com/leejh96/addinedu_frontend/blob/master/README.md"></a>

<img src="https://codesandbox.io/s/html-css-ineej?file=/summary/images/img.png" />
```

- 상대주소(URL)
  - File 이나 Resource 를 찾거나 이동하기 위한 기준 지점이 이동하거나 찾으려 하는 파일의 위치가 기준
  - 상황에 따라서 경로/주소 표시 형태가 변경될 수 있음

```
<a href="README.md"></a>

../ : 상위폴더 이동
<a href="../README.md"></a>

<img src="summary/images/img.png" />

summary 안에 html의 파일이 있는 경우
<img src="images/img.png" />
```

# CSS
