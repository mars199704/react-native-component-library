import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: './src/index.ts',
    output: {
      file: 'dist/umd/index.js',
      name: 'test-ui',
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'react',
        'react-native': 'react-native',
      },
    },
    plugins: [json(), typescript()],
    external: ['react', 'react-native'],
  },
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
        sourcemap: true,
        globals: {
          react: 'react',
          'react-native': 'react-native',
        },
      },
      {
        file: 'dist/es/index.js',
        format: 'es',
        sourcemap: true,
        globals: {
          react: 'react',
          'react-native': 'react-native',
        },
      },
    ],
    plugins: [json(), typescript()],
    external: ['react', 'react-native'],
  },
]
