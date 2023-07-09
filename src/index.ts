import { server } from './server/Server';
import { Knex } from './server/database/knex';

const startServer = () => {
  server.listen(process.env.PORT || 9001, () => {
    console.log(`App rodando na porta ${process.env.PORT || 9001} `);
  });
};

if (process.env.IS_LOCALHOST !== 'true') {
  Knex.migrate
    .latest()
    .then(() => {
      Knex.seed
        .run()
        .then(() => startServer())
        .catch(console.log);
    })
    .catch(console.log);
} else {
  startServer();
}
