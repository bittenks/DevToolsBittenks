import React from "react"

export default function Footer() {
  return (
    <>
    <div className="mt-56">
      <footer className="fixed mt-56 bottom-0 w-full text-slate-400">
        <div className="py-4 text-sm border-t border-slate-900 bg-slate-700">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-2 md:col-span-4 lg:col-span-6">
                Guilherme Bittencourt Corrêa
              </div>
              <nav
                aria-labelledby="footer-social-links-dark"
                className="col-span-2 text-right md:col-span-4 lg:col-span-6"
              >
                <h2 className="sr-only" id="footer-social-links-dark">
                  Social Media Links
                </h2>
                <ul className="flex items-center justify-end gap-4">
                  <li>
                    <a
                      href="https://github.com/bittenks"
                      className="transition-colors duration-300 hover:text-emerald-500"
                    >
                        Github
                    </a>
                </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      </div></>
  )
}
