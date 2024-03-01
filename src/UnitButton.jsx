export default function UnitButton({unit, onUnitClick}) {
  return (
    <button className="bg-green-100 px-4" onClick={onUnitClick}>
      {unit}
    </button>
  );
}