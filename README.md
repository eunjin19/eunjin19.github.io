# 🌟 Eunjin's Portfolio

개인 포트폴리오 사이트입니다. GitHub Pages를 통해 호스팅됩니다.

**🔗 [라이브 사이트](https://eunjin19.github.io)**

## 📋 소개

이것은 simplefolio 스타일로 디자인된 현대적이고 반응형 포트폴리오 사이트입니다.

## 🛠️ 기술 스택

- **HTML5** - 마크업
- **CSS3** - 스타일링 (변수, Flexbox, Grid)
- **Vanilla JavaScript** - 인터랙션
- **GitHub Pages** - 호스팅

## ✨ 기능

- ✅ 완전 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 다크 모드 지원 (시스템 설정 기반)
- ✅ 부드러운 스크롤 및 애니메이션
- ✅ SEO 최적화
- ✅ 접근성(Accessibility) 고려

## 📁 폴더 구조

```
eunjin19.github.io/
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 스타일시트
├── js/
│   └── script.js       # 자바스크립트
├── assets/             # 이미지 등 (필요시)
├── README.md           # 이 파일
└── .gitignore
```

## 🚀 로컬 개발

### 방법 1: Python 내장 서버
```bash
cd eunjin19.github.io
python -m http.server 8000
# http://localhost:8000 에서 확인
```

### 방법 2: Node.js http-server
```bash
npm install -g http-server
http-server
# http://localhost:8080 에서 확인
```

### 방법 3: Live Server (VS Code)
VS Code의 **Live Server** 확장을 사용하여 `index.html`을 실행합니다.

## 📝 커스터마이징

### 개인 정보 수정

`index.html`에서 다음 부분을 수정하세요:

1. **소개 섹션** (약 45줄)
   ```html
   <p class="hero-description">
     여기를 수정하세요
   </p>
   ```

2. **기술 스택** (약 98줄)
   - 원하는 기술 추가/삭제

3. **프로젝트** (약 115줄)
   - 프로젝트 정보 수정
   - GitHub 링크, 라이브 데모 링크 변경

4. **연락처** (약 180줄)
   - 이메일, GitHub, LinkedIn 링크 수정

### 색상 변경

`css/style.css`의 루트 변수를 수정하세요:

```css
:root {
  --primary-color: #2c3e50;      /* 메인 텍스트 색상 */
  --secondary-color: #3498db;    /* 강조 색상 */
  --bg-color: #fff;              /* 배경색 */
  --bg-light: #f8f9fa;           /* 라이트 배경색 */
}
```

## 🌐 GitHub Pages 배포

### 1단계: GitHub 저장소 생성

GitHub에서 `eunjin19.github.io` 이름의 public 저장소를 생성합니다.

### 2단계: 로컬 저장소에 원격 추가

```bash
cd eunjin19.github.io
git remote add origin https://github.com/eunjin19/eunjin19.github.io.git
```

### 3단계: 커밋 및 푸시

```bash
git add .
git commit -m "Initial commit: Create portfolio"
git branch -M main
git push -u origin main
```

### 4단계: GitHub Pages 활성화

1. GitHub 저장소 설정 → **Pages**로 이동
2. Source: `main` 브랜치 선택
3. **Save** 클릭

약 2-3분 후 `https://eunjin19.github.io`에서 사이트를 볼 수 있습니다.

## 📱 반응형 테스트

브라우저 개발자 도구(F12)에서:
- iPhone/iPad: 각 기기 크기 확인
- 태블릿: 768px 기준점
- 데스크톱: 1200px 이상

## 🎨 라이트/다크 모드

사이트는 시스템의 color-scheme 설정을 따릅니다:

**Windows**
- 설정 → 개인 설정 → 색 → 밝음/어두움 변경

**macOS**
- 시스템 환경설정 → 일반 → 모양 변경

## 📊 성능 최적화

- 최소 CSS/JS로 빠른 로딩
- 이미지 최적화 권장 (WebP 포맷)
- 캐싱 헤더 설정 (GitHub Pages 자동)

## 🔍 SEO

다음 메타 태그를 `index.html`에서 수정하세요:

```html
<meta name="description" content="본인 소개 한 줄 설명">
<title>이름 - 직책</title>
```

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

## 🤝 피드백

개선 사항이나 버그 리포트는 [Issues](https://github.com/eunjin19/eunjin19.github.io/issues)로 부탁드립니다.

---

**마지막 업데이트**: 2026년 7월 29일  
**버전**: 1.0.0
