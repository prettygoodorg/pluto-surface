import styles from "@/app/page.module.scss";

interface PageProps {
  searchParams: Promise<{ code?: string; error?: string; error_description?: string }>;
}

export default async function KakaoCallbackPage({ searchParams }: PageProps) {
  const { code, error, error_description } = await searchParams;

  return (
    <main className={styles.callbackPage}>
      <section className={styles.callbackCard}>
        <span className={styles.eyebrow}>Kakao OAuth callback</span>
        <h1 className={styles.callbackTitle}>
          {error ? "인증 중 오류가 발생했습니다" : "카카오 인증 코드를 수신했습니다"}
        </h1>
        <p className={styles.callbackBody}>
          {error
            ? "카카오에서 인증을 완료하지 못했습니다. 에러 내용을 확인한 뒤 다시 시도할 수 있습니다."
            : "인가 코드를 정상적으로 전달받았습니다. 다음 단계에서 토큰 교환 또는 세션 생성 로직으로 연결하면 됩니다."}
        </p>

        {error ? (
          <p className={styles.callbackError}>
            {error}
            {error_description ? `: ${error_description}` : ""}
          </p>
        ) : (
          <pre className={styles.callbackCode}>{code ?? "No authorization code received."}</pre>
        )}

        <div className={styles.callbackActions}>
          <a className={styles.primaryButton} href="/">
            홈으로 돌아가기
          </a>
          <a className={styles.secondaryButton} href="https://developers.kakao.com/">
            Kakao Developers
          </a>
        </div>
      </section>
    </main>
  );
}
