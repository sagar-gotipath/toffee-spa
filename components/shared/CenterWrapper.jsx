export default function CenterWrapper({ children, className = '' }) {
  return <section className={`w-full max-w-screen-xl px-4 mx-auto sm:px-6 md:px-12 ${className}`}>{children}</section>
}
