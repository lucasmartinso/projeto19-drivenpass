# projeto19-drivenpass <img src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f512.svg" width="40" height="40">

#### Remember to run: "npm i" -> to install dependencies, after pulling/cloning

### USERS ROUTER 👥

- "Criação de contas": <br />request type: POST<br />route = /users/sign-up <br />expected object: { "email": string, "password": string}<br />

- "Acesso de uma conta": <br />request type: POST<br />route = /users/sign-up <br />expected object: { "email": string, "password": string}<br />return { token: string }

- "Sair de uma conta": <br />request type: DELETE<br />route = /users/logout <br />headers.authorization: token

### CREDENTIALS ROUTER ®️

- "Criação de credenciais": <br />request type: POST<br />route = /credentials <br />expected object: { "title": string,"url": string,"username": string,"password": string}<br />headers.authorization: token

- "Busca de credenciais": <br />request type: GET<br />route = /credentials or /credentials/:id (specific credential) <br />req.params: id (specific credential)<br />headers.authorization: token

- "Deleção de credenciais": <br />request type: DELETE<br />route = /credentials/:id <br />req.params: id<br />headers.authorization: token 

### SAFE NOUTES ROUTER 📝

- "Criação de notas seguras": <br />request type: POST<br />route = /credentials <br />expected object: { "title": string, "description": string}<br />headers.authorization: token

- "Busca de notas seguras": <br />request type: GET<br />route = /credentials or /credentials/:id (specific note) <br />req.params: id (specific note)<br />headers.authorization: token

- "Deleção de notas seguras": <br />request type: DELETE<br />route = /credentials/:id <br />req.params: id<br />headers.authorization: token 

### CARDS ROUTER 💳 

- "Criação de cartões": <br />request type: POST<br />route = /cards <br />expected object: { "title": string,"number": string,"name": string,"cvc": string,"expirateDate": string,"password": string,"isVirtual": boolean,"type": enum}<br />enum: "credit" | "debit" | "both"<br />headers.authorization: token

- "Busca de cartões": <br />request type: GET<br />route = /cards or /cards/:id (specific card) <br />req.params: id (specific card)<br />headers.authorization: token

- "Deleção de cartões": <br />request type: DELETE<br />route = /cards/:id <br />req.params: id<br />headers.authorization: token 

### WI-FI ROUTER 🌐

- "Criação de wi-fi": <br />request type: POST<br />route = /wifi <br />expected object: { "title": string,"name": string,"password": string}<br />headers.authorization: token

- "Busca de wi-fi": <br />request type: GET<br />route = /wifi or /wifi/:id (specific wi-fi) <br />req.params: id (specific wi-fi)<br />headers.authorization: token

- "Deleção de wi-fi": <br />request type: DELETE<br />route = /wifi/:id <br />req.params: id<br />headers.authorization: token
 

