let bodySections = document.querySelectorAll(".page-body-section");
let calculateBtn = document.querySelector("[name='input-calc-thickness']");
let diamInput = document.querySelector("[name='input-thickness-diam']");

function calculateThickness(diam) {
    let axial = 60_000 * 4 / (Math.PI * (diam ** 2 - 0.4 ** 2));
    console.log('Axial: ', axial);
    let bending = 800_000 * diam / (Math.PI * (diam ** 4 - 0.0256));
    console.log('Bending: ', bending);
    let longitudinal = 600_000 * 0.4 / (4 * (diam - 0.4));
    console.log('Longitudinal: ', longitudinal);

    console.log(axial+bending+longitudinal);
    return axial + bending + longitudinal;
}
function onInputCalcThicknessClick() {
    let diam = diamInput.value;
    
    if (!Number.isSafeInteger(diam)) {
        diamInput.classList.add("input-error");
    }

    alert(calculateThickness(diam));
}
