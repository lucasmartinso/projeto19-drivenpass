# <p align = "center">🔐 Project DrivenPass 🔐</p>

<p align="center">
   <img src="https://img.freepik.com/vetores-premium/icone-de-desenho-animado-simples-com-cadeado-de-metal-em-branco_126267-9828.jpg" width="500" height="500" object-fit="cover"/>
</p>

##  :clipboard: Description

This is an backend aplication to controll the data flow of an website/ mobile app of restaurants, coffes review's, where the user can create your own review, and places that doesn't are already registred. Also, the user can explore different places, searching by name, best/worse rating food, attendance, environment and price. The main resposnsability this backend have is to secure the user and place data, keeping the important and sensitive infos cripted, also have to make the quickly integration and communication with database and also with the frontend. 
***

## :computer:	 Tecnolgy and Concepts 

- JWTs
- Node.js
- TypeScript
- PostgresSQL with Prisma ORM

***

## :rocket: Routes

### Users 👥

```yml
POST users/sign-up
    - Route to create new user
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremips"
}
```

```yml
POST users/sign-in
    - Route to create new user
    - headers: {}
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremips"
}
```

```yml
DELETE users/logout (autentify)
    - Route to create new user
    - headers: { "Authorization": `Bearer ${token}` }
    - body:{
        "email": "lorem@gmail.com",
        "password": "loremips"
}
```

### Credentials ®️

```yml 
POST /credentials (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {
        "title": "Lorem Ipsum",
        "password": "lorem",
        "username": "lorem ipsum",
        "url": "https://lorem.com"
    }
```

```yml 
GET /credentials (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
GET /credentials/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
DELETE /credentials/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

### Safe Notes 📝


```yml 
POST /notes (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {
        "title": "Lorem Ipsum",
        "description": "lorem",
        "username": "lorem ipsum",
        "url": "https://lorem.com"
    }
```

```yml 
GET /notes/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
GET /notes (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
DELETE /notes/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

### Cards 💳 

```yml 
POST /cards (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {
        "title": "Lorem Ipsum",
        "number": "0123456789",
        "cvc": "123",
        "type": "credit" | "debit" | "both"
    }
```

```yml 
GET /cards (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
GET /cards/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
DELETE /cards/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

### Wi-fi 🌐

```yml 
POST /wifi (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {
        "title": "Lorem ipsum",
        "name": "lorem",
        "password": "lorem123"
    }
```

```yml 
GET /wifi (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
GET /wifi/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

```yml 
DELETE /wifi/:id (autentify)
    - Route to create a new place
    - headers: { "Authorization": `Bearer $token` }
    - body: {}
```

## 🏁 Running the application locally

First, make the clone repository in your machine:

```
git clone https://github.com/lucasmartinso/projeto19-drivenpass.git
```

After, inside the folder, run the comand to install the dependencies.

```
npm install
```
Config the .env's files

To finish the process, to init the server
```
npm start or npm run dev
```
