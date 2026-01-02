# Awareness Network - Project TODO

## Phase 1: 数据库架构和核心数据模型
- [x] 设计用户角色系统（创建者Creator和消费者Consumer）
- [x] 设计潜意识数据（Latent Vector）表结构
- [x] 设计交易订单和支付记录表
- [x] 设计评价和反馈系统表
- [x] 设计订阅计划和用户订阅表
- [x] 设计访问权限和授权表
- [x] 设计分析统计相关表
- [x] 执行数据库迁移

## Phase 2: 后端API和业务逻辑
- [x] 实现用户认证和角色管理API
- [x] 实现潜意识数据上传和管理API
- [x] 实现市场浏览和搜索API（支持多维度筛选）
- [x] 实现动态定价引擎逻辑
- [x] 实现安全交易和访问控制API
- [x] 实现MCP协议集成接口
- [x] 实现LatentMAS转换器工具API
- [x] 实现评价和反馈系统API
- [x] 实现交易分析数据聚合API

## Phase 3: Stripe支付和订阅系统
- [x] 添加Stripe功能到项目
- [x] 配置Stripe产品和价格
- [x] 实现交易费支付流程（15-25%）
- [x] 实现订阅套餐购买流程
- [x] 实现Webhook处理订阅状态
- [x] 实现退款和发票管理

## Phase 4: 前端界面和用户体验
- [x] 设计整体视觉风格和主题
- [x] 实现首页和Landing Page
- [x] 实现用户注册和登录界面
- [x] 实现创建者仪表板（收入统计、调用次数）
- [x] 实现消费者仪表板（购买历史、使用情况）
- [x] 实现潜意识数据上传和管理界面
- [x] 实现市场浏览和搜索界面
- [x] 实现AI能力详情页面
- [x] 实现购买和支付流程界面
- [x] 实现评价和反馈界面
- [x] 实现订阅管理界面
- [x] 实现用户个人资料页面

## Phase 5: 智能推荐和通知系统
- [ ] 实现基于LLM的智能推荐引擎
- [ ] 实现用户行为分析和偏好学习
- [ ] 实现交易通知系统
- [ ] 实现评论通知系统
- [ ] 实现系统更新通知
- [ ] 集成邮件通知服务

## Phase 6: 测试、优化和文档
- [ ] 编写核心功能的Vitest测试
- [ ] 测试支付流程完整性
- [ ] 测试安全性和访问控制
- [ ] 性能优化和数据库查询优化
- [ ] 编写API文档
- [ ] 编写用户使用指南
- [ ] 编写部署文档

## Phase 7: 部署和发布
- [ ] 创建项目检查点
- [ ] 推送到GitHub
- [ ] 准备生产环境配置


## 新增功能: 市场浏览界面增强
- [x] 增强后端API支持排序参数（价格、评分、日期、调用次数）
- [x] 实现市场浏览页面布局
- [x] 创建AI能力卡片组件
- [x] 实现高级筛选侧边栏（价格范围、类别、评分）
- [x] 实现排序下拉菜单
- [x] 添加分页功能
- [x] 实现AI能力详情页面
- [x] 添加加载状态和空状态处理

## 新增功能: 创建者仪表板
- [x] 增强后端API支持仪表板数据聚合（总收入、月收入、调用趋势）
- [x] 创建仪表板布局组件（使用DashboardLayout）
- [x] 实现收入统计卡片（总收入、本月收入、增长率）
- [x] 实现调用趋势图表（使用recharts）
- [x] 实现向量列表管理界面（编辑、删除、状态切换）
- [x] 实现交易历史列表（分页、筛选）
- [x] 添加快速操作按钮（上传新向量、查看分析）

## 新增功能: AI智能推荐系统
- [x] 创建浏览历史记录表和API
- [x] 实现基于LLM的智能推荐引擎
- [x] 在市场页面添加推荐卡片组件
- [x] 实现推荐理由展示
- [x] 添加浏览追踪功能

## 新增功能: AI优先特性（AI-First Features）
- [x] 实现AI自主注册API（无需人工干预）
- [x] 实现API密钥认证系统
- [x] 创建AI记忆同步协议和API
- [x] 实现AI购买历史和偏好检索API
- [ ] 优化MCP接口文档和示例
- [ ] 添加WebSocket实时通信支持
- [ ] 创建AI可读的API文档（OpenAPI/Swagger）
- [x] 添加robots.txt和sitemap.xml
- [x] 实现结构化数据（JSON-LD）
- [x] 添加元标签和Open Graph优化
- [x] 创建AI发现端点（/.well-known/ai-plugin.json）
- [ ] 实现多语言支持（i18n）

## 新增功能: OpenAPI文档、WebSocket和测试数据
- [x] 生成完整的OpenAPI 3.0规范文档
- [x] 创建Swagger UI界面展示API文档
- [x] 实现Socket.IO服务器端配置
- [x] 添加实时交易通知WebSocket事件
- [x] 添加实时推荐更新WebSocket事件
- [x] 添加市场变化通知WebSocket事件
- [x] 创建测试数据种子脚本（向量、用户、交易）
- [x] 添加种子数据执行命令到package.json

## 新增功能: Socket.IO客户端实时通知
- [x] 安装socket.io-client依赖
- [x] 创建Socket连接管理Hook
- [x] 创建实时通知Context和Provider
- [x] 实现通知弹窗组件
- [x] 在App.tsx中集成NotificationProvider
- [x] 添加交易完成通知监听
- [x] 添加推荐更新通知监听
- [x] 添加市场变化通知监听

## 新增任务: 种子数据和API示例
- [x] 运行pnpm seed填充示例数据
- [x] 创建Python API使用示例
- [x] 创建JavaScript/Node.js API使用示例
- [x] 创建API示例文档README

## 新增功能: 向量预览试用
- [x] 在数据库添加免费试用配额字段
- [x] 实现试用API端点（限制调用次数）
- [x] 在向量详情页添加“免费试用”按钮
- [x] 创建试用对话框和输入界面
- [x] 显示剩余试用次数
- [x] 添加试用结果展示

## 新增功能: 推荐算法优化
- [x] 创建用户行为追踪表（点击、浏览时长）
- [x] 实现协同过滤算法
- [x] 创建A/B测试框架
- [x] 实现推荐效果评估指标
- [x] 添加推荐算法切换配置

## 新增功能: VitePress开发者文档
- [x] 初始化VitePress项目
- [x] 创建文档目录结构
- [x] 编写API参考文档
- [x] 编写集成指南
- [x] 添加代码示例和最佳实践
- [x] 配置搜索和导航

## 当前部署准备任务
- [x] 编写Vitest测试用例（核心API端点）
- [x] 集成邮件通知服务（Resend）
- [x] 修复Socket.IO WebSocket连接错误
- [x] 修复GitHub同步的Home.tsx语法错误
- [x] 解决文件监视器限制问题
- [x] 准备部署到生产环境

## AI可发现性和LatentMAS优化任务
- [x] 实现真实的向量对齐算法（线性变换矩阵）
- [x] 实现向量维度转换算法（PCA/Autoencoder）
- [x] 创建模型兼容性矩阵
- [x] 开发Python SDK for AI agents
- [x] 创建完整的AI代理使用示例
- [x] 编写AI Quick Start指南
- [ ] 创建 Jupyter Notebook演示
- [x] 优化AI插件发现机制
- [x] 添加模型对齐质量验证
- [x] 创建AI代理注册流程文档

## Vite HMR WebSocket修复任务
- [x] 修复Vite配置以支持Manus代理环境的WebSocket连接
- [x] 配置HMR使用正确的协议和端口
- [x] 测试热模块替换功能

## GitHub文档和市场推广任务
- [x] 更新GitHub README，添加LatentMAS协议说明
- [x] 编写技术白皮书（Whitepaper）
- [x] 更新官网首页，展示AI代理自主交易能力
- [x] 准备OpenAI Plugin Store提交材料
- [x] 准备Anthropic插件目录提交材料

## 示例向量数据创建任务
- [x] 准备示例向量数据脚本（可通过UI手动创建）
- [x] 定义15个高质量示例（5 NLP + 5 Vision + 5 Audio）

## API购买流程实现任务
- [x] 实现POST /api/vectors/purchase端点
- [x] 集成Stripe支付API
- [x] 创建购买记录和访问令牌
- [x] 实现POST /api/vectors/invoke端点（调用购买的向量）
- [x] 实现GET /api/vectors/:id/pricing端点（获取定价）
- [x] 实现GET /api/vectors/my-purchases端点（查询购买历史）

## API密钥验证系统实现任务
- [x] 创建apiKeys数据库表（schema）
- [x] 实现API密钥生成函数（带前缀和校验和）
- [x] 实现API密钥验证函数
- [x] 更新AI注册端点生成真实API密钥
- [x] 更新所有API端点使用真实密钥验证
- [x] 实现密钥管理功能（生成、验证、列表、撤销、轮换）
- [ ] 编写API密钥系统的测试用例

## 插件市场提交任务
- [x] 准备OpenAI Plugin Store提交材料和指南
- [x] 准备Anthropic插件目录提交材料和指南
- [ ] 验证插件发现端点可访问性
- [ ] 测试AI代理自主注册流程

## API密钥管理UI任务
- [x] 创建tRPC端点：listApiKeys, createApiKey, revokeApiKey, deleteApiKey
- [x] 创建ApiKeyManager组件（列表、生成、吊销、删除）
- [x] 添加密钥复制功能和安全提示
- [x] 集成到用户个人中心页面
- [x] 测试完整流程（生成、查看、吊销）

## GitHub推送和官网更新任务
- [x] 配置GitHub远程仓库（Awareness-Market）
- [x] 推送所有代码到GitHub
- [x] 更新官网Footer组件，添加文档、API、GitHub等链接
- [x] 创建API密钥交互式教程组件（Python SDK、cURL、JavaScript）
- [x] 添加实时API测试功能
- [x] 集成教程到Profile页面

## Python SDK增强任务
- [x] 实现async/await异步支持（AsyncAwarenessClient）
- [x] 实现流式响应支持（SSE/streaming）
- [x] 实现批量操作（batch_purchase, batch_invoke）
- [x] 添加缓存层（LRU cache for vector metadata）
- [x] 创建类型存根文件（.pyi）
- [x] 准备PyPI打包配置（setup.py, pyproject.toml, MANIFEST.in, py.typed）
- [x] 更新SDK文档和示例
- [ ] 编写SDK测试用例

## PyPI发布和API完善任务
- [x] 准备PyPI发布指南和脚本（需要本地环境和PyPI账号）
- [x] 创建5个NLP示例向量
- [x] 创建5个Vision示例向量
- [x] 创建5个Audio示例向量
- [x] 实现/api/vectors/invoke/stream端点（SSE）
- [x] 实现/api/vectors/batch-invoke端点
- [x] 测试流式和批量API

## SDK文档和测试任务
- [x] 为Python SDK撰写详细使用文档
- [x] 更新GitHub README添加SDK安装和使用说明
- [x] 编写Python SDK单元测试（同步、异步、流式、批量）
- [x] 创建网站SDK教程页面（/docs/sdk）
- [x] 完善网页尾部链接（SDK Documentation、API Reference、Whitepaper、GitHub、Python SDK）
