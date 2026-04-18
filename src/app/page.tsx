export default function Home() {
  const kakaoAuthUrl = new URL("https://kauth.kakao.com/oauth/authorize");
  kakaoAuthUrl.searchParams.set("client_id", `${process.env.KAKAO_CLIENT_ID}`);
  kakaoAuthUrl.searchParams.set("redirect_uri", `${process.env.KAKAO_REDIRECT_URI}`);
  kakaoAuthUrl.searchParams.set("response_type", "code");

  return (
    <main>
      <a href={kakaoAuthUrl.toString()}>카카오 로그인</a>
    </main>
  );
}
