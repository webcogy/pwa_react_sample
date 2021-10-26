# PWA x REACT bolier plate

#### 필요한 것

- 스플래시 스크린
- 사이즈별 앱 아이콘
- 위의 재료 자동 생성 사이트 : https://favicomatic.com/

## CRA에서 PWA로 바꾸기

#### [1] 위의 재료 이용해 파비콘 이미지 public/경로에 모두 삽임

#### [2] index.html에 태그 소스 삽입 후 application-name 변경

#### [3] manifest.json 변경

#### [4] src/index.js => serviceWorker.register(); 적용

#### 끝
