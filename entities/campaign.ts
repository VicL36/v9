// entities/Campaign.ts
export interface Campaign {
  id: number | string;
  name: string;
  startDate?: string;
  endDate?: string;
  budget?: number;
  status?: string;
  revenue?: number;
  leads?: number;
  clicks?: number;
  sales?: number;
  platform: string;
  objective: string;
  daily_budget: number;
  duration: number;
  industry?: string | null;
  targetAudience?: string | null;
  segmentation?: string | null;
  adFormat?: string | null;
  metrics?: {
    cost: number;
    impressions: number;
    ctr: number;
    cpc: number;
  };
  dailyData?: {
    date: string;
    revenue?: number;
    clicks?: number;
    leads?: number;
    cost?: number;
  }[];
}

// Função para listar campanhas a partir da API
export async function list(): Promise<Campaign[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/campaigns`, {
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response.ok) {
      const errorMsg = await response.text().catch(() => 'Erro desconhecido');
      console.error(`Erro ${response.status} - ${response.statusText}: ${errorMsg}`);
      throw new Error(`Erro ao buscar campanhas: ${response.statusText}`);
    }
    const data: Campaign[] = await response.json();
    console.log(`Recebidas ${data?.length || 0} campanhas`);
    return data;
  } catch (error) {
    console.error("Erro na função list() de Campaign:", error);
    return [];
  }
}

// Função de inicialização (se necessária no servidor)
export async function init(): Promise<void> {
  // Implementar lógica de inicialização se necessário.
}
