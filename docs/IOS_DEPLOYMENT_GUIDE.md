# Awareness Network - iOS 应用打包和上线指南

本指南将帮助您将 Awareness Network React Native 应用打包并发布到 Apple App Store。

---

## 前提条件

在开始之前，请确保您已具备以下条件：

### 1. Apple Developer Account

您需要一个有效的 Apple Developer Account（年费 $99 USD）。如果还没有，请访问 [Apple Developer Program](https://developer.apple.com/programs/) 注册。

### 2. 开发环境

- **macOS** 系统（必需，用于 iOS 开发）
- **Xcode** 14+ （从 Mac App Store 安装）
- **Node.js** 18+ 和 pnpm
- **Expo CLI** 和 **EAS CLI**

### 3. 项目配置

确保您已完成以下配置：

```bash
# 安装 EAS CLI
npm install -g eas-cli

# 登录 Expo 账户
eas login

# 初始化 EAS 配置
cd mobile-app
eas build:configure
```

---

## 第一步：配置应用信息

### 1.1 更新 app.json

编辑 `mobile-app/app.json` 文件，配置应用的基本信息：

```json
{
  "expo": {
    "name": "Awareness Network",
    "slug": "awareness-network",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/app-icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.awarenessnetwork",
      "buildNumber": "1",
      "infoPlist": {
        "NSCameraUsageDescription": "This app uses the camera to scan business cards and QR codes.",
        "NSPhotoLibraryUsageDescription": "This app accesses your photo library to select images for memories.",
        "NSMicrophoneUsageDescription": "This app uses the microphone for voice memos."
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#000000"
      },
      "package": "com.yourcompany.awarenessnetwork",
      "versionCode": 1
    },
    "extra": {
      "eas": {
        "projectId": "your-project-id"
      }
    }
  }
}
```

**重要配置说明：**

- `bundleIdentifier`: 必须是唯一的，建议使用反向域名格式（如 `com.yourcompany.awarenessnetwork`）
- `buildNumber`: 每次提交新版本时需要递增
- `version`: 遵循语义化版本号（如 1.0.0, 1.0.1, 1.1.0）
- `infoPlist`: iOS 权限说明，必须清楚说明为什么需要这些权限

### 1.2 配置环境变量

创建 `mobile-app/.env.production` 文件：

```env
EXPO_PUBLIC_API_URL=https://backend-7153iyjir-everest-ans-projects.vercel.app
```

---

## 第二步：准备应用资源

### 2.1 应用图标

应用图标必须满足以下要求：

- **尺寸**: 1024x1024 像素
- **格式**: PNG（无透明度）
- **位置**: `mobile-app/assets/app-icon.png`

您可以使用现有的图标或使用 [App Icon Generator](https://www.appicon.co/) 生成所需的所有尺寸。

### 2.2 启动画面

启动画面（Splash Screen）配置：

- **尺寸**: 建议 2048x2048 像素
- **格式**: PNG
- **位置**: `mobile-app/assets/splash.png`

### 2.3 应用截图

准备 App Store 所需的截图（至少 3 张，最多 10 张）：

**iPhone 截图尺寸要求：**
- iPhone 6.7" Display: 1290 x 2796 像素
- iPhone 6.5" Display: 1242 x 2688 像素
- iPhone 5.5" Display: 1242 x 2208 像素

**iPad 截图尺寸要求：**
- iPad Pro (6th Gen) 12.9": 2048 x 2732 像素
- iPad Pro (2nd Gen) 12.9": 2048 x 2732 像素

您可以使用 iOS 模拟器截图，或使用 [Screenshot Generator](https://www.screely.com/) 等工具。

---

## 第三步：构建 iOS 应用

### 3.1 配置 EAS Build

创建或编辑 `mobile-app/eas.json` 文件：

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "ios": {
        "simulator": false
      }
    },
    "production": {
      "distribution": "store",
      "ios": {
        "simulator": false
      }
    }
  },
  "submit": {
    "production": {
      "ios": {
        "appleId": "your-apple-id@example.com",
        "ascAppId": "your-app-store-connect-app-id",
        "appleTeamId": "your-team-id"
      }
    }
  }
}
```

### 3.2 开始构建

运行以下命令开始构建 iOS 应用：

```bash
cd mobile-app

# 构建生产版本
eas build --platform ios --profile production
```

构建过程将在云端进行，通常需要 10-20 分钟。您可以在 [Expo Dashboard](https://expo.dev/) 查看构建进度。

构建完成后，您将获得一个 `.ipa` 文件，可以下载到本地。

---

## 第四步：在 App Store Connect 创建应用

### 4.1 登录 App Store Connect

访问 [App Store Connect](https://appstoreconnect.apple.com/) 并使用您的 Apple Developer 账户登录。

### 4.2 创建新应用

1. 点击 "My Apps" → "+" → "New App"
2. 填写应用信息：
   - **Platforms**: iOS
   - **Name**: Awareness Network
   - **Primary Language**: English (或您的首选语言)
   - **Bundle ID**: 选择您在 app.json 中配置的 bundleIdentifier
   - **SKU**: 唯一标识符（如 awareness-network-001）
   - **User Access**: Full Access

### 4.3 填写应用元数据

在 App Store Connect 中填写以下信息：

#### 基本信息

- **App Name**: Awareness Network
- **Subtitle**: Your AI-Powered Memory Companion
- **Privacy Policy URL**: 您的隐私政策 URL（必需）
- **Category**: 
  - Primary: Productivity
  - Secondary: Utilities

#### 描述

```
Awareness Network is your intelligent companion for managing memories, contacts, and knowledge. 

KEY FEATURES:

🧠 Knowledge Graph
- Visualize connections between people, places, and events
- Natural language search: "Show me photos from Paris in 2023"
- Relationship strength visualization

👥 Social Network
- Track interaction frequency with contacts
- Context cards showing when and where you met
- Company analysis with industry insights

📸 Smart Memory Management
- AI-powered photo organization
- Encrypted cloud storage
- Timeline view of your memories

🔐 Privacy & Security
- Zero-knowledge architecture
- End-to-end encryption
- Your data stays yours

✨ AI-Powered Features
- Business card OCR with GPT-4 Vision
- Multi-format QR code scanning
- Automatic tagging and categorization

Perfect for professionals who value their relationships and want to keep their memories organized and secure.
```

#### 关键词

```
memory, knowledge graph, contacts, networking, AI, encryption, privacy, productivity, organization, business cards
```

#### 支持 URL

提供您的支持网站或联系方式 URL。

#### 营销 URL（可选）

您的产品营销页面 URL。

### 4.4 上传截图

在 "App Store" 标签页中，为每个设备尺寸上传至少 3 张截图。

---

## 第五步：提交审核

### 5.1 使用 EAS Submit 提交

```bash
# 提交到 App Store
eas submit --platform ios --profile production
```

或者手动上传：

### 5.2 手动上传（使用 Transporter）

1. 下载 [Transporter](https://apps.apple.com/us/app/transporter/id1450874784) 应用
2. 打开 Transporter 并登录您的 Apple ID
3. 将构建好的 `.ipa` 文件拖入 Transporter
4. 点击 "Deliver" 上传

### 5.3 在 App Store Connect 中选择构建版本

1. 返回 App Store Connect
2. 在应用页面中，选择 "App Store" 标签
3. 在 "Build" 部分，点击 "+" 选择刚上传的构建版本
4. 等待构建版本处理完成（可能需要几分钟到几小时）

### 5.4 填写审核信息

在 "App Review Information" 部分：

- **Sign-in required**: 如果需要登录，提供测试账户
  - Demo Account: demo@example.com
  - Password: DemoPassword123
- **Contact Information**: 您的联系信息
- **Notes**: 给审核人员的说明（可选）

### 5.5 提交审核

1. 检查所有信息是否完整
2. 点击 "Add for Review"
3. 点击 "Submit for Review"

---

## 第六步：等待审核

### 审核时间

- 通常需要 24-48 小时
- 首次提交可能需要更长时间
- 您可以在 App Store Connect 中查看审核状态

### 审核状态

- **Waiting for Review**: 等待审核
- **In Review**: 正在审核
- **Pending Developer Release**: 审核通过，等待发布
- **Ready for Sale**: 已上架
- **Rejected**: 被拒绝（需要修改后重新提交）

### 常见拒绝原因

1. **隐私政策缺失或不完整**
   - 确保提供详细的隐私政策 URL
   - 说明如何收集、使用和保护用户数据

2. **权限说明不清楚**
   - 在 `infoPlist` 中清楚说明为什么需要相机、相册等权限

3. **功能不完整或有 Bug**
   - 确保所有功能都能正常工作
   - 提供测试账户（如果需要登录）

4. **元数据问题**
   - 截图必须展示实际应用功能
   - 描述必须准确反映应用功能

---

## 第七步：发布应用

审核通过后，您有两个选择：

### 自动发布

在 "Version Release" 中选择 "Automatically release this version"，审核通过后立即上架。

### 手动发布

1. 在 "Version Release" 中选择 "Manually release this version"
2. 审核通过后，在 App Store Connect 中点击 "Release This Version"

---

## 更新应用

当您需要发布新版本时：

### 1. 更新版本号

在 `app.json` 中更新：

```json
{
  "expo": {
    "version": "1.0.1",  // 递增版本号
    "ios": {
      "buildNumber": "2"  // 递增构建号
    }
  }
}
```

### 2. 重新构建

```bash
eas build --platform ios --profile production
```

### 3. 提交新版本

```bash
eas submit --platform ios --profile production
```

### 4. 在 App Store Connect 中创建新版本

1. 在应用页面中，点击 "+" → "iOS"
2. 输入新版本号
3. 填写 "What's New in This Version"（更新说明）
4. 选择新的构建版本
5. 提交审核

---

## 测试和调试

### TestFlight 内部测试

在正式发布前，您可以使用 TestFlight 进行内部测试：

```bash
# 构建 TestFlight 版本
eas build --platform ios --profile preview

# 提交到 TestFlight
eas submit --platform ios --profile preview
```

在 App Store Connect 中：

1. 进入 "TestFlight" 标签
2. 添加内部测试人员（最多 100 人）
3. 测试人员将收到邀请邮件
4. 他们可以通过 TestFlight 应用安装测试版本

### 外部测试

外部测试需要 Apple 审核（通常 24-48 小时）：

1. 在 TestFlight 中创建外部测试组
2. 添加测试人员（最多 10,000 人）
3. 提交审核
4. 审核通过后，测试人员可以安装

---

## 常见问题

### Q1: 构建失败怎么办？

检查以下内容：
- 确保所有依赖都已正确安装
- 检查 `app.json` 配置是否正确
- 查看 EAS 构建日志获取详细错误信息

### Q2: 如何处理证书和配置文件？

EAS 会自动管理证书和配置文件。如果遇到问题：

```bash
# 清除本地凭证
eas credentials

# 重新生成证书
eas build --platform ios --clear-credentials
```

### Q3: 应用被拒绝后如何重新提交？

1. 根据拒绝原因修改应用
2. 递增 `buildNumber`
3. 重新构建和提交
4. 在 App Store Connect 中回复审核人员的消息

### Q4: 如何监控应用性能？

使用以下工具：
- **App Store Connect Analytics**: 下载量、崩溃率等
- **Sentry**: 错误追踪（需要集成）
- **Firebase Analytics**: 用户行为分析（需要集成）

---

## 最佳实践

### 1. 版本管理

- 使用语义化版本号（Major.Minor.Patch）
- 每次提交都递增 buildNumber
- 在 Git 中打标签记录每个发布版本

### 2. 测试

- 在多个设备和 iOS 版本上测试
- 使用 TestFlight 进行 beta 测试
- 收集用户反馈并及时修复问题

### 3. 性能优化

- 优化应用启动时间
- 减小应用包大小
- 使用懒加载和代码分割

### 4. 安全性

- 使用 HTTPS 进行所有网络请求
- 实施证书固定（Certificate Pinning）
- 定期更新依赖以修复安全漏洞

### 5. 用户体验

- 提供清晰的错误消息
- 实现优雅的降级策略
- 支持深色模式和动态字体

---

## 相关资源

- [Expo Documentation](https://docs.expo.dev/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [App Store Connect Help](https://help.apple.com/app-store-connect/)

---

## 支持

如果您在部署过程中遇到问题，请参考：

1. [Expo Forums](https://forums.expo.dev/)
2. [Stack Overflow](https://stackoverflow.com/questions/tagged/expo)
3. [Apple Developer Forums](https://developer.apple.com/forums/)

---

**祝您发布顺利！** 🎉

如有任何问题，请随时联系技术支持团队。
