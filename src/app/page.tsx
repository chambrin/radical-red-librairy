import Image from "next/image";
import SceneGameboy from "@/components/page/landing/3d";
import Link from "next/link";


export default function Home() {
  return (
      <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-8 px-4 md:px-6 lg:gap-12 lg:grid-cols-2">
              <div className="space-y-4 md:space-y-6 lg:space-y-8">
                  <div className="space-y-2">
                      <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                          The future of frontend development is here
                      </h1>
                      <p className="text-gray-500 dark:text-gray-400">Introducing Shadcn v1.0</p>
                  </div>
                  <div className="space-y-2 md:space-y-4">
                      <p className="text-xl font-semibold md:text-2xl">Delivering the power of the cloud to the edge</p>
                      <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
                          Shadcn is the future of frontend development. With instant deploys, built-in API support, and
                          edge
                          functions, you can bring your creativity to life without worrying about infrastructure.
                      </p>
                  </div>
                  <div className="space-x-4">
                      <Link
                          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                          href="#"
                      >
                          Get Started
                      </Link>
                  </div>
              </div>
              <div className="flex items-center">
                <SceneGameboy  />
              </div>
          </div>
      </section>
  );
}
