export interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  platform: string;
  interests: string[];
  timeSlot: string;
  acceptTerms: boolean;
}

export interface TimeSlot {
  time: string;
  period: string;
}

export interface Period {
  start: number;
  end: number;
  label: string;
}

export interface StepProps {
  formData: FormData;
  onChange: (name: string, value: string | string[] | boolean) => void;
}