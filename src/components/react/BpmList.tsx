import { useState, type FC, type ReactNode } from "react";
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
const cellClasses = "border border-slate-300 text-left p-2 bg-slate-100";
const copyToClipBoard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
    return true;
  } catch (err) {
    console.error("Failed to copy: ", err);
    return false;
  }
};
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

  const copy = async (t: number) => {
    const success = await copyToClipBoard(t);
    success && alert(`${t} copied to clipboard`);
  };
  //layout form https://play.tailwindcss.com/75495oZnND see https://dev.to/mmcclure11/mobile-responsive-table-with-tailwindcss-57db
  return (
    <div className="flex w-full flex-col">
      <input
        value={bpm}
        placeholder="bpm"
        className="mb-4 w-full gap-y-4 rounded-md border-2 border-gnutrast p-2 outline-2 outline-offset-2 outline-gnutrast-light"
        type="number"
        onChange={handleChange}
      ></input>
      {/* <div className="-mx-2 -mx-2 flex flex-col gap-y-4 md:flex-row md:space-x-2"> */}
      <div className="box-border flex flex-wrap gap-4">
        {/* <div className="-mx-2 flex flex-col flex-wrap gap-y-4  md:flex-row md:space-x-2"> */}
        {list.map((n) => (
          <table
            tabIndex={0}
            style={{ flex: "1 1 auto" }}
            className="min-w-[20rem]"
            // className="border-separate rounded-md bg-slate-200 p-4 text-left text-sm md:w-1/2"
          >
            <Row
              label={
                <>
                  <span
                    className="text-4xl"
                    dangerouslySetInnerHTML={{
                      __html: symbolMap[n.barFraction],
                    }}
                  />
                  &nbsp;
                  <small>(1/{n.barFraction})</small>
                </>
              }
            >
              <Ms onClick={copy} value={n.ms} />
            </Row>
            <Row label={"Dotted"}>
              <Ms onClick={copy} value={n.dottedValueInMs} />
            </Row>
            <Row label={"Triplet"}>
              <Ms onClick={copy} value={n.tripletValueInMs} />
            </Row>
            <Row label={"Frequency"}>
              <Ms unit="hz" onClick={copy} value={n.tripletValueInMs} />
            </Row>
            <Row label={"Dotted Freq."}>
              <Ms unit="hz" onClick={copy} value={n.dottedValueInHertz} />
            </Row>
            <Row label={"Triplet Freq."}>
              <Ms unit="hz" onClick={copy} value={n.tripletValueInHertz} />
            </Row>
          </table>
        ))}
      </div>
    </div>
  );
};

const Ms: FC<{
  value: number;
  className?: string;
  unit?: "ms" | "hz";
  showUnit?: boolean;
  onClick?: (ms: number) => void;
}> = ({ value: ms = 0, showUnit = true, className, onClick, unit = "ms" }) => {
  const v = Math.round(ms * 100) / 100;
  return (
    <>
      <span
        role="button"
        aria-label={`copy ${v}${unit} to clipboard`}
        onClick={() => onClick?.(v)}
        className={
          className ??
          "text-slate800 my-2 cursor-pointer rounded-md bg-teal-300 px-2 py-1 drop-shadow-md hover:bg-teal-600"
        }
      >
        {v}
      </span>
      {showUnit && <span>&nbsp;{unit}</span>}
    </>
  );
};
const Row: FC<{
  label: ReactNode;
  children: ReactNode;
  className?: string;
}> = ({ label, children, className }) => (
  <tr tabIndex={0} className={className}>
    <th tabIndex={0} className={`${cellClasses} font-semibold`}>
      {label}
    </th>
    <td tabIndex={0} className={cellClasses}>
      {children}
    </td>
  </tr>
);

// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";
// className = "table-row sm:table-cell";

//   <td className="table-row sm:table-cell ">
