import { useState, type FC } from "react";
import BpmConverter from "~util/music-theory/BpmConverter";
import {
  musicSymbolist,
  type MusicSymbol,
} from "~util/music-theory/musicSymbolsList";

const converter = new BpmConverter();
const symbolMap: Record<number, string> = {
  1: musicSymbolist.whole_note.htmlDecCode,
  2: musicSymbolist.half_note.htmlDecCode,
  4: musicSymbolist.quarter_note.htmlDecCode,
  8: musicSymbolist.eighth_note.htmlDecCode,
  16: musicSymbolist.sixteenth_note.htmlDecCode,
  32: musicSymbolist.thirty_second_note.htmlDecCode,
  64: musicSymbolist.sixty_fourth_note.htmlDecCode,
  128: musicSymbolist.one_hundred_twenty_eighth_note.htmlDecCode,
};
const tdClassName =
  "px-4 py-3 text-gray-900 bg-gray-200 first:rounded-t-lg last:rounded-b-lg sm:first:rounded-t-none sm:last:rounded-b-none sm:first:rounded-tl-lg sm:first:rounded-bl-lg sm:last:rounded-tr-lg sm:last:rounded-br-lg";
const trClassName = "flex flex-col mb-4 sm:table-row";
const suspendedText = "text.gray-500";
export const BpmList = () => {
  const [bpm, setBpm] = useState<number>(60);
  const [list, setList] = useState(converter.getValueList(bpm));

  const handleChange = (e) => {
    const nV = Number(e.target.value);
    console.log(nV);
    if (!isNaN(nV)) {
      setBpm(nV);
      setList(converter.getValueList(nV));
    }
  };
  console.log(list);
  //layout form https://play.tailwindcss.com/75495oZnND see https://dev.to/mmcclure11/mobile-responsive-table-with-tailwindcss-57db
  return (
    <div className="ml-4 flex items-center sm:ml-0 sm:justify-center">
      <input
        value={bpm}
        placeholder="bpm"
        className="border-2 border-gnutrast p-2"
        type="number"
        onChange={handleChange}
      ></input>
      <table className="border-separate border-spacing-y-2 text-sm">
        <thead className="">
          <tr>
            <th>Note length</th>
            <th>Symbol</th>
            <th>MS</th>
            <th>Dotted ms</th>
            <th>Triplet ms</th>
          </tr>
        </thead>
        <tbody>
          {list.map((n) => (
            <tr className={trClassName}>
              <td className={tdClassName}>
                <span>1/{n.barFraction}</span>
              </td>
              <td className={tdClassName}>
                <span
                  dangerouslySetInnerHTML={{ __html: symbolMap[n.barFraction] }}
                />
              </td>
              <td className={tdClassName}>
                <Ms ms={n.ms} />
              </td>
              <td className={tdClassName}>
                Dotted
                <Ms ms={n.dottedValueInMs} />
              </td>
              <td className={tdClassName}>
                Triplet
                <Ms ms={n.tripletValueInMs} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Ms: FC<{ ms: number }> = ({ ms = 0 }) => (
  <span>{Math.round(ms * 100) / 100}</span>
);

// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";

//   <td className="table-row sm:table-cell ">
