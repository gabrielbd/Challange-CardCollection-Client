import { request } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const deletCard = async (id: string): Promise<any> => {
    const query = `
  mutation{
    deletedCard(id: "${id}") 
  }
`;
try {
    const data = await request(API_URL, query);
    return data;
  } catch (error) {
    console.error('Erro ao deletar card:', error);
    throw new Error('Erro ao deletar card.');
  }
};