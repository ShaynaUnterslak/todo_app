export default function SortControls({
  action,
  sortBy,
  direction,
}) {
  return (
    <form
      action={action}
      method="get"
      className="sort-controls"
    >
      <div className="sort-field">
        <label htmlFor={`sort-${action}`}>
          Sort by
        </label>

        <select
          id={`sort-${action}`}
          name="sort"
          defaultValue={sortBy}
        >
          <option value="dueDate">Due date</option>
          <option value="topic">Topic</option>
          <option value="status">Status</option>
        </select>
      </div>

      <div className="sort-field">
        <label htmlFor={`direction-${action}`}>
          Direction
        </label>

        <select
          id={`direction-${action}`}
          name="direction"
          defaultValue={direction}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <button type="submit" className="sort-button">
        Apply sorting
      </button>
    </form>
  );
}