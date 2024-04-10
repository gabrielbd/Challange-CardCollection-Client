import { request } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const criarCard = async (name: string, base64: string): Promise<any> => {
  const query = `
    mutation {
      criarCard(request: { name: "${name}", base64: "${base64}"}) {
        idCar
        idPhoto
        name
        errors {
          errorMessage
        }
      }
    }
  `;

  try {
    const data = await request(API_URL, query);
    return data;
  } catch (error) {
    console.error('Erro ao criar card:', error);
    throw new Error('Erro ao criar card.');
  }
};