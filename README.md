# coderhouse-nodejs-api

### Endpoints Products

- GET /api/products
- GET /api/products/:id
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

### Query params availables

- sort =  asc | desc
- limit = number
- page = number
- category = string

### Endpoints Carts

- POST /api/carts
- GET /api/carts/:cid
- POST /api/carts/:cid/products/:pid
- PUT /api/carts/:cid/products/:pid
- DELETE /api/carts/:id
- DELETE /api/carts/:cid/products/:pid

### Endpoints Sessions

- POST /api/session/register
- POST /api/session/login

### Install

```bash
npm install
```

### Run

```bash

npm run dev

```

