export default function VerticalContainer({ children, className = '' }) {
  return <section className={`py-16 ${className}`}>{children}</section>
}
