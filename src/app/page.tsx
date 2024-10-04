import Pagination from "./components/pagination";

export default function Home() {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="flex flex-col gap-2">
      <Pagination count={1} page={1} />
      <Pagination count={10} page={5} />
      <Pagination count={9} page={9} />
    </div>
  );
}
