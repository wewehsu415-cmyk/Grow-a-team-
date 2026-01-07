console.log("外部 JavaScript 檔案已載入並執行！");

// -----------------------------------
// 1. 數據定義
// -----------------------------------

const database = {
    // --- 野手 ---
    "C": [ { name: '吉力吉撈．鞏冠 (龍)', score: 28, price: 14 }, { name: '林泓育 (猿)', score: 24, price: 11 }, { name: '戴培峰 (悍將)', score: 18, price: 8 } ],
    "1B": [ { name: '朱育賢 (猿)', score: 26, price: 12 }, { name: '許基宏 (兄弟)', score: 25, price: 11 }, { name: '林益全 (獅)', score: 16, price: 7 } ],
    "2B": [ { name: '陳晨威 (猿)', score: 27, price: 13 }, { name: '吳念庭 (雄鷹)', score: 25, price: 12 }, { name: '李凱威 (龍)', score: 23, price: 10 } ],
    "3B": [ { name: '劉基鴻 (龍)', score: 25, price: 11 }, { name: '梁家榮 (猿)', score: 22, price: 9 }, { name: '王威晨 (兄弟)', score: 21, price: 9 } ],
    "SS": [ { name: '江坤宇 (兄弟)', score: 30, price: 15 }, { name: '張政禹 (龍)', score: 14, price: 6 }, { name: '王勝偉 (悍將)', score: 12, price: 5 } ],
    "LF": [ { name: '林安可 (獅)', score: 27, price: 13 }, { name: '申皓瑋 (悍將)', score: 19, price: 9 }, { name: '周思齊 (兄弟)', score: 13, price: 5 } ],
    "CF": [ { name: '陳傑憲 (獅)', score: 29, price: 14 }, { name: '郭天信 (龍)', score: 22, price: 9 }, { name: '宋晟睿 (兄弟)', score: 20, price: 8 } ],
    "RF": [ { name: '陳子豪 (兄弟)', score: 25, price: 11 }, { name: '邱智呈 (獅)', score: 24, price: 10 }, { name: '張志豪 (兄弟)', score: 18, price: 8 } ],
    "DH": [ { name: '魔鷹 (雄鷹)', score: 30, price: 15 }, { name: '廖健富 (猿)', score: 26, price: 12 }, { name: '胡金龍 (悍將)', score: 10, price: 4 } ],

    // --- 投手 ---
    "SP": [ 
        { name: '古林睿煬 (獅)', score: 30, price: 15 }, { name: '勝騎士 (獅)', score: 29, price: 14 }, { name: '威能帝 (猿)', score: 29, price: 14 }, 
        { name: '徐若熙 (龍)', score: 28, price: 14 }, { name: '羅戈 (兄弟)', score: 27, price: 13 }, { name: '德保拉 (兄弟)', score: 27, price: 13 }, 
        { name: '鋼龍 (龍)', score: 26, price: 12 }, { name: '布雷克 (獅)', score: 25, price: 11 }, { name: '黃子鵬 (猿)', score: 24, price: 11 },
        { name: '伍鐸 (龍)', score: 23, price: 10 }, { name: '陳柏豪 (雄鷹)', score: 20, price: 9 }, { name: '道博格 (悍將)', score: 19, price: 8 },
        { name: '鄭凱文 (兄弟)', score: 15, price: 6 }, { name: '江辰晏 (獅)', score: 12, price: 5 }, { name: '王溢正 (猿)', score: 8, price: 4 }
    ],
    "RP_CL": [ { name: '後勁 (雄鷹)', score: 26, price: 12 }, { name: '陳韻文 (獅)', score: 24, price: 10 }, { name: '林詩翔 (雄鷹)', score: 18, price: 8 } ],
    "RP_SU": [ { name: '呂彥青 (兄弟)', score: 23, price: 10 }, { name: '高塩將樹 (獅)', score: 19, price: 7 }, { name: '賴鴻誠 (悍將)', score: 17, price: 7 } ],
    "RP_MID": [ { name: '吳俊偉 (兄弟)', score: 25, price: 11 }, { name: '陳冠宇 (猿)', score: 20, price: 8 }, { name: '王尉永 (悍將)', score: 18, price: 7 } ],
    "RP_RES": [ { name: '邱浩鈞 (獅)', score: 16, price: 6 }, { name: '陳鴻文 (悍將)', score: 15, price: 6 }, { name: '黃明存 (雄鷹)', score: 11, price: 5 } ],
    "RP_LONG": [ { name: '吳哲源 (兄弟)', score: 18, price: 8 }, { name: '施子謙 (猿)', score: 14, price: 5 }, { name: '游霆崴 (悍將)', score: 10, price: 4 } ],
    "RP_MOP": [ { name: '蔡齊哲 (兄弟)', score: 12, price: 5 }, { name: '林子崴 (獅)', score: 9, price: 4 }, { name: '林樺慶 (雄鷹)', score: 4, price: 3 } ]
};

const allPitchers = [
    ...database.SP, ...database.RP_CL, ...database.RP_SU, ...database.RP_MID, ...database.RP_RES, ...database.RP_LONG, ...database.RP_MOP
];

const MAX_BUDGET = 200;

// -----------------------------------
// 2. 對照表
// -----------------------------------
const fieldMap = {
    'pos_C': 'C', 'pos_1B': '1B', 'pos_2B': '2B', 'pos_3B': '3B',
    'pos_SS': 'SS', 'pos_LF': 'LF', 'pos_CF': 'CF', 'pos_RF': 'RF'
};

const pitcherSectionMap = {
    'sp_1': 'SP', 'sp_2': 'SP', 'sp_3': 'SP', 'sp_4': 'SP', 'sp_5': 'SP',
    'rp_closer': 'RP_CL', 'rp_setup': 'RP_SU', 'rp_middle': 'RP_MID',
    'rp_rescue': 'RP_RES', 'rp_long': 'RP_LONG', 'rp_mopup': 'RP_MOP'
};

// -----------------------------------
// 3. DOM 選取
// -----------------------------------
const fieldBatterSelectors = document.querySelectorAll('.field .position:not([data-pos="P"]) select');
const fieldPitcherSelector = document.getElementById('pos_P');
const battingOrderSelectors = document.querySelectorAll('.batting_order select');
const pitcherSectionSelectors = document.querySelectorAll('.pitcher-select');

const totalScoreDisplay = document.getElementById('totalScore');
const remainingBudgetDisplay = document.getElementById('remainingBudget');
const errorMessage = document.getElementById('errorMessage');
const form = document.getElementById('teamForm');

// -----------------------------------
// 4. 核心函數
// -----------------------------------

function populateOneSelect(selectElement, dataList) {
    while (selectElement.options.length > 1) {
        selectElement.remove(1);
    }
    dataList.forEach(player => {
        const option = document.createElement('option');
        option.value = player.name;
        option.textContent = player.name; 
        option.dataset.score = player.score;
        option.dataset.price = player.price;
        selectElement.appendChild(option);
    });
}

/**
 * 動態更新打序表選項 (維持打序表 0 元)
 */
function updateBattingOrderOptions() {
    const currentFielders = [];
    fieldBatterSelectors.forEach(select => {
        const selectedOption = select.options[select.selectedIndex];
        if (select.value) {
            currentFielders.push({
                name: select.value,
                score: selectedOption.dataset.score,
                price: 0 
            });
        }
    });

    const dhPlayers = database.DH.map(player => ({
        name: player.name,
        score: player.score,
        price: 0 
    }));

    const availableBatters = [...currentFielders, ...dhPlayers];

    battingOrderSelectors.forEach(select => {
        const currentValue = select.value;
        while (select.options.length > 1) {
            select.remove(1);
        }
        availableBatters.forEach(player => {
            let exists = false;
            for (let i = 0; i < select.options.length; i++) {
                if (select.options[i].value === player.name) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                const option = document.createElement('option');
                option.value = player.name;
                option.textContent = player.name;
                option.dataset.score = player.score;
                option.dataset.price = 0; 
                select.appendChild(option);
            }
        });
        select.value = currentValue;
        if (select.value === "") {
            updateSingleDisplay(select, 'bat-score');
        }
    });
}

function initSelectors() {
    fieldBatterSelectors.forEach(select => {
        const key = fieldMap[select.id];
        if (key && database[key]) populateOneSelect(select, database[key]);
    });
    if(fieldPitcherSelector) populateOneSelect(fieldPitcherSelector, allPitchers);
    pitcherSectionSelectors.forEach(select => {
        const key = pitcherSectionMap[select.name];
        if (key && database[key]) populateOneSelect(select, database[key]);
    });
    updateBattingOrderOptions();
}

function updateSingleDisplay(selectElement, displayClass) {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const score = selectedOption && selectedOption.dataset.score ? parseInt(selectedOption.dataset.score) : 0;
    const price = selectedOption && selectedOption.dataset.price ? parseInt(selectedOption.dataset.price) : 0;
    
    let displayDiv = selectElement.parentNode.querySelector(`.${displayClass}`);
    
    if (displayDiv) {
        if (score > 0) {
            displayDiv.textContent = `${score}分 / $${price}`;
            if (score >= 26) displayDiv.style.color = '#ffeb3b';
            else if (score >= 20) displayDiv.style.color = '#ff8c00';
            else if (score <= 12) displayDiv.style.color = '#ccc';
            else displayDiv.style.color = ''; 
        } else {
            displayDiv.textContent = '0分 / $0';
            displayDiv.style.color = '';
        }
    }
}

function calculateStats() {
    let totalScore = 0;
    let totalCost = 0;
    
    const processElements = (elements) => {
        const list = (elements instanceof NodeList) ? elements : [elements];
        list.forEach(select => {
            const selectedOption = select.options[select.selectedIndex];
            totalScore += parseInt(selectedOption?.dataset?.score || 0);
            totalCost += parseInt(selectedOption?.dataset?.price || 0);
        });
    };

    processElements(fieldBatterSelectors);
    if(fieldPitcherSelector) processElements(fieldPitcherSelector);
    processElements(pitcherSectionSelectors);
    processElements(battingOrderSelectors); // 價格為0，分數照算

    if(totalScoreDisplay) totalScoreDisplay.textContent = totalScore;

    const remaining = MAX_BUDGET - totalCost;
    if(remainingBudgetDisplay) {
        remainingBudgetDisplay.textContent = remaining;
        if (remaining < 0) remainingBudgetDisplay.classList.add('over-budget');
        else remainingBudgetDisplay.classList.remove('over-budget');
    }
    
    return remaining >= 0;
}

/**
 * 【修改重點】驗證函數：將守備位置和打序表分開檢查
 */
function validateAll() {
    let isValid = true;
    let duplicateInfo = "";

    const clearBorder = (list) => {
        const elems = (list instanceof NodeList) ? list : [list];
        elems.forEach(s => { if(s.parentElement) s.parentElement.style.border = ''; });
    };

    // 分組定義
    const fieldBatters = fieldBatterSelectors;      // 群組1: 場上野手 (不能重複守備)
    const battingOrder = battingOrderSelectors;     // 群組2: 打序表 (不能重複打擊)
    const pitcherPool = [fieldPitcherSelector, ...pitcherSectionSelectors].filter(el => el !== null); // 群組3: 投手

    clearBorder(fieldBatters);
    clearBorder(battingOrder);
    clearBorder(pitcherPool);

    // 通用檢查函數
    const checkDuplicates = (selectorList, groupName) => {
        const selectedMap = {}; 
        selectorList.forEach(select => {
            const name = select.value;
            if (name) {
                if (!selectedMap[name]) selectedMap[name] = [];
                selectedMap[name].push(select);
            }
        });

        for (const [name, selects] of Object.entries(selectedMap)) {
            if (selects.length > 1) {
                isValid = false;
                duplicateInfo = `球員「${name}」在${groupName}中被重複選取！`;
                selects.forEach(sel => { if(sel.parentElement) sel.parentElement.style.border = '2px solid red'; });
            }
        }
    };

    // 分開執行檢查
    checkDuplicates(fieldBatters, "守備位置");  // 檢查一壘二壘是否同一人
    if(isValid) checkDuplicates(battingOrder, "打序表"); // 檢查第1棒第2棒是否同一人
    if(isValid) checkDuplicates(pitcherPool, "投手位置"); // 檢查投手是否重複

    if (errorMessage) {
        if (!isValid) errorMessage.textContent = `錯誤：${duplicateInfo}`;
        else errorMessage.textContent = ''; 
    }
    return isValid;
}

// -----------------------------------
// 5. 初始化與事件綁定
// -----------------------------------
initSelectors();

const handleFieldChange = function(e, displayClass) {
    updateBattingOrderOptions(); 
    validateAll();
    updateSingleDisplay(e.target, displayClass);
    calculateStats();
};

const handleNormalChange = function(e, displayClass) {
    validateAll();
    updateSingleDisplay(e.target, displayClass);
    calculateStats();
};

fieldBatterSelectors.forEach(select => select.addEventListener('change', (e) => handleFieldChange(e, 'pos-score')));

if(fieldPitcherSelector) fieldPitcherSelector.addEventListener('change', (e) => handleNormalChange(e, 'pos-score'));
battingOrderSelectors.forEach(select => select.addEventListener('change', (e) => handleNormalChange(e, 'bat-score')));
pitcherSectionSelectors.forEach(select => select.addEventListener('change', (e) => handleNormalChange(e, 'pitcher-score')));

if(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const isStructureValid = validateAll();
        const isBudgetValid = calculateStats();
        
        if (isStructureValid) {
            if (isBudgetValid) {
                const currentScore = totalScoreDisplay.textContent;
                const currentBudget = remainingBudgetDisplay.textContent;
                errorMessage.textContent = `✅ 陣容驗證通過！總分：${currentScore}，剩餘薪資：$${currentBudget}。`;
                errorMessage.style.color = '#28a745';
                errorMessage.style.borderColor = '#28a745';
            } else {
                errorMessage.textContent = `❌ 預算不足！您的薪資已透支，請調整陣容。`;
                errorMessage.style.color = '#dc3545';
                errorMessage.style.borderColor = '#dc3545';
            }
        }
    });
}