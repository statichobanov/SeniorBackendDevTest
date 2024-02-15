/* eslint-disable */
export default {
  displayName: 'order-service',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/order-service',
  roots: ['<rootDir>', '<rootDir>/../../tests/units/order-service'],
};
