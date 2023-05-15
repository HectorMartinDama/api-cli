
# Api Rest CI/CD Example

Basic Api Rest deploy with CI and CD in Railway 

## ✨ Features
- Node
- CI/CD
- Jest / Supertest
- Lint
- MongoDB


## API Reference

#### Get all notes

```https
  GET /api/notes
```

#### Post new note

```https
  POST /api/newNote
```

| Content | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `nombre`      | `string` | **Required**. Name of note to create |
| `content`      | `string` | **Required**. Content of note to create 
| `important`      | `boolean` | **Required**. Default false |


#### Get health point

```https
  GET healt
```

| Content | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status` | `string` | Return "ok"

#### GET version point

```https
  GET version
```

| Content | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `status` | `string` | Return the version of the package.json



## Utils

 - [Using Github Actions with Railway](https://blog.railway.app/p/github-actions)
  - [Endpoint testing with Jest and Supertest](https://zellwk.com/blog/jest-and-mongoose/)
 - [Connecting Jest and Mongoose](https://github.com/matiassingers/awesome-readme)


[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/ZweBXA)

[![Pipeline](https://github.com/HectorMartinDama/api-cli/actions/workflows/pipeline.yml/badge.svg)](https://github.com/HectorMartinDama/api-cli/actions/workflows/pipeline.yml)

