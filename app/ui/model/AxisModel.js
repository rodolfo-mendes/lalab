class AxisModel{
    constructor(lowerBound, upperBound){
        if(lowerBound > upperBound){
            throw new ModelException(
                'Cannot create AxisModel: lowerBound is greater than upperBound');
        }

        this._lowerBound = lowerBound;
        this._upperBound = upperBound;
        Object.freeze(this);
    }

    get lowerBound(){
        return this._lowerBound;
    }

    get upperBound(){
        return this._upperBound;
    }
}