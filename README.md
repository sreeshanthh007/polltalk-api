# 🗳️ PollTalk API – Real-Time Polling Platform

PollTalk API is the backend service for **PollTalk**, a real-time polling and discussion platform. It allows users to create polls, vote instantly, and see live results.

The project also includes **simple static polls**, where predefined poll questions and options are displayed without dynamic creation, making it suitable for basic polling and learning use cases.

---

## ✨ Features

### 🔹 User Side

* 👤 User simple login
* ✅ Vote on polls
* 📊 View live poll results
* 💬 users can participate in chat



## 🏗️ Tech Stack

* **Node.js**
* **TypeScript**
* **Express.js**
* **Socket.io** (real-time voting & updates)

---

## 📁 Project Structure (Simplified)

```
src/
│   server.ts
│
├── models
│   ├── message.model.ts
│   ├── poll.model.ts
│   └── user.model.ts
│
├── shared
│   └── constants.ts
│
├── socket
│   └── events
│       ├── chat.event.ts
│       └── poll.event.ts
│
└── websocket
    ├── socket.server.ts
    └── handlers
        └── socket.handler.ts
```

---

## ⚙️ Setup Instructions

### 1️⃣ Install dependencies

```
npm install
```

### 2️⃣ Environment Variables

Create a `.env` file:

```
PORT=3000
```

### 3️⃣ Run the server

```
npm run dev
```

Server will run at:

```
http://localhost:3000
```

---

## 📌 Core Modules


* **Poll Module** –  polls, vote, fetch results
* **Realtime Module** – live vote updates using sockets

---

PollTalk API focuses on **real-time interaction**, **simplicity**, and **scalability**, making it suitable for live polling systems, feedback platforms, and interactive applications.
