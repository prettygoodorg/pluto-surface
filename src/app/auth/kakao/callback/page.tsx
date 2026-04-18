interface PageProps {
  searchParams: Promise<{ code?: string; error?: string; error_description?: string }>;
}

export default async function KakaoCallbackPage({ searchParams }: PageProps) {
  const { code, error, error_description } = await searchParams;

  if (error) {
    return (
      <main>
        <p>오류: {error}</p>
        <p>{error_description}</p>
      </main>
    );
  }

  return (
    <main>
      <p>authorization code:</p>
      <pre>{code}</pre>
    </main>
  );
}
