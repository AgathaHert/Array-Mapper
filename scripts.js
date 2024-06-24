const list = document.querySelector("ul");
let myLi = "";

function showAll() {
  myLi = "";
  menuOptions.forEach((menu) => {
    myLi += `
        <li>
            <img src=${menu.src}>
            <p>${menu.name}</p>
            <p class="item-price">R$ ${menu.price.toFixed(2)}</p>
        </li>
        `;
  });

  list.innerHTML = myLi;
}

function mapear() {
  myLi = "";
  const valor = menuOptions.map((menu) => {
    const desconto = menu.price * 0.1;
    const precoComDesconto = (menu.price - desconto).toFixed(2);
    myLi += `
        <li>
            <img src=${menu.src}>
            <p>${menu.name}</p>
            <p class="item-price">R$ ${precoComDesconto}</p>
        </li>
        `;
    list.innerHTML = myLi;
  });
}

function sumAllItens() {
  const total = menuOptions.reduce(
    (acumulador, menu) => acumulador + menu.price,
    0
  );

  list.innerHTML = `
        <li>
            <p>O valor total dos <br> itens é R$ ${total.toFixed(2)}</p>
        </li>
        `;
}

function filter() {
  myLi = "";
  const vegano = menuOptions.filter((menu) => menu.vegan); // `vegano` é um array

  vegano.forEach((item) => {
    myLi += `
            <li>
                <img src="${item.src}">
                <p>${item.name}</p>
                <p class="item-price">R$ ${item.price.toFixed(2)}</p>
            </li>
        `;
  });

  list.innerHTML = myLi;
}
