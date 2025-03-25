export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
                <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                    <div className="space-y-6">{children}</div>
                </div>
            </div>
        </div>
    );
}
