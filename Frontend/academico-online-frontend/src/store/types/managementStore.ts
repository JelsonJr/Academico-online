export interface IManagementStore {
  form: {
    ra: string;
    senha: string;
  }

  setForm: (newData: any) => void;
  cleanCoverageValues?: () => void;
}