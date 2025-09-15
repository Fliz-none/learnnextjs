export default function Container({
    children,
    className = "",
}: React.PropsWithChildren<{ className?: string }>) {
    return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}
