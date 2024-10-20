import { Card } from "./Card";

interface Props {
  list: number[];
}

export const List = ({list}: Props) => {
  return (
    <div className="list">
      {list.map((item) => (
        <Card key={item} />
      ))}
    </div>
  );
};
