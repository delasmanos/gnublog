import NoteLength from "./NoteLength";

class BpmConverter {
  private noteNameByFractionMap: Map<number, string>;

  constructor() {
    this.noteNameByFractionMap = new Map([
      [1, "Whole Note"],
      [2, "Half Note"],
      [4, "Quarter Note"],
      [8, "Eighth Note"],
      [16, "Sixteenth Note"],
      [32, "Thirty-second Note"],
      [32, "Sixty-fourth Note"],
      [128, "Hundred twenty-eighth note Note"],
    ]);
  }

  public getNameForNote(note: NoteLength) {
    return this.noteNameByFractionMap.get(note.barFraction);
  }

  public getValueList(Bpm: number) {
    let list: NoteLength[] = [];
    list = this._calc(Bpm, 1, list);
    return list;
  }

  /**
   *  recursively creates Notlength Objects until a fraction of 128
   * @param bpm
   * @param noteFraction
   * @param list
   * @private
   */
  protected _calc(
    bpm: number,
    noteFraction: number,
    list: NoteLength[],
  ): NoteLength[] {
    list.push(new NoteLength(bpm, noteFraction));
    // } catch (e) {
    //
    // }
    if (noteFraction > 0 && noteFraction < 128) {
      return this._calc(bpm, noteFraction * 2, list);
    } else {
      return list;
    }
  }
}

export default BpmConverter;
