# CodeBridgeAI

코드와 사람을 잇는 다리 역할을 하는 기업으로, 코딩 교육, LMS, 디지털사이니지, AI 솔루션 개발을 통해 지식과 기술을 연결합니다.

## 🚀 프로젝트 소개

CodeBridgeAI는 다음과 같은 서비스를 제공합니다:

- **코딩 교육 플랫폼**: 블록 코딩부터 텍스트 코딩까지, 누구나 쉽게 프로그래밍을 배울 수 있습니다.
- **학습관리시스템(LMS)**: 강의를 보면서 실시간으로 코딩도 함께 할 수 있고, AI로 바로 피드백까지 받을 수 있는 New generation LMS를 서비스합니다.
- **디지털사이니지 솔루션**: 클라우드 기반 중앙 집중식 콘텐츠 관리로 효율적인 디지털 마케팅을 구현합니다.
- **AI 솔루션 개발**: 기업과 조직의 디지털 전환(DX)을 위한 맞춤형 AI 솔루션을 개발합니다.

## 🛠️ 기술 스택

- **프레임워크**: [Astro](https://astro.build/)
- **스타일링**: [Tailwind CSS](https://tailwindcss.com/)
- **컴포넌트**: [Astrowind](https://astrowind.vercel.app/)
- **배포**: Docker + Nginx

## 📦 설치 및 실행

### 방법 1: Docker 사용 (권장)

#### Docker Compose 사용
```bash
# 빌드 및 실행
npm run build
docker-compose up --build

# 백그라운드 실행
docker-compose up -d --build

# 중지
docker-compose down
```

#### 자동화 스크립트 사용
```bash
# 스크립트 실행 권한 부여
chmod +x build-and-deploy.sh

# 빌드 및 배포 실행
./build-and-deploy.sh
```

#### Docker 직접 사용
```bash
# 이미지 빌드
docker build -t codebridgeai .

# 컨테이너 실행
docker run -p 5000:5000 codebridgeai
```

### 방법 2: 로컬 개발 환경

#### 필수 요구사항
- Node.js 18 이상
- npm 또는 yarn

#### 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드된 파일 미리보기
npm run preview
```

## 🌐 접속 방법

개발 환경에서 실행한 경우:
- **로컬**: http://localhost:4321
- **Docker**: http://localhost:5000

## 📁 프로젝트 구조

```
codebridgeai/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── widgets/        # 페이지 위젯 컴포넌트
│   │   └── ui/            # UI 컴포넌트
│   ├── layouts/           # 페이지 레이아웃
│   ├── pages/             # 페이지 파일들
│   └── assets/            # 이미지, 폰트 등 정적 파일
├── public/                # 정적 파일 (빌드 시 그대로 복사)
│   └── assets/
│       ├── images/        # 이미지 파일들
│       └── fonts/         # 폰트 파일들
├── Dockerfile             # Docker 빌드 설정
├── docker-compose.yml     # Docker Compose 설정
├── build-and-deploy.sh    # 자동화 배포 스크립트
└── package.json
```

## 🔧 주요 기능

### 1. 반응형 디자인
- 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 UI

### 2. 다크 모드 지원
- 사용자 선호도에 따른 테마 전환 기능

### 3. SEO 최적화
- 메타 태그, 구조화된 데이터, 사이트맵 자동 생성

### 4. 성능 최적화
- 이미지 최적화, 코드 스플리팅, 지연 로딩

## 🎨 브랜드 철학

### 상징의 의미 - <> 심볼이 담은 새로운 세계
로고의 <> 심볼은 코드의 시작과 끝, 그리고 새로운 세계로의 진입을 상징합니다. 이 기호가 다리(Bridge)를 이루며 만들어내는 공간은 현재와 미래를 이어가는 연결을 표현하며, 무한한 가능성의 문을 열어줍니다.

### 컬러의 가치 - 신뢰와 창의성의 조화
깊은 블루의 신뢰성, 하늘빛의 확장성, 옐로우의 창의성을 담은 우리의 컬러 팔레트는 정교한 기술력과 따뜻한 교육적 가치가 공존하는 기업의 정체성을 보여줍니다.

### 미래로의 여정 - 학습과 기술 기반의 혁신
CodeBridgeAI는 끊임없는 학습과 첨단 기술을 바탕으로 개인과 조직, 그리고 사회 전체를 미래로 이끄는 든든한 다리 역할을 합니다.

## 📞 연락처

- **웹사이트**: [https://codebridge.ai](https://codebridge.ai)
- **교육 플랫폼**: [https://lms.codebridge.ai.kr](https://lms.codebridge.ai.kr)
- **비즈니스 문의**: [카카오톡 채널](https://pf.kakao.com/_aEFxnn)

## 📄 라이선스

이 프로젝트는 CodeBridgeAI의 내부 프로젝트입니다.

---

**CodeBridgeAI** - 코드와 사람을 잇는 다리
