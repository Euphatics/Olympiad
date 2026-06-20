/**
 * Card
 * A simple wrapper that provides a consistent bordered container.
 *
 * Props:
 *   className – additional Tailwind classes (e.g. "p-5", "mt-4")
 *   children  – card content
 *
 * Example:
 *   <Card className="p-5">
 *     <p>Content here</p>
 *   </Card>
 */
export default function Card({ className = '', children }) {
  return (
    <div className={`border border-gray-300 rounded-sm ${className}`.trim()}>
      {children}
    </div>
  );
}
