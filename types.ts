
export interface CropListing {
  id: string;
  name: string;
  farmer: string;
  location: string;
  quantity: string;
  basePrice: number;
  currentBid: number;
  qualityScore: number;
  image: string;
  verified: boolean;
}

export interface DiagnosisResult {
  disease: string;
  confidence: number;
  treatment: string;
  prevention: string;
}

export enum AppRoute {
  HOME = '/',
  DIAGNOSIS = '/diagnosis',
  AUCTION = '/auction',
  ADVISORY = '/advisory'
}
