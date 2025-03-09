export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="flex flex-col w-full">
            {children}
        </section>
    );
}