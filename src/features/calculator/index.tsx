'use client'

import { useCalculatorStore } from "./model/store";
import ProgressBar from "./ui/progress-bar";

export default function TransportForm ()  {

  const {
    currentStep,
    formData,
    nextStep,
    prevStep,
    totalSteps,
    setFormData,
    reset,
  } = useCalculatorStore();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 
        console.log('Форма отправлена без перезагрузки страницы');
      };

  return (
    <form className="py-15 " onSubmit={handleSubmit}>
        <ProgressBar totalSteps={totalSteps} currentStep={currentStep}/>

        

        <div className="flex justify-between">
          <button onClick={prevStep}>Назад</button>
          <button onClick={nextStep}>Далее</button>
        </div>
    </form>
  );
};

