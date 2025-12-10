![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

WindCard Arena是一个基于HTML、CSS和JavaScript开发的网页卡牌游戏，玩家可以通过收集不同等级的卡牌，参与各种竞技场战斗，购买道具和进行抽奖。

## 项目功能

### 1. 主页面
- 显示玩家拥有的各种卡牌数量
- 提供进入不同竞技场的入口
- 提供前往商城和抽奖页面的链接

### 2. 竞技场系统
- **R竞技场**：消耗2张R卡即可进入
- **UR竞技场**：消耗2张UR卡即可进入
- **SSR竞技场**：消耗2张SSR卡即可进入

### 3. 商城系统
- 提供各种卡牌和道具的购买功能

### 4. 抽奖系统
- 消耗8张R卡进行一次抽奖
- 有机会获得更高等级的卡牌

### 5. 卡牌系统
- **卡牌等级**：R、SSR、UR
- **技能卡牌**：变化、固定、跳跃等特殊技能
- **卡牌存储**：使用localStorage进行本地数据管理

## 项目结构

```
Cards-Wind/
├── bjm/                 # 游戏音乐文件
├── cards/               # 卡牌图片资源
├── cards-bag/           # 卡包图片资源
├── cards-wind代码区/     # 核心代码
│   ├── css/            # 样式文件
│   ├── html/           # 页面文件
│   └── js/             # JavaScript逻辑
└── 背景图/              # 游戏背景图片
```

## 技术栈

- **前端框架**：HTML5、CSS3、JavaScript (ES6+)
- **数据存储**：localStorage
- **资源类型**：图片（PNG、JPG）、音频（OGG）

## 运行方式

1. 直接在浏览器中打开 `cards-wind代码区/html/主页面.html` 文件
2. 游戏数据将自动存储在浏览器的localStorage中

## 游戏操作

1. **进入竞技场**：点击主页面上的对应竞技场按钮，消耗相应卡牌即可进入
2. **前往商城**：点击主页面顶部的商城按钮
3. **进行抽奖**：点击主页面底部的抽奖按钮，消耗8张R卡
4. **查看卡牌数量**：主页面顶部显示当前拥有的R、SSR、UR卡牌数量

## 游戏规则

- 不同竞技场需要消耗对应等级的卡牌才能进入
- 抽奖功能消耗8张R卡，有机会获得更高等级的卡牌
- 游戏数据保存在浏览器本地，清除浏览器数据会导致游戏进度丢失

## 开发说明

### 核心文件说明

- `主页面.html`：游戏主入口页面
- `数据库函数.js`：负责卡牌数据的存储、读取和修改
- `主页面.js`：主页面的交互逻辑
- `R竞技场.js`、`UR竞技场.js`、`SSR竞技场.js`：各竞技场的战斗逻辑
- `商城.js`：商城购买逻辑
- `抽奖.js`：抽奖功能逻辑

### 数据结构

卡牌数据存储在localStorage中，格式为数组：
```javascript
// cardsnumber数组结构
[R卡数量, SSR卡数量, UR卡数量, 变化技能卡数量, 固定技能卡数量, 跳跃技能卡数量]
```

## 资源说明

- **卡牌图片**：位于 `cards/` 文件夹
- **卡包图片**：位于 `cards-bag/` 文件夹
- **背景图片**：位于 `背景图/` 文件夹
- **游戏音乐**：位于 `bjm/` 文件夹

## 浏览器兼容性

- 推荐使用现代浏览器（Chrome、Firefox、Safari、Edge）
- 不支持IE浏览器

## 更新日志

- 初始版本：实现了基本的卡牌系统、竞技场、商城和抽奖功能

## 开发团队

- 开发者：[团队/个人名称]
- 联系方式：[邮箱/社交媒体]

## 许可证

[MIT License]()

---

**Cards-Wind** - 一款充满乐趣的网页卡牌游戏，期待你的参与！