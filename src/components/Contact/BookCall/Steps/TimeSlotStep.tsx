import React from 'react';
import { Clock } from 'lucide-react';
import { StepProps } from '../Types';
import { Paragraph } from '../../../Typography';

interface TimeSlot {
  time: string;
  period: string;
}

interface Period {
  start: number;
  end: number;
  label: string;
}

const generateTimeSlots = (): TimeSlot[] => {
  const slots: TimeSlot[] = [];
  const periods: Period[] = [
    { start: 9, end: 12, label: 'Matin' },
    { start: 14, end: 18, label: 'Après-midi' }
  ];

  periods.forEach(period => {
    for (let hour = period.start; hour < period.end; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push({ time, period: period.label });
      }
    }
  });
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

export const TimeSlotStep: React.FC<StepProps> = ({ formData, onChange }) => {
  return (
    <div className="space-y-6">
            <Paragraph className="-mt-2 mb-10 text-center font-medium text-gray-900">
Choisissez votre créneau horaire</Paragraph>
      <div className="space-y-6">
        {['Matin', 'Après-midi'].map(period => (
          <div key={period} className="space-y-3">
            <h4 className="font-medium text-gray-700 flex items-center">
              <span className="bg-[#F6D663] w-2 h-6 rounded mr-2"></span>
              {period}
            </h4>
            <div className="grid grid-cols-4 gap-3">
              {TIME_SLOTS.filter(slot => slot.period === period).map(slot => (
                <label
                  key={slot.time}
                  className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all duration-300
                    ${formData.timeSlot === slot.time
                      ? 'border-[#2e0f84] bg-[#2e0f84] text-white shadow-lg' 
                      : 'border-gray-200 hover:border-[#F6D663] hover:shadow'
                    }`}
                >
                  <input
                    type="radio"
                    name="timeSlot"
                    value={slot.time}
                    checked={formData.timeSlot === slot.time}
                    onChange={(e) => onChange('timeSlot', e.target.value)}
                    className="sr-only"
                  />
                  <Clock 
                    size={16} 
                    className={`mr-2 ${
                      formData.timeSlot === slot.time 
                        ? 'text-white' 
                        : 'text-gray-500'
                    }`}
                  />
                  <span className="text-sm">{slot.time}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotStep;