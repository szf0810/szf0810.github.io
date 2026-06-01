const routes = {
  "4d3n": [
    {
      id: "royal-classic-4",
      name: "皇城经典线",
      badge: "热门",
      duration: "4 天 3 晚",
      nights: 3,
      spots: 8,
      pace: "适中",
      budget: "舒适型",
      price: "¥2,880 起",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing%20China%20Forbidden-City-02.jpg?width=1200",
      intro:
        "以中轴线和皇家建筑为核心，适合第一次来北京、想把经典景点一次走顺的人。",
      tags: ["故宫", "天坛", "颐和园"],
      days: [
        {
          title: "抵达北京 · 前门夜游",
          text: "接站后入住酒店，傍晚从前门和大栅栏开始，慢慢进入老北京街巷节奏。",
          spots: ["前门", "大栅栏", "北京烤鸭"],
        },
        {
          title: "天安门 · 故宫 · 景山",
          text: "沿中轴线参观天安门广场、故宫重点宫殿，傍晚上景山看紫禁城全景。",
          spots: ["天安门", "故宫", "景山公园"],
        },
        {
          title: "八达岭长城 · 奥林匹克公园",
          text: "全天安排长城段落，返程经过鸟巢、水立方外观，兼顾自然与城市地标。",
          spots: ["八达岭长城", "鸟巢", "水立方"],
        },
        {
          title: "天坛 · 颐和园 · 返程",
          text: "上午游览天坛，下午到颐和园看昆明湖和长廊，再根据航班或高铁送站。",
          spots: ["天坛", "颐和园", "昆明湖"],
        },
      ],
    },
    {
      id: "family-easy-4",
      name: "亲子轻松线",
      badge: "轻松",
      duration: "4 天 3 晚",
      nights: 3,
      spots: 7,
      pace: "轻松",
      budget: "舒适型",
      price: "¥3,060 起",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/20200110%20Temple%20of%20Heaven-13.jpg?width=1200",
      intro:
        "减少赶路和早起，加入博物馆、动物园和公园时段，适合带孩子或长辈同行。",
      tags: ["天坛", "动物园", "什刹海"],
      days: [
        {
          title: "抵达北京 · 什刹海散步",
          text: "入住后安排短距离街区游，湖边散步、胡同小吃，不把第一天排满。",
          spots: ["什刹海", "烟袋斜街", "胡同小吃"],
        },
        {
          title: "故宫半日 · 景山观景",
          text: "精选故宫核心展线，预留休息时间，傍晚从景山俯瞰北京中轴线。",
          spots: ["故宫", "景山", "王府井"],
        },
        {
          title: "北京动物园 · 天文馆",
          text: "上午看熊猫馆，下午安排天文馆或自然博物主题内容，节奏更适合亲子。",
          spots: ["北京动物园", "熊猫馆", "北京天文馆"],
        },
        {
          title: "天坛公园 · 送站",
          text: "用天坛公园收尾，感受北京人的晨练和皇家祭坛空间，再轻松返程。",
          spots: ["天坛", "祈年殿", "送站"],
        },
      ],
    },
    {
      id: "culture-lane-4",
      name: "胡同人文线",
      badge: "人文",
      duration: "4 天 3 晚",
      nights: 3,
      spots: 9,
      pace: "慢游",
      budget: "精品型",
      price: "¥3,280 起",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing%20Gulou%20at%20night.jpg?width=1200",
      intro:
        "把胡同、书店、博物馆和老城夜色串起来，适合想拍照、逛街、听故事的人。",
      tags: ["鼓楼", "胡同", "国博"],
      days: [
        {
          title: "抵达北京 · 鼓楼夜色",
          text: "住进二环内酒店，晚间走鼓楼、钟楼一带，感受老城夜生活。",
          spots: ["鼓楼", "钟楼", "南锣鼓巷"],
        },
        {
          title: "国博 · 天安门 · 前门",
          text: "上午安排国家博物馆主题参观，下午沿广场到前门，城市记忆更完整。",
          spots: ["国家博物馆", "天安门", "前门"],
        },
        {
          title: "故宫 · 东四胡同",
          text: "故宫看建筑和展陈，下午转入东四胡同，体验咖啡馆、书店和院落空间。",
          spots: ["故宫", "东四胡同", "隆福寺"],
        },
        {
          title: "雍和宫 · 五道营 · 返程",
          text: "以雍和宫和五道营胡同收尾，适合慢慢买伴手礼后返程。",
          spots: ["雍和宫", "五道营", "返程"],
        },
      ],
    },
  ],
  "5d4n": [
    {
      id: "deep-beijing-5",
      name: "北京全景线",
      badge: "深度",
      duration: "5 天 4 晚",
      nights: 4,
      spots: 11,
      pace: "适中",
      budget: "舒适型",
      price: "¥3,680 起",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Badaling%20Great%20Wall%20%286170369160%29.jpg?width=1200",
      intro:
        "在经典四日基础上增加圆明园、北京大学外观和城市夜景，内容更完整。",
      tags: ["故宫", "长城", "圆明园"],
      days: [
        {
          title: "抵达北京 · 老城夜游",
          text: "接站入住，晚间从前门、大栅栏开始，适应北京节奏和饮食。",
          spots: ["前门", "大栅栏", "老字号"],
        },
        {
          title: "天安门 · 故宫 · 景山",
          text: "经典中轴线一日游，重点看太和殿、乾清宫、御花园和景山视角。",
          spots: ["天安门", "故宫", "景山"],
        },
        {
          title: "慕田峪长城 · 奥林匹克公园",
          text: "选择景观更舒展的长城段落，返程看奥林匹克公园夜景。",
          spots: ["慕田峪长城", "鸟巢", "水立方"],
        },
        {
          title: "颐和园 · 圆明园 · 高校街区",
          text: "上午游颐和园，下午到圆明园遗址和高校街区，感受北京西北角的文化气质。",
          spots: ["颐和园", "圆明园", "北京大学外观"],
        },
        {
          title: "天坛 · 自由采购 · 返程",
          text: "上午天坛公园，午后预留伴手礼和自由活动时间，再根据交通送站。",
          spots: ["天坛", "王府井", "送站"],
        },
      ],
    },
    {
      id: "heritage-food-5",
      name: "非遗美食线",
      badge: "美食",
      duration: "5 天 4 晚",
      nights: 4,
      spots: 10,
      pace: "慢游",
      budget: "精品型",
      price: "¥3,980 起",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing%20China%20Qianmen-Street-02.jpg?width=1200",
      intro:
        "每天保留一段地道美食或手作体验，把景点和北京味道一起安排好。",
      tags: ["烤鸭", "胡同", "手作"],
      days: [
        {
          title: "抵达北京 · 前门小吃",
          text: "入住后走前门和大栅栏，安排北京小吃和老字号打卡。",
          spots: ["前门", "大栅栏", "门钉肉饼"],
        },
        {
          title: "故宫 · 宫廷文化体验",
          text: "参观故宫核心轴线，下午安排宫廷纹样或传统手作体验。",
          spots: ["故宫", "景山", "传统手作"],
        },
        {
          title: "长城 · 京郊风味",
          text: "长城游览后在京郊安排特色午餐，返城不再加重体力消耗。",
          spots: ["慕田峪长城", "京郊午餐", "奥森公园"],
        },
        {
          title: "胡同 · 雍和宫 · 烤鸭",
          text: "慢走胡同和雍和宫周边，晚餐安排北京烤鸭或私房菜。",
          spots: ["雍和宫", "五道营", "北京烤鸭"],
        },
        {
          title: "天坛 · 菜市场 · 返程",
          text: "上午天坛，随后逛本地市场买伴手礼，按交通时间送站。",
          spots: ["天坛", "本地市场", "送站"],
        },
      ],
    },
    {
      id: "photo-city-5",
      name: "城市摄影线",
      badge: "拍照",
      duration: "5 天 4 晚",
      nights: 4,
      spots: 12,
      pace: "紧凑",
      budget: "精品型",
      price: "¥4,260 起",
      image:
        "https://commons.wikimedia.org/wiki/Special:FilePath/Beijing%20National%20Stadium%20at%20night.JPG?width=1200",
      intro:
        "覆盖晨昏光线、老城街巷、皇家建筑和现代地标，适合喜欢摄影的游客。",
      tags: ["晨拍", "夜景", "建筑"],
      days: [
        {
          title: "抵达北京 · 奥体夜景",
          text: "晚间安排奥林匹克公园夜景，适合拍摄现代建筑和城市灯光。",
          spots: ["鸟巢", "水立方", "奥体夜景"],
        },
        {
          title: "景山晨拍 · 故宫",
          text: "清晨景山拍中轴线，随后进入故宫，下午转场角楼或东华门一带。",
          spots: ["景山", "故宫", "角楼"],
        },
        {
          title: "长城日出 · 京郊村落",
          text: "早出发前往长城，安排更适合取景的城墙段落和京郊村落停留。",
          spots: ["长城", "京郊村落", "山景"],
        },
        {
          title: "颐和园 · 圆明园 · 胡同蓝调",
          text: "白天拍皇家园林，傍晚回老城拍胡同蓝调和街景。",
          spots: ["颐和园", "圆明园", "胡同"],
        },
        {
          title: "天坛晨练 · 返程",
          text: "最后一天拍天坛晨练和祈年殿外观，午后自由活动后返程。",
          spots: ["天坛", "祈年殿", "返程"],
        },
      ],
    },
  ],
};

const state = {
  duration: "4d3n",
  routeId: "royal-classic-4",
};

const durationLabels = {
  "4d3n": "四天三晚",
  "5d4n": "五天四晚",
};

const routeGrid = document.querySelector("#routeGrid");
const timeline = document.querySelector("#timeline");
const selectedDurationLabel = document.querySelector("#selectedDurationLabel");
const summarySpots = document.querySelector("#summarySpots");
const summaryNights = document.querySelector("#summaryNights");
const summaryBudget = document.querySelector("#summaryBudget");
const choiceImage = document.querySelector("#choiceImage");
const choiceBadge = document.querySelector("#choiceBadge");
const choiceName = document.querySelector("#choiceName");
const choiceIntro = document.querySelector("#choiceIntro");
const choiceDuration = document.querySelector("#choiceDuration");
const choicePace = document.querySelector("#choicePace");
const choicePrice = document.querySelector("#choicePrice");
const confirmation = document.querySelector("#confirmation");
const bookingForm = document.querySelector("#bookingForm");

function getCurrentRoute() {
  return routes[state.duration].find((route) => route.id === state.routeId);
}

function setDuration(duration) {
  state.duration = duration;
  state.routeId = routes[duration][0].id;
  render();
}

function setRoute(routeId) {
  state.routeId = routeId;
  render();
  document.querySelector("#itinerary").scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderRoutes() {
  routeGrid.innerHTML = routes[state.duration]
    .map(
      (route) => `
        <article class="route-card ${route.id === state.routeId ? "is-selected" : ""}">
          <img src="${route.image}" alt="${route.name}景观" loading="lazy">
          <div class="route-card-body">
            <div class="route-meta">
              <span class="pill">${route.badge}</span>
              <span class="pill">${route.pace}</span>
              <span class="pill">${route.budget}</span>
            </div>
            <h3>${route.name}</h3>
            <p>${route.intro}</p>
            <div class="route-footer">
              <span class="route-price">${route.price}</span>
              <button class="select-route" type="button" data-route="${route.id}">
                <i data-lucide="${route.id === state.routeId ? "check" : "map"}" aria-hidden="true"></i>
                <span>${route.id === state.routeId ? "已选择" : "选择线路"}</span>
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  document.querySelectorAll(".select-route").forEach((button) => {
    button.addEventListener("click", () => setRoute(button.dataset.route));
  });
}

function renderTimeline(route) {
  timeline.innerHTML = route.days
    .map(
      (day, index) => `
        <article class="day-item">
          <div class="day-number">D${index + 1}</div>
          <div>
            <h3>${day.title}</h3>
            <p>${day.text}</p>
            <div class="spot-list">
              ${day.spots.map((spot) => `<span>${spot}</span>`).join("")}
            </div>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderChoice(route) {
  selectedDurationLabel.textContent = durationLabels[state.duration];
  summarySpots.textContent = route.spots;
  summaryNights.textContent = route.nights;
  summaryBudget.textContent = route.budget;
  choiceImage.src = route.image;
  choiceImage.alt = `${route.name}景观`;
  choiceBadge.textContent = route.badge;
  choiceName.textContent = route.name;
  choiceIntro.textContent = route.intro;
  choiceDuration.textContent = route.duration;
  choicePace.textContent = route.pace;
  choicePrice.textContent = route.price;
}

function renderTabs() {
  document.querySelectorAll(".duration-tab").forEach((tab) => {
    const isActive = tab.dataset.duration === state.duration;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function render() {
  const route = getCurrentRoute();
  renderTabs();
  renderRoutes();
  renderChoice(route);
  renderTimeline(route);
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

document.querySelectorAll(".duration-tab").forEach((tab) => {
  tab.addEventListener("click", () => setDuration(tab.dataset.duration));
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const route = getCurrentRoute();
  const date = document.querySelector("#travelDate").value;
  const travelers = document.querySelector("#travelers").value;
  const hotelTier = document.querySelector("#hotelTier").value;
  const contactName = document.querySelector("#contactName").value.trim();

  confirmation.innerHTML = `
    <strong>${contactName}</strong> 已选择 <strong>${route.name}</strong>，
    出发日期为 <strong>${date}</strong>，共 <strong>${travelers}</strong> 人，
    住宿偏好：<strong>${hotelTier}</strong>。我们将按 <strong>${route.duration}</strong>
    行程生成正式出行单。
  `;
});

window.addEventListener("load", () => {
  const today = new Date();
  today.setDate(today.getDate() + 7);
  document.querySelector("#travelDate").value = today.toISOString().slice(0, 10);
  render();
});
