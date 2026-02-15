export type Department = 'Medicine' | 'Surgery' | 'Pediatrics' | 'OBG' | 'ENT';

export interface PatientData {
  id: string;
  date: string;
  department: Department;
  demographics: {
    name: string;
    age: string;
    sex: string;
    occupation: string;
    education: string;
    maritalStatus: string;
    socioeconomicStatus: string;
    residence: string;
    dateOfAdmission: string;
  };
  chiefComplaints: {
    complaint: string;
    duration: string;
  }[];
  hpi: {
    question: string;
    answer: string;
  }[];
  pastHistory: {
    conditions: string[];
    surgicalHistory: string;
    drugHistory: string;
    allergy: string;
  };
  familyHistory: {
    conditions: string[];
  };
  personalHistory: {
    diet: string;
    appetite: string;
    sleep: string;
    bowelBladder: string;
    addictions: string[];
  };
  diagnosis: {
    provisional: string;
    differential: string[];
  };
}
