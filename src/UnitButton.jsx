export default function UnitButton({unit, onUnitClick}) {
  return (
    <button className="bg-green-100" onClick={onUnitClick}>
      {unit}
    </button>
  );
}