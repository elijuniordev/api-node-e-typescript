import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';

describe('Pessoas - GetAll', () => {
  let cidadeId: number | undefined = undefined;
  beforeAll(async () => {
    const resCidade = await testServer.post('/cidades').send({ nome: 'Teste' });
    cidadeId = resCidade.body;
  });

  it('Buscar todos os registros', async () => {
    const res1 = await testServer.post('/pessoas').send({
      cidadeId,
      email: 'juusoares123@gmail.com',
      nomeCompleto: 'Eli Junior',
    });
    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer.get('/pessoas').send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
