console.log("外部 JavaScript 檔案已載入並執行！");
// -----------------------------------
// 1. 數據定義 (模擬從後端取得的球員列表)
// -----------------------------------
const players = [
    { name: '王牌' }, { name: '強打' }, { name: '快腿' }, 
    { name: '捕手A' }, { name: '內野B' }, { name: '外野C' },
    { name: '潛力股' }, { name: '老將' }, { name: '新人王' },
    { name: '指定打擊' }, { name: '板凳一' }, { name: '板凳二' }
];

// -----------------------------------
// 2. DOM 元素選取
// -----------------------------------
const positionSelectors = document.querySelectorAll('.field select');
const battingSelectors = document.querySelectorAll('.batting_order select');
const errorMessage = document.getElementById('errorMessage');
const form = document.getElementById('teamForm');

// -----------------------------------
// 3. 核心函數
// -----------------------------------

/**
 * 填充下拉選單的選項
 * @param {NodeList} selectors - 欲填充的 Select 元素列表
 * @param {Array} playerList - 球員數據陣列
 */
function populateSelectors(selectors, playerList) {
    selectors.forEach(select => {
        // 從第二個選項 (index 1) 開始添加球員
        playerList.forEach(player => {
            const option = document.createElement('option');
            option.value = player.name;
            option.textContent = player.name;
            select.appendChild(option);
        });
    });
}

/**
 * 檢查守備位置是否重複選人 (棒球規則要求九個位置必須是不同的人)
 * @returns {boolean} - 驗證是否通過
 */
function validatePositions() {
    const selectedPlayers = [];
    let isValid = true;
    let duplicatePlayer = null;

    // 清除上次的視覺錯誤
    positionSelectors.forEach(select => {
        select.style.border = '';
    });
    
    positionSelectors.forEach(select => {
        const playerName = select.value;
        if (playerName) { // 僅檢查已選中的球員
            if (selectedPlayers.includes(playerName)) {
                isValid = false;
                duplicatePlayer = playerName;
                // 為所有選到該重複球員的選單添加紅色邊框
                document.querySelectorAll(`select[value="${playerName}"]`).forEach(duplicateSelect => {
                    duplicateSelect.style.border = '2px solid red';
                });
            } else {
                selectedPlayers.push(playerName);
            }
        }
    });

    if (!isValid) {
        errorMessage.textContent = `錯誤：球員「${duplicatePlayer}」被重複選入守備位置！請修正。`;
    } else {
        errorMessage.textContent = ''; // 清空錯誤訊息
    }

    return isValid;
}


// -----------------------------------
// 4. 初始化和事件監聽
// -----------------------------------

// 步驟 1: 填充所有選單 (守備位置和打序使用相同的球員列表)
populateSelectors(positionSelectors, players);
populateSelectors(battingSelectors, players);

// 步驟 2: 監聽守備位置的變動，即時檢查重複
positionSelectors.forEach(select => {
    select.addEventListener('change', validatePositions);
});

// 步驟 3: 處理表單提交
form.addEventListener('submit', function(event) {
    // 阻止預設提交行為
    event.preventDefault(); 
    
    // 執行守備位置驗證
    const isPosValid = validatePositions();
    
    if (isPosValid) {
        // 如果驗證通過，這裡可以執行您實際的數據提交邏輯
        errorMessage.textContent = '✅ 陣容驗證通過！數據已準備好傳送到後端。';
        errorMessage.style.color = '#28a745';
        errorMessage.style.borderColor = '#28a745';

        // 範例：收集並列印數據
        const defenseData = Array.from(positionSelectors).reduce((acc, select) => {
            acc[select.name] = select.value;
            return acc;
        }, {});
        const battingData = Array.from(battingSelectors).reduce((acc, select) => {
            acc[select.name] = select.value;
            return acc;
        }, {});

        console.log("守備陣容:", defenseData);
        console.log("打序:", battingData);

        // 實際應用中，您會在這裡使用 fetch/XMLHttpRequest 將數據發送到伺服器
    } else {
        // 驗證失敗的處理已在 validatePositions 中完成
    }
});