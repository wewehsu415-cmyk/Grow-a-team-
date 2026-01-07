document.addEventListener('DOMContentLoaded', () => {
    // 範例玩家資料 (可以替換為您的實際資料來源)
    let playersData = [
        { name: "戰神Kratos", score: 123 },
        { name: "暗影刺客", score: 103 }, // 分數最高
        { name: "精靈女王Lana", score:89  },
        { name: "龍騎士Draco", score: 78 },
        { name: "疾風之翼", score: 70 },
        { name: "魔法師Gandalf", score:67  },
        { name: "鐵血戰士", score: 59 },
        { name: "星際艦長", score: 38 }
    ];

    // 1. 依據分數降序排序
    // 使用 sort() 方法，a.score - b.score < 0 時，a 會排在 b 前面 (降序)
    playersData.sort((a, b) => b.score - a.score);

    const leaderboardList = document.getElementById('leaderboard-list');
    
    // 2. 動態生成列表項目
    playersData.forEach((player, index) => {
        // 計算排名 (index 從 0 開始，所以排名是 index + 1)
        const rank = index + 1;

        // 創建一個新的列表項目 (li)
        const listItem = document.createElement('li');
        listItem.classList.add('player-item');

        // 使用 innerHTML 方便地建立內部結構
        // toLocaleString() 用於分數的千分位逗號格式化 (例如: 120,500)
        listItem.innerHTML = `
            <span class="rank">${rank}</span>
            <span class="name">${player.name}</span>
            <span class="score">${player.score.toLocaleString('en-US')}</span>
        `;
        
        // 3. 將項目添加到列表中
        leaderboardList.appendChild(listItem);
    });
});