export const PUBLISHED_FEES = {
  immigration: {
    spouseVisa: { from: 1500, currency: 'GBP', note: 'Excluding Home Office fees' },
    settlement: { from: 1200, currency: 'GBP', note: 'ILR applications' },
    appeal: { from: 2000, currency: 'GBP', note: 'First-tier Tribunal' },
  },
  personalInjury: {
    roadTraffic: { fee: 'No win, no fee', note: '25% success fee cap' },
    workplaceAccident: { fee: 'No win, no fee', note: '25% success fee cap' },
  },
}
