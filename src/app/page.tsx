import { headers } from "next/headers";

export default async function Home() {
  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const protocol = headersList.get("x-forwarded-proto") || "http";

  const kakaoAuthUrl = new URL("https://kauth.kakao.com/oauth/authorize");
  kakaoAuthUrl.searchParams.set("client_id", `${process.env.KAKAO_CLIENT_ID}`);
  kakaoAuthUrl.searchParams.set("redirect_uri", `${protocol}://${host}/auth/kakao/callback`);
  kakaoAuthUrl.searchParams.set("response_type", "code");

  return (
    <main>
      <a href={kakaoAuthUrl.toString()}>카카오 로그인</a>
    </main>
  );
}
