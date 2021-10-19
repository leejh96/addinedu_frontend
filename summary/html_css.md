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
  - href에 #만 사용하게 되면 페이지의 처음으로 이동

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

## HTML MULTIMEDIA Contents(Embed Contents)

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

### HTML Video

https://www.w3schools.com/html/html5_video.asp

- video : 저장된 영상 파일을 해당 웹 페이지에 삽입

```
<video>
  type은 주로 mp4만 사용한다.
  <source src="영상 경로/이름" type="video/mp4" />
</video>
```

- video attribute

  - html5에서 추가된 속성
  - name = "value" 형식에서 name만 쓰는 형식으로 변경
  - controls : 동영상 컨트롤 버튼 표시
  - loop : 반복 재생
  - autoplay : 자동재생
  - muted : 음소거
    크롬에서는 autoplay를 활성화 하더라도 동영상에 원래 소리가 있는 영상이라면 자동재생 되지 않고 muted를 활성화해야 autoplay가 작동한다

  youtube 영상을 가져오기 위해서는 해당 유튜브 영상에 공유를 눌러 퍼가기를 누르면 소스코드가 나오고 그 것을 복사 붙여넣기 하면된다.

  youtube 영상을 자동재생을 하기 위해서는 복사해온 iframe에 src attribute에 끝에 autoplay=1&mute=1 을 입력한다.
  이 때는 muted가 아닌 mute로 해야한다

## HTML Semantic Elements

https://www.w3schools.com/html/html5_semantic_elements.asp

- 영역을 구분하는 태그(요소)를 의미있게 구분하고 영역을 설정하도록 하는 요소

> header : 웹페이지 상단 영역 - 로고, 로그인, 메뉴
>
> nav : **nav**igation : 웹사이트 메뉴
>
> section : 콘텐츠를 담는 역역
>
> article : 짧은 글 / 한 내용으로 완성되는 글
>
> aside : 부수적인 내용 / 광고
>
> footer : 하단 영역 - 서브 로고 / 주소 / 연락처 / 소유권

## HTML Block & Inline

https://www.w3schools.com/html/html_blocks.asp

- HTML Element는 기본적으로 각각의 영역을 가짐

- HTML Elements의 특성(디자인 개념)

  - Block 요소

    - 항상 새 줄에서 표시(줄 바뀌어서 표시)
    - Block 요소로 만들어지는 영역의 가로길이가 전체 너비에 채워짐
    - 대표태그 : div - **div**ision - container 요소

  - Inline 요소
    - 한 줄에 나란히 표시됨(줄 바뀌지 않음)
    - Inline 요소를 만들어지는 영역의 가로길이가 콘텐츠 크기만큼 차지함
    - 대표태그 : span - container 요소

## HTML ID, Class

https://www.w3schools.com/html/html_id.asp
https://www.w3schools.com/html/html_classes.asp

- HTML Element에 이름을 지정해주는 attribute

> ID
>
> - 하나의 HTML 문서내에서 고유해야 함 : 하나만 존재(논리적 특징)
> - 하나의 HTML Element에 여러개 ID 이름을 지정할 수 없음
> - 대체적으로 데이터를 고유하게 표시할 때 사용

```
<h1 id="heading">제목</h1>
<h1 id="heading">제목</h1> (X)

<p id="paragraph">단락</p>
<p id="sentence chapter">단락</p> (X)
```

> Class
>
> - 하나의 HTML 문서내에서 여러 Element에 사용할 수 있음
> - 하나의 HTML Element에 여러가지의 이름을 사용할 수 있음(공백을 활용)
> - 스타일을 공통 적용, 효과를 여러 곳에 동일하게 적용할 때 사용

```
<h1 class="heading">제목</h1>
<h2 class="heading">제목</h1> (O)

<p class="paragraph">단락</p>
<p class="sentence chapter">단락</p> (O) // sentence, chapter 클래스 두가지를 가지게 됨
```

# CSS

## CSS Introduction

- CSS : Cascading Style Sheets
- HTML Element를 스타일링 하는 언어

> cascading : 연속적이
>
> 동일한 HTML Element에 대해서 여러가지 스타일링 적용
>
> - 가장 마지막에 적용된 스타일이 HTML Element에 적용되어 화면에 표시

## CSS Syntax(문법, 구문)

- selector(선택자)

- declaration(선언)

```
선택자 { 선언 => property(속성) : value(값); }
```

## CSS Selector(선택자)

https://www.w3schools.com/css/css_selectors.asp

- 스타일링을 할 대상(HTML Element)을 선택

> Simple Selector
>
> - name(tag), id, class 3가지를 사욯해서 선택자를 표현
>   Combinator Selector(복합 선택자)
>
> Psuedo-class(가상 클래스)
>
> Psuedo-element(가상 요소)

### Element(Tag) Selector

- 요소의 이름을 선택자로 사용
- 해당 요소를 모두 선택해서 스타일링 적용

```
p {}
div {}
```

### ID Selector

```
#heading {}
```

### Class Selector

```
.sentence {}
```

> 선택자 연결표현
>
> - 여러 요소중에 특정 요소를 선택하기 위해서 사용

```
<p id="para" class="sentence">단락</p>

p#para {} => p태그면서 id가 para

p.sentence {} => p태그이면서 class가 sentence

#para.sentence {}
```

## CSS 작성방식

- External : 외부파일
- Internal : html 파일 내부의 style 태그에 작성
- Inline : html element에 직접 작성

## Color 이론

> 색 혼합 방식
>
> - 가산 혼합 : 빛 혼합
>
>   - 혼합하는 색이 많을 수록 밝아짐, 모든 색을 혼합 => 흰색
>   - 스크린 : 빛의 정보를 이용
>   - 컬러모드 : R(ed)G(reen)B(lue)
>
> - 감산 혼합 : 잉크 혼합
>   - 혼합하는 색이 많을 수록 어두워짐, 모든 색을 혼합 => 검정
>   - 프린트 : 잉크 색을 사용
>   - 컬러모드 : C(yan)M(agenta)Y(ellow)K(ey == black)

> RGB 모드
>
> 컴퓨터가 사용하는 숫자 진법 : 2진법(0,1)
>
> 데이터 저장 최소 단위 : bit
>
> - 저장 공간 1칸 : 0, 1 중에 하나를 저장
>   정보 표현 최소 단위 : byte(1byte = 8bit)
>
> RGB 컬러모드
>
> - Red, Green, Blue 각각 1byte씩으로 색 정보 표현
> - 1byte = 8bit => 3byte = 24bit 트루컬러
>
> - CSS에서 색 표현 방식
>   - 10진수 표시 방식(0~9)
>     - 1byte = 8bit => 10진수 변형 : 0 ~ 255
>     - rgb(150, 200, 56)
>   - 16진수 표시 방식(0~9, A~F)
>     - 2진수 4자리 => 16진수 1자리
>     - 2진수 24bit => 16진수 6자리
>     - #1AFFD3

> 컴퓨터 용량 단위
>
> - 1000byte = 1KB
> - 1000KB = 1MB
> - 1000MB = 1GB
> - 1000GB = 1TB

> 투명모드
>
> - transparent, opacity, alpha => 투명모드 표현 단어
>
> CSS 표현
>
> - opacity : HTML Element 투명도 조절
> - rgba() : 색의 투명도 조절

## CSS 상속

- 부모요소, 조상요소에 적용된 CSS style이 자식요소, 자손요소에 상속되어 적용되는 현상
- 모든 CSS property의 style이 상속되는 것은 아님
- 모든 HTML Element가 상속되어 적용되는 것은 아님

```
- html
<div class="parent">
  <p class="child">단락</p>
</div>

- css
.parent{
  color : red;
}

=> font 색상 적용은 상속이 되어 child 요소에도 글자 색이 빨간색으로 적용
```

## CSS Property Category

- HTML Contents Styling

  - Text Contents Styling
  - Multimedia Contents Styling

- HTML 구조 Styling

## Text Contents Styling

### CSS Text

https://www.w3schools.com/css/css_text.asp

> color
>
> - 글꼴 색

> text-align
>
> - left, center, right, justfy(양쪽맞춤)

> text-decoration : 텍스트 line
>
> - overline, line-through, underline,

> text-indent : 들여쓰기

> letter-spacing : 자간
>
> - 양수, 음수값 사용 가능

> line-height : 줄 높이
>
> - 텍스트 높이를 포함한 전체 줄 높이
> - 고정값 : px
> - 배수값 : 단위없이 숫자(소수점 가능), 글꼴 크기에 비례

> white-space : 줄바꿈 설정
>
> - wrap(default), nowrap(화면이 줄어도 줄 안바뀌게 하기)

### CSS Font

https://www.w3schools.com/css/css_font.asp

> font-family
>
> 글꼴 종류 적용
>
> - 글꼴 종류를 여러개 적용
>
>   - 순서대로 폰트를 찾아서 적용
>
> - 폰트는 사용자 컴퓨터(client)에서 찾는 것이 기본
> - 폰트 종류 적용시 마지막에 브라우저 기본 폰트를 적용
>   - 고딕 : sans-serif
>   - 명조 : serif;

```
p {
  font-family : "맑은 고딕", 돋움, sans-serif;
}

=> 맑은고딕 폰트를 찾고 있으면 적용, 없으면 돋움을 찾고 있으면 적용, 없으면 sans-serif(브라우저 기본 폰트)를 적용

=> 폰트에 공백이 있는경우에는 ""를 사용
```

> 폰트 카테고리
>
> - 고딕(sans-serif), 명조(serif)

> 웹 폰트
>
> - font-family 속성은 브라우저에서 렌더링을 할 때 클라이언트에서 폰트를 찾는 기능
> - font 파일을 서버에 저장 후 클라이언트 요청에 따라 Resource를 전송할 때 font 파일도 같이 전송해서 font-family 속성이 전송된 폰트를 사용할 수 있도록 하는 폰트 사용 방식
> - 사용자의 디바이스(클라이언트)에 저장된 폰트에 상관없이 서버에 저장된 폰트를 사용하므로 모든 사용자가 동일한 폰트를 사용
> - 웹에서 사용할 수 있는 형식의 폰트 파일 확장자 : .woff, .eof

> - 웹 폰트 서비스
>   - 개발자가 웹 폰트 파일 변환 작업없이 바로 웹 폰트를 사용할 수 있게 해줌
>   - 구글 폰트(Google Font): 영문 (https://fonts.google.com/?subset=latin-ext)
>   - 눈누 폰트(Noonnu) : 한글 (https://noonnu.cc/)

> font-size
>
> -px로 크기 설정

> font-weight
>
> - font 굵기 : normal/bold, 100 ~ 900 까지 100단위 숫자로 항상 모든 굵기가 존재하는 것은 아니고 폰트의 종류에 따라 다름

> font-style
>
> - 이태리체(기울임꼴)

### CSS links

https://www.w3schools.com/css/css_link.asp

- 4가지 상태 구분을 해서 각각 스타일링 할 수 있음

```
a:link : 일반 상태
a:visited : 방문한 상태
a:hover : 마우스를 갖다 댄 상태
a:active : 마우스 버튼을 누르고 있는 상태
```

### CSS list

- 목록에 자동으로 생성되는 기호, 숫자 제거

```
ol {
  list-style-type : none;
}
```

### CSS Table

- Table 테두리 속성은 틈이 벌어져 있는 테두리가 기본
- border-collapse: collapse 설정 => 테두리 사이 틈을 제거

## Box Styling

- Box : 네모난 형태의 영역, 콘텐츠 => HTML 모든 요소

> Box Model Styling(Box 스타일링 속성의 모음)
>
> - 크기 : 가로(너비), 세로(높이) 길이
> - 여백 : 안쪽 여백(padding), 바깥 여백(margin)
> - 테두리
> - 배경(추가 속성) : 콘텐츠 영역과 안쪽 여백 영역에만 적용

> Box 전체 크기 계산(가로 또는 세로)
>
> - 가로 : width + padding + border
> - 세로 : height + padding + border

```
Ex)

div{
  width:200px;
  padding:30px;
  border:1px solid red;
  margin:20px;
}

=> 박스 전체 가로길이 : 200px + 30px * 2 + 1px * 2 = 262px

=> 박스 전체 가로길이 200px : 200px - 30px * 2 - 1px * 2 = 138px(width)
```

> box-sizing:border-box;
>
> - width 속성 값이 전체 길이 되도록 특성 변경

```
div{
  width:200px;
  padding:30px;
  border:1px solid red;
  margin:20px;
  box-sizing:border-box;
}

=> 박스 전체 가로길이 : 200px

```

### height / width

> - auto : default - 값을 지정하지 않았을 때 적용되는 값
>
>   - width : 너비가 부모요소를 기준으로 전체에 채워짐
>   - height : 콘텐츠의 높이 만큼 채워짐
>
> - px : px 단위로 고정된 수치값 적용
> - 픽셀은 정수단위 소수점으로 쓸수는 있어도 적용이되진 않음 반올림으로 처리됨

> - % : % 단위로 유동적인 수치값 적용
>   - 부모요소를 기준으로 부모요소의 크기가 변경되면 맞춰서 같이 변경 => 반응형 웹페이지에 사용
>   - width : 부모 요소를 기준으로 일정 비율만큼 적용
>   - height : 부모 요소를 기준으로 일정 비율만큼 적용, 부모요소가 auto일때는 적용되지 않음

### padding

> 개별 적용
>
> - padding-top : 위
> - padding-right : 오른쪽
> - padding-bottom : 아래
> - padding-left : 왼쪽

> 축약표현
>
> - padding : 값
> - 값 4개 : 4방향 각각 수치값 적용
> - 값 3개 : top (right-left) bottom
> - 값 2개 : (top-bottom) (right-left)
> - 값 1개 : 4방향 전체 공통 적용

### border

- 테두리 스타일 : 굵기, 형태, 색깔
- 테두리 방향

```
border : 굵기 형태 색;

border : 1px solid black;

border-top: 1px solid black;
border-right: 1px solid black;
border-bottom: 1px solid black;
border-left: 1px solid black;
```

### margin

- 바깥여백
- 사용 방법 : padding과 같음

### background

- 배경색, 배경이미지

> 배경색 : background-color
>
> - (R)ed, (G)reen, (B)lue, (A)lpha
> - 색 코드값
>   - 색 이름 : red, blue
>   - 16진수 : #FF[R]FF[G]FF[B]
>   - 10진수 : rgb(200[R:0~255], 125[G:0~255], 38[B:0~255])
>   - 10진수 + 투명 : rgba(200, 125, 38, 0.5[A:0~1])

> 배경이미지 : background-image
>
> - url() : 이미지 파일 경로/이름
> - 특징 : 이미지 반복시켜서 영역을 채우는 것이 기본성질
>
> - 배경이미지 반복 : background-repeat
>   - repeat(default), no-repeat, repeat-x, repeat-y(x방향 혹은 y방향만 반복)
> - 배경이미지 고정 : background-attachment
>   - fixed : 배경이미지를 고정(스크롤을 내려도 같이 이미지가 내려가지않고 고정됨)
> - 배경이미지 위치 : background-position
>   - x, y 좌표값 표시 ex) background-positon : 500px 200px;

### Box model과 Block/Inline의 관계

- Block : 박스모델이 제대로 적용됨
- Inline : 박스모델이 제대로 적용되지 않음
  - width/height, margin이 적용되지 않음

### display 속성

> 한줄에 여러 박스를 표시하면서(inline), 박스모델도 적용(block)
> inline-block 성질을 사용

- 박스가 화면에 표시될 때 원래 성질을 변경
- 값 : block, inline, inline-block

## Multimedia Contents Styling

> 콘텐츠(이미지, 비디오) 크기, 여백 스타일링 => Box model
> 이미지, 비디오는 원본을 유지하면서 크기를 변화시키고 싶을 때 width나 height 중 하나의 값만 넣어주면 자동적으로 비율을 유지시켜준다.

## Layout Styling

> 구분 영역(박스) 크기, 여백 스타일링 => Box model
>
> 구분 영역(박스)의 배치

### flex

> display : flex;
>
> - flex 배치 적용
>
> flex-direction : 배치 방향
>
> - row(default), row-reverse, column, column-reverse
>
> flex-wrap : 줄바꿈
>
> - wrap, nowrap(defalut)
>
> justify-content : 가로방향 정렬
>
> - flex-start, flex-end, center
> - space-around, space-between
>
> align-items : 세로방향 정렬
>
> - flex-start, flex-end, center
> - baseline(item들의 높이를 맞춤), stretch(높이를 컨테이너에 맞춤)

## 반응형 웹 디자인

- PC 모니터, 태블릿 화면, 스마트 폰 화면 등 여러 디바이스 화면에 콘텐츠를 잘 전달할 수 있도록 레이아웃을 적절하게 변경되도록 하는 웹 디자인 방식

> 디바이스별 해상도 구분
>
> - 반응형 웹 : 대부분 가로길이 해상도로 구분
> - 중단점(breakpoint) : 범위 설정
>
>   - 디바이스별 구분 : PC, Tablet, Smart Phone
>   - 중단점은 단일한 한 지점을 설정하는 것이 아니고 범위로 설정해야 함
>   - pc : 1920px ~ 1024px
>   - tablet : 1024px ~ 768px
>   - smart phone : 648px ~ 320px
>
> HTML, CSS를 활용하는 기술
>
> - viewport
>   - 여러 디바이스 화면에 최적화되게 보일 수 있도록 HTML 페이지에 설정하는 구문
> - media query
>
>   - 해상도를 구분해서 필요한 css를 적용할 수 있게 하는 키워드
>   - 해상도 범위를 열린 범위로 구현하면 넓은 범위에서 적용한 css를 작은 범위에서 공통으로 사용할 수 있음

```
@media screen and (가로길이 해상도 범위 : max-width){
  적용 css 코드
}

** max-width : 최대 가로길이 => ~픽셀 이하 범위 **
```

```
/* pc styling */
body {
  background: red;
}

/* tablet styling */
@media screen and (max-width:1024px){
  body {
    background: blue;
  }
}

/* smart phone styling */
@media screen and (max-width: 768px){
  body {
    background: green;
  }
}
```
