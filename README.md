
# Proyecto creación de servicio REST en nodejs typescript y prisma orm

Este proyecto tiene como propósito mostrar los conceptos aprendidos durante la charla "Arquitectura orientada a servicios con nodejs, typescript y prisma orm" en la comunidad de devteam 504 
## API Reference

#### Recupera todos los estudiantes

```http
  GET /students
```

#### Recupera un estudiante

```http
  GET /students/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del estudiante   |

```http
  POST /students
```
| Body      | Type     | Description                           |
| :-------- | :------- | :--------------------------------     |
| `name`    | `string` | **Required**. Nombre del estudiante   |
| `email`   | `string` | **Required**. Correo del estudiante   |


```http
  PATCH /students/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id del estudiante   |


| Body      | Type     | Description                           |
| :-------- | :------- | :--------------------------------     |
| `status`  | `boolean`| **Required**. Estado del estudiante   |

  
## Lessons Learned

Se desarrollaron varias pruebas de conceptos como ser servicios, utilizar un orm para facilitar tareas del manejo de la capa de datos de la aplicación, hacer uso typeScript para reducir errores, ventajas al usar características modernas de javaScript.

  
## Authors

- [@astorayestas](https://www.github.com/astorayestas)

  
## Badges

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
## Installation 

Install my-project with npm

```bash 
  npm install my-project
  cd my-project
```
    
## Development

To develop this project run

```bash
  npm run dev
  npm run typescript
```

  
## Run Locally

Clone the project

```bash
  git clone https://github.com/AstorAyestas/serviciorestdevteam504.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
  npm run typescript
```

  