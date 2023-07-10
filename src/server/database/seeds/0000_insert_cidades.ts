import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export const seed = async (knex: Knex) => {
  const [{ count }] = await knex(ETableNames.cidade).count<[{ count: number }]>(
    '* as count'
  );
  if (!Number.isInteger(count) || Number(count) > 0) return;

  const cidadesToInsert = cidadesDeSaoPaulo.map((nomeDaCidade) => ({
    nome: nomeDaCidade,
  }));
  await knex(ETableNames.cidade).insert(cidadesToInsert);
};

const cidadesDeSaoPaulo = [
  'Osasco',
  'São Paulo',
  'Santos',
  'São Vicente',
  'Guarujá',
  'São Bernardo do Campo',
  'Santo André',
  'Barueri',
  'São Caetano do Sul',
  'Diadema',
  'Mauá',
  'Carapicuíba',
  'Cotia',
  'Itapevi',
  'Mogi das Cruzes',
  'Suzano',
  'Taboão da Serra',
  'Itapecerica da Serra',
  'Embu das Artes',
  'Embu-Guaçu',
  'Carapicuíba',
];
