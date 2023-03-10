interface IProps {
  onSearch(val: string): void;
  length?: number;
}
export default function Search({ onSearch, length }: IProps) {
  return (
    <div className="flex">
      {!!length && (
        <div className="badge mr-10">
          <p>{length}</p>
        </div>
      )}
      <input
        type="text"
        placeholder="Filter podcasts..."
        className="w-full"
        onChange={({ target }) => onSearch(target.value)}
      />
    </div>
  );
}
