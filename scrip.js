/*
Utilizando el querido array de objetos "Pizzas🍕", realizar el siguiente desafío: 

👉 A cada Pizza, agregarle una imagen. 
👉 Guardar el array en el local storage. 
👉 Crear un archivo HTML que contenga un card en donde se renderice el nombre, imagen, ingredientes y precio de una pizza (Estilizarlo con CSS 🎨). 
👉 Debajo del card tiene que haber un input y un botón. 

Deberemos colocar un numero en el input y, al apretar el botón, deberá renderizar en el card la pizza cuyo id coincida con el numero ingresado en el input.

🚨 Si no coincide con ningún id, renderizar un mensaje de error.

🆙 Antes de entregar, debemos deployar nuestro repositorio en Vercel, y entregar ambos links. (GitHub y Vercel). */

let listadoPizzas = [
    {
      id: 1,
      nombre: 'Pizza con muzzarella',
      precio: 750,
      ingredientes: "muzzarella, aceitunas, oregano",
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-con-muzzarella.jpg',
    },
    {
      id: 2,
      nombre: 'Pizza napolitana',
      precio: 850,
      ingredientes: "muzzarella, aceitunas, tomate, oregano",
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-napolitana.jpg',
    },
    {
      id: 3,
      nombre: 'Pizza con jamón',
      precio: 850,
      ingredientes: "muzzarella, aceitunas, jamon, oregano",
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-con-jamon.jpg',
    },
    {
      id: 4,
      nombre: 'Pizza fugazzeta',
      precio: 800,
      ingredientes: "muzzarella, aceitunas, cebolla",
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-fugazzeta.png',
    },
    {
      id: 5,
      nombre: 'Pizza calabresa',
      precio: 850,
      ingredientes: "muzzarella, aceitunas, salame",
      imagen: 'https://blog.pedidosya.com.ar/wp-content/uploads/sites/5/2018/05/pizza-calabresa.jpg',
    },
    {
      id: 6,
      nombre: 'Pizza con ananá',
      precio: 1050,
      ingredientes: "muzzarella, aceitunas, ananá, jamon",
      imagen: 'https://www.pedidosya.com.ar/blog/wp-content/uploads/sites/5/2017/09/pizza-anana.jpg',
    },
  ];
  
  localStorage.setItem('listadoPizzas', JSON.stringify(listadoPizzas));

  const Btn = document.querySelector('button');
  const input = document.querySelector('input');
  const aparecePizza = document.querySelector('.card')  
  const divPizza = document.querySelector('.card-body')
  const form = document.querySelector("form")


  document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('listadoPizzas') && (listadoPizzas = JSON.parse(localStorage.getItem('listadoPizzas')));
  });
  
  Btn.addEventListener('click', (e) => {
    e.preventDefault();
    eliminarPizza();
    crearPizza();
 
  });


  const eliminarPizza = () => {
    if(aparecePizza.childElementCount > 2) {
      const cardImg = document.querySelector('.card-img');
      cardImg.remove(); 
      const h3Quitar = document.querySelector('h3')
      h3Quitar.remove()
      const h4Quitar = document.querySelector('h4')
      h4Quitar.remove()     
      const ingredientesQuitar = document.querySelector('h5')
      ingredientesQuitar.remove() 
  } 

  }


  const crearPizza = () => {

    const imgPizza = document.createElement('img');
    imgPizza.setAttribute('src', '');
    imgPizza.setAttribute('class', 'card-img')
    imgPizza.setAttribute('alt', '')    
    
    const h3Pizza = document.createElement('h3')
    h3Pizza.setAttribute('class','card-title')  
  
    const h4Pizza = document.createElement('h4')
    h4Pizza.setAttribute('class','card-price')  

    const ingredientes = document.createElement('h5')
    ingredientes.setAttribute('class','card-ingredientes') 
  
    aparecePizza.appendChild(imgPizza)
    aparecePizza.appendChild(divPizza)
    divPizza.insertBefore(h3Pizza, form)
    divPizza.insertBefore(h4Pizza, form)
    divPizza.insertBefore(ingredientes, form)
  
    const cardImg = document.querySelector('.card-img');
    const cardTitle = document.querySelector('.card-title');
    const cardPrice = document.querySelector('.card-price');
    const cardIngredientes = document.querySelector(".card-ingredientes")

    try {
      const pizza = listadoPizzas.find((pizza) => pizza.nombre == input.value);
      cardImg.src = pizza.imagen;
      cardTitle.textContent = pizza.nombre;
      cardPrice.textContent = `Precio:  $ ${pizza.precio}`;
      cardIngredientes.textContent = `Ingredientes: ${pizza.ingredientes}`;
    } catch (error) {
      Swal.fire({
        text: 'Pizza no encontrada',
        confirmButtonText: 'Aceptar',
      });
    }
  }