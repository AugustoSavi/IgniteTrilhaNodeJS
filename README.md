<h1 align="center"> Ignite Trilha NodeJS </h1>


<h2 align="center"> Anotações Rotas</h2>

 - Route Params => Identificadores na rota
 - Query Params => Paginação / Filtro
 - Body Params => Objetos para inserção/alteração


<h2 align="center"> Primeiro projeto com Node.js </h2>

<h3 align="center"> FinApi - Financeia </h3>

<h3 align="center"> Requisitos </h3>

- [x] Deve ser possível criar umma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível obter dados da conta do cliente
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser possível deletar uma conta
- [x] Deve ser possível retornar o balanço de uma conta

<h3 align="center"> Regras de negócio </h3>

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível buscar extrato em uma conta não existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível fazer saque em uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente
- [x] Não deve ser possível excluir uma conta não existente

<h3 align="center"> Endpoints </h3>

- Create account

```
curl --request POST \
  --url http://localhost:3333/account \
  --header 'Content-Type: application/json' \
  --data '{
	"cpf": "33333333333",
	"name": "augusto"
}'
```

- Update account

```
curl --request PUT \
  --url http://localhost:3333/account \
  --header 'Content-Type: application/json' \
  --header 'cpf: 33333333333' \
  --data '{
	"name": "augusto savi"
}'
```

- Get account

```
curl --request GET \
  --url http://localhost:3333/account \
  --header 'cpf: 33333333333'
```

- Delete account

```
curl --request DELETE \
  --url http://localhost:3333/account \
  --header 'cpf: 3333333334'
```

- Deposit in the account

```
curl --request POST \
  --url http://localhost:3333/deposit \
  --header 'Content-Type: application/json' \
  --header 'cpf: 33333333333' \
  --data '{
	"description": "deposito2",
	"amount": 2000
}'
```

- Withdraw of the account

```
curl --request POST \
  --url http://localhost:3333/withdraw \
  --header 'Content-Type: application/json' \
  --header 'cpf: 33333333333' \
  --data '{
	"amount": 200
}'
```

- Get balance account

```
curl --request GET \
  --url http://localhost:3333/balance \
  --header 'cpf: 33333333333'
```

- List statements account

```
curl --request GET \
  --url http://localhost:3333/statement \
  --header 'cpf: 33333333333'
```

- List statements account by date

```
curl --request GET \
  --url 'http://localhost:3333/statement/date?date=2021-12-14' \
  --header 'cpf: 33333333333'
```