function obtenerDatos(){
    var yBiprima = parseInt(document.getElementById("e1").value);
    var yPrima = parseInt(document.getElementById("e2").value);
    var y = parseInt(document.getElementById("e3").value);

    deteccionDeCasos(yBiprima, yPrima, y);
    //document.operaciones.res.value = y+2;
}

   //raices reales
function caseOne(a, b, c){
    let m1, m2;

    m1 = (-(b) + Math.sqrt(b*b-(4*a*c)))/(2*(a));
    m2 = (-(b) - Math.sqrt(b*b-(4*a*c)))/(2*(a));

    document.operaciones.res.value = "y = C1 e^" + m1.toFixed(2) + " + C2 e^" + m2.toFixed(2);
    info(a, b, c, m1, m2);
    console.log(m2);

}

    //raices imaginaria
function caseTwo(a, b, c){
    let mR, mI;

    mR = (-b)/(2*(a));
    mI = Math.sqrt(-(b*b-(4*a*c)))/(2*(a));

    document.operaciones.res.value = "y = C1 e^"+ mR.toFixed(2) + " cos(" + mI.toFixed(2) + "x) + C2 e^" + mR.toFixed(2) + "sen(" + mI.toFixed(2) +"x)";
    info(a, b, c, mR, mI);
    console.log(mR);

}

function deteccionDeCasos(a, b, c) {
    
    if((4*a*c) > (b*b)){
        caseTwo(a, b, c);
    }else{
        caseOne(a, b, c);
    }
}

function info(a, b, c, r1, r2){
    document.operaciones.eg.value = a + "m^2 + " + b + "m + "+ c + " = 0";
    if((4*a*c) > (b*b)){
        document.operaciones.r.value = "m1 = " + r1.toFixed(2) + " + " + r2.toFixed(2) + " i ; m2 = " + r1.toFixed(2) + " - " + r2.toFixed(2) + " i";
        document.operaciones.s.value = "y1 = e^"+ r1.toFixed(2) + " cos(" + r2.toFixed(2) + "x) ; y2 = e^" + r1.toFixed(2) + "sen(" + r2.toFixed(2) +"x)";
        document.operaciones.sg.value = "y = C1 e^"+ r1.toFixed(2) + " cos(" + r2.toFixed(2) + "x) + C2 e^" + r1.toFixed(2) + "sen(" + r2.toFixed(2) +"x)";
    }else{
        document.operaciones.r.value = "m1 = " + r1.toFixed(2) + " ; m2 = " + r2.toFixed(2);
        document.operaciones.s.value = "y1 = e^" + r1.toFixed(2) + " ; y2 = e^" + r2.toFixed(2);
        document.operaciones.sg.value = "y = C1 e^" + r1.toFixed(2) + " + C2 e^" + r2.toFixed(2);
    }
}


obtenerDatos()