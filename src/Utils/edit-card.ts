import { request } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const putCard = async (id: string, name: string, status: string, base64: string): Promise<any> => {
  const query = `
    mutation {
      editarCard(request: { id: "${id}", name: "${name}", status: "${status}", base64: "${base64}"}) {
        idCar
        idPhoto
        name
        status
        base64
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
    console.error('Erro ao editar card:', error);
    throw new Error('Erro ao editar card.');
  }
};