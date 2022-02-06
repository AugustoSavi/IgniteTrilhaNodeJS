<h1 align="center"> Ignite Trilha NodeJS </h1>


<h2 align="center">docker-compose commands</h2>

Rodar aplicação

```bash
sudo docker-compose up
```

Parar aplicação

```bash
sudo docker-compose down
```

Acessar container da aplicação

```bash
sudo docker exec -it rentx /bin/bash
```

Acompanhar logs da aplicação

```bash
sudo docker logs rentx -f
```

Criar migration

````bash
npm run typeorm:migrate <NameDaMigration>
```

Rodar migrations

````bash
npm run typeorm:run
```

Desfazer ultima migration

````bash
npm run typeorm:revert
```
<h2 align="center"> Schema </h2>

![db](https://xesque.rocketseat.dev/1571029149847-attachment.png)