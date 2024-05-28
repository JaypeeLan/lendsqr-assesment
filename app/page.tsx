import { CustomButton, Input } from "@/components";
import Image from "next/image";

export default function Auth() {
  return (
    <main className="auth-page">
      {/* left side */}
      <div>
        <a href="/" className="logo auth-logo">
          <Image src="/imgs/logo.svg" alt="logo" width={173.76} height={36} />
        </a>

        {/* image */}
        <Image src="/imgs/sign-in.png" alt="logo" width={600} height={337} />
      </div>

      {/* right side */}
      <div>
        <div>
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>

          <form>
            <Input type="email" placeholder="Email" />
            <Input
              type="password"
              placeholder="Password"
              rightIcon={<p className="password-icon">show</p>}
            />
            <span>forgot password?</span>
            <CustomButton type="submit" size="xs" className="full-btn">
              LOG IN
            </CustomButton>
          </form>
        </div>
      </div>
    </main>
  );
}
