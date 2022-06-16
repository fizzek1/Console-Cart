const items = ["truskawka"];

    let choice = prompt("Co chcesz zrobić?: 1 - Dodać Produkt 2 - Usunąć Produkt");

if(choice == 1) {
    let newItem = prompt("Wpisz produkty jakie chcesz dodać do koszyka");
    items.unshift(newItem);
    console.log("Produkty w koszyku:" + items);
}

else if(choice == 2) {
        let item = prompt("Wybierz indeks produktu ktory chcesz usunac:");
        if(item == 1) {
            items.splice(1); 
            console.log("produkt został usunięty");
        }
        else if(item == 2) {
            items.splice(2); 
            console.log("produkt został usunięty");
        }
}

else {
    console.log("Nie ma takiej opcji");
}
