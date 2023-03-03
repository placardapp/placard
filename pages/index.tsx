import Head from "next/head"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Layout } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Placard</title>
        <meta
          name="description"
          content="Design your digital contact card in seconds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/placard.png" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Design a digital contact card for <br className="hidden sm:inline" />
            you or your business in seconds.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Upload a picture, write a quick bio, choose your colors, and you&apos;re done.
            Free and open source, <span className="underline">forever</span>.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.designer}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" }) + " shadow-md shadow-gray-500 hover:shadow-slate-700 focus:shadow-slate-700"}
          >
            Design Yours -&gt;
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.donate}
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            Donate
          </Link>
        </div>
      </section>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-medium leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Dress to impress.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Most aspects of a Placard are customizable,<br className="hidden sm:inline"/>
            so you can show the most fitting version of you.
          </p>
        </div>
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-medium leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Stay visible.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Placards are stored on the server for 90 days after their last visit,<br className="hidden sm:inline"/>
            meaning that as long as it gets viewed, it&apos;ll stay up.
          </p>
        </div>
      </section>
    </Layout>
  )
}
