// 範例球員數據陣列
const players = [
    { rank: 1, name: "陳傑憲", position: "外野手", value: 12, team: "統一獅" },
    { rank: 2, name: "林安可", position: "外野手", value: 9, team: "統一獅" },
    { rank: 3, name: "張育成", position: "游擊手", value: 10, team: "富邦悍將" },
    { rank: 4, name: "魔鷹", position: "一壘手", value: 11, team: "台鋼雄鷹" },
    { rank: 5, name: "江坤宇", position: "游擊手", value: 6, team: "中信兄弟" },
    { rank: 6, name: "李凱威", position: "二壘手", value: 4, team: "味全龍" },
];

/**
 * 根據數據動態生成表格行
 */
function renderPlayerTable() {
    // 獲取表格主體元素 (在 HTML 中設置了 id="player-data")
    const tableBody = document.getElementById('player-data');

    // 清空現有內容 (防止重複添加)
    tableBody.innerHTML = '';

    players.forEach(player => {
        // 1. 創建一個新的表格行
        const row = tableBody.insertRow();

        // 2. 插入數據單元格 (Cell)
        
        // 排名
        row.insertCell().textContent = player.rank;
        
        // 球員姓名
        row.insertCell().textContent = player.name;
        
        // 位置
        row.insertCell().textContent = player.position;
        
        // 身價 (格式化為 '€XXM')
        const valueCell = row.insertCell();
        valueCell.textContent = `${player.value}`;

        // 所屬球隊
        row.insertCell().textContent = player.team;
    });
}

// 頁面加載完成後執行渲染函數
document.addEventListener('DOMContentLoaded', renderPlayerTable);


// 可選：添加一個點擊事件來顯示提示
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('player-data');
    tableBody.addEventListener('click', (event) => {
        // 找到被點擊的行
        const row = event.target.closest('tr');
        if (row) {
            const playerName = row.cells[1].textContent;
            const playerValue = row.cells[3].textContent;
            alert(`您點擊了 ${playerName}，他的身價是 ${playerValue}`);
        }
    });
});
/**
 * 根據價格類別過濾球員列表
 * @param {string} category - 選擇的類別 (all, high, medium, low)
 */
function filterPlayers(category) {
    let filteredPlayers;

    if (category === 'all') {
        // 如果選擇「所有球員」，則使用完整列表
        filteredPlayers = players;
    } else {
        // 根據選定的類別進行過濾
        filteredPlayers = players.filter(player => {
            const value = player.value;
            
            if (category === 'high') {
                return value >= 10;
            } else if (category === 'medium') {
                return value >= 7 && value <= 9;
            } else if (category === 'low') {
                return value >= 4 && value <= 6;
            }
            return false; // 安全返回
        });
    }

    // 重新渲染表格，傳入過濾後的數據
    renderPlayerTable(filteredPlayers);
}


/**
 * 根據傳入的列表動態生成表格行
 * @param {Array} playerList - 要渲染的球員列表
 */
function renderPlayerTable(playerList = players) {
    const tableBody = document.getElementById('player-data');
    tableBody.innerHTML = ''; // 清空現有內容

    if (playerList.length === 0) {
        // 如果列表為空，顯示「無資料」訊息
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.colSpan = 5; // 跨越所有列
        cell.textContent = "🔍 目前類別中沒有球員資料。";
        cell.style.textAlign = "center";
        cell.style.padding = "20px";
        return;
    }

    playerList.forEach(player => {
        const row = tableBody.insertRow();
        // 這裡可以選擇保留原始排名，或者根據過濾結果重新編號
        row.insertCell().textContent = player.rank; // 使用原始排名
        row.insertCell().textContent = player.name;
        row.insertCell().textContent = player.position;
        
        const valueCell = row.insertCell();
        valueCell.textContent = `€${player.value}M`;
        
        row.insertCell().textContent = player.team;
    });
}

// 頁面加載完成後，首次渲染 (使用完整列表)
document.addEventListener('DOMContentLoaded', () => {
    // 初次載入時渲染完整的表格
    renderPlayerTable(players); 
    
    // 檢查 price-filter 選單是否有預設值（例如：all），如果有則執行一次過濾確保同步。
    const defaultCategory = document.getElementById('price-filter').value;
    filterPlayers(defaultCategory);
});


// (保留原有的點擊事件，讓表格互動性更好)
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('player-data');
    // ... 點擊事件邏輯 (保持不變) ...
});