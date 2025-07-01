import { TGConfig } from '@techgrains/core';
import { MOCK_MAPPINGS } from './mock-mapping';
import { environment } from '../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';

export const tgConfig: TGConfig = {
  applyMock: environment.applyMock,
  mockMapping: MOCK_MAPPINGS,
  baseAPI: environment.applyMock ? '' : environment.apiBaseUrl,
  errorClass: undefined,
};
