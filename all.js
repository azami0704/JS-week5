let data = [
    {
        "id": 0,
        "name": "肥宅心碎賞櫻3日",
        "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
        "area": "高雄",
        "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
        "group": 87,
        "price": 1400,
        "rate": 10
    },
    {
        "id": 1,
        "name": "貓空纜車雙程票",
        "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台北",
        "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
        "group": 99,
        "price": 240,
        "rate": 2
    },
    {
        "id": 2,
        "name": "台中谷關溫泉會1日",
        "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
        "area": "台中",
        "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
        "group": 20,
        "price": 1765,
        "rate": 7
    }
];

const ticketGroup = document.querySelector('.ticket-group');
const filter = document.querySelector('#filter');
const filterTxT = document.querySelector('.txt');

function init(){
    let str = "";
    let count =0;
    data.forEach(function(item){
        let content = `<div class="ticket-item">
        <a href="#" class="card">
            <div class="top">
                <div class="area-tag">${item.area}</div>
                <div class="photo">
                    <img src=${item.imgUrl} alt="">
                </div>
                <div class="range">${item.rate}</div>
            </div>
            <div class="content">
                <h2 class="ticket-title">${item.name}</h2>
                <p class="ticket-description">
                    ${item.description}
                </p>
            </div>
            <div class="footer">
                <span class="material-icons">
                    error
                </span>
                <div class="last">剩下最後${item.group}組</div>
                <span class="small">TWD</span>
                <div class="price">$${(item.price).toLocaleString('en')}</div>
            </div>
        </a>
    </div>`
    str+=content;
    count++;
    })
    ticketGroup.innerHTML = str;
    filterTxT.textContent = `本次搜尋共 ${count} 筆資料`;
}

init();


filter.addEventListener("change",function(e){
    let str = "";
    let count =0;
    data.forEach(function(item){
        if(e.target.value === '全部'){
            let content = `<div class="ticket-item">
            <a href="#" class="card">
                <div class="top">
                    <div class="area-tag">${item.area}</div>
                    <div class="photo">
                        <img src=${item.imgUrl} alt="">
                    </div>
                    <div class="range">${item.rate}</div>
                </div>
                <div class="content">
                    <h2 class="ticket-title">${item.name}</h2>
                    <p class="ticket-description">
                        ${item.description}
                    </p>
                </div>
                <div class="footer">
                    <span class="material-icons">
                        error
                    </span>
                    <div class="last">剩下最後${item.group}組</div>
                    <span class="small">TWD</span>
                    <div class="price">$${(item.price).toLocaleString('en')}</div>
                </div>
            </a>
        </div>`
        str+=content;
        count++;
        }else if(e.target.value === item.area){
            let content =  `<div class="ticket-item">
            <a href="#" class="card">
                <div class="top">
                    <div class="area-tag">${item.area}</div>
                    <div class="photo">
                        <img src=${item.imgUrl} alt="">
                    </div>
                    <div class="range">${item.rate}</div>
                </div>
                <div class="content">
                    <h2 class="ticket-title">${item.name}</h2>
                    <p class="ticket-description">
                        ${item.description}
                    </p>
                </div>
                <div class="footer">
                    <span class="material-icons">
                        error
                    </span>
                    <div class="last">剩下最後${item.group}組</div>
                    <span class="small">TWD</span>
                    <div class="price">$${(item.price).toLocaleString('en')}</div>
                </div>
            </a>
        </div>`
        str+=content;
        count++;
        }
    })
    if(str.length!=0){
        ticketGroup.innerHTML = str;
    }else{
        ticketGroup.innerHTML = `<img src="./images/no_found.png" alt="">`;
    }
    filterTxT.textContent = `本次搜尋共 ${count} 筆資料`;
})

const ticketName = document.querySelector('#ticketName');
const ticketURL = document.querySelector('#ticketURL');
const ticketArea = document.querySelector('#ticketArea');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRange = document.querySelector('#ticketRange');
const ticketDes = document.querySelector('#ticketDes');
const btn = document.querySelector('.btn');

btn.addEventListener("click",function(e){
    if(ticketName.value == ''||ticketURL.value == ''||ticketArea.value == ''||ticketNum.value == ''||ticketRange.value == ''||ticketPrice.value == ''||ticketDes.value == ''){
        alert('欄位不可為空');
        return;
    }
    obj={};
    obj.id=data.length;
    obj.name = ticketName.value;
    obj.imgUrl = ticketURL.value;
    obj.area = ticketArea.value;
    obj.group = ticketNum.value;
    obj.rate = ticketRange.value;
    obj.price = ticketPrice.value;
    obj.description = ticketDes.value;
    data.push(obj);
    ticketName.value = '';
    ticketURL.value = '';
    ticketArea.value = 'default';
    ticketNum.value = '';
    ticketRange.value = '';
    ticketPrice.value = '';
    ticketDes.value = '';
    init();
})