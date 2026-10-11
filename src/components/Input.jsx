export default function Input({ label, id, ...props }) {
  return (
    <label className="input-field" htmlFor={id}>
      {label && <span className="input-label">{label}</span>}
      <input id={id} className="input" {...props} />
    </label>
  );
}
