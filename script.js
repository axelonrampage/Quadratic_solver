
function solveQuadratic() {
    const a = parseFloat(document.getElementById("coefficientA").value);
    const b = parseFloat(document.getElementById("coefficientB").value);
    const c = parseFloat(document.getElementById("coefficientC").value);

    const discriminant = b * b - 4 * a * c;

    const solutionElement = document.getElementById("solution");
    solutionElement.innerHTML = "";

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        solutionElement.innerHTML = `The solutions are: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        solutionElement.innerHTML = `The solution is: x = ${x.toFixed(2)}`;
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        solutionElement.innerHTML = `The solutions are complex: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} - ${imaginaryPart}i`;
    }

    solutionElement.classList.remove("hidden");
}
function resetForm() {
    document.getElementById("quadraticForm").reset();
    document.getElementById("solution").classList.add("hidden");
}

