# Buy Me a Chai

A simple platform where supporters can buy you a chai (tea) as a token of appreciation. Inspired by platforms like Buy Me a Coffee, this app allows creators to receive support from their audience.

## 🚀 Features

- User authentication with Auth.js
- Creator profile pages
- Payment integration
- MongoDB database support
- Responsive UI with Tailwind CSS

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Styling:** Tailwind CSS
- **Auth:** Auth.js
- **Database:** MongoDB

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- MongoDB instance (local or Atlas)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohit-err/buy_me_a_chai.git
   cd buy_me_a_chai
   
2. **Install dependencies**
   ```bash
   npm install
3. **Configure environment variables**
  Create a .env.local file in the root of the project and add the following (replace with your actual credentials):
    ```bash
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_nextauth_secret
    NEXTAUTH_URL=http://localhost:3000
4. **Run the development server**
   ```bash
    npm run dev
5. Visit http://localhost:3000 in your browser 🎉

##  License 
   This project is licensed under the MIT License. See the LICENSE file for details.
  
