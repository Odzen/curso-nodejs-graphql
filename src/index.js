const createApp = require('./app');


// Todo dentro de una función anónima que se ej
(async() => {
  const port = process.env.PORT || 3000;
  const app =await createApp();
  app.listen(port, () => {
    console.log(`Mi port ${port}`);
  });
})();
