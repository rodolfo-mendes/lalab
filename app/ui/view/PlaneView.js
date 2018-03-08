class PlaneView{
    constructor(canvas, model){
        this._canvas = canvas;
        this._model = model;
        Object.freeze(this);
    }

    render(){
        let ctx = this._canvas.getContext("2d")
        ctx.moveTo(0,300);
        ctx.lineTo(1200,300);
        ctx.stroke();

        ctx.moveTo(600,0)
        ctx.lineTo(600,600);
        ctx.stroke();
    }
}