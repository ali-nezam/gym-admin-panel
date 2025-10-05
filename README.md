# 🏋️‍♂️ Gym Admin Panel

A modern and responsive **Admin Dashboard** for gym management — built with **React, Vite, Styled-Components, React Query, and Supabase**.  
The panel allows gym owners to manage **coaches, members, and classes**, track overall stats, and visualize revenue trends.

🌐 **Live Demo:** [gym-admin-panel-gold.vercel.app](https://gym-admin-panel-gold.vercel.app/)

---

## 🚀 Features

- 📊 **Dashboard Overview**
  - Total number of classes, coaches, members, and total revenue
  - Pie chart for membership status (active, expired, gold)
  - Recent members section
  - Revenue analytics with an interactive chart

- 🧑‍🏫 **Coaches Management**
  - View, add, edit, and delete coaches
  - Filter, sort, and search by name or expertise
  - Responsive and server-side filtering for performance

- 💪 **Classes Management**
  - Manage class capacity, price, and assigned coach
  - Add members directly to a class
  - View class participants in a modal
  - Visual capacity progress bar for each class

- 🧍 **Members Management**
  - Add and view gym members
  - Assign membership type and renewal date
  - Track expiration and coach assignment

- 📅 **Dashboard Statistics**
  - Aggregated statistics fetched from Supabase
  - Fully dynamic chart and data updates

- 📱 **Fully Responsive Design**
  - Optimized for desktop, tablet, and mobile
  - Adaptive table-to-card layouts for smaller screens

- 🔐 **Login Page**
  - Simple login form for demo access
  - Records visitor login info (email, timestamp) to Supabase

---

## 🛠️ Tech Stack

- ⚡ **React + Vite**
- 💅 **Styled Components**
- 🔄 **React Query**
- 📦 **Supabase** (Database & API)
- 🧾 **React Hook Form**
- 📈 **Recharts**
- 🚀 **Vercel** (Deployment)

---

## 📂 Folder Structure

gym-admin-panel/
├── src/
│ ├── api/ # API logic (Supabase integration)
│ ├── features/ # Core app features (coaches, members, classes, dashboard)
│ ├── ui/ # Reusable UI components
│ ├── pages/ # Main route pages
│ ├── utils/ # Helper functions and formatters
│ ├── assets/ # Images, icons, etc.
│ └── App.jsx # Main app component


---

## ⚙️ Run Locally

1. **Clone the project**

```bash
   git clone https://github.com/ali-nezam/gym-admin-panel.git
   cd gym-admin-panel
```

2. **Install dependencies**

```bash
   npm install
```

3. **Start development server**

```bash
   npm run dev
```

4. **Build for production**
   
```bash
   npm run build
```


---

## 🧠 What I Learned

* Structuring scalable React projects
* Working with Supabase for real-time data and APIs
* Managing async state using React Query
* Creating clean and reusable UI with Styled Components
* Building responsive layouts from desktop-first designs

---

## 📸 Screenshots

**🖼️Login Overview**

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c3e65c37-2e44-4472-913d-55ca25b25a0e" /> 

---

**🖼️Dashboard Overview**
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/23265b44-75d5-489b-8791-f8c81372ce73" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/6e97a403-a0f6-46e9-9404-0b3319ba927f" />


---

**🖼️Classes Overview**
<img width="1919" height="1041" alt="image" src="https://github.com/user-attachments/assets/621b3879-81bb-46a1-8c2a-f53befe9452f" />

---

**🖼️members Overview**
<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/19dd0c15-007e-4815-8a1b-c9a20f64b0df" />

---

**🖼️Coaches Overview**
<img width="1919" height="934" alt="image" src="https://github.com/user-attachments/assets/1279256d-4858-4640-b285-ffa4742c99cb" />

---
**🖼️mobile Overview**
<img width="1920" height="1440" alt="image" src="https://github.com/user-attachments/assets/4c790d96-75e9-4a8a-8dbe-584ce81b98fa" />







