# GEMINI.md - pluto-surface 프로젝트 컨텍스트

이 프로젝트는 **Next.js**(App Router)와 **React 19**로 구축된 현대적인 웹 애플리케이션입니다. 특히 카카오 로그인을 주요 인증 수단으로 사용하는 인증 통합 기능을 포함하고 있습니다.

## 프로젝트 개요
- **핵심 프레임워크**: Next.js 16.2.3 (App Router)
- **라이브러리**: React 19.2.4
- **언어**: TypeScript 5+
- **도구**: Biome (린터 및 포맷터)
- **인증 기능**: 카카오 OAuth 통합 (`/auth/kakao/callback`에서 콜백 처리)
- **구조**: `src/app` 아키텍처 및 중앙 집중식 설정 적용.

## 빌드 및 실행
프로젝트는 스크립트 실행을 위해 `npm` 또는 `pnpm`을 사용합니다.

| 명령어 | 목적 |
| :--- | :--- |
| `npm run dev` | 개발 서버를 시작합니다. |
| `npm run build` | 프로덕션용 애플리케이션을 빌드합니다. |
| `npm run start` | 빌드 후 프로덕션 서버를 시작합니다. |
| `npm run lint` | Biome을 사용하여 린트 에러 및 타입 이슈를 체크합니다. |
| `npm run format` | Biome을 사용하여 코드 포맷을 맞춥니다. |

## 개발 컨벤션
- **코드 스타일**: 린트와 포맷팅 모두 **Biome**을 사용합니다. 들여쓰기는 **공백 2칸**입니다.
- **타입 안정성**: TypeScript 사용이 엄격히 권장됩니다. 새로운 컴포넌트와 훅에는 반드시 타입을 정의하세요.
- **경로 별칭(Path Aliases)**: `src/` 디렉토리 기준의 임포트는 `@/*`를 사용하세요 (예: `import { Button } from "@/components/Button"`).
- **환경 변수**: 인증에 필요한 키는 `.env.example`에 정의되어 있습니다:
  - `KAKAO_CLIENT_ID`
  - `KAKAO_REDIRECT_URI`
- **아키텍처**:
  - `src/app`: 페이지 컴포넌트 및 라우팅.
  - `public/`: 정적 에셋.
  - `biome.json`: 린터 및 포맷터 규칙 설정.

## 주요 파일
- `src/app/page.tsx`: 카카오 로그인 진입점이 있는 메인 페이지.
- `src/app/auth/kakao/callback/page.tsx`: 카카오 OAuth 콜백을 처리하는 페이지.
- `next.config.ts`: Next.js 설정 파일.
- `package.json`: 의존성 및 스크립트 관리.
- `biome.json`: Biome 설정 (ESLint/Prettier 대체).

---
*2026-04-19, Gemini CLI에 의해 생성됨.*
