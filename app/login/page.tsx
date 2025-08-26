import AcmeLogo from "@/app/ui/acme-logo";
import LoginForm from "@/app/ui/login-form";
import { Suspense } from "react";
import { lusitana } from "../ui/fonts";

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <section className="flex flex-col gap-2 ">
          <h3 className={`${lusitana.className} text-2xl font-semibold`}>
            Try it out
          </h3>
          <div className="flex flex-col ">
            <p className="text-sm text-gray-500">
              Email: <span>user@nextmail.com</span>
            </p>
            <p className="text-sm text-gray-500">
              Password: <span>123456</span>
            </p>
          </div>
        </section>
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <AcmeLogo />
          </div>
        </div>
        <Suspense>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}
