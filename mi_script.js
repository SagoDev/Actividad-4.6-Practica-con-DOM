document.addEventListener('DOMContentLoaded', function () {
    
    // 1- Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces de la página :
    
    function arrayOfElements(tag){
        let arrayOfElem = document.getElementsByTagName(tag);
        return arrayOfElem;
    }
    document.getElementById('info').innerHTML = 'Cantidad de enlaces: ' + arrayOfElements('a');

    // 2- Incluye aquí el código necesario para mostrar en el párrafo "info", la dirección del penúltimo enlace de la página :

    function secondToLast(tag){
        let elements = arrayOfElements(tag);
        let quantity = arrayOfElements(tag).length;
        return elements[quantity-3];
    }
    document.getElementById('info').innerHTML =secondToLast('a');

    // 3- Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces que apuntan a http://prueba/ :

    function countElemInArray(array, element){
        let count = 0;
        for (let item of array) {
            if(item==element){
                count += 1;
            }                 
        }
        return count;   
    }
    document.getElementById('info').innerHTML = 'Cantidad de enlaces que apuntan a http://prueba/ son: ' + countElemInArray(arrayOfElements('a'), 'http://prueba/');

    // 4- Incluye aquí el código necesario para mostrar en el párrafo "info", el número de enlaces del tercer párrafo :

    function Para3LinksElems()
    {
        let para3 = arrayOfElements('p')[2];
        let links = para3.getElementsByTagName('a');    
        let total = links.length;
        return total;
    }
    document.getElementById('info').innerHTML = 'Cantidad de enlaces contenidos en el 3er parrafo: ' + Para3LinksElems();
});