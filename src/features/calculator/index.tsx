"use client";

import Button from "@/shared/ui/Button";
import { useCalculatorStore } from "./model/store";
import ProgressBar from "./ui/progress-bar";
import Step1 from "./ui/Step-1";
import Step2 from "./ui/Step-2";
import Step3 from "./ui/Step-3";
import Step4 from "./ui/Step-4";

export default function TransportForm() {
  const { currentStep, nextStep, prevStep, totalSteps, setFormData, reset } =
    useCalculatorStore();

  return (
    <form className="my-10 rounded-2xl  shadow-2xl " onSubmit={(e) => e.preventDefault()}>
      <ProgressBar totalSteps={totalSteps} currentStep={currentStep} />
      <div className="px-5 py-3 ">
        {currentStep == 1 && <Step1 />}
        {currentStep == 2 && <Step2 />}
        {currentStep == 3 && <Step3 />}
        {currentStep == 4 && <Step4 />}
        <p>{currentStep}</p>
        <div className="flex justify-between">
          <Button
            disabled={currentStep < 2}
            variant="outline"
            onClick={prevStep}
          >
            Назад
          </Button>
          {currentStep == totalSteps ? (
            <Button onClick={nextStep}>Отправить</Button>
          ) : (
            <Button variant="outline" onClick={nextStep}>
              Далее
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
