import { AutoclaveType, ThermoWasherType } from '../api/api';

export interface StateLandinPage {
  dataCompany: {
    name: string;
    email: string;
    tel: string;
    cep: string;
    institutionName: string;
    cnpj: string;
    position: string;
    segment: string;
    momentEnterprise: string;
    statusClinicalEng: string;
    momentCME: string;
  };
  card: string;
  errors: {
    validate: boolean;
    snackbarError: boolean;
    firstSubmitError: string;
  };
}

export interface StateCalculator {
  surgeryRooms: string;
  icuBeds: string;
  hospitalizationBeds: string;
  surgerysPerDay: string;
  weekDaySurgery: string;
  fabricProcessing: boolean;
  instrumentsSurgery: string;
  fabricSurgery: string;
  instrumentsICU: string;
  fabricICU: string;
  instrumentsHospitalization: string;
  fabricHospitalization: string;
  cmePeakInterval: string;
  page: string;
  errors: {
    validate: boolean;
  };
}

export interface StateResult {
  machine: number;
  data: {
    autoclaves: AutoclaveType[];
    cnpj: string;
    num_autoclaves: number;
    num_thermo_washers: number;
    thermo_washers: ThermoWasherType[];
  };
}
