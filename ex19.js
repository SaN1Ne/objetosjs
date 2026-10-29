const comp = {
    Marca: "Asus",
    Processador: "i7 13700HX",
    Memoria: "32GB DDR5",
    Armazenamento: "SSD 2TB",
    GPU: "RTX 5070"
}

for (let lista in comp) {
    console.log(lista, comp[lista])
}