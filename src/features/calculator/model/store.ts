// features/calculator/model/store.ts
import { create } from "zustand";
import { Steps } from "../config";

interface CalculatorFormData {
  departure: string;
  to: string;
  mark: string;
  model: string;
  modification: string;
  price: number;
  name: string;
  phone: string;
  email: string;
}

interface CalculatorStore {
  currentStep: number;
  totalSteps: number; 
  formData: CalculatorFormData;
  setFormData: (data: Partial<CalculatorFormData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

export const useCalculatorStore = create<CalculatorStore>((set) => ({
  currentStep: 1,
  totalSteps: Object.keys(Steps).length,
  formData: {
    departure: "",
    to: "",
    mark: "",
    model: "",
    modification: "",
    price: 0,
    name: "",
    phone: "",
    email: "",
  },
  setFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
  nextStep: () => set((state) => ({  currentStep: Math.min(state.currentStep + 1, state.totalSteps), })),
  prevStep: () => set((state) => ({  currentStep: Math.max(state.currentStep - 1, 1), })),
  reset: () => set({ currentStep: 1, formData: {
      departure: "",
      to: "",
      mark: "",
      model: "",
      modification: "",
      price: 0,
      name: "",
      phone: "",
      email: ""
  } }),
}));