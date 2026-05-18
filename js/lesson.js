const tabBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

let currentIndex = 0;

const selectTab = (index) => {
  tabBlocks.forEach((item, i) => item.classList.toggle("active", index === i));
  tabs.forEach((item, i) => item.classList.toggle("active", index === i));
};

setInterval(() => {
  currentIndex++;
  if (currentIndex >= tabs.length) {
    currentIndex = 0;
  }
  selectTab(currentIndex);
}, 5000);

tabsParent.onclick = (event) => {
  const selectedTab = event.target.closest(".tab_content_item");
  if (!selectTab) return;

  const indexTab = [...tabs].indexOf(selectedTab);
  selectTab(indexTab);
};

const somInput = document.querySelector("#som");
const usdInput = document.querySelector("#usd");
const eurInput = document.querySelector("#eur");
const error = document.querySelector("#error");

const converter = (element) => {
  element.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();

    request.onload = () => {
      if (request.status === 200) {
        const data = JSON.parse(request.response);

        const somRate = data.usd;
        const eurRate = data.euro;

        if (element.value === "") {
          somInput.value = "";
          usdInput.value = "";
          eurInput.value = "";
          return;
        }

        if (element.id === "som") {
          usdInput.value = (element.value / somRate).toFixed(2);
          eurInput.value = (element.value / eurRate).toFixed(2);
        }

        else if (element.id === "usd") {
          somInput.value = (element.value * somRate).toFixed(2);
          eurInput.value = (
            (element.value * somRate) / eurRate
          ).toFixed(2);
        }
        
        else if (element.id === "eur") {
          somInput.value = (element.value * eurRate).toFixed(2);
          usdInput.value = (
            (element.value * eurRate) / somRate
          ).toFixed(2);
        }
      } else {
        error.innerHTML = "Ошибка";
        error.style.color = "red";
      }
    };
  });
};

converter(somInput);
converter(usdInput);
converter(eurInput);



const card = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')

let cardId = 1

const baseURL = 'https://jsonplaceholder.typicode.com/todos'

const fetchTodos = (id) => {
    fetch(`${baseURL}/${id}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error('Ошибка сервера')
            }

            return response.json()
        })
        .then(data => {
            const { id, title, completed } = data

            const color = completed ? 'green' : 'red'

            card.style.borderColor = color

            card.innerHTML = `
                <p>ID: ${id}</p>
                <p>${title}</p>
                <p style="color:${color}">
                    ${completed ? 'Completed' : 'Not Completed'}
                </p>
            `
        })
        .catch(error => {
            card.innerHTML = error.message
        })
}

btnNext.onclick = () => {
    cardId++

    if (cardId > 200) {
        cardId = 1
    }

    fetchTodos(cardId)
}

btnPrev.onclick = () => {
    cardId--

    if (cardId < 1) {
        cardId = 200
    }

    fetchTodos(cardId)
}

fetchTodos(cardId)


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))