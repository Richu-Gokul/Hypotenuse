function show() {
  let a = document.getElementById("side_A").value;
  let b = document.getElementById("side_B").value;
  a = Number(a);
  b = Number(b);
  if (a === 0) {
    document.getElementById("res").innerHTML = "enter A side value";
  } else if (b === 0) {
    document.getElementById("res").innerHTML = "enter B side value";
  } else {
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    var ch = (document.getElementById("res").innerHTML = c);
  }
}
