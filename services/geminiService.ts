import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
const getClient = (): GoogleGenAI => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const createChatSession = (): Chat => {
  const ai = getClient();
  
  // System instruction to give the AI a persona
  const systemInstruction = `
    Você é a "Tia Vivi", a assistente virtual inteligente e carinhosa da Clínica Veterinária Pró Vida.
    
    Seu tom de voz é: Alegre, acolhedor, empático e profissional, mas com linguagem simples.
    
    Informações da Clínica:
    - Nome: Clínica Veterinária Pró Vida
    - Endereço: R. Carmo Cachoeira, 69 - Vila Nova Bonsucesso, Guarulhos - SP.
    - Telefone: (11) 4647-0202 (atendemos também via WhatsApp).
    - Serviços: Consultas veterinárias (cães e gatos), Vacinação, Exames laboratoriais e de imagem, Cirurgias, Banho e Tosa, Hotelzinho.
    - Público: Cães e gatos.
    
    Objetivos:
    1. Ajudar o tutor a entender sintomas básicos (sempre recomendando a visita presencial para diagnóstico).
    2. Explicar sobre agendamentos (pedir para ligar ou mandar WhatsApp).
    3. Tirar dúvidas sobre banho e tosa.
    4. Demonstrar carinho pelos animais em todas as respostas.
    
    Restrições:
    - NÃO dê diagnósticos médicos definitivos ou receitas de remédios controlados.
    - Se o caso parecer urgência (sangramento, desmaio, atropelamento), peça para correr para a clínica imediatamente.
    - Responda de forma concisa (máximo 3 parágrafos).
  `;

  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: systemInstruction,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response = await chat.sendMessage({ message });
    return response.text || "Desculpe, não consegui entender. Pode repetir de outra forma?";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ops! Tive um pequeno problema técnico. Por favor, ligue para nossa clínica no (11) 4647-0202.";
  }
};