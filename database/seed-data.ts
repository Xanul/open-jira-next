
interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: lorem ipsum prodient dolo duis et dolor laborum veniam ea laboris qui consequat',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'En Progreso: lorem ipsum prodient dolo duis et dolor laborum veniam ea laboris qui consequat',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: 'Terminada: lorem ipsum prodient dolo duis et dolor laborum veniam ea laboris qui consequat',
      status: 'finished',
      createdAt: Date.now() - 200000,
    }
  ]
}