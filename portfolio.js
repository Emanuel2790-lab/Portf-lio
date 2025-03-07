document.getElementById('inicio_link').addEventListener("click", function (x) {
    x.preventDefault();
    document.getElementById('sec_1').scrollIntoView({ behavior: "smooth" });
});
document.getElementById('projeto_link').addEventListener("click", function (x) {
    x.preventDefault();
    document.getElementById('sec_2').scrollIntoView({ behavior: "smooth" });
});
document.getElementById('curso_link').addEventListener("click", function (x) {
    x.preventDefault();
    document.getElementById('sec_3').scrollIntoView({ behavior: "smooth" });
});
document.getElementById('contato_link').addEventListener("click", function (x) {
    x.preventDefault();
    document.getElementById('footer').scrollIntoView({ behavior: "smooth" });
});