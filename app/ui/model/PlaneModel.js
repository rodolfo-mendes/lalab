class PlaneModel{
    constructor(xAxis, yAxis){
        if(!xAxis){
            throw new ModelException('Cannot create PlaneModel: xAxis is mandatory.');
        }

        if(!yAxis){
            throw new ModelException('Cannot create PlaneModel: yAxis is mandatory.');
        }

        this._xAxis = xAxis;
        this._yAxis = yAxis;
        Object.freeze(this);
    }

    get xAxis(){
        return this._xAxis;
    }

    get yAxis(){
        return this._yAxis;
    }
}
