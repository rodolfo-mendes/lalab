const planeView = new PlaneView(
    document.querySelector('#canvas'),
    new PlaneModel(
        new AxisModel(-100, 100),
        new AxisModel(-100, 100)
    )
);

planeView.render();
