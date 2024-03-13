class NoteLength {
    private _beatsPerMinute: number;

    static barMeasure: number = 1;
    /**
     * the divsior of a bar like 1/1 or 1/2 etc.
     *
     */
    private _barFraction: number;

    private _ms: number;
    private _dottedValueInMs: number;
    private _tripletValueInMs: number;
    private _valueInHertz: number;
    private _dottedValueInHertz: number;
    private _tripletValueInHertz: number;

    get valueInHertz(): number {
        return this._valueInHertz;
    }

    get barFraction(): number {
        return this._barFraction;
    }

    get dottedValueInHertz(): number {
        return this._dottedValueInHertz;
    }

    get tripletValueInHertz(): number {
        return this._tripletValueInHertz;
    }
    /**
     *
     * @param beatsPerMinute
     * @param fraction
     */
    constructor(beatsPerMinute: number, fraction: number) {
        if (beatsPerMinute <= 0) {
            throw new Error('The Beats per minute must be greater than 0');
        }
        this._beatsPerMinute = beatsPerMinute;
        this._barFraction = fraction;
        this._ms = NoteLength.toMs(this._beatsPerMinute, this._barFraction);
        this._dottedValueInMs = NoteLength.toDotted(this._ms);
        this._tripletValueInMs = NoteLength.toTriplet(this._ms);
        this._valueInHertz = NoteLength.toHertz(this.ms);
        this._dottedValueInHertz = NoteLength.toHertz(this.dottedValueInMs);
        this._tripletValueInHertz = NoteLength.toHertz(this.tripletValueInMs);
        this._init(beatsPerMinute, fraction);
    }

    private _init(beatsPerMinute: number, fraction: number) {
        this._beatsPerMinute = beatsPerMinute;
        this._barFraction = fraction;
        this._ms = NoteLength.toMs(this._beatsPerMinute, this._barFraction);
        this._dottedValueInMs = NoteLength.toDotted(this._ms);
        this._tripletValueInMs = NoteLength.toTriplet(this._ms);
        this._valueInHertz = NoteLength.toHertz(this.ms);
        this._dottedValueInHertz = NoteLength.toHertz(this.dottedValueInMs);
        this._tripletValueInHertz = NoteLength.toHertz(this.tripletValueInMs);
    }

    get beatsPerMinute(): number {
        return this._beatsPerMinute;
    }


    get ms(): number {
        return this._ms;
    }

    set ms(value: number) {
        this._ms = value;
    }

    get dottedValueInMs(): number {
        return this._dottedValueInMs;
    }


    get tripletValueInMs(): number {
        return this._tripletValueInMs;
    }

    /**
     *  a dotted note is the note + the note / 2
     * @param ms
     * @private
     */
    static toDotted(ms: number): number {
        return ms + (ms / 2);
    }

    /**
     *  the millisecond reciprocal value * 1HZ(1000ms)
     * @param ms
     * @private
     */
    static toHertz(ms: number): number {
        return ((1 / ms) * 1000);
    }

    /**
     *
     * @param ms
     * @private
     */
    static toTriplet(ms: number): number {
        return ms * (2 / 3);
    }

    /**
     * divide one minute in ms by the Beats per minute and multiply by 4 beats = 1 Bar
     *  1 bar / he fraction is the notevalue in MS
     * @param bpm
     * @param fraction
     */
    static toMs(bpm: number, fraction: number): number {
        if (fraction < 1 || (fraction !== 1 && fraction % 2 !== 0)) {
            throw new Error('Only notefractions which can be divided by two and greater than One make sense!');
        }
        return ((60000 / bpm) * 4) / fraction;
    }
}

export default NoteLength;
