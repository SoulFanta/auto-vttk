import { useState } from 'react';
import { Steps } from './../config';

interface IProgressBar {
  totalSteps: number,
  currentStep: number
}
const ProgressBar: React.FC<IProgressBar> = ({totalSteps, currentStep}) => {

 
  // Процент заполнения прогресс-бара
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="flex p-5 bg-linear-to-r from-amber-500 to-amber-300 rounded-2xl flex-col">
       {/* Прогресс бар */}
       <div className="h-3   bg-gray-200 rounded-full">
          {/* Активная часть полосы */}
          <div 
            className="h-full   bg-a-500 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      {/* Обертка прогресс-бара */}
      <div className="relative ">
       
        
        {/* Шаги с кружками */}
        <div className="flex justify-between relative mt-3">
          {[...Array(totalSteps)].map((_, index) => {
            const step = index + 1;
            const isCompleted = step < currentStep;
            const isActive = step === currentStep;
            
            return (
              <div key={step} className="flex flex-col items-center z-10">
                {/* Круг шага */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border-4 transition-colors duration-300
                    ${isCompleted ? 'bg-white border-white' : 
                      isActive ? 'bg-amber-400 border-white' : 
                      'bg-white border-gray-200'}`}
                >
                  {isCompleted && (
                    <svg className="w-3 h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                
                {/* Подпись шага */}
                <span className={`mt-2 text-xl font-bold ${
                  isActive || isCompleted ? 'text-white' : 'text-gray-400'
                }`}>
                  {Steps[step].name}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      
      
    </div>
  );
};

export default ProgressBar;