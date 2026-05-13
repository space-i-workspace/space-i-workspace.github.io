# 공간i 비상주사무실 웹사이트

## 실행 방법
```bash
cd workspace/spacei-website
python3 -m http.server 8000
# http://localhost:8000 에서 확인
```

## 기술 스택
- HTML5 + Tailwind CSS (CDN) + Vanilla JS
- Google Fonts (Noto Sans KR)
- 프레임워크/빌드 도구 없음

## 파일 구조
```
spacei-website/
├── index.html               # 메인 원페이지 (9개 섹션)
├── product.html             # 상세 상품/주문 페이지
├── why-virtual-office.html  # "왜 비상주사무실인가" 전용 페이지
├── css/styles.css           # 커스텀 스타일 (네이비/골드 테마)
├── js/main.js               # 네비게이션, FAQ, 스크롤 애니메이션
└── assets/images/
    ├── detail/              # 카페24 상세페이지 원본 자료 (d01~d47)
    └── *.jpg/png            # 상품 사진 (p35_*, banner 등)
```

## 색상 팔레트
- Primary (네이비): #1B2A4A
- Accent (골드): #C8A96E
- CTA: #10B981 (에메랄드), #C8A96E (골드)

## 변경 후 검증 규칙
- **코드 수정 후 반드시 브라우저에서 동작을 확인**한 뒤 사용자에게 알린다
- 검증 방법: `curl`로 HTML 응답 확인, 또는 실제 렌더링 관련 요소(클래스, 속성, 링크 등) grep으로 검증
- 테스트가 통과되지 않으면 원인을 파악하고 수정한 후 재검증한다
- 검증 없이 "완료"라고 보고하지 않는다

## 주의사항
- 전화번호: 010-9815-3017
- 예약 링크: https://rcl.ink/yZR4y
- 카카오톡 채널: https://pf.kakao.com/_Axmxdzs/chat
- 결제 링크: https://spaceicowork.cafe24.com/order/orderform.html?basket_type=A0000&delvtype=A
