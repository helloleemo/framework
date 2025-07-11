import type { ItemList } from './Types/itemList';
import DragAndDrop from './function/drag-and-drop';

const itemList: ItemList = [
  { id: 1, name: 'Drag and drop' },
  { id: 2, name: 'Flow' },
  { id: 3, name: 'Data display' },
  { id: 4, name: 'Export' },
  { id: 5, name: 'Item 5' },
];

function ListItem({ item }: { item: string }) {
  return (
    <li
      style={{ cursor: 'pointer' }}
      className=" text-sm text-slate-600  p-3 border-b  border-slate-300 hover:bg-slate-100"
    >
      {item}
    </li>
  );
}

export default function TestLayout() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-slate-400 text-white p-4">
        <h1 className="text-base font-bold">Function Testing with Appsmith</h1>
      </header>
      <main className="flex-1 p-0">
        <div className="grid-cols-8 grid">
          <div className="col-span-2 h-full border-r border-slate-300">
            <ul className="list-none p-0 m-0">
              {itemList.map((item) => (
                <ListItem key={item.id} item={item.name} />
              ))}
            </ul>
          </div>
          <div className="col-span-6">
            <div>
              <DragAndDrop />
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-700 text-white p-3"></footer>
    </div>
  );
}
