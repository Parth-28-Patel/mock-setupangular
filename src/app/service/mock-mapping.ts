import { TGMockMapping } from '@techgrains/core';

function convertToPattern(urlTemplate: string): RegExp {
  const pattern = urlTemplate.replace(/{[^/]+}/g, '[-a-zA-Z0-9]+');
  return new RegExp(`^${pattern}$`);
}

const mock_mapping_config: TGMockMapping[] = [
  {
    uri: '/posts',
    method: 'POST',
    applyMock: true,
    httpStatus: 200,
    successFile: 'assets/mocks/login_success_response.json',
    errorFile: 'assets/mocks/common_error_response.json',
  },
  {
    uri: '/users',
    method: 'GET',
    applyMock: true,
    httpStatus: 200,
    successFile: 'assets/mocks/users/user-list.json',
    errorFile: 'assets/mocks/common_error_response.json',
  },
];

export const MOCK_MAPPINGS = mock_mapping_config.map((mapping) => {
  console.log('parth');
  if (mapping.uri.indexOf('{') > -1) {
    mapping.uriRegex = convertToPattern(mapping.uri);
  }
  return mapping;
});
