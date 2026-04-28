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

## 주의사항
- 이미지는 현재 placeholder (그라디언트) → 실제 사진으로 교체 필요
- 전화번호(02-000-0000), 이메일, 카카오톡 링크 실제 값으로 교체 필요
- 지도 임베드 좌표 정확한 값으로 교체 필요
