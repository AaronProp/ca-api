## BackEnd En NodeJS
### Herramientas utilizadas
- Mongo DB (Atlas)
- Express
- NodeJs
- Postman
- Nodemon

**Desarrollo del lado del servidor para la prueba tecnica del simuador de vista de ecommerce para la cadena C&A**

### Instrucciones de uso

**Para poder ejecutar correctamente el servicio es necesario clonar este repositorio e instalar las dependencias necesarias en las carpeta raiz del proyecto con npm utilizando el comando:**
~~~
npm install
~~~

**Una vez instaladas las dependencias ejecutar el index.js con node, utilizando e comando:**

~~~
node index.js
~~~
**Una vez ejecutado el comando se puede hacer el consumo del mismo desde el localhost con las siguientes url's**
- localhost:3000/products
- localhost:3000/products/:id

### Explicacion de la razon de la eleccion de cada herramienta
- Mongo DB: Debido a que es la BD recomendada primordialmente para el desarrollo. Y se utilizo la version "Atlas" por la versatilidad que ofrece al ser en la nube. No se tiene que realizar ninguna configuracion extra, ya que cuenta con accesos abiertos para las IP's que la quieran consumir.
- Express: Para agilizar el proceso de desarrollo y no crear el servicio desde cero.
- NodeJs: Para tener un codigo heterogeneo y que sea mayormente compatible con el cliente.
- Postman: Para las pruebas de los endpoints de la API.
- Nodemon: Una dependencia de desarrollo para la facilidad de reconocimiento de los cambios en el codigo y asi agilizarlo.

## Prueba del resultado (el endpoint en funcionamiento)
![imagen](https://github.com/AaronProp/ca-api/assets/72943848/f7133f01-1270-478b-9f8f-373c0932774c)
