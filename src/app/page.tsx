import styles from "./page.module.scss";

export default async function Home() {
  const kakaoAuthUrl = `${process.env.NEXT_PUBLIC_API_URL}/oauth2/authorization/kakao`;

  return (
    <main className={styles.page}>
      <div className={styles.navWrap}>
        <nav className={styles.nav}>
          <a className={styles.brand} href="#top">
            <span className={styles.brandMark}>Pretty Good Org</span>
            <span className={styles.brandName}>Pluto Surface</span>
          </a>
          <div className={styles.navLinks}>
            <a href="#product">Product</a>
            <a href="#workflow">Workflow</a>
            <a href="#access">Access</a>
          </div>
          <a className={styles.navCta} href={kakaoAuthUrl.toString()}>
            Kakao Login
          </a>
        </nav>
      </div>

      <section className={styles.heroSection} id="top">
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Warm minimalism for auth-first product surfaces</span>
          <h1 className={styles.heroTitle}>카카오 로그인 시작점을 제품처럼 다듬은 첫 화면</h1>
          <p className={styles.heroBody}>
            Pluto Surface는 단순한 로그인 링크 대신, 브랜드의 결을 가진 진입면을
            제공합니다. DESIGN.md의 크림 톤, 압축된 헤드라인, 에디토리얼 본문, 그리고
            코드 에디터 감성을 한 화면 안에 정리했습니다.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href={kakaoAuthUrl.toString()}>
              카카오로 계속하기
            </a>
            <a className={styles.secondaryButton} href="#workflow">
              디자인 시스템 보기
            </a>
          </div>
          <div className={styles.heroMeta}>
            <article className={styles.statCard}>
              <p className={styles.statLabel}>Palette</p>
              <p className={styles.statValue}>Warm cream, brown ink, orange accent</p>
            </article>
            <article className={styles.statCard}>
              <p className={styles.statLabel}>Type System</p>
              <p className={styles.statValue}>Display, serif, mono의 세 가지 목소리</p>
            </article>
          </div>
        </div>

        <aside className={styles.heroPanel} id="workflow">
          <div className={styles.panelHeader}>
            <div>
              <h2 className={styles.panelTitle}>Authentication timeline</h2>
              <p className={styles.panelCaption}>
                Cursor-inspired timeline metaphor를 로그인 플로우에 맞게 재해석했습니다.
              </p>
            </div>
            <span className={styles.status}>Ready</span>
          </div>

          <div className={styles.timeline}>
            <article className={`${styles.timelineItem} ${styles.thinking}`}>
              <span className={styles.timelineDot} />
              <div>
                <h3>Thinking</h3>
                <p>브랜드 톤과 로그인 목적을 한 줄 메시지로 압축합니다.</p>
              </div>
            </article>
            <article className={`${styles.timelineItem} ${styles.grep}`}>
              <span className={styles.timelineDot} />
              <div>
                <h3>Grep</h3>
                <p>현재 호스트와 프로토콜을 읽어 안전한 콜백 URL을 조합합니다.</p>
              </div>
            </article>
            <article className={`${styles.timelineItem} ${styles.read}`}>
              <span className={styles.timelineDot} />
              <div>
                <h3>Read</h3>
                <p>사용자는 화면에서 로그인 흐름과 제품 컨텍스트를 바로 이해합니다.</p>
              </div>
            </article>
            <article className={`${styles.timelineItem} ${styles.edit}`}>
              <span className={styles.timelineDot} />
              <div>
                <h3>Edit</h3>
                <p>콜백 화면에서도 같은 토큰과 레이아웃 언어를 유지합니다.</p>
              </div>
            </article>
          </div>

          <div className={styles.codeBlock}>
            <p className={styles.codeHeader}>oauth.ts</p>
            <div className={styles.codeRow}>
              <span className={styles.lineNumber}>01</span>
              <p>
                <span className={styles.tokenAccent}>const</span> redirectUri ={" "}
                <span className={styles.tokenSoft}>`{kakaoAuthUrl}`</span>
              </p>
            </div>
            <div className={styles.codeRow}>
              <span className={styles.lineNumber}>02</span>
              <p>
                <span className={styles.tokenAccent}>url.searchParams.set</span>(
                <span className={styles.tokenWarm}>"response_type"</span>,{" "}
                <span className={styles.tokenSuccess}>"code"</span>)
              </p>
            </div>
            <div className={styles.codeRow}>
              <span className={styles.lineNumber}>03</span>
              <p>
                <span className={styles.tokenAccent}>return</span>{" "}
                <span className={styles.tokenSoft}>kakaoAuthUrl.toString()</span>
              </p>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.storySection} id="product">
        <p className={styles.storyLead}>
          따뜻한 종이 질감의 배경, 정교하게 눌린 디스플레이 타이포, 그리고 부드러운
          SCSS 토큰 레이어로 로그인 페이지를 제품 표면으로 끌어올렸습니다.
        </p>
        <aside className={styles.storyAside}>
          <h2>Why this direction</h2>
          <p>
            기본 Next.js 보일러플레이트를 제거하고, DESIGN.md의 핵심인 warm off-white
            palette, strong-but-soft borders, atmospheric shadow, pill patterns를 전체
            페이지에 일관되게 배치했습니다.
          </p>
        </aside>
      </section>

      <section className={styles.gridSection} id="access">
        <article className={styles.featureCard}>
          <span className={styles.featurePill}>
            <span className={`${styles.pillDot} ${styles.thinking}`} />
            Editorial hero
          </span>
          <h2>히어로는 브랜드 소개와 액션을 동시에 처리합니다</h2>
          <p>
            72px 계열의 압축된 디스플레이 타이포와 세리프 바디 카피를 조합해 첫
            스크롤에서 성격과 목적을 모두 전달합니다.
          </p>
        </article>

        <article className={styles.featureCard}>
          <span className={styles.featurePill}>
            <span className={`${styles.pillDot} ${styles.grep}`} />
            SCSS tokens
          </span>
          <h2>토큰과 믹스인으로 표면 언어를 재사용합니다</h2>
          <p>
            색상, 그림자, 라운드, 버튼, 카드 패턴을 SCSS에 분리해 이후 페이지 확장이
            쉬운 구조로 바꿨습니다.
          </p>
        </article>

        <article className={styles.featureCard}>
          <span className={styles.featurePill}>
            <span className={`${styles.pillDot} ${styles.read}`} />
            Responsive surface
          </span>
          <h2>모바일에서는 한 열로, 데스크톱에서는 에디토리얼 그리드로 전개됩니다</h2>
          <p>
            600px, 900px, 1280px 기준으로 카드, 내비게이션, 히어로 패널 구성을
            자연스럽게 재배치합니다.
          </p>
        </article>

        <article className={styles.featureCard}>
          <span className={styles.featurePill}>
            <span className={`${styles.pillDot} ${styles.edit}`} />
            Callback continuity
          </span>
          <h2>인증 이후 화면도 같은 디자인 문법으로 이어집니다</h2>
          <p>
            OAuth 콜백 페이지에 동일한 컬러와 타입 시스템을 적용해 플로우가 끊기지
            않도록 했습니다.
          </p>
        </article>

        <article className={styles.featureCard}>
          <span className={styles.featurePill}>
            <span className={`${styles.pillDot} ${styles.grep}`} />
            Design pillars
          </span>
          <h2>핵심 원칙</h2>
          <ul className={styles.pillars}>
            <li>Warm cream background with subtle tonal depth</li>
            <li>Compressed display headlines with generous whitespace</li>
            <li>Mono-coded technical panel to anchor the product feel</li>
          </ul>
        </article>

        <article className={styles.featureCard}>
          <span className={styles.featurePill}>
            <span className={`${styles.pillDot} ${styles.read}`} />
            OAuth ready
          </span>
          <h2>실제 카카오 인증 링크를 그대로 사용합니다</h2>
          <p>
            현재 요청의 host와 x-forwarded-proto 값을 읽어 배포 환경에서도 동작하는
            redirect URI를 생성합니다.
          </p>
        </article>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCopy}>
          <h2>로그인 진입점도 제품의 일부여야 합니다</h2>
          <p>
            지금 화면은 단순 랜딩이 아니라 인증을 시작하는 인터페이스입니다. 사용자는
            어디로 이동하는지, 왜 이 페이지가 있는지, 무엇을 기대해야 하는지 즉시
            이해할 수 있어야 합니다.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a className={styles.primaryButton} href={kakaoAuthUrl.toString()}>
            카카오 인증 시작
          </a>
          <a className={styles.secondaryButton} href="#top">
            맨 위로
          </a>
        </div>
      </section>
    </main>
  );
}
