export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <h1>Layout Wrap</h1>
            {children}
        </section>
    );
}