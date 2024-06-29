import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-amarelo1">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20 lg:px-8 lg:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <Image
              width={50}
              height={50}
              src="/assets/logo.png"
              alt="Company name"
            />
            <p className="text-lg leading-6 text-preto">
              {t("common:footerSlogan")}
            </p>
            <div className="flex space-x-6">
              {/* <a href="#" className="text-preto hover:text-branco duration-500 transition ease-in-out">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-preto hover:text-branco duration-500 transition ease-in-out">
                <span className="sr-only">X</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                  <path d="M2.75 2a.75.75 0 0 0-.75.75v10.5a.75.75 0 0 0 1.5 0v-2.624l.33-.083A6.044 6.044 0 0 1 8 11c1.29.645 2.77.807 4.17.457l1.48-.37a.462.462 0 0 0 .35-.448V3.56a.438.438 0 0 0-.544-.425l-1.287.322C10.77 3.808 9.291 3.646 8 3a6.045 6.045 0 0 0-4.17-.457l-.34.085A.75.75 0 0 0 2.75 2Z" />
                </svg>
              </a> */}
              <a
                href="#"
                className="text-preto hover:text-branco duration-500 transition ease-in-out"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-preto hover:text-branco duration-500 transition ease-in-out"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {/* <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-preto">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Marketing</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Analytics</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Commerce</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Insights</a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 text-preto">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Pricing</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Documentation</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Guides</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">API Status</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold leading-6 text-preto">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Blog</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Jobs</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Press</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Partners</a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold leading-6 text-preto">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Claim</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Privacy</a>
                  </li>
                  <li>
                    <a href="#" className="text-lg leading-6 text-preto hover:text-branco duration-500 transition ease-in-out">Terms</a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
        <div className="mt-16 border-t border-preto/50 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-md leading-5 text-preto">{t("footerDireitos")}</p>
        </div>
      </div>
    </footer>
  );
}
