export default function UnitButton({unit, onUnitClick}) {
  return (
    <button className="bg-blue-100 px-4 rounded-xl bg-blue mx-2" onClick={onUnitClick}>
      {unit}
    </button>
  );
}